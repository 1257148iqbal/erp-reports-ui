// ** React Imports
// ** Third Party Components
import classnames from 'classnames';
import { Fragment, useRef, useState } from 'react';
import PerfectScrollbar from 'react-perfect-scrollbar';
// ** Vertical Menu Components
import VerticalMenuHeader from './VerticalMenuHeader';
import VerticalNavMenuItems from './VerticalNavMenuItems';

import navigation from '@src/navigation/vertical';


const Sidebar = props => {
  // ** Props
  const { menuCollapsed, routerProps, menu, currentActiveItem, skin } = props;


  // const { userPermission } = useSelector( ( { auth } ) => auth );
  // const { authPermissions } = useSelector( ( { permissions } ) => permissions );

  // ** States
  const [groupOpen, setGroupOpen] = useState( [] );
  const [groupActive, setGroupActive] = useState( [] );
  const [activeItem, setActiveItem] = useState( null );

  // ** Menu Hover State
  const [menuHover, setMenuHover] = useState( false );

  // ** Ref
  const shadowRef = useRef( null );

  // ** Function to handle Mouse Enter
  const onMouseEnter = () => {
    if ( menuCollapsed ) {
      setMenuHover( true );
    }
  };

  // ** Scroll Menu
  const scrollMenu = container => {
    if ( shadowRef && container.scrollTop > 0 ) {
      if ( !shadowRef.current.classList.contains( 'd-block' ) ) {
        shadowRef.current.classList.add( 'd-block' );
      }
    } else {
      if ( shadowRef.current.classList.contains( 'd-block' ) ) {
        shadowRef.current.classList.remove( 'd-block' );
      }
    }
  };

  return (
    <Fragment>
      <div
        className={classnames( 'main-menu menu-fixed menu-accordion menu-shadow', {
          expanded: menuHover || menuCollapsed === false,
          'menu-light': skin !== 'semi-dark' && skin !== 'dark',
          'menu-dark': skin === 'semi-dark' || skin === 'dark'
        } )}
        onMouseEnter={onMouseEnter}
        onMouseLeave={() => setMenuHover( false )}
      >
        {menu ? (
          menu( props )
        ) : (
          <Fragment>
            {/* Vertical Menu Header */}
            <VerticalMenuHeader setGroupOpen={setGroupOpen} menuHover={menuHover} {...props} />
            {/* Vertical Menu Header Shadow */}
            <div className='shadow-bottom' ref={shadowRef}></div>
            {/* Perfect Scrollbar */}
            <PerfectScrollbar
              className='main-menu-content'
              options={{ wheelPropagation: false }}
              onScrollY={container => scrollMenu( container )}
            >
              <ul className='navigation navigation-main'>
                <VerticalNavMenuItems
                  items={navigation}
                  //  items={getVerticalNavigation( userPermission, authPermissions )}

                  groupActive={groupActive}
                  setGroupActive={setGroupActive}
                  activeItem={activeItem}
                  setActiveItem={setActiveItem}
                  groupOpen={groupOpen}
                  setGroupOpen={setGroupOpen}
                  routerProps={routerProps}
                  menuCollapsed={menuCollapsed}
                  menuHover={menuHover}
                  currentActiveItem={currentActiveItem}
                />
              </ul>
            </PerfectScrollbar>
          </Fragment>
        )}
      </div>
    </Fragment>
  );
};

export default Sidebar;

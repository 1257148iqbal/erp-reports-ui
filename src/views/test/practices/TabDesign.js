import '@custom-styles/merchandising/others/custom-tab.scss';
import React, { useState } from 'react';
import { PenTool } from 'react-feather';
import { Nav, NavItem, NavLink, TabContent, TabPane } from 'reactstrap';


const TabDesign = () => {
    const [active, setActive] = useState( '1' );

    const toggle = tab => {
        if ( active !== tab ) {
            setActive( tab );
        }
    };

    return (
        <React.Fragment>
            <div style={{ backgroundColor: 'white', height: '100%' }}>
                <Nav className="custom-tab" tabs style={{ backgroundColor: '#D4E5F6' }}>
                    <NavItem  >
                        <NavLink
                            active={active === '1'}
                            onClick={() => {
                                toggle( '1' );
                            }}
                        >
                            Home
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink
                            active={active === '2'}
                            onClick={() => {
                                toggle( '2' );
                            }}
                        >
                            Service
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink
                            active={active === '3'}
                            onClick={() => {
                                toggle( '3' );
                            }}
                        >
                            Account
                        </NavLink>
                    </NavItem>
                </Nav>
                <TabContent className='py-50' activeTab={active} style={{ backgroundColor: 'white' }}>
                    <TabPane tabId='1'>
                        <p>
                            Candy canes donut chupa chups candy canes lemon drops oat cake wafer. Cotton candy candy canes marzipan
                            carrot cake. Sesame snaps lemon drops candy marzipan donut brownie tootsie roll. Icing croissant bonbon
                            biscuit gummi bears. Pudding candy canes sugar plum cookie chocolate cake powder croissant.
                        </p>
                        <p>
                            Carrot cake tiramisu danish candy cake muffin croissant tart dessert. Tiramisu caramels candy canes
                            chocolate cake sweet roll liquorice icing cupcake. Candy cookie sweet roll bear claw sweet roll.
                        </p>
                    </TabPane>
                    <TabPane tabId='2'>
                        <p>
                            Dragée jujubes caramels tootsie roll gummies gummies icing bonbon. Candy jujubes cake cotton candy. Jelly-o
                            lollipop oat cake marshmallow fruitcake candy canes toffee. Jelly oat cake pudding jelly beans brownie lemon
                            drops ice cream halvah muffin. Brownie candy tiramisu macaroon tootsie roll danish.
                        </p>
                        <p>
                            Croissant pie cheesecake sweet roll. Gummi bears cotton candy tart jelly-o caramels apple pie jelly danish
                            marshmallow. Icing caramels lollipop topping. Bear claw powder sesame snaps.
                        </p>
                    </TabPane>
                    <TabPane tabId='3'>
                        <p>
                            Gingerbread cake cheesecake lollipop topping bonbon chocolate sesame snaps. Dessert macaroon bonbon carrot
                            cake biscuit. Lollipop lemon drops cake gingerbread liquorice. Sweet gummies dragée. Donut bear claw pie
                            halvah oat cake cotton candy sweet roll. Cotton candy sweet roll donut ice cream.
                        </p>
                        <p>
                            Halvah bonbon topping halvah ice cream cake candy. Wafer gummi bears chocolate cake topping powder. Sweet
                            marzipan cheesecake jelly-o powder wafer lemon drops lollipop cotton candy.
                        </p>
                    </TabPane>
                </TabContent>
            </div>
            <div className="custom-tab2">
                <Nav tabs >
                    <NavItem  >
                        <NavLink
                            active={active === '1'}
                            onClick={() => {
                                toggle( '1' );
                            }}
                        >
                            Home
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink
                            active={active === '2'}
                            onClick={() => {
                                toggle( '2' );
                            }}
                        >
                            Service
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink
                            active={active === '3'}
                            onClick={() => {
                                toggle( '3' );
                            }}
                        >
                            Account
                        </NavLink>
                    </NavItem>
                </Nav>
                <TabContent className='py-50' activeTab={active} style={{ backgroundColor: 'white' }}>
                    <TabPane tabId='1'>
                        <p>
                            Candy canes donut chupa chups candy canes lemon drops oat cake wafer. Cotton candy candy canes marzipan
                            carrot cake. Sesame snaps lemon drops candy marzipan donut brownie tootsie roll. Icing croissant bonbon
                            biscuit gummi bears. Pudding candy canes sugar plum cookie chocolate cake powder croissant.
                        </p>
                        <p>
                            Carrot cake tiramisu danish candy cake muffin croissant tart dessert. Tiramisu caramels candy canes
                            chocolate cake sweet roll liquorice icing cupcake. Candy cookie sweet roll bear claw sweet roll.
                        </p>
                    </TabPane>
                    <TabPane tabId='2'>
                        <p>
                            Dragée jujubes caramels tootsie roll gummies gummies icing bonbon. Candy jujubes cake cotton candy. Jelly-o
                            lollipop oat cake marshmallow fruitcake candy canes toffee. Jelly oat cake pudding jelly beans brownie lemon
                            drops ice cream halvah muffin. Brownie candy tiramisu macaroon tootsie roll danish.
                        </p>
                        <p>
                            Croissant pie cheesecake sweet roll. Gummi bears cotton candy tart jelly-o caramels apple pie jelly danish
                            marshmallow. Icing caramels lollipop topping. Bear claw powder sesame snaps.
                        </p>
                    </TabPane>
                    <TabPane tabId='3'>
                        <p>
                            Gingerbread cake cheesecake lollipop topping bonbon chocolate sesame snaps. Dessert macaroon bonbon carrot
                            cake biscuit. Lollipop lemon drops cake gingerbread liquorice. Sweet gummies dragée. Donut bear claw pie
                            halvah oat cake cotton candy sweet roll. Cotton candy sweet roll donut ice cream.
                        </p>
                        <p>
                            Halvah bonbon topping halvah ice cream cake candy. Wafer gummi bears chocolate cake topping powder. Sweet
                            marzipan cheesecake jelly-o powder wafer lemon drops lollipop cotton candy.
                        </p>
                    </TabPane>
                </TabContent>
            </div>
            <div className="custom-tab3">
                <Nav tabs >
                    <NavItem  >
                        <NavLink
                            active={active === '1'}
                            onClick={() => {
                                toggle( '1' );
                            }}
                        >
                            Home
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink
                            active={active === '2'}
                            onClick={() => {
                                toggle( '2' );
                            }}
                        >
                            Service
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink
                            active={active === '3'}
                            onClick={() => {
                                toggle( '3' );
                            }}
                        >
                            Account
                        </NavLink>
                    </NavItem>
                </Nav>
                <TabContent className='py-50' activeTab={active} style={{ backgroundColor: 'white' }}>
                    <TabPane tabId='1'>
                        <p>
                            Candy canes donut chupa chups candy canes lemon drops oat cake wafer. Cotton candy candy canes marzipan
                            carrot cake. Sesame snaps lemon drops candy marzipan donut brownie tootsie roll. Icing croissant bonbon
                            biscuit gummi bears. Pudding candy canes sugar plum cookie chocolate cake powder croissant.
                        </p>
                        <p>
                            Carrot cake tiramisu danish candy cake muffin croissant tart dessert. Tiramisu caramels candy canes
                            chocolate cake sweet roll liquorice icing cupcake. Candy cookie sweet roll bear claw sweet roll.
                        </p>
                    </TabPane>
                    <TabPane tabId='2'>
                        <p>
                            Dragée jujubes caramels tootsie roll gummies gummies icing bonbon. Candy jujubes cake cotton candy. Jelly-o
                            lollipop oat cake marshmallow fruitcake candy canes toffee. Jelly oat cake pudding jelly beans brownie lemon
                            drops ice cream halvah muffin. Brownie candy tiramisu macaroon tootsie roll danish.
                        </p>
                        <p>
                            Croissant pie cheesecake sweet roll. Gummi bears cotton candy tart jelly-o caramels apple pie jelly danish
                            marshmallow. Icing caramels lollipop topping. Bear claw powder sesame snaps.
                        </p>
                    </TabPane>
                    <TabPane tabId='3'>
                        <p>
                            Gingerbread cake cheesecake lollipop topping bonbon chocolate sesame snaps. Dessert macaroon bonbon carrot
                            cake biscuit. Lollipop lemon drops cake gingerbread liquorice. Sweet gummies dragée. Donut bear claw pie
                            halvah oat cake cotton candy sweet roll. Cotton candy sweet roll donut ice cream.
                        </p>
                        <p>
                            Halvah bonbon topping halvah ice cream cake candy. Wafer gummi bears chocolate cake topping powder. Sweet
                            marzipan cheesecake jelly-o powder wafer lemon drops lollipop cotton candy.
                        </p>
                    </TabPane>
                </TabContent>
            </div>

            <React.Fragment>
                <Nav tabs>
                    <NavItem>
                        <NavLink
                            active={active === '1'}
                            onClick={() => {
                                toggle( '1' );
                            }}
                        >
                            <span><PenTool size={16}> </PenTool>Home </span>

                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink
                            active={active === '2'}
                            onClick={() => {
                                toggle( '2' );
                            }}
                        >
                            Service
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink disabled>Disabled</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink
                            active={active === '3'}
                            onClick={() => {
                                toggle( '3' );
                            }}
                        >
                            Account
                        </NavLink>
                    </NavItem>
                </Nav>
                <TabContent className='py-50' activeTab={active}>
                    <TabPane tabId='1'>
                        <p>
                            Candy canes donut chupa chups candy canes lemon drops oat cake wafer. Cotton candy candy canes marzipan
                            carrot cake. Sesame snaps lemon drops candy marzipan donut brownie tootsie roll. Icing croissant bonbon
                            biscuit gummi bears. Pudding candy canes sugar plum cookie chocolate cake powder croissant.
                        </p>
                        <p>
                            Carrot cake tiramisu danish candy cake muffin croissant tart dessert. Tiramisu caramels candy canes
                            chocolate cake sweet roll liquorice icing cupcake. Candy cookie sweet roll bear claw sweet roll.
                        </p>
                    </TabPane>
                    <TabPane tabId='2'>
                        <p>
                            Dragée jujubes caramels tootsie roll gummies gummies icing bonbon. Candy jujubes cake cotton candy. Jelly-o
                            lollipop oat cake marshmallow fruitcake candy canes toffee. Jelly oat cake pudding jelly beans brownie lemon
                            drops ice cream halvah muffin. Brownie candy tiramisu macaroon tootsie roll danish.
                        </p>
                        <p>
                            Croissant pie cheesecake sweet roll. Gummi bears cotton candy tart jelly-o caramels apple pie jelly danish
                            marshmallow. Icing caramels lollipop topping. Bear claw powder sesame snaps.
                        </p>
                    </TabPane>
                    <TabPane tabId='3'>
                        <p>
                            Gingerbread cake cheesecake lollipop topping bonbon chocolate sesame snaps. Dessert macaroon bonbon carrot
                            cake biscuit. Lollipop lemon drops cake gingerbread liquorice. Sweet gummies dragée. Donut bear claw pie
                            halvah oat cake cotton candy sweet roll. Cotton candy sweet roll donut ice cream.
                        </p>
                        <p>
                            Halvah bonbon topping halvah ice cream cake candy. Wafer gummi bears chocolate cake topping powder. Sweet
                            marzipan cheesecake jelly-o powder wafer lemon drops lollipop cotton candy.
                        </p>
                    </TabPane>
                </TabContent>
            </React.Fragment>


        </React.Fragment>
    );
};
export default TabDesign;
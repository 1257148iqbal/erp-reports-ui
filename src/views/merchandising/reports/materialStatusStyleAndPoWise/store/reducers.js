/*
  Title: Reducer for StyleSummaryBuyerAndStyleWise
  Description: Reducer for StyleSummaryBuyerAndStyleWise
  Author: Iqbal Hossain
  Date: 06-August-2022
  Modified: 06-August-2022
*/
import { mapArrayToDropdown } from '@utility/commonHelper';
import {
  BUYER_CHANGE_MATERIAL_STATUS_STYLE_AND_PO_WISE,
  FETCH_BUYER_MATERIAL_STATUS_STYLE_AND_PO_WISE,
  FETCH_INDEX_MATERIAL_STATUS_STYLE_AND_PO_WISE, FETCH_MATERIAL_STATUS_STYLE_AND_PO_WISE_BUYER_AND_STYLE_WISE,
  FETCH_PURCHASE_ORDER_BY_STYLE_ID_MATERIAL_STATUS,
  FETCH_STYLE_MATERIAL_STATUS_STYLE_AND_PO_WISE,
  LOADING,
  PURCHASE_ORDER_CHANGE_MATERIAL_STATUS,
  STYLE_CHANGE_MATERIAL_STATUS_STYLE_AND_PO_WISE
} from './actionType';

const initialState = {
  loading: false,
  materailStatusStyleAndPoWise: [],
  buyers: [],
  selectedBuyer: null,
  styles: [],
  selectedStyle: null,
  pos: [],
  selectedPos: [],
  isPosLoading: true,
  isStyleLoading: true,
  isLoadingMaterialStatus: false
};

export const materialStatusStyleAndPOWiseReducer = ( state = initialState, action ) => {
  const { type, payload } = action;
  switch ( type ) {
    case LOADING: {
      return {
        ...state,
        loading: payload
      };
    }

    case FETCH_BUYER_MATERIAL_STATUS_STYLE_AND_PO_WISE: {
      const buyerDDL = mapArrayToDropdown( payload, 'name', 'id' );
      return { ...state, buyers: buyerDDL };
    }

    case BUYER_CHANGE_MATERIAL_STATUS_STYLE_AND_PO_WISE: {
      return {
        ...state,
        selectedBuyer: payload,
        selectedStyle: null,
        styles: [],
        pos: [],
        selectedPos: [],
        isStyleLoading: true
      };
    }

    case FETCH_STYLE_MATERIAL_STATUS_STYLE_AND_PO_WISE: {
      const styleDDL = mapArrayToDropdown( payload.styles, 'styleNo', 'id' );
      return { ...state, styles: styleDDL, isStyleLoading: payload.isStyleLoading };
    }

    case STYLE_CHANGE_MATERIAL_STATUS_STYLE_AND_PO_WISE: {
      return { ...state, selectedStyle: payload, pos: [], selectedPos: [], materailStatusStyleAndPoWise: [], loading: false, isPosLoading: true };
    }

    case FETCH_PURCHASE_ORDER_BY_STYLE_ID_MATERIAL_STATUS: {
      const pos = mapArrayToDropdown( payload.pos, 'orderNumber', 'orderId' );
      return { ...state, pos, isPosLoading: payload.isPosLoading };
    }

    case PURCHASE_ORDER_CHANGE_MATERIAL_STATUS: {
      return { ...state, selectedPos: payload, materailStatusStyleAndPoWise: [], loading: false, isLoadingMaterialStatus: false };
    }

    case FETCH_MATERIAL_STATUS_STYLE_AND_PO_WISE_BUYER_AND_STYLE_WISE: {
      const metiral = [... new Set( payload?.data?.map( item => item.category ) )];
      const materialStatusWithDetails = metiral?.map( item => ( {
        category: item,
        itemDetails: payload?.data?.filter( detail => detail.category === item )
      } ) );
      return {
        ...state,
        materailStatusStyleAndPoWise: materialStatusWithDetails?.map( item => ( {
          ...item,
          isOpen: false,
          isLoading: false
        } ) ),
        isLoadingMaterialStatus: payload.isLoadingMaterialStatus
      };
    }

    case FETCH_INDEX_MATERIAL_STATUS_STYLE_AND_PO_WISE: {
      const _details = [...state.materailStatusStyleAndPoWise];
      const materialDetails = _details[payload];
      materialDetails.isOpen = !materialDetails.isOpen;
      _details[payload] = materialDetails;
      return {
        ...state,
        materailStatusStyleAndPoWise: _details
      };
    }
    default:
      return {};
  }
};

import {
  GET_PRODUCT_REQUEST,
  GET_PRODUCT_SUCCESS,
  GET_PRODUCT_FAILURE,
  GET_PRODUCT_BY_ID_REQUEST,
  GET_PRODUCT_BY_ID_SUCCESS,
  GET_PRODUCT_BY_ID_FAILURE,
} from "../constants";

export const initialState = {
  loadingProduct: false,
  errProduct: null,
  dataProduct: {},
  loadingDetailProduct: false,
  errDetailProduct: null,
  detailProduct: {},
  loadingProductLoved: false,
  errProductLoved: null,
  dataProductLoved: {},
};

export const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_PRODUCT_REQUEST:
      return {
        ...state,
        loadingProduct: true,
        errProduct: null,
        dataProduct: {},
      };
    case GET_PRODUCT_SUCCESS:
      return {
        ...state,
        loadingProduct: false,
        errProduct: null,
        dataProduct: action.data,
      };
    case GET_PRODUCT_FAILURE:
      return {
        ...state,

        loadingProduct: false,
        errProduct: action.err,
        dataProduct: {},
      };

    case GET_PRODUCT_BY_ID_REQUEST:
      console.log("re", action);
      return {
        ...state,
        loadingDetailProduct: true,
        errDetailProduct: null,
        detailProduct: {},
      };
    case GET_PRODUCT_BY_ID_SUCCESS:
      console.log("action", action);
      return {
        ...state,
        loadingDetailProduct: false,
        errDetailProduct: null,
        detailProduct: action.data,
      };
    case GET_PRODUCT_BY_ID_FAILURE:
      console.log("err", action);
      return {
        ...state,
        loadingDetailProduct: false,
        errDetailProduct: action.err,
        detailProduct: {},
      };

    default:
      return state;
  }
};

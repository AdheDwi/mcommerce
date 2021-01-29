import {
  GET_PRODUCT_REQUEST,
  GET_PRODUCT_SUCCESS,
  GET_PRODUCT_FAILURE,
} from "../constants";

export const initialState = {
  loadingProduct: false,
  errProduct: null,
  dataProduct: {},
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
        ...state,
        loadingProduct: false,
        errProduct: action.err,
        dataProduct: {},
      };

    default:
      return state;
  }
};

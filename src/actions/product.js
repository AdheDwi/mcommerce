import {
  GET_PRODUCT_REQUEST,
  GET_PRODUCT_BY_ID_REQUEST,
  GET_PRODUCT_LOVED_REQUEST,
} from "../constants";

export const getProductAction = () => ({
  type: GET_PRODUCT_REQUEST,
});

export const getProductByIdAction = (id) => ({
  type: GET_PRODUCT_BY_ID_REQUEST,
  id,
});

export const getProductLovedAction = () => ({
  type: GET_PRODUCT_LOVED_REQUEST,
});

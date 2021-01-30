import { put, call } from "redux-saga/effects";
import { getProductApi } from "../services/api";
import {
  GET_PRODUCT_SUCCESS,
  GET_PRODUCT_FAILURE,
  GET_PRODUCT_BY_ID_SUCCESS,
  GET_PRODUCT_BY_ID_FAILURE,
} from "../constants";

export function* getProductSaga() {
  const { ok, err, data } = yield call(getProductApi);

  if (ok) {
    yield put({ type: GET_PRODUCT_SUCCESS, data: data[0].data });
  } else {
    yield put({ type: GET_PRODUCT_FAILURE, err });
  }
}

export function* getProductByIdSaga(action) {
  const { ok, err, data } = yield call(getProductApi);

  if (ok) {
    yield put({
      type: GET_PRODUCT_BY_ID_SUCCESS,
      data: data[0].data.productPromo
        .filter((product) => product.id === action.id)
        .reduce((product) => product),
    });
  } else {
    yield put({ type: GET_PRODUCT_BY_ID_FAILURE, err });
  }
}

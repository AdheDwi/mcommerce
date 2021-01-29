import { put, call } from "redux-saga/effects";
import { getProductApi } from "../services/api";
import { GET_PRODUCT_SUCCESS, GET_PRODUCT_FAILURE } from "../constants";

export function* getProductSaga() {
  const { ok, err, data } = yield call(getProductApi);

  if (ok) {
    yield put({ type: GET_PRODUCT_SUCCESS, data: data[0].data });
  } else {
    yield put({ type: GET_PRODUCT_FAILURE, err });
  }
}

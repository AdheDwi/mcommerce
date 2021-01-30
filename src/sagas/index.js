import { takeLatest, all } from "redux-saga/effects";
import { getUser } from "./other";
import { getProductSaga, getProductByIdSaga } from "./product";
import {
  GET_USER_REQUEST,
  GET_PRODUCT_REQUEST,
  GET_PRODUCT_BY_ID_REQUEST,
} from "../constants";

export default function* rootSaga() {
  yield all([takeLatest(GET_USER_REQUEST, getUser)]);
  yield all([takeLatest(GET_PRODUCT_REQUEST, getProductSaga)]);
  yield all([takeLatest(GET_PRODUCT_BY_ID_REQUEST, getProductByIdSaga)]);
}

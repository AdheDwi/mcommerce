import { takeLatest, all } from 'redux-saga/effects';
import { getUser } from './other';
import { GET_USER_REQUEST } from '../constants';

export default function* rootSaga() {
  yield all([takeLatest(GET_USER_REQUEST, getUser)]);
}

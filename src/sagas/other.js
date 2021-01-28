import { put, call } from 'redux-saga/effects';
import { getUsers } from '../services/api';
import { GET_USER_SUCCESS, GET_USER_FAILURE } from '../constants';

export function* getUser() {
  const { ok, problem, data } = yield call(getUsers);

  if (ok) {
    yield put({ type: GET_USER_SUCCESS, data });
  } else {
    yield put({ type: GET_USER_FAILURE, problem });
  }
}

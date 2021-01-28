import {
  GET_USER_REQUEST,
  GET_USER_SUCCESS,
  GET_USER_FAILURE
} from '../constants';

export const initialState = {
  clickCount: 0,
  error: '',
  data: []
};

export const otherReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_USER_REQUEST:
      return {
        ...state
      };
    case GET_USER_SUCCESS:
      return {
        ...state,
        data: action.data
      };
    case GET_USER_FAILURE:
      return {
        ...state,
        error: action.problem
      };

    default:
      return state;
  }
};

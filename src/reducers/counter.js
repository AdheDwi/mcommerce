import { ADD_COUNTER, REDUCER_COUNTER } from '../constants';

export const initialState = {
  counter: 0
};

export const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_COUNTER:
      return {
        ...state,
        counter: state.counter + 1
      };
    case REDUCER_COUNTER:
      return {
        ...state,
        counter: state.counter - 1
      };

    default:
      return state;
  }
};

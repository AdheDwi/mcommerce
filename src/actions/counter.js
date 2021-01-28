import { ADD_COUNTER, REDUCER_COUNTER } from '../constants';

export const incrementCounter = () => {
  return { type: ADD_COUNTER };
};

export const decrementCounter = () => {
  return { type: REDUCER_COUNTER };
};

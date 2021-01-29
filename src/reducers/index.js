import { combineReducers } from "redux";

import { counterReducer } from "./counter";
import { otherReducer } from "./other";
import { productReducer } from "./product";

const rootReducer = combineReducers({
  counter: counterReducer,
  other: otherReducer,
  product: productReducer,
});

export default rootReducer;

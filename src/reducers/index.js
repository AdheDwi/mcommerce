import { combineReducers } from 'redux'

import { counterReducer } from './counter'
import { otherReducer } from './other'

const rootReducer = combineReducers({
  counter: counterReducer,
  other: otherReducer
})

export default rootReducer
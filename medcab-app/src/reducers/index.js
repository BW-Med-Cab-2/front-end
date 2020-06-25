//combined reducers

import { combineReducers } from 'redux';
import { userReducer } from './userReducer'
import { strainReducer } from './strainReducer'

export default combineReducers({
  userReducer,
  strainReducer
});
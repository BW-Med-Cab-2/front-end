//combined reducers

import { combineReducers } from 'redux';
import { userReducer } from './userReducer'
import { strainReducer } from './strainReducer'
import { symptomReducer } from './symptomReducer'

export default combineReducers({
  userReducer,
  strainReducer,
  symptomReducer
});
//import Actions here
import { FETCH_USER, UPDATE_USER, ADD_USER, DELETE_USER } from '../actions'

//initial state 

const initialState = {
  user: [],
  isFetchingData: false,
  isUpdated: false,
  isAdded: false,
  isDeleted: false,
}

export const userReducer = (state=initialState, action) => {
  switch(action.type){
    case FETCH_USER:
      return {
        ...state,
        user: action.payload,
        isFetchingData: true,
      }
    case ADD_USER:
      return {
        ...state,
        user:  action.payload,
        isFetchingData:false,
        isAdded: true
      }
    case UPDATE_USER:
      return {
        ...state,
        user: action.payload,
        isUpdated: true
      }
    case DELETE_USER:
      return {
        ...state, //user: action.payload ?? maybe not because deleted
        isDeleted: true
      }

    default:
      return state;
  }
};
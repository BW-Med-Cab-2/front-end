//import Actions here
import { 
  FETCH_USER_START,
  FETCH_USER_SUCCESS,
  FETCH_USER_ERROR, 
  UPDATE_USER, 
  ADD_USER, 
  DELETE_USER, 
  LOGIN_USER
} from '../actions'

//initial state 

const initialState = {
  user: {},
  isFetchingData: false,
  isUpdated: false,
  isAdded: false,
  isDeleted: false,
  error:''
}

export const userReducer = (state=initialState, action) => {
  switch(action.type){
    case LOGIN_USER:
      return {
        //deal with that in a minute
      }
    case FETCH_USER_START:
      return {
        ...state,
        isFetchingData: true,
      }
    case FETCH_USER_SUCCESS:
      return {
          ...state,
          user: action.payload,
          isFetchingData: false,
        } 
    case FETCH_USER_ERROR:
        return {
            ...state,
            error: action.payload,
            isFetchingData: false,
          }
    case ADD_USER:
      return {
        ...state,
        user: action.payload,
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
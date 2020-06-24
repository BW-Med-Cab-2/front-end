//import Actions here
import {
  LOGIN_USER_START,
  LOGIN_USER_SUCCESS, 
  LOGIN_USER_ERROR,
  FETCH_USER_START,
  FETCH_USER_SUCCESS,
  FETCH_USER_ERROR,
  ADD_USER_START,
  ADD_USER_SUCCESS,
  ADD_USER_ERROR,
  UPDATE_USER_START,
  UPDATE_USER_SUCCESS,
  UPDATE_USER_ERROR,
  DELETE_USER_START,
  DELETE_USER_SUCCESS,
  DELETE_USER_ERROR  
} from '../actions'

//initial state 

const initialState = {
  user: {},
  isLoggingIn: false,
  isLoggedIn: false,
  isFetchingData: false,
  isUpdating: false,
  isUpdated: false,
  isAdding: false,
  isAdded: false,
  isDeleting: false,
  isDeleted: false,
  error:''
}

export const userReducer = (state=initialState, action) => {
  switch(action.type){
    case LOGIN_USER_START:
      return {
        ...state,
        isLoggingIn: true,
        //deal with that in a minute
      }
    case LOGIN_USER_SUCCESS:
      return {
        ...state,
        isLoggingIn: false,
        isLoggedIn: true
          //deal with that in a minute
        }
    case LOGIN_USER_ERROR:
      return {
        ...state,
        error: action.payload,
        isLoggingIn: false,
        isLoggedIn: false
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
    case ADD_USER_START:
      return {
        ...state,
        isAdding: true
      }
    case ADD_USER_SUCCESS:
      return {
          ...state,
          user: action.payload,
          isAdded: true,
          isAdding: false
        }
    case ADD_USER_ERROR:
      return {
          ...state,
          error: action.payload,
          isAdded: false
        }
    case UPDATE_USER_START:
      return {
        ...state,
        isUpdating: true
      }
    case UPDATE_USER_SUCCESS:
      return {
         ...state,
        user: action.payload,
        isUpdated: true,
        isUpdating:false
      }
    case UPDATE_USER_ERROR:
      return {
        ...state,
        error: action.payload,
        isUpdated: false
      }
    case DELETE_USER_START:
      return {
        ...state, 
        isDeleting: true
      }
    case DELETE_USER_SUCCESS:
      return {
        ...state, 
        user: action.payload,
        isDeleting: false,
        isDeleted: true
      }
    case DELETE_USER_ERROR:
      return {
         ...state, 
         error: action.payload,
        isDeleted: false
      }
    default:
      return state;
  }
};
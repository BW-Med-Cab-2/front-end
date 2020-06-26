//import Actions here
import {
  GET_STRAIN_START,
  GET_STRAIN_SUCCESS,
  GET_STRAIN_ERROR,
  DELETE_STRAIN_START,
  DELETE_STRAIN_SUCCESS,
  DELETE_STRAIN_ERROR  
} from '../actions/actionTypes'

//initial state 

const initialState = {
  currentStrain: '',
  isFetchingData: false,
  isDeleting: false,
  isDeleted: false,
  error:''
}

export const strainReducer = (state=initialState, action) => {
  switch(action.type){
    case GET_STRAIN_START:
      return {
        ...state,
        isFetchingData: true,
      }
    case GET_STRAIN_SUCCESS:
      return {
          ...state,
          currentStrain: action.payload,
          isFetchingData: false,
        } 
    case GET_STRAIN_ERROR:
        return {
            ...state,
            error: action.payload,
            isFetchingData: false,
          }
    case DELETE_STRAIN_START:
      return {
        ...state, 
        isDeleting: true
      }
    case DELETE_STRAIN_SUCCESS:
      return {
        ...state, 
        currentStrain: action.payload,
        isDeleting: false,
        isDeleted: true
      }
    case DELETE_STRAIN_ERROR:
      return {
         ...state, 
         error: action.payload,
        isDeleted: false
      }
    default:
      return state;
  }
};
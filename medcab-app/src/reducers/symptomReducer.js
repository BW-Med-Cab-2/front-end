
import {
  FETCH_SYMPTOM_START,
  FETCH_SYMPTOM_SUCCESS,
  FETCH_SYMPTOM_ERROR,
  UPDATE_SYMPTOM_START,
  UPDATE_SYMPTOM_SUCCESS,
  UPDATE_SYMPTOM_ERROR,
  DELETE_SYMPTOM_START,
  DELETE_SYMPTOM_ERROR,
  DELETE_SYMPTOM_SUCCESS
} from '../actions/actionTypes'


const initialState = {
  symptoms: [],
  isFetchingData: false,
  isUpdating: false,
  isUpdated: false,
  isDeleting: false,
  isDeleted: false,
  error:''
}

export const symptomReducer = (state=initialState, action) => {
  switch(action.type){
    case FETCH_SYMPTOM_START:
      return {
        ...state,
        isFetchingData: true,
      }
    case FETCH_SYMPTOM_SUCCESS:
      return {
          ...state,
          symptom: action.payload,
          isFetchingData: false,
        } 
    case FETCH_SYMPTOM_ERROR:
        return {
            ...state,
            error: action.payload,
            isFetchingData: false,
          }
    case UPDATE_SYMPTOM_START:
      return {
        ...state,
        isUpdating: true
      }
    case UPDATE_SYMPTOM_SUCCESS:
      return {
         ...state,
        symptom: action.payload,
        isUpdated: true,
        isUpdating:false
      }
    case UPDATE_SYMPTOM_ERROR:
      return {
        ...state,
        error: action.payload,
        isUpdated: false
      }
    case DELETE_SYMPTOM_START:
      return {
        ...state, 
        isDeleting: true
      }
    case DELETE_SYMPTOM_SUCCESS:
      return {
        ...state, 
        symptom: action.payload,
        isDeleting: false,
        isDeleted: true
      }
    case DELETE_SYMPTOM_ERROR:
      return {
         ...state, 
         error: action.payload,
        isDeleted: false
      }
    default:
      return state;
  }
};
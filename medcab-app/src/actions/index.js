/* eslint-disable no-unused-vars */
//ACTIONS 

import { useHistory } from 'react-router-dom'
import { axiosWithAuth, axiosRegister } from '../utils/axiosWithAuth'

import { 
  LOGIN_USER_START,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_ERROR,
  ADD_USER_START,
  ADD_USER_ERROR,
  ADD_USER_SUCCESS,
  FETCH_USER_START,
  FETCH_USER_ERROR,
  FETCH_USER_SUCCESS,
  GET_STRAIN_START,
  GET_STRAIN_ERROR,
  GET_STRAIN_SUCCESS,
 
   
} from './actionTypes'




//login stuff kind of works
export const loginUser = props => dispatch => {
  const { push } = useHistory()

  dispatch({ type: LOGIN_USER_START })
    //////temps will be placed with userCheck props//////
    axiosWithAuth()
    .post('/login', `grant_type=password&username=${props.username}&password=${props.password}`, {
    })
      .then(res => {
        console.log(res.data)
        localStorage.setItem('token', res.data.access_token)
        dispatch({ type: LOGIN_USER_SUCCESS }) //what payload??
        push('/protected')
      })
      .catch(err => 
        dispatch({ type: LOGIN_USER_ERROR, payload: 'There was an error loggin in the user'  }))

}


//Find the User Dashboard (WORKS) 
export const getUser=  () => dispatch => {//get user's dashboard
  dispatch({ type: FETCH_USER_START });
  axiosWithAuth()
  .get(`/users/currentuser`,  {
    headers: {
    'Authorization': `Bearer ${window.localStorage.getItem('token')}`
    }
})
  .then(res => {
    console.log(res.data.username);
    dispatch({ type: FETCH_USER_SUCCESS, payload: res.data.username })
  })
  .catch(err =>
    console.log(err.response.message),
    dispatch({ type: FETCH_USER_ERROR, payload: 'There was an error finding the user' }))
};

//ADD USER (Create a new user) WORKS!!!
export const addUser = (newUser) => dispatch => {
  dispatch({ type: ADD_USER_START });
  axiosRegister()
  .post('/createnewuser', newUser)
    .then(response => {
      debugger
      console.log(response)
      dispatch({ type: ADD_USER_SUCCESS, payload: response }) //does it need a payload maybe take away
    })
    .catch(err => {
      dispatch({ type: ADD_USER_ERROR, payload: 'There was an error adding the user' })
    })
};

export const getStrain=  () => dispatch => {//get strain DONE!
  dispatch({ type: GET_STRAIN_START });
  axiosWithAuth()
  .get(`/users/currentuser`,  {
    headers: {
    'Authorization': `Bearer ${window.localStorage.getItem('token')}`
    }
})
  .then(res => {
    console.log(res.data.currentStrain.strain);
    dispatch({ type: GET_STRAIN_SUCCESS, payload: res.data.currentStrain.strain })
    push('/protected')
  })
  .catch(err =>
    console.log(err),
    dispatch({ type: GET_STRAIN_ERROR, payload: 'There was an error finding the user' }))
};


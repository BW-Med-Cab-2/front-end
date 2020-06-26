/* eslint-disable no-unused-vars */
//ACTIONS 

import { useEffect } from 'react'
import { axiosWithAuth, axiosRegister } from '../utils/axiosWithAuth'
import { useHistory } from 'react-router-dom'
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
  FETCH_SYMPTOM_START,
  FETCH_SYMPTOM_ERROR,
  FETCH_SYMPTOM_SUCCESS,
  UPDATE_SYMPTOM_START,
  UPDATE_SYMPTOM_ERROR,
  UPDATE_SYMPTOM_SUCCESS,
  DELETE_SYMPTOM_START,
  DELETE_SYMPTOM_SUCCESS,
  DELETE_SYMPTOM_ERROR,
  GET_STRAIN_START,
  GET_STRAIN_ERROR,
  GET_STRAIN_SUCCESS,
  DELETE_STRAIN_START,
  DELETE_STRAIN_ERROR,
  DELETE_STRAIN_SUCCESS
   
} from './actionTypes'
import axios from 'axios'


//temp username and password
const tempuser= 'bmo'
const password= 'boop'

// const strainURL

// const symptomURL

//login stuff kind of works
export const loginUser = props => dispatch => {
 

  dispatch({ type: LOGIN_USER_START })
    //////temps will be placed with userCheck props//////
    axiosWithAuth()
    .post('/login', `grant_type=password&username=${props.username}&password=${props.password}`, {
    })
      .then(res => {
        console.log(res.data)
        localStorage.setItem('token', res.data.access_token)
        this.props.history.push('/protected')
        dispatch({ type: LOGIN_USER_SUCCESS }) //payload: res.data ???
      })
      .catch(err => 
        dispatch({ type: LOGIN_USER_ERROR, payload: 'There was an error loggin in the user'  }))

}


//Find the User Dashboard (kinda works) -- need to check token
export const getUser= () => dispatch => {//get user's dashboard
  dispatch({ type: FETCH_USER_START });
  
  axiosWithAuth()
  .get(`/users/currentuser`)
  .then(res => {
    console.log(res.data);
    //setUser(res.data)
    dispatch({ type: FETCH_USER_SUCCESS, payload: res.data })
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

//get symptoms

export const getSymptoms = () => dispatch => {
  dispatch({ type: FETCH_SYMPTOM_START })
  axios
    .get('url')
    .then(res => {
      console.log(res.data); //see what axios call result is then change payload
    dispatch({//good
      type: FETCH_SYMPTOM_SUCCESS, payload: res.data })
    })
    .catch (err => {
      console.log(err.response.message)
      dispatch({
        type: FETCH_SYMPTOM_ERROR,
        payload: err.response.message //do for all
      })
    })
};

//UPDATE Symptom
export const updateSymptom = (symptom) => dispatch => { 
 
useEffect(() => {
  dispatch({ type: UPDATE_SYMPTOM_START })
  axiosWithAuth()
  .put(`url`) //update symptoms
  .then((res) => {
    console.log(res);
    dispatch({ type: UPDATE_SYMPTOM_SUCCESS, payload: res.data })
    //setSymptomUpdate(res.data) //
  })
  .catch(err => {
    dispatch({ type: UPDATE_SYMPTOM_ERROR, payload: 'There was an error updating the symptom' })
  })
})//may need id in dependancy array
};

//DELETE Symptom

export const deleteSymptom = symptom => dispatch => {
  const {push} = useHistory ();
  dispatch({ type: DELETE_SYMPTOM_START })
  // make a delete request to delete this user
  axiosWithAuth()
    .delete(`url${symptom.id}`) //
    .then(res => {
      console.log('symptom deleted', res)
      dispatch({ type: DELETE_SYMPTOM_SUCCESS, payload: {} }) //paylod gives empty object
      push('/dashboard') //push to the dashboard page
    })
    .catch(err => 
      dispatch({ type: DELETE_SYMPTOM_ERROR, payload: 'There was an error deleting the symptom' }))
};


//Get strain
export const symptomSubmit = e => dispatch => {
  e.preventDefault()
dispatch({ type: GET_STRAIN_START })

  axios.get(`https://medcab2.herokuapp.com/otherapis/strainmodel/${e.symValues}`, 
      {
          headers: {
          'Authorization': `Bearer ${window.localStorage.getItem('token')}`
          }
      }
      )
      .then(res=> 
        console.log(res),
        dispatch({ type: GET_STRAIN_SUCCESS, payload: e.res })
        )
      .catch(err => 
        console.log(err),
        dispatch({ type: GET_STRAIN_ERROR, payload: e.err.response.message })
        )
}


//Delete Strain
export const deleteStrain = strain => dispatch => {
  dispatch({ type: DELETE_STRAIN_START })
  // make a delete request to delete this user
  axiosWithAuth()
    .delete(`url/${strain.id}`) 
    .then(res => {
      console.log('strain deleted', res)
      dispatch({ type: DELETE_STRAIN_SUCCESS, payload: {} }) //paylod gives empty object
    })
    .catch(err => 
      dispatch({ type: DELETE_STRAIN_ERROR, payload: 'There was an error deleting the strain' }))
};




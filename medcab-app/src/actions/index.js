//ACTIONS 

import { useEffect } from 'react'
import { axiosWithAuth } from '../utils/axiosWithAuth'
import { useHistory } from 'react-router-dom'

//Login .get 
export const LOGIN_USER_START = 'LOGIN_USER_START'; 
export const LOGIN_USER_SUCCESS = 'LOGIN_USER_SUCCESS'; 
export const LOGIN_USER_ERROR = 'LOGIN_USER_ERROR'; 

//Fetch user .get
export const FETCH_USER_START = 'FETCH_USER_START'; 
export const FETCH_USER_SUCCESS = 'FETCH_USER_SUCCESS'; 
export const FETCH_USER_ERROR = 'FETCH_USER_ERROR'; 

//Add user .post
export const ADD_USER_START = 'ADD_USER_START'; 
export const ADD_USER_SUCCESS = 'ADD_USER_SUCCESS'; 
export const ADD_USER_ERROR = 'ADD_USER-ERROR'; 

//Update user .put
export const UPDATE_USER_START = 'UPDATE_USER_START'; 
export const UPDATE_USER_SUCCESS = 'UPDATE_USER_SUCCESS'; 
export const UPDATE_USER_ERROR = 'UPDATE_USER_ERROR'; 

// delete user .delete
export const DELETE_USER_START = 'DELETE_USER_START'; 
export const DELETE_USER_SUCCESS = 'DELETE_USER_SUCCESS'; 
export const DELETE_USER_ERROR = 'DELETE_USER_ERROR'; 

// get strain
export const GET_STRAIN_START = 'GET_STRAIN_START';
export const GET_STRAIN_SUCCESS = 'GET_STRAIN_SUCCESS';
export const GET_STRAIN_ERROR = 'GET_STRAIN_ERROR';

//delete strain
export const DELETE_STRAIN_START = 'DELETE_STRAIN_START';
export const DELETE_STRAIN_SUCCESS = 'DELETE_STRAIN_SUCCESS';
export const DELETE_STRAIN_ERROR = 'DELETE_STRAIN_ERROR';

//temp username and password
const tempUser= 'tempuser'
const tempPass= 'password'



//login stuff
export const loginUser = () => dispatch => {
 //401 error

  dispatch({ type: LOGIN_USER_START })
    //////temps will be placed with userCheck props//////
    axiosWithAuth()
    .post('/login/', `grant_type=password&username=${tempUser}&password=${tempPass}`, {
      headers: {
        // btoa is converting our client id/client secret into base64
        Authorization: `Basic ${btoa('lambda-client:lambda-secret')}`,
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    })
      .then(res => {
        console.log(res.data)
        localStorage.setItem('token', res.data.access_token)
        this.props.history.push('/users')
        dispatch({ type: LOGIN_USER_SUCCESS }) //payload: res.data ???
      })
      .catch(err => 
        dispatch({ type: LOGIN_USER_ERROR, payload: 'There was an error loggin in the user'  }))

}


//Find the User Dashboard
export const getUser= (user) => dispatch => {//get user's dashboard
  dispatch({ type: FETCH_USER_START });
  
  axiosWithAuth()
  .get(`/users/${user}`)
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
  axiosWithAuth()
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

//UPDATE User

export const updateUser = (user) => dispatch => { 
  //const [ userUpdate, setUserUpdate ] =  useState(initialUserForm) //set initial user values up top
useEffect(() => {
  dispatch({ type: UPDATE_USER_START })
  axiosWithAuth()
  .put(`/users/${user.id}`) //
  .then((res) => {
    console.log(res);
    dispatch({ type: UPDATE_USER_SUCCESS, payload: res.data })
    //setUserUpdate(res.data) //
  })
  .catch(err => {
    dispatch({ type: UPDATE_USER_ERROR, payload: 'There was an error updating the user' })
  })
})//may need id in dependancy array
};

//DELETE User

export const deleteUser = user => dispatch => {
  const {push} = useHistory ();
  dispatch({ type: DELETE_USER_START })
  // make a delete request to delete this user
  axiosWithAuth()
    .delete(`/users/${user.id}`) //user or setUser or setEditUser ???
    .then(res => {
      console.log('user deleted', res)
      dispatch({ type: DELETE_USER_SUCCESS, payload: {} }) //paylod gives empty object
      push('/') //push to the main page
    })
    .catch(err => 
      dispatch({ type: DELETE_USER_ERROR, payload: 'There was an error deleting the user' }))
};


//Get strain
export const getStrain= () => dispatch => {//get strain
  dispatch({ type: GET_STRAIN_START })
  axiosWithAuth()
  .get(`url`)
  .then(res => {
    console.log(res.data);
    //setStrain(res.data)
    dispatch({ type: GET_STRAIN_SUCCESS, payload: res.data })
  })
  .catch(err =>
    console.log(err.response.message),
    dispatch({ type: GET_STRAIN_ERROR, payload: 'There was an error finding the strain' }))
};


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
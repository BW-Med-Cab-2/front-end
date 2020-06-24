//ACTIONS 


import { useState, useEffect } from 'react'
import { axiosWithAuth } from '../utils/axiosWithAuth'
import { useHistory } from 'react-router-dom'

export const FETCH_USER = 'FETCH_USER'; // .get request to find the user (added)
export const ADD_USER = 'ADD_USER'; // .post request to add a user (added)
export const UPDATE_USER = 'UPDATE_USER'; // .put to update the user
export const DELETE_USER = 'DELETE_USER'; // .delete the user


//////Initial Values//////
const initialUserForm = {
  name:'',
  age:''
}


//Find the User Dashboard
export const getUser= (user) => dispatch => {//get user's dashboard
  dispatch({ type: FETCH_USER });
  axiosWithAuth()
  .get(`/users/${user}`)
  .then(res => {
    console.log(res.data);
    //setUser(res.data)
    dispatch({ type: FETCH_USER, payload: res.data })
  })
  .catch(err =>
    console.log('There was an error finding the user', err.message));
};

//ADD USER (Create a new user)
export const addUser = (user) => dispatch => {
  dispatch({ type: ADD_USER });
  axiosWithAuth()
  .post(`/createnewuser/${user}`, {
    name: user.name,
    age: user.age,
    //fix this later to actual user form initial values
  })
  .then((res) => {
    //setUser(res.data);
    console.log('Added new user', res.data);
    dispatch({ type: ADD_USER, payload: res.data}) //set payload after completing form
  }) //end then
 .catch(err =>
  console.log('There was an error adding the user', err.message));
};

//UPDATE User

export const updateUser = (user) => dispatch => { //should it be props or user...???
  //const [ updateUser, setUpdateUser ] =  useState(initialUserForm) //set initial user values up top
useEffect(() => {
  dispatch({ type: UPDATE_USER })
  axiosWithAuth()
  .put(`/users/${user.id}`, updateUser)
  .then((res) => {
    console.log(res);
    dispatch({ type: UPDATE_USER, payload: res.data })
    //setUpdateUser(res.data) //or ser it to update the setUser state ????
  })
  .catch(err => {
    console.log('There was an error updating the user', err)
  })
}, [])//may need id in dependancy array
};

//DELETE User

export const deleteUser = user => dispatch => {
  const {push} = useHistory ();
  dispatch({ type: DELETE_USER })
  // make a delete request to delete this user
  axiosWithAuth()
    .delete(`/users/${user.id}`, user) //user or setUser or setEditUser ???
    .then(res => {
      console.log('user deleted', res)
      dispatch({ type: DELETE_USER, payload: {} }) //paylod gives empty object
      push('/') //push to the main page
    })
    .catch(err => console.log(err))
};

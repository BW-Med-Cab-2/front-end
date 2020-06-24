//ACTIONS 


import React, {useState, useEffect } from 'react'
import { axiosWithAuth } from '../utils/axiosWithAuth'

export const FETCH_USER = 'FETCH_USER'; // .get request to find the user (added)
export const ADD_USER = 'ADD_USER'; // .post request to add a user (added)
export const UPDATE_USER = 'UPDATE_USER'; // .put to update the user
export const DELETE_USER = 'DELETE_USER'; // .delete the user

//Find the User Dashboard
export const getUser= () => dispatch => {
  //dispatch({ type: FETCH_USER });
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

//ADD USER
export const addUser = (user) => dispatch => {
  dispatch({ type: ADD_USER });
  axiosWithAuth()
  .post(`/users/${user}`, {
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

const updateUser = (props) => {
  const [ updateUser, setUpdateUser ] =  useState(initialValues)
useEffect(() => {
  axiosWithAuth()
  .put(`/users/${user.id}`)
  .then((res) => {
    console.log(res);
    setUpdateUser(res.data) //or ser it to update the setUser state ????
  })
  .catch(err => {
    console.log('There was an error updating the user', err)
  })
}, [id])
};

//DELETE User

const deleteUser = user => {
  // make a delete request to delete this user
  axiosWithAuth()
    .delete(`/users/${user.id}`, user) //user or setUser or setEditUser ???
    .then(res => {
      console.log(res)
      updateColors(colors.filter( color => {
        return color.id !== res.data
      }))
    })
    .catch(err => console.log(err.response.message))
};

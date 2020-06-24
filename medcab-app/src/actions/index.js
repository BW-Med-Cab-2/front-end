//ACTIONS

import axios from 'axios';

export const FETCH_USER = 'FETCH_USER'; // .get request to find the user
export const ADD_USER = 'ADD_USER'; // .post request to add a user
export const UPDATE_USER = 'UPDATE_USER'; // .put to update the user
export const DELETE_USER = 'DELETE_USER'; // .delete the user

//Find the User Dashboard
export const getUser= () => dispatch => {
  //dispatch({ type: FETCH_USER });
  axios
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
  axios
  .post(`/users/${user}`, {
    name: user.name,
    age: user.age,
  })
  .then((res) => {
    //setUser(res.data);
    console.log('Added new user', res.data);
    dispatch({ type: ADD_USER, payload: res.data}) //set payload after completing form
  }) //end then
 .catch(err =>
  console.log('There was an error adding the user', err.message));
};
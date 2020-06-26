/* eslint-disable no-unused-vars */
import axios from 'axios';

export const axiosWithAuth = () => {
  const token = window.localStorage.getItem('token');
  return axios.create({
    headers: {
      Authorization: `Basic ${btoa('lambda-client:lambda-secret')}`,
      'Content-Type': 'application/x-www-form-urlencoded'
    },

    baseURL:'https://medcab2.herokuapp.com/'
  });
}

export const axiosRegister = () => {
  //get token
  const token = window.localStorage.getItem('token');

  //create new Instance
  return axios.create({
    headers: {
      authorization: token
    },

    baseURL:'https://medcab2.herokuapp.com/'
  });
}
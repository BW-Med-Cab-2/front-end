import Axios from 'axios';

export const axiosWithAuth = () => {
  //get token
  const token = window.localStorage.getItem('token');

  //create new Instance
  return Axios.create({
    headers: {
      authorization: token
    },

    baseURL:'https://medcab2.herokuapp.com/'
  });
}
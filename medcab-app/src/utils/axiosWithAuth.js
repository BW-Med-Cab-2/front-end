import Axios from 'axios';

export const axiosWithAuth = () => {
  const token = window.localStorage.getItem('token');
  return Axios.create({
    headers: {
      authorization: token
    },

    baseURL:'https://medcab2.herokuapp.com/'
  });
}
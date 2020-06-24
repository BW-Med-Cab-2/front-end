/* eslint-disable no-unused-vars */
//Import List//
import React, { useState, useEffect } from 'react';
import '../styles/App.css';
import { Switch, Route } from 'react-router-dom'
import { ContainerDiv } from '../styles/styled'
import AppNav from './AppNav'
import Home from './Home'
import Login from './Login'
import Register from './Registration';
import axios from 'axios'
import * as Yup from 'yup'
import loginSchema from '../validation/loginSchema'
import registerSchema from '../validation/registerSchema'
import Dashboard from './Dashboard'
import Questions from './Questions';

import { connect } from 'react-redux';
import { getUser, addUser, loginUser } from '../actions'
import { axiosWithAuth } from '../utils/axiosWithAuth';

//////Initial Values//////
const initialLogin = {
  username:'',
  password:''
}
const initialRegister = {
  username:'',
  primaryemail:'',
  password:''
}
const initialErrors = {
  username: '',
  primaryemail: '',
  password: ''
}
const initialDisable = true

const tempUser= 'tempuser'
const tempPass= 'password'
function App(props) {
  //////Use States//////
  const [ login, setLogin ] = useState(initialLogin)
  const [ register, setRegister ] = useState(initialRegister)
  const [ disable, setDisable ] = useState(initialDisable)
  const [ errors, setErrors ] = useState(initialErrors)
  const [users, setUsers] = useState() //user state

  //////Login Handlers//////
  const loginHandler = e => {
    const {name, value} = e.target
    
    Yup
    .reach(loginSchema, name)
    .validate(value)
    .then(valid => {
      setErrors({
        ...errors,
        [name]: ""
      })
    })
    .catch(err => {
      setErrors({
        ...errors,
        [name]: err.errors[0]
      })
    })
    setLogin({
      ...login,
      [name]: value
    })
  }
  const logSubmitHandler = e => {
    e.preventDefault()

    const userCheck = {
      username: login.username.trim(),
      password: login.password.trim()
    }

    props.loginUser()
     
    setLogin(initialLogin)
      
    //                             //////temps will be placed with userCheck props//////
    // axiosWithAuth()
    // .post('/login', `grant_type=password&username=${tempUser}&password=${tempPass}`, {
    //   headers: {
    //     // btoa is converting our client id/client secret into base64
    //     Authorization: `Basic ${btoa('lambda-client:lambda-secret')}`,
    //     'Content-Type': 'application/x-www-form-urlencoded'
    //   }
    // })
    //   .then(res => {
    //     console.log(res.data.access_token)
    //     localStorage.setItem('token', res.data.access_token)
    //     this.props.history.push('/users')
    //   })
    //   .catch(err => console.dir(err))
    //   .finally(() => {
    //     setLogin(initialLogin)
    //   })
  }

  //////Registration Handlers//////
  const registerHandler = e => {
    const {name, value} = e.target
   
    Yup
    .reach(registerSchema, name)
    .validate(value)
    .then(valid => {
      setErrors({
        ...errors,
        [name]: ""
      })
    })
    .catch(err => {
      setErrors({
        ...errors,
        [name]: err.errors[0]
      })
    })
    setRegister({
      ...register,
      [name]: value
    })
  }
  const regSubmitHandler = e => {
    e.preventDefault()
    console.log('Confirmation you got here')
    const newUser = {
      username: register.username.trim(),
      primaryemail: register.primaryemail.trim(),
      password: register.password.trim()
    }

    props.addUser(newUser)
    setRegister(initialRegister)
// add a new User (Register)
    // axiosWithAuth()
    // .post('/createnewuser', newUser)
    //   .then(response => {
    //     debugger
    //     console.log(response)
    //   })
    //   .catch(error => {
    //     console.log(error)
    //   })
    //   .finally(() => {
    //     setRegister(initialRegister)
    //   })
  }

  //////UseEffects for Login and Register//////
  useEffect(() => {
    loginSchema.isValid(login).then(valid => {
      setDisable(!valid);
    })
  }, [login])
  useEffect(() => {
    registerSchema.isValid(register).then(valid => {
      setDisable(!valid);
    })
  }, [register])

  return (
    <ContainerDiv>
      <AppNav />
      <Switch>
        <Route path='/protected' component={Dashboard} >
        </Route>

        <Route path='/login'>
          <Login
            component={Login}
            onInput={loginHandler}
            onSubmit={logSubmitHandler}
            disabled={disable}
            login={login}
            errors={errors}
            />
        </Route>

        <Route path='/register'>
          <Register
          component={Register}
          onInput={registerHandler}
          onSubmit={regSubmitHandler}
          disabled={disable}
          register={register}
          errors={errors} />
        </Route>

        <Route path='/tempform'>
          <Questions />
        </Route>

        <Route path='/'>
          <Home />
        </Route>
      </Switch>
    </ContainerDiv>
  );
}

//make sure this is correct ... do I need mSTP
// const mSTP = state => {
//     return {
//         user: state.user,
//         isAdded: state.is Added,
//         isFetchingData: state.isFetchingData
//     }
// }


export default connect(null, {getUser, addUser, loginUser}) (App);

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
  email: '',
  password: ''
}
const initialDisable = true


function App() {
  //////Use States//////
  const [ login, setLogin ] = useState(initialLogin)
  const [ register, setRegister ] = useState(initialRegister)
  const [ disable, setDisable ] = useState(initialDisable)
  const [ errors, setErrors ] = useState(initialErrors)

  //////Axios Get & Post Requests//////


  //////Event Handlers//////
  //!!TO DO 1!!Build schemas and import//
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
  const onSubmit = e => {
    e.preventDefault()

    const newUser = {
      username: register.username.trim(),
      email: register.email.trim(),
      password: register.password.trim()
    }

    //TO DO 3!!Invoke axios post//
  }

  //TO DO 2!!Implement useEffect for form-disables//

  return (
    <ContainerDiv>
      <AppNav />
      <Switch>
        <Route path='/dashboard' 
        />

        <Route path='/login' 
        component={Login}
        disabled={disable}
        login={login}
        />

        <Route path='/register' 
        component={Register}
        disabled={disable}
        register={register}
        />
        <Route path='/' component={Home} />
      </Switch>
    </ContainerDiv>
  );
}

export default App;

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
  password: '',
}
const initialDisable = true

const initialSymptoms= [
  {name:'Symptom 1',value:''},
  {name:'Symptom 2',value:''},
  {name:'Symptom 3',value:''},
  {name:'Symptom 4',value:''},
  {name:'Symptom 5',value:''}
]


function App(props) {
  //////Use States//////
  const [ login, setLogin ] = useState(initialLogin)
  const [ register, setRegister ] = useState(initialRegister)
  const [ disable, setDisable ] = useState(initialDisable)
  const [ errors, setErrors ] = useState(initialErrors)
  const [ symptoms, setSymptoms ] = useState(initialSymptoms)
  const [ dashboard, setDashboard ] = useState({})
  //Questions handelers
  const symptomSubmit = e => {
    e.preventDefault()
    const symValues = symptoms.filter(symptom => symptom.value.length > 0)
                                .map(symptom => symptom.value)
                                .join(', ')
    //Get the resulting strain from endpoint
    axios.get(`https://medcab2.herokuapp.com/otherapis/strainmodel/${symValues}`, 
        {
            headers: {
            'Authorization': `Bearer ${window.localStorage.getItem('token')}`
            }
        }
        )
        .then(res => 
          //we need to fix this because it is being dumb
          setDashboard(res.data.currentStrain),
          console.log(dashboard)

        )
        .catch(err => console.log(err))
        .finally(()=> setSymptoms(initialSymptoms))
}

  const symptomHandler = e => {
    const {name, value} = e.target
    const symptomIndex = symptoms.findIndex(element => element.name === name )
    let updatedSymptoms = [...symptoms]
    updatedSymptoms[symptomIndex] = {...updatedSymptoms[symptomIndex], value: value}
    setSymptoms(updatedSymptoms)
  } 


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

    props.loginUser(userCheck)
     
    setLogin(initialLogin)

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
    const newUser = {
      username: register.username.trim(),
      primaryemail: register.primaryemail.trim(),
      password: register.password.trim()
    }

    props.addUser(newUser)
    setRegister(initialRegister)

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
        
      <Route exact path="/protected" component={Dashboard} /> 

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
          <Questions 
            onInput={symptomHandler}
            onSubmit={symptomSubmit}
            symptoms={symptoms}
          />
        </Route>

        <Route exact path='/'>
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

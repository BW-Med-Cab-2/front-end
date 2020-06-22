import React from 'react';
import '../styles/App.css';
import { Switch, Route } from 'react-router-dom'
import { ContainerDiv } from '../styles/styled'
import AppNav from './AppNav'
import Home from './Home'
import Login from './Login'
import Register from './Registration';

function App() {
  return (
    <ContainerDiv>
      <AppNav />
      <Switch>
        <Route path='/dashboard' />
        <Route path='/login' component={Login}/>
        <Route path='/register' component={Register}/>
        <Route path='/' component={Home} />
      </Switch>
    </ContainerDiv>
  );
}

export default App;

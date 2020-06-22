import React from 'react';
import '../styles/App.css';
import { Switch, Route } from 'react-router-dom'
import { ContainerDiv } from '../styles/styled'
import AppNav from './AppNav'
import Home from './Home'

function App() {
  return (
    <ContainerDiv>
      <AppNav />
      <Switch>
        <Route path='/dashboard' />
        <Route path='/login' />
        <Route path='/register' />
        <Route path='/' component={Home} />
      </Switch>
    </ContainerDiv>
  );
}

export default App;

import React from 'react'
import { BrowserRouter, Switch, Route, Redirect, Link } from 'react-router-dom'

import Login from './containers/Login'
import Signup from './containers/Signup'
import Dashboard from './containers/Dashboard'

import styled, { keyframes } from 'styled-components'

// Styled Components
const AppWrapper = styled.div`

`
const AppHeader = styled.div`
  height: 65px;
  background-size: cover;
  width: 100%;
  font-size: 25px;
  text-align: left;
  margin-top: 0;
  border-bottom: 3px solid black;
`
const AppTitle = styled.h1`
  font-weight: 700;
  color: black;
  margin-top: 0;
  padding-top: 10px;
  padding-left: 38px;
  font-size: 48px;
`

export default (
  <AppWrapper>
    <AppHeader>
      <AppTitle>Out There</AppTitle>
    </AppHeader>

      <BrowserRouter>
        <Switch id='routes'>
          <Route exact path='/' render={ () => loggedIn() ? <Redirect to="/dashboard"/> : <Redirect to="/login"/> }/>
          <Route exact path='/dashboard' render={ () => loggedIn() ? <Dashboard/> : <Redirect to="/login"/> }/>
          <Route path='/signup' component={ () => loggedIn() ? <Redirect to="/"/> : <Signup/> }/>
          <Route path='/login' component={ () => loggedIn() ? <Redirect to="/"/> : <Login/> }/>
          <Route path='/logout' component={ () => logout() }/>
        </Switch>
      </BrowserRouter>
  </AppWrapper>
)

const loggedIn = () => !!sessionStorage['jwt']

const logout = () => {
  if(sessionStorage['jwt']) sessionStorage.removeItem('jwt')

  return <Redirect to="/login"/>
}

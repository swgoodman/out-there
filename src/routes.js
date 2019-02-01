import React from 'react'
import { BrowserRouter, Switch, Route, Redirect, Link } from 'react-router-dom'

import Login from './containers/login'
import Signup from './containers/signup'
import IdeaList from './containers/ideaList'

import styled, { keyframes } from 'styled-components'

const AppWrapper = styled.div`
  text-align: center;
`

const AppHeader = styled.div`
background-image: url("https://images.unsplash.com/photo-1497897271578-5f45bb7a8400?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=ca4bbe5e61a473ddb32bac5eab4107c6&auto=format&fit=crop&w=1500&q=80");
height: 100px;
background-size: cover;
width: 100%;
align-items: center;
justify-content: center;
font-size: 25px;
color: white;
padding: 20px;
`

const AppTitle = styled.h1`
  font-weight: 900;
`

export default (
  <AppWrapper>
    <AppHeader>
      <AppTitle>Out There</AppTitle>
    </AppHeader>

    <BrowserRouter>
      <Switch id='routes'>
        <Route exact path='/' render={ () => loggedIn() ? <IdeaList/> : <Redirect to="/login"/> }/>
        <Route path='/signup' component={ () => loggedIn() ? <Redirect to="/"/> : <Signup/> }/>
        <Route path='/login' component={ () => loggedIn() ? <Redirect to="/"/> : <Login/> }/>
        <Route path='/logout' component={ () => logout() }/>
        <Route path='/ideas' component={ () =>  loggedIn() ? <IdeaList/> : <Redirect to="/login"/> }/>
      </Switch>
    </BrowserRouter>
  </AppWrapper>
)

const loggedIn = () => !!sessionStorage['jwt']

const logout = () => {
  if(sessionStorage['jwt']) sessionStorage.removeItem('jwt')

  return <Redirect to="/login"/>
}

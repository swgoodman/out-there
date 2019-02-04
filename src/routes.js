import React from 'react'
import { BrowserRouter, Switch, Route, Redirect, Link } from 'react-router-dom'

import Login from './containers/Login'
import Signup from './containers/signup'
import IdeaList from './containers/IdeaList'
import Dashboard from './containers/Dashboard'

import styled, { keyframes } from 'styled-components'


const AppWrapper = styled.div`

`

const AppHeader = styled.div`
  /* background-image: url("https://images.unsplash.com/photo-1433740944490-b669cb8b1c44?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2555&q=80"); */
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

const StyledDeco = styled.img`
  position: fixed;
  top: 100px;
  left: 90px;
  width: 700px;
`

const StyledPool = styled.img`
  position: fixed;
  top: 350px;
  right: 190px;
  width: 400px;
`

const StyledBeach = styled.img`
  position: fixed;
  top: 500px;
  left: 90px;
  width: 200px;
`

const StyledDesert = styled.img`
  position: fixed;
  top: 140px;
  right: 140px;
  width: 400px;
`

const StyledDrive = styled.img`
  position: fixed;
  top: 320px;
  right: 90px;
  width: 200px;
`

export default (
  <AppWrapper>
    <AppHeader>
      <AppTitle>Out There</AppTitle>
    </AppHeader>

          <StyledDesert src="https://media.giphy.com/media/YwnJuz1Y86mxq/giphy.gif"/>
          <StyledDeco src="https://media.giphy.com/media/hIe8XwpTV5RL2/giphy.gif"/>
          <StyledPool src="https://media.giphy.com/media/3oEduVMZDy6LVTIV1K/giphy.gif"/>
          <StyledDrive src="https://media.giphy.com/media/3ohhwIPm1P7rhYLuxy/giphy.gif"/>

      <BrowserRouter>
        <Switch id='routes'>
          <Route exact path='/' render={ () => loggedIn() ? <Redirect to="/dashboard"/> : <Redirect to="/login"/> }/>
          <Route exact path='/dashboard' render={ () => loggedIn() ? <Dashboard/> : <Redirect to="/login"/> }/>
          <Route path='/signup' component={ () => loggedIn() ? <Redirect to="/"/> : <Signup/> }/>
          <Route path='/login' component={ () => loggedIn() ? <Redirect to="/"/> : <Login/> }/>
          <Route path='/logout' component={ () => logout() }/>
          <Route path='/ideas/:title' component={ () =>  loggedIn() ? <IdeaList/> : <Redirect to="/login"/> }/>
          <Route path='/new-board' component={ () => <div /> }/>
          <Route path='/dashboard' component={ () => <div /> }/>
        </Switch>
      </BrowserRouter>
  </AppWrapper>
)

const loggedIn = () => !!sessionStorage['jwt']

const logout = () => {
  if(sessionStorage['jwt']) sessionStorage.removeItem('jwt')

  return <Redirect to="/login"/>
}

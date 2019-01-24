import React from 'react'
import { BrowserRouter, Switch, Route, Redirect, Link } from 'react-router-dom'

import Login from './containers/login'
import Signup from './containers/signup'
import IdeaList from './containers/ideaList'

export default (
  <BrowserRouter>
    <Switch id='routes'>
      <Route exact path='/' render={ () => loggedIn() ? <IdeaList/> : <Redirect to="/login"/> }/>
      <Route path='/signup' component={ () => loggedIn() ? <Redirect to="/"/> : <Signup/> }/>
      <Route path='/login' component={ () => loggedIn() ? <Redirect to="/"/> : <Login/> }/>
      <Route path='/logout' component={ () => logout() }/>
      <Route path='/ideas' component={ () =>  loggedIn() ? <IdeaList/> : <Redirect to="/login"/> }/>
    </Switch>
  </BrowserRouter>
)

const loggedIn = () => !!sessionStorage.getItem('user_id')

const logout = () => {
  if(sessionStorage['user_id']) sessionStorage.removeItem('user_id')

  return <Redirect to="/login"/>
}

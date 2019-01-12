import React from 'react'
import { BrowserRouter, Switch, Route, Redirect, Link } from 'react-router-dom'

import IdeaList from './containers/IdeaList'

export default (
  <BrowserRouter>
    <Switch id='routes'>
      <Route exact path='/' render={ () => <IdeaList /> } />/>
    </Switch>
  </BrowserRouter>
)

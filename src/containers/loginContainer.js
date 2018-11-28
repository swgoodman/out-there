import React, { Component } from 'react'
import Login from '../components/loginInput.js'
import { connect } from 'react-redux'

class LoginContainer extends Component {
    render(){
      return (
        <div>
        <Login />
          <p>Login!</p>
        </div>
      );
    }
}

export default LoginContainer;

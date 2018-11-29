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

const mapStateToProps = state => ({ user: state.user })

const mapDispatchToProps = dispatch => ({
  login: header => dispatch({type: 'LOGIN', header}),
  signup: id => dispatch({type: 'SIGN_UP', id})
})

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer);

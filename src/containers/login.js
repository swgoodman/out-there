import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { withRouter, Link } from 'react-router-dom'

import { loginUser } from '../actions/users'
import styled from 'styled-components'


const LoginBody = styled.div`
  justify-contents: center;
  padding-top: 60px;
`

const StyledLogin = styled.div`
  background-color: white;
  width: 140px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.5), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  margin: 0 auto;
  padding: 10px;
  position: relative;
`
const StyledInput = styled.input`
  border: none;
  border-bottom: 1px solid black;
  background: transparent;
  font-style: italic;
  font-size: 16px;
  width: 140px;
  padding-bottom: 8px;
  :focus {
    border: none;
  }
`

const StyledButton = styled.button`
  border: none;
  font-size: 30px;
  color: black;
  background-color: #FEA680;
  font-style: italic;
  width: 140px;
  float: left;
  margin-top: 10px;
  padding: 10px;
  margin-right: 40px;
  :hover {
    cursor: pointer;
  }
`

const StyledLink = styled.a`
  border: none;
  color: black;
  font-size: 16px;
  background-color: #01ABAA;
  font-style: italic;
  width: 140px;
  display: inline-block;
  margin-top: 10px;
  text-decoration: none;
  text-align: center;
`

class Login extends Component {
  constructor() {
    super()

    this.state = {
      username: '',
      password: ''
    }

    this.onSubmit = this.onSubmit.bind(this)
    this.onChange = this.onChange.bind(this)
  }

  onChange(e) {
    const field = e.target.name
    let state = this.state

    state[field] = e.target.value
    this.setState(state)
  }

  onSubmit(e) {
    e.preventDefault()

    const user = this.state
    debugger
    this.props.loginUser(user, () => this.props.history.push('/'))
  }

  render() {
    const { username, password } = this.state

    return (
      <LoginBody>
        <StyledLogin>
        <form onSubmit={ this.onSubmit }>
          <StyledInput name="username" placeholder="username" value={ username } onChange={ this.onChange }/><br/>
          <StyledInput type='password' placeholder="password" name="password" value={ password } onChange={ this.onChange }/><br/>
          <StyledButton type="submit">Login</StyledButton>
        </form>
        <StyledLink href='/signup'>Sign Up</StyledLink>
        </StyledLogin>

      </LoginBody>
    )
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({
  loginUser
}, dispatch)

export default withRouter(connect(null, mapDispatchToProps)(Login))

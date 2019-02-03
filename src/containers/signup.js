import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { withRouter, Link } from 'react-router-dom'

import { signupUser } from '../actions/users'
import styled from 'styled-components'

const SignUpBody = styled.div`
  justify-contents: center;
  padding-top: 60px;
`

const StyledSignUp = styled.div`
  background-color: white;
  width: 180px;
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
  width: 180px;
  padding-bottom: 8px;
  :focus {
    border: none;
  }
`
const StyledLabel = styled.label`
  margin-top: 10px;
  display: block;
`

const StyledButton = styled.button`
  border: none;
  font-size: 30px;
  color: black;
  background-color: #FEA680;
  font-style: italic;
  width: 180px;
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
  width: 180px;
  display: inline-block;
  margin-top: 10px;
  text-decoration: none;
  text-align: center;
`

class Signup extends Component {
  constructor() {
    super()

    this.state = {
      username: '',
      email: '',
      password: '',
      password_confirmation: ''
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
    this.props.signupUser(user, () => this.props.history.push('/'))
  }

  render() {
    const { username, email, password, password_confirmation } = this.state

    return (
      <SignUpBody>
      <StyledSignUp>
        <form onSubmit={ this.onSubmit }>
          <StyledInput name="username" placeholder="username" value={ username } onChange={ this.onChange }/><br/>
          <StyledInput name="email" placeholder="email" value={ email } onChange={ this.onChange }/><br/>
          <StyledInput type='password' name="password" placeholder="password" value={ password } onChange={ this.onChange }/><br/>
          <StyledInput type='password' name="password_confirmation" placeholder="confirm password" value={ password_confirmation } onChange={ this.onChange }/><br/>
          <StyledButton type="submit">Signup</StyledButton>
        </form>
        <StyledLink href='/login'>Login</StyledLink>
        </StyledSignUp>
      </SignUpBody>
    )
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({
  signupUser
}, dispatch)

export default withRouter(connect(null, mapDispatchToProps)(Signup))

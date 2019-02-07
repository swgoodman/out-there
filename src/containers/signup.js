import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { withRouter, Link } from 'react-router-dom'

import { signupUser } from '../actions/users'

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
      <div>
        <form onSubmit={ this.onSubmit }>
          <input name="username" placeholder="username" value={ username } onChange={ this.onChange }/><br/>
          <input name="email" placeholder="email" value={ email } onChange={ this.onChange }/><br/>
          <input type='password' name="password" placeholder="password" value={ password } onChange={ this.onChange }/><br/>
          <input type='password' name="password_confirmation" placeholder="confirm password" value={ password_confirmation } onChange={ this.onChange }/><br/>
          <button type="submit">Signup</button>
        </form>
        <a href='/login'>Login</a>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({
  signupUser
}, dispatch)

export default withRouter(connect(null, mapDispatchToProps)(Signup))

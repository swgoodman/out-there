import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { withRouter, Link } from 'react-router-dom'

import { loginUser } from '../actions/users'

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
    this.props.loginUser(user, () => this.props.history.push('/'))
  }

  render() {
    const { username, password } = this.state

    return (
      <div>
        <form onSubmit={ this.onSubmit }>
          <input name="username" placeholder="username" value={ username } onChange={ this.onChange }/><br/>
          <input type='password' placeholder="password" name="password" value={ password } onChange={ this.onChange }/><br/>
          <button type="submit">Login</button>
        </form>
        <a href='/signup'>Sign Up</a>
        </div>
    )
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({
  loginUser
}, dispatch)

export default withRouter(connect(null, mapDispatchToProps)(Login))

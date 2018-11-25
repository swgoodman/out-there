import React, { Component } from 'react'

class LoginInput extends Component {


    constructor() {
      super();

      this.state = {
        loginUsername: '',
        loginPassword: '',
        signupUsername: '',
        signupEmail: '',
        signupPassword: ''
      };
    }

    handleChange = event => {
      this.setState({
        [event.target.name]: event.target.value
      })
    }

    handleSubmit = event => {
      event.preventDefault();
      this.props.addComment(this.state)
      this.setState({
        header: '',
        body: ''
      });
    }

      render() {
        return (
         <div>
         <h2>Sign Up</h2>
            <form onSubmit={this.handleSubmit}>
              <input
                type="text"
                name="signupUsername"
                value={this.state.signupUsername}
                onChange={this.handleChange} />
              <input
                type="text"
                name="signupEmail"
                value={this.state.signupEmail}
                onChange={this.handleChange}
                 />
              <input
                type="text"
                name="signupPassword"
                value={this.state.signupPassword}
                onChange={this.handleChange}
                />
              <input type="submit" />
            </form>
         <h2>Login</h2>
            <form onSubmit={this.handleSubmit}>
              <input
                type="text"
                name="loginUsername"
                value={this.state.loginUsername}
                onChange={this.handleChange} />
              <input
                type="text"
                name="loginPassword"
                value={this.state.loginPassword}
                onChange={this.handleChange}
                 />
              <input type="submit" />
            </form>
          </div>
        );
      }

}

export default LoginInput;

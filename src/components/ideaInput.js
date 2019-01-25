import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { createIdea } from '../actions/ideas'

class IdeaInput extends Component {

    constructor() {
      super();

      this.state = {
        header: "",
        body: ""
      };

      this.handleChange = this.handleChange.bind(this)
      this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(e) {
      const field = e.target.name
      let state = this.state

      state[field] = e.target.value
      this.setState(state)
    }

    handleSubmit(e) {
      e.preventDefault()
      this.props.createIdea(this.state)
      this.setState({
        header: "",
        body: ""
      })
    }

    render() {
      const { header, body } = this.state

      return (
          <form onSubmit={this.handleSubmit}>
            <input
              type="text"
              name="header"
              placeholder="What's the big idea?"
              value= { header }
              onChange={this.handleChange} />
            <textarea
              type="text"
              name="body"
              placeholder="Details"
              value={ body }
              onChange={this.handleChange}
               />
            <input type="submit" />
          </form>
      );
    }

}

const mapDispatchToProps = dispatch => bindActionCreators({
  createIdea
}, dispatch)

export default connect(null, mapDispatchToProps)(IdeaInput)

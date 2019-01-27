import React, { Component } from "react"
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { createComment } from '../actions/comments'

class CommentInput extends Component {


  constructor() {
    super();

    this.state = {
      body: ''
    };
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = event => {
    event.preventDefault();

    const { ideaId } = this.props
    this.props.createComment(this.state, ideaId)
    this.setState({
      body: ''
    });
  }

    render() {
      return (
       <div>
          <form onSubmit={this.handleSubmit}>
            <label>Add Comment</label>
            <textarea
              type="text"
              name="body"
              value={this.state.body}
              onChange={this.handleChange}
               />
            <input type="submit" />
          </form>
        </div>
      );
    }

}

const mapDispatchToProps = dispatch => bindActionCreators({
  createComment
}, dispatch)

export default connect(null, mapDispatchToProps)(CommentInput)

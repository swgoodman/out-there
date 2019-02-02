import React, { Component } from "react"
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { createComment } from '../actions/comments'
import styled from 'styled-components'

const StyledCommentInput = styled.div`
  padding: 30px;
  background-color: white;
`

const StyledTextArea = styled.textarea`
  border: none;
  border-bottom: 1px solid black;
  background: transparent;
  font-style: italic;
  font-size: 16px;
  height: 20px;
  width: 300px;
  float: left;
  :focus {
    border: none;
  }
`

const StyledCommentButton = styled.button`
  border: none;
  font-size: 16px;
  color: black;
  background-color: #FEA680;
  font-style: italic;
  float: left;
  :hover {
    cursor: pointer;
  }
`

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
       <StyledCommentInput>
          <form onSubmit={this.handleSubmit}>
            <StyledTextArea
              type="text"
              name="body"
              placeholder="comment"
              value={this.state.body}
              onChange={this.handleChange}
               />
            <StyledCommentButton type="submit">submit</StyledCommentButton>
          </form>
        </StyledCommentInput>
      );
    }

}

const mapDispatchToProps = dispatch => bindActionCreators({
  createComment
}, dispatch)

export default connect(null, mapDispatchToProps)(CommentInput)

import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { createIdea } from '../actions/ideas'
import styled from 'styled-components'


const StyledIdeaInput = styled.div`
  justify-contents: center;
  padding-top: 60px;
  padding-left: 60px;
  width: 200px;
  float:left;
  z-index: 1;
`
const StyledIdeaCreate = styled.div`
  background-color: white;
  width: 300px;
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
  width: 300px;
  padding-bottom: 8px;
  :focus {
    border: none;
  }
`

const StyledTextArea = styled.textarea`
  border: none;
  border-bottom: 1px solid black;
  background: transparent;
  font-style: italic;
  font-size: 16px;
  width: 300px;
  height: 100px;
  padding-bottom: 8px;
  :focus {
    border: none;
  }
`

const StyledIdeaButton = styled.button`
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
z-index: 1;
:hover {
  cursor: pointer;
}
`


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
        <StyledIdeaInput>
          <StyledIdeaCreate>
            <form onSubmit={this.handleSubmit}>
              <StyledInput
                type="text"
                name="header"
                placeholder="idea"
                value= { header }
                onChange={this.handleChange} />
              <StyledTextArea
                type="text"
                name="body"
                placeholder="details"
                value={ body }
                onChange={this.handleChange}
                 />
              <StyledIdeaButton type="submit">Submit</StyledIdeaButton>
            </form>
          </StyledIdeaCreate>
        </StyledIdeaInput>
      );
    }

}

const mapDispatchToProps = dispatch => bindActionCreators({
  createIdea
}, dispatch)

export default connect(null, mapDispatchToProps)(IdeaInput)

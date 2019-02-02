import React from 'react'
import Comment from './comment'
import CommentInput from './commentInput'

import styled from 'styled-components'

const StyledIdea = styled.div`
  justify-contents: center;
  padding-top: 30px;
  padding-left: 160px;
  width: 100%;
  z-index: 1;
  @media only screen and (max-width: 1080px) {
    display: block;
    padding-top 300px;
  }
`
const StyledIdeaBlock = styled.div`
  background-color: white;
  width: 600px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.5), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  margin: 0 auto;
  position: relative;
`

const StyledHeader = styled.h1`
  font-size: 48px;
  font-weight: 400;
  font-style: italic;
  color: #FEA680;
  padding-top: 20px;
  padding-left: 30px;
  line-height: 1;
`

const StyledBody = styled.p`
  font-size: 16px;
  font-weight: 400;
  font-style: italic;
  color: black;
  padding-left: 30px;
`

const StyledIdeaButton = styled.button`
  border: none;
  color: black;
  font-size: 10px;
  float: right;
  background-color: #01ABAA;
  font-style: italic;
  display: inline-block;
  text-decoration: none;
  text-align: center;
`

const Idea = ({ idea: { id, header, body, comments }, deleteIdea, deleteComment }) =>
  <StyledIdea>
    <StyledIdeaBlock>
      <StyledIdeaButton onClick={ () => deleteIdea(id) }>X</StyledIdeaButton>
      <StyledHeader>{ header }</StyledHeader>
      <StyledBody>{ body }</StyledBody>
      <ul>
        { comments.map(comment => <Comment key={ comment.id } comment = { comment } ideaId={ id } deleteComment={ deleteComment } />)}
      </ul>
      <CommentInput ideaId={ id }/>
    </StyledIdeaBlock>
  </StyledIdea>

export default Idea

import React from 'react'
import styled from 'styled-components'

const StyledList = styled.li`
  color: black;
  font-size: 14px;
  font-style: italic;
  display: inline-block;
  text-decoration: none;
  text-align: center;
`

const StyledCommentButton = styled.button`
  border: none;
  color: black;
  margin: 10px;
  font-size: 10px;
  font-style: italic;
  display: inline-block;
  text-decoration: none;
  text-align: center;
`

const Comment = ({ comment: { id, body }, ideaId, deleteComment}) => {
      return (
        <div>
          <StyledList>
            { body }
            <StyledCommentButton onClick={ () => deleteComment(id, ideaId) }>X</StyledCommentButton>
          </StyledList>
        </div>
      );

}

export default Comment;

import React from 'react'
import styled from 'styled-components'

const Comment = ({ comment: { id, body }, ideaId, deleteComment}) => {
      return (
        <div>
          <ul>
            { body }
            <button onClick={ () => deleteComment(id, ideaId) }>X</button>
          </ul>
        </div>
      );

}

export default Comment;

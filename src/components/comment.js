import React from 'react'

const Comment = ({ comment: { id, body }, ideaId, deleteComment}) => {
      return (
        <div>
          <li>
            { body }
            <button onClick={ () => deleteComment(id, ideaId) }>Delete</button>
          </li>
        </div>
      );

}

export default Comment;

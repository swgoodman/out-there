import React from 'react'
import Comment from './comment'
import CommentInput from './commentInput'

const Idea = ({ idea: { id, header, body, comments }, deleteIdea, deleteComment }) =>
  <div>
    <h1>{ header }</h1>
    <p>{ body }</p>
    <ul>
      { comments.map(comment => <Comment key={ comment.id } comment = { comment } ideaId={ id } deleteComment={ deleteComment } />)}
    </ul>
  </div>

export default Idea

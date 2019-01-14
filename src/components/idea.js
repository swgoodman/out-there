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
    <CommentInput ideaId={ id }/>
  </div>

export default Idea

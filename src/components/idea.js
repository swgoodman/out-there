import React from 'react'
import Comment from './Comment'
import CommentInput from './CommentInput'

const Idea = ({ idea: { id, header, body, comments }, deleteIdea, deleteComment }) =>

  <div>
      <button onClick={ () => deleteIdea(id) }>X</button>
      <h1>{ header }</h1>
      <p>{ body }</p>

      <CommentInput ideaId={ id }/>
  </div>

export default Idea

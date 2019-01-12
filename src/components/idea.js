import React from 'react'

const Idea = ({ idea: { id, header, body } }) =>
  <div>
    <h1>{ header }</h1>
    <p>{ body }</p>
  </div>

export default Idea

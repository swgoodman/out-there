import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { withRouter, Link } from 'react-router-dom'

const Board = ({ board: { id, name }, fetchIdeas, setBoard }) =>
      <div>
        <button onClick={ ()=> {setBoard(id); fetchIdeas(id); } }>{ name }</button>
      </div>

export default Board

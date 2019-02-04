import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import styled from 'styled-components'

import { fetchBoards } from '../actions/boards'
import NewBoard from '../components/NewBoard'
import ExistingBoard from '../components/ExistingBoard'


class BoardList extends Component {
  componentWillMount() {
    this.props.fetchBoards()
  }

    render() {

      const { boards } = this.props

      return (
          <div>
            <ul>
              { boards.map(board => <li>{board.name}</li>)}
            </ul>
            <NewBoard/>
            <ExistingBoard/>
          </div>
      );
    }
}

const mapStateToProps = state => {
  return {
    boards: state.boards.all
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({
  fetchBoards
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(BoardList)

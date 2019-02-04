import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import styled from 'styled-components'

import { fetchBoard } from '../actions/boards'
import NewBoard from '../components/NewBoard'
import ExistingBoard from '../components/ExistingBoard'


class BoardList extends Component {
  componentWillMount() {
    this.props.fetchBoard()
  }

    render() {

      const { board } = this.props

      return (
          <div>
            { board.name }
            <NewBoard/>
            <ExistingBoard/>
          </div>
      );
    }
}

const mapStateToProps = state => {
  return {
    user: state.user.current,
    ideas: state.ideas.all
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({
  fetchBoard
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(BoardList)

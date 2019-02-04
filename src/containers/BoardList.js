import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import styled from 'styled-components'

import { fetchBoard } from '../actions/boards'
import NewBoard from '../components/NewBoard'
import ExistingBoard from '../components/ExistingBoard'


class BoardList extends Component {
  componentWillMount() {
  }

    render() {

      const { board } = this.props

      return (
          <div>
            <NewBoard/>
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
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(BoardList)

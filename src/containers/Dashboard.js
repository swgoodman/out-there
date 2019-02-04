import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect, Link } from 'react-redux'

import styled from 'styled-components'

import { fetchUser } from '../actions/users'

import IdeaInput from '../components/IdeaInput'
import IdeaList from './IdeaList'
import BoardList from './BoardList'

class Dashboard extends Component {
  componentWillMount() {
    this.props.fetchUser()
  }

    render() {

      const { user } = this.props

      return (
          <div>
            { user.username }
            { user.board_id }
            <a href='/logout'>Logout</a>
            <BoardList/>
            <IdeaList props={ user }/>
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
  fetchUser
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)

import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect, Link } from 'react-redux'

import styled from 'styled-components'

import { fetchUser } from '../actions/users'
import { fetchBoards, setBoard } from '../actions/boards'
import { fetchIdeas } from '../actions/ideas'

import IdeaInput from '../components/IdeaInput'
import IdeaContainer from './IdeaContainer'
import BoardList from './BoardList'

class Dashboard extends Component {
  componentWillMount() {
    this.props.fetchUser()
    this.props.fetchBoards()
  }


    render() {

      const { user, boards, current } = this.props

      let ideas;

      if (this.props.current.ideas) {
        ideas = <IdeaContainer board={ current } fetchIdeas={ this.props.fetchIdeas }/>;
      };
      
      return (
          <div>
            <BoardList boards={ boards } setBoard={ this.props.setBoard }/>
            { ideas }
            { user.username }
            <a href='/logout'>Logout</a>
          </div>
      );
    }
}

const mapStateToProps = state => {
  return {
    user: state.user.current,
    boards: state.boards.all,
    current: state.boards.current
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({
  fetchUser,
  fetchIdeas,
  fetchBoards,
  setBoard
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)

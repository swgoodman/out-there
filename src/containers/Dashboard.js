import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect, Link } from 'react-redux'


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

      const { user, boards, ideas, board } = this.props

      let ideaBlock;

      if (Object.keys(board).length > 0 ) {
        ideaBlock = <IdeaContainer ideas={ ideas } board={ board }/>;
      };

      return (
          <div>
            <BoardList boards={ boards } fetchIdeas={ this.props.fetchIdeas } setBoard={ this.props.setBoard}/>
            { ideaBlock }
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
    ideas: state.ideas.all,
    board: state.boards.current
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({
  fetchUser,
  fetchIdeas,
  fetchBoards,
  setBoard
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)

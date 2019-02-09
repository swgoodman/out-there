import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect, Link } from 'react-redux'


import { fetchUser } from '../actions/users'
import { fetchBoards, setBoard } from '../actions/boards'
import { fetchIdeas } from '../actions/ideas'

import IdeaInput from '../components/IdeaInput'
import IdeaContainer from './IdeaContainer'
import BoardList from './BoardList'

import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

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
        <>
          <Grid container sm={12}>
            <Grid item sm={3}>
              <Paper>
                <BoardList boards={ boards } fetchIdeas={ this.props.fetchIdeas } setBoard={ this.props.setBoard}/>
              </Paper>
            </Grid>
            <Grid item sm={9}>
              { ideaBlock }
              { user.username }
              <a href='/logout'>Logout</a>
            </Grid>
          </Grid>
        </>
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

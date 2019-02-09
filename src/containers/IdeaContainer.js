import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { fetchIdeas, deleteIdea } from '../actions/ideas'
import { deleteComment } from '../actions/comments'

import Typography from '@material-ui/core/Typography'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'
import Idea from '../components/Idea.js'
import IdeaInput from '../components/IdeaInput.js'






class IdeaContainer extends Component {

    render() {

      const { ideas, board } = this.props

      return (
          <div>
            <Paper>
              <Typography>{board.name}</Typography>
              <IdeaInput current={ board }/>
            </Paper>

            <Grid container spacing={16}>
              <Grid item xs={12}>
                <Grid container justify="center">
                  { ideas.map(idea => <Idea key={ idea.id } idea={ idea } deleteIdea={ this.props.deleteIdea } deleteComment={ this.props.deleteComment }/>) }
                </Grid>
              </Grid>
            </Grid>
          </div>
      );
    }
}

const mapDispatchToProps = dispatch => bindActionCreators({
  fetchIdeas,
  deleteIdea,
  deleteComment
}, dispatch)

export default connect(null, mapDispatchToProps)(IdeaContainer)

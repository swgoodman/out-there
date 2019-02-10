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
import { withStyles, createStyles } from '@material-ui/core/styles'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import Divider from '@material-ui/core/Divider'

const styles = theme => ({
  main: {
    width: 'auto',
    display: 'block', // Fix IE 11 issue.
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up(400 + theme.spacing.unit * 3 * 2)]: {
      width: 400,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  paper: {
    marginTop: theme.spacing.unit * 1,
    display: 'flex',
    flexDirection: 'column',
    padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 3}px ${theme.spacing.unit * 3}px`,
  },
  divider: {
    margin: 10,
  },
})

class IdeaContainer extends Component {

  render() {
    const { ideas, board, classes } = this.props
    return (
      <div>
        <Paper className={classes.paper}>
          <Typography variant="h4">{board.name}</Typography>
          <Divider className={classes.divider}/>
          <IdeaInput current={ board }/>
        </Paper>

          <Grid
          container
          direction="row"
          justify="space-evenly"
          alignItems="center">
            <Grid item xs={6}>
              <Grid container justify="center">
                { ideas.map(idea => <Idea key={ idea.id } idea={ idea } deleteIdea={ this.props.deleteIdea } deleteComment={ this.props.deleteComment }/>) }
              </Grid>
            </Grid>
          </Grid>
      </div>
    );
  }
}

IdeaInput.propTypes = {
  classes: PropTypes.object.isRequired,
};

const mapDispatchToProps = dispatch => bindActionCreators({
  fetchIdeas,
  deleteIdea,
  deleteComment
}, dispatch)

export default withStyles(styles) (connect(null, mapDispatchToProps)(IdeaContainer))

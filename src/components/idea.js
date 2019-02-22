import React from 'react'
import Likes from './likes.js'
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Delete from '@material-ui/icons/Clear';
import { withStyles, createStyles } from '@material-ui/core/styles'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import Divider from '@material-ui/core/Divider'
import Typography from '@material-ui/core/Typography'
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';

const styles = theme => ({
  cardContent: {
    flexGrow: 1,
  },
  delete: {
    fontSize: 'medium',
    position: 'relative',
    float: 'right',
  }
})

const Idea = ({ idea: { id, header, body, comments }, deleteIdea, classes }) =>
   <CardContent className={classes.cardContent}>
    <Delete className={classes.delete} onClick={ () => deleteIdea(id) }/>
    <Typography variant="h5">{ header }</Typography>
    <Typography variant="body1">{ body }</Typography>
  </CardContent>

  Idea.propTypes = {
    classes: PropTypes.object.isRequired,
  };

export default withStyles(styles)(Idea)

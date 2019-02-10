import React from 'react'
import Comment from './Comment'
import CommentInput from './CommentInput'

import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Delete from '@material-ui/icons/Delete';

const Idea = ({ idea: { id, header, body, comments }, deleteIdea }) =>
  <>
    <Grid item>
      <Paper>
        <Delete onClick={ () => deleteIdea(id) }/>
        <h1>{ header }</h1>
        <p>{ body }</p>
      </Paper>
    </Grid>
  </>

export default Idea

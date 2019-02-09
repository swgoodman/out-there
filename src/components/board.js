import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { withRouter, Link } from 'react-router-dom'

import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ViewModule from '@material-ui/icons/ViewModule';

const Board = ({ board: { id, name }, fetchIdeas, setBoard }) =>
      <>
        <ListItem button>
          <ListItemIcon>
            <ViewModule />
            <a onClick={ ()=> {setBoard(id); fetchIdeas(id); } }>{ name }</a>
          </ListItemIcon>
          <ListItemText/>
        </ListItem>
      </>

export default Board

import React from 'react'
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ViewModule from '@material-ui/icons/ViewModule';
import Button from '@material-ui/core/Button';

const Board = ({ board: { id, name }, fetchIdeas, setBoard }) =>
  <>
    <ListItem button>
      <Button onClick={ ()=> {setBoard(id); fetchIdeas(id); } }>{ name }</Button>
    </ListItem>
  </>

export default Board

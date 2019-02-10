import React from 'react'
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

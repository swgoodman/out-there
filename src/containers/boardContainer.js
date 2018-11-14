import React, { Component } from 'react'
import IdeaContainers from './ideaContainers.js'

class Board extends Component {
    render(){
      return (
        <div>
          <p>IDEAS!</p>
          <IdeaContainers />
        </div>
      );
    }
}

export default Board;

import React, { Component } from 'react'
import IdeaContainers from './ideaContainers.js'
import BoardFilter from '../components/boardFilter.js'

class Board extends Component {


  constructor() {
    super();

    this.state = {
      boards: [
      {
        boardId: "board123",
        boardName: "Company Board",
        ideas: [
          {
            id: 12335,
            header: "Augmented Reality Capabilities",
            body: "What if you could scan a plant and immediate receive information about it?"
          },
          {
            id: 12336,
            header: "Artificially Intelligent Office Dog",
            body: "No walking or "
          }
        ]
      },
      {
        boardId: "board456",
        boardName: "Personal Board",
        ideas: [
          {
            id: 12335,
            header: "50 Cent should start a cologne brand called 50 Scent",
            body: "A budget cologne from 50 Cent. On sale now for 50 cents."
          },
          {
            id: 12336,
            header: "An R2D2 Spinoff",
            body: "His outer dialogue is bleeps, but his inner voice is David Attenborough"
          }
        ]
      }]
    }
  }


    render(){
      return (
        <div>
          <BoardFilter />
          <p>IDEAS!</p>
          <IdeaContainers />
        </div>
      );
    }
}

export default Board;

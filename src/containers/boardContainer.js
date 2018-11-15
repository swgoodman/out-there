import React, { Component } from 'react'
import IdeaContainers from './ideaContainers.js'

class Board extends Component {


  constructor() {
    super();

    this.state = {
      0: {
        boardId: "board123",
        boardName: "Company Board",
        ideas: {
          0: {
            id: 12335,
            header: "Augmented Reality Capabilities",
            body: "What if you could scan a plant and immediate receive information about it?"
          },
          1: {
            id: 12336,
            header: "Artificially Intelligent Office Dog",
            body: "No walking or "
          }
        }
      },
      1: {
        boardId: "board456",
        boardName: "Personal Board",
        ideas: {
          0: {
            id: 12335,
            header: "50 Cent should start a cologne brand called 50 Scent",
            body: "A budget cologne from 50 Cent. On sale now for 50 cents."
          },
          1: {
            id: 12336,
            header: "An R2D2 Spinoff",
            body: "His outer dialogue is bleeps, but his inner voice is David Attenborough"
          }
        }
      }
    }
  }


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

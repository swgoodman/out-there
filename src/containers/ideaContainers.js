import React, { Component } from 'react'
import Idea from '../components/idea.js'
import Comments from '../components/comments.js'
import Reactions from '../components/reactions.js'
import CommentInput from '../components/commentInput.js'
import ReactionInput from '../components/reactionInput.js'

class IdeaContainers extends Component {

  constructor() {
    super();

    this.state = {
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


    render(){
      return (
        <div>
          <Idea />
          <Comments />
          <CommentInput />
          <Reactions />
          <ReactionInput />

        </div>
      );
    }
}

export default IdeaContainers;

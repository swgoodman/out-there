import React, { Component } from 'react'
import Idea from '../components/idea.js'
import Comments from '../components/comments.js'
import Reactions from '../components/reactions.js'
import CommentInput from '../components/commentInput.js'
import ReactionInput from '../components/reactionInput.js'

class IdeaContainers extends Component {


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

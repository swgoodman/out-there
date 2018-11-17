import React, { Component } from 'react'
import Idea from '../components/idea.js'
import Comments from '../components/comments.js'
import Reactions from '../components/reactions.js'
import CommentInput from '../components/commentInput.js'
import ReactionInput from '../components/reactionInput.js'
import Draggable from 'react-draggable';

class IdeaContainers extends Component {


    render(){
      return (
        <Draggable>
          <div className="idea-card">
            <Idea />
            <Comments />
            <CommentInput />
            <Reactions />
            <ReactionInput />

          </div>
        </Draggable>
      );
    }
}

export default IdeaContainers;

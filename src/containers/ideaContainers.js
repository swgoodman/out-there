import React, { Component } from 'react'
import Idea from '../components/idea.js'
import CommentContainer from './commentContainer.js'
import Comments from '../components/comments.js'
import Reactions from '../components/reactions.js'
import CommentInput from '../components/commentInput.js'

class IdeaContainers extends Component {


    render(){
      return (
          <div className="block" id="idea-container">
            <Idea />
            <Reactions />
            <CommentContainer />

          </div>
      );
    }
}

export default IdeaContainers;

import React, { Component } from 'react'
import Comments from '../components/comments.js'
import CommentInput from '../components/commentInput.js'

class CommentContainers extends Component {


    render(){
      return (
          <div className="comments">
            <CommentInput />
            <Comments />

          </div>
      );
    }
}

export default CommentContainers;

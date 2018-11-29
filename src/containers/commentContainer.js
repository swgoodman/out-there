import React, { Component } from 'react'
import Comments from '../components/comments.js'
import CommentInput from '../components/commentInput.js'
import { connect } from 'react-redux'

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

const mapStateToProps = state => ({ ideas: state.ideas })

const mapDispatchToProps = dispatch => ({
  addComment: header => dispatch({type: 'ADD_COMMENT', header}),
  deleteComment: id => dispatch({type: 'DELETE_COMMENT', id})
})

export default  connect(mapStateToProps, mapDispatchToProps)(CommentContainers);

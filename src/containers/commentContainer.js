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
  addIdea: header => dispatch({type: 'ADD_IDEA', header}),
  deleteIdea: id => dispatch({type: 'DELETE_IDEA', id})
})

export default  connect(mapStateToProps, mapDispatchToProps)(IdeaListContainer);

import React, { Component } from 'react'
import Idea from '../components/idea.js'
import Reactions from '../components/reactions.js'
import IdeaInput from '../components/ideaInput.js'
import CommentContainer from './commentContainer'
import { connect } from 'react-redux'

class IdeaContainers extends Component {


    render(){
      return (
          <div className="block" id="idea-container">
            <Idea />
            <IdeaInput />
            <Reactions />
            <CommentContainer />
          </div>
      );
    }
}

const mapStateToProps = state => ({ ideas: state.ideas.all })

const mapDispatchToProps = dispatch => ({
  deleteIdea: id => dispatch({type: 'DELETE_IDEA', id})
})

export default connect(mapStateToProps, mapDispatchToProps)(IdeaContainers);

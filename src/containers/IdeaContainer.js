import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { fetchUser } from '../actions/users'
import { fetchIdeas, deleteIdea } from '../actions/ideas'
import { deleteComment } from '../actions/comments'

import Idea from '../components/Idea.js'
import IdeaInput from '../components/IdeaInput.js'

class IdeaContainer extends Component {

    render() {

      const { user, current, ideas } = this.props

      return (
          <div className="grid-blocks">
            <IdeaInput current={ this.props.board }/>

            { ideas.map(idea => <Idea key={ idea.id } idea={ idea } deleteIdea={ this.props.deleteIdea } deleteComment={ this.props.deleteComment }/>) }
          </div>
      );
    }
}

const mapStateToProps = state => {
  return {
    user: state.user.current,
    current: state.boards.current,
    ideas: state.ideas.all
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({
  fetchIdeas,
  deleteIdea,
  deleteComment
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(IdeaContainer)

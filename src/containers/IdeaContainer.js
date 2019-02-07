import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import styled from 'styled-components'

import { fetchUser } from '../actions/users'
import { fetchIdeas, deleteIdea } from '../actions/ideas'
import { deleteComment } from '../actions/comments'

import Idea from '../components/Idea.js'
import IdeaInput from '../components/IdeaInput.js'

class IdeaContainer extends Component {

    render() {

      const { user, current } = this.props
      const ideas = this.props.current.ideas
debugger
      return (
          <div className="grid-blocks">
            <IdeaInput current={ this.props.current }/>

            { ideas.map(idea => <Idea key={ idea.id } idea={ idea } deleteIdea={ this.props.deleteIdea } deleteComment={ this.props.deleteComment }/>) }
          </div>
      );
    }
}

const mapStateToProps = state => {
  return {
    user: state.user.current,
    current: state.boards.current
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({
  fetchUser,
  fetchIdeas,
  deleteIdea,
  deleteComment
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(IdeaContainer)

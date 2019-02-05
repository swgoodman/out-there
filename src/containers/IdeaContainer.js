import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import styled from 'styled-components'

import { fetchUser } from '../actions/users'
import { fetchIdeas, deleteIdea } from '../actions/ideas'
import { deleteComment } from '../actions/comments'

import Idea from '../components/Idea.js'
import IdeaInput from '../components/IdeaInput.js'

const UserInfo = styled.div`
  color: white;
  font-size: 20px;
  padding-left: 2.5em;
`

const StyledLogOut = styled.a`
  font-style: italic;
  color: white;
  padding-left: 10px;
  font-size: 14px;
`

class IdeaContainer extends Component {
  componentWillMount() {
    this.props.fetchIdeas()
  }

    render() {

      const { user, ideas, boards } = this.props

      return (
          <div className="grid-blocks">
            <IdeaInput/>
            { ideas.map(idea => <Idea key={ idea.id } idea={ idea } deleteIdea={ this.props.deleteIdea } deleteComment={ this.props.deleteComment }/>) }
          </div>
      );
    }
}

const mapStateToProps = state => {
  return {
    user: state.user.current,
    ideas: state.ideas.all
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({
  fetchUser,
  fetchIdeas,
  deleteIdea,
  deleteComment
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(IdeaContainer)

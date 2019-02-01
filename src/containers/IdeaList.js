import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { withRouter, Link } from 'react-router-dom'

import logo from '../logo.svg';
import '../css/App.css';

import { fetchUser } from '../actions/users'
import { fetchIdeas, deleteIdea } from '../actions/ideas'
import { deleteComment } from '../actions/comments'

import Idea from '../components/idea.js'
import IdeaInput from '../components/ideaInput.js'

class IdeaList extends Component {
  componentWillMount() {
    this.props.fetchUser()
    this.props.fetchIdeas()
  }

    render() {

      const { user, ideas } = this.props

      return (
          <div className="grid-blocks">
            <div>
              { user.username }
              { user.board_id }
            </div>

            <IdeaInput/>
            { ideas.map(idea => <Idea key={ idea.id } idea={ idea } deleteIdea={ this.props.deleteIdea } deleteComment={ this.props.deleteComment }/>) }
            <Link to='/logout'>Log Out</Link>
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

export default connect(mapStateToProps, mapDispatchToProps)(IdeaList)

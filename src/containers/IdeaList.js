import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

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

  constructor() {
    super();

    this.state = {
      fetchingData: false,
      }
  }

    render() {

      const {fetchingData} = this.state
      const { user, ideas } = this.props
      return (
        <div className="App">
          <header className="App-header">
            <h1>Out There</h1>
              {
                fetchingData ?
                  <img src={logo} className="App-logo" alt="logo" />
                :
                  <p>Content is up to date.</p>
              }
          </header>

          <div className="grid-blocks">
            <div>{ user.username }</div>
            <IdeaInput/>
            { ideas.map(idea => <Idea key={ idea.id } idea={ idea } deleteIdea={ this.props.deleteIdea } deleteComment={ this.props.deleteComment }/>) }
          </div>

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

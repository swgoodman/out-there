import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import logo from '../logo.svg';
import '../css/App.css';

import Idea from '../components/idea.js'
import IdeaInput from '../components/ideaInput.js'

class IdeaList extends Component {

  constructor() {
    super();

    this.state = {
      fetchingData: false,
      }
  }

  render() {

    const {fetchingData} = this.state

    const { ideas } = this.props

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

          { ideas.map(idea => <Idea key={ idea.id } idea={ idea } />)}
        </div>

      </div>
    );
  }
}

const mapStateToProps = state => ({ ideas: state.ideas.all })

const mapDispatchToProps = dispatch => bindActionCreators({
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(IdeaList)

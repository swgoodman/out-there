import React, { Component } from 'react'
import Ideas from '../components/ideas.js'
import { connect } from 'react-redux'
import { fetchIdeas, fetchIdeasSuccess, fetchIdeasFailure } from '../actions/ideas';

class IdeaListContainer extends Component {
  // componentWillMount() {
  //   this.props.fetchIdeas();
  // }

  handleOnClick(event) {
    event.preventDefault();
    this.props.addIdea();
  }

  render() {

      return (
        <div className="block" id="list-container">
          <p>IDEAS!</p>
          <button className="action-button" onClick={(event) => this.handleOnClick(event)}>I got an idea!</button>
          <Ideas ideas={this.props.ideas} />
        </div>
      );
    }
}

const mapStateToProps = state => ({ ideas: state.ideas })

const mapDispatchToProps = dispatch => ({
  addIdea: body => dispatch({type: 'ADD_IDEA'})
})

export default connect(mapStateToProps, mapDispatchToProps)(IdeaListContainer);

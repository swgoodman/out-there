import React, { Component } from 'react'
import Ideas from '../components/ideas.js'
import { connect } from 'react-redux'

class IdeaListContainer extends Component {

  handleOnClick(event) {
    event.preventDefault();
    //call action function create's new empty post
  }

  render() {

      return (
        <div className="block" id="list-container">
          <p>IDEAS!</p>
          <button className="action-button" onClick={(event) => this.handleOnClick(event)}>I got an idea!</button>

          <Ideas
            ideas={this.props.ideas}
            deleteIdea={this.props.deleteIdea}
          />
        </div>
      );
    }
}

const mapStateToProps = state => ({ ideas: state })

const mapDispatchToProps = dispatch => ({
  addIdea: body => dispatch({type: 'ADD_IDEA'}),
  deleteIdea: id => dispatch({type: 'DELETE_IDEA  ', id})
})

export default connect(mapStateToProps, mapDispatchToProps)(IdeaListContainer);

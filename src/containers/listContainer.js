import React, { Component } from 'react'
import Ideas from '../components/ideas.js'
import { connect } from 'react-redux'

class IdeaListContainer extends Component {

  handleOnClick(event) {
    event.preventDefault();
    //call action function create's new empty post
  }

  render() {
      const { ideas, deleteIdea } = this.props
      debugger
      
      return (
        <div className="block" id="list-container">
          <p>IDEAS!</p>
          <button className="action-button" onClick={(event) => this.handleOnClick(event)}>I got an idea!</button>

          <Ideas
            ideas={ideas}
            deleteIdea={deleteIdea}
          />
        </div>
      );
    }
}

const mapStateToProps = state => ({ ideas: state.ideas.all })

const mapDispatchToProps = dispatch => ({
  addIdea: body => dispatch({type: 'ADD_IDEA'}),
  deleteIdea: id => dispatch({type: 'DELETE_IDEA  ', id})
})

export default connect(mapStateToProps, mapDispatchToProps)(IdeaListContainer);

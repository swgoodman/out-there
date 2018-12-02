import React, { Component } from 'react'
import Ideas from '../components/ideas.js'
import { connect } from 'react-redux'
import { fetchIdeas, fetchIdeasSuccess, fetchIdeasFailure } from '../actions/ideas';

class IdeaListContainer extends Component {
  // componentWillMount() {
  //   this.props.fetchIdeas();
  // }

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

  const mapStateToProps = state => ({ ideas: state.ideas})

  const mapDispatchToProps = (dispatch) => {
    return {
      fetchIdeas: () => {
        dispatch(fetchIdeas()).then((response) => {
              !response.error ? dispatch(fetchIdeasSuccess(response.payload.data)) : dispatch(fetchIdeasFailure(response.payload.data));
            });
      }
    }
  }

export default connect(mapStateToProps, mapDispatchToProps)(IdeaListContainer);

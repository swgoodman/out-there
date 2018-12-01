import React, { Component } from 'react'
import Idea from '../components/idea.js'
import { connect } from 'react-redux'
import { fetchIdeas, fetchIdeasSuccess, fetchIdeasFailure } from '../actions/ideas';

class IdeaListContainer extends Component {
  // componentWillMount() {
  //   this.props.fetchIdeas();
  // }

  handleOnSubmit(event) {
    event.preventDefault();
    this.props.addIdea(this.state.header, this.state.body)
    this.setState({
      header: '',
      body: ''
    });
  }


  render() {

    const ideaList = ideas.map(idea => {
      return (
        <Idea
        key={idea.id}
        idea={idea}
        />
      )
    });

      return (
        <div className="block" id="list-container">
          <p>IDEAS!</p>
          <button className="action-button" onclick={(event) => this.handleOnClick(event)}>I got an idea!</button>
          <ul>
            { ideaList }
          </ul>
        </div>
      );
    }
}

  const mapStateToProps = state => ({ ideas: [{
    header: "What's Up!",
    body: "this is a great idea."
  },
  {
    header: "What's Up!",
    body: "this is also a great idea."
  }
  ] })

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

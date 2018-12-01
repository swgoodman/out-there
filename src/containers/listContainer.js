import React, { Component } from 'react'
import Idea from '../components/idea.js'
import { connect } from 'react-redux'
import { fetchIdeas, fetchIdeasSuccess, fetchIdeasFailure } from '../actions/ideas';

class IdeaListContainer extends Component {
  // componentWillMount() {
  //   this.props.fetchIdeas();
  // }


  constructor() {
    super();

    this.state = {
      boards: [
      {
        boardId: "board123",
        boardName: "Company Board",
        active: true,
        ideas: [
          {
            id: 12335,
            header: "Augmented Reality Capabilities",
            body: "What if you could scan a plant and immediate receive information about it?"
          },
          {
            id: 12336,
            header: "Artificially Intelligent Office Dog",
            body: "No walking or "
          }
        ]
      },
      {
        boardId: "board456",
        boardName: "Personal Board",
        active: false,
        ideas: [
          {
            id: 12335,
            header: "50 Cent should start a cologne brand called 50 Scent",
            body: "A budget cologne from 50 Cent. On sale now for 50 cents."
          },
          {
            id: 12336,
            header: "An R2D2 Spinoff",
            body: "His outer dialogue is bleeps, but his inner voice is David Attenborough"
          }
        ]
      }]
    }
  }

  handleOnSubmit(event) {
    event.preventDefault();
    this.props.addIdea(this.state.header, this.state.body)
    this.setState({
      header: '',
      body: ''
    });
  }


  render() {
    // IDEA EACH DO
    // CREATE ONE IDEA COMPONENT WITH NAME AUTHOR AND BODY PROPS
  //   const { ideas, deleteIdea } = this.props;
  //   const ideaList = ideas.map(idea => {
  //     return (
  //       <Idea
  //       key={idea.id}
  //       idea={idea}
  //       deleteIdea={deleteIdea}
  //       />
  //     )
  //   });

      return (
        <div className="block" id="list-container">
          <p>IDEAS!</p>
          <button className="action-button" onclick={(event) => this.handleOnClick(event)}>I got an idea!</button>
          <ul>
            <Idea />
          </ul>
        </div>
      );
    }
}

  const mapStateToProps = state => ({ ideas: state.ideas })

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

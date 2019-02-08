import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { fetchBoards, setBoard } from '../actions/boards'
import { fetchIdeas } from '../actions/ideas'
import Board from '../components/Board'
import NewBoard from '../components/boardForms/NewBoard'
import ExistingBoard from '../components/boardForms/ExistingBoard'


class BoardList extends Component {

  constructor(props) {
    super(props);
      this.handleNew = this.handleNew.bind(this);
      this.handleExisting = this.handleExisting.bind(this);
      this.state = {formState: 0};
    }

  handleNew() {
    if (this.state.formState === 0 || this.state.formState === 2) {
      this.setState({formState: 1});
    } else if (this.state.formState === 1) {
      this.setState({formState: 0});
    }
  }

  handleExisting() {
    if (this.state.formState === 0 || this.state.formState === 1) {
      this.setState({formState: 2});
    } else if (this.state.formState === 2 ) {
      this.setState({formState: 0});
    }
  }

  render() {

    const { boards, setBoard, fetchIdeas } = this.props
    const formState = this.state.formState;

    let form;

    if (formState === 0) {
    } else if (formState === 1) {
      form = <NewBoard/>;
    } else {
      form = <ExistingBoard/>;
    }

    return (
        <div>
          {boards.map(board => <Board key={ board.id } board={ board } fetchIdeas={ this.props.fetchIdeas } setBoard={this.props.setBoard}/>)}
          <button onClick = { this.handleNew }>New Board</button>
          <button onClick = { this.handleExisting }> Join Board</button>
          { form }
        </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    boards: state.boards.all
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({
  fetchIdeas,
  setBoard
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(BoardList)

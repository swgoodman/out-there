import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import styled from 'styled-components'

import { fetchBoards, setBoard } from '../actions/boards'
import Board from '../components/Board'
import NewBoard from '../components/NewBoard'
import ExistingBoard from '../components/ExistingBoard'


class BoardList extends Component {
  componentWillMount() {
    this.props.fetchBoards()
  }

  constructor(props) {
    super(props);
      this.handleNew = this.handleNew.bind(this);
      this.handleExisting = this.handleExisting.bind(this);
      this.state = {formState: 0};
    }

  handleNew() {
    if (this.state.formState == 0 || this.state.formState == 2) {
      this.setState({formState: 1});
    } else if (this.state.formState == 1) {
      this.setState({formState: 0});
    }
  }

  handleExisting() {
    if (this.state.formState == 0 || this.state.formState == 1) {
      this.setState({formState: 2});
    } else if (this.state.formState == 2 ) {
      this.setState({formState: 0});
    }
  }

  render() {

    const { boards } = this.props
    const formState = this.state.formState;
    let form;

    if (formState == 0) {
    } else if (formState == 1) {
      form = <NewBoard/>;
    } else {
      form = <ExistingBoard/>;
    }

    return (
        <div>

          { boards.map(board => <Board key={ board.id } board={ board } deleteBoard={ this.props.deleteBoard } setBoard={ this.props.setBoard }/>)}
          <button onClick={this.handleNew}>New Board</button>
          <button onClick={this.handleExisting}> Join Board</button>
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
  fetchBoards,
  setBoard
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(BoardList)

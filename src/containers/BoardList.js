import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { fetchBoards, setBoard } from '../actions/boards'
import { fetchIdeas } from '../actions/ideas'
import Board from '../components/Board'
import NewBoard from '../components/boardForms/NewBoard'
import ExistingBoard from '../components/boardForms/ExistingBoard'
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';


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
          <div>
            <Typography variant="h2">Boards</Typography>
          </div>
          <List component="nav">
            {boards.map(board => <Board key={ board.id } board={ board } fetchIdeas={ this.props.fetchIdeas } setBoard={this.props.setBoard}/>)}
          </List>

          <Button variant="contained" color="primary" onClick = { this.handleNew }>New Board</Button>
          <Button variant="contained" color="primary" onClick = { this.handleExisting }> Join Board</Button>

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

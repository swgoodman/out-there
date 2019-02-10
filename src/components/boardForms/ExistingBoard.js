import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { withRouter} from 'react-router-dom'
import { createBoard } from '../../actions/boards'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

class NewBoard extends Component {

  constructor() {
    super()
    this.state = {
      name: ''
    }
    this.onSubmit = this.onSubmit.bind(this)
    this.onChange = this.onChange.bind(this)
  }

  onChange(e) {
    const field = e.target.name
    let state = this.state
    state[field] = e.target.value
    this.setState(state)
  }

  onSubmit(e) {
    e.preventDefault()
    const user = this.state
    this.props.createBoard(user, () => this.props.history.push('/'))
    this.setState({
      name: ''
    });
  }

  render() {
    const { name } = this.state

    return (
      <div>
        <form onSubmit={ this.onSubmit }>
          <TextField variant="outlined" name="name" placeholder="board name" value={ name } onChange={ this.onChange }/><br/>
          <Button variant="contained" color="secondary" type="submit">Join</Button>
        </form>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({
  createBoard
}, dispatch)

export default withRouter(connect(null, mapDispatchToProps)(NewBoard))

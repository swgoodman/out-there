import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { withRouter} from 'react-router-dom'
import { createBoard } from '../../actions/boards'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { withStyles, createStyles } from '@material-ui/core/styles'
import PropTypes from 'prop-types'
import classNames from 'classnames'


const styles = theme => ({
  divider: {
    margin: 10,
  },
  button: {
    margin: theme.spacing.unit,
  },
  text: {
    width: 200,
    height: 30,
    margin: 5,
  },
})

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
    const { classes } = this.props

    return (
      <div>
        <form onSubmit={ this.onSubmit }>
          <TextField className={classes.text} variant="outlined" name="name" placeholder="board name" value={ name } onChange={ this.onChange }/><br/>
          <Button  className={classes.button} color="secondary" type="submit">Create</Button>
        </form>
      </div>
    )
  }
}

NewBoard.propTypes = {
  classes: PropTypes.object.isRequired,
};

const mapDispatchToProps = dispatch => bindActionCreators({
  createBoard
}, dispatch)

export default withStyles(styles) (withRouter(connect(null, mapDispatchToProps)(NewBoard)))

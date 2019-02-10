import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { createIdea } from '../actions/ideas'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { withStyles, createStyles } from '@material-ui/core/styles'
import PropTypes from 'prop-types'
import classNames from 'classnames'

const styles = theme => ({
  divider: {
    margin: 10,
  },
  text: {
    width: 200,
    height: 30,
    margin: 5,
  },
})

class IdeaInput extends Component {

    constructor() {
      super();
      this.state = {
        header: "",
        body: ""
      };

      this.handleChange = this.handleChange.bind(this)
      this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(e) {
      const field = e.target.name
      let state = this.state
      state[field] = e.target.value
      this.setState(state)
    }

    handleSubmit(e) {
      e.preventDefault()
      this.props.createIdea(this.state, this.props.current)
      this.setState({
        header: "",
        body: ""
      })
    }

    render() {
      const { header, body } = this.state
      const { classes } = this.props

      return (
        <div>
            <form onSubmit={this.handleSubmit}>
              <TextField
                className={classes.text}
                variant="outlined"
                type="text"
                name="header"
                placeholder="idea"
                value= { header }
                onChange={this.handleChange} />
              <TextField
                className={classes.text}
                variant="outlined"
                type="text"
                name="body"
                placeholder="details"
                value={ body }
                onChange={this.handleChange}
                 />
              <Button className={classes.button} color="secondary" type="submit">Submit</Button>
            </form>
        </div>
      );
    }

}

IdeaInput.propTypes = {
  classes: PropTypes.object.isRequired,
};

const mapDispatchToProps = dispatch => bindActionCreators({
  createIdea
}, dispatch)

export default withStyles(styles) (connect(null, mapDispatchToProps)(IdeaInput))

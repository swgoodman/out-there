import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { signupUser } from '../actions/users'
import { withStyles, createStyles } from '@material-ui/core/styles'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import Avatar from '@material-ui/core/Avatar'
import Button from '@material-ui/core/Button'
import FormControl from '@material-ui/core/FormControl'
import InputLabel from '@material-ui/core/InputLabel'
import AccountCircle from '@material-ui/icons/AccountCircle'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'

const styles = theme => ({
  main: {
    width: 'auto',
    display: 'block', // Fix IE 11 issue.
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up(400 + theme.spacing.unit * 3 * 2)]: {
      width: 400,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  paper: {
    marginTop: theme.spacing.unit * 8,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 3}px ${theme.spacing.unit * 3}px`,
  },
  avatar: {
    margin: theme.spacing.unit,
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing.unit,
  },
  submit: {
    marginTop: theme.spacing.unit * 3,
  },
});

class Signup extends Component {
  constructor() {
    super()
    this.state = {
      username: '',
      email: '',
      password: '',
      password_confirmation: ''
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
    this.props.signupUser(user, () => this.props.history.push('/'))
  }

  render() {
    const { username, email, password, password_confirmation } = this.state
    const { classes } = this.props;

    return (
      <main  className={classes.main}>
        <Paper className={classes.paper}>
          <Avatar  className={classes.avatar}>
            <AccountCircle />
          </Avatar>

          <Typography component="h1" variant="h5">
            Sign Up
          </Typography>
          <form className={classes.form} onSubmit={ this.onSubmit }>
            <FormControl margin="normal" required fullWidth>
              <InputLabel htmlFor="username">Username</InputLabel>
              <input name="username" placeholder="username" value={ username } onChange={ this.onChange }/><br/>
            </FormControl>
            <FormControl margin="normal" required fullWidth>
              <InputLabel htmlFor="email">Email</InputLabel>
              <input name="email" placeholder="email" value={ email } onChange={ this.onChange }/><br/>
            </FormControl>
            <FormControl margin="normal" required fullWidth>
              <InputLabel htmlFor="password">Password</InputLabel>
              <input type='password' name="password" placeholder="password" value={ password } onChange={ this.onChange }/><br/>
            </FormControl>
            <FormControl margin="normal" required fullWidth>
              <InputLabel htmlFor="password_confirmation">Confirm Password</InputLabel>
              <input type='password' name="password_confirmation" placeholder="confirm password" value={ password_confirmation } onChange={ this.onChange }/><br/>
            </FormControl>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}>
              Sign Up
            </Button>
          </form>

          <a href='/login'>Login</a>
        </Paper>
      </main>
    )
  }
}

Signup.propTypes = {
  classes: PropTypes.object.isRequired,
};

const mapDispatchToProps = dispatch => bindActionCreators({
  signupUser
}, dispatch)

export default  withStyles(styles) (withRouter(connect(null, mapDispatchToProps)(Signup)))

import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { loginUser } from '../actions/users'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import Avatar from '@material-ui/core/Avatar'
import Button from '@material-ui/core/Button'
import FormControl from '@material-ui/core/FormControl'
import InputLabel from '@material-ui/core/InputLabel'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import { withStyles, createStyles } from '@material-ui/core/styles'

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


class Login extends Component {
  constructor() {
    super()
    this.state = {
      username: '',
      password: ''
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
    this.props.loginUser(user, () => this.props.history.push('/'))
  }

  render() {
    const { username, password } = this.state;
    const { classes } = this.props;

    return (
      <main  className={classes.main}>
        <Paper  className={classes.paper}>
          <Avatar  className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>

          <Typography component="h1" variant="h5">
            Login
          </Typography>
          <form className={classes.form} onSubmit={ this.onSubmit }>
            <FormControl margin="normal" required fullWidth>
              <InputLabel htmlFor="username">Username</InputLabel>
              <input name="username" value={ username } onChange={ this.onChange }/>
            </FormControl>
            <FormControl margin="normal" required fullWidth>
              <InputLabel htmlFor="username">Password</InputLabel>
              <input type='password' name="password" value={ password } onChange={ this.onChange }/>
            </FormControl>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}>
              Login
            </Button>
          </form>

          <a href='/signup'>Sign Up</a>
        </Paper>
      </main>
    )
  }
}

Login.propTypes = {
  classes: PropTypes.object.isRequired,
};

const mapDispatchToProps = dispatch => bindActionCreators({
  loginUser
}, dispatch)

export default withStyles(styles) (withRouter(connect(null, mapDispatchToProps)(Login)))

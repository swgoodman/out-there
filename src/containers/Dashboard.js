import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { fetchUser } from '../actions/users'
import { fetchBoards, setBoard } from '../actions/boards'
import { fetchIdeas } from '../actions/ideas'
import IdeaContainer from './IdeaContainer'
import BoardList from './BoardList'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import { withStyles, createStyles } from '@material-ui/core/styles'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import NotificationsIcon from '@material-ui/icons/Notifications';

const drawerWidth = 240;

const styles = theme => ({
  root: {
    display: 'flex',
  },
  toolbar: {
    paddingRight: 24, // keep right padding when drawer closed
  },
  toolbarIcon: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px',
    ...theme.mixins.toolbar,
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginLeft: 12,
    marginRight: 36,
  },
  menuButtonHidden: {
    display: 'none',
  },
  title: {
    flexGrow: 1,
  },
  drawerPaper: {
    position: 'relative',
    whiteSpace: 'nowrap',
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerPaperClose: {
    overflowX: 'hidden',
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    width: theme.spacing.unit * 0,
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing.unit * 0,
    },
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    padding: theme.spacing.unit * 3,
    height: '100vh',
    overflow: 'auto',
  },
  chartContainer: {
    marginLeft: -22,
  },
  tableContainer: {
    height: 320,
  },
  h5: {
    marginBottom: theme.spacing.unit * 2,
  },
  divider: {
    margin: 10,
  },
  user: {
    margin: 10,
    alignItems: 'center',
  },
});

class Dashboard extends Component {
  componentWillMount() {
    this.props.fetchUser()
    this.props.fetchBoards()
  }

  state = {
    open: true,
  };

  handleDrawerOpen = () => {
    this.setState({ open: true });
  };

  handleDrawerClose = () => {
    this.setState({ open: false });
  };

  render() {

    const { user, boards, ideas, board, classes } = this.props

    let ideaBlock;

    if (Object.keys(board).length > 0 ) {
      ideaBlock = <IdeaContainer ideas={ ideas } board={ board }/>;
    };

    return (
      <div className={classes.root}>
        <AppBar
          position="absolute"
          className={classNames(classes.appBar, this.state.open && classes.appBarShift)}
          >
          <Toolbar disableGutters={!this.state.open} className={classes.toolbar}>
            <IconButton
              color="inherit"
              aria-label="Open drawer"
              onClick={this.handleDrawerOpen}
              className={classNames(
                classes.menuButton,
                this.state.open && classes.menuButtonHidden,
              )}
            >
              <MenuIcon />
            </IconButton>
            <Typography
            component="h1"
            variant="h6"
            color="inherit"
            noWrap
            className={classes.title}
            >
              Out There
            </Typography>
          </Toolbar>
        </AppBar>

        <Drawer
          variant="permanent"
          classes={{
            paper: classNames(classes.drawerPaper, !this.state.open && classes.drawerPaperClose),
          }}
          open={this.state.open}
          >
          <div className={classes.toolbarIcon}>
            <IconButton onClick={this.handleDrawerClose}>
              <ChevronLeftIcon />
            </IconButton>
          </div>
          <List>
            <BoardList boards={ boards } fetchIdeas={ this.props.fetchIdeas } setBoard={ this.props.setBoard}/>
            <Divider  className={classes.divider}/>
            <Typography className={classes.user}>
              { user.username }
              <a  className={classes.user} href='/logout'>Logout</a>
            </Typography>
          </List>
        </Drawer>

        <main className={classes.content}>
          <div className={classes.appBarSpacer} />
          { ideaBlock }
        </main>
      </div>
    );
  }
}

Dashboard.propTypes = {
  classes: PropTypes.object.isRequired,
};

const mapStateToProps = state => {
  return {
    user: state.user.current,
    boards: state.boards.all,
    ideas: state.ideas.all,
    board: state.boards.current
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({
  fetchUser,
  fetchIdeas,
  fetchBoards,
  setBoard
}, dispatch)

export default withStyles(styles) (connect(mapStateToProps, mapDispatchToProps)(Dashboard))

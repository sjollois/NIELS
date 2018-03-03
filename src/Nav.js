import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import classNames from 'classnames';
import Drawer from 'material-ui/Drawer';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import List from 'material-ui/List';
import Typography from 'material-ui/Typography';
import Divider from 'material-ui/Divider';
import IconButton from 'material-ui/IconButton';
import MenuIcon from 'material-ui-icons/Menu';
import ChevronLeftIcon from 'material-ui-icons/ChevronLeft';
import ChevronRightIcon from 'material-ui-icons/ChevronRight';
import { Contextes, EnPlus } from './tileData';
import AppSearch from'./AppSearch';
import Link from './Link';
import Router from 'next/router';
import NProgress from 'nprogress';
import { Player, ControlBar, VolumeMenuButton } from 'video-react';
import video from '/Users/samueljollois/Documents/GitHub/NIELS/src/video/videoPresentation.m4v';
import logo from './logo.png';
import "video-react/dist/video-react.css";

// Disaply a progress bar between route transitions
NProgress.configure({
    template: `
      <div class="bar" role="bar">
        <dt></dt>
        <dd></dd>
      </div>
    `,
  });
  
  Router.onRouteChangeStart = () => {
    NProgress.start();
  };
  
  Router.onRouteChangeComplete = () => {
    NProgress.done();
  };
  
  Router.onRouteChangeError = () => {
    NProgress.done();
  };

const drawerWidth = 240;

const styles = theme => ({
  root: {
    display: 'flex',
    alignItems: 'stretch',
    minHeight: '100vh - 30px',
    width: '100%',
  },
  grow: {
    flex: '1 1 auto',
    alignItems: 'center',
  },
  growOpen: {
      flex: "1 1 auto",
      alignItems: 'center',
  },
  title: {
    marginLeft: 24,
    flex: '0 1 auto',
  },
  appFrame: {
    position: 'relative',
    display: 'flex',
    width: '100%',
    height: '100%',
  },
  appBar: {
    position: 'absolute',
    height:"100px",
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
  hide: {
    display: 'none',
  },
  drawerPaper: {
    position: 'relative',
    height: 'calc(100vh + 100px)',
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerPaperClose: {
    width: 60,
    height: 'calc(100vh + 100px)',
    overflowX: 'hidden',
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  drawerInner: {
    // Make the items inside not wrap when transitioning:
    width: drawerWidth,
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    height:"100px",
    padding: '0 8px',
    ...theme.mixins.toolbar,
  },
  content: {
    width: '100%',
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: 50,
    height: 'calc(100vh - 130px)',
    marginTop: 56,
    [theme.breakpoints.up('sm')]: {
      height: 'calc(100vh - 130px)',
      marginTop: 64,
    },
  },
});

class MiniDrawer extends React.Component {
  state = {
    open: false,
  };

  handleDrawerOpen = () => {
    this.setState({ open: true });
  };

  handleDrawerClose = () => {
    this.setState({ open: false });
  };

  handleDrawerToggle = () => {
    this.setState({ open: !this.state.open });
  };

  render() {
    const { classes, theme } = this.props;

    return (
      <div className={classes.root}>
        <div className={classes.appFrame}>
          <AppBar className={classNames(classes.appBar, this.state.open && classes.appBarShift)}>
            <Toolbar disableGutters={!this.state.open} margin="0">
              <IconButton
                color="inherit"
                aria-label="open drawer"
                onClick={this.handleDrawerOpen}
                className={classNames(classes.menuButton, this.state.open && classes.hide)}
              >
              
                <MenuIcon />
                                
              </IconButton>
              <Link href="/" onClick={this.handleDrawerToggle} className={classNames(this.state.open && classes.hide)}>
                  <img src={logo} className="App-logo" alt="logo" height="100px"/>
              </Link>
              <div className={classNames(classes.grow, this.state.open && classes.growOpen)}/>               
              <AppSearch/>
            </Toolbar>             
          </AppBar>
          <Drawer
            variant="permanent"
            classes={{
              paper: classNames(classes.drawerPaper, !this.state.open && classes.drawerPaperClose),
            }}
            open={this.state.open}
          >
            <div className={classes.drawerInner}>
              <div className={classes.drawerHeader}>
              <Link href="/" onClick={this.handleDrawerToggle}>
                 <img src={logo} className="App-logo" alt="logo" height="75px"/>
              </Link>
                <IconButton onClick={this.handleDrawerClose}>
                  {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
                </IconButton>
              </div>
              <Divider />
              <List className={classes.list}>{Contextes}</List>
              <Divider />
              <List className={classes.list}>{EnPlus}</List>
            </div>
          </Drawer>
          <main className={classes.content}>
            <Typography>{'Contenu de la page d\'accueil'}</Typography>
            <Player>
              <muted true/>
              <playsInline true />
              <source src={video} />
              <ControlBar>
                <VolumeMenuButton disabled />
            </ControlBar>
            </Player>
          </main>
        </div>
      </div>
    );
  }
}

MiniDrawer.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
  andleDrawerToggle: PropTypes.func.isRequired,
};

export default withStyles(styles, { withTheme: true })(MiniDrawer);
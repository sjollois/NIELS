import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "material-ui/styles";
import classNames from "classnames";
import Drawer from "material-ui/Drawer";
import AppBar from "material-ui/AppBar";
import Toolbar from "material-ui/Toolbar";
import Typography from "material-ui/Typography";
import IconButton from "material-ui/IconButton";
import MenuIcon from "material-ui-icons/Menu";
import ChevronLeftIcon from "material-ui-icons/ChevronLeft";
import ChevronRightIcon from "material-ui-icons/ChevronRight";
import ListeCote from "./ListeCote";
import AppSearch from "./AppSearch";
import Link from "./Link";
import Router from "next/router";
import NProgress from "nprogress";
import {
  Player,
  ControlBar,
  VolumeMenuButton,
  BigPlayButton
} from "video-react";
import video from "/Users/samueljollois/Documents/GitHub/NIELS/src/video/videoPresentation.m4v";
import imageVideo from "/Users/samueljollois/Documents/GitHub/NIELS/src/video/imageVideo.png";
import logo from "./logo.png";
import "video-react/dist/video-react.css";
import Footer from "./AppFooter";

// Disaply a progress bar between route transitions
NProgress.configure({
  template: `
      <div class="bar" role="bar">
        <dt></dt>
        <dd></dd>
      </div>
    `
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

const drawerWidth = 220;

const styles = theme => ({
  root: {
    display: "flex",
    minHeight: "100vh - 30px",
    width: "100%"
  },
  grow: {
    flex: "1 1 auto"
  },
  growOpen: {
    flex: "1 1 auto"
  },
  title: {
    marginLeft: 24,
    flex: "0 1 auto"
  },
  appFrame: {
    display: "flex",
    width: "100%",
    height: "100%"
  },
  appBar: {
    display: "flex",
    justifyContent: "center",
    position: "absolute",
    height: "100px",
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    })
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  menuButton: {
    marginLeft: 12,
    marginRight: 12
  },
  hide: {
    display: "none"
  },
  drawerPaper: {
    position: "relative",
    height: "calc(100vh + 100px)",
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  drawerPaperClose: {
    width: 70,
    height: "calc(100vh + 100px)",
    overflowX: "hidden",
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    })
  },
  drawerInner: {
    // Make the items inside not wrap when transitioning:
    width: drawerWidth
  },
  drawerHeader: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    marginLeft: "10px",
    height: "100px",
    padding: "0 8px",
    ...theme.mixins.toolbar
  },
  content: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "100%",
    backgroundColor: theme.palette.background.default,
    padding: 20,
    height: "calc(100vh - 130px)",
    marginTop: 100,
    [theme.breakpoints.up("sm")]: {
      height: "calc(100vh - 130px)",
      marginTop: 64,
      padding: 60,
      mobile: false
    },
    [theme.breakpoints.up("md")]: {
      padding: 100
    }
  },

  AppLogo: {
    height: 100,
    [theme.breakpoints.down("xs")]: {
      height: 70
    }
  },

  MiniLogo: {
    height: 70
  }
});

class MiniDrawer extends React.Component {
  state = {
    open: false,
    mobile: true
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
      <div>
        <div className={classes.root}>
          <div className={classes.appFrame}>
            <AppBar
              className={classNames(
                classes.appBar,
                this.state.open && classes.appBarShift
              )}
            >
              <Toolbar disableGutters={!this.state.open}>
                <IconButton
                  color="inherit"
                  aria-label="open drawer"
                  onClick={this.handleDrawerOpen}
                  className={classNames(
                    classes.menuButton,
                    this.state.open && classes.hide
                  )}
                >
                  <MenuIcon />
                </IconButton>
                <Link href="/" onClick={this.handleDrawerToggle}>
                  <img
                    src={logo}
                    className={classNames(
                      classes.AppLogo,
                      this.state.open && classes.hide
                    )}
                    alt="logo"
                  />
                </Link>
                <div
                  className={classNames(
                    classes.grow,
                    this.state.open && classes.growOpen
                  )}
                />
                <AppSearch />
              </Toolbar>
            </AppBar>
            <Drawer
              variant="permanent"
              classes={{
                paper: classNames(
                  classes.drawerPaper,
                  !this.state.open && classes.drawerPaperClose
                )
              }}
              open={this.state.open}
            >
              <div className={classes.drawerInner}>
                <div className={classes.drawerHeader}>
                  <Link href="/" onClick={this.handleDrawerToggle}>
                    <img
                      src={logo}
                      className={classNames(classes.MiniLogo)}
                      alt="logo"
                    />
                  </Link>
                  <IconButton onClick={this.handleDrawerClose}>
                    {theme.direction === "rtl" ? (
                      <ChevronRightIcon />
                    ) : (
                      <ChevronLeftIcon />
                    )}
                  </IconButton>
                </div>
                <ListeCote />
              </div>
            </Drawer>
            <main className={classes.content}>
              <Typography align="center" color="primary" variant="headline">
                {"Contenu de la page d'accueil"}
              </Typography>
              <br /> <br />
              <Player poster={imageVideo} playsInline aspectRatio="16:9">
                <muted true />
                <fluid true />
                <preload auto />
                <source src={video} />
                <ControlBar>
                  <VolumeMenuButton disabled />
                </ControlBar>
                <BigPlayButton position="center" />
              </Player>
            </main>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

MiniDrawer.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
  andleDrawerToggle: PropTypes.func.isRequired
};

export default withStyles(styles, { withTheme: true })(MiniDrawer);

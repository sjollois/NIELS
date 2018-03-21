import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "material-ui/styles";
import classNames from "classnames";
import Drawer from "material-ui/Drawer";
import AppBar from "material-ui/AppBar";
import Toolbar from "material-ui/Toolbar";
import IconButton from "material-ui/IconButton";
import MenuIcon from "material-ui-icons/Menu";
import ChevronLeftIcon from "material-ui-icons/ChevronLeft";
import ChevronRightIcon from "material-ui-icons/ChevronRight";
import ListeCote from "./ListeCote";
import AppSearch from "./AppSearch";
import logo from "./logo.png";
import "video-react/dist/video-react.css";
import Footer from "./AppFooter";
import Administratif from "./views/Administratif/Administratif";
import Mobilite from "./views/Mobilité/Mobilite";
import Loisirs from "./views/Loisirs/Loisirs";
import Sante from "./views/Santé/Sante";
import Vente from "./views/Vente/Vente";
import Home from "./views/Home/Home";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

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

  constructor(props) {
    super(props);
    this.state = {
      open: false,
      mobile: true
    };
    this.handleDrawerClose = this.handleDrawerClose.bind(this);
}

handleDrawerClose(){
  this.setState({ open: false });
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
      <Router>
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
                  <Link to="/" onClick={this.handleDrawerClose}>
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
                    <Link to="/" onClick={this.handleDrawerClose}>
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
                  <ListeCote action={this.handleDrawerClose}/>
                </div>
              </Drawer>
              <main className={classes.content}>
                <Switch>
                  <Route exact path="/" component={Home} />
                  <Route path="/Administratif" component={Administratif} />
                  <Route path="/Loisirs" component={Loisirs} />
                  <Route path="/Mobilité" component={Mobilite} />
                  <Route path="/Santé" component={Sante} />
                  <Route path="/Vente" component={Vente} />
                </Switch>
              </main>
            </div>
          </div>
          <Footer />
        </div>
      </Router>
    );
  }
}

MiniDrawer.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
  handleDrawerClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired
};

export default withStyles(styles, { withTheme: true })(MiniDrawer);

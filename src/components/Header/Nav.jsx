import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "material-ui/styles";
import classNames from "classnames";
import Drawer from "material-ui/Drawer";
import AppBar from "material-ui/AppBar";
import Toolbar from "material-ui/Toolbar";
import IconButton from "material-ui/IconButton";
import MenuIcon from "material-ui-icons/Menu";
import HomeIcon from "material-ui-icons/Home";
import ChevronLeftIcon from "material-ui-icons/ChevronLeft";
import ChevronRightIcon from "material-ui-icons/ChevronRight";
import ListeCote from "./ListeCote";
import AppSearch from "./AppSearch";
import logoFond from "../../assets/image/logoFond.png";
import "video-react/dist/video-react.css";
import Footer from "../Footer/AppFooter";
import Administratif from "../../views/Administratif/Administratif";
import Mobilite from "../../views/Mobilité/Mobilite";
import Loisirs from "../../views/Loisirs/Loisirs";
import Sante from "../../views/Santé/Sante";
import Vente from "../../views/Vente/Vente";
import Home from "../../views/Home/Home";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Hidden from "material-ui/Hidden";
import DeafIcon from "react-icons/lib/fa/deaf";
import Tooltip from "material-ui/Tooltip";
import SSwitch from "material-ui/Switch";
import Button from "material-ui/Button";
import { SnackbarContent } from "material-ui/Snackbar";
import HomeHeader from "../../views/Home/HomeHeader";
import SanteHeader from "../../views/Santé/SanteHeader";
import AdministratifHeader from "../../views/Administratif/AdministratifHeader";
import VenteHeader from "../../views/Vente/VenteHeader";
import MobiliteHeader from "../../views/Mobilité/MobiliteHeader";
import LoisirsHeader from "../../views/Loisirs/LoisirsHeader";
import Video from "../../views/Video/Video";
import VideoHeader from "../../views/Video/VideoHeader";
import { Divider } from "material-ui";

const drawerWidth = 220;

const styles = theme => ({
  root: {
    display: "flex",
    minHeight: `calc(100vh + 250px)`,
    height: `950px`,
    width: "100%",
    position: "relative",
    flexGrow: 1,
    zIndex: 1,
    overflow: "hidden"
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
    minHeight: `calc(100vh + 250px)`,
    height: `950px`
  },
  appBar: {
    display: "flex",
    justifyContent: "center",
    position: "absolute",
    height: "110px",
    zIndex: theme.zIndex.drawer + 1,
    [theme.breakpoints.up("md")]: {
      width: `calc(100% - ${drawerWidth}px)`
    },
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
    marginLeft: 0,
    marginRight: 0
  },
  hide: {
    display: "none"
  },
  nohide: {
    display: "unset"
  },
  navIconHide: {
    [theme.breakpoints.up("md")]: {
      display: "none"
    }
  },
  drawerPaper: {
    position: "relative",
    minHeight: `calc(100vh + 250px)`,
    height: `950px`,
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  drawerPaperClose: {
    width: 70,
    minHeight: `calc(100vh + 250px)`,
    height: `950px`,
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
    justifyContent: "center",
    alignItems: "center",
    height: "110px",
    ...theme.mixins.toolbar
  },
  content: {
    width: "calc(100% - 90px)",
    backgroundColor: theme.palette.background.default,
    padding: 10,
    minHeight: `calc(100vh + 100px)`,
    height: "850px",
    marginTop: 100,
    [theme.breakpoints.up("sm")]: {
      marginTop: 64,
      padding: 60,
      mobile: false
    },
    [theme.breakpoints.up("md")]: {
      padding: 70
    }
  },

  AppLogo: {
    height: 60
  },

  MiniLogo: {
    height: 80
  },
  colorier: {
    color: theme.palette.secondary.main
  },
  border: {
    border: "1px solid white",
    borderRadius: "20px",
    marginRight: "10px",
    padding: "5px"
  },
  snackbar: {
    margin: theme.spacing.unit
  },
  close: {
    width: theme.spacing.unit * 4,
    height: theme.spacing.unit * 4
  },
  center: {
    display: "flex",
    justifyContent: "center"
  },
  cote: {
    marginLeft: "30px"
  }
});

class Nav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      mobile: true,
      deaf: false,
      listInfo: ["", "", ""]
    };
    this.handleDrawerClose = this.handleDrawerClose.bind(this);
  }

  handleDrawerClose() {
    this.setState({ open: false });
  }

  handleDrawerOpen = () => {
    this.setState({ open: true });
  };

  handleDrawerClose = () => {
    this.setState({ open: false });
  };

  handleDrawerToggle = () => {
    this.setState({ open: !this.state.open });
  };

  handleToggleDeaf = () => {
    this.setState({ deaf: !this.state.deaf });
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
                      this.state.open && classes.hide,
                      classes.navIconHide
                    )}
                  >
                    <MenuIcon />
                  </IconButton>
                  <Tooltip
                      id="home"
                      title="Retour à la page d'accueil"
                      enterDelay={300}
                    >
                  <Link
                    to="/"
                    style={{ color: "inherit" }}
                    onClick={this.handleDrawerClose}
                  >
                    <IconButton
                      color="inherit"
                      aria-label="open drawer"
                      className={classNames(
                        classes.menuButton,
                        classes.navIconHide
                      )}
                    >
                      <HomeIcon />
                    </IconButton>
                  </Link>
                  </Tooltip>
                  <Hidden mdDown implementation="css" className={classes.cote}>
                    <Switch>
                      <Route exact path="/" component={HomeHeader} />
                      <Route
                        path="/Administratif"
                        component={AdministratifHeader}
                      />
                      <Route path="/Loisirs" component={LoisirsHeader} />
                      <Route path="/Mobilité" component={MobiliteHeader} />
                      <Route path="/Santé" component={SanteHeader} />
                      <Route path="/Vente" component={VenteHeader} />
                      <Route path="/Video" component={VideoHeader} />
                    </Switch>
                  </Hidden>
                  <div
                    className={classNames(
                      classes.grow,
                      this.state.open && classes.growOpen
                    )}
                  />
                  <div
                    className={classNames(
                      this.state.open && classes.hide,
                      !this.state.open && classes.nohide
                    )}
                  >
                    <AppSearch />
                  </div>
                  <Tooltip
                      id="deaf-theme"
                      title="Mode Sourd / Entendant"
                      enterDelay={300}
                    >
                  <div className={classes.border}>
                    <SSwitch
                      checked={this.state.deaf}
                      onChange={this.handleToggleDeaf}
                      value="deaf"
                    />                    
                      <IconButton
                        color="inherit"
                        onClick={this.handleToggleDeaf}
                        aria-labelledby="deaf-theme"
                        className={classNames(
                          this.state.deaf && classes.colorier
                        )}
                      >
                        <DeafIcon />
                      </IconButton>                    
                  </div>
                  </Tooltip>
                </Toolbar>
              </AppBar>
              <Hidden mdUp>
                <Drawer
                  variant="permanent"
                  classes={{
                    paper: classNames(
                      classes.drawerPaper,
                      !this.state.open && classes.drawerPaperClose
                    )
                  }}
                  open={this.state.open}
                  ModalProps={{
                    keepMounted: true // Better open performance on mobile.
                  }}
                >
                  <div className={classes.drawerInner}>
                    <div className={classes.drawerHeader}>
                    <Tooltip
                      id="home"
                      title="Retour à la page d'accueil"
                      enterDelay={300}
                    >
                      <Link to="/" onClick={this.handleDrawerClose}>
                        <img
                          src={logoFond}
                          className={classNames(classes.AppLogo)}
                          alt="logo"
                        />
                      </Link>
                      </Tooltip>
                      <IconButton onClick={this.handleDrawerClose}>
                        {theme.direction === "rtl" ? (
                          <ChevronRightIcon />
                        ) : (
                          <ChevronLeftIcon />
                        )}
                      </IconButton>
                    </div>
                    <ListeCote action={this.handleDrawerClose} />
                  </div>
                </Drawer>
              </Hidden>
              <Hidden smDown implementation="css">
                <Drawer
                  variant="permanent"
                  classes={{
                    paper: classNames(classes.drawerPaper)
                  }}
                  open
                >
                  <div className={classes.drawerInner}>
                    <div className={classes.drawerHeader}>
                    <Tooltip
                      id="home"
                      title="Retour à la page d'accueil"
                      enterDelay={300}
                    >
                      <Link to="/" onClick={this.handleDrawerClose}>
                        <img
                          src={logoFond}
                          className={classNames(classes.MiniLogo)}
                          alt="logo"
                        />
                      </Link>
                      </Tooltip>
                    </div>
                    <ListeCote action={this.handleDrawerClose} />
                  </div>
                </Drawer>
              </Hidden>

              <main className={classes.content}>
                <div className={classes.center}>
                  <SnackbarContent
                    className={classNames(
                      !this.state.deaf && classes.hide,
                      classes.snackbar
                    )}
                    message=" Je suis une personne sourde et j'aimerais communiquer avec vous à l'aide de ce site.
                      Naviguez parmi les différents contextes situés à droite, cliquez sur une des phrases qui vous sera présentée et elle me sera traduite en Langue des Signes Française"
                    action={
                      <Button
                        key="undo"
                        color="secondary"
                        size="small"
                        onClick={this.handleToggleDeaf}
                      >
                        J'ai compris
                      </Button>
                    }
                  />
                </div>
                <Switch>
                  <Route exact path="/" component={Home} />
                  <Route path="/Administratif" component={Administratif} />
                  <Route path="/Loisirs" component={Loisirs} />
                  <Route path="/Mobilité" component={Mobilite} />
                  <Route path="/Santé" component={Sante} />
                  <Route path="/Vente" component={Vente} />
                  <Route
                    path={`/Video/:contexte/:sousContexte/:video/:path`}
                    component={Video}
                  />
                </Switch>
              </main>
            </div>
          </div>
          <Divider/>
          <Footer />
        </div>
      </Router>
    );
  }
}

Nav.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired
};

export default withStyles(styles, { withTheme: true })(Nav);

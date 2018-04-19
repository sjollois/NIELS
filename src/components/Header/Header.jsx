import React from "react";
import { withStyles } from "material-ui/styles";
import classNames from "classnames";
//Importe des composants nécessaires pour le menu déroulant et la barre horizontale de header
import Drawer from "material-ui/Drawer";
import AppBar from "material-ui/AppBar";
import Toolbar from "material-ui/Toolbar";
//Importe des icones pour les afficher dans le header, toujours depuis Material-UI
import IconButton from "material-ui/IconButton";
import MenuIcon from "material-ui-icons/Menu";
import HomeIcon from "material-ui-icons/Home";
import ChevronLeftIcon from "material-ui-icons/ChevronLeft";
import ChevronRightIcon from "material-ui-icons/ChevronRight";
//Importe le composant permettant d'afficher les différents élèments dans le menu latérale gauche
import ListeCote from "./ListeCote";
//Importe le composant de la barre de recherche pour l'afficher graphiquement mais elle n'est pas encore fonctionnel
import AppSearch from "./AppSearch";
//importe image de logo
import logoFond from "../../assets/image/logoFond.png";
// eslint-disable-next-line
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
//importe le composant qui permet de cacher en fontion de la taille de l'écran participedonc à la responsivité
import Hidden from "material-ui/Hidden";
//importe les composants nécessaires au bouton sourd : une icone et un bouton switch
import DeafIcon from "react-icons/lib/fa/deaf";
import SSwitch from "material-ui/Switch";
//composant de material-UI qui apporte de l'information lorsque le curseur survole un endroit entouré de Tooltip dans le code
import Tooltip from "material-ui/Tooltip";
//Importe le nom des pages qui s'affichera dans le header (passibilité de factoriser à l'avenir)
import HomeHeader from "./HomeHeader";
import SanteHeader from "./SanteHeader";
import AdministratifHeader from "./AdministratifHeader";
import VenteHeader from "./VenteHeader";
import MobiliteHeader from "./MobiliteHeader";
import LoisirsHeader from "./LoisirsHeader";
import VideoHeader from "./VideoHeader";

const drawerWidth = 220;

const styles = theme => ({
  grow: {
    flex: "1 1 auto"
  },
  growOpen: {
    flex: "1 1 auto"
  },
  appFrame: {
    display: "flex",
    width: 70,
    minHeight: `calc(100vh + 500px)`,
    [theme.breakpoints.up("sm")]: {
      minHeight: `calc(100vh + 750px)`
    },
    [theme.breakpoints.up("md")]: {
      minHeight: `calc(100vh + 700px)`,
      width: drawerWidth
    },
    [theme.breakpoints.up("lg")]: {
      minHeight: `calc(100vh + 530px)`
    },
    height: `650px`
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
    minHeight: `calc(100vh + 500px)`,
    [theme.breakpoints.up("sm")]: {
      minHeight: `calc(100vh + 750px)`
    },
    [theme.breakpoints.up("md")]: {
      minHeight: `calc(100vh + 700px)`
    },
    [theme.breakpoints.up("lg")]: {
      minHeight: `calc(100vh + 530px)`
    },
    height: `650px`,
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  drawerPaperClose: {
    width: 70,
    minHeight: `calc(100vh + 500px)`,
    [theme.breakpoints.up("sm")]: {
      minHeight: `calc(100vh + 750px)`
    },
    [theme.breakpoints.up("md")]: {
      minHeight: `calc(100vh + 700px)`
    },
    [theme.breakpoints.up("lg")]: {
      minHeight: `calc(100vh + 530px)`
    },
    height: `650px`,
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

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      mobile: true
    };
    this.handleDrawerClose = this.handleDrawerClose.bind(this);
  }
  //fonction qui permet de changer l'état de open, la variable indiquant si le menu déroulant est ouvert ou fermé
  handleDrawerClose() {
    this.setState({ open: false });
  }

  handleDrawerOpen = () => {
    this.setState({ open: true });
  };

  handleDrawerToggle = () => {
    this.setState({ open: !this.state.open });
  };

  //Fonction qui récupère et exécute la fonction qui a été passé en paramètre dans App
  handleToggleDeaf = () => {
    this.props.action();
  };

  render() {
    const { classes, theme } = this.props;

    return (
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
            {/*Message affiché lorsque le curseur passe au dessus de l'icone d'accueil*/}
            <Tooltip
              id="home"
              title="Retour à la page d'accueil"
              enterDelay={300}
            >
              {/*Redirige vers l'accueil*/}
              <Link
                to="/"
                style={{ color: "inherit" }}
                onClick={this.handleDrawerClose}
              >
                {/*Affiche le bouton pour aller vers l'accueil, seulement sur mobile*/}
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
            {/*Le composant Hidden permet de cacher ici le Switch lorsque l'écran et plus petit que md*/}
            <Hidden mdDown implementation="css" className={classes.cote}>
              <Switch>
                <Route exact path="/" component={HomeHeader} />
                <Route path="/Administratif" component={AdministratifHeader} />
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
            {/*Implémente le bouton Sourd avec le petit message qui va avec*/}
            <Tooltip
              id="deaf-theme"
              title="Mode Sourd / Entendant"
              enterDelay={300}
            >
              <div className={classes.border}>
                <SSwitch
                  checked={this.props.deaf}
                  onChange={this.handleToggleDeaf}
                  value="deaf"
                />
                <IconButton
                  color="inherit"
                  onClick={this.handleToggleDeaf}
                  aria-labelledby="deaf-theme"
                  className={classNames(this.state.deaf && classes.colorier)}
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
            ModalProps={
              { keepMounted: true } // Better open performance on mobile.
            }
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
              {/*Affiche la liste des différents contextes sur la côté et passe en paramètre la fonction qui permet de refermer la barre*/}
              <ListeCote action={this.handleDrawerClose} />
            </div>
          </Drawer>
        </Hidden>
        {/*Permet de laisser la barre latérale ouverte lorsque l'écran est suffissament large*/}
        <Hidden smDown implementation="css">
          <Drawer
            variant="permanent"
            classes={{ paper: classNames(classes.drawerPaper) }}
            open
          >
            <div className={classes.drawerInner}>
              <div className={classes.drawerHeader}>
                <Tooltip
                  id="home"
                  title="Retour à la page d'accueil"
                  enterDelay={300}
                >
                  <Link to="/">
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
      </div>
    );
  }
}

export default withStyles(styles, { withTheme: true })(Header);

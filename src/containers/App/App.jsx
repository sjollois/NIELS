import React, { Component } from "react";
import Header from "../../components/Header/Header";
import PropTypes from "prop-types";
import { withStyles } from "material-ui/styles";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Administratif from "../../views/Administratif";
import Mobilite from "../../views/Mobilite";
import Loisirs from "../../views/Loisirs";
import Sante from "../../views/Sante";
import Vente from "../../views/Vente";
import Home from "../../views/Home";
import Footer from "../../components/Footer/Footer";
import Video from "../../views/Video";
import { Divider } from "material-ui";
import { SnackbarContent } from "material-ui/Snackbar";
import * as firebase from "firebase";
import classNames from "classnames";
import Button from "material-ui/Button";

const drawerWidth = 90;

// Initialize Firebase
// TODO: Replace with your project's customized code snippet
var config = {
  apiKey: "AIzaSyBucdYWDVGM-mHGD5PI73BJt9eAujxES5E",
  authDomain: "niels-9065d.firebaseapp.com",
  databaseURL: "https://niels-9065d.firebaseio.com",
  projectId: "niels-9065d",
  storageBucket: "niels-9065d.appspot.com",
  messagingSenderId: "118788307716"
};

const styles = theme => ({
  root: {
    display: "flex",
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
    width: "100%",
    position: "relative",
    flexGrow: 1,
    zIndex: 1,
    overflow: "hidden"
  },
  hide: {
    display: "none"
  },
  content: {
    width: `calc(100% - ${drawerWidth}px)`,
    backgroundColor: theme.palette.background.default,
    padding: 10,
    minHeight: `calc(100vh + 450px)`,
    height: "550px",
    marginTop: 100,
    [theme.breakpoints.up("sm")]: {
      marginTop: 64,
      padding: 60,
      mobile: false,
      minHeight: `calc(100vh + 750px)`
    },
    [theme.breakpoints.up("md")]: {
      padding: 70,
      minHeight: `calc(100vh + 530px)`
    }
  },
  snackbar: {
    margin: theme.spacing.unit
  },
  center: {
    display: "flex",
    justifyContent: "center"
  },
});

class App extends Component {
  constructor(props, context) {
    super(props, context);
    firebase.initializeApp(config);
    this.state = {
      deaf: false
    };
    this.handleToggleDeaf = this.handleToggleDeaf.bind(this);
  }

  handleToggleDeaf = () => {
    this.setState({ deaf: !this.state.deaf });
  };

  render() {
    const { classes } = this.props;
    return (
      <Router>
        <div>
          <div className={classes.root}>
            <Header action={this.handleToggleDeaf} deaf={this.state.deaf} />
            <main className={classes.content}>
              <div className={classes.center}>
                <SnackbarContent
                  className={classNames(
                    !this.state.deaf && classes.hide,
                    classes.snackbar
                  )}
                  message=" Je suis une personne sourde et j'aimerais communiquer avec vous à l'aide de ce site.
                      Naviguez parmi les différents contextes situés à gauche, cliquez sur une des phrases qui vous sera présentée et elle me sera traduite en Langue des Signes Française"
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
          <Divider />
          <Footer />
        </div>
      </Router>
    );
  }
}

App.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired
};

export default withStyles(styles, { withTheme: true })(App);

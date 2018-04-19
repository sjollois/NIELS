import React, { Component } from "react";
//importe le composant Header et Footer
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
//Rend la page avec le style implémenté dans ce fichier
import { withStyles } from "material-ui/styles";
//Permet de créer des liens avec les autres pages
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
//Importe l'ensembles des autres pages qui existent
import Administratif from "../../views/Administratif";
import Mobilite from "../../views/Mobilite";
import Loisirs from "../../views/Loisirs";
import Sante from "../../views/Sante";
import Vente from "../../views/Vente";
import Home from "../../views/Home";
import Video from "../../views/Video";
//Importe un composant du package material-ui permettant de tracer une barre et effectuer des divisions sur la page
import { Divider } from "material-ui";
//Importe un composant du package material-ui permettant d'afficher des petites fenêtres modale et permettant de
//de l'information en plus à l'utilsiateur lorsqu'on clique sur un bouton
import { SnackbarContent } from "material-ui/Snackbar";
//importe tout les composants de firebase afin de connecter l'application à la base de donnée
import * as firebase from "firebase";
//importe un composant permettant d'appeler plusieurs classes de style dans le HTML
import classNames from "classnames";
//importe le composant de material-UI spécifique aux boutons
import Button from "material-ui/Button";

//indique la taille du menu déroulant
const drawerWidth = 90;

// Initialize Firebase
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
    //dans le but de garder une responsivité de l'application
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
  }
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
  //fonction qui permet de changer l'état du bouton sourd
  handleToggleDeaf = () => {
    this.setState({ deaf: !this.state.deaf });
  };

  render() {
    const { classes } = this.props;
    return (
      //Permet d'utiliser Switch et Route
      <Router>
        <div>
          <div className={classes.root}>
            {/*passage en paramètre dans le composant Header de la fonction qui permet de changer l'état du bouton sourd 
        ainsi que de la variable concernant l'état en lui-même*/}
            <Header action={this.handleToggleDeaf} deaf={this.state.deaf} />
            <main className={classes.content}>
              <div className={classes.center}>
                {/*Message affiché lorsque le bouton sourd est activé*/}
                <SnackbarContent
                  className={classNames(
                    !this.state.deaf && classes.hide,
                    classes.snackbar
                  )}
                  message=" Je suis une personne sourde et j'aimerais communiquer avec vous à l'aide de ce site.
                      Naviguez parmi les différents contextes situés à gauche, cliquez sur une des phrases qui vous sera présentée et elle me sera traduite en Langue des Signes Française"
                  action={
                    /* Bouton pour fermer le message */
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
              {/*Le composant Switch va nous permettre de changer le contenu de la page en fonction de l'adresse URL 
            et nous permet de rediriger vers un composant ; 
            Seul le composant Administratif sera commenté car il sont sensiblement les mêmes à quelques icones et mots près
            Cela sera donc à Factoriser à l'avenir*/}
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

//Exporte le composant App avec son style et son thème
export default withStyles(styles, { withTheme: true })(App);

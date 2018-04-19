import React from "react";
import Typography from "material-ui/Typography";
//Composant qui permet de s'échanger des paramètres
import PropTypes from "prop-types";
import { withStyles } from "material-ui/styles";
//Composants permettant de créer la barre d'onglets
import AppBar from "material-ui/AppBar";
import Tabs, { Tab } from "material-ui/Tabs";
//Composant permettant de glisser entre les différents onglets, rendu possible suelement sur mobile
import SwipeableViews from "react-swipeable-views";
//Importation des icones correspondant à chaque sous-contexe
import AttachMoney from "material-ui-icons/AttachMoney";
import LocationCity from "material-ui-icons/LocationCity";
import LocalPostOffice from "material-ui-icons/LocalPostOffice";
import School from "material-ui-icons/School";
//Composant qui affiche la liste des proposées avec en paramètres : le contexte, sous-contexte et le nombre de phrases à afficher
import Questions from "../components/Questions";
import Hidden from "material-ui/Hidden";
import logo from "../assets/image/logo.png";

//Fonction permettant de créer le contenu de chaque onglet
function TabContainer({ children, dir }) {
  return (
    <Typography
      component="div"
      dir={dir}
      style={{ padding: 5, paddingTop: 12 }}
    >
      {children}
    </Typography>
  );
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired,
  dir: PropTypes.string.isRequired
};

const styles = theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    width: "100%"
  },
  paper: {
    [theme.breakpoints.down("xs")]: {
      width: "calc(100% - 100px)"
    }
  },
  AppLogo: {
    height: 200,
    [theme.breakpoints.down("sm")]: {
      height: 100
    }
  },
  center: {
    display: "flex",
    justifyContent: "center"
  }
});

class Administratif extends React.Component {
  constructor(props) {
    super(props);
    //Value correspond à la valeur de l'onglet choisi entre 0,1,2 ou 3 avec 4 sous-contextes sans le sous-contexte générale
    this.state = {
      value: this.props.location.param
    };
  }

  //Fonctions permettant de changer la valeur de value
  handleChange = (event, value) => {
    this.setState({ value });
  };

  handleChangeIndex = index => {
    this.setState({ value: index });
  };

  render() {
    const { classes, theme } = this.props;
    const { value } = this.state;
    return (
      <div>
        <br />
        <Typography color="primary" variant="subheading">
          Phrases Générales :
        </Typography>
        {/*Deux affichages différents pours les phrases générales ont en affiche moins sur mobile qu'ordinateur
      à cause de la taille des écrans*/}
        <Hidden smDown implementation="css">
          <br />
          <Questions contexte="Administratif" sousContexte="Generale" nbr={4} />
          <br />
        </Hidden>
        <Hidden mdUp>
          <Questions contexte="Administratif" sousContexte="Generale" nbr={3} />
        </Hidden>
        <br />
        <Typography color="primary" variant="subheading">
          Phrases spécifiques aux contextes :
        </Typography>
        <Hidden smDown implementation="css">
          <br />
        </Hidden>
        <div className={classes.root}>
          {/*On implémente la barre des onglets*/}
          <AppBar position="static" color="default">
            <Tabs
              value={this.state.value}
              onChange={this.handleChange}
              indicatorColor="primary"
              textColor="primary"
              fullWidth
              scrollable
              centered
            >
              <Tab icon={<AttachMoney />} label="Banque" />
              <Tab icon={<LocationCity />} label="Mairie" />
              <Tab icon={<LocalPostOffice />} label="Poste" />
              <Tab icon={<School />} label="Scolarité" />
            </Tabs>
          </AppBar>
          {/*Et les contenus de chaque onglets avec toujours le souci d'affichage entre ordinateur et mobile*/}
          <Hidden smDown implementation="css">
            <SwipeableViews
              axis={theme.direction === "rtl" ? "x-reverse" : "x"}
              index={this.state.value}
              onChangeIndex={this.handleChangeIndex}
            >
              {value === 0 && (
                <TabContainer dir={theme.direction}>
                  <Questions
                    contexte="Administratif"
                    sousContexte="Banque"
                    nbr={9}
                  />
                </TabContainer>
              )}
              {value === 1 && (
                <TabContainer dir={theme.direction}>
                  <Questions
                    contexte="Administratif"
                    sousContexte="Mairie"
                    nbr={9}
                  />
                </TabContainer>
              )}
              {value === 2 && (
                <TabContainer dir={theme.direction}>
                  <Questions
                    contexte="Administratif"
                    sousContexte="Poste"
                    nbr={9}
                  />
                </TabContainer>
              )}
              {value === 3 && (
                <TabContainer dir={theme.direction}>
                  <Questions
                    contexte="Administratif"
                    sousContexte="Scolarite"
                    nbr={9}
                  />
                </TabContainer>
              )}
            </SwipeableViews>
          </Hidden>
          <Hidden mdUp>
            <SwipeableViews
              axis={theme.direction === "rtl" ? "x-reverse" : "x"}
              index={this.state.value}
              onChangeIndex={this.handleChangeIndex}
            >
              {value === 0 && (
                <TabContainer dir={theme.direction}>
                  <Questions
                    contexte="Administratif"
                    sousContexte="Banque"
                    nbr={7}
                  />
                </TabContainer>
              )}
              {value === 1 && (
                <TabContainer dir={theme.direction}>
                  <Questions
                    contexte="Administratif"
                    sousContexte="Mairie"
                    nbr={7}
                  />
                </TabContainer>
              )}
              {value === 2 && (
                <TabContainer dir={theme.direction}>
                  <Questions
                    contexte="Administratif"
                    sousContexte="Poste"
                    nbr={7}
                  />
                </TabContainer>
              )}
              {value === 3 && (
                <TabContainer dir={theme.direction}>
                  <Questions
                    contexte="Administratif"
                    sousContexte="Scolarite"
                    nbr={7}
                  />
                </TabContainer>
              )}
            </SwipeableViews>
          </Hidden>
        </div>
        <Hidden lgUp>
          <br />
          <br />
          <br />
        </Hidden>
        <Hidden only={["xs", "sm", "md", "xl"]}>
          <br />
        </Hidden>
        <div className={classes.center}>
          <img src={logo} className={classes.AppLogo} alt="logo" />
        </div>
      </div>
    );
  }
}
export default withStyles(styles, { withTheme: true })(Administratif);

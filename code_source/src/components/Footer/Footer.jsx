import React from "react";
import { withStyles } from "material-ui/styles";
//Importe un composant du package material-ui permettant de d'afficher des phrases avec quelques paramètres
//comme le type de calligraphie (taille) ou si elle peut faire office de div par exemple
import Typography from "material-ui/Typography";
//Composant de Material-UI qui permet de réaliser des grilles
import Grid from "material-ui/Grid";
//Composant permettant la redirection vers des pages autres que ceux de l'application
import Link from "../Link";
import classNames from "classnames";

const styleSheet = theme => ({
  root: {
    overflow: "auto"
  },
  layout: {
    padding: theme.spacing.unit * 3,
    paddingBottom: theme.spacing.unit * 3,
    marginLeft: "calc(50% - 120px)",
    [theme.breakpoints.up("md")]: {
      marginLeft: "calc(50% - 300px)"
    }
  },
  list: {
    margin: 0,
    paddingLeft: 0,
    listStyle: "none"
  },
  listItem: {
    paddingTop: theme.spacing.unit / 2,
    paddingBottom: theme.spacing.unit / 2
  },
  version: {
    marginBottom: theme.spacing.unit
  },
  bas: {
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3
  }
});

function Footer(props) {
  const { classes } = props;

  return (
    <footer className={classes.root}>
      <div className={classes.layout}>
        <Typography variant="subheading" component="div">
          <Grid container spacing={0}>
            <Grid item xs={6} sm={6}>
              <ul className={classes.list}>
                <li className={classes.listItem}>
                  <Link
                    href="https://github.com/sjollois/NIELS"
                    //redirige vers un onglet crée
                    target="_blank"
                  >
                    GitHub
                  </Link>
                </li>
                <li className={classes.listItem}>
                  <Link href="https://reactjs.org" target="_blank">
                    React
                  </Link>
                </li>
              </ul>
            </Grid>
            <Grid item xs={6} sm={6}>
              <ul className={classes.list}>
                <li className={classes.listItem}>
                  <Link href="https://ensc.bordeaux-inp.fr/fr" target="_blank">
                    ENSC
                  </Link>
                </li>
                <li className={classes.listItem}>
                  <Link href="https://material-ui-next.com" target="_blank">
                    Material-UI
                  </Link>
                </li>
              </ul>
            </Grid>
          </Grid>
        </Typography>
      </div>
      <Typography
        className={classNames(classes.version, classes.bas)}
        align="center"
      >
        © 2017-2018 All Rights Reserved <br />Projets Transpromo et Informatique
        Individuel ENSC
      </Typography>
    </footer>
  );
}

export default withStyles(styleSheet)(Footer);

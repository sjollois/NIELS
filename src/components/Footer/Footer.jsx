import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "material-ui/styles";
import Typography from "material-ui/Typography";
import Grid from "material-ui/Grid";
import Link from "../Link";
import classNames from "classnames";

const styleSheet = theme => ({
  root: {
    overflow: "auto",
 
  },
  layout: {
    padding: theme.spacing.unit * 3,
    paddingBottom: theme.spacing.unit*3,
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
    marginBottom: theme.spacing.unit,
  },
  bas:{
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
      <Typography className={classNames(classes.version,classes.bas)} align="center">
          © 2017-2018 All Rights Reserved <br/>Projets Transpromo et Informatique Individuel ENSC      
      </Typography>
    </footer>
  );
}

Footer.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styleSheet)(Footer);

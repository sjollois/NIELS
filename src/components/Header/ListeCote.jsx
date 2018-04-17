import React from "react";
import PropTypes from "prop-types";
import { withRouter } from "react-router";
import { withStyles } from "material-ui/styles";
import compose from "recompose/compose";
import List, { ListItem, ListItemIcon, ListItemText } from "material-ui/List";
import Folder from "material-ui-icons/Folder";
import ShoppingCart from "material-ui-icons/ShoppingCart";
import LocalActivity from "material-ui-icons/LocalActivity";
import Hospital from "material-ui-icons/LocalHospital";
import Train from "material-ui-icons/Train";
import Favorite from "material-ui-icons/Favorite";
import History from "material-ui-icons/History";
import Help from "material-ui-icons/Help";
import Collapse from "material-ui/transitions/Collapse";
import ExpandLess from "material-ui-icons/ExpandLess";
import ExpandMore from "material-ui-icons/ExpandMore";
import AttachMoney from "material-ui-icons/AttachMoney";
import LocationCity from "material-ui-icons/LocationCity";
import LocalPostOffice from "material-ui-icons/LocalPostOffice";
import School from "material-ui-icons/School";
import Store from "material-ui-icons/Store";
import Hotel from "material-ui-icons/Hotel";
import LocalLibrary from "material-ui-icons/LocalLibrary";
import ShoppingBasket from "material-ui-icons/ShoppingBasket";
import Restaurant from "material-ui-icons/Restaurant";
import HospitalIcons from "react-icons/lib/fa/hospital-o";
import LocalPharmacy from "material-ui-icons/LocalPharmacy";
import Medecin from "react-icons/lib/fa/stethoscope";
import Livre from "react-icons/lib/fa/book";
import LocalMovies from "material-ui-icons/LocalMovies";
import AccountBalance from "material-ui-icons/AccountBalance";
import Icon from "react-icons-kit";
import { iosFootball } from "react-icons-kit/ionicons/iosFootball";
import Flight from "material-ui-icons/Flight";
import Bus from "material-ui-icons/DirectionsBus";
import People from "material-ui-icons/People";
import Tram from "material-ui-icons/Tram";
import Divider from "material-ui/Divider";
import Tooltip from "material-ui/Tooltip";
// eslint-disable-next-line
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import pink from "material-ui/colors/pink";

const styles = theme => ({
  nested: {
    paddingLeft: theme.spacing.unit * 4
  },
  colorier: {
    color: pink[900]
  }
});

class ListeCote extends React.Component {
  state = {
    open1: false,
    open2: false,
    open3: false,
    open4: false,
    open5: false
  };

  handleClick1 = () => {
    this.setState({
      open1: !this.state.open1,
      open2: false,
      open3: false,
      open4: false,
      open5: false
    });
  };

  handleClick2 = () => {
    this.setState({
      open2: !this.state.open2,
      open1: false,
      open3: false,
      open4: false,
      open5: false
    });
  };

  handleClick3 = () => {
    this.setState({
      open3: !this.state.open3,
      open2: false,
      open1: false,
      open4: false,
      open5: false
    });
  };

  handleClick4 = () => {
    this.setState({
      open4: !this.state.open4,
      open2: false,
      open3: false,
      open1: false,
      open5: false
    });
  };

  handleClick5 = () => {
    this.setState({
      open5: !this.state.open5,
      open2: false,
      open3: false,
      open4: false,
      open1: false
    });
  };

  handleClose = () => {
    this.setState({
      open5: false,
      open2: false,
      open3: false,
      open4: false,
      open1: false
    });
    this.props.action();
  };

  render() {
    const { classes, location } = this.props;

    const Ad0 = {
      pathname: "/Administratif",
      param: 0
    };
    const Ad1 = {
      pathname: "/Administratif",
      param: 1
    };
    const Ad2 = {
      pathname: "/Administratif",
      param: 2
    };
    const Ad3 = {
      pathname: "/Administratif",
      param: 3
    };

    const Lo0 = {
      pathname: "/Loisirs",
      param: 0
    };
    const Lo1 = {
      pathname: "/Loisirs",
      param: 1
    };
    const Lo2 = {
      pathname: "/Loisirs",
      param: 2
    };
    const Lo3 = {
      pathname: "/Loisirs",
      param: 3
    };

    const Mo0 = {
      pathname: "/Mobilité",
      param: 0
    };
    const Mo1 = {
      pathname: "/Mobilité",
      param: 1
    };
    const Mo2 = {
      pathname: "/Mobilité",
      param: 2
    };
    const Mo3 = {
      pathname: "/Mobilité",
      param: 3
    };

    const Ve0 = {
      pathname: "/Vente",
      param: 0
    };
    const Ve1 = {
      pathname: "/Vente",
      param: 1
    };
    const Ve2 = {
      pathname: "/Vente",
      param: 2
    };
    const Ve3 = {
      pathname: "/Vente",
      param: 3
    };
    const Ve4 = {
      pathname: "/Vente",
      param: 4
    };

    const Sa0 = {
      pathname: "/Santé",
      param: 0
    };
    const Sa1 = {
      pathname: "/Santé",
      param: 1
    };
    const Sa2 = {
      pathname: "/Santé",
      param: 2
    };

    return (
      <div>
        <Divider />
        <List component="nav">
          <ListItem
            button
            onClick={this.handleClick1}
            disabled={location.pathname === "/Administratif"}
          >
            <ListItemIcon>
              <Folder className={classes.colorier} />
            </ListItemIcon>
            <ListItemText inset primary="Administratif" color="primary" />
            {this.state.open1 ? <ExpandLess /> : <ExpandMore />}
          </ListItem>
          <Collapse in={this.state.open1} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <Link
                to={Ad0}
                style={{ textDecoration: "none" }}
                onClick={this.handleClose}
              >
                <ListItem button className={classes.nested}>
                  <ListItemIcon>
                    <AttachMoney />
                  </ListItemIcon>
                  <ListItemText inset primary="Banque" />
                </ListItem>
              </Link>
              <Link
                to={Ad1}
                style={{ textDecoration: "none" }}
                onClick={this.handleClose}
              >
                <ListItem button className={classes.nested}>
                  <ListItemIcon>
                    <LocationCity />
                  </ListItemIcon>
                  <ListItemText inset primary="Mairie" />
                </ListItem>
              </Link>
              <Link
                to={Ad2}
                style={{ textDecoration: "none" }}
                onClick={this.handleClose}
              >
                <ListItem button className={classes.nested}>
                  <ListItemIcon>
                    <LocalPostOffice />
                  </ListItemIcon>
                  <ListItemText inset primary="Poste" />
                </ListItem>
              </Link>
              <Link
                to={Ad3}
                style={{ textDecoration: "none" }}
                onClick={this.handleClose}
              >
                <ListItem button className={classes.nested}>
                  <ListItemIcon>
                    <School />
                  </ListItemIcon>
                  <ListItemText inset primary="Scolarité" />
                </ListItem>
              </Link>
            </List>
          </Collapse>
          <br />
          <ListItem
            button
            onClick={this.handleClick2}
            disabled={location.pathname === "/Vente"}
          >
            <ListItemIcon>
              <ShoppingCart className={classes.colorier} />
            </ListItemIcon>
            <ListItemText inset primary="Vente" />
            {this.state.open2 ? <ExpandLess /> : <ExpandMore />}
          </ListItem>
          <Collapse in={this.state.open2} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <Link
                to={Ve0}
                style={{ textDecoration: "none" }}
                onClick={this.handleClose}
              >
                <ListItem button className={classes.nested}>
                  <ListItemIcon>
                    <Store />
                  </ListItemIcon>
                  <ListItemText inset primary="Épicerie" />
                </ListItem>
              </Link>
              <Link
                to={Ve1}
                style={{ textDecoration: "none" }}
                onClick={this.handleClose}
              >
                <ListItem button className={classes.nested}>
                  <ListItemIcon>
                    <Hotel />
                  </ListItemIcon>
                  <ListItemText inset primary="Hôtel" />
                </ListItem>
              </Link>
              <Link
                to={Ve2}
                style={{ textDecoration: "none" }}
                onClick={this.handleClose}
              >
                <ListItem button className={classes.nested}>
                  <ListItemIcon>
                    <LocalLibrary />
                  </ListItemIcon>
                  <ListItemText inset primary="Librairie" />
                </ListItem>
              </Link>
              <Link
                to={Ve3}
                style={{ textDecoration: "none" }}
                onClick={this.handleClose}
              >
                <ListItem button className={classes.nested}>
                  <ListItemIcon>
                    <ShoppingBasket />
                  </ListItemIcon>
                  <ListItemText inset primary="Prêt-à-porter" />
                </ListItem>
              </Link>
              <Link
                to={Ve4}
                style={{ textDecoration: "none" }}
                onClick={this.handleClose}
              >
                <ListItem button className={classes.nested}>
                  <ListItemIcon>
                    <Restaurant />
                  </ListItemIcon>
                  <ListItemText inset primary="Restauration" />
                </ListItem>
              </Link>
            </List>
          </Collapse>
          <br />
          <ListItem
            button
            onClick={this.handleClick3}
            disabled={location.pathname === "/Santé"}
          >
            <ListItemIcon>
              <Hospital className={classes.colorier} />
            </ListItemIcon>
            <ListItemText inset primary="Santé" />
            {this.state.open3 ? <ExpandLess /> : <ExpandMore />}
          </ListItem>
          <Collapse in={this.state.open3} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <Link
                to={Sa0}
                style={{ textDecoration: "none" }}
                onClick={this.handleClose}
              >
                <ListItem button className={classes.nested}>
                  <ListItemIcon>
                    <HospitalIcons />
                  </ListItemIcon>
                  <ListItemText inset primary="Hôpital" />
                </ListItem>
              </Link>
              <Link
                to={Sa1}
                style={{ textDecoration: "none" }}
                onClick={this.handleClose}
              >
                <ListItem button className={classes.nested}>
                  <ListItemIcon>
                    <Medecin />
                  </ListItemIcon>
                  <ListItemText inset primary="Médecin" />
                </ListItem>
              </Link>
              <Link
                to={Sa2}
                style={{ textDecoration: "none" }}
                onClick={this.handleClose}
              >
                <ListItem button className={classes.nested}>
                  <ListItemIcon>
                    <LocalPharmacy />
                  </ListItemIcon>
                  <ListItemText inset primary="Pharmacie" />
                </ListItem>
              </Link>
            </List>
          </Collapse>
          <br />
          <ListItem
            button
            onClick={this.handleClick4}
            disabled={location.pathname === "/Loisirs"}
          >
            <ListItemIcon>
              <LocalActivity className={classes.colorier} />
            </ListItemIcon>
            <ListItemText primary="Loisirs" />
            {this.state.open4 ? <ExpandLess /> : <ExpandMore />}
          </ListItem>
          <Collapse in={this.state.open4} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <Link
                to={Lo0}
                style={{ textDecoration: "none" }}
                onClick={this.handleClose}
              >
                <ListItem button className={classes.nested}>
                  <ListItemIcon>
                    <Livre />
                  </ListItemIcon>
                  <ListItemText inset primary="Bibliothèque" />
                </ListItem>
              </Link>
              <Link
                to={Lo1}
                style={{ textDecoration: "none" }}
                onClick={this.handleClose}
              >
                <ListItem button className={classes.nested}>
                  <ListItemIcon>
                    <LocalMovies />
                  </ListItemIcon>
                  <ListItemText inset primary="Cinéma" />
                </ListItem>
              </Link>
              <Link
                to={Lo2}
                style={{ textDecoration: "none" }}
                onClick={this.handleClose}
              >
                <ListItem button className={classes.nested}>
                  <ListItemIcon>
                    <AccountBalance />
                  </ListItemIcon>
                  <ListItemText inset primary="Musée" />
                </ListItem>
              </Link>
              <Link
                to={Lo3}
                style={{ textDecoration: "none" }}
                onClick={this.handleClose}
              >
                <ListItem button className={classes.nested}>
                  <ListItemIcon>
                    <Icon size={25} icon={iosFootball} />
                  </ListItemIcon>
                  <ListItemText inset primary="Sport" />
                </ListItem>
              </Link>
            </List>
          </Collapse>
          <br />
          <ListItem
            button
            onClick={this.handleClick5}
            disabled={location.pathname === "/Mobilité"}
          >
            <ListItemIcon>
              <Tram className={classes.colorier} />
            </ListItemIcon>
            <ListItemText primary="Mobilité" />
            {this.state.open5 ? <ExpandLess /> : <ExpandMore />}
          </ListItem>
          <Collapse in={this.state.open5} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <Link
                to={Mo0}
                style={{ textDecoration: "none" }}
                onClick={this.handleClose}
              >
                <ListItem button className={classes.nested}>
                  <ListItemIcon>
                    <Flight />
                  </ListItemIcon>
                  <ListItemText inset primary="Avion" />
                </ListItem>
              </Link>
              <Link
                to={Mo1}
                style={{ textDecoration: "none" }}
                onClick={this.handleClose}
              >
                <ListItem button className={classes.nested}>
                  <ListItemIcon>
                    <Bus />
                  </ListItemIcon>
                  <ListItemText inset primary="Bus" />
                </ListItem>
              </Link>
              <Link
                to={Mo2}
                style={{ textDecoration: "none" }}
                onClick={this.handleClose}
              >
                <ListItem button className={classes.nested}>
                  <ListItemIcon>
                    <People />
                  </ListItemIcon>
                  <ListItemText inset primary="Espaces publics" />
                </ListItem>
              </Link>
              <Link
                to={Mo3}
                style={{ textDecoration: "none" }}
                onClick={this.handleClose}
              >
                <ListItem button className={classes.nested}>
                  <ListItemIcon>
                    <Train />
                  </ListItemIcon>
                  <ListItemText inset primary="Train" />
                </ListItem>
              </Link>
            </List>
          </Collapse>
        </List>
        <br />
        <Divider />
        <br />
        <Tooltip
          id="nonFonctionnel"
          title="Cette fonctionnalité n'est pas encore déployée, elle le sera très bientôt !"
          enterDelay={300}
        >
          <ListItem button>
            <ListItemIcon>
              <Favorite />
            </ListItemIcon>
            <ListItemText primary="Mes phrases" />
          </ListItem>
        </Tooltip>
        <br />
        <Tooltip
          id="nonFonctionnel"
          title="Celle-ci est également en production, un peu de patience !"
          enterDelay={300}
        >
          <ListItem button>
            <ListItemIcon>
              <History />
            </ListItemIcon>
            <ListItemText primary="Mon historique" />
          </ListItem>
        </Tooltip>
        <br />
        <Tooltip
          id="nonFonctionnel"
          title="Bientôt, Bientôt!"
          enterDelay={300}
        >
          <ListItem button>
            <ListItemIcon>
              <Help />
            </ListItemIcon>
            <ListItemText primary="Aide" />
          </ListItem>
        </Tooltip>
      </div>
    );
  }
}

ListeCote.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired
};

export default compose(
  withStyles(
    styles,
    { withTheme: true },
    {
      name: "ListeCote"
    }
  ),
  withRouter
)(ListeCote);

import React from "react";
import PropTypes from "prop-types";
import { withRouter } from 'react-router'
import { withStyles } from "material-ui/styles";
import compose from 'recompose/compose';
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
// eslint-disable-next-line
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const styles = theme => ({
  nested: {
    paddingLeft: theme.spacing.unit * 4
  },
  colorier: {
    color: theme.palette.primary.main
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
    this.setState({ open1: !this.state.open1,open2: false,open3: false,open4: false,open5: false });
  };

  handleClick2 = () => {
    this.setState({ open2: !this.state.open2,open1: false,open3: false,open4: false,open5: false });
  };

  handleClick3 = () => {
    this.setState({ open3: !this.state.open3,open2: false,open1: false,open4: false,open5: false });
  };

  handleClick4 = () => {
    this.setState({ open4: !this.state.open4,open2: false,open3: false,open1: false,open5: false });
  };

  handleClick5 = () => {
    this.setState({ open5: !this.state.open5,open2: false,open3: false,open4: false,open1: false });
  };

  handleClose = () => {
    this.setState({ open5: false,open2: false,open3: false,open4: false,open1: false });
    this.props.action();
  };

  render() {
    const { classes, location } = this.props;

    return (
      <div>
        <Divider />
        <List component="nav">
          <ListItem button onClick={this.handleClick1}>
            <ListItemIcon>
              <Folder className={location.pathname === "/Administratif" && classes.colorier}/>
            </ListItemIcon>
            <ListItemText inset primary="Administratif" />
            {this.state.open1 ? <ExpandLess /> : <ExpandMore />}
          </ListItem>
          <Collapse in={this.state.open1} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <Link to="/Administratif" style={{ textDecoration: 'none' }}  onClick={this.handleClose}>
                <ListItem button className={classes.nested}>
                  <ListItemIcon>
                    <AttachMoney/>
                  </ListItemIcon>
                  <ListItemText inset primary="Banque"/>
                </ListItem>
              </Link>
              <Link to="/Administratif" style={{ textDecoration: 'none' }} onClick={this.handleClose}>
                <ListItem button className={classes.nested}>
                  <ListItemIcon>
                    <LocationCity />
                  </ListItemIcon>
                  <ListItemText inset primary="Mairie" />
                </ListItem>
              </Link>
              <Link to="/Administratif" style={{ textDecoration: 'none' }} onClick={this.handleClose}>
                <ListItem button className={classes.nested}>
                  <ListItemIcon>
                    <LocalPostOffice />
                  </ListItemIcon>
                  <ListItemText inset primary="Poste" />
                </ListItem>
              </Link>
              <Link to="/Administratif" style={{ textDecoration: 'none' }} onClick={this.handleClose}>
                <ListItem button className={classes.nested}>
                  <ListItemIcon>
                    <School />
                  </ListItemIcon>
                  <ListItemText inset primary="Scolarité" />
                </ListItem>
              </Link>
            </List>
          </Collapse>
          <ListItem button onClick={this.handleClick2}>
            <ListItemIcon>
              <ShoppingCart className={location.pathname === "/Vente" && classes.colorier}/>
            </ListItemIcon>
            <ListItemText inset primary="Vente" />
            {this.state.open2 ? <ExpandLess /> : <ExpandMore />}
          </ListItem>
          <Collapse in={this.state.open2} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <Link to="/Vente" style={{ textDecoration: 'none' }} onClick={this.handleClose}>
                <ListItem button className={classes.nested}>
                  <ListItemIcon>
                    <Store />
                  </ListItemIcon>
                  <ListItemText inset primary="Épicerie" />
                </ListItem>
              </Link>
              <Link to="/Vente" style={{ textDecoration: 'none' }} onClick={this.handleClose}>
                <ListItem button className={classes.nested}>
                  <ListItemIcon>
                    <Hotel />
                  </ListItemIcon>
                  <ListItemText inset primary="Hôtel" />
                </ListItem>
              </Link>
              <Link to="/Vente" style={{ textDecoration: 'none' }} onClick={this.handleClose}>
                <ListItem button className={classes.nested}>
                  <ListItemIcon>
                    <LocalLibrary />
                  </ListItemIcon>
                  <ListItemText inset primary="Librairie" />
                </ListItem>
              </Link>
              <Link to="/Vente" style={{ textDecoration: 'none' }} onClick={this.handleClose}>
                <ListItem button className={classes.nested}>
                  <ListItemIcon>
                    <ShoppingBasket />
                  </ListItemIcon>
                  <ListItemText inset primary="Prêt-à-porter" />
                </ListItem>
              </Link>
              <Link to="/Vente" style={{ textDecoration: 'none' }} onClick={this.handleClose}>
                <ListItem button className={classes.nested}>
                  <ListItemIcon>
                    <Restaurant />
                  </ListItemIcon>
                  <ListItemText inset primary="Restauration" />
                </ListItem>
              </Link>
            </List>
          </Collapse>
          <ListItem button onClick={this.handleClick3}>
            <ListItemIcon>
              <Hospital className={location.pathname === "/Santé" && classes.colorier}/>
            </ListItemIcon>
            <ListItemText inset primary="Santé" />
            {this.state.open3 ? <ExpandLess /> : <ExpandMore />}
          </ListItem>
          <Collapse in={this.state.open3} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <Link to="/Santé" style={{ textDecoration: 'none' }} onClick={this.handleClose}>
                <ListItem button className={classes.nested}>
                  <ListItemIcon>
                    <HospitalIcons />
                  </ListItemIcon>
                  <ListItemText inset primary="Hôpital" />
                </ListItem>
              </Link>
              <Link to="/Santé" style={{ textDecoration: 'none' }} onClick={this.handleClose}>
                <ListItem button className={classes.nested}>
                  <ListItemIcon>
                    <Medecin />
                  </ListItemIcon>
                  <ListItemText inset primary="Médecin" />
                </ListItem>
              </Link>
              <Link to="/Santé" style={{ textDecoration: 'none' }} onClick={this.handleClose}>
                <ListItem button className={classes.nested}>
                  <ListItemIcon>
                    <LocalPharmacy />
                  </ListItemIcon>
                  <ListItemText inset primary="Pharmacie" />
                </ListItem>
              </Link>
            </List>
          </Collapse>
          <ListItem button onClick={this.handleClick4}>
            <ListItemIcon>
              <LocalActivity className={location.pathname === "/Loisirs" && classes.colorier}/>
            </ListItemIcon>
            <ListItemText primary="Loisirs" />
            {this.state.open4 ? <ExpandLess /> : <ExpandMore />}
          </ListItem>
          <Collapse in={this.state.open4} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <Link to="/Loisirs" style={{ textDecoration: 'none' }} onClick={this.handleClose}>
                <ListItem button className={classes.nested}>
                  <ListItemIcon>
                    <Livre />
                  </ListItemIcon>
                  <ListItemText inset primary="Bibilothèque" />
                </ListItem>
              </Link>
              <Link to="/Loisirs" style={{ textDecoration: 'none' }} onClick={this.handleClose}>
                <ListItem button className={classes.nested}>
                  <ListItemIcon>
                    <LocalMovies />
                  </ListItemIcon>
                  <ListItemText inset primary="Cinéma" />
                </ListItem>
              </Link>
              <Link to="/Loisirs" style={{ textDecoration: 'none' }} onClick={this.handleClose}>
                <ListItem button className={classes.nested}>
                  <ListItemIcon>
                    <AccountBalance />
                  </ListItemIcon>
                  <ListItemText inset primary="Musée" />
                </ListItem>
              </Link>
              <Link to="/Loisirs" style={{ textDecoration: 'none' }} onClick={this.handleClose}>
                <ListItem button className={classes.nested}>
                  <ListItemIcon>
                    <Icon size={25} icon={iosFootball} />
                  </ListItemIcon>
                  <ListItemText inset primary="Sport" />
                </ListItem>
              </Link>
            </List>
          </Collapse>
          <ListItem button onClick={this.handleClick5}>
            <ListItemIcon>
              <Tram className={location.pathname === "/Mobilité" && classes.colorier}/>
            </ListItemIcon>
            <ListItemText primary="Mobilité" />
            {this.state.open5 ? <ExpandLess /> : <ExpandMore />}
          </ListItem>
          <Collapse in={this.state.open5} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <Link to="/Mobilité" style={{ textDecoration: 'none' }} onClick={this.handleClose}>
                <ListItem button className={classes.nested}>
                  <ListItemIcon>
                    <Flight />
                  </ListItemIcon>
                  <ListItemText inset primary="Avion" />
                </ListItem>
              </Link>
              <Link to="/Mobilité" style={{ textDecoration: 'none' }} onClick={this.handleClose}>
                <ListItem button className={classes.nested}>
                  <ListItemIcon>
                    <Bus />
                  </ListItemIcon>
                  <ListItemText inset primary="Bus" />
                </ListItem>
              </Link>
              <Link to="/Mobilité" style={{ textDecoration: 'none' }} onClick={this.handleClose}>
                <ListItem button className={classes.nested}>
                  <ListItemIcon>
                    <People />
                  </ListItemIcon>
                  <ListItemText inset primary="Espaces publics" />
                </ListItem>
              </Link>
              <Link to="/Mobilité" style={{ textDecoration: 'none' }} onClick={this.handleClose}>
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
        <Divider />
        <ListItem button>
          <ListItemIcon>
            <Favorite />
          </ListItemIcon>
          <ListItemText primary="Mes phrases" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <History />
          </ListItemIcon>
          <ListItemText primary="Mon historique" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <Help />
          </ListItemIcon>
          <ListItemText primary="Aide" />
        </ListItem>
      </div>
    );
  }
}

ListeCote.propTypes = {
  classes: PropTypes.object.isRequired,
    open: PropTypes.bool.isRequired,
    theme: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired

};

export default compose(withStyles(styles, { withTheme: true }, {
  name: 'ListeCote',
}),withRouter)(ListeCote);

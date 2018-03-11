import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "material-ui/styles";
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

import Divider from "material-ui/Divider";

const styles = theme => ({
  nested: {
    paddingLeft: theme.spacing.unit * 4
  }
});

class ListeCote extends React.Component {
  state = {
    open1: false, open2: false, open3: false, open4: false, open5: false
  };

  handleClick1 = () => {
    this.setState({ open1: !this.state.open1 });
  };

  handleClick2 = () => {
    this.setState({ open2: !this.state.open2 });
  };

  handleClick3 = () => {
    this.setState({ open3: !this.state.open3 });
  };

  handleClick4 = () => {
    this.setState({ open4: !this.state.open4 });
  };

  handleClick5 = () => {
    this.setState({ open5: !this.state.open5 });
  };

  render() {
    const { classes } = this.props;

    return (
      <div>
        <Divider />
        <List component="nav">
          <ListItem button onClick={this.handleClick1}>
            <ListItemIcon>
              <Folder />
            </ListItemIcon>
            <ListItemText inset primary="Administratif" />
            {this.state.open1 ? <ExpandLess /> : <ExpandMore />}
          </ListItem>
          <Collapse in={this.state.open1} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItem button className={classes.nested}>
                <ListItemIcon>
                  <AttachMoney />
                </ListItemIcon>
                <ListItemText inset primary="Banque" />
              </ListItem>
              <ListItem button className={classes.nested}>
                <ListItemIcon>
                  <LocationCity />
                </ListItemIcon>
                <ListItemText inset primary="Mairie" />
              </ListItem>
              <ListItem button className={classes.nested}>
                <ListItemIcon>
                  <LocalPostOffice />
                </ListItemIcon>
                <ListItemText inset primary="Poste" />
              </ListItem>
              <ListItem button className={classes.nested}>
                <ListItemIcon>
                  <School />
                </ListItemIcon>
                <ListItemText inset primary="Scolarité" />
              </ListItem>
            </List>
          </Collapse>
          <ListItem button onClick={this.handleClick2}>
            <ListItemIcon>
              <ShoppingCart />
            </ListItemIcon>
            <ListItemText inset primary="Vente" />
            {this.state.open2 ? <ExpandLess /> : <ExpandMore />}
          </ListItem>
          <Collapse in={this.state.open2} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItem button className={classes.nested}>
                <ListItemIcon>
                  <Store />
                </ListItemIcon>
                <ListItemText inset primary="Épicerie" />
              </ListItem>
              <ListItem button className={classes.nested}>
                <ListItemIcon>
                  <Hotel />
                </ListItemIcon>
                <ListItemText inset primary="Hôtel" />
              </ListItem>
              <ListItem button className={classes.nested}>
                <ListItemIcon>
                  <LocalLibrary />
                </ListItemIcon>
                <ListItemText inset primary="Librairie" />
              </ListItem>
              <ListItem button className={classes.nested}>
                <ListItemIcon>
                  <ShoppingBasket />
                </ListItemIcon>
                <ListItemText inset primary="Prêt-à-porter" />
              </ListItem>
              <ListItem button className={classes.nested}>
                <ListItemIcon>
                  <Restaurant />
                </ListItemIcon>
                <ListItemText inset primary="Restauration" />
              </ListItem>
            </List>
          </Collapse>
          <ListItem button>
            <ListItemIcon>
              <Hospital />
            </ListItemIcon>
            <ListItemText primary="Santé" />
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <LocalActivity />
            </ListItemIcon>
            <ListItemText primary="Loisirs" />
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <Train />
            </ListItemIcon>
            <ListItemText primary="Mobilité" />
          </ListItem>
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
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ListeCote);

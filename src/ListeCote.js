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
import StarBorder from "material-ui-icons/StarBorder";
import Divider from "material-ui/Divider";

const styles = theme => ({
  nested: {
    paddingLeft: theme.spacing.unit * 4
  }
});

class ListeCote extends React.Component {
  state = {
    open1: false
  };

  handleClick = () => {
    this.setState({ open1: !this.state.open1 });
  };

  render() {
    const { classes } = this.props;

    return (
      <div>
        <Divider />
        <List component="nav">
          <ListItem button onClick={this.handleClick}>
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
                  <StarBorder />
                </ListItemIcon>
                <ListItemText inset primary="Starred" />
              </ListItem>
            </List>
          </Collapse>
          <ListItem button>
            <ListItemIcon>
              <ShoppingCart />
            </ListItemIcon>
            <ListItemText primary="Vente" />
          </ListItem>
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

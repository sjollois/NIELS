import React from "react";
import Typography from "material-ui/Typography";
import PropTypes from "prop-types";
import { withStyles } from "material-ui/styles";
import AppBar from "material-ui/AppBar";
import Tabs, { Tab } from "material-ui/Tabs";
import SwipeableViews from "react-swipeable-views";
import Store from "material-ui-icons/Store";
import Hotel from "material-ui-icons/Hotel";
import LocalLibrary from "material-ui-icons/LocalLibrary";
import ShoppingBasket from "material-ui-icons/ShoppingBasket";
import Restaurant from "material-ui-icons/Restaurant";
import Questions from "../../Questions";

function TabContainer({ children, dir }) {
  return (
    <Typography component="div" dir={dir} style={{ padding: 8 * 3 }}>
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
  }
});

class Vente extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: this.props.location.param
        };
  }

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
        <br /> <br />
        <Typography color="primary" variant="subheading">
          Phrases Générales :
        </Typography>
        <br />
        <Questions contexte="Vente" sousContexte="Generale" nbr={3} />
        <br /> <br />
        <Typography color="primary" variant="subheading">
          Phrases spécifiques aux sous-contextes :
        </Typography>
        <br />
        <div className={classes.root}>
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
              <Tab icon={<Store />} label="Épicerie" />
              <Tab icon={<Hotel />} label="Hôtel" />
              <Tab icon={<LocalLibrary />} label="Librairie" />
              <Tab icon={<ShoppingBasket />} label="Prêt-à-porter" />
              <Tab icon={<Restaurant />} label="Restauration" />
            </Tabs>
          </AppBar>
          <SwipeableViews
            axis={theme.direction === "rtl" ? "x-reverse" : "x"}
            index={this.state.value}
            onChangeIndex={this.handleChangeIndex}
          >
            {value === 0 && (
              <TabContainer dir={theme.direction}>
                <Questions contexte="Vente" sousContexte="Epicerie" nbr={6} />
              </TabContainer>
            )}
            {value === 1 && (
              <TabContainer dir={theme.direction}>
                <Questions contexte="Vente" sousContexte="Hotel" nbr={6} />
              </TabContainer>
            )}
            {value === 2 && (
              <TabContainer dir={theme.direction}>
                <Questions
                  contexte="Vente"
                  sousContexte="Librairie"
                  nbr={6}
                />
              </TabContainer>
            )}
            {value === 3 && (
              <TabContainer dir={theme.direction}>
                <Questions contexte="Vente" sousContexte="PretAPorter" nbr={6} />
              </TabContainer>
            )}
            {value === 4 && (
              <TabContainer dir={theme.direction}>
                <Questions contexte="Vente" sousContexte="Restauration" nbr={6} />
              </TabContainer>
            )}
          </SwipeableViews>
        </div>
      </div>
    );
  }
}

Vente.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired
};

export default withStyles(styles, { withTheme: true })(Vente);

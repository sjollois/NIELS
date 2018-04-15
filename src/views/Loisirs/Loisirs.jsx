import React from "react";
import Typography from "material-ui/Typography";
import PropTypes from "prop-types";
import { withStyles } from "material-ui/styles";
import AppBar from "material-ui/AppBar";
import Tabs, { Tab } from "material-ui/Tabs";
import SwipeableViews from "react-swipeable-views";
import Livre from "react-icons/lib/fa/book";
import LocalMovies from "material-ui-icons/LocalMovies";
import AccountBalance from "material-ui-icons/AccountBalance";
import Icon from "react-icons-kit";
import { iosFootball } from "react-icons-kit/ionicons/iosFootball";
import Questions from "../../components/Questions";

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
  }
});

class Loisirs extends React.Component {
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
        <Questions contexte="Loisirs" sousContexte="Generale" nbr={3} />
        <br /> <br />
        <Typography color="primary" variant="subheading">
          Phrases spécifiques aux contextes :
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
              <Tab icon={<Livre fontSize="25px" />} label="Bibliothèque" />
              <Tab icon={<LocalMovies />} label="Cinéma" />
              <Tab icon={<AccountBalance />} label="Musée" />
              <Tab icon={<Icon size={25} icon={iosFootball} />} label="Sport" />
            </Tabs>
          </AppBar>
          <SwipeableViews
            axis={theme.direction === "rtl" ? "x-reverse" : "x"}
            index={this.state.value}
            onChangeIndex={this.handleChangeIndex}
          >
            {value === 0 && (
              <TabContainer dir={theme.direction}>
                <Questions
                  contexte="Loisirs"
                  sousContexte="Bibliotheque"
                  nbr={6}
                />
              </TabContainer>
            )}
            {value === 1 && (
              <TabContainer dir={theme.direction}>
                <Questions contexte="Loisirs" sousContexte="Cinema" nbr={6} />
              </TabContainer>
            )}
            {value === 2 && (
              <TabContainer dir={theme.direction}>
                <Questions contexte="Loisirs" sousContexte="Musee" nbr={6} />
              </TabContainer>
            )}
            {value === 3 && (
              <TabContainer dir={theme.direction}>
                <Questions contexte="Loisirs" sousContexte="Sport" nbr={6} />
              </TabContainer>
            )}
          </SwipeableViews>
        </div>
      </div>
    );
  }
}

Loisirs.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired
};

export default withStyles(styles, { withTheme: true })(Loisirs);

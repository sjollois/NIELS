import React from "react";
import Typography from "material-ui/Typography";
import PropTypes from "prop-types";
import { withStyles } from "material-ui/styles";
import AppBar from "material-ui/AppBar";
import Tabs, { Tab } from "material-ui/Tabs";
import SwipeableViews from "react-swipeable-views";
import HospitalIcons from "react-icons/lib/fa/hospital-o";
import LocalPharmacy from "material-ui-icons/LocalPharmacy";
import Medecin from "react-icons/lib/fa/stethoscope";
import Questions from "../../components/Questions";

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

class Sante extends React.Component {
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
        <Questions contexte="Sante" sousContexte="Generale" nbr={3} />
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
              centered
            >
              <Tab icon={<HospitalIcons fontSize="25px" />} label="Hôpital" />
              <Tab icon={<Medecin fontSize="25px" />} label="Médecin" />
              <Tab icon={<LocalPharmacy />} label="Pharmacie" />
            </Tabs>
          </AppBar>
          <SwipeableViews
            axis={theme.direction === "rtl" ? "x-reverse" : "x"}
            index={this.state.value}
            onChangeIndex={this.handleChangeIndex}
          >
            {value === 0 && (
              <TabContainer dir={theme.direction}>
                <Questions contexte="Sante" sousContexte="Hopital" nbr={6} />
              </TabContainer>
            )}
            {value === 1 && (
              <TabContainer dir={theme.direction}>
                <Questions contexte="Sante" sousContexte="Medecin" nbr={6} />
              </TabContainer>
            )}
            {value === 2 && (
              <TabContainer dir={theme.direction}>
                <Questions
                  contexte="Sante"
                  sousContexte="Pharmacie"
                  nbr={6}
                />
              </TabContainer>
            )}
          </SwipeableViews>
        </div>
      </div>
    );
  }
}

Sante.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired
};

export default withStyles(styles, { withTheme: true })(Sante);

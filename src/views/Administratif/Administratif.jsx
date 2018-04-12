import React from "react";
import Typography from "material-ui/Typography";
import PropTypes from "prop-types";
import { withStyles } from "material-ui/styles";
import AppBar from "material-ui/AppBar";
import Tabs, { Tab } from "material-ui/Tabs";
import SwipeableViews from "react-swipeable-views";
import AttachMoney from "material-ui-icons/AttachMoney";
import LocationCity from "material-ui-icons/LocationCity";
import LocalPostOffice from "material-ui-icons/LocalPostOffice";
import School from "material-ui-icons/School";
import QuestionsBanque from "./QuestionsBanque";
import QuestionsPoste from "./QuestionsPoste";
import QuestionsScolarite from "./QuestionsScolarite";
import QuestionsMairie from "./QuestionsMairie";

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

class Administratif extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        value: this.props.location.param
    };    
};

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
              <Tab icon={<AttachMoney />} label="Banque" />
              <Tab icon={<LocationCity />} label="Mairie" />
              <Tab icon={<LocalPostOffice />} label="Poste" />
              <Tab icon={<School />} label="Scolarité" />
            </Tabs>
          </AppBar>
          <SwipeableViews
            axis={theme.direction === "rtl" ? "x-reverse" : "x"}
            index={this.state.value}
            onChangeIndex={this.handleChangeIndex}
          >
            {(value === 0) && (
              <TabContainer dir={theme.direction}>
                <QuestionsBanque/>
              </TabContainer>
            )}
            {(value === 1) && (
              <TabContainer dir={theme.direction}>
                <QuestionsMairie/>
              </TabContainer>
            )}
            {(value === 2) && (
              <TabContainer dir={theme.direction}>
                <QuestionsPoste/>
              </TabContainer>
            )}
            {(value === 3) && (
              <TabContainer dir={theme.direction}>
                <QuestionsScolarite/>
              </TabContainer>
            )}
          </SwipeableViews>
        </div>
      </div>
    );
  }
}

Administratif.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired
};

export default withStyles(styles, { withTheme: true })(Administratif);

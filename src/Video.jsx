import React from "react";
import Typography from "material-ui/Typography";
import PropTypes from "prop-types";
import { withStyles } from "material-ui/styles";
import * as firebase from "firebase";
import {
    Player,
    ControlBar,
    VolumeMenuButton,
    BigPlayButton
  } from "video-react";

// Initialize Firebase
// TODO: Replace with your project's customized code snippet
var config = {
    apiKey: "AIzaSyBucdYWDVGM-mHGD5PI73BJt9eAujxES5E",
    authDomain: "niels-9065d.firebaseapp.com",
    databaseURL: "https://niels-9065d.firebaseio.com",
    projectId: "niels-9065d",
    storageBucket: "",
    messagingSenderId: "118788307716"
  };
  firebase.initializeApp(config);
var firestore = firebase.firestore();

const docRef = firestore.doc("videos/video1");
const mydata = docRef.data();

const styles = theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    width: "100%"
  }
});

class Administratif extends React.Component {

  render() {
    const { classes, theme } = this.props;
    return (
      <div>
        <br /> <br />
        <Player
          
          playsInline
          aspectRatio="16:9"
          width="500"
          height="400"
        >
          <muted true />
          <fluid true />
          <preload auto />
          <source src={mydata.path} />
          <ControlBar>
            <VolumeMenuButton disabled />
          </ControlBar>
          <BigPlayButton position="center" />
        </Player>
      </div>
    );
  }
}

Administratif.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired
};

export default withStyles(styles, { withTheme: true })(Administratif);
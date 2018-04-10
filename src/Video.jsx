import React from "react";
import Typography from "material-ui/Typography";
import PropTypes from "prop-types";
import { withStyles } from "material-ui/styles";
import {
  Player,
  ControlBar,
  VolumeMenuButton,
  BigPlayButton
} from "video-react";
import * as firebase from "firebase";

const styles = theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    width: "100%"
  }
});

// Initialize Firebase
// TODO: Replace with your project's customized code snippet
var config = {
  apiKey: "AIzaSyBucdYWDVGM-mHGD5PI73BJt9eAujxES5E",
  authDomain: "niels-9065d.firebaseapp.com",
  databaseURL: "https://niels-9065d.firebaseio.com",
  projectId: "niels-9065d",
  storageBucket: "niels-9065d.appspot.com",
  messagingSenderId: "118788307716"
};

class Video extends React.Component {
  constructor() {
    super();

    this.state = { loading: true };
    firebase.initializeApp(config);
  }
  componentWillMount() {
    const ref = firebase.database().ref("videos");

    ref.on("value", snapshot => {
      this.setState({
        video: snapshot.val(),
        loading: false
      });
    });

  }

  render() {
    const { classes, theme } = this.props;
    if ((this.state.loading)) {
      return <h1> Chargement</h1>
    }
    const source = this.state.video[0].path
    const path = require(`${source}`)  
    const path1 = require("/Users/samueljollois/Documents/GitHub/NIELS/src/video/horaire4.mp4")
      return (
        <div>
          <br /> <br />
          <Player playsInline aspectRatio="16:9" width="500" height="400">
            <muted true />
            <fluid true />
            <preload auto />
            <source src={path1}/>
            <ControlBar>
              <VolumeMenuButton disabled />
            </ControlBar>
            <BigPlayButton position="center" />
          </Player>
        </div>
      );
    }
  }


Video.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired
};

export default withStyles(styles, { withTheme: true })(Video);

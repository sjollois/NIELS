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
import Loading from "react-loading-animation";

const styles = theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    width: "100%"
  }
});

class Video extends React.Component {
  constructor() {
    super();

    this.state = { loading: true };
  }
  componentWillMount() {
    const ref = firebase.database().ref("Administratif/Banque");

    ref.on("value", snapshot => {
      this.setState({
        video: snapshot.val(),
        loading: false
      });
    });
  }

  render() {
    if (this.state.loading) {
      return (
        <div>
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <Loading />
        </div>
      );
    }
    const source = this.state.video[0].path;
    if (this.state.video[0].video === "true") {
      const videoWatch = require(`./video/${source}.mp4`);
      return (
        <div>
          <br />
          <Typography color="primary" variant="headline" align="center">
            Traduction LSF de la phrase :
          </Typography>
          <Typography color="primary" variant="subheading" align="center">
            "{source.replace(/_/g, " ")} ? "
          </Typography>
          <br />
          <Player aspectRatio="16:9" width="500" height="400">
            <playsInline true />
            <muted true />
            <fluid true />
            <preload auto />
            <source src={videoWatch} />
            <ControlBar>
              <VolumeMenuButton disabled />
            </ControlBar>
            <BigPlayButton position="center" />
          </Player>
        </div>
      );
    } else {
      return (
        <div>
          <br />
          <Typography color="primary" variant="headline" align="center">
            Traduction LSF de la phrase :
          </Typography>
          <Typography color="primary" variant="subheading" align="center">
            "{source}"
          </Typography>
          <br />
          <Typography color="primary" variant="headline" align="center">
            Pas de video pour l'instant ^^'
          </Typography>
        </div>
      );
    }
  }
}

Video.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired
};

export default withStyles(styles, { withTheme: true })(Video);

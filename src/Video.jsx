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
  constructor(props) {
    super(props);
    this.state = { loading: true,
    value: this.props.match.params.path,
    contexte: this.props.match.params.contexte,
    sousContexte: this.props.match.params.sousContexte
    }
  }
  componentWillMount() {
    const ref = firebase.database().ref(`${this.state.contexte}/${this.state.sousContexte}`);

    ref.orderByChild('path').equalTo(`${this.state.value}?`).on("value", snapshot => {
        this.setState({
          videoDone: snapshot.val()[Object.keys(snapshot.val())[0]].video
        });
    });

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
    if (this.state.videoDone) {
      const videoPath=this.state.value;
      const videoWatch = require(`./video/${videoPath.replace(/ /g, '_').slice(0,-1)}.mp4`);
      return (
        <div>
          <br />
          <Typography color="primary" variant="headline" align="center">
            Traduction LSF de la phrase :
          </Typography>
          <Typography color="primary" variant="subheading" align="center">
            "{this.state.value} ?"
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
      console.log(this.state.value);
      return (
        <div>
          <br />
          <Typography color="primary" variant="headline" align="center">
            Traduction LSF de la phrase :
          </Typography>
          <Typography color="primary" variant="subheading" align="center">
            "{this.state.value} ?"
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

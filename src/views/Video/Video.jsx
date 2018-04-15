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
    this.state = {
      loading: true,
      value: this.props.match.params.path,
      contexte: this.props.match.params.contexte,
      sousContexte: this.props.match.params.sousContexte,
      videoDone: this.props.match.params.video
    };
  }
  componentWillMount() {
    const ref = firebase
      .database()
      .ref(`${this.state.contexte}/${this.state.sousContexte}`);

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
    console.log(this.state.videoDone);
    if (this.state.videoDone === "true") {
      const videoPath = this.state.value;
      var correctPath = videoPath;
      if (videoPath.substr(-1) === " " || videoPath.substr(-1) === ".") {
        correctPath = videoPath.slice(0, -1);
      }
      correctPath = correctPath.replace(/ /g, "_");
      // eslint-disable-next-line
      const videoWatch = require(`../../assets/video/${correctPath}.mp4`);
      var phrase = videoPath;
      if (videoPath.substr(-1) !== ".") {
        phrase = `${this.state.value} ?`;
      }
      return (
        <div>
          <br />
          <Typography color="primary" variant="headline" align="center">
            Traduction en Langue des Signes Française de la phrase :
          </Typography>
          <Typography color="primary" variant="display1" align="center">
            "{phrase.replace("$", "'")}"
          </Typography>
          <br />
          <Player
            aspectRatio="16:9"
            width={500}
            height={400}
            muted
            fluid
            preload="auto"
            playsInline
          >
            <source src={videoWatch} />
            <ControlBar>
              <VolumeMenuButton disabled />
            </ControlBar>
            <BigPlayButton position="center" />
          </Player>
        </div>
      );
    } else {
      const videoPath = this.state.value;
      if (videoPath.substr(-1) !== ".") {
        phrase = `${this.state.value} ?`;
      }
      return (
        <div>
          <br />
          <Typography color="primary" variant="headline" align="center">
            Traduction en Langue des Signes Française de la phrase :
          </Typography>
          <Typography color="primary" variant="display1" align="center">
            "{phrase.replace("$", "'")}"
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

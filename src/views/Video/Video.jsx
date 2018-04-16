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
import Hidden from "material-ui/Hidden";
import Questions from "../../components/Questions";

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
      value: this.props.match.params.path,
      contexte: this.props.match.params.contexte,
      sousContexte: this.props.match.params.sousContexte,
      videoDone: this.props.match.params.video
    };
  }

  componentWillReceiveProps(nextProps) {
    if (!(nextProps.match.params.path === this.state.value))
    {
      this.setState({
        value: nextProps.match.params.path,
        contexte: nextProps.match.params.contexte,
        sousContexte: nextProps.match.params.sousContexte,
        videoDone: nextProps.match.params.video
      });
    window.location.reload();
    }
  }

  render() {
    if (this.state.videoDone === "true") {
      const videoPath = this.state.value;
      var correctPath = videoPath;
      if (videoPath.substr(-1) === " " || videoPath.substr(-1) === ".") {
        correctPath = videoPath.slice(0, -1);
      }
      correctPath = correctPath.replace(/ /g, "_");
      const videoWatch = require(`../../assets/video/${correctPath}.mp4`);
      var phrase = videoPath;
      if (videoPath.substr(-1) !== ".") {
        phrase = `${this.state.value} ?`;
      }
      return (
        <div>
          <Hidden smDown implementation="css">
            <Typography color="primary" variant="headline" align="center">
              Traduction en Langue des Signes Française de la phrase :
            </Typography>
            <br />
            <Typography color="primary" variant="display1" align="center">
              "{phrase.replace("$", "'")}"
            </Typography>
            <br />
          </Hidden>
          <Hidden smUp>
            <br />
            <Typography color="primary" variant="subheading" align="center">
              Traduction en Langue des Signes Française de la phrase :
            </Typography>
            <br />
            <Typography color="primary" variant="headline" align="center">
              "{phrase.replace("$", "'")}"
            </Typography>
          </Hidden>
          <Player
            aspectRatio="16:9"
            width={500}
            height={400}
            muted="true"
            fluid
            preload="auto"
            ref="player"
          >
            <source src={videoWatch} />
            <ControlBar>
              <VolumeMenuButton disabled />
            </ControlBar>
            <BigPlayButton position="center" />
          </Player>
          <br />
          <br />
          <Hidden smUp>
            <Typography color="primary" variant="subheading">
              Phrases du même contexte :
            </Typography>
          </Hidden>
          <Hidden smDown implementation="css">
            <Typography color="primary" variant="headline">
              Phrases du même contexte :
            </Typography>
          </Hidden>
          <br />
          <Questions
            contexte={this.state.contexte}
            sousContexte={this.state.sousContexte}
            nbr={3}
          />
        </div>
      );
    } else {
      const videoPath = this.state.value;
      if (videoPath.substr(-1) !== ".") {
        phrase = `${this.state.value} ?`;
      }
      return (
        <div>
          <Hidden smDown implementation="css">
            <Typography color="primary" variant="headline" align="center">
              Traduction en Langue des Signes Française de la phrase :
            </Typography>
            <br />
            <br />
            <Typography color="primary" variant="display1" align="center">
              "{phrase.replace("$", "'")}"
            </Typography>
            <br />
            <br />
            <br />
            <Typography color="primary" variant="headline" align="center">
              Pas de video pour l'instant ^^'
            </Typography>
            <br />
            <br />
            <br />
            <Typography color="primary" variant="headline">
              Phrases du même contexte :
            </Typography>
          </Hidden>
          <Hidden smUp>
            <br />
            <Typography color="primary" variant="subheading" align="center">
              Traduction en Langue des Signes Française de la phrase :
            </Typography>
            <br />
            <Typography color="primary" variant="headline" align="center">
              "{phrase.replace("$", "'")}"
            </Typography>
            <br />
            <br />
            <Typography color="primary" variant="headline" align="center">
              Pas de video pour l'instant ^^'
            </Typography>
            <br />
            <br />
            <Typography color="primary" variant="subheading">
              Phrases du même contexte :
            </Typography>
          </Hidden>
          <br />
          <br />
          <Questions
            contexte={this.state.contexte}
            sousContexte={this.state.sousContexte}
            nbr={9}
          />
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

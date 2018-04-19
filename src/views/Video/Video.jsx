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
import sematos from "../../assets/image/Sematos.png";
import sematospetit from "../../assets/image/SematosPetit.png";
import elix from "../../assets/image/ELIX-logo.png";
import Link from "../../components/Link";
import logo from "../../assets/image/logo.png";

const styles = theme => ({
  AppLogo: {
    height: 200,
    [theme.breakpoints.down("sm")]: {
      height: 100
    }
  },
  center: {
    display: "flex",
    justifyContent: "center"
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
    if (!(nextProps.match.params.path === this.state.value)) {
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
    const { classes } = this.props;
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
          <Hidden mdUp>
            <br />
            <Typography color="primary" variant="subheading" align="center">
              Traduction en Langue des Signes Française de la phrase :
            </Typography>
            <br />
            <Typography color="primary" variant="headline" align="center">
              "{phrase.replace("$", "'")}"
            </Typography>
          </Hidden>
          <Player aspectRatio="16:9" muted="true" fluid preload="auto">
            <source src={videoWatch} />
            <ControlBar>
              <VolumeMenuButton disabled />
            </ControlBar>
            <BigPlayButton position="center" />
          </Player>
          <br />
          <br />
          <Hidden mdUp>
            <Typography color="primary" variant="subheading">
              Phrases du même contexte :
            </Typography>
            <br />
            <Questions
              contexte={this.state.contexte}
              sousContexte={this.state.sousContexte}
              nbr={6}
            />
          </Hidden>
          <Hidden smDown implementation="css">
            <Typography color="primary" variant="headline">
              Phrases du même contexte :
            </Typography>
            <br />
            <Questions
              contexte={this.state.contexte}
              sousContexte={this.state.sousContexte}
              nbr={4}
            />
          </Hidden>
          <Hidden lgUp>
            <br />
            <br />
            <br />
            <br />
          </Hidden>
          <div className={classes.center}>
            <img src={logo} className={classes.AppLogo} alt="logo" />
          </div>
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
              La vidéo n'est pas encore disponible mais arrivera très
              prochainement sur NIELS !
            </Typography>
            <br />
            <Typography color="primary" variant="headline" align="center">
              En attendant vous pouvez retrouver les mots que vous recherchez
              traduits en LSF sur les sites suivants :
            </Typography>
            <br />
            <br />
            <br />
            <div align="center">
              <Link href="https://www.elix-lsf.fr" target="_blank">
                <img src={elix} alt="logoElix" height={130} />
              </Link>
              &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;
              &nbsp;&nbsp;&nbsp;&nbsp;
              <Link href="http://www.sematos.eu/lsf.html" target="_blank">
                <img src={sematos} alt="logoSematos" />
              </Link>
            </div>
            <br />
            <Typography color="primary" variant="headline">
              Phrases du même contexte :
            </Typography>
            <br />
            <Questions
              contexte={this.state.contexte}
              sousContexte={this.state.sousContexte}
              nbr={8}
            />
          </Hidden>
          <Hidden mdUp>
            <br />
            <Typography color="primary" variant="subheading" align="center">
              Traduction en Langue des Signes Française de la phrase :
            </Typography>
            <Typography color="primary" variant="headline" align="center">
              "{phrase.replace("$", "'")}"
            </Typography>
            <br />
            <Typography color="inherit" variant="subheading" align="center">
              La vidéo n'est pas encore disponible mais arrivera très
              prochainement sur NIELS !
            </Typography>
            <Typography color="inherit" variant="subheading" align="center">
              En attendant vous pouvez retrouver les mots que vous recherchez
              traduits en LSF sur les sites suivants :
            </Typography>
            <br />
            <div align="center">
              <Link href="https://www.elix-lsf.fr" target="_blank">
                <img src={elix} alt="logoElix" height={90} />
              </Link>
              <br />
              <br />
              <Link href="http://www.sematos.eu/lsf.html" target="_blank">
                <img src={sematospetit} alt="logoSematos" />
              </Link>
            </div>
            <br />
            <Typography color="primary" variant="subheading">
              Phrases du même contexte :
            </Typography>
            <Questions
              contexte={this.state.contexte}
              sousContexte={this.state.sousContexte}
              nbr={4}
            />
          </Hidden>
          <Hidden mdUp>
            <br />
            <br />
            <br />
          </Hidden>
          <Hidden only={["xs", "sm", "md", "xl"]}>
            <br />
          </Hidden>
          <div className={classes.center}>
            <img src={logo} className={classes.AppLogo} alt="logo" />
          </div>
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

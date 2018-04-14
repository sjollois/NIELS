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
import video from "../video/videoPresentation.m4v";
import imageVideo from "../video/imageVideo.png";
import logo from "../logo.png";

const styles = theme => ({
  AppLogo: {
    height: 200,
    [theme.breakpoints.down("xs")]: {
      height: 100
    }
  },
  center: {
    display: "flex",
    justifyContent: "center"
  },
});

class Home extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div>
        <div className={classes.center}>
            <img src={logo} className={classes.AppLogo} alt="logo" />
        </div>
        <Typography color="primary" variant="headline" align="center">
          Contenu de la page d'Accueil
        </Typography>
        <br />
        <br />
        <Player
          poster={imageVideo}
          playsInline
          aspectRatio="16:9"
          width="500"
          height="400"
        >
          <muted true />
          <fluid true />
          <preload auto />
          <source src={video} />
          <ControlBar>
            <VolumeMenuButton disabled />
          </ControlBar>
          <BigPlayButton position="center" />
        </Player>
      </div>
    );
  }
}

Home.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired
};

export default withStyles(styles, { withTheme: true })(Home);

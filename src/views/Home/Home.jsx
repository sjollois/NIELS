import React from "react";
import Typography from "material-ui/Typography";
import {
  Player,
  ControlBar,
  VolumeMenuButton,
  BigPlayButton
} from "video-react";
import video from "/Users/samueljollois/Documents/GitHub/NIELS/src/video/videoPresentation.m4v";
import imageVideo from "/Users/samueljollois/Documents/GitHub/NIELS/src/video/imageVideo.png";

class Home extends React.Component {
  render() {
    return (
      <div>
        <Typography color="primary" variant="headline" align="center">
          Contenu de la page d'Accueil
        </Typography>
        <br/><br/>
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

export default Home;

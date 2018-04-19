import React from "react";
import Typography from "material-ui/Typography";
import { withStyles } from "material-ui/styles";
//importe le style pour le lecteur video
import "video-react/dist/video-react.css";
//Importe l'ensemble des composant utilisés pour paramétrer et personnalisé le lecteur vidéo
import {
  Player,
  ControlBar,
  VolumeMenuButton,
  BigPlayButton
} from "video-react";
//importe la vidéo de présentation en LSF
import video from "../assets/video/videoPresentation.m4v";
//importe les images utilisés dans ce composant
import imageVideo from "../assets/image/imageVideo.png";
import logo from "../assets/image/logo.png";
import NIELS from "../assets/image/NIELS.png";
//Permet de rendre notre application responsive en cachant une partie adapté à un écran large
//et affichant une autre partie adapté à un écran mobile et inversement
import Hidden from "material-ui/Hidden";

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

class Home extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div>
        <div className={classes.center}>
          <img src={NIELS} className={classes.AppLogo} alt="logo" />
        </div>
        <Hidden smDown implementation="css">
          <br />
          <Typography color="primary" variant="headline" align="center">
            Bienvenue sur la Nouvelle Interface pour les Entendants permettant
            la traduction de phrases françaises vers la Langue des Signes
            française
          </Typography>
          <br />
          <Typography color="primary" variant="headline" align="center">
            &#8598; Naviguez sur NIELS à l'aide des différents contextes qui
            sont situés sur la barre latérale gauche
          </Typography>
          <br />
          <Typography color="primary" variant="display1" align="center">
            Vidéo de présentation de notre site en LSF sous-titrée
          </Typography>
        </Hidden>
        <Hidden mdUp>
          <br />
          <Typography color="primary" variant="subheading" align="center">
            Bienvenue sur la Nouvelle Interface pour les Entendants permettant
            la traduction de phrases françaises vers la Langue des Signes
            française
          </Typography>
          <br />
          <Typography color="primary" variant="subheading" align="center">
            &#8598; Naviguez sur NIELS à l'aide des différents contextes qui
            sont situés sur la barre latérale gauche
          </Typography>
          <br />
          <Typography color="primary" variant="title" align="center">
            Vidéo de présentation de notre site en LSF sous-titrée
          </Typography>
        </Hidden>
        <br />
        {/*L'ensemble des composants utilisés pour le lecteur vidéo sont expliqué dans le rapport */}
        <Player
          poster={imageVideo}
          aspectRatio="16:9"
          muted
          fluid
          preload="auto"
        >
          <source src={video} />
          <ControlBar>
            <VolumeMenuButton disabled />
          </ControlBar>
          <BigPlayButton position="center" />
        </Player>
        <Hidden only={["sm", "md", "lg", "xl"]}>
          <br />
        </Hidden>
        <Hidden lgUp>
          <br />
          <br />
          <br />
          <br />
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

export default withStyles(styles, { withTheme: true })(Home);

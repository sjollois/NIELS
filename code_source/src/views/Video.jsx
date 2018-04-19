import React from "react";
import Typography from "material-ui/Typography";
import { withStyles } from "material-ui/styles";
import "video-react/dist/video-react.css";
//Importe l'ensemble des composant utilisés pour paramétrer et personnalisé le lecteur vidéo
import {
  Player,
  ControlBar,
  VolumeMenuButton,
  BigPlayButton
} from "video-react";
import Hidden from "material-ui/Hidden";
//Composant qui affiche la liste des proposées avec en paramètres : le contexte, sous-contexte et le nombre de phrases à afficher
import Questions from "../components/Questions";
//Composant permettant la redirection vers des pages autres que ceux de l'application
import Link from "../components/Link";
//importe les images utilisés dans ce composant
import sematos from "../assets/image/Sematos.png";
import sematospetit from "../assets/image/SematosPetit.png";
import elix from "../assets/image/ELIX-logo.png";
import logo from "../assets/image/logo.png";

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
    //On récupère les paramètres qui ont été passé dans l'URL
    this.state = {
      value: this.props.match.params.path,
      contexte: this.props.match.params.contexte,
      sousContexte: this.props.match.params.sousContexte,
      videoDone: this.props.match.params.video
    };
  }

  //Fonction qui permet de mettre a jour les données mis en paramètres 
  //et de recharger la page pour afficher le contenu mis à jour
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
    //On vérifie si la vidéo est bien disponible
    if (this.state.videoDone === "true") {
      const videoPath = this.state.value;
      var correctPath = videoPath;
      //On nettoye la phrase pour qu'on puisse retrouver la vidéo en interne
      if (videoPath.substr(-1) === " " || videoPath.substr(-1) === ".") {
        correctPath = videoPath.slice(0, -1);
      }
      correctPath = correctPath.replace(/ /g, "_");
      //On importe la vidéo qui sera toujours en format mp4 malheureusement mais cela va changer!!
      const videoWatch = require(`../assets/video/${correctPath}.mp4`);
      var phrase = videoPath;
      //On rajoute la parenthèse qui disparaît lorsqu'on la passe en paramètre
      if (videoPath.substr(-1) !== ".") {
        phrase = `${this.state.value} ?`;
      }
      //On affiche le contenu et la vidéo avec toujours le souci de la responsivité
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
          {/*Cette fois-ci on peut afficher plus de phrases sur smartphone que sur ordinateur*/}
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
    } 
    //Dans le cas où la vidéo n'est pas disponible
    else
     {
       //On nettoie la phrase
       const videoPath = this.state.value;
       // eslint-disable-next-line
       var phrase = videoPath;
       if (videoPath.substr(-1) !== ".") {
         phrase = `${this.state.value} ?`;
       }
       //et on affiche toujours avec un souci de responsivité
       return <div>
           <Hidden smDown implementation="css">
             <Typography color="primary" variant="headline" align="center">
               Traduction en Langue des Signes Française de la phrase :
             </Typography>
             <br />
             <br />
             <Typography color="primary" variant="display1" align="center">
               "{phrase
                 .replace("$", "'")
                 .replace("$", "'")
                 .replace("$", "'")}"
             </Typography>
             <br />
             <br />
             <br />
             <Typography color="primary" variant="headline" align="center">
               La vidéo n'est pas encore disponible mais arrivera très prochainement sur NIELS !
             </Typography>
             <br />
             <Typography color="primary" variant="headline" align="center">
               En attendant vous pouvez retrouver les mots que vous recherchez traduits en LSF sur les sites suivants :
             </Typography>
             <br />
             <br />
             <br />
             {/*Redirection vers les site de traduction de mot en LSF*/}
             <div align="center">
               <Link href="https://www.elix-lsf.fr" target="_blank">
                 <img src={elix} alt="logoElix" height={130} />
               </Link>
               &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;
               <Link href="http://www.sematos.eu/lsf.html" target="_blank">
                 <img src={sematos} alt="logoSematos" />
               </Link>
             </div>
             <br />
             <Typography color="primary" variant="headline">
               Phrases du même contexte :
             </Typography>
             <br />
             <Questions contexte={this.state.contexte} sousContexte={this.state.sousContexte} nbr={8} />
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
               La vidéo n'est pas encore disponible mais arrivera très prochainement sur NIELS !
             </Typography>
             <Typography color="inherit" variant="subheading" align="center">
               En attendant vous pouvez retrouver les mots que vous recherchez traduits en LSF sur les sites suivants :
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
             <Questions contexte={this.state.contexte} sousContexte={this.state.sousContexte} nbr={4} />
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
         </div>;
     }
  }
}

export default withStyles(styles, { withTheme: true })(Video);

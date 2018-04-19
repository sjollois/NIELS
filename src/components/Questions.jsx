import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "material-ui/styles";
//Rend la page avec la redirection vers les contextes et sous-contextes qui nous intéresse
import { withRouter } from "react-router";
import compose from "recompose/compose";
//importe l'ensemble des composants nécessaires à la création de la table contenant les phrases depuis Material-UI
import Table, {
  TableBody,
  TableCell,
  TableFooter,
  TablePagination,
  TableRow
} from "material-ui/Table";
import Paper from "material-ui/Paper";
//Importe les boutons permettant de se déplacer sur les différentes pages de phrases d'un même sous-contexte
import IconButton from "material-ui/IconButton";
import FirstPageIcon from "material-ui-icons/FirstPage";
import KeyboardArrowLeft from "material-ui-icons/KeyboardArrowLeft";
import KeyboardArrowRight from "material-ui-icons/KeyboardArrowRight";
import LastPageIcon from "material-ui-icons/LastPage";
//Composant qui affiche un rendu de chargement, durant lequel l'application récupère les phrases de la base de donées
import Loading from "react-loading-animation";
//Ce composant va permettre de récupèrer les phrases qui nous intéressent dans la base de donnée
import * as firebase from "firebase";
// eslint-disable-next-line
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import pink from "material-ui/colors/pink";
//Une petite icone de camera s'affichera lorsque la vidéo est disponible
import Icon from "react-icons-kit";
import { videoCamera } from "react-icons-kit/icomoon/videoCamera";

const actionsStyles = theme => ({
  root: {
    flexShrink: 0,
    color: theme.palette.text.secondary,
    marginLeft: theme.spacing.unit * 2.5
  }
});

//Un premier composant est crée pour afficher les boutons de navigations entre les pages
class TablePaginationActions extends React.Component {
  //Fonctions qui permettent de naviguer entre les différentes pasges d'une table
  handleFirstPageButtonClick = event => {
    this.props.onChangePage(event, 0);
  };

  handleBackButtonClick = event => {
    this.props.onChangePage(event, this.props.page - 1);
  };

  handleNextButtonClick = event => {
    this.props.onChangePage(event, this.props.page + 1);
  };

  handleLastPageButtonClick = event => {
    this.props.onChangePage(
      event,
      Math.max(0, Math.ceil(this.props.count / this.props.rowsPerPage) - 1)
    );
  };

  render() {
    const { classes, count, page, rowsPerPage, theme } = this.props;

    return (
      <div className={classes.root}>
        <IconButton
          onClick={this.handleFirstPageButtonClick}
          disabled={page === 0}
          aria-label="First Page"
        >
          {theme.direction === "rtl" ? <LastPageIcon /> : <FirstPageIcon />}
        </IconButton>
        <IconButton
          onClick={this.handleBackButtonClick}
          disabled={page === 0}
          aria-label="Previous Page"
        >
          {theme.direction === "rtl" ? (
            <KeyboardArrowRight />
          ) : (
            <KeyboardArrowLeft />
          )}
        </IconButton>
        <IconButton
          onClick={this.handleNextButtonClick}
          disabled={page >= Math.ceil(count / rowsPerPage) - 1}
          aria-label="Next Page"
        >
          {theme.direction === "rtl" ? (
            <KeyboardArrowLeft />
          ) : (
            <KeyboardArrowRight />
          )}
        </IconButton>
        <IconButton
          onClick={this.handleLastPageButtonClick}
          disabled={page >= Math.ceil(count / rowsPerPage) - 1}
          aria-label="Last Page"
        >
          {theme.direction === "rtl" ? <FirstPageIcon /> : <LastPageIcon />}
        </IconButton>
      </div>
    );
  }
}

TablePaginationActions.propTypes = {
  classes: PropTypes.object.isRequired,
  count: PropTypes.number.isRequired,
  onChangePage: PropTypes.func.isRequired,
  page: PropTypes.number.isRequired,
  rowsPerPage: PropTypes.number.isRequired,
  theme: PropTypes.object.isRequired
};

const TablePaginationActionsWrapped = withStyles(actionsStyles, {
  withTheme: true
})(TablePaginationActions);

const styles = theme => ({
  root: {
    width: "100%",
    margin: "0px"
  },
  table: {
    minWidth: 50
  },
  tableWrapper: {
    overflowX: "auto"
  },
  Video: {
    textDecoration: "none",
    color: pink[900]
  }
});

//Le composant qui va permettre d'afficher les tables de phrases
class Questions extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      page: 0,
      loading: true
    };
  }

  handleChangePage = (event, page) => {
    this.setState({ page });
  };

  handleChangeRowsPerPage = event => {
    this.setState({ rowsPerPage: event.target.value });
  };

  //Récupération des données correspondant au phrases dans la base de données à l'aide du contexte 
  //et sous-contexte passés en paramètres
  componentWillMount() {
    const ref = firebase
      .database()
      .ref(`${this.props.contexte}/${this.props.sousContexte}`);

    ref.on("value", snapshot => {
      this.setState({
        videos: snapshot.val(),
        loading: false
      });
    });
  }

  render() {
             //Affiche le rond de chargement
             if (this.state.loading) {
               return <div>
                   <br />
                   <br />
                   <br />
                   <br />
                   <br />
                   <br />
                   <Loading />
                 </div>;
             }
             //Récupération des données passés en paramètres
             const { classes, contexte, sousContexte } = this.props;
             const { videos, page } = this.state;
             //Le nombre de phrases affiché sera le minimum entre le nombre de phrases disponibles et celle demandés
             const rowsPerPage = Math.min(this.props.nbr, videos.length);
             //Calcule le nombre de cases vides sur la dernière page et seulement à la dernière page grâce à la variable page
             //sur lequels on va remplir des phrases de l'avant-dernière page
             const emptyRows = rowsPerPage - Math.min(rowsPerPage, videos.length - page * rowsPerPage);

             return <Paper className={classes.root}>
                 <div className={classes.tableWrapper}>
                   <Table className={classes.table}>
                     <TableBody>
                       {/*Rempli les cases vides*/}
                       {emptyRows > 0 && videos
                           .slice(
                             page * rowsPerPage - emptyRows,
                             page * rowsPerPage
                           )
                           .map(n => {
                             //Affiche une icone de caméra si la vidéo est disponible sinon rien
                             if (n.video) {
                               return (
                                 <TableRow>
                                   <TableCell>
                                     {/*On implémente le lien à chaque phrase avec le contexte, sous-contexte et la phrase en paramètre*/}
                                     <Link
                                       to={`/Video/${contexte}/${sousContexte}/${
                                         n.video
                                       }/${n.path}`}
                                       className={classes.Video}
                                     >
                                       {n.path.replace("$", "'")}{" "}
                                       &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<Icon
                                         icon={videoCamera}
                                       />
                                     </Link>
                                   </TableCell>
                                 </TableRow>
                               );
                             } else {
                               return (
                                 <TableRow>
                                   <TableCell>
                                     <Link
                                       to={`/Video/${contexte}/${sousContexte}/${
                                         n.video
                                       }/${n.path}`}
                                       className={classes.Video}
                                     >
                                       {n.path.replace("$", "'")}
                                     </Link>
                                   </TableCell>
                                 </TableRow>
                               );
                             }
                           })}
                       {/*Rempli les tous les cases de la page*/}
                       {videos
                         .slice(
                           page * rowsPerPage,
                           page * rowsPerPage + rowsPerPage
                         )
                         .map(n => {
                           if (n.video) {
                             return (
                               <TableRow>
                                 <TableCell>
                                   <Link
                                     to={`/Video/${contexte}/${sousContexte}/${
                                       n.video
                                     }/${n.path}`}
                                     className={classes.Video}
                                   >
                                     {n.path.replace("$", "'")}{" "}
                                     &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<Icon
                                       icon={videoCamera}
                                     />
                                   </Link>
                                 </TableCell>
                               </TableRow>
                             );
                           } else {
                             return (
                               <TableRow>
                                 <TableCell>
                                   <Link
                                     to={`/Video/${contexte}/${sousContexte}/${
                                       n.video
                                     }/${n.path}`}
                                     className={classes.Video}
                                   >
                                     {n.path.replace("$", "'")}
                                   </Link>
                                 </TableCell>
                               </TableRow>
                             );
                           }
                         })}
                     </TableBody>
                     {/*Implémentation de la  navigation entre les différentes pages d'une table*/}
                     <TableFooter>
                       <TableRow>
                         <TablePagination colSpan={3} count={videos.length} rowsPerPage={rowsPerPage} page={page} onChangePage={this.handleChangePage} onChangeRowsPerPage={this.handleChangeRowsPerPage} Actions={TablePaginationActionsWrapped} />
                       </TableRow>
                     </TableFooter>
                   </Table>
                 </div>
               </Paper>;
           }
}

Questions.propTypes = {
  classes: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired
};

export default compose(withStyles(styles), withRouter)(Questions);

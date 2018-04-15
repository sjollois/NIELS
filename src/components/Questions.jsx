import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "material-ui/styles";
import { withRouter } from "react-router";
import compose from "recompose/compose";
import Table, {
  TableBody,
  TableCell,
  TableFooter,
  TablePagination,
  TableRow
} from "material-ui/Table";
import Paper from "material-ui/Paper";
import IconButton from "material-ui/IconButton";
import FirstPageIcon from "material-ui-icons/FirstPage";
import KeyboardArrowLeft from "material-ui-icons/KeyboardArrowLeft";
import KeyboardArrowRight from "material-ui-icons/KeyboardArrowRight";
import LastPageIcon from "material-ui-icons/LastPage";
import Loading from "react-loading-animation";
import * as firebase from "firebase";
// eslint-disable-next-line
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import pink from "material-ui/colors/pink";
import Icon from "react-icons-kit";
import { videoCamera } from "react-icons-kit/icomoon/videoCamera";

const actionsStyles = theme => ({
  root: {
    flexShrink: 0,
    color: theme.palette.text.secondary,
    marginLeft: theme.spacing.unit * 2.5
  }
});

class TablePaginationActions extends React.Component {
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
    if (this.state.loading) {
      return (
        <div>
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
    const { classes, contexte, sousContexte } = this.props;
    const { videos, page } = this.state;
    const rowsPerPage = Math.min(this.props.nbr, videos.length);
    const emptyRows =
      rowsPerPage - Math.min(rowsPerPage, videos.length - page * rowsPerPage);

    return (
      <Paper className={classes.root}>
        <div className={classes.tableWrapper}>
          <Table className={classes.table}>
            <TableBody>
              {emptyRows > 0 &&
                videos
                  .slice(page * rowsPerPage - emptyRows, page * rowsPerPage)
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
              {videos
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
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
            <TableFooter>
              <TableRow>
                <TablePagination
                  colSpan={3}
                  count={videos.length}
                  rowsPerPage={rowsPerPage}
                  page={page}
                  onChangePage={this.handleChangePage}
                  onChangeRowsPerPage={this.handleChangeRowsPerPage}
                  Actions={TablePaginationActionsWrapped}
                />
              </TableRow>
            </TableFooter>
          </Table>
        </div>
      </Paper>
    );
  }
}

Questions.propTypes = {
  classes: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired
};

export default compose(withStyles(styles), withRouter)(Questions);

import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "material-ui/styles";
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

let counter = 0;
function createData(name) {
  counter += 1;
  return { id: counter, name };
}

const styles = theme => ({
  root: {
    width: "100%",
    marginTop: "0px"
  },
  table: {
    minWidth: 50
  },
  tableWrapper: {
    overflowX: "auto"
  }
});

class Questions extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      data: [
        createData("EPARGNER"),
        createData("Avez-vous un projet d’épargne précis ?"),
        createData("Voulez-vous simuler un plan épargne ?"),
        createData("Souhaitez-vous ouvrir un compte épargne logement ? "),
        createData("ASSURER"),
        createData("Voulez-vous assurer votre véhicule ?"),
        createData("Voulez-vous une assurance pour votre logement ?"),
        createData("Voulez-vous une assurance santé ?"),
        createData("Voulez-vous une assurance pour protéger vos proches ou vous même ? "),
        createData("AUTRE"),
        createData("Voulez-vous effectuer un changement d’adresse de domicile ?"),
        createData("Avez-vous un problème d’accès à votre compte ? "),
        createData("Souhaitez-vous un devis pour un service particulier ?"),
        createData("Voulez-vous ouvrir un compte ?"),
        createData("Souhaitez-vous commander un chéquier ?"),
        createData("Avez-vous remarqué une anomalie sur vos relevés?"),
        createData("Voulez-vous prendre un rendez vous avec votre conseiller ?"),
        createData("Souhaitez-vous faire un dépôt ?"),
        createData("Voulez-vous effectuer un virement vers un autre compte ?"),
        createData("Voulez-vous que je vous explique comment fonctionne votre carte bleu à l’étranger ?"),
        createData("Souhaitez-vous effectuer un emprunt ?")
      ],
      page: 0,
      rowsPerPage: 10
    };
  }

  handleChangePage = (event, page) => {
    this.setState({ page });
  };

  handleChangeRowsPerPage = event => {
    this.setState({ rowsPerPage: event.target.value });
  };

  render() {
    const { classes } = this.props;
    const { data, rowsPerPage, page } = this.state;
    const emptyRows =
      rowsPerPage - Math.min(rowsPerPage, data.length - page * rowsPerPage);

    return (
      <Paper className={classes.root}>
        <div className={classes.tableWrapper}>
          <Table className={classes.table}>
            <TableBody>
              {emptyRows > 0 && (
                data
                .slice(data.length*2-page*rowsPerPage-emptyRows-2, data.length*2-page*rowsPerPage-2)
                .map(n => {
                  return (
                    <TableRow key={n.id}>
                      <TableCell>{n.name}</TableCell>
                    </TableRow>
                  );
                })
              )}
              {data
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map(n => {
                  return (
                    <TableRow key={n.id}>
                      <TableCell>{n.name}</TableCell>
                    </TableRow>
                  );
                })}
            </TableBody>
            <TableFooter>
              <TableRow>
                <TablePagination
                  colSpan={3}
                  count={data.length}
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
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Questions);

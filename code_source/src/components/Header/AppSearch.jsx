import React from "react";
import compose from "recompose/compose";
import pure from "recompose/pure";
import PropTypes from "prop-types";
import withWidth, { isWidthUp } from "material-ui/utils/withWidth";
import SearchIcon from "material-ui-icons/Search";
import { fade } from "material-ui/styles/colorManipulator";
import { withStyles } from "material-ui/styles";
import Tooltip from "material-ui/Tooltip";

let searchTimer;

function initDocsearch() {
  if (!process.browser) {
    return;
  }

  clearInterval(searchTimer);
  searchTimer = setInterval(() => {
    if (window.docsearch && document.querySelector("#docsearch-input")) {
      clearInterval(searchTimer);
      window.docsearch({
        apiKey: "1d8534f83b9b0cfea8f16498d19fbcab",
        indexName: "material-ui",
        inputSelector: "#docsearch-input"
        // Set debug to true if you want to inspect the dropdown.
        // debug: true,
      });
    }
  }, 100);
}

const styles = theme => ({
  "@global": {
    ".algolia-autocomplete": {
      fontFamily: theme.typography.fontFamily,
      "& .algolia-docsearch-suggestion--category-header-lvl0": {
        color: theme.palette.text.primary
      },
      "& .algolia-docsearch-suggestion--subcategory-column-text": {
        color: theme.palette.text.secondary
      },
      "& .algolia-docsearch-suggestion--highlight": {
        color: theme.palette.type === "light" ? "#174d8c" : "#acccf1"
      },
      "& .algolia-docsearch-suggestion": {
        background: "transparent"
      },
      "& .algolia-docsearch-suggestion--title": {
        ...theme.typography.title
      },
      "& .algolia-docsearch-suggestion--text": {
        ...theme.typography.body1
      },
      "& .ds-dropdown-menu": {
        boxShadow: theme.shadows[1],
        borderRadius: 2,
        "&::before": {
          display: "none"
        },
        "& [class^=ds-dataset-]": {
          border: 0,
          borderRadius: 2,
          backgroundColor: theme.palette.background.paper
        }
      }
    }
  },
  root: {
    fontFamily: theme.typography.fontFamily,
    position: "relative",
    marginRight: theme.spacing.unit * 2,
    marginLeft: theme.spacing.unit,
    borderRadius: 9,
    background: fade(theme.palette.common.white, 0.15),
    "&:hover": {
      //background: fade(theme.palette.common.white, 0.25),
    },
    "& $input": {
      transition: theme.transitions.create("width"),
      width: 200,
      [theme.breakpoints.down("xs")]: {
        width: 20
      },
      "&:focus": {
        width: 250,
        [theme.breakpoints.down("xs")]: {
          width: 40
        }
      }
    }
  },
  search: {
    width: theme.spacing.unit * 9,
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  input: {
    font: "inherit",
    padding: `${theme.spacing.unit}px ${theme.spacing.unit}px ${
      theme.spacing.unit
    }px ${theme.spacing.unit * 9}px`,
    border: 0,
    display: "block",
    verticalAlign: "middle",
    whiteSpace: "normal",
    background: "none",
    margin: 0, // Reset for Safari
    color: "inherit",
    width: "100%",
    "&:focus": {
      outline: 0
    }
  }
});

function removeDocsearch() {
  clearInterval(searchTimer);
}

function AppSearch(props) {
  const { classes, width } = props;

  if (!isWidthUp("sm", width)) {
    removeDocsearch();
  }

  initDocsearch();

  return (
    <Tooltip
      id="nonFonctionnel"
      title="Cette fonctionnalité n'est pas encore déployée, elle le sera très bientôt!"
      enterDelay={300}
    >
      <div className={classes.root} disabled={true}>
        <div className={classes.search} disabled={true}>
          <SearchIcon disabled={true} />
        </div>
        <input id="docsearch-input" className={classes.input} disabled={true} />
      </div>
    </Tooltip>
  );
}

AppSearch.propTypes = {
  classes: PropTypes.object.isRequired,
  width: PropTypes.string.isRequired
};

export default compose(withStyles(styles), withWidth(), pure)(AppSearch);

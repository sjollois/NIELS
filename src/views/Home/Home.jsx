import React from "react";
import Typography from "material-ui/Typography";

class Home extends React.Component {
  render() {
    return (
      <div>
        <main>
          <Typography align="center" color="primary" variant="headline">
            {"Contenu de la page d'Accueil"}
          </Typography>
        </main>
      </div>
    );
  }
}

export default (Home);
//importation du module react afin de pouvoir utiliser ses fonctions
import React from 'react';
//importation du module react-dom qui permettra de se rediriger vers la page affiché dans le navigateur 
//à l'aide de l'identifiant 'root'
import ReactDOM from 'react-dom';
// importation du style de la page index qui est assez vide
import './assets/css/index.css';
//importation du composant App
import App from './containers/App/App';
// important du module registerServiceWorker qui permet de mettre en cache l'application 
//et de palier ainsi au perte de connexion de l'application web, la rendant aisni plus fluide et rapide à charger
import registerServiceWorker from './registerServiceWorker';

//On appelle le composant App qui sera renvoyé dans le index.html public
ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();

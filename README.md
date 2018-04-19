Ce projet informatique individuel 2018 a été développé avec [Create React App](https://github.com/facebookincubator/create-react-app) sous Visual Studio et l'environnement de Node.js.

Vous trouverez ci-dessous quelques informations sur comment utiliser React.<br>
Vous pouvez trouver la version la plus récente de ce guide [ici](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md).

Vous trouverez dans le dossier NIELS/code_source : 

- Un lien vers l'application web mis en ligne [NIELS](https://niels.ovh) ;
- firebase.json qui constitue l'ensemble des informations nécessaire fin de déployer l'application web sur l'hébergeur firebase ;
- nodes_modules, regroupant l'ensemble des modules installés pour faire tourner l'application ;
- package-lock.json, regroupant l'ensemble des dépendances et informations de chaque module de l'application, très important lorsqu'on veut réinstaller tous les modules ;
- package.json, regroupant les principales informations sur l'application et l'ensemble des dépendances de l'application avec les modules NPM, très important lorsqu'on veut réinstaller tous les modules ;
- public, qui fait regroupe les élèments permettant de visualiser l'application web sur un navigateur dont notamment un fichier index.html ;
- src, qui constitue l'ensemble du code source de développement pour construire l'application web avec le dossier assets qui regroupe quelques fichiers css et l'ensemble des image et vidéos de l'application NIELS ; le dossier components qui regroupe les composants du Footer, du Header, un composant Link pour se rediriger vers une autre page web et un composant Questions qui affiche toutes les phrases dans un contexte et sous-contexte donné ; le dossier containers qui consiste en un fichier concernant le premier pilier de notre application ; un fichier index.js qui est appelé dans public ; et un dossier views qui regroupe l'ensemble des contenus affiché Accueil, chaque contexte et Vidéo ;
- un fichier yarn.lock qui permet de d’avoir des installations cohérentes sur différents ordinateurs. En effet yarn a besoin de plus d’informations que les dépendances configurées dans notre package.json. Yarn a besoin de stocker précisément quelle version de chaque dépendance est installée ;
- un dossier build qui représente l'ensemble du code source compilé et prêt pour la production et/ou le déploiement en ligne

Pour lancer l'application web NIELS  depuis un serveur local, vous devez installer [Node.js](https://nodejs.org/fr/) et taper les commandes une fois dans le dossier code_source :

- `npm install -g serve` puis `serve -s build`, qui sont les commandes permettant d'utiliser le code source déjà compilé dans le dossier build ;

- `npm install -g react-scripts` puis `npm start` pour compiler les fichiers de développement dynamiquement et avoir un aperçu en temps réel lorsqu'on développe;

Auteur : Samuel JOLLOIS, ENSC 2ème année groupe de TD 2



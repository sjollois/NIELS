import React from 'react';
import { ListItem, ListItemIcon, ListItemText } from 'material-ui/List';
import Folder from 'material-ui-icons/Folder';
import ShoppingCart from 'material-ui-icons/ShoppingCart';
import LocalActivity from 'material-ui-icons/LocalActivity';
import Hospital from 'material-ui-icons/LocalHospital';
import Train from 'material-ui-icons/Train';
import Favorite from 'material-ui-icons/Favorite';
import History from 'material-ui-icons/History';
import Help from 'material-ui-icons/Help';

export const Contextes = (
  <div>
    <ListItem button>
      <ListItemIcon>
        <Folder />
      </ListItemIcon>
      <ListItemText primary="Administratif" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <ShoppingCart />
      </ListItemIcon>
      <ListItemText primary="Vente" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <Hospital />
      </ListItemIcon>
      <ListItemText primary="Santé" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <LocalActivity />
      </ListItemIcon>
      <ListItemText primary="Loisirs" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <Train />
      </ListItemIcon>
      <ListItemText primary="Mobilité" />
    </ListItem>
  </div>
);

export const EnPlus = (
  <div>
    <ListItem button>
      <ListItemIcon>
        <Favorite />
      </ListItemIcon>
      <ListItemText primary="Mes phrases préférées" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <History />
      </ListItemIcon>
      <ListItemText primary="Historique des phrases choisies" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <Help />
      </ListItemIcon>
      <ListItemText primary="Aide & Explication" />
    </ListItem>
  </div>
);
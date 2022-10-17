import * as React from "react";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import HomeIcon from "@mui/icons-material/Home";
import PeopleIcon from "@mui/icons-material/People";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import LogoutIcon from "@mui/icons-material/Logout";
import { useHistory } from "react-router-dom";

export const MainListItems = () => {
  const history = useHistory();

  const goto = (path) => {
    history.push(path);
  };
  return (
    <div>
      <ListItem button onClick={() => goto("/home")}>
        <ListItemIcon>
          <HomeIcon />
        </ListItemIcon>
        <ListItemText primary="Home" />
      </ListItem>
      <ListItem button onClick={() => goto("/groups")}>
        <ListItemIcon>
          <PeopleIcon />
        </ListItemIcon>
        <ListItemText primary="Grupo" />
      </ListItem>
    </div>
  );
};

export const SecondaryListItems = function () {
  const history = useHistory();

  const goto = (path) => {
    history.push(path);
  };
  return (
    <div>
      <ListItem button onClick={() => goto("/profile")}>
        <ListItemIcon>
          <AccountCircleIcon />
        </ListItemIcon>
        <ListItemText primary="Mi perfil" />
      </ListItem>
      <ListItem button onClick={() => goto("/")}>
        <ListItemIcon>
          <LogoutIcon />
        </ListItemIcon>
        <ListItemText primary="Cerrar sesi&oacute;n" />
      </ListItem>
    </div>
  );
};

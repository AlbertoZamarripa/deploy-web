import { ListItem, ListItemIcon, ListItemText } from "@material-ui/core";
import React from "react";
import { NavLink } from "react-router-dom";

export interface SidebarItemProps {
  icon: JSX.Element;
  url: string;
  text: string;
  allowedRoles?: Array<string>;
}
export const SidebarItem = (props: SidebarItemProps): JSX.Element => {
  return (
    <NavLink
      to={props.url}
      key={props.text}
      style={{ color: "black", textDecoration: "none" }}
    >
      <ListItem button key={props.text}>
        <ListItemIcon>{props.icon}</ListItemIcon>
        <ListItemText primary={props.text} style={{ color: "#fff" }} />
      </ListItem>
    </NavLink>
  );
};

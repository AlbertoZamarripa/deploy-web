import React, { useState, useRef, useEffect } from "react";
import clsx from "clsx";
import { useTheme } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { SidebarItem, SidebarItemProps } from "./SideBarItem";
import { State } from "../../../redux/reducers";
import { useGlobalStyles } from "../../../styles/global";
import MenuIcon from "@material-ui/icons/Menu";
export interface SideBarProps {
  items: Array<SidebarItemProps>;
  userRole: string;
  onClose?: () => void;
  onOpen?: () => void;
}
export const SideBar = (props: SideBarProps): JSX.Element => {
  const globalClasses = useGlobalStyles();
  const { status } = useSelector<State>((store) => store.menu) as any;
  const { isLoggedIn } = useSelector<State>((store) => store.auth) as any;
  const theme = useTheme();
  const ref = useRef(false);

  const [open, setOpen] = useState(status);
  useEffect(() => {
    ref.current = status;
  }, [status]);
  const handleDrawerClose = () => {
    setOpen(false);
    if (props.onClose) {
      props.onClose();
    }
  };
  const handleDrawerOpen = () => {
    setOpen(true);
    if (props.onOpen) {
      props.onOpen();
    }
  };
  return isLoggedIn ? (
    <div>
      <Drawer
        variant="permanent"
        className={clsx(globalClasses.drawer, {
          [globalClasses.drawerOpen]: status,
          [globalClasses.drawerClose]: !status,
        })}
        classes={{
          paper: clsx({
            [globalClasses.drawerOpen]: status,
            [globalClasses.drawerClose]: !status,
          }),
        }}
      >
        <div className={globalClasses.toolbar}>
          {status ? (
            <IconButton onClick={handleDrawerClose}>
              {theme.direction === "rtl" ? (
                <ChevronRightIcon style={{ fill: "#fff" }} />
              ) : (
                <ChevronLeftIcon style={{ fill: "#fff" }} />
              )}
            </IconButton>
          ) : (
            <IconButton
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              edge="start"
              className={clsx(globalClasses.menuButton, {
                [globalClasses.hide]: status,
              })}
            >
              <MenuIcon />
            </IconButton>
          )}
        </div>
        <Divider />
        <List>
          {props.items
            // fix item.allowedRoles to be there
            .filter((item) => item.allowedRoles?.includes(props.userRole))
            .map((item) => (
              <SidebarItem {...item} key={item.text}></SidebarItem>
            ))}
        </List>
        <Divider />
      </Drawer>
    </div>
  ) : (
    <span></span>
  );
};

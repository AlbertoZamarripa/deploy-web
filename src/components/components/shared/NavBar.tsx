import { useConfirm } from "material-ui-confirm";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { State } from "../../../redux/reducers";
import { useGlobalStyles } from "../../../styles/global";
import clsx from "clsx";
import {
  AppBar,
  Grid,
  IconButton,
  Toolbar,
  Typography,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import ExitIcon from "@material-ui/icons/ExitToApp";
import logo from "../../../assets/logo_2.png";
import "./css/navBar.css";
import UserActions from "../../../redux/actions/auth";
export interface NavBarProps {
  onOpen?: () => void;
  onNavBarInit?: () => void;
  onLogOut?: () => void;
}

export const NavBar = (props: NavBarProps): JSX.Element => {
  const dispatch = useDispatch();
  const { status } = useSelector<State>((store) => store.menu) as any;
  const { isLoggedIn } = useSelector<State>((store) => store.auth) as any;
  const globalClasses = useGlobalStyles();
  const [open, setOpen] = useState(status);
  const confirm = useConfirm();
  const user = JSON.parse(localStorage.getItem("user") as string);
  const history = useHistory();

  useEffect(() => {
    if (props.onNavBarInit) {
      props.onNavBarInit();
    }
  }, []);

  const Logout = () => {
    confirm({
      title: "Cerrar Sesión",
      description: "¿Estás seguro que deseas cerrar sesión?",
      cancellationText: "Cancelar",
    }).then(() => {
      if (props.onLogOut) {
        props.onLogOut();
      }
      dispatch(UserActions.logout());
      history.push("/");
    });
  };

  const handleDrawerOpen = () => {
    setOpen(true);
    if (props.onOpen) {
      props.onOpen();
    }
  };

  return isLoggedIn ? (
    <AppBar
      position="fixed"
      className={clsx(globalClasses.appBar, {
        [globalClasses.appBarShift]: status,
      })}
    >
      <Toolbar>
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
        <Grid>
          <img className={globalClasses.logo} src={logo} alt="Bosch Logo" />
        </Grid>
        <Typography
          variant="h6"
          className={globalClasses.title}
          style={{ color: "white", marginLeft: "5px" }}
        >
          NOMBRE APP
        </Typography>

        <Typography style={{ color: "white" }}>
          {`${user.user.nombre} ${user.user.apellido} ${
            user.user.segApe ? user.user.segApe : ""
          } `}
        </Typography>
        <IconButton onClick={Logout} style={{ color: "white" }} size="medium">
          <ExitIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  ) : (
    <span></span>
  );
};

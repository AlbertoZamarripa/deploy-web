import React from "react";
import { SideBar, SideBarProps } from "../../components/shared/SideBar";
import { useDispatch, useSelector } from "react-redux";
import { useGlobalStyles } from "../../../styles/global";
import { State } from "../../../redux/reducers";
import { MenuActions } from "../../../redux/actions/statusBar";
import { Apartment, Home, LocalShipping, Person } from "@material-ui/icons";
import { ConfirmProvider } from "material-ui-confirm";
import { SnackbarProvider } from "notistack";
import { NavBar } from "../../components/shared/NavBar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Courses } from "../../components/courses/Courses";
import { Login } from "../login/login";
export const Test = () => {
  /*const dispatch = useDispatch();
  const globalClasses = useGlobalStyles();
  const { isLoggedIn } = useSelector<State>((store) => store.auth) as any;
  const sidebarProps: SideBarProps = {
    onClose: () => {
      dispatch(MenuActions.toggleMenu(false));
    },
    userRole: "MAESTRO",
    items: [
      {
        icon: <Home style={{ fill: "#fff" }} />,
        url: "/courses",
        text: "Test",
        allowedRoles: ["MAESTRO"],
      },
      {
        icon: <LocalShipping style={{ fill: "#fff" }} />,
        url: "/supply",
        text: "Test",
        allowedRoles: ["MAESTRO"],
      },
      {
        icon: <Apartment style={{ fill: "#fff" }} />,
        url: "/branches",
        text: "Test",
        allowedRoles: ["MAESTRO"],
      },
      {
        icon: <Person style={{ fill: "#fff" }} />,
        url: "/user",
        text: "Test",
        allowedRoles: ["MAESTRO"],
      },
    ],
  };
  return isLoggedIn ? (
    <ConfirmProvider>
      <SnackbarProvider maxSnack={1}>
        <Router>
          <NavBar
            onOpen={() => {
              dispatch(MenuActions.toggleMenu(true));
            }}
            onLogOut={() => {
              //dispatch(AuthActions.logout())
            }}
          />
          <SideBar {...sidebarProps} />
          <Switch>
            <Route exact path="/" component={Test}></Route>
            <Route exact path="/courses" component={Courses}></Route>
          </Switch>
        </Router>
      </SnackbarProvider>
    </ConfirmProvider>
  ) : (
    <Router>
      <Route path="/" component={Login}></Route>
    </Router>
  );*/
  return <h2></h2>;
};

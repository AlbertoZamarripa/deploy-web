import { createStyles, makeStyles, Theme } from "@material-ui/core";
import { keyframes } from "@mui/styled-engine";

const drawerWidth = 200;
const fadeIn = keyframes({
  from: {
    opacity: 0,
  },
  to: {
    opacity: 1,
  },
});
export const useGlobalStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
    },
    appBar: {
      zIndex: theme.zIndex.drawer + 1,
      transition: theme.transitions.create(["width", "margin"], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      background: "#242526",
    },
    appBarShift: {
      marginLeft: drawerWidth,
      width: `calc(100% - ${drawerWidth}px)`,
      transition: theme.transitions.create(["width", "margin"], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
    },

    menuButton: {
      marginRight: theme.spacing(2),
      color: "#fff",
    },
    hide: {
      display: "none",
    },
    drawer: {
      width: drawerWidth,
      flexShrink: 0,
      whiteSpace: "nowrap",
    },
    drawerOpen: {
      width: drawerWidth,
      transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
      backgroundColor: "#242526",
    },
    drawerClose: {
      transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      overflowX: "hidden",
      width: theme.spacing(7) + 1,
      [theme.breakpoints.up("sm")]: {
        width: theme.spacing(7) + 1,
      },
      backgroundColor: "#242526",
    },
    toolbar: {
      display: "flex",
      alignItems: "center",
      justifyContent: "flex-end",
      padding: theme.spacing(0, 1),
      // necessary for content to be below app bar
      ...theme.mixins.toolbar,
    },
    content: {
      display: "flex",
      flexWrap: "wrap",
      flexGrow: 1,
      padding: theme.spacing(10),
      background: "#18191a",
      height: "100vh",
      maxHeight: "100rem",
      minHeight: "100%",
    },
    content_no_padding: {
      flexGrow: 1,
      padding: theme.spacing(0),
    },
    title: {
      flexGrow: 1,
    },
    logo: {
      width: 30,
      height: 40,
    },
    card: {
      maxWidth: 300,
      minWidth: 300,
      height: 170,
      margin: "15px",
      transition: "0.3s",
      boxShadow: "0 8px 10px -12px rgba(0,0,0,0.3)",
      "&:hover": {
        boxShadow: "0 16px 30px -12.125px rgba(0,0,0,0.3)",
        background: "#343334",
      },
      background: "#242526",
      color: "#fff",
      borderRadius: 10,
    },
    modal: {
      background: "#242526",
    },
    buttonActions: {
      background: "#dd0040",
      color: "#fff",
      "&:hover": {
        background: "#ff004c",
      },
    },

    buttonsGen: {
      color: "#fff",
      borderRadius: "5px",
      "&:hover": {
        background: "#18191a",
        borderRadius: "5px",
      },
      float: "right",
      margin: theme.spacing(3),
    },
    contentBody: {
      position: "absolute",
      display: "flex",
      flexWrap: "wrap",
      flexGrow: 1,
      marginTop: theme.spacing(10),
    },
    form: {
      "& .MuiTypography-root": {
        color: "#fff",
      },

      "& .MuiInputBase-root": {
        color: "white",
        backgroundColor: "#1b191d",
      },
      "& label.Mui-focused": {
        color: "white",
      },
      "& label": {
        color: "white",
      },
      "& .MuiOutlinedInput-root": {
        "& fieldset": {
          borderColor: "#101011",
          backgroundColor: "transparent",
        },
        "&:hover fieldset": {
          borderColor: "#101011",
          backgroundColor: "transparent",
        },
        "&.Mui-focused fieldset": {
          borderColor: "#101011",
          backgroundColor: "transparent",
        },
      },
      "& .MuiSvgIcon-root": {
        color: "#fff",
      },
    },

    MuiPickersModal: {
      dialogAction: {
        color: "#33abb6",
        backgroundColor: "#1c1c1c",
      },
    },
    datePicker: {
      MuiPickersToolbar: {
        toolbar: {
          backgroundColor: "#8bc34a",
        },
      },
      MuiPickersCalendarHeader: {
        switchHeader: {
          backgroundColor: "white",
          color: "#1b5e20",
        },
      },
    },
    contentTable: {
      width: "90%",
      position: "absolute",
      display: "flex",
      flexWrap: "wrap",
      flexGrow: 1,
      marginTop: theme.spacing(10),
    },
  })
);

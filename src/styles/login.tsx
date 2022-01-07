import { makeStyles } from "@material-ui/core";

export const useLoginStyles = makeStyles((theme) => ({
  paper: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%",
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  textField: {
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
  },

  textFieldNormal: {
    "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
      borderColor: "red",
    },
  },
}));

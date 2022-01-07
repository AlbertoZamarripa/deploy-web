import { createStyles, makeStyles, Theme } from "@material-ui/core";

export const useTableStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: "100%",
      background: "#1c1c1c",
    },
    container: {
      maxHeight: 700, //590
    },
    title: {
      flex: "1 1 100%",
    },
    paper: {
      width: "100%",
      marginBottom: theme.spacing(2),
      color: "#fff",
    },
    table: {
      minWidth: 750,
      background: "#1c1c1c",
      color: "#fff",
    },
    content: {
      minWidth: 750,
      position: "absolute",
      display: "flex",
      flexWrap: "wrap",
      flexGrow: 1,
      marginTop: theme.spacing(10),
    },
  })
);

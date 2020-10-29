import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  btnset: {
    "& > *": {
      margin: theme.spacing(1),
    },
  },
  btnstyle: {
    color: "white",
  },
  appBar: {
    backgroundColor: "#101820",
    borderColor: "#05070a",
    position: "fixed",
    width: "100%",
    overflow: "fixed",
  },
  searchIcon: {
    color: "orange",
  },
  inputRoot: {
    color: "inherit",
  },
  datafactzlogo: {
    cursor: "pointer",
  },
}));

export default useStyles;

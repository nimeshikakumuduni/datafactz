import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  outer: {
    width: "100%",
    backgroundColor: "#c73f26",
    position: "relative",
    background: "#fff",
  },
  container: {
    paddingLeft: "27%",
    paddingTop: "1%",
    paddingBottom: "1%",
  },
  sent: {
    fontSize: "23px",
    color: "white",
    cursor: "pointer",
  },
  edge: {
    fontWeight: "bold",
    textDecoration: "underline",
  }
});

export default useStyles;

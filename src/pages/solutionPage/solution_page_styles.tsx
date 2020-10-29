import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  img2: {
    width: "50%",
    height: "80%",
    position: "relative",
    margin: 0,
    padding: 0,
  },
  scrollOuter: { zIndex: 1, paddingTop: "400px" },
  relative: { position: "relative" },
  firstrow: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    backgroundColor: "#c1c6c8",
    position: "fixed",
    zIndex: -1,
  },
  column2: {
    width: "100%",
  },
  imagediv: {
      marginTop: "-2%",
      padding: 0,
      marginBottom: "2%",
  },
  contentdiv: {
    width: "100%",
    backgroundColor: "#c1c6c8",
  },
  h1tag: {
    color: "white",
    fontWeight: 700,
    textTransform: "uppercase",
    paddingTop: "25%",
    paddingLeft: "33%",
    fontSize: "50px",
    paddingBottom: "45%",
  },
});

export default useStyles;

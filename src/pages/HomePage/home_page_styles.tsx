import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  outer: {
    width: "100%",
    height: "100%",
    overflow: "scroll",
    position: "absolute",
  },
  img2: {
    width: "100%",
    position: "absolute",
    justifyContent: "center",
  },
  cont1: {
    width: "100%",
    height: "50%",
    marginTop: "4%",
  },
  equalcolumns: {
    float: "none",
    display: "flex",
    width: "100%",
  },
});

export default useStyles;

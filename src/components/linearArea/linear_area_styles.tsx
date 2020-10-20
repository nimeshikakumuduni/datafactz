import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  container: {
    width: "100%" !,
    height: "40%",
    color: "blue",
    marginRight: "auto",
    marginLeft: "auto",
    backgroundColor: "#37a1af",

  },
  slide: {
    position: "relative",
    height: "200px"
  },
  inner: {
    position: "relative",
    width: "100%",
    overflow: "hidden",
  },
  image: {
    display: "inline-block",
    width: "10%",
    height: "10%",
    textAlign: "center",
    marginBottom: "3px",
    marginTop: "3px",
    marginLeft: "30px",
    marginRight: "30px",
  },
});

export default useStyles;

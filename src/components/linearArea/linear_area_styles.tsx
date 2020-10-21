import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  container: {
    width: "100%" !,
    height: "25%",
    color: "blue",
    marginRight: "auto",
    marginLeft: "auto",
    backgroundColor: "#37a1af",
  },
  slide: {
    position: "relative",
    height: "150px"
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
    marginBottom: "5px",
    marginTop: "10px",
    marginLeft: "50px",
    marginRight: "50px",
  },
  imgouter: {
    position: "relative",
    width: "100%",
    overflow: "hidden",
    marginTop: "25px",
    height: "40%",
  }
});

export default useStyles;

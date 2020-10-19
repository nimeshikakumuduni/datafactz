import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  container: {
    width: "100%",
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
    minHeight: "50px",
    lineHeight: "50px",
    textAlign: "center",
    marginTop: "0px",
    marginBottom: "0px",
    marginLeft: "4px",
    marginRight: "4px",
  },
}));

export default useStyles;

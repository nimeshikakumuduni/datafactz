import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  container: {
    width: "100%",
    backgroundColor: "#37a1af",
    position: "relative",
  },
  image: {
    display: "inline-block",
    width: "10%",
    height: "10%",
    marginLeft: "5%",
    marginRight: "4%",
  },
  imgouter: {
    position: "relative",
    width: "100%",
    overflow: "hidden",
    paddingTop: "2%",
    paddingBottom: "3%",
  }
});

export default useStyles;

import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  scrollOuter: { zIndex: 1, paddingTop: "480px" },
  relative: { position: "relative" },

  firstrow: {
    width: "100%",
    position: "fixed",
    display: "flex",
    flexDirection: "row",
    zIndex: -1,
    paddingBottom: "5%",
    backgroundColor: "#ff780e",
  },
  title: {
    paddingTop: "10%",
    color: "white",
    textTransform: "uppercase",
    fontSize: "45px",
  },
  subtitle: {
    color: "black",
    textTransform: "capitalize",
    fontSize: "35px",
  },
  image: {
      width: "30%",
      height: "50%",
      paddingTop: "4%",
      paddingLeft: "7%",
      paddingBottom: "5%",
  },
});

export default useStyles;

import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  scrollOuter: { zIndex: 1, paddingTop: "500px" },
  relative: { position: "relative" },

  firstrow: {
    width: "100%",
    position: "fixed",
    display: "flex",
    flexDirection: "row",
    zIndex: -1,
    paddingBottom: "5%",
  },
  title: {
    paddingTop: "10%",
    color: "#ff780e",
    textTransform: "uppercase",
    fontSize: "45px",
  },
  image: {
      width: "35%",
      height: "60%",
      paddingTop: "4%",
      paddingLeft: "7%",
      paddingBottom: "5%",
  },
});

export default useStyles;

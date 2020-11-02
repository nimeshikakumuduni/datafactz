import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  img2: {
    width: "28%",
    height: "55%",
    position: "fixed",
    paddingTop: "5%",
    zIndex: -1,
  },
  scrollOuter: { zIndex: 1, paddingTop: "400px" },
  relative: { position: "relative", backgroundColor: "#ff780e",  zIndex: 1, },
  firstdiv: {
      width: "100%",
      display: "flex",
      flexDirection: "row",
  },
  firstdivtext: {
      textTransform: "uppercase",
      fontSize: "20px",
      fontWeight: 500,
      color: "white",  
  },
  imagediv: {
    width: "100%",
  },
  textdiv: {
      width: "100%",
  }
});

export default useStyles;

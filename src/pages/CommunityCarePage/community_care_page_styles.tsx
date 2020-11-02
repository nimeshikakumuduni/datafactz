import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  img2: {
    width: "28%",
    height: "55%",
    position: "fixed",
    paddingTop: "5%",
    zIndex: -1,
  },
  scrollOuter: { zIndex: 1},
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
      fontSize:'55px',
      color:'white',
      fontWeight:'bold',
      marginTop:'150px'
  },
  row:{
    width: "100%",
    height: "500px",
    display: "flex",
    flexDirection: "row",
    paddingTop: "70px",
  }
});

export default useStyles;

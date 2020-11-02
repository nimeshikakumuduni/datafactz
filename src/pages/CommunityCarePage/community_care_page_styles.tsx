import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  img2: {
    width: "28%",
    height: "55%",
    position: "fixed",
    paddingTop: "5%",
    zIndex: -1,
  },
  scrollOuter: { zIndex: 1, position:'absolute', paddingTop:'500px'},
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
    position:'fixed',
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "row",
    paddingTop: "70px",
    backgroundColor:'#ff7900'
  }
});

export default useStyles;

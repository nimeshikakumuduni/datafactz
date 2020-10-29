import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  outer: {
    width: "100%",
    height: "100%",
    overflow: "scroll",
    position: "absolute",
    marginTop: "25%",
  },

  img2: {
    width: "100%",
    position: "absolute",
  },
  cont1: {
    width: "100%",
    height: "50%",
    position: "fixed",
    marginTop: "2%",
  },

  footerdiv: {
    backgroundColor: "#151515",
    position: "relative",
    paddingTop: "50px",
    width: "100%",
    height: "50%",
    marginTop: "-25.6%",
  },
  progressmeter: {
position: "fixed",
  },
  index_section0: {
    float: "left",
    width: "60px",
    height: "10px",
    margin: "0 2px",
    backgroundColor: "red",
    border: "1px solid rgba(255,255,255,.4)",
    zIndex: 4,
  },
  index_section1: {
    
  },
  mapdiv: {
    width: "100%",
    height: "40%",
    backgroundColor: "white",
  }
});

export default useStyles;

import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  outer: {
    width: "100%",
    height: "100%",
    overflow: "auto",
    position: "absolute",
    backgroundColor: "#ffffffa6",
    backgroundImage: 'url("images/background.jpg")',
    backgroundSize:'cover'
  },
  appBar: {
    position: "fixed",
    width: "100%",
  },
  appBarHeight: {
    height: "80px",
    width: "100%",
  },
  nameRow: {
    width: "95%",
    display: "flex",
    flexDirection: "row",
    padding: "5%",
  },
  nameRowWidth: {
    width: "100%",
  },

  text1: {
    fontSize: "20vw",
    fontWeight: 700,
    fontFamily: "burnstown",
    color: "rgb(130 99 99)",
    textShadow: "-2px 3px 33px white",
  },
  text2: {
    fontSize: "6vw",
    fontWeight: 700,
    fontFamily: "action",
    color: "rgb(90 74 74)",
    textShadow: "-2px 3px 33px white",
  },
  text3: {
    fontSize: "1.5vw",
    fontWeight: 600,
    color: "black",
  },
  text4: {
    fontSize: "1.5vw",
    fontWeight: 500,
    color: "purple",
  },
  text5: {
    fontSize: "1.5vw",
    fontWeight: 500,
    color: "meroon",
  },
  serviceBtn: {
    backgroundColor: "#9a9a9a30",
    margin: "5px",
    width: "300px",
    borderRadius: "5px",
  },
  homecontent: {
    width: "100%",
    marginTop: "16px",
    marginLeft: "-2vw",
    
  },
});

export default useStyles;

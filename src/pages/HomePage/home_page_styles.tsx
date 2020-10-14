import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  outer: {
    width: "100%",
    height: "100%",
    overflow: "auto",
    position: "absolute",
  },
  appBar: {
    position: "fixed",
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
    fontSize: "3vw",
    fontWeight: 800,
    color: "#260033",
    fontFamily: "Comic Sans MS",
    textShadow: "-2px 3px 33px white",
  },
  text4: {
    fontSize: "1.5vw",
    fontWeight: 500,
    color: "#2e2929",
    fontFamily: "Arial Black",
    textShadow: "-2px 3px 33px white",
    backgroundColor: "#fcb852",
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
    opacity: "2",
  },
  homecontent: {
    width: "100%",
    backgroundColor: "black",
    marginTop: "22.4%",
  },
  topic1: {
    color: "#221c29",
    width: "95%",
    height: "50%",
  },
  img2: {
    width: "950px",
    position: "absolute",
    justifyContent: "center",
  },
  cont1: {
    width: "80%",
    marginLeft: "5%",
    height: "50%",
  },
  heading: {
    margin: 0,
    paddingTop: "15px",
    backgroundColor: "#101820",
    textalign: "center",
    fontWeight: "bold",
    color: "#ff780e",
  },
  tab: {
    margin: 0,
    padding: "20px 15px",
    background: "#101820",
  },
  one: {
  }
});

export default useStyles;

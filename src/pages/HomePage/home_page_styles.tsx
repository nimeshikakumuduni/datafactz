import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  outer: {
    width: "100%",
    height: "100%",
    overflow: "scroll",
    position: "absolute",
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

  homecontent: {
    width: "100%",
    backgroundColor: "#101820",
    marginTop: "35.5%",
  },
  topic1: {
    color: "#221c29",
    width: "95%",
    height: "50%",
  },
  img2: {
    width: "100%",
    position: "absolute",
    justifyContent: "center",
  },
  cont1: {
    width: "100%",
    height: "50%",
    marginTop: "4%",
  },
  heading: {
    margin: 0,
    paddingLeft: "15px",
    paddingTop: "15px",
    backgroundColor: "#101820",
    textalign: "center",
    fontSize: "30px",
    fontWeight: "bold",
    color: "#ff780e",
  },
  tab: {
    margin: 0,
    padding: "20px 15px",
    background: "#101820",
  },

  one: {},

  title1: {
    position: "absolute",
    marginLeft: "0",
    marginBottom: "0",
    margin: 0,
    padding: "15px 20px 0 0",
    color: "#fff",
    cursor: "pointer",
  },
  container: {
    width: "100%"!,
    height: "40%",
    color: "blue",
    marginRight: "auto",
    marginLeft: "auto",
    backgroundColor: "#37a1af",
  },
  slide: {
    position: "relative",
    height: "200px",
  },
  inner: {
    position: "relative",
    width: "100%",
    overflow: "hidden",
  },
  image: {
    display: "inline-block",
    width: "10%",
    height: "10%",
    textAlign: "center",
    marginBottom: "3px",
    marginTop: "3px",
    marginLeft: "30px",
    marginRight: "30px",
  },
  equalcolumns: {
    float: "none",
    padding: "0",
    display: "flex",
    width: "100%",
    height: "100%",
  },
  postdiv: {
    backgroundColor: "#c1c6c8",
    width: "70%",
    height: "90%",
    overflow: "relative",
    position: "absolute",
    marginTop: "-7%",
  },
  solutiondiv: {
    height: "100%",
    width: "30%",
    marginLeft: "70%",
    marginTop: "-7%",
  },
  eventdiv: {
    height: "100%",
    width: "30%",
    marginLeft: "70%",
    marginTop: "-25.5%",
  },
  footerdiv: {
    position: "relative",
    width: "100%",
    marginTop: "0%",
  },
});

export default useStyles;

import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  outer: {
    width: "100%",
    height: "100%",
    overflow: "scroll",
    position: "absolute",
  },

  cont1: {
    width: "100%",
    marginTop: "4%",
    backgroundColor: "#c1c6c8",
  },
  equalcolumns: {
    float: "none",
    display: "flex",
    width: "100%",
  },
  div1: {
    color: "white",
    backgroundColor: "#c1c6c8",
    width: "80%",
    paddingLeft: "10%",
  },
  highlight: {
    color: "#ff780e",
  },
  h2style: {
    paddingTop: "2%",
    paddingBottom: "3%",
    fontSize: "35px",
  },
  circle: {
    display: "block",
    width: "100px",
    height: "100px",
    borderRadius: "50%",
    backgroundColor: "#ff780e",
    textAlign: "center"!,
    lineHeight: "100px",
    fontSize: "45px",
    fontWeight: 700,
    color: "#fff",
    margin: "0 auto",
  },
  linerarea: {
    width: "80%",
    display: "flex",
    flexDirection: "row",
    paddingBottom: "3%",
    paddingLeft: "20%",
  },
  circletext: {
    color: "white",
    fontSize: "15px",
    paddingBottom: "3%",
    paddingLeft: "4%",
  },
  circlecontainer: {
    paddingLeft: "7%",
    paddingRight: "5%",
  },
  rowdiv: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    backgroundColor: "#101820",
  },
  contentdiv: {
    width: "70%",
  },
  paragraph: {
    fontSize: "16px",
    color: "white",
    fontWeight: 300,
    paddingTop: "3%",
    paddingBottom: "3%",
    paddingLeft: "5%",
  },
  videodiv: {
    width: "30%",
  },
  videoimage: {
    width: "100%",
    height: "100%",
    cursor: "pointer",
  },
  rowdiv2: {
    width: "100%",
    backgroundColor: "#595959",
  },
  videoimage2: {
    width: "90%",
    paddingLeft: "2%",
    paddingTop: "0.5%",
    paddingBottom: "1%",
  },
  offcimagediv: {
    width: "100%",
    // backgroundImage: 'url("https://datafactz.com/wp-content/uploads/2015/09/group-of-people-optimized.jpg?id=1798")',
  },
  officeimage: {
    width: "100%",
  },
  btngroup: {
    width: "80%",
    display: "flex",
    flexDirection: "row",
    paddingLeft: "20%",
    marginTop: "-20%",
  },
  requestbtn: {
    backgroundColor: "#c53f26",
    color: "#fff",
    padding: "10px 20px",
    textTransform: "uppercase",
    marginLeft: "5%",
  },
  heretogo: {
    color: "white",
    fontSize: "45px",
    fontWeight: 400,
    paddingTop: "-50%",
    paddingLeft: "35%",
  },
  leadership: {
    width: "100%",
    color: "white",
    backgroundColor: "#ff780e",
    marginTop: "-5%",
    marginBottom: "-4%",
  },
  leadershiptext: {
    paddingLeft: "40%",
    paddingTop: "2%",
    paddingBottom: "2%",
    fontSize: "45px",
  },
  columdiv: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
  },
  row1: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
  },
  personimage: {
    width: "25%",
    height: "25%",
  },
  personimageset2: {
    width: "17%",
    height: "12%",
  },
  set2row: {
    width: "100%",
    backgroundColor: "black",
  },
  lastdiv: {
    width: "100%",
    backgroundImage: "url('images\ipad-optimized.jpg')",
  },
  circletextl: {
  color: "white",
  fontSize: "19px",
  fontWeight: 400,
  paddingLeft: "4%",  
  }
});

export default useStyles;

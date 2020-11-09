import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  posts: {
    width: "100%",
  },
  maincontent1: {
    paddingTop: "1%",
    paddingBottom: "1%",
    paddingLeft: "30%",
    backgroundColor: "#c73f26",
    color: "white",
    fontSize: "18px",
  },
  maincontent2: {
    paddingTop: "3%",
    backgroundColor: "#c1c6c8",
    display: "flex",
    flexDirection: "row",
    height: "100vh",
    paddingLeft: "20px",
    paddingRight: "20px",
  },
  maincontent3: {
    width: "100%",
    backgroundColor: "#101820",
    display: "flex",
    flexDirection: "row",
  },
  image: {
    height: "90%",
    paddingLeft: "5%",
  },
  image2: {
    width: "90%",
    height: "70%",
    paddingLeft: "5%",
    marginTop: "10%",
  },
  col1: {
    width: "100%",
  },
  col2: {
    width: "95%",
    height: "100%",
  },
  col3: { width: "100%" },
  col4: { width: "100%" },
  scrolldiv: {
    width: "95%",
    height: "80%",
    overflowY: "auto",
  },
  list: {
    fontSize: "14px",
  },
  paddign: {
    paddingLeft: "5%",
    paddingTop: "5%",
    width: "90%",
  },
  list2: {
    color: "white",
    fontSize: "14px",
  },
  text2: {
    color: "white",
    fontSize: "15px",
    fontWeight: 400,
  },
  text3: {
    color: "#ff780e",
    fontSize: "35px",
    fontWeight: 600,
    textTransform: "capitalize",
    padding: 0,
  },
  text1: {
    color: "white",
    fontSize: "35px",
    fontWeight: 600,
    textTransform: "capitalize",
    padding: 0,
  },
}));

export default useStyles;

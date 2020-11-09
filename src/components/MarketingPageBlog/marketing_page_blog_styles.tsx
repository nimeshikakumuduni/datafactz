import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  posts: {
    width: "100%",
  },
  maincontent: {
    paddingTop: "3%",
    paddingLeft: "10%",
  },
  maincontent2: {
    paddingTop: "3%",
    paddingLeft: "10%",
    backgroundColor: "#c1c6c8",
  },
  maincontent3: {
    paddingTop: "3%",
    paddingLeft: "10%",
    backgroundColor: "#37a1af",
  },
  title1: {
    fontWeight: 700,
    fontSize: "35px",
    color: "white",
    padding: "2px 1px",
    marginBottom: 0,
  },
  content: {
    fontWeight: 300,
    width: "80%",
    paddingTop: "1%",
    fontFamily: "Roboto",
  },
  contentfont: {
    fontWeight: 400,
    fontSize: "17px",
  },
  image: {
    width: "90%",
    height: "90%",
    paddingBottom: "2%",
  },
  btn:{
    backgroundColor: "#37a1af",
    color: "#fff",
    border: "2px solid black",
    borderColor: "#FF780E",
    cursor: "pointer",
    paddingTop: "1%",
    marginLeft: "25%",
    paddingBottom: "1%",
    marginTop: "3%",
    width: "20%",
    textTransform: "capitalize",
  },
}));

export default useStyles;

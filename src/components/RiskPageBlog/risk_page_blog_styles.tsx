import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  posts: {
    width: "100%",
  },
  firstdiv: {
    width: "40%",
  },
  seconddiv: {
    width: "60%",
    display: "flex",
    flexDirection: "row",
  },
  maincontentrow: {
    paddingTop: "3%",
    width: "100%",
    display: "flex",
    flexDirection: "row",
  },
  maincontent2: {
    paddingTop: "3%",
    paddingLeft: "10%",
    backgroundColor: "#c1c6c8",
    paddingBottom: "3%",
    marginTop: "-2%",
  },
  maincontent3: {
    paddingTop: "3%",
    paddingLeft: "10%",
    backgroundColor: "#37a1af",
    paddingBottom: "3%",
  },
  maincontent4: {
    paddingTop: "3%",
    paddingLeft: "10%",
    backgroundColor: "#ff780e",
    paddingBottom: "3%",
  },
  maincontent5: {
    backgroundColor: "#37a1af",
    paddingTop: "2%",
    paddingLeft: "30%",
    paddingBottom: "2%",
  },
  maincontent6: {
    backgroundColor: "#c23e32",
    paddingTop: "2%",
    paddingLeft: "30%",
    paddingBottom: "3%",
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
    width: "100%",
    height: "50%",
    paddingBottom: "2%",
  },
  image2: {
    width: "7%",
    height: "18%",
    paddingTop: "4%",
  },
  separator: {
    borderLeft: "3px solid #ff780e",
    width: "0%",
    height: "50%",
    marginLeft: "2%",
    paddingTop: "0%",
  },
  image3: {
    width: "60%",
    height: "20%",
    paddingBottom: "3%",
    paddingLeft: "15%",
  },
  btn: {
    backgroundColor: "#37a1af",
    color: "#fff",
    border: "2px solid black",
    borderColor: "#FF780E",
    cursor: "pointer",
    paddingTop: "1%",
    marginLeft: "35%",
    paddingBottom: "1%",
    marginTop: "3%",
    width: "20%",
    textTransform: "capitalize",
  },
  btn2: {
    backgroundColor: "#FF780E",
    color: "#fff",
    border: "2px solid black",
    borderColor: "#37a1af",
    cursor: "pointer",
    paddingTop: "1%",
    marginLeft: "35%",
    paddingBottom: "1%",
    marginTop: "3%",
    width: "30%",
    textTransform: "capitalize",
  },
  list: {
    color: "white",
  },
  atext: {
    fontSize: "19px",
    fontWeight: 500,
    color: "white",
    textTransform: "capitalize",
  },
}));

export default useStyles;

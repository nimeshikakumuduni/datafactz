import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  posts: {
    width: "100%",
  },
  maincontent: {
    paddingTop: "3%",
    paddingLeft: "5%",
  },
  title: {
    fontWeight: 700,
    fontSize: "35px",
    color: "#FF780E",
    padding: "2px 1px",
    marginBottom: 0,
  },
  subtitle: {
    fontWeight: 700,
    fontSize: "20px",
    padding: "2px 1px",
    marginTop: "8px",
  },
  content: {
    fontWeight: 300,
    width: "90%",
    paddingTop: "1%",
  },
  readmore: {
    marginLeft: "88%",
    width: "15%",
    fontWeight: 660,
    fontStyle: "italic",
  },
  separator: {
    borderTop: "3px solid #ff780e",
    width: "90%",
    paddingLeft: "5%",
   marginTop: "5%",
  },

  contentfont: {
    fontWeight: 400,
    fontSize: "17px",
  },
  image: {
    width: "70%",
    height: "50%",
    paddingLeft: "3%",
    paddingBottom: "3%",
  },
  image2: {
    width: "50%",
    height: "20%",
    paddingLeft: "20%",
    paddingBottom: "3%",
  },
  image3: {
    width: "30%",
    height: "10%",
    paddingLeft: "20%",
    paddingBottom: "3%",
  },
  btndiv: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
  },
  col1: {
    width: "100%",
  },
  col2: {
    width: "100%",
  },
  textq: {
    color: "#e33d1f",
  },
  btn: {
    backgroundColor: "#e33d1f",
    color: "#fff",
    zIndex: 3,
    width: "80%",
    paddingTop: "2%",
    paddingBottom: "2%",
    textTransform: "uppercase",
  },
  pcontent: {
    width: "80%",
    paddingBottom: "1%",
  },
  pcontent2: {
    width: "80%",
    paddingBottom: "4.4%",
  },
  pcontent3: {
    width: "80%",
    paddingBottom: "2%",
  },
}));

export default useStyles;

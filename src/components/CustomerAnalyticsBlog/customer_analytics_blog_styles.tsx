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
  maincontent: {
    paddingTop: "3%",
    paddingLeft: "20%",
  },
  maincontent2: {
    paddingTop: "3%",
    backgroundColor: "#c1c6c8",
    display:'flex',
    flexDirection:'row',
    height:'100vh',
    paddingLeft:'20px',
    paddingRight:'20px'
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
    width: "80%",
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
    height:'80%'
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
    width:'95%',
    height:'100%'
  },
  textq: {
    color: "#e33d1f",
  },
  scrolldiv: {
    width: "95%",
    height: "90%",
    overflowY:'auto'
  },
  list: {
    fontSize: "14px",
  },
  text2: {
    color: "black",
    fontSize: "15px",
    fontWeight: 400,
  },
  text1: {
    color: "white",
    fontSize: "35px",
    fontWeight: 600,
    textTransform: "capitalize",
    padding: 0,
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

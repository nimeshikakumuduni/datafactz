import { makeStyles } from "@material-ui/core";
import { NoEncryption } from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
  posts: {
    backgroundColor: "#c1c6c8",
    width: "90%",
    height: "90%",
    position: "relative",
    paddingLeft: "30px",
  },
  title: {
    fontWeight: 700,
    fontSize: "20px",
    color: "#FF780E",
    padding: "2px 1px",
    marginBottom: 0,
    marginTop: "10px",
  },
  subtitle: {
    fontWeight: 700,
    fontSize: "20px",
    padding: "2px 1px",
    marginTop: "20px",
  },
  content: {
      fontWeight: 300,
      width: "100%",
  },
  readmore: {
      marginLeft: "88%",
      width: "15%",
      fontWeight: 660,
      fontStyle: "italic",
  },
  separator: {
      margin: "7px 0 37px 0",
      borderColor: "#fff",
  },
  subtitlefont: {
      color: "black",
      textDecoration: "none",
  },
  readmorefont: {
    color: "#101820",
    textDecoration: "none",
},
contentfont: {
    fontWeight: 400,
    fontSize: "16px",
}
}));

export default useStyles;

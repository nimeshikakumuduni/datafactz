import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  solutions: {
    backgroundColor: "#101820",
    width: "100%",
  },
  title: {
    width: "60%",
    float: "left",
    fontWeight: 700,
    fontSize: "18px",
    color: "#FF780E",
    marginTop: "4%",
    marginLeft: "5%",
  },
  button: {
    backgroundColor: "#c53f26",
    borderColor: "transparent",
    textDecoration: "none",
    textTransform: "uppercase",
    fontSize: "11px",
    color: "#fff",
    padding: "9px 18px",
    marginTop: "4%",
    fontWeight: 400,
    cursor: "pointer",
  },
  subtitle: {
    textDecoration: "none",
    color: "#fff",
    fontSize: "19px",
    fontWeight: 700,
    marginLeft: "5%",
    marginTop: "15%",
  },
  content: {
    color: "#fff",
    fontSize: "16px",
    fontWeight: 200,
    marginLeft: "5%",
    marginTop: "3%",
    width: "85%",
    paddingBottom: "5%",
  },
});

export default useStyles;

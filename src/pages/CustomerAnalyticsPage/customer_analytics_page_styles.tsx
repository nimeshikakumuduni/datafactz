import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  img2: {
    width: "55%",
    height: "60%",
    position: "relative",
    marginTop: "6%",
    marginBottom: "7%",
    marginLeft: "25%",
  },
  scrollOuter: { zIndex: 1, paddingTop: "400px" },
  relative: { position: "relative" },
  firstrow: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    backgroundColor: "#595959",
    position: "fixed",
    zIndex: -1,
  },
  column2: {
    width: "40%",
  },
  imagediv: {
    paddingBottom: "1%",
    paddingLeft: "5%",
    paddingTop: "5%",
  },
  customercontentdiv: {
    width: "50%",
  },
  customercontent: {
    color: "white",
    fontWeight: 400,
    textTransform: "capitalize",
    paddingTop: "20%",
    fontSize: "27px",
    paddingBottom: "45%",
  },
});

export default useStyles;

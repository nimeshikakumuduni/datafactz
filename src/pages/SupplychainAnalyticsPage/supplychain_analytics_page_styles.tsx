import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  img2: {
    position: "relative",
    width: "80%",
    paddingTop: "5%",
    paddingLeft: "5%",
  },
  scrollOuter: { zIndex: 1, paddingTop: "400px" },
  relative: { position: "relative" },
  firstrow: {
    width: "100%",
    position: "fixed",
    zIndex: -1,
    paddingBottom: "5%",
  },
});

export default useStyles;

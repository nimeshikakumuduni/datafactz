import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  scrollOuter: { zIndex: 1, paddingTop: "325px" },
  relative: { position: "relative" },

  firstrow: {
    width: "100%",
    position: "fixed",
    display: "flex",
    flexDirection: "column",
    zIndex: -1,
    paddingBottom: "5%",
  },
  image2: {
    width: "100%",
    height: "40%",
    paddingTop: "3%",
    paddingLeft: "0%",
  },
});

export default useStyles;

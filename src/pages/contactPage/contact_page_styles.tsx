import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  img2: {
    width: "100%",
    height: "400px",
    position: "fixed",
    top: 0,
    zIndex: -1,
  },
  scrollOuter: { zIndex: 1, paddingTop: "400px" },
  relative: { position: "relative" },
});

export default useStyles;

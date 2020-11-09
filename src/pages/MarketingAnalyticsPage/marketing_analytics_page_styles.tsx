import { makeStyles } from "@material-ui/core";
import { url } from "inspector";

const useStyles = makeStyles({
  scrollOuter: { zIndex: 1, paddingTop: "400px" },
  relative: { position: "relative" },

  firstrow: {
    width: "100%",
    position: "fixed",
    backgroundImage: "url('/images/marketing-banner.png')",
    zIndex: -1,
    height: "100vh",
    backgroundRepeat: "no-repeat",
  },
  title: {
    paddingTop: "10%",
    paddingLeft: "37%",
    color: "#ff780e",
    textTransform: "uppercase",
    fontSize: "45px",
  },
});

export default useStyles;

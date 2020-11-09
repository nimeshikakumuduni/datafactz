import { makeStyles } from "@material-ui/core";
import { url } from "inspector";

const useStyles = makeStyles({
  scrollOuter: { zIndex: 1, paddingTop: "400px" },
  relative: { position: "relative" },

  firstrow: {
    width: "100%",
    height:'100vh',
    position: "fixed",
    backgroundImage: "url('/images/marketing-banner.png')",
    zIndex: -1,
    backgroundColor: "yellow",
  },
});

export default useStyles;

import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  scrollOuter: { zIndex: 1, paddingTop: "400px" },
  relative: { position: "relative" },

  firstrow: {
    width: "100%",
    height:'100vh',
    position: "fixed",
    backgroundImage: "url('/images/marketing-banner.png')",
    zIndex: -1,
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

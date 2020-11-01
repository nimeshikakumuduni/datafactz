import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  capabilitycolumn: {
    width: "50%",
    position: "relative",
    overflow: "fix",
    color: "#ff780e",
  },
  img_one: {
    width: "15%",
    top: "2%",
    left: "18%",
    position: "absolute",
    zIndex: 8,
  },
  img_two: {
    width: "14%",
    top: "6%",
    right: "27%",
    position: "absolute",
    zIndex: 8,
  },
  img_three: {
    width: "14%",
    right: "13%",
    top: "45%",
    position: "absolute",
    zIndex: 8,
  },
  img_four: {
    width: "16%",
    left: "54%",
    top: "60%",
    position: "absolute",
    zIndex: 8,
  },
  img_five: {
    width: "16%",
    left: "7%",
    top: "50%",
    position: "absolute",
    zIndex: 8,
  },
  img_six: {
    opacity: "0",
    width: "14%",
    top: "50%",
    left: "50%",
    position: "absolute",
  },
  background: {
    position: "absolute",
    top: "10%",
    left: "9%",
    opacity: "1",
    height: "60%",
    width: "75%",
  },
  heading: {
    position: "absolute",
    top: "35%",
    left: "39%",
    opacity: "1",
    fontWeight: 700,
    fontSize: "23px",
    textTransform: "uppercase",
  },
});

export default useStyles;

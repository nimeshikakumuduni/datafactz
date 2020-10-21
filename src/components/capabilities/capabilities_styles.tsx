import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  capabilitycolumn: {
    width: "50%",
    position: "relative",
    height: "40%",
    overflow: "fix",
    color: "#ff780e",
  },
  img_one: {
    width: "23%",
    top: "-5%",
    left: "17%",
    position: "absolute",
    zIndex: 8,
  },
  img_two: {
    width: "17%",
    top: "4%",
    right: "22%",
    position: "absolute",
    zIndex: 8,
  },
  img_three: {
    width: "15%",
    bottom: "19%",
    right: "5%",
    position: "absolute",
    zIndex: 8,
  },
  img_four: {
    width: "21%",
    bottom: "-2%",
    left: "52%",
    position: "absolute",
    zIndex: 8,
  },
  img_five: {
    width: "19%",
    bottom: "7%",
    left: "7%",
    position: "absolute",
    zIndex: 8,
  },
  img_six: {
    opacity: "0",
    width: "14%",
    top: "50%",
    left: "50%",
    position: "absolute",
    zIndex: 8,
  },
  background: {
    position: "absolute",
    top: "50%",
    left: "50%",
    opacity: "1",
  },
  heading: {
    position: "absolute",
    top: "50%",
    left: "50%",
    opacity: "1",
  },
});

export default useStyles;

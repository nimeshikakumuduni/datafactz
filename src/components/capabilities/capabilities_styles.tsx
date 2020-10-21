import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  capabilitycolumn: {
    width: "50%",
    position: "relative",
    overflow: "fix",
    color: "#ff780e",
  },
  img_one: {
    width: "18%",
    top: "2%",
    left: "17%",
    position: "absolute",
    zIndex: 8,
  },
  img_two: {
    width: "17%",
    top: "9%",
    right: "22%",
    position: "absolute",
  },
  img_three: {
    width: "15%",
    right: "5%",
    position: "absolute",
  },
  img_four: {
    width: "21%",
    left: "52%",
    top: "50%",
    position: "absolute",
  },
  img_five: {
    width: "19%",
    left: "7%",
    position: "absolute",
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
    top: "20%",
    left: "-20%",
    opacity: "1",
  },
  heading: {
    position: "absolute",
    top: "50%",
    left: "50%",
    opacity: "1",
    fontWeight: 700,
    textTransform: "uppercase",
  },
});

export default useStyles;

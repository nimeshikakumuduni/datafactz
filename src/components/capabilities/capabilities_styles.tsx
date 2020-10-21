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
    top: "0%",
    left: "18%",
    position: "absolute",
    zIndex: 8,
  },
  img_two: {
    width: "17%",
    top: "9%",
    right: "22%",
    position: "absolute",
    zIndex: 8,
  },
  img_three: {
    width: "15%",
    right: "2.5%",
    top: "55%",
    position: "absolute",
    zIndex: 8,
  },
  img_four: {
    width: "19%",
    left: "54%",
    top: "72%",
    position: "absolute",
    zIndex: 8,
  },
  img_five: {
    width: "19%",
    left: "7%",
    top: "65%",
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
    top: "11%",
    left: "9%",
    opacity: "1",
    height: "68%",
    width: "85%",
  },
  heading: {
    position: "absolute",
    top: "37%",
    left: "40%",
    opacity: "1",
    fontWeight: 700,
    fontSize: "23px",
    textTransform: "uppercase",
  },
});

export default useStyles;

import { makeStyles, createStyles, Theme } from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    outer: {
      width: "100%",
      height: "100%",
      overflow: "auto",
      position: "absolute",
      backgroundColor: "#ffffffa6",
    },
    appBar: { position: "fixed", width: "100%" },
    appBarHeight: { height: "50px", width: "100%" },
    grid: {
      flexGrow: 1,
    },
    paper: {
      height: 140,
      width: 100,
    },
    control: {
      padding: theme.spacing(1),
    },
    nameRow: { width: "100%", display: "flex", flexDirection: "row" },
    text1: {
      fontSize: "20vw",
      fontWeight: 700,
      fontFamily: "burnstown",
      color: "rgb(130 99 99)",
      textShadow: "-2px 3px 33px white",
    },
    text2: {
      fontSize: "6vw",
      fontWeight: 700,
      fontFamily: "action",
      color: "rgb(90 74 74)",
      textShadow: "-2px 3px 33px white",
      marginTop: "15vw",
    },
    nameRowWidth: {
      width: "100%",
      paddingLeft: "10vw",
      marginLeft: "-10vw",
      marginTop: "-5vw",
    },
    card: {
      display: "flex",
    },
    details: {
      display: "flex",
      flexDirection: "column",
    },
    content: {
      flex: "1 0 auto",
    },
    cover: {
      width: 120,
      height: 100,
    },
    cover2: {
      width: 120,
      height: 120,
    },
    contacticon: {
      width: 130,
      height: 130,
    },
    contactPagediv: {
      width: "90%",
      height: "100%",
      position: "fixed",
      paddingLeft: "60%",
    },
    contactTopic: {
      fontSize: "6vw",
      fontWeight: 700,
      fontFamily: "burnstown",
      color: "black",
      textShadow: "-2px 3px 33px white",
    },
    directmsg: {
      width: "100%",
      height: "100%",
      overflow: "auto",
      position: "fixed",
      paddingRight: "50%",
      borderRadius: "7px",
      color: "grey",
      opacity: "5%",
      paddingTop: "20px",
    },
    DirectMsgAppBar: {
      backgroundImage: "linear-gradient(45deg, #0d0d0d, #ff0a0a);",
    },
    title: {
      flexGrow: 1,
      fontSize: "3vw",
      fontWeight: 500,
      color: "black",
      textShadow: "-2px 3px 33px white",
    },
    textmsg: {
      width: "98%",
      margin: "auto",
      backgroundColor: "#d8d8d882",
      borderRadius: "10px",
      display: "flex",
      flexDirection: "row",
      marginTop: "8px",
    },
    messageBox: {
      position: "absolute",
      zIndex: 10,
      top: "30px",
      height: "600px",
      backgroundColor: "#31313175",
      width: "100%",
      borderRadius: "10px",
      marginLeft: "10px",
      marginBottom:'30px'
    },
    messagesOuter: {
      display: "flex",
      flexDirection: "column",
      width: "98%",
      margin: "auto",
      height: "490px",
      overflowY: "auto",
      overflowX: "hidden",
    },
    customerMessage: {
      width: "fit-content",
      padding: "5px",
      backgroundColor: "pink",
      float: "left",
      display: "flex",
      flexDirection: "column",
    },
    adminMessage: {
      width: "fit-content",
      padding: "5px",
      backgroundColor: "orange",
      float: "right",
      display: "flex",
      flexDirection: "column",
    },
    commonMessage: {
      width: "96%",
      margin: "auto",
      marginTop: "5px",
    },
    messageBody: {
      textAlign: "left",
    },
    messageDate: {
      textAlign: "right",
      fontSize: "10px",
      color: "grey",
    },
    chatAppBar: {
      backgroundColor: "#8c4207",
      color: "white",
      fontSize: "24px",
      borderTopRightRadius: "10px",
      borderTopLeftRadius: "10px",
      padding: "4px 10px",
    },
    chatBlock: {
      textAlign: "center",
      fontSize: "50px",
      fontWeight: "bold",
      color: "white",
      textShadow: "0px 0px 20px black",
      width: "fit-content",
      margin: "auto",
      marginTop: "400px",
    },
    chatOuter:{
      width:'50%',
      position:'relative'
    }
  })
);

export default useStyles;

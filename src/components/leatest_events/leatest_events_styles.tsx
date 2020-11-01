import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
    solutions: {
        backgroundColor: "#595959",
        width: "100%",
        marginTop: "1%",
    },
    
    title: {
        width: "60%",
        float: "left",
        fontWeight: 700,
        fontSize: "18px",
        color: "#FF780E",
        marginTop: "4%",
        marginLeft: "5%",
    },
    button: {
        backgroundColor: "#c53f26",
        borderColor: "transparent",
        textDecoration: "none",
        textTransform: "uppercase",
        fontSize: "11px",
        color: "#fff",
        padding: "9px 18px",
        marginTop: "4%",
        fontWeight: 400,
        cursor: "pointer",
    },
    subtitle: {
        textDecoration: "none",
        color: "#fff",
        fontSize: "19px",
        fontWeight: 700,
    },
    content: {
        color: "#fff",
        fontSize: "16px",
        fontWeight: 200,
        marginLeft: "5%",
        marginTop: "4%", 
        width: "85%",
        paddingBottom: "2%",
    },
    topicdiv: {
        width: "80%",
        marginLeft: "5%",
        marginTop: "5%",
    }
});

export default useStyles;

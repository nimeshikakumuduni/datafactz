import { Button } from "@material-ui/core";
import React from "react";
import useStyles from "./footer_styles";

function Footer(){
 const classes = useStyles();
    return(
<footer>
          <Button>
          Get a solution
          </Button>
          <Button>
          Request call
          </Button>
</footer>
    );
}
export default Footer;
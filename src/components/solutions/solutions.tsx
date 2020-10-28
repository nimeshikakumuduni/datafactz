import { Button } from "@material-ui/core";
import React from "react";
import useStyles from "./solutions_styles";

function Solutions() {
  const classes = useStyles();

  return (
    <div className={classes.solutions}>
      <div className={classes.title}>Latest in Solutions</div>

      <Button className={classes.button} variant="contained">
        FIND OUT MORE
      </Button>
      <a href="/solutions" className={classes.subtitle}>
        Solutions
      </a>
      <div className={classes.content}>
        <p>
          Reliability, stability and customer satisfaction are top three of many
          issues that energy and utility industries now face. The revenue lost
          either in meeting these standards or not meeting the minimum
          requirements is unimaginably high. Our expertise with data and SME’s
          in energy and utility industry have demonstrated the use of Big Data
          &amp; Analytics...
        </p>
      </div>
    </div>
  );
}

export default Solutions;

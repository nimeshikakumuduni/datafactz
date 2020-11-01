import React from "react";
import useStyles from "./red_line_styles";

function RedLine() {
    const classes = useStyles();

  return (
    <div className={classes.outer}>
      <div className={classes.container}>
        <a className={classes.sent}>
          ADD YOUR COMPANY TO THE LIST OF THE ONES WITH AN <span className={classes.edge}>EDGE!</span>
        </a>
      </div>
    </div>
  );
}

export default RedLine;

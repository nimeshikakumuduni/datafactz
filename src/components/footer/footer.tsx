import { Button } from "@material-ui/core";
import React from "react";
import useStyles from "./footer_styles";

function Footer() {
  const classes = useStyles();
  return (
    <div className={classes.footer}>
      <div className={classes.column}>
        <img
          width="250"
          height="70"
          src="images\datafactz.png"
          className={classes.img}
          alt="Advanced Business Big Data Analytics Company - DataFactZ"
        />
        <p className={classes.font_semibold}>Corporate Head Quarters</p>
        <p className={classes.bold}>22260 Haggerty Rd, Northville, MI</p>
        <p className={classes.bold}>hello(at)datafactz.com</p>

        <div className={classes.label}></div>
      </div>

      <div className={classes.column2}>
        <p className={classes.font_semibold}>
          Submit a challenge and have an expert walk you through a DataFactZ
          solution.
        </p>
      </div>
      <Button className={classes.btn}>Get a solution</Button>

      <div className={classes.column3}>
        <p className={classes.font_semibold}>Questions?</p>
        <p className={classes.font_semibold}> We're just a call away.</p>
        <h1 className={classes.h1}>(866) 739-0820</h1>
      </div>
      <Button className={classes.btn2}>Request call</Button>

      <div className={classes.yellorow}>
        <p className={classes.copyright}>
          Copyright © 2020 DataFactZ All rights reserved.
        </p>
      </div>
    </div>
  );
}
export default Footer;

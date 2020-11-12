import React from "react";
import IBMPageBlog from "../IBMBlog/ibm_blog";
import useStyles from "./ibm_parnership_content_styles";

function IBMParnershipContent() {
  const classes = useStyles();

  return (
    <div className={classes.solutions}>
      <div className={classes.cont1}>
        <div className={classes.para}>
          <h1 className={classes.text2}>
            IBM z Systems can enable enterprise businesses with unseen
            opportunities rise as possibilities. DataFactZ is proud to be a
            solution partner for IBM z Systems to deliver cutting edge business
            centric solutions with Spark.
          </h1>
        </div>
      </div>

      <div className={classes.cont2}>
        <IBMPageBlog />
      </div>
    </div>
  );
}

export default IBMParnershipContent;

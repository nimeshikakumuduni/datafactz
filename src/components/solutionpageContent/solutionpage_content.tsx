import React from "react";
import SolutionPageBlog from "../solutionpageBlog/solution_page_blog";
import useStyles from "./solutionpage_content_styles";

function SolutionpageContent() {
  const classes = useStyles();

  return (
    <div className={classes.solutions}>
      <div className={classes.cont1}>
        <div className={classes.para}>
          <h1 className={classes.text1}>
            BIG DECISIONS NEED BETTER ANALYTICS.
          </h1>
          <h1 className={classes.text2}>
            See some of the diverse solutions we are part of. With services and
            experience that cut across sectors, we invite you to share your Big
            Data challenge regardless of industry.
          </h1>
        </div>
      </div>

      <div className={classes.cont2}>
      <SolutionPageBlog/>
      </div>
    </div>
  );
}

export default SolutionpageContent;

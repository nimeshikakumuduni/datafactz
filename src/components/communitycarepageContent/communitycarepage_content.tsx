import React from "react";
import CommunitycarePageBlog from "../communitycarePageBlog/communitycarepage_blog";
import useStyles from "./communtycare_page_content_styles";

function CommunitycarePageContent() {
  const classes = useStyles();

  return (
    <div className={classes.solutions}>
      <div className={classes.cont1}>
        <p className={classes.require}>
          Metro Detroit is quickly becoming a hub of technology and innovation,
          and we are proud to be a member of the region’s business community for
          more than ten years. As we have grown along with the region, we work
          in a number of ways to foster innovation in the area and develop a
          strong community of data professionals.
        </p>
      </div>
      <CommunitycarePageBlog />
    </div>
  );
}

export default CommunitycarePageContent;

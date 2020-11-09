import React from "react";
import CareersPageBlog from "../CareersPageBlog/careers_page_blog";
import CommunitycarePageBlog from "../communitycarePageBlog/communitycarepage_blog";
import useStyles from "./careers_page_styles";

function CareersPageContent() {
  const classes = useStyles();

  return (
    <div className={classes.solutions}>
      <div className={classes.cont1}>
        <p className={classes.require}>
          As we continue to expand our business, we are consistently looking for
          analytics professionals to join the DataFactZ team. The Z-Factor
          reaches beyond our excellent client service to create a working
          environment for employees that offers a range of opportunities to
          build a career in the data industry. We remain on the cutting edge of
          the analytics industry, utilizing the latest technology to fulfill the
          needs of major clients across a wide range of industries. If you are
          interested in learning more about joining the DataFactZ team, contact
          careers@datafactz.com with your cover letter and resume.
        </p>
      </div>
      <CareersPageBlog/>
    </div>
  );
}

export default CareersPageContent;

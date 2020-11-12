import React from "react";
import RealtimeaBlog from "../RealTimeBlog/realtime_blog";
import useStyles from "./realtime_page_content_styles";

function RealtimepageContent() {
  const classes = useStyles();

  return (
    <div className={classes.solutions}>
      <div className={classes.cont1}>
        <h1 className={classes.text2}>
          What’s happening to your business, product, or customer behavior in
          real time?
        </h1>
      </div>

      <div className={classes.cont2}>
        <RealtimeaBlog />
      </div>
    </div>
  );
}

export default RealtimepageContent;

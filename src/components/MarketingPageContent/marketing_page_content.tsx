import { List, ListItem } from "@material-ui/core";
import React from "react";
import MarketingPageBlog from "../MarketingPageBlog/marketing_page_blog";
import useStyles from "./mrketing_page_content_styles";

function MarketingpageContent() {
  const classes = useStyles();

  return (
    <div className={classes.solutions}>
      <div className={classes.cont1}>
        <div className={classes.para}>
          <h1 className={classes.text2}>
            Companies that invest in marketing analytics as a “discipline” can
            measure, manage and analyze performance to maximize marketing
            effectiveness and optimize return on investment (ROI). At DataFactZ,
            we bring more than a decade of business analytics experience and a
            marketing analytics team headed by Ph.D.s who can build and optimize
            state-of-the-art simulation models. Our strengths in statistics and
            mathematics, simulation, modeling and optimization provide the most
            effective analytical foundation to address complex business and
            strategy issues. As our approach to advanced analytics is
            interdisciplinary, we can draw from other areas in customer
            analytics in order to complement marketing analytics, such as
            customer life value, customer retention, or upsell and cross sell.
            The strategies mentioned above provide only a basic foundation that
            should be complemented by several other areas in advanced analytics,
            in order to establish a successful marketing analytics strategy,
            such as:
          </h1>
          <List className={classes.list1}>
            <ListItem>Choice modeling</ListItem>
            <ListItem>Market mix modeling</ListItem>
            <ListItem>Product portfolio management</ListItem>
            <ListItem>Brand equity management</ListItem>
          </List>
        </div>
      </div>

      <div className={classes.cont2}>
        <MarketingPageBlog />
      </div>
    </div>
  );
}

export default MarketingpageContent;

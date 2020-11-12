import { List, ListItem } from "@material-ui/core";
import React from "react";
import CustomerAnalyticsBlog from "../CustomerAnalyticsBlog/customer_analytics_blog";
import useStyles from "./customer_analytics_page_content_styles";

function CustomerAnalyticsPageContent() {
  const classes = useStyles();

  return (
    <div className={classes.solutions}>
      <div className={classes.cont1}>
        <div className={classes.para}>
          <h1 className={classes.text1}>Customer Lifetime Value</h1>
          <h1 className={classes.text2}>
            Gain new insight and completely shift perspectives in new customer
            acquisition and retention with CLV- a critical dimension in
            understanding your customers. Predictive CLV is the most effective
            way not only understand current customer worth, but also how their
            value will change over time.
          </h1>
          <List className={classes.list}>
            <ListItem>
              Calculate the lifetime value by customer or segment of customers
              to determine how much a customer or a segment worth, and expected
              spending over time.
            </ListItem>
            <ListItem>
              Identify the most effective marketing/promotional campaigns
              (targeted marketing) and also determine which channels generate
              the highest CLV.
            </ListItem>
            <ListItem>
              Discover customer preferences and engage most loyal customers
              based on CLV. These could be special invitations, customized
              promotions etc
            </ListItem>
            <ListItem>
              Determine the most valuable customer base and explore similar
              customer segments that can targeted for a better ROI
            </ListItem>
            <ListItem>
              Improve the overall customer acquisition and retention.
            </ListItem>
          </List>
        </div>
      </div>

      <div className={classes.cont2}>
        <CustomerAnalyticsBlog />
      </div>
    </div>
  );
}

export default CustomerAnalyticsPageContent;

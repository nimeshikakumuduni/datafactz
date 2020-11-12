import { Button, List, ListItem } from "@material-ui/core";
import React from "react";
import SupplychainBlog from "../SupplyChainBlog/supplychain_blog";
import useStyles from "./supplychain_page_content_styles";

function SupplychainpageContent() {
  const classes = useStyles();

  return (
    <div className={classes.solutions}>
      <div className={classes.cont1}>
        <div className={classes.para}>
          <h1 className={classes.text2}>
            Globalization of supply chains has led to growing legal, safety,
            security and product take back concerns. Through supply chain
            analytics, we are able to give you an in-depth view of each link in
            the supply chain to help your organization create a strategic plan
            to increase efficiency and maintain a competitive advantage.
            Innovations in analytics allow companies to collect and analyze
            information throughout the global supply chain in near real-time to
            identify and take advantage of opportunities to increase efficiency,
            responsiveness and resilience, while decreasing shipping delays,
            inconsistencies with suppliers and other inefficiencies. Through
            supply chain analytics, we help clients:
          </h1>
          <List className={classes.supplychainlist}>
            <ListItem>
              Provide end-to-end visibility into supply chain performance
            </ListItem>
            <ListItem>
              Provide flexibility to thrive under supply volatility and market
              uncertainty
            </ListItem>
            <ListItem>
              Effectively collaborate and coordinate with suppliers around the
              globe
            </ListItem>
            <ListItem>
              Control costs through process optimization throughout the supply
              chain
            </ListItem>
          </List>
          <Button className={classes.btn}>download solution</Button>
        </div>
      </div>

      <div className={classes.cont2}>
        <SupplychainBlog />
      </div>
    </div>
  );
}

export default SupplychainpageContent;

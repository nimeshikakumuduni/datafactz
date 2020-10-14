import React from "react";
import useStyles from "./home_page_styles";
import { List, ListItem, ListItemText } from "@material-ui/core";
import MyAppBar from "../../components/app_bar";
import NameCard from "../contactPage/name_card";
import { useHistory } from "react-router-dom";
import ParticlesBg from "particles-bg";

function HomePage() {
  const classes = useStyles();

  return (
    <div>
      <div className={classes.outer}>
        <div className={classes.appBar}>
          <MyAppBar />
          <div className={classes.cont1}>
            <img
              className={classes.img2}
              alt="before"
              src="https://datafactz.com/wp-content/themes/datafactz/dist/images/before.jpg"
              id="beforeimage27895723"
            />
          </div>
          <div className={classes.homecontent}>
            <h3 className={classes.heading} id="hero-tabs-heading">
              Unparalleled Business Analytics For Data-Driven Solutions
            </h3>
          </div>
          <List className={classes.tab}>
            <ListItem className={classes.one}>
              <h5>Supply Chain Analytics</h5>
              <div>
                <h3>Supply Chain Analytics</h3>
                <p>
                  The ability to collect and analyze information in real-time
                  from across the global supply and distribution networks
                  enables a company to manage the cost efficiency,
                  responsiveness, and resilience of their supply chains.
                </p>
                <a href="/supply-chain-analytics">See how</a>
              </div>
            </ListItem>
            <ListItem>
              <h5>Customer Analytics</h5>
              <div>
                <h3>Customer Analytics</h3>
                <p>
                  Let's identify and process the business metrics needed to
                  achieve a singular view of your customer experience.
                </p>
                <a href="/customer-analytics">See how</a>
              </div>
            </ListItem>
            <ListItem>
              <h5>Risk Analytics</h5>
              <div>
                <h3>Risk Analytics</h3>
                <p>
                  With end to end advanced analytics capabilities, we can help
                  organizations identify and manage the complex risks associated
                  with development, deployment, and maintenance of complex
                  models used for risk management, valuation, and financial
                  &amp; regulatory reporting purposes.
                </p>
                <a href="/risk-analytics">See how</a>
              </div>
            </ListItem>
            <ListItem>
              <h5>Marketing Analytics</h5>
              <div>
                <h3>Marketing Analytics</h3>
                <p>
                  The only way to maximize marketing ROI is to effectively
                  measure, manage and analyze your marketing performance. Our
                  unparalleled team can build and optimize state-of-the-art
                  simulation models.
                </p>
                <a href="/marketing-analytics">See how</a>
              </div>
            </ListItem>
            <ListItem>
              <h5>Social Media Analytics</h5>
              <div>
                <h3>Social Media Analytics</h3>
                <p>
                  Regardless of how Social Media platforms evolve, the resulting
                  data provides tremendous opportunities for organizations to
                  take their CRM capabilities to a whole new level.
                </p>
                <a href="/social-media-analytics">See how</a>
              </div>
            </ListItem>
            <ListItem>
              <h5>Real Time Analytics</h5>
              <div>
                <h3>Real Time Analytics</h3>
                <p>
                  We've built an extensive practice around Real time Analytics,
                  and can produce actionable metrics for making better business
                  decisions.
                </p>
              </div>
            </ListItem>
          </List>
        </div>
      </div>
    </div>
  );
}

export default HomePage;

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
        </div>
        <div className={classes.appBarHeight}></div>
        <div className={classes.nameRow}>
          <NameCard />
          <div className={classes.homecontent}>
            <div className={classes.topic1}>
              <text className={classes.text3}>
                Unparalleled Business Analytics for Data-Driven Solutions
              </text>
            </div>
            <div></div>
            <text className={classes.text4}>Our Goal : </text>
            <div></div>
            <text className={classes.text5}>
              With end to end advanced analytics, capabilities, we can help
              organizations identify and manage the complex risks associated
              with development, deployment and maintenance of complex models
              used for risk management, valuation and financial and regulatory
              reporting purposes.
            </text>
            <div></div>
            <text className={classes.text4}>Our Services :</text>
            <ServiceList />
          </div>
          <ParticlesBg type="cobweb" bg={true} />
        </div>
      </div>
    </div>
  );
}

function ServiceList() {
  const classes = useStyles();

  return (
    <List component="nav" aria-label="main mailbox folders">
      <ListItem className={classes.serviceBtn}>
        <ListItemText primary="Marketing Analytics" />
      </ListItem>
      <ListItem className={classes.serviceBtn}>
        <ListItemText primary="Social Media Analytics" />
      </ListItem>
      <ListItem className={classes.serviceBtn}>
        <ListItemText primary="Real time Analytics" />
      </ListItem>
    </List>
  );
}
export default HomePage;

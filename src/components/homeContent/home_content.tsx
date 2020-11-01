import { List, ListItem } from "@material-ui/core";
import React from "react";
import useStyles from "./home_content_styles";

function HomeContent() {
  const classes = useStyles();

  return (
    <div>
      <div className={classes.homecontent}>
        <h3 className={classes.heading} id="hero-tabs-heading">
          Unparalleled Business Analytics For Data-Driven Solutions
        </h3>
        <List>
          <ListItem>
            <h5 className={classes.title1}>Supply Chain Analytics</h5>
          </ListItem>
          <ListItem>
            <h5 className={classes.title1}>Customer Analytics</h5>
          </ListItem>
          <ListItem>
            <h5 className={classes.title1}>Risk Analytics</h5>
          </ListItem>
          <ListItem>
            <h5 className={classes.title1}>Marketing Analytics</h5>
          </ListItem>
          <ListItem>
            <h5 className={classes.title1}>Social Media Analytics</h5>
          </ListItem>
          <ListItem>
            <h5 className={classes.title1}>Real Time Analytics</h5>
          </ListItem>
        </List>
      </div>
    </div>
  );
}

export default HomeContent;

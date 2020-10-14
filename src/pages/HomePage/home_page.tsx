import React from "react";
import useStyles from "./home_page_styles";
import { List, ListItem} from "@material-ui/core";
import MyAppBar from "../../components/app_bar";


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
          <div>
          <List className={classes.tab}>
            <ListItem className={classes.one}>
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
          </List></div>

          <div className={classes.container}>
          
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;

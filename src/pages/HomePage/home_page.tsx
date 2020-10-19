import React from "react";
import useStyles from "./home_page_styles";
import { List, ListItem } from "@material-ui/core";
import MyAppBar from "../../components/app_bar";

function HomePage() {
  const classes = useStyles();

  return (
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

        <div className={classes.container}>
          <div id="myCarousel" className={classes.slide}>
            <div className={classes.inner}>
              <div>
               
                <div className={classes.image}>
                  <img
                    src="https://datafactz.com/wp-content/themes/datafactz/dist/images/amazon.png"
                    alt="amazon"
                  />
                </div>
                <div className={classes.image}>
                  <img
                    src="https://datafactz.com/wp-content/themes/datafactz/dist/images/AAA.png"
                    alt="AAA"
                  />
                </div>
                <div className={classes.image}>
                  <img
                    src="https://datafactz.com/wp-content/themes/datafactz/dist/images/centene.png"
                    alt="centene"
                  />
                </div>
                <div className={classes.image}>
                  <img
                    src="https://datafactz.com/wp-content/themes/datafactz/dist/images/pacific-life.png"
                    alt="pacific-life"
                  />
                </div>
                <div className={classes.image}>
                  <img
                    src="https://datafactz.com/wp-content/themes/datafactz/dist/images/pch.png"
                    alt="pch"
                  />
                </div>
                <div className={classes.image}>
                  <img
                    src="https://datafactz.com/wp-content/themes/datafactz/dist/images/starbucks.png"
                    alt="starbucks"
                  />
                </div>
                <div className={classes.image}>
                  <img
                    src="https://datafactz.com/wp-content/themes/datafactz/dist/images/coca-cola.png"
                    alt="coca-cola"
                  />
                </div>
              </div>
              <div>
                <div className={classes.image}>
                  <img
                    src="https://datafactz.com/wp-content/themes/datafactz/dist/images/meijer.png"
                    alt="meijer"
                  />
                </div>
                <div className={classes.image}>
                  <img
                    src="https://datafactz.com/wp-content/themes/datafactz/dist/images/sears.png"
                    alt="sears"
                  />
                </div>
                <div className={classes.image}>
                  <img
                    src="https://datafactz.com/wp-content/themes/datafactz/dist/images/cable-vision.png"
                    alt="cable-vision"
                  />
                </div>
                <div className={classes.image}>
                  <img
                    src="https://datafactz.com/wp-content/themes/datafactz/dist/images/maximus.png"
                    alt="maximus"
                  />
                </div>
                <div className={classes.image}>
                  <img
                    src="https://datafactz.com/wp-content/themes/datafactz/dist/images/cheesecake-factory.png"
                    alt="cheesecake-factory"
                  />
                </div>
              </div>
              <div>
                <div className={classes.image}>
                  <img
                    src="https://datafactz.com/wp-content/themes/datafactz/dist/images/image11.png"
                    alt="rockspace"
                  />
                </div>
                <div className={classes.image}>
                  <img
                    src="https://datafactz.com/wp-content/themes/datafactz/dist/images/pch.png"
                    alt="pch"
                  />
                </div>
                <div className={classes.image}>
                  <img
                    src="https://datafactz.com/wp-content/themes/datafactz/dist/images/starbucks.png"
                    alt="starbucks"
                  />
                </div>
                <div className={classes.image}>
                  <img
                    src="https://datafactz.com/wp-content/themes/datafactz/dist/images/coca-cola.png"
                    alt="coca-cola"
                  />
                </div>
                <div className={classes.image}>
                  <img
                    src="https://datafactz.com/wp-content/themes/datafactz/dist/images/gap.png"
                    alt="gap"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;

import React from "react";
import useStyles from "./home_page_styles";
import MyAppBar from "../../components/appBar/app_bar";
import HomeContent from "../../components/homeContent/home_content";
import LinearArea from "../../components/linearArea/linear_area";
import RedLine from "../../components/redLine/red_line";
import Capabilities from "../../components/capabilities/capabilities";
import Sector from "../../components/sector/sector";

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
        <HomeContent />
        <LinearArea />
        <RedLine />

        <div className={classes.equalcolumns}>
          <Capabilities />
          <Sector />
        </div>
      </div>
    </div>
  );
}

export default HomePage;

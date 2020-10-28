import React from "react";
import useStyles from "./home_page_styles";
import MyAppBar from "../../components/appBar/app_bar";
import HomeContent from "../../components/homeContent/home_content";
import LinearArea from "../../components/linearArea/linear_area";
import RedLine from "../../components/redLine/red_line";
import Capabilities from "../../components/capabilities/capabilities";
import Sector from "../../components/sector/sector";
import Blog from "../../components/blog/blog";
import Solutions from "../../components/solutions/solutions";
import { Typography } from "@material-ui/core";
import LeatestEvents from "../../components/leatest_events/leatest_events";
import Footer from "../../components/footer/footer";

function HomePage() {
  const classes = useStyles();

  return (
    <div>
        <MyAppBar />
      <div className={classes.outer}>
        <Typography className={classes.cont1}>
          <img
            className={classes.img2}
            alt="before"
            src="https://datafactz.com/wp-content/themes/datafactz/dist/images/before.jpg"
            id="beforeimage27895723"
          />
        </Typography>
        <HomeContent />
        <LinearArea />
        <RedLine />

        <Typography className={classes.equalcolumns}>
          <Capabilities/>
          <Sector/>
        </Typography>
        <Typography className={classes.postdiv}>
          <Blog/>
        </Typography>
        <Typography className={classes.solutiondiv}>
          <Solutions/>
        </Typography>
        <Typography className={classes.eventdiv}>
          <LeatestEvents/>
        </Typography>
        <Typography className={classes.footerdiv}>
          <Footer/>
        </Typography>
      </div>
    </div>
  );
}

export default HomePage;

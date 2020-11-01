import React from "react";
import useStyles from "./aboutus_page_styles";
import MyAppBar from "../../components/appBar/app_bar";
import HomeContent from "../../components/homeContent/home_content";
import LinearArea from "../../components/linearArea/linear_area";
import RedLine from "../../components/redLine/red_line";
import Capabilities from "../../components/capabilities/capabilities";
import Sector from "../../components/sector/sector";
import Blog from "../../components/blog/blog";
import Solutions from "../../components/solutions/solutions";
import { Button, Typography } from "@material-ui/core";
import LeatestEvents from "../../components/leatest_events/leatest_events";
import Footer from "../../components/footer/footer";

function AboutUsPage() {
  const classes = useStyles();

  return (
    <div>
      <MyAppBar />
      <div className={classes.outer}>
        <Typography className={classes.cont1}>
          <div className={classes.div1}>
            <h2 className={classes.h2style}>
              We’re a passionate
              <span className={classes.highlight}>
                {" "}
                Business Analytics Company
              </span>
              ; thrilled to help you make the right decisions by harnessing the
              power of
              <span className={classes.highlight}> Big Data.</span>
            </h2>
          </div>
          <div className={classes.linerarea}>
            <div className={classes.circlecontainer}>
              <div className={classes.circle}>234</div>
              <div className={classes.circletext}>Founded</div>
            </div>
            <div className={classes.circlecontainer}>
              <div className={classes.circle}>234</div>
              <div className={classes.circletext}>Employee</div>
            </div>
            <div className={classes.circlecontainer}>
              <div className={classes.circle}>234</div>
              <div className={classes.circletext}>Clients</div>
            </div>
            <div className={classes.circlecontainer}>
              <div className={classes.circle}>234</div>
              <div className={classes.circletext}>Projects</div>
            </div>
          </div>
        </Typography>

        <div className={classes.rowdiv}>
          <div className={classes.contentdiv}>
            <p className={classes.paragraph}>
              We are a company driven by inquisitive data scientists, having
              developed a pragmatic and interdisciplinary approach, which has
              evolved over the decades working with over 100 clients across
              multiple industries. Combining several Data Science techniques
              from statistics, machine learning, deep learning, decision
              science, cognitive science, and business intelligence, with our
              ecosystem of technology platforms, we have produced unprecedented
              solutions. Welcome to the Data Science Analytics team that can do
              it all, from architecture to algorithms. Download a brochure
            </p>
          </div>
          <div className={classes.videodiv}>
            <img
              className={classes.videoimage}
              src="images\unnamed.png"
              alt="video"
            ></img>
          </div>
        </div>

        <div className={classes.rowdiv2}>
          <img
            className={classes.videoimage2}
            src="images\infographic_section.png"
            alt="video"
          />
        </div>

        <div className={classes.offcimagediv}>
          <img
            src="https://datafactz.com/wp-content/uploads/2015/09/group-of-people-optimized.jpg?id=1798"
            className={classes.officeimage}
          ></img>
        </div>
        <div className={classes.leadership}><h3 className={classes.leadershiptext}>leadership</h3></div>
        <Footer />
      </div>
    </div>
  );
}

export default AboutUsPage;

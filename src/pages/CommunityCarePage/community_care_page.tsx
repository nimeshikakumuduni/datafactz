import React from "react";
import useStyles from "./community_care_page_styles";
import MyAppBar from "../../components/appBar/app_bar";
import ContactpageContent from "../../components/contactpageContent/contactpage_content";
import Footer from "../../components/footer/footer";
import LeafletMapView from "../../components/map/leaflet_map";
import { Typography } from "@material-ui/core";
import CommunitycarePageContent from "../../components/communitycarepageContent/communtycare_page_content_styles";

function CommunitycarePage() {
  const classes = useStyles();
  return (
    <div>
      <MyAppBar />
      <div className={classes.relative}>
        <div className={classes.firstdiv}>
          <div className={classes.imagediv}>
            <img
              className={classes.img2}
              alt="before"
              src="images\image1.png"
              id="beforeimage27895723"
            />
          </div>
          <div className={classes.textdiv}>
            <p className={classes.firstdivtext}>building community</p>
          </div>
        </div>
        <div className={classes.scrollOuter}>
          <CommunitycarePageContent />
          <Footer />
        </div>
      </div>
    </div>
  );
}
export default CommunitycarePage;

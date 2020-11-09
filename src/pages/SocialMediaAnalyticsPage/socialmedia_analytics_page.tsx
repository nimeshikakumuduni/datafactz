import React from "react";
import useStyles from "./socialmedia_analytics_page_styles";
import MyAppBar from "../../components/appBar/app_bar";
import Footer from "../../components/footer/footer";
import RiskpageContent from "../../components/RiskPageContent/risk_page_content";
import SocialMediapageContent from "../../components/SocialMediaPageContent/socalmedia_page_content";

function SocialmediaAnalyticsPage() {
  const classes = useStyles();
  return (
    <div>
      <MyAppBar />
      <div className={classes.relative}>
        <div className={classes.firstrow}>
        <img className={classes.image} src="images\social-media-header.png"></img>
        <div>
          <h1 className={classes.title}>social media Analytics</h1>
          <h1 className={classes.subtitle}>they're all talking! Now lets's make social data actionable and insightful.</h1></div>
        </div>

        <div className={classes.scrollOuter}>
          <SocialMediapageContent />
          <Footer />
        </div>
      </div>
    </div>
  );
}
export default SocialmediaAnalyticsPage;

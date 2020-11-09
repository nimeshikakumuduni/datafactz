import React from "react";
import useStyles from "./risk_analytics_page_styles";
import MyAppBar from "../../components/appBar/app_bar";
import Footer from "../../components/footer/footer";
import RiskpageContent from "../../components/RiskPageContent/risk_page_content";

function RiskAnalyticsPage() {
  const classes = useStyles();
  return (
    <div>
      <MyAppBar />
      <div className={classes.relative}>
        <div className={classes.firstrow}>
            
        <img className={classes.image} src="images\Screenshot (68).png"></img>
          <h1 className={classes.title}>risk Analytics</h1>
        </div>

        <div className={classes.scrollOuter}>
          <RiskpageContent />
          <Footer />
        </div>
      </div>
    </div>
  );
}
export default RiskAnalyticsPage;

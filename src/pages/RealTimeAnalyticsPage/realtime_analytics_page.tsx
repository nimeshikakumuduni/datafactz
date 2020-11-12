import React from "react";
import useStyles from "./realtime_analytics_page_styles";
import MyAppBar from "../../components/appBar/app_bar";
import Footer from "../../components/footer/footer";
import RealtimepageContent from "../../components/RealTimePageContent/realtime_page_content";

function RealTimeAnalyticsPage() {
  const classes = useStyles();
  return (
    <div>
      <MyAppBar />
      <div className={classes.relative}>
        <div className={classes.firstrow}>
        <div className={classes.topicdiv}>
          <h1 className={classes.title}>real time Analytics</h1>
          <h1 className={classes.subtitle}>empower your data with "time critical" situational awareness</h1></div>
        </div>

        <div className={classes.scrollOuter}>
          <RealtimepageContent />
          <Footer />
        </div>
      </div>
    </div>
  );
}
export default RealTimeAnalyticsPage;

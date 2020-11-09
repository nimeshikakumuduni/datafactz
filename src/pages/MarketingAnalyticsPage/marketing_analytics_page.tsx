import React from "react";
import useStyles from "./marketing_analytics_page_styles";
import MyAppBar from "../../components/appBar/app_bar";
import Footer from "../../components/footer/footer";
import MarketingpageContent from "../../components/MarketingPageContent/marketing_page_content";

function MarketingAnalyticsPage() {
  const classes = useStyles();
  return (
    <div>
      <MyAppBar />
      <div className={classes.relative}>
        <div className={classes.firstrow}>
          <h1>marketing Analytics</h1>
        </div>

        <div className={classes.scrollOuter}>
          <MarketingpageContent />
          <Footer />
        </div>
      </div>
    </div>
  );
}
export default MarketingAnalyticsPage;

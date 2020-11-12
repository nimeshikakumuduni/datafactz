import React from "react";
import useStyles from "./business_intelligent_page_styles";
import MyAppBar from "../../components/appBar/app_bar";
import Footer from "../../components/footer/footer";
import BusinessIntelligentContent from "../../components/BusinessIntelligentContent/business_intelligent_content";

function BusinessIntelligentPage() {
  const classes = useStyles();
  return (
    <div>
      <MyAppBar />
      <div className={classes.relative}>
        <div className={classes.firstrow}>
        <img className={classes.image2} src="images\Screenshot (73).png"></img>
        </div>

        <div className={classes.scrollOuter}>
          <BusinessIntelligentContent/>
          <Footer />
        </div>
      </div>
    </div>
  );
}
export default BusinessIntelligentPage;

import React from "react";
import useStyles from "./supplychain_analytics_page_styles";
import MyAppBar from "../../components/appBar/app_bar";
import Footer from "../../components/footer/footer";
import SupplychainpageContent from "../../components/SupplyChainPageContent/supplychain_page_content";

function SupplychainAnalyticsPage() {
  const classes = useStyles();
  return (
    <div>
      <MyAppBar />
      <div className={classes.relative}>

        <div className={classes.firstrow}>
           <div>
           <img
              className={classes.img2}
              alt="before"
              src="images\Screenshot (65).png"
              id="beforeimage27895723"
            />
           </div>
          </div>
        </div>

        <div className={classes.scrollOuter}>
          <SupplychainpageContent />
          <Footer />
        </div>
      </div>
  );
}
export default SupplychainAnalyticsPage;
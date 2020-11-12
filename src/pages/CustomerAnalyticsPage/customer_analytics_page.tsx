import React from "react";
import useStyles from "./customer_analytics_page_styles";
import MyAppBar from "../../components/appBar/app_bar";
import Footer from "../../components/footer/footer";
import CustomerAnalyticsPageContent from "../../components/CustomerAnalyticsPageContent/customer_analytics_page_content";

function CustomerAnalyticsPage() {
  const classes = useStyles();
  return (
    <div>
      <MyAppBar />
      <div className={classes.relative}>
        <div className={classes.firstrow}>
          <div className={classes.column2}>
            <div className={classes.imagediv}>
              <img
                className={classes.img2}
                alt="before"
                src="images\cm.png"
                id="beforeimage27895723"
              />
            </div>
          </div>
          <div className={classes.customercontentdiv}>
            <h1 className={classes.customercontent}>
              We assist our clients in identifying the business metrics they
              need in order to achieve a singular view of the customer
              experience. With DataFactZ You CAN attain real-time insights and
              actionable metrics.
            </h1>
          </div>
        </div>

        <div className={classes.scrollOuter}>
          <CustomerAnalyticsPageContent />
          <Footer />
        </div>
      </div>
    </div>
  );
}
export default CustomerAnalyticsPage;

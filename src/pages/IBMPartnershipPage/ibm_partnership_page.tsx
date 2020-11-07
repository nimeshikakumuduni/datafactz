import React from "react";
import useStyles from "./ibm_partnership_page_styles";
import MyAppBar from "../../components/appBar/app_bar";
import Footer from "../../components/footer/footer";
import IBMParnershipContent from "../../components/IBMPartnershipContent/ibm_partnership_content";

function IBMPartnershipPage() {
  const classes = useStyles();
  return (
    <div>
      <MyAppBar />
      <div className={classes.relative}>
        <div className={classes.firstrow}>
          <img src="images\500px-IBM_logo.svg1-200x80.png" className={classes.ibmimage}></img>
          <div className={classes.contentdiv}>
            <h1 className={classes.h1tag}>parnership</h1>
          </div>
          <div className={classes.column2}>
            <div className={classes.imagediv}>
              <img
                className={classes.img2}
                alt="before"
                src="images\sectorsolutions.png"
                id="beforeimage27895723"
              />
            </div>
          </div>
        </div>

        <div className={classes.scrollOuter}>
          <IBMParnershipContent/>
          <Footer />
        </div>
      </div>
    </div>
  );
}
export default IBMPartnershipPage;

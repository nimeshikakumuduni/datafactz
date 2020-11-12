import React from "react";
import useStyles from "./careers_page_styles";
import MyAppBar from "../../components/appBar/app_bar";
import Footer from "../../components/footer/footer";
import CareersPageContent from "../../components/CareersPageContent/careers_page_content";

function CareersPage() {
  const classes = useStyles();
  return (
    <div>
      <MyAppBar />
      <div className={classes.relative}>
        <div className={classes.row}>
          <div style={{ height: "400x", margin: "25px" }}>
            <img
            height={"400px"}
              alt="before"
              src="images\careers-1.png"
              id="beforeimage27895723"
            />
          </div>
          <div className={classes.textdiv}>
          <div className={classes.text1}>datafactz careers</div>
          <div className={classes.text2}>grow in the right direction</div></div>
        </div>
      
        <div className={classes.scrollOuter}>
          <CareersPageContent />
          <Footer />
        </div>
      </div>
    </div>
  );
}
export default CareersPage;
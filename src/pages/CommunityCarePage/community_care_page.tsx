import React from "react";
import useStyles from "./community_care_page_styles";
import MyAppBar from "../../components/appBar/app_bar";
import Footer from "../../components/footer/footer";
import CommunitycarePageContent from "../../components/communitycarepageContent/communtycare_page_content_styles";

function CommunitycarePage() {
  const classes = useStyles();
  return (
    <div>
      <MyAppBar />
      <div className={classes.relative}>
        <div className={classes.row}>
          <div style={{ height: "400x", margin: "20px" }}>
            <img
            height={"400px"}
              alt="before"
              src="images\image1.png"
              id="beforeimage27895723"
            />
          </div>

          <div className={classes.textdiv}>BUILDING COMMUNITY</div>
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

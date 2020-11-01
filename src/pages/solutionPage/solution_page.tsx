import React from "react";
import useStyles from "./solution_page_styles";
import MyAppBar from "../../components/appBar/app_bar";
import Footer from "../../components/footer/footer";
import SolutionpageContent from "../../components/solutionpageContent/solutionpage_content";

function SolutionPage() {
  const classes = useStyles();
  return (
    <div>
      <MyAppBar />
      <div className={classes.relative}>

        <div className={classes.firstrow}>
          <div className={classes.contentdiv}>
            <h1 className={classes.h1tag}>sector solutions</h1>
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
          <SolutionpageContent />
          <Footer />
        </div>
      </div>
    </div>
  );
}
export default SolutionPage;

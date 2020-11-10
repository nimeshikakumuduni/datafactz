import React from "react";
import useStyles from "./big_data_page_styles";
import MyAppBar from "../../components/appBar/app_bar";
import Footer from "../../components/footer/footer";
import BigDataPageContent from "../../components/BigdataContent/big_data_content";

function BigDataPage() {
  const classes = useStyles();
  return (
    <div>
      <MyAppBar />
      <div className={classes.relative}>
        <div className={classes.firstrow}>
        <div className={classes.topicdiv}>
          <h1 className={classes.title}>big data</h1>
          <h1 className={classes.subtitle}>make your data a hero</h1></div>
        </div>

        <div className={classes.scrollOuter}>
          <BigDataPageContent/>
          <Footer />
        </div>
      </div>
    </div>
  );
}
export default BigDataPage;

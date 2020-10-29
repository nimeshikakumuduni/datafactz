import React from "react";
import useStyles from "./contact_page_styles";
import MyAppBar from "../../components/appBar/app_bar";
import { Typography } from "@material-ui/core";
import ContactpageContent from "../../components/contactpageContent/contactpage_content";
import Footer from "../../components/footer/footer";

function ContactPage() {
  const classes = useStyles();
  return (
    <div>
      <MyAppBar />
      <div className={classes.cont1}>
          <img
            className={classes.img2}
            alt="before"
            src="images\contact-banner.jpg"
            id="beforeimage27895723"
          />
        </div>
      <div  className={classes.outer}>
      <ContactpageContent/>
      <div>
        
      </div>
      <Footer/>
      </div>
    </div>
  );
}
export default ContactPage;

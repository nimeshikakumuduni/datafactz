import React from "react";
import useStyles from "./contact_page_styles";
import MyAppBar from "../../components/appBar/app_bar";
import ContactpageContent from "../../components/contactpageContent/contactpage_content";
import Footer from "../../components/footer/footer";

function ContactPage() {
  const classes = useStyles();
  return (
    <div>
      <MyAppBar />
      <div className={classes.relative}>
        <img
          className={classes.img2}
          alt="before"
          src="images\contact-banner.jpg"
          id="beforeimage27895723"
        />
        <div className={classes.scrollOuter}>
          <ContactpageContent />
          <Footer />
        </div>
      </div>
    
    </div>
  );
}
export default ContactPage;

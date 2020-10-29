import { Button, TextField } from "@material-ui/core";
import React from "react";
import useStyles from "./contactpage_content_styles";

function ContactpageContent() {
  const classes = useStyles();

  return (
    <div className={classes.solutions}>
      <div className={classes.cont1}>
        <h3 className={classes.text1}>Fields marked with an * are required</h3>
        <TextField
          className={classes.emailfeild}
          label="your email"
          variant="outlined"
        />
        <p className={classes.require}>This is a required field.</p>
        <textarea className={classes.questionfeild} name="your question" />
        <p className={classes.require}>This is a required field.</p>
        <Button className={classes.btn2}>connect</Button>
        <p className={classes.require}>
          Please correct errors before submitting this form.
        </p>
        <div className={classes.address1}>
          <p className={classes.font_semibold}>Corporate Head Quarters</p>
          <p className={classes.bold}>22260 Haggerty Rd, Northville, MI</p>
          <p className={classes.font_semibold}>hello(at)datafactz.com</p>
        </div>
        <div className={classes.address2}>
          <p className={classes.font_semibold}>INDIA (Offshore)</p>
          <p className={classes.bold}>
            4th Floor, West Wing, PSR Prime Towers adjacent to DLF
          </p>
          <p className={classes.bold}>
            Cyber City, Gachibowli, Village, Serilingampally Mandal, R.R
          </p>
          <p className={classes.font_semibold}>
            District, Telangana State – 500019
          </p>
        </div>
      </div>

      <div className={classes.cont2}>
        <div className={classes.column3}>
          <p className={classes.fontcallaway}>
            Questions? We're just a call away.
          </p>
          <h1 className={classes.h1}>(866) 739-0820</h1>
        </div>
        <Button className={classes.requestbtn}>Request call</Button>
        <div className={classes.iconrow}>
        <img
            className={classes.twitter_logo}
            alt="before"
            src="images\twitter icon3.jpg"
          />
           <img
            className={classes.twitter_logo}
            alt="before"
            src="images\linkedin logo.png"
          />
            <img
            className={classes.twitter_logo}
            alt="before"
            src="images\fb icon1.png"
          />
        </div>
        <div className={classes.address1}>
          <p className={classes.font_semibold}>Toll Free : (866) 739-0820</p>
          <p className={classes.font_semibold}>Phone :     (248) 477-4355</p>
          <p className={classes.font_semibold}>Fax :          (248) 715-6434</p>
        </div>
        <div className={classes.address4}>
          <p className={classes.font_semibold}>California Office</p>
          <p className={classes.bold}>228 Hamilton Avenue, 3rd Floor Palo Alto, CA 94301</p>
          <p className={classes.font_semibold}>Phone : (650) 300-5409</p>
        </div>
      </div>
    </div>
  );
}

export default ContactpageContent;

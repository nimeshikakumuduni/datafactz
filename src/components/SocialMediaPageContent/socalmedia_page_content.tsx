import React from "react";
import SocialMediaBlog from "../SocialMediaBlog/social_media_blog";
import useStyles from "./socialmedia_page_content_styles";

function SocialMediapageContent() {
  const classes = useStyles();

  return (
    <div className={classes.solutions}>
      <div className={classes.cont1}>
          <h1 className={classes.text2}>
            Social media continues to evolve as a powerful networking platform,
            generating massive volumes of data and tremendous opportunities for
            organizations to take their CRM capabilities to a new level. But
            organizations are struggling to effectively tap into these platforms
            to gain a better understanding of their markets, customers and
            competition. Capturing consumer data from social media platforms
            empowers organizations to understand attitudes, opinions and trends,
            and manage their online reputations. At DataFactZ, we help
            organizations build social media analytics strategies that go beyond
            traditional monitoring methods. Our solutions use advanced machine
            learning and natural language processing (NLP) techniques to offer
            customized solutions for various business initiatives.
          </h1>
      </div>

      <div className={classes.cont2}>
        <SocialMediaBlog />
      </div>
    </div>
  );
}

export default SocialMediapageContent;

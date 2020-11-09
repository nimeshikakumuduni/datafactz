import { Button, List, ListItem } from "@material-ui/core";
import React from "react";
import useStyles from "./social_media_blog_styles";

function SocialMediaBlog() {
  const classes = useStyles();

  return (
    <div className={classes.posts}>
      <div className={classes.maincontent2}>
        <div className={classes.imagediv}>
          <img className={classes.image} src="images\Screenshot (70).png"></img>
        </div>
        <div className={classes.content}>
          <h1 className={classes.topic}>monitor</h1>
          <p className={classes.contentfont}>
            Choice modeling is the most accurate process available for
            predicting human decision-making behavior. Choice models predict
            with great precision how customers will react to a particular
            product or service offering. Our analytical experts can design the
            appropriate choice model to accurately predict customer behavior.
            Our approach to choice modeling is custom-tailored to the specific
            objectives of a project because each product has distinct
            characteristics and is received differently in the marketplace. We
            collaborate with businesses to help us understand the thought
            process behind products and services and to build successful choice
            models. Our choice models can help you:
          </p>
          <Button className={classes.btn}>download solution</Button>
        </div>
      </div>

      <div className={classes.maincontent3}>
        <div className={classes.content}>
          <h1 className={classes.topic}>Analyze</h1>
          <p className={classes.contentfont}>
            Our process to analyze social media platforms helps organizations
            take full advantage of social media and gain comprehensive insights
            on their customers. Our ability to build advanced predictive models
            enable the organizations to determine the best course action.
            Through social media analytics, we help organizations:
          </p>
          <List className={classes.list}>
            <ListItem>
              Measure the effectiveness of social media campaigns by analyzing
              follower sentiments.
            </ListItem>
            <ListItem>
              Predict sentiments in social channels and segment customer
              behaviors that will help organizations optimize their campaigns.
            </ListItem>
            <ListItem>
              Build predictive capabilities to understand customer tendencies
              and identify new market segments.
            </ListItem>
            <ListItem>
              Identify trending topics, concepts, hashtags and keywords in real
              time.
            </ListItem>
            <ListItem>
              Understand overall customer attitude through sentiment tagging
              techniques.
            </ListItem>
            <ListItem>
              Perform competitive analyses to maintain a competitive advantage
              by accessing competitors’ posting tendencies and engagement
              strategies.
            </ListItem>
          </List>
          <p className={classes.contentfont}>
            Our approach to social media analytics can guide your organization’s
            marketing strategies to be more precise, agile and responsive to
            customer demands. Targeting specific customer segments with optimal
            marketing campaigns for lead generation helps you provide the best
            possible customer experience.
          </p>
        </div>
        <div className={classes.imagediv}>
          <img className={classes.image2} src="images\speech-bubble.png"></img>
          <img className={classes.image2} src="images\speech-text.png"></img>
        </div>
      </div>

      <div className={classes.maincontent2}>
        <div className={classes.imagediv}>
          <img
            className={classes.image3}
            src="images\social-report-160x213.png"
          ></img>
        </div>
        <div className={classes.content2}>
          <h1 className={classes.topic}>Report</h1>
          <p className={classes.contentfont}>
            We have extensive experience in delivering high class reporting and
            dashboard solutions. We can develop customized reporting platforms
            or integrate with your existing reporting solutions to ensure you
            can keep track of all social media insights derived from your
            analytics strategy. We also design visually appealing dashboards
            such as competitive analysis and sentiment analysis to provide
            summarized results in an easy-to-understand format for business
            users at all levels.
          </p>
          <Button className={classes.btn2}>
            read about data visualizations and dashboarding
          </Button>
        </div>
      </div>

      <div className={classes.maincontent3}>
        <div className={classes.comp1}>
          <img className={classes.ComputerImage} src="images\computer-2.png"></img>
        </div>
        <div className={classes.comp2}>
          <img className={classes.ComputerImage} src="images\computer-2.png"></img>
        </div>
      </div>
    </div>
  );
}
export default SocialMediaBlog;

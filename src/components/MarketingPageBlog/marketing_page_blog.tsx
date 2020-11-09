import { Button, List, ListItem } from "@material-ui/core";
import React from "react";
import useStyles from "./marketing_page_blog_styles";

function MarketingPageBlog() {
  const classes = useStyles();

  return (
    <div className={classes.posts}>
      <div className={classes.maincontent}>
        <img
          className={classes.image}
          src="images\marketing_analytics_icon-01-1024x123@2x.png"
        ></img>
      </div>

      <div className={classes.maincontent2}>
        <div className={classes.title1}>Choice Modeling</div>

        <div className={classes.content}>
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
          <List>
            <ListItem>
              Assess the impact of price and the overall demand for such a
              product/service
            </ListItem>
            <ListItem>
              Determine the combination of features that a product or service
              should offer
            </ListItem>
            <ListItem>
              Determine the most critical features that are must and those that
              are not required
            </ListItem>
            <ListItem>
              Potential competition for the product with similar offerings
            </ListItem>
            <ListItem>
              Improve promotional offers, product messaging and brand strategy
            </ListItem>
          </List>
        </div>
      </div>

      <div className={classes.maincontent3}>
        <div className={classes.title1}>Market Mix Modeling</div>

        <div className={classes.content}>
          <p className={classes.contentfont}>
            Marketing mix modeling (MMM) uses statistical analysis to estimate
            the impact of various marketing tactics on sales and forecast the
            impact of future of tactics. DataFactZ builds effective MMMs
            utilizing advanced statistical techniques for a deep understanding
            of your industry to measure and predict the performance of your
            marketing mix and maximize ROI for marketing investments. Big data
            technologies can also be leveraged to determine the effectiveness of
            spending by channel. This approach statistically relates marketing
            investments to other key performance indicators such as sales and
            external data sources (Economic data, Promotional data, Competitive
            data, Product data. Pricing data etc.). Below is an example of the
            type of simulation that can developed using Market Mix Models for
            business planning and strategy for marketing.
          </p>
          <List>
            <ListItem>
              By using Marketing Mix Modeling, we can help you:
            </ListItem>
            <ListItem>
              Identify the strengths and weaknesses of your marketing programs
            </ListItem>
            <ListItem>
              Determine the right marketing mix for a maximum ROI
            </ListItem>
            <ListItem>
              Simulate and predict the outcomes of investments such as
              traditional media, digital media, social media, promotions, etc.
            </ListItem>
          </List>
        </div>
          <Button className={classes.btn}>Read about big data</Button>
      </div>
    </div>
  );
}
export default MarketingPageBlog;

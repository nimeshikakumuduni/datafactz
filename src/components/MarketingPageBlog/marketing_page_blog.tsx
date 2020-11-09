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
          <List className={classes.list}>
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

      <div className={classes.maincontent}>
        <img
          className={classes.image2}
          src="images\levers_animation_loop.gif"
        ></img>
      </div>

      <div className={classes.maincontent4}>
        <div className={classes.title1}>Product Portfolio Management</div>

        <div className={classes.content}>
          <p className={classes.contentfont}>
            Most businesses offer a range of products, however, a large product
            portfolio presents challenges in terms of deciding how to allocate
            investments across the board. Each product makes a different
            contribution to the organization’s bottom line. Some products may
            come at an expense to produce; others cause an increase or decrease
            in market share. Some contribute to significant revenues, and some
            have greater marketing expenses. How can an organization manage a
            well-balanced product portfolio while growing and gaining market
            share? We can help your organization optimize the product portfolio
            by analyzing consumer behavior to determine how to expand with new
            products and phase out under-performing products. By analyzing and
            understanding product combinations and the strength of these
            relationships, we can help you determine how to upsell and cross
            sell and develop effective promotions through the following process:
          </p>
          <List className={classes.list}>
            <ListItem>
              Build a model representing a set of customer patterns to analyze
              strengths and weaknesses within product portfolio
            </ListItem>
            <ListItem>
              Build decision tree models to identify customer behavior and
              interaction with the product portfolio
            </ListItem>
            <ListItem>
              Create predictive models for sales to identify the strongest
              products that generate higher margins
            </ListItem>
            <ListItem>
              Identify products that can be phased out over time due to cost and
              market share etc.
            </ListItem>
          </List>
          <p className={classes.contentfont}>
            The below diagram illustrates a type of decision tree that we build
            using BigML and other third party tools.
          </p>
        </div>
        <Button className={classes.btn2}>
          discover more about data management
        </Button>
      </div>
      <div className={classes.maincontent}>
        <img className={classes.image3} src="images\Screenshot (67).png"></img>
      </div>
      <div className={classes.maincontent5}>
        <p className={classes.downloadtext}>
          Download Report: Franchise Performance Management in the Era of Big
          Data
        </p>
      </div>

      <div className={classes.maincontent2}>
        <div className={classes.title1}>Brand Equity Management</div>

        <div className={classes.content}>
          <p className={classes.contentfont}>
            Brand equity is one of a company’s most valuable assets.
            Understanding how this value is created, where it is created and the
            relationship between brand value and business value is vital to
            strategic decision making. Brand equity has several dimensions,
            including brand awareness, brand image, and brand association. Using
            the conventional methods, brand equity analysis can be performed
            using customer survey data collected through marketing efforts.
            However, traditional survey data sets do not portray the full brand
            experience, such as product performance and pricing, and survey
            findings cannot be correlated with the overall outcomes and
            financial performance. At DataFactZ, we go beyond these conventional
            methods to establish a complete picture of brand management by
            building predictive statistical models that can correlate
            information from marketing efforts, survey data, brand awareness,
            and sales. Today’s customers are actively engaged with brands on
            social media, providing an opportunity to consistently monitor brand
            awareness, recognition, popularity of products and services and
            more, adding another dimension to measure brand equity. Our
            interdisciplinary approach to brand management coordinates brand
            equity management with customer retention to ensure these efforts
            support each other. Our brand equity management services can help
            you:
          </p>
          <List className={classes.list}>
            <ListItem>
              Determine and measure how much your brand is worth
            </ListItem>
            <ListItem>
              Build a framework to continuously monitor the health of your brand
              over time
            </ListItem>
            <ListItem>
              Measure the effects of changes in brand key performance indicators
              and customer behavior
            </ListItem>
          </List>
        </div>
      </div>
    </div>
  );
}
export default MarketingPageBlog;

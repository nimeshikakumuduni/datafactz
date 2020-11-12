import { Box, List, ListItem } from "@material-ui/core";
import React from "react";
import useStyles from "./customer_analytics_blog_styles";

function CustomerAnalyticsBlog() {
  const classes = useStyles();

  return (
    <div className={classes.posts}>
      <div className={classes.maincontent1}>
        <p>See Our Solution: Calculating Customer Lifetime Value</p>
      </div>

      <div className={classes.maincontent2}>
        <div className={classes.scrolldiv}>
          <h1 className={classes.text1}>Upsell & Cross Sell</h1>
          <h1 className={classes.text2}>
            Imagine the possibilities targeting end users with personalized
            suggestions, or Upsell and Cross Sell Strategies! Predictive models
            are incredibly useful to study customers’ past behavior, correlate
            this information with similar customers, and then identify potential
            service/product opportunities. Let’s design and deploy effective
            analytical models and techniques to maximize Upsell & Cross Sell
            opportunities for your organization!
          </h1>
          <List className={classes.list}>
            <ListItem>
              Design effective Cross selling and Upselling models to reduce
              acquisition costs and increase customer lifetime value.
            </ListItem>
            <ListItem>
              Perform Acquisition Pattern Analysis to identify the logical step
              for the customer in terms of product / service acquisition based
              on the pattern of previous acquisitions and on the pattern of
              other customers.
            </ListItem>
            <ListItem>
              Conduct Collaborative Filtering focuses on making recommendations
              based on the associations between the product recently purchased
              and others offered by the company.
            </ListItem>
            <ListItem>
              Determine products or service offerings along with price
              optimization for individual customers.
            </ListItem>
            <ListItem>
              Build scorecards showcasing the target customer propensity for
              various products/services.
            </ListItem>
          </List>

          <h1 className={classes.text1}>Market Basket</h1>
          <h1 className={classes.text2}>
            With the advent of Big Data & Real time Processing capabilities,
            DataFactZ is able to perform minute by minute advanced Market Basket
            analytics, enabling your organization to intelligently measure,
            monitor and model purchases to uncover insights at a faster rate,
            creating a unique ability to act upon what your shoppers are telling
            you in real-time.
          </h1>
          <List className={classes.list}>
            <ListItem>
              Build a Recommendation Engine that can identify customer buying
              behavior and their relationships.
            </ListItem>
            <ListItem>
              Provide deeper insights to Upsell/Cross Sell Strategies.
            </ListItem>
            <ListItem>
              Enable organizations to effectively design Affinity Marketing
              Programs (Loyalty & Retention).
            </ListItem>
            <ListItem>
              Understand which customers are buying what products and when,
              using real-time store sales modeling
            </ListItem>
            <ListItem>
              Design targeted marketing based on buying patterns and attract
              customers via various channels that are likely to purchase a
              product/service offering that would interest them.
            </ListItem>
          </List>

          <h1 className={classes.text1}>Recommendation Engine</h1>
          <h1 className={classes.text2}>
            At DataFactZ, Our experts can design and build robust Recommendation
            Engines, with advanced machine algorithms which give them the
            ability to predict consumer needs based on previous purchase
            history, online behavior, ratings, reviews and other personalized
            attributes.
          </h1>
          <List className={classes.list}>
            <ListItem>
              Build a recommendation engine with the ability to predict what
              customers want before they do.
            </ListItem>
            <ListItem>Formulate the “next best action” strategies.</ListItem>
            <ListItem>
              Target the customers with the right offers that impeccably timed.
            </ListItem>
            <ListItem>
              Improve overall Customer acquisition and Conversion rate by
              offering the right products
            </ListItem>
            <ListItem>Improved focus on right timing & channels.</ListItem>
            <ListItem>
              Developed advanced machine learning algorithms using each
              interaction and click
            </ListItem>
            <ListItem>
              These algorithms learns more about your customer and delivers the
              most contextually relevant experience in real-time for your online
              applications.
            </ListItem>
            <ListItem>
              Develop Real-Time personalization that combine the speed of
              real-time targeting and personalization with the insights of
              machine learning and predictive analytics.
            </ListItem>
          </List>
        </div>
        <Box width="50px" />
        <div className={classes.col2}>
          <img
            className={classes.image}
            width="75%"
            src="images\Grupo.png"
          ></img>
        </div>
      </div>

      <div className={classes.maincontent3}>
        <div className={classes.col3}>
          <div className={classes.paddign}>
          <h1 className={classes.text3}>Sentiment Analysis</h1>
          <h1 className={classes.text2}>
            At DataFactZ we’ve combined advanced techniques from machine
            learning and artificial intelligence to understand the overall
            sentiment of conversations (positive, negative or neutral)
            leveraging text-mining analytics. These models can analyze any
            source of data whether it is structured or unstructured, through any
            communication channel or CRM System, such as Email, Call Center,
            Social Media, and Surveys etc.
          </h1>
          <List className={classes.list2}>
            <ListItem>
              Discover and measure key topics of conversation, providing
              important insights about your brand from multiple channels such as
              Emails, Social Media, Surveys, etc.
            </ListItem>
            <ListItem>
              Perform analysis on interest affinities by identifying interests
              that drive social action. This new dimension adds a new context to
              your analysis that reveal interesting facts about your business.
            </ListItem>
            <ListItem>
              Benchmark and track the performance of your enterprise social
              media accounts to identify which content is driving the most
              engagement.
            </ListItem>
          </List>
          </div>
        </div>
        <div className={classes.col4}>
          <img
            className={classes.image2}
            src="images\Trazado-Trazado-Trazado-Trazado.png"
          ></img>
        </div>
      </div>
    </div>
  );
}
export default CustomerAnalyticsBlog;

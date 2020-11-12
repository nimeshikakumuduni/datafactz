import {List, ListItem } from "@material-ui/core";
import React from "react";
import useStyles from "./risk_page_blog_styles";

function RiskPageBlog() {
  const classes = useStyles();

  return (
    <div className={classes.posts}>
      <div className={classes.maincontent5}>
        <a className={classes.atext}>
          Discover the Potential of Advanced Analytics in the Banking Industry
        </a>
      </div>
      <div className={classes.maincontentrow}>
          <img
            className={classes.image}
            src="images\Screenshot (69).png"
          ></img>
      </div>

      <div className={classes.maincontent6}>
        <a className={classes.atext}>
          Discover the Potential of Advanced Analytics in the Banking Industry
        </a>
      </div>

      <div className={classes.maincontent2}>

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

   

    </div>
  );
}
export default RiskPageBlog;

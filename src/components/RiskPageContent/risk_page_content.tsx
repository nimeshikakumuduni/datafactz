import React from "react";
import RiskPageBlog from "../RiskPageBlog/risk_page_blog";
import useStyles from "./risk_page_content_styles";

function RiskpageContent() {
  const classes = useStyles();

  return (
    <div className={classes.solutions}>
      <div className={classes.cont1}>
        <div className={classes.para1}>
          <h1 className={classes.text2}>
            Risk intelligence (RQ) uses forward-looking risk concepts and tools
            to make better decisions, alleviate threats, capitalize on
            opportunities and create lasting value for companies. Organizations
            with high risk intelligence tend to make more informed business and
            security decisions than those with low RQ. We are at the forefront
            of helping organizations use advanced analytics for risk management.
            Organizations want to harness data that is locked in silos and a
            variety of external sources. We build advanced analytics systems to
            give organizations clearer visibility into the challenges associated
            with managing many types of risk in key areas such as operations,
            regulatory compliance, supply chain, financial services, e-commerce
            and credit.
          </h1>
        </div>
        <div className={classes.para2}>
          <h1 className={classes.text2}>
            As experts in developing big data-related solutions, we are able to
            combine new sources of unstructured information with state of the
            art advanced modeling techniques and tools to provide insights
            quickly. We have a passion for helping clients produce models with
            significantly higher predictive power. Our approach to building risk
            analytics is pragmatic and helps companies establish a baseline for
            measuring risk throughout the organization. This offers executives
            clarity in identifying, viewing, understanding, and managing risk.
            The illustration below shows different areas of our advanced
            analytical capabilities in the area of risk management.
          </h1>
        </div>
      </div>

      <div className={classes.cont2}>
        <RiskPageBlog />
      </div>
    </div>
  );
}

export default RiskpageContent;

import React from "react";
import BusinessIntelligentBlog from "../BusinessIntelligentBlog/business_intelligent_blog";
import useStyles from "./business_intelligent_content_styles";

function BusinessIntelligentContent() {
  const classes = useStyles();

  return (
    <div className={classes.solutions}>
      <div className={classes.cont1}>
        <p className={classes.para1}>
          At DataFactZ we are passionate about making Business Intelligence
          easy. We have built a successful BI Practice by helping our clients
          align key performance indicators (KPIs) with their strategic goals and
          objectives. Our practice include strategic planning, analysis, design,
          development, implementation, support and training for any BI/DW
          implementation. We have some of the best experts in the industry who
          come with an impressive blend of business and technical knowledge.
          Whether you require new development, enhancements or support, we
          simply become your extended team and deliver a turnkey BI solution. In
          addition, our experts can help assess and analyze organization’s BI
          needs and recommend an appropriate solution that makes the most
          business sense, still balancing cost and delivering ROI for your BI
          investment. DataFactZ’s Business intelligence capabilities are
          classified in two major areas as shown below.
        </p>
      </div>

      <div className={classes.cont2}>
        <BusinessIntelligentBlog />
      </div>
    </div>
  );
}

export default BusinessIntelligentContent;

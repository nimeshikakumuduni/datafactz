import { Button } from "@material-ui/core";
import React from "react";
import useStyles from "./ibm_blog_styles";

function IBMPageBlog() {
  const classes = useStyles();

  return (
    <div className={classes.posts}>
      <div className={classes.maincontent}>
        <div className={classes.title}>DataFactZ for IBM z Systems</div>

        <div className={classes.content}>
          <p className={classes.contentfont}>
            IBM z Systems which is a preferred system of choice for hosting
            mission-critical systems for many financial and other institutions,
            and Apache Spark, the most active open source project in recent
            years are the two key components of the next-generation enterprise
            architecture that combines OLTP and OLAP in a unified data
            environment, thereby enabling advanced analytics to be embedded in
            the transactions flow. IBM z Systems, integrated with intelligent
            interconnected Big Data technologies can prove to be a monster in
            the advanced analytics and computing space.
            <span>
              DataFactZ is proud to be a solutions partner for IBM to provide
              cutting edge business centric solutions, especially with Apache
              Spark.
            </span>
            <span>
              DataFactZ partners with IBM z Systems as the company looks to
              deliver complete real time analytics services to its customers
              globally. These services will initially be uncovered with focus on
              preventing fraud in the financial industry by isolating and
              investigating fraudulent transactions in real time with advanced
              machine learning and streaming technologies.
            </span>
          </p>
        </div>
      </div>
      <hr className={classes.separator} />

      <div className={classes.maincontent}>
        <div className={classes.title}>Solutions</div>

        <div className={classes.content}>
          <p className={classes.contentfont}>
            DataFactZ has built the following solutions on z/OS and is currently
            in the process of building additional solutions in the areas of
            Risk, Anti Money Laundering, Supply chain for Retail and identifying
            fraudulent claims for Insurance domains using z/OS.
          </p>
        </div>
        <img
          className={classes.image2}
          src="images\DataFactZ_IBM_z_Systems_architecture.jpg"
        ></img>
        <div className={classes.btndiv}>
          <div className={classes.col1}>
            <div className={classes.pcontent}>
              <p className={classes.textq}>
                Real Time Fraud Detection using Spark on IBM z Systems
              </p>
              <p>
                Retail banking business is growing rapidly to cater to the needs
                of the 21st century customer. From credit card payments to
                gadget banking through mobile phones and smart watches, the
                avenues of transacting with a financial bank are endless. This
                opens up the case for why Retail Banking is a great place for
                fraudsters to swindle money. Companies are beginning to leverage
                advanced analytics, machine learning and Big Data technologies
                to detect and prevent fraud, and segregate fraudulent activities
                from legitimate ones. Besides, identification of patterns,
                gaining holistic view of their customer base and the ability to
                gather predictive analytics are some of the advantages of using
                the cutting edge technologies like Apache Spark and the like.
              </p>
            </div>

            <Button className={classes.btn}>download solution</Button>
          </div>
          <div className={classes.col2}>
            <div className={classes.pcontent3}>
              <p className={classes.textq}>
                Gaining Customer Insight using Spark on IBM z Systems
              </p>
              <p>
                One of the key factors in running a business successfully is
                making sure the company’s customer base is happy. Gaining
                insights into a customer using different tools and technologies
                can play a pivotal role in providing a business the ability to
                measure the satisfaction levels of its customer base, and
                enables the executives with informed decision making
                capabilities. In this use case, we show how we can use Spark on
                IBM z Systems to generate real time analytics using a variety of
                customer data that a Retail Banking company has at its disposal.
                This includes survey data, social media data, historical and
                real time data generated from transactional systems.
              </p>
            </div>
            <Button className={classes.btn}>download solution</Button>
          </div>
        </div>
      </div>

      <hr className={classes.separator} />

      <div className={classes.maincontent}>
        <div className={classes.title}>DataFactZ for IBM z Systems</div>

        <div className={classes.content}>
          <p className={classes.contentfont}>
            IBM z Systems which is a preferred system of choice for hosting
            mission-critical systems for many financial and other institutions,
            and Apache Spark, the most active open source project in recent
            years are the two key components of the next-generation enterprise
            architecture that combines OLTP and OLAP in a unified data
            environment, thereby enabling advanced analytics to be embedded in
            the transactions flow. IBM z Systems, integrated with intelligent
            interconnected Big Data technologies can prove to be a monster in
            the advanced analytics and computing space. DataFactZ is proud to be
            a solutions partner for IBM to provide cutting edge business centric
            solutions, especially with Apache Spark. DataFactZ partners with IBM
            z Systems as the company looks to deliver complete real time
            analytics services to its customers globally. These services will
            initially be uncovered with focus on preventing fraud in the
            financial industry by isolating and investigating fraudulent
            transactions in real time with advanced machine learning and
            streaming technologies.
          </p>
        </div>
      </div>
      <hr className={classes.separator} />
    </div>
  );
}
export default IBMPageBlog;

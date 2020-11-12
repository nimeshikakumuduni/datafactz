import { List, ListItem } from "@material-ui/core";
import React from "react";
import BigDataBlog from "../BigDataBlog/bigdata_blog";
import useStyles from "./big_data_content_styles";

function BigDataPageContent() {
  const classes = useStyles();

  return (
    <div className={classes.solutions}>
      <div className={classes.cont1}>
        <p>
          As the amount of data continues to skyrocket, organizations using
          traditional technology platforms are not able to easily process it.
          The key to our success is to determine how big data fits into your
          overall business plan. With an effective method for capturing, storing
          and managing underlying data, big data offers a number of benefits to
          organizations:
        </p>
        <List className={classes.list}>
          <ListItem>Integration of structured and unstructured data</ListItem>
          <ListItem>Makes information more transparent</ListItem>
          <ListItem>
            Creates and stores more transactional data in digital form than ever
          </ListItem>
          <ListItem>
            Improve decision-making, minimize risks and unlock valuable
            insights. (risk analytics, market analytics, customer analytics,
            supply chain analytics etc.)
          </ListItem>
          <ListItem>Strategic product and service development</ListItem>
          <ListItem>Leads organizations towards a data-driven model</ListItem>
          <ListItem>Contextual awareness of data in real time</ListItem>
          <ListItem>Real-time website insights</ListItem>
          <ListItem>
            Creates customer value through big data warehousing and reporting
            applications
          </ListItem>
          <ListItem>
            Addresses speed and scalability, mobility and security, flexibility
            and stability
          </ListItem>
        </List>
        <p>
          We are ahead of the curve with big data and can assist organizations
          with their big data initiatives. Our approach has evolved to develop
          the industry’s best practices and techniques. Our overall strategy
          guides organizations through an interdisciplinary approach
          complemented by our advanced analytic solutions that maximize ROI. Our
          services are designed to assist organizations at every step:
        </p>
      </div>

      <div className={classes.cont2}>
        <BigDataBlog />
      </div>
    </div>
  );
}

export default BigDataPageContent;

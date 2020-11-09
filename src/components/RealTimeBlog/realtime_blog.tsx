import { Button, List, ListItem } from "@material-ui/core";
import React from "react";
import useStyles from "./realtime_blog_styles";

function RealtimeaBlog() {
  const classes = useStyles();

  return (
    <div className={classes.posts}>
      <div className={classes.maincontent1}>
        <div className={classes.content}>
          <p className={classes.contentfont}>
            Do you have a way to view and analyze what is going on within your
            business at any given time? Companies like Facebook and Twitter have
            built systems to measure petabytes of real-time data, and we can
            apply those same theories to produce actionable metrics to help you
            make better business decisions. In the modern era of data science,
            we know that billions of devices are already connected to the
            internet, with more connecting each day. With the evolution of the
            Internet of Things (IOT), organizations need to prepare for an
            eruption of data from new sources such as smart meters, sensors and
            wearable medical devices. Real time analytics will leverage these
            devices to deliver insights and automated actions within
            milliseconds of a trigger. There are many technologies that support
            real-time analytics, such as processing in memory (PIM), in-database
            analytics, data warehouse appliances, in-memory analytics and
            massively parallel programming (MPP). This variety of technologies
            and choices creates an upfront challenge for organizations to decide
            which technology
          </p>
        </div>
        <div className={classes.content}>
          <p className={classes.contentfont}>
            should be leveraged to complete each project. At DataFactZ, we have
            built an extensive practice around sophisticated analytics
            solutions. Our team of big data engineers starts by designing a
            scalable real-time architecture that is able to extract insights
            based on information from past to present, within a timeframe as
            short as a few milliseconds. Additionally, the system design will
            scale up seamlessly as volume and variety of data increases. We
            design a real-time analytics system with the following properties
            for your business:
          </p>
          <List className={classes.list}>
            <ListItem>Robustness</ListItem>
            <ListItem>Fault tolerance</ListItem>
            <ListItem>Low-latency reads and updates</ListItem>
            <ListItem>Incremental analytics and learning</ListItem>
            <ListItem>Scalability</ListItem>
          </List>
          <p className={classes.contentfont}>
            Hadoop-like batch processing systems have matured enough to serve as
            an excellent choice for high-throughput system processing and large
            volumes of data. However, in domains where
          </p>
          <Button className={classes.btn}>discover big data</Button>
        </div>

        <div className={classes.content}>
          <p className={classes.contentfont}>
            we need to make faster decisions, Hadoop is not suitable. Real-time
            systems provide low-latency updates, but perform analytics only on
            small batches of data. For better prediction capabilities, we need
            to develop models based on all data which can only be done in batch
            mode. Our solution merges both batch-oriented and real-time
            architectures in a creative way to meet all of your needs. For true
            real-time analytics, data must be processed at the speed equal to or
            faster than the speed at which it arrives. To meet the challenges of
            scalable real-time analytics, stream-oriented data processing
            architectures have evolved. Figure 1 below shows the building blocks
            of a stream-oriented real-time analytics architecture. Streaming
            data may be collected from various sources by using data source
            specific connectors which move and receive data from the source to
            the queuing system. Data is then buffered to be consumed by the
            stream processing engine. The queuing system is a high-throughput,
            low latency system which provides high availability and fail-over
            capabilities.
          </p>
        </div>
      </div>

      <div className={classes.maincontent2}>
        <img className={classes.image2} src="images\image-3.png"></img>
        <h1 className={classes.ImageHeading}>
          Building Blocks of a Real-Time Stream Data Processing Architecture
        </h1>
      </div>

      <div className={classes.maincontent3}>
        <p className={classes.contentstyle}>
          Designing a scalable real-time analytics model is a step-by-step
          process involving multiple tools and technologies. There is no single
          tool that provides a complete solution. One approach to solution
          development is Lambda architecture. This approach takes advantage of
          both batch and stream-processing architecture to provide a balance
          among latency, throughput and fault-tolerance. It uses batch
          processing to provide comprehensive and accurate analytics on entire
          data, while simultaneously using real-time stream processing to
          provide incremental analytics on the continually arriving data. The
          two analytics results are then merged to generate a comprehensive
          overview of insights. Lambda architecture describes a system
          consisting of three layers: Batch layer – for batch processing of all
          data Speed layer – for real-time processing of streaming data Serving
          layer – for responding to queries The below diagram illustrates an
          example of designing a scalable real-time analytics architecture.
        </p>
      </div>

      <div className={classes.maincontent2}>
        <img
          className={classes.image2}
          src="images\real-time-analytics-2.png"
        ></img>
        <h1 className={classes.ImageHeading2}>Lambda Architecture</h1>
      </div>

      <div className={classes.maincontent4}>
        <p className={classes.contentstyle}>
          See Whitepaper – Lambda and Apache Spark
        </p>
      </div>

      <div className={classes.maincontent5}>
        <p className={classes.contentstyle}>
          Designing scalable, real-time analytics systems requires the
          integration of several components. We have described the major
          building blocks of such a system by combining the features of both
          batch processing and stream processing using lambda architecture
          concepts. A scalable, real-time analytics architecture can be realized
          through the integration of the following open source components: 1.
          Apache Flume for data aggregation and transformation 2. Apache Kafka
          as the distributed messaging layer 3. Apache HDFS for batch layer
          incoming data store 4. Apache Spark for batch processing logic 5.
          Elephant DB or Druid for batch layer output store 6. Spark Streaming
          for speed layer 7. Apache Cassandra or Druid for speed layer store 8.
          Druid for serving layer store.
        </p>
      </div>
    </div>
  );
}
export default RealtimeaBlog;

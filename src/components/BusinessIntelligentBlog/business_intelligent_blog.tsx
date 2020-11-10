import { AppBar, List, ListItem, Tab, Tabs } from "@material-ui/core";
import React from "react";
import useStyles from "./business_intelligent_blog_styles";

function BusinessIntelligentBlog() {
  const classes = useStyles();

  return (
    <div className={classes.posts}>
      <div className={classes.maincontent2}>
        <img
          className={classes.image2}
          src="images\business_intelligence1.png"
        ></img>
      </div>

      <div className={classes.maincontent1}>
        <h1 className={classes.ImageHeading}>BI Strategic Services</h1>
        <AppBar color="default" className={classes.appBar}>
          <Tabs>
            <Tab>roadmap & architecture</Tab>
            <Tab>tool evaluation/selection</Tab>
            <Tab>education and training</Tab>
            <Tab>maturity assessment</Tab>
          </Tabs>
        </AppBar>
        <div className={classes.content}>
          <p className={classes.contentfont}>
            Big data offers organizations new ways to utilize data and extend
            their competitive advantage. With a wide range of technologies and
            distributors, many organizations are unsure of how and where to
            start with a big data strategy. Our readiness assessment and
            conceptualization for big data is designed to answer your questions
            and help you identify where you will benefit and what steps to take
            to gain insights and value so you can begin using big data and
            related technologies. Our team can assist you with creating specific
            use cases, business objectives, ROI models and an implementation
            roadmap.
          </p>
        </div>
        <div className={classes.content}>
          <h1 className={classes.ImageHeading3}>Proof of Concept (PoC)</h1>
          <p className={classes.contentfont}>
            Our PoC Pilot program helps your organization put use-case specific
            vendor agnostic big data implementations into place. These pilot
            programs allow you to see big data in action, helping you make
            crucial decisions on rollouts or expansions. We can help you plan
            the entire implementation, build infrastructure plans, help design
            clusters based on needs and provide team training.
          </p>
        </div>

        <div className={classes.content}>
          <h1 className={classes.ImageHeading3}>Tool Evaluation</h1>
          <p className={classes.contentfont}>
            Our extensive experience working with big data technologies have
            resulted in successful implementation of solutions in many
            industries and across many Hadoop distributions such as Apache,
            Cloudera, Hortonworks and MapR.
          </p>
        </div>
      </div>

      <div className={classes.maincontent3}>
        <div className={classes.content}>
          <h1 className={classes.ImageHeading}>Engineering</h1>
          <h1 className={classes.ImageHeading2}>
            Big Data Infrastructure Advisory and Planning
          </h1>
          <p className={classes.contentfont}>
            We collaborate with IT and key business stakeholders to reach
            milestones for implementation. Our infrastructure advisory and
            planning services are based on the following factors: Access: Big
            data centric solutions store business critical data including
            sensitive information about the customer, their financials and
            marketing, that are strictly governed by corporate security and
            compliance policies. It is imperative that these types of businesses
            have access to big data, and the entire activity should be audited
            to satisfy regulatory compliance requirements. We understand these
            policies and incorporate different levels of access and control.
            Capacity: Our systems are designed to handle peta or exabytes and
            can be scaled seamlessly to fit customer needs. “Scale-Out Clustered
            Architecture” has the ability to add capacity in modules or arrays
            transparent to users without taking the system down. Since nodes of
            storage capacity with embedded processing power and connectivity can
            grow seamlessly, this architecture avoids the silos of storage
            utilized by traditional systems. A key advantage for deploying big
            data is to manage large numbers of files in different formats (logs,
            audio, video etc.). Managing these files reduces scalability and
            impacts performance. We take these factors into consideration during
            the planning phase and design an architecture to handle these
            specific situations. By leveraging object-based storage
            architecture,
          </p>
        </div>
        <div className={classes.content}>
          <p className={classes.contentfont}>
            big data storage systems can expand file counts into the billions
            without suffering overhead problems. Object-based storage systems
            can also scale geographically, enabling large infrastructures to be
            spread across multiple locations. To be able to harness the true
            power of distributed computing, it is essential to have the right
            cluster to support it. There are multiple factors to consider in
            order to build the correct organization specific cluster, such as:
          </p>
          <List className={classes.list}>
            <ListItem>Size of data</ListItem>
            <ListItem>Complexity of data</ListItem>
            <ListItem>Complexity of algorithms</ListItem>
            <ListItem>IOPS</ListItem>
            <ListItem>Replication factor</ListItem>
            <ListItem>High availability requirements</ListItem>
          </List>
          <p className={classes.contentfont}>
            Security: Big data can be run in a secure mode by leveraging your
            existing identity management infrastructure such as Active
            Directory, LDAP etc. This approach minimizes cost by eliminating
            third party solutions and uses existing skills to achieve the
            following:
          </p>
          <List className={classes.list}>
            <ListItem>
              Integration with an existing Single Sign On, Active Directory,
              LDAP etc.
            </ListItem>
            <ListItem>
              Establish machine-to-machine communication across modes in the
              cluster.
            </ListItem>
          </List>
          <p className={classes.contentfont}>
            Latency: We make a difference in planning your big data
            infrastructure by understanding your key business goals and revenue
            drivers.
          </p>
        </div>

        <div className={classes.content}>
          <p className={classes.contentfont}>
            We will design a system with ideal performance and reduce the
            latency factor for real-time applications. As an early adopter of
            Apache Spark, we are also a certified systems integrator and
            trainer. We can leverage the in-memory distributing computing
            capabilities of Spark for real-time streaming and analytics. This is
            exactly why we utilize a “Scale –Out Architecture,” so we can
            quickly enable the cluster of storage nodes to increase processing
            power. Cost: We understand the dynamics around controlling cost from
            start to finish. Our approach starts by defining the case, and then
            developing a plan to execute the project in a POC mode. This can be
            achieved in a variety of ways: Utilizing unused hardware to form a
            cluster for the POC Utilizing the open source software for the POC
            without having to invest in a specific big data distribution
            Developing the project to realize the business value from big data
            We start with a “Proof of Technology,” to evaluate various big data
            distributions based on goals, vision and cost considerations.
            Depending on specific big data technology or tools, we design a
            “Scale-Out Architecture” model without using an expensive hardware
            configuration upfront. Finally, we design a training strategy for
            organizations based on existing internal IT teams for skills
            adoption.
          </p>
        </div>
      </div>

      <div className={classes.maincontent2}>
        <img className={classes.image2} src="images\big-data-11.png"></img>
      </div>

      <div className={classes.maincontent3}>
        <div className={classes.content}>
          <h1 className={classes.ImageHeading2}>Data Engineering</h1>
          <p className={classes.contentfont}>
            Data Ingestion & Streaming: We know the challenges that exist in
            order to load data into a cluster for analysis. It comes from
            multiple sources and in a number of forms – including structured and
            unstructured data. Big data overcomes these challenges through
            quicker data analysis compared to conventional RDBMS systems, and
            has the power to analyze data that these systems cannot. Most
            importantly, it easily integrates with real-time streaming sources.
            We have extensive experience with these data loading projects and
            have developed a list of best practices: 1. Identify required data
            points 2. Identify data sources and the right drivers 3. Data source
            connectivity 4. Configure and set up the right tools (Ex: Sqoop,
            Flume, Kafka, Storm) to use the identified data sources
          </p>
        </div>
        <div className={classes.content}>
          <p className={classes.contentfont}>
            5. Develop scripts for the tools for automated data loading 6.
            Manage work flow for the data loads 7. Schedule and monitoring data
            load jobs 8. Performa data quality checks We will customize this
            experience to your requirements and utilize various big data related
            tools, such as Sqoop, Flume, Kafka, and integrate ETL tools
            (Informatica, Pentaho, Talend) for the data loading process. Data
            Processing: Several techniques exist to process big data, including
            batch-oriented (most common) and in-stream processing. As big data
            technologies have evolved, it is necessary to use real-time query
            processing and in-stream processing for many business applications.
            We have a deep understanding of data processing and
          </p>
        </div>

        <div className={classes.content}>
          <p className={classes.contentfont}>
            developed a hybrid architecture to can effectively process data in
            batch mode and in real time (Spark, Storm). This phase involves the
            implementation and development of algorithms and scripts. Efficient
            programs (MapReduce, customized Hive and Pig Latin scripts that can
            crunch data either for further analysis, Custom User Defined
            Functions (UDFs) and reusable scripts will be developed. We have a
            team of certified developers that are proficient in various
            object-oriented programming languages and have years of experience
            writing efficient code. We have success not only in developing these
            programs and scripts, but also in performance enhancement. We
            schedule and monitor jobs and collect statistics to help us gain a
            better insight for potential areas of improvement. The diagram below
            illustrates a high level big architecture of our typical
            implementation:
          </p>
        </div>
      </div>

      <div className={classes.maincontent4}>
        <img className={classes.image3} src="images\31.png"></img>
        <img className={classes.image} src="images\big_data-1-29x50.png"></img>
        <img className={classes.image3} src="images\32-1024x180.png"></img>
        <img className={classes.image4} src="images\big_data-4-10x50.png"></img>
        <img className={classes.image3} src="images\33.png"></img>
      </div>

      <div className={classes.maincontent5}>
        <p className={classes.contentstyle2}>
          DATA WAREHOUSING Exploiting Full Potential of Advanced Analytics in
          the Banking Industry
        </p>
      </div>

      <div className={classes.maincontent6}>
        <h1 className={classes.ImageHeading}>Data Science</h1>
        <p className={classes.contentstyle}>
          We are an elite group of data engineers, scientists and problem
          solvers who share a passion for solving complex problems and finding
          valuable insights. This passion enables our team to collaborate and
          deliver high-quality solutions to our clients. We have been in
          business for more than a decade, working with hundreds of clients in
          multiple industries. Our goal is to provide our clients with solutions
          that solve specific problems or increase overall ROI. Our focus is on
          using the right tools and techniques to deliver value to your
          business. Our customers are able to explore, predict and learn from
          their data.
        </p>
      </div>

      <div className={classes.maincontent2}>
        <img className={classes.image2} src="images\big_data_icon.gif"></img>
      </div>

      <div className={classes.maincontent6}>
        <p className={classes.contentstyle3}>Technologies we use</p>
      </div>

      <div className={classes.maincontent7}>
        <h1 className={classes.heading1}>Value Accelerators</h1>
        <h1 className={classes.heading2}>
          Spark Value Accelerator – Spark Framework for Real-time Dashboards
        </h1>

        <div className={classes.maincontent8}>
          <div className={classes.content}>
            <p className={classes.contentfont}>
              As early adopters of Apache Spark, we also invested in advanced
              research around the program. We are developing a cognitive
              framework using Spark and Lamba Architecture. Organizations today
              are broadly adopting predictive analytics and building models
              ranging into the thousands. The ratio of models being utilized
              offline versus real-time is approximately 50 percent, and
              increasing rapidly. There are forecasts that soon, two-thirds of
              all predictive models will cater to real-time decision making such
              as fraudulent prevention, etc. This makes it increasingly more
              important to develop an architecture
            </p>
          </div>
          <div className={classes.content}>
            <p className={classes.contentfont}>
              that can bring predictive analysis to the decision makers Spark
              offers standardized access to data across the organization and
              implements a repeatable industrial-scale process for production,
              but the program is missing a component to visually represent model
              predictions. The third party apps that leverage Spark’s model of
              data processing introduce latency into the system. To overcome
              this, we designed a framework that seamlessly integrates with
              Spark. The framework leverages the reactive platform offered by
              Type Safe, the company behind
            </p>
          </div>

          <div className={classes.content}>
            <p className={classes.contentfont}>
              the popular Scala programming language and utilizes Activator and
              Play frameworks. Type safe Activator and Play frameworks, which
              are Scala-compliant, work effortlessly with Spark’s processing
              framework. The front-end visual architecture is plug-and-play.
              When used in conjunction with the most popular visualizations
              frameworks ranging from angular.js to D3, it increases the library
              of advanced visualizations. The whole framework exploits akka
              message-driven runtime and is entirely distributed and resilient
              with scalability across the entire stack.
            </p>
          </div>
        </div>
        <img className={classes.image5} src="images\Screenshot (72).png"></img>
      </div>
    </div>
  );
}
export default BusinessIntelligentBlog;

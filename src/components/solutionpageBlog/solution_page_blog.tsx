import { Button } from "@material-ui/core";
import React from "react";
import useStyles from "./solution_page_blog_styles";

function SolutionPageBlog() {
  const classes = useStyles();

  return (
    <div className={classes.posts}>
      <div className={classes.maincontent}>
        <div className={classes.title}>retail solutions</div>

        <div className={classes.content}>
          <p className={classes.contentfont}>
            With a large number of tools and vast experience, we can build
            predictive models and frameworks for your organization to assess
            complex situations clearly, such as calculating Customer Lifetime
            Value, and effective performance management systems that can
            leverage the growing and diverse data streams for retailers
            struggling to remain competitive.
          </p>
        </div>
        <img className={classes.image} src="images\Retail-solution.jpg"></img>
        <div className={classes.btndiv}>
          <div className={classes.col1}>
            <div className={classes.pcontent}>
              <p className={classes.textq}>
                Calculating Customer Lifetime Value using Recency, Frequency and
                Monetary Value with a Markov Chain Model
              </p>
            </div>

            <Button className={classes.btn}>download solution</Button>
          </div>
          <div className={classes.col2}>
            <div className={classes.pcontent2}>
              <p className={classes.textq}>
                Franchise Performance Management in the Era of Big Data
              </p>
            </div>
            <Button className={classes.btn}>download solution</Button>
          </div>
        </div>
      </div>
      <hr className={classes.separator} />

      <div className={classes.maincontent}>
        <div className={classes.title}>Automotive</div>

        <div className={classes.content}>
          <p className={classes.contentfont}>
            Cost pressures, globalization, market shifts, and volatility are
            some of the many challenges faced by automakers. Yet, advances in
            big data and analytics offer incredible possibilities in tackling
            these and many other challenges. Our unmatched team of specialists
            offer some example solutions to demonstrate the possibilities
            analytics offers your organization. More than informing extremely
            complex business decisions, very specific areas of the automotive
            industry now depend on big data and analytics to advance their
            technologies.
          </p>
        </div>
        <img className={classes.image2} src="images\automotive.png"></img>
        <div className={classes.btndiv}>
          <div className={classes.col1}>
            <div className={classes.pcontent}>
              <p className={classes.textq}>
                Lane Keeping in TRANSIMS (Transportation Analysis and SIMulation
                System)
              </p>
            </div>

            <Button className={classes.btn}>download solution</Button>
          </div>
          <div className={classes.col2}>
            <div className={classes.pcontent3}>
              <p className={classes.textq}>
                Detection of Driver Distraction from Driver Input and Vehicle
                State Data
              </p>
            </div>
            <Button className={classes.btn}>download solution</Button>
          </div>
        </div>
      </div>

      <hr className={classes.separator} />

      <div className={classes.maincontent}>
        <div className={classes.title}>Manufacturing</div>

        <div className={classes.content}>
          <p className={classes.contentfont}>
            Manufacturers are facing the cost of record-breaking warranty
            claims, and the ever shifting landscape of globalization affecting
            most facets of their process. By working proactively to unlock the
            potential savings from operational efficiencies, great ROI can be
            achieved in short implementation periods. Our solutions are
            process-centric and technology-agnostic, allowing organizations to
            leverage existing investments in transactional systems.
          </p>
        </div>
        <img className={classes.image3} src="images\manufacturing.png"></img>
        <div className={classes.btndiv}>
          <div className={classes.col1}>
            <div className={classes.pcontent}>
              <p className={classes.textq}>
                Unlocking Value through Effective Warranty Management Practices
                in the Era of Big Data
              </p>
            </div>
            <Button className={classes.btn}>download solution</Button>
          </div>
          <div className={classes.col2}></div>
        </div>
      </div>
      <hr className={classes.separator} />

      <div className={classes.maincontent}>
        <div className={classes.title}>Healthcare</div>

        <div className={classes.content}>
          <p className={classes.contentfont}>
            With overall healthcare expenditures spiralling out of control and
            unprecedented ER gridlock, operations research and operations
            management techniques aided by big data science can cost-effectively
            enhance ED operations. With strategies developed by DataFactZ, data
            can now be utilized in real-time to to intelligently guide the ED
            operations starting from new patient arrival to final discharge.
          </p>
        </div>
        <img className={classes.image3} src="images\healthcare.png"></img>
        <div className={classes.btndiv}>
          <div className={classes.col1}>
            <div className={classes.pcontent}>
              <p className={classes.textq}>
                Breaking the Gridlock in Emergency Care
              </p>
            </div>

            <Button className={classes.btn}>download solution</Button>
          </div>
          <div className={classes.col2}></div>
        </div>
      </div>
      <hr className={classes.separator} />

      <div className={classes.maincontent}>
        <div className={classes.title}>Insurance</div>

        <div className={classes.content}>
          <p className={classes.contentfont}>
            Data and analytics is nothing new in the insurance industry and it
            has been critically important to an insurer’s continued existence
            and profitability. Historically, an insurance carrier achieved
            differentiation mainly by combining scale of exposures and
            underwriting expertise. But now, there are newer and more effective
            ways driven by new sources of external data, new tools for
            underwriting risk, and new ways of monitoring and influencing
            consumer behavior. With Advanced Analytics provided by DataFactZ,
            these newer sources of data can enable insurers to better understand
            different types of risks which in allows the premiums to be
            personalized to individual consumers or segments.
          </p>
        </div>
        <div className={classes.btndiv}>
          <div className={classes.col1}>
            <div className={classes.pcontent}>
              <p className={classes.textq}>
                Achieving Competitive Differentiation in Insurance by Advanced
                Analytics
              </p>
            </div>

            <Button className={classes.btn}>download solution</Button>
          </div>
          <div className={classes.col2}></div>
        </div>
      </div>
      <hr className={classes.separator} />

      <div className={classes.maincontent}>
        <div className={classes.title}>Banking</div>

        <div className={classes.content}>
          <p className={classes.contentfont}>
            In the last several decades IT systems revolutionized banking and
            transformed virtually every single banking process. With today’s
            technology and analytics capabilities, banking has the opportunity
            to reinvent itself yet again, this time by improving decision making
            at all levels. With the real possibility of having a 360 degree view
            of the customer, and the maturity of real-time advanced analytics
            methods, we can work with your organization’s big data initiatives
            that will define its competitive advantage.
          </p>
        </div>
        <div className={classes.btndiv}>
          <div className={classes.col1}>
            <div className={classes.pcontent}>
              <p className={classes.textq}>
                Exploiting Full Potential of Advanced Analytics in the Banking
                Industry
              </p>
            </div>

            <Button className={classes.btn}>download solution</Button>
          </div>
          <div className={classes.col2}></div>
        </div>
      </div>
      <hr className={classes.separator} />

      <div className={classes.maincontent}>
        <div className={classes.title}>Energy & Utility</div>

        <div className={classes.content}>
          <p className={classes.contentfont}>
            Reliability, stability and customer satisfaction are top three of
            many issues that energy and utility industries now face. The revenue
            lost either in meeting these standards or not meeting the minimum
            requirements is unimaginably high. Our expertise with data and SME’s
            in energy and utility industry have demonstrated the use of Big Data
            & Analytics to develop several solutions around this industry.  
          </p>
        </div>
        <img className={classes.image2} src="images\Energy_Analytics.jpg"></img>
        <div className={classes.btndiv}>
          <div className={classes.col1}>
            <div className={classes.pcontent}>
              <p className={classes.textq}>
              Improving Outage restoration efficiency using Advanced Analytics
              </p>
            </div>

            <Button className={classes.btn}>download solution</Button>
          </div>
          <div className={classes.col2}>
            <div className={classes.pcontent3}>
              <p className={classes.textq}>
              Enhance Customer experience using Big data & Analytics
              </p>
            </div>
            <Button className={classes.btn}>download solution</Button>
          </div>
        </div>
      </div>
      <hr className={classes.separator} />
    </div>
  );
}
export default SolutionPageBlog;

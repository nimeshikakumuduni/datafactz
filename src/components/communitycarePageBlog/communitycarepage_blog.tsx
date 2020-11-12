import React from "react";
import useStyles from "./commiunitycarepage_blog_styles";

function CommunitycarePageBlog() {
  const classes = useStyles();

  return (
    <div className={classes.posts}>
      <div className={classes.maincontent}>
        <div className={classes.title}>
          DataFactZ Partners With Wayne State Big Data & Business Analytics
          Group
        </div>

        <div className={classes.content}>
          <p className={classes.contentfont}>
            In 2015, we began a partnership with the Wayne State University
            College of Engineering’s Big Data and Business Analytics Group,
            providing a seed research grant to the organization. The grant will
            fund a Ph.D. student and support other Wayne State data scientists’
            theoretical research.
          </p>
        </div>
        <img
          className={classes.image2}
          src="images\community-2-218x79.png"
        ></img>
      </div>
      <hr className={classes.separator} />

      <div className={classes.maincontent}>
        <div className={classes.title}>Ennis Center Toy Drive</div>

        <div className={classes.content}>
          <p className={classes.contentfont}>
            Each year, we support a number of community organizations that
            provide vital services such as natural disaster relief, public
            safety and education each year in an effort to build on our region’s
            diverse, successful community. During the holiday season, our
            employees contribute new toys to the Ennis Center for Children, a
            non-profit organization that works with abused and neglected
            children throughout Southeast Michigan.
          </p>
        </div>
        <img
          className={classes.image2}
          src="images\community-3-304x140.png"
        ></img>
      </div>
      <hr className={classes.separator} />

      <div className={classes.maincontent}>
        <div className={classes.title}>
          DataFactZ And Michigan Spark Users Group
        </div>

        <div className={classes.content}>
          <p className={classes.contentfont}>
            As one of the organizers, we work closely with the Michigan Spark
            Users Group to bring together individuals interested in the
            development and use of the Apache Spark platform.
          </p>
        </div>
        <img
          className={classes.image2}
          src="images\community-4-260x136.png"
        ></img>
      </div>
      <hr className={classes.separator} />
    </div>
  );
}
export default CommunitycarePageBlog;

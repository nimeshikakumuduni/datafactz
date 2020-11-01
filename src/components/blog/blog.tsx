import React from "react";
import useStyles from "./blog_styles";

function Blog() {
  const classes = useStyles();

  return (
    <div className={classes.posts}>
      <div className={classes.maincontent}>
        <div className={classes.title}>From Our Blog</div>

        <div className={classes.subtitle}>
          <a
            href="https://datafactz.com/staying-positive/"
            className={classes.subtitlefont}
          >
            Staying Positive
          </a>
        </div>
        <div className={classes.content}>
          <p className={classes.contentfont}>
            How can you stay positive AND productive during such global sudden
            uncertainty? This pandemic outbreak continues to take a toll all
            over the world, affecting our health, jobs, family, and global
            markets, triggering a wave of human and economic suffering, unlike
            anything that’s been experienced before. We need to take these
            moments as an opportunity…
          </p>
        </div>
        <div className={classes.readmore}>
          <a
            href="https://datafactz.com/staying-positive/"
            className={classes.readmorefont}
          >
            Read More
          </a>
        </div>
        <hr className={classes.separator} />

        <div className={classes.subtitle}>
          <a
            href="https://datafactz.com/2019-year-in-review/"
            className={classes.subtitlefont}
          >
            2019 Year in Review
          </a>
        </div>
        <div className={classes.content}>
          <p className={classes.contentfont}>
            DataFactZ had another strong year of growth, which is a tribute to
            our employees and our partners. We expanded base business with
            existing clients and on-boarded two dozen new clients. Our approach
            is always focused first on delivery excellence, then evolve that
            into becoming a strategic Partner for our clients.&nbsp; This is
            ultimately our objective…
          </p>
        </div>
        <div className={classes.readmore}>
          <a
            href="https://datafactz.com/2019-year-in-review/"
            className={classes.readmorefont}
          >
            Read More
          </a>
        </div>
        <hr className={classes.separator} />

        <div className={classes.subtitle}>
          <a
            href="https://datafactz.com/2018-year-in-review/"
            className={classes.subtitlefont}
          >
            2018 Year in Review
          </a>
        </div>
        <div className={classes.content}>
          <p className={classes.contentfont}>
            &nbsp; As we celebrate the end of 2018, we are proud of the many
            successes that happened throughout the year. It’s been an incredible
            journey and we are looking forward to raising the bar once again in
            2019. The growth and expansion of our organization is the result of
            the commitment of DataFactz’s team to…
          </p>
        </div>
        <div className={classes.readmore}>
          <a
            href="https://datafactz.com/2018-year-in-review/"
            className={classes.readmorefont}
          >
            Read More
          </a>
        </div>
        <hr className={classes.separator} />
      </div>
    </div>
  );
}
export default Blog;

import { Button } from "@material-ui/core";
import React from "react";
import useStyles from "./leatest_events_styles";

function LeatestEvents() {
  const classes = useStyles();

  return (
    <div className={classes.solutions}>
      <div className={classes.title}>Latest Events</div>

      <Button className={classes.button} variant="contained">
        FIND OUT MORE
      </Button>
      <div className={classes.topicdiv}>
        <a href="/solutions" className={classes.subtitle}>
          Join us at Data for Breakfast, Stay for Zero to Snowflake
        </a>
      </div>
      <div className={classes.content}>
        <p>
          Join us on March 13, 2019 at Data for Breakfast tour in Detroit to see
          how you can enable your organization to be data-driven. You’ll leave
          with a playbook to: Escape the constraints of legacy technology.
          Deliver insight from all your data to all your business users. Create
          your own data sharing economy. Once…
        </p>
      </div>
    </div>
  );
}

export default LeatestEvents;

import React from "react";
import useStyles from "./capabilities_styles";

function Capabilities() {
  const classes = useStyles();
  return (
    <div className={classes.capabilitycolumn}>
      <a href="/big-data" className={classes.img_one}>
        <img
          alt="big data"
          src="https://datafactz.com/wp-content/themes/datafactz/dist/images/big-data.png"
        />
      </a>
      <a href="/data-visualization" className={classes.img_two}>
        <img
          alt="data visualization"
          src="https://datafactz.com/wp-content/themes/datafactz/dist/images/data-visualization.png"
        />
      </a>
      <a href="/data-management" className={classes.img_three}>
        <img
          alt="data management"
          src="https://datafactz.com/wp-content/themes/datafactz/dist/images/data-management.png"
        />
      </a>
      <a href="/business-intelligence" className={classes.img_four}>
        <img
          alt="business intelligence"
          src="https://datafactz.com/wp-content/themes/datafactz/dist/images/business-intelligence.png"
        />
      </a>
      <a href="/data-warehousing" className={classes.img_five}>
        <img
          alt="data warehousing"
          src="https://datafactz.com/wp-content/themes/datafactz/dist/images/data-warehousing.png"
        />
      </a>
      <a href="#" className={classes.img_six}>
        <img
          alt="DataFactZ"
          src="https://datafactz.com/wp-content/themes/datafactz/dist/images/logo-circle.png"
        />
      </a>
      <img
        alt="linking lines"
        src="https://datafactz.com/wp-content/themes/datafactz/dist/images/linking-lines.png"
        className={classes.background}
      />
      <h3 className={classes.heading}>Capabilities</h3>
    </div>
  );
}

export default Capabilities;

import React from "react";
import useStyles from "./sector_styles";

function Sector() {
  const classes = useStyles();

  return (
    <div className={classes.div1}>
      <a href="/solutions">
        <img
          alt="discover the z factor for your sector"
          src="https://datafactz.com/wp-content/themes/datafactz/dist/images/lightbulb_on.png"
          className={classes.img}
        />
      </a>
    </div>
  );
}

export default Sector;

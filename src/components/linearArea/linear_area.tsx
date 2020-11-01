import React from "react";
import useStyles from "./linear_area_styles";

function LinearArea() {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <div className={classes.imgouter}>
        <div className={classes.image}>
          <img
            src="https://datafactz.com/wp-content/themes/datafactz/dist/images/amazon.png"
            alt="amazon"
          />
        </div>
        <div className={classes.image}>
          <img
            src="https://datafactz.com/wp-content/themes/datafactz/dist/images/AAA.png"
            alt="AAA"
          />
        </div>
        <div className={classes.image}>
          <img
            src="https://datafactz.com/wp-content/themes/datafactz/dist/images/centene.png"
            alt="centene"
          />
        </div>
        <div className={classes.image}>
          <img
            src="https://datafactz.com/wp-content/themes/datafactz/dist/images/pacific-life.png"
            alt="pacific-life"
          />
        </div>
        <div className={classes.image}>
          <img
            src="https://datafactz.com/wp-content/themes/datafactz/dist/images/pch.png"
            alt="pch"
          />
        </div>
      </div>
    </div>
  );
}

export default LinearArea;

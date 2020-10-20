
import React from "react";
import useStyles from "./linear_area_styles";

function LinearArea() {
  const classes = useStyles();

  return (
    <div className={classes.container}>
    <div id="myCarousel" className={classes.slide}>
      <div className={classes.inner}>
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

        <div className={classes.imgouter}>
          <div className={classes.image}>
            <img
              src="https://datafactz.com/wp-content/themes/datafactz/dist/images/meijer.png"
              alt="meijer"
            />
          </div>
          <div className={classes.image}>
            <img
              src="https://datafactz.com/wp-content/themes/datafactz/dist/images/sears.png"
              alt="sears"
            />
          </div>
          <div className={classes.image}>
            <img
              src="https://datafactz.com/wp-content/themes/datafactz/dist/images/cable-vision.png"
              alt="cable-vision"
            />
          </div>
          <div className={classes.image}>
            <img
              src="https://datafactz.com/wp-content/themes/datafactz/dist/images/maximus.png"
              alt="maximus"
            />
          </div>
          <div className={classes.image}>
            <img
              src="https://datafactz.com/wp-content/themes/datafactz/dist/images/cheesecake-factory.png"
              alt="cheesecake-factory"
            />
          </div>
        </div>


        <div className={classes.imgouter}>
          <div className={classes.image}>
            <img
              src="https://datafactz.com/wp-content/themes/datafactz/dist/images/image11.png"
              alt="rockspace"
            />
          </div>
          <div className={classes.image}>
            <img
              src="https://datafactz.com/wp-content/themes/datafactz/dist/images/pch.png"
              alt="pch"
            />
          </div>
          <div className={classes.image}>
            <img
              src="https://datafactz.com/wp-content/themes/datafactz/dist/images/starbucks.png"
              alt="starbucks"
            />
          </div>
          <div className={classes.image}>
            <img
              src="https://datafactz.com/wp-content/themes/datafactz/dist/images/coca-cola.png"
              alt="coca-cola"
            />
          </div>
          <div className={classes.image}>
            <img
              src="https://datafactz.com/wp-content/themes/datafactz/dist/images/gap.png"
              alt="gap"
            />
          </div>
        </div>

        <div className={classes.imgouter}>
        <div className={classes.image}>
            <img
              src="https://datafactz.com/wp-content/themes/datafactz/dist/images/starbucks.png"
              alt="starbucks"
            />
          </div>
          <div className={classes.image}>
            <img
              src="https://datafactz.com/wp-content/themes/datafactz/dist/images/coca-cola.png"
              alt="coca-cola"
            />
          </div>
          <div className={classes.image}>
            <img
              src="https://datafactz.com/wp-content/themes/datafactz/dist/images/image11.png"
              alt="rockspace"
            />
          </div>
          <div className={classes.image}>
            <img
              src="https://datafactz.com/wp-content/themes/datafactz/dist/images/pch.png"
              alt="pch"
            />
          </div>
          <div className={classes.image}>
            <img
              src="https://datafactz.com/wp-content/themes/datafactz/dist/images/starbucks.png"
              alt="starbucks"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
  );
}

export default LinearArea;

import ParticlesBg from "particles-bg";
import React from "react";
import useStyles from "./contact_page_styles";
export default function NameCard() {
  const classes = useStyles();
  return (
    <div className={classes.nameRowWidth}>
      <div className={classes.text2}>
        DataFactz.com
      </div>
    </div>
  );
}

import React from "react";
import classes from "../../CSS/PopularClasses.module.css";

function Card({ image, time, title, description }) {
  return (
    <div className={classes.card}>
      <img src={image} alt={title} className={classes.cardimage} />
      <div className={classes.cardtime}>{time}</div>
      <h3 className={classes.cardtitle}>{title}</h3>
      <p className={classes.carddescription}>{description}</p>
    </div>
  );
}

export default Card;

/* hi */
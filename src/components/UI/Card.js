import React from 'react';
import classes from'../../CSS/Cards.module.css'; 

function Card({ image, time, title, description }) {
  return (
    <div className={classes.card}>
      <img src={image} alt={title} className="cardimage" />
      <div className="cardtime">{time}</div>
      <h3 className="cardtitle">{title}</h3>
      <p className="carddescription">{description}</p>
    </div>
  );
}


export default Card;



import React from 'react';
import classes from '../../CSS';

function TrainerCard({ image, name, description }) {
  return (
    <div className="trainer-card">
      <img src={image} alt={name} className={classes.trainer-image} />
      <div className="trainer-content">
        <h3 className="trainer-name">{name}</h3>
        <p className="trainer-description">{description}</p>
      </div>
    </div>
  );
}

export default TrainerCard;

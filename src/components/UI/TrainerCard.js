import React from 'react';
import classes from '../../CSS/Trainer.module.css';
import image from '../../assets/images/gymboy3.jpg';

function TrainerCard() {
  return (
    <div className={classes.trainercard}>
      <img src={image} alt="Trainer" className={classes.trainerimage} />
      <div className={classes.trainercontent}>
        <h3 className={classes.trainername}>John Doe</h3>
        <p className={classes.trainerdescription}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</p>
      </div>
    </div>
  );
}

export default TrainerCard;

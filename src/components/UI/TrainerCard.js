import classes from '../../CSS/Trainer.module.css';

function TrainerCard({image}) {
  return (
    <div className={classes.trainercard}>
      <img src={image} alt="Trainer" className={classes.trainerimage} />
      <div className={classes.trainercontent}>
        <h3 className={classes.trainername}>John Doe</h3>
        <p className={classes.trainerdescription}>
          "I started my fitness journey at this gym 5 years ago, struggling with basic exercises.
           Thanks to the dedicated trainers here, I transformed my physique and became so passionate about fitness that 
           I decided to become a trainer myself.
           Now I'm helping others achieve their fitness goals! With certifications in nutrition and personal training,
           I specialize in strength training and weight loss programs. My approach combines high-intensity workouts with proper form and technique. 
           I've helped over 100 clients achieve their dream bodies, and I'm particularly proud of my specialized programs for beginners who, like me, are just starting their fitness journey.
           Whether your goal is building muscle, losing weight, or improving overall fitness, I'm here to guide you every step of the way."
        </p>
      </div>
    </div>
  );
}

export default TrainerCard;

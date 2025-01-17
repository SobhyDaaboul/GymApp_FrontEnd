import styles from '../../CSS/MovingText.module.css';

function MovingText (){
  return (
    <div className={styles.movingTextContainer}>
      <div className={styles.movingText}>
        Welcome to our gym! We are open from Monday till Saturday
      </div>
    </div>
  );
};

export default MovingText; 
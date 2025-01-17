import styles from '../../CSS/FeaturedPrograms.module.css';

function FeaturedPrograms(){
  return (
    <section className={styles.programsSection}>
      <div className={styles.programsGrid}>
        <div className={styles.programCard}>
          <div className={styles.icon}>💪</div>
          <h3 className={styles.title}>Personal Training</h3>
          <p className={styles.description}>
            Get personalized workout plans and one-on-one guidance from our expert trainers.
          </p>
          <button className={styles.button}>Learn More</button>
        </div>

        <div className={styles.programCard}>
          <div className={styles.icon}>👥</div>
          <h3 className={styles.title}>Group Classes</h3>
          <p className={styles.description}>
            Join our energetic group sessions including HIIT, Yoga, and Strength Training.
          </p>
          <button className={styles.button}>View Schedule</button>
        </div>

        <div className={styles.programCard}>
          <div className={styles.icon}>🎯</div>
          <h3 className={styles.title}>Specialized Programs</h3>
          <p className={styles.description}>
            Target specific goals with our specialized fitness and nutrition programs.
          </p>
          <button className={styles.button}>Explore</button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedPrograms; 
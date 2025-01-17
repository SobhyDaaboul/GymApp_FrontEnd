import styles from '../../CSS/FeaturedPrograms.module.css';

function FeaturedPrograms(){
  const programs = [
    {
      icon: '💪',
      title: 'Personal Training',
      description: 'Get personalized workout plans and one-on-one guidance from our expert trainers.',
      buttonText: 'Learn More'
    },
    {
      icon: '👥',
      title: 'Group Classes',
      description: 'Join our energetic group sessions including HIIT, Yoga, and Strength Training.',
      buttonText: 'View Schedule'
    },
    {
      icon: '🎯',
      title: 'Specialized Programs',
      description: 'Target specific goals with our specialized fitness and nutrition programs.',
      buttonText: 'Explore'
    },
    
  ];

  return (
    <section className={styles.programsSection}>
      <div className={styles.programsGrid}  >
        {programs.map((program, index) => (
          <div key={index} className={styles.programCard}>
            <div className={styles.icon}>{program.icon}</div>
            <h3 className={styles.title}>{program.title}</h3>
            <p className={styles.description}>
              {program.description}
            </p>
            <button className={styles.button}>{program.buttonText}</button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedPrograms; 
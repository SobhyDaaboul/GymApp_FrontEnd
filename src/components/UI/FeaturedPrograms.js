import styles from '../../CSS/FeaturedPrograms.module.css';

function FeaturedPrograms(){
  const programs = [
    {
      icon: '💪',
      title: 'Personal Training',
      description: "Unleash your full potential with personalized training that gets results – build strength, shred fat, and transform your body today! Your journey to a stronger, healthier you starts here.",
    },
    {
      icon: '🎯',
      title: 'COMING SOON!',
      description: "Exciting news! New gym classes are launching soon – from strength training to high-energy cardio, there's something for everyone. Stay tuned and get ready to crush your fitness goals!",
    },
    {
      icon: '👥',
      title: 'Group Classes',
      description: "Push yourself and have fun with our new group classes! Train together, stay motivated, and achieve your fitness goals as a team. Join us and feel the energy!",
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
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedPrograms; 
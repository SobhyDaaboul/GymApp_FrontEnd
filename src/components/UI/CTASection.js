import styles from '../../CSS/CTASection.module.css';

function CTASection(){
  return (
    <section className={styles.ctaSection}>
      <div className={styles.container}>
        <h2 className={styles.title}>Start Your Fitness Journey Today</h2>
        <p className={styles.description}>
          Join our community and transform your life with our state-of-the-art facilities 
          and expert guidance. First week free for new members!
        </p>
      </div>
    </section>
  );
};

export default CTASection;
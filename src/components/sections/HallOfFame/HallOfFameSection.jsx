import { motion } from 'framer-motion';
import styles from './HallOfFameSection.module.css';

const HallOfFameSection = () => {
  return (
    <section className={styles.hallOfFameSection}>
      <div className="container">
        <div className={styles.contentWrapper}>
          {/* Left Side - Text Content */}
          <motion.div 
            className={styles.textContent}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className={styles.title}>Hall of Fame</h2>
            <div className={styles.titleUnderline}></div>
            
            <p className={styles.description}>
              Celebrating our exceptional students who have excelled in their fields 
              and made remarkable contributions to the creative industry. Their dedication, 
              talent, and hard work serve as an inspiration to aspiring designers and 
              developers worldwide.
            </p>

          </motion.div>

          {/* Right Side - Image */}
          <motion.div 
            className={styles.imageContent}
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className={styles.imageWrapper}>
              <img 
                src="/images/halloffame/rohit-gade.webp"
                alt="Hall of Fame" 
                className={styles.image}
              />
              <div className={styles.imageOverlay}></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HallOfFameSection;
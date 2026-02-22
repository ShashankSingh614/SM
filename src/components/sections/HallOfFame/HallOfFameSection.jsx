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
            <h2 className={styles.title}>Distinguished Alumni Hall of Fame</h2>
            <div className={styles.titleUnderline}></div>
            
            <p className={styles.description}>
              We proudly recognize and honor our exceptionally talented alumni who have been acknowledged for extraordinary accomplishments and significant contributions within the creative, multimedia, and technology sectors. These distinguished individuals have been acknowledged as industry leaders whose dedication, innovative thinking, and professional excellence continue to establish exemplary standards throughout the digital design and animation industries globally.
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
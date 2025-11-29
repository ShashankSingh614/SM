// About Page Component
import { motion } from 'framer-motion';
import { FiTarget, FiStar } from 'react-icons/fi';
import { ABOUT_CONTENT, MANAGEMENT_TEAM } from '../../constants/content';
import styles from './AboutPage.module.css';

const AboutPage = () => {
  return (
    <motion.div
      className={styles.aboutPage}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container">
        <div className={styles.pageHeader}>
          <h1>About Us</h1>
          <p>{ABOUT_CONTENT.subtitle}</p>
        </div>

        {/* Mission & Vision */}
        <motion.section 
          className={styles.missionVisionSection}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          <div className={styles.missionVisionGrid}>
            <div className={styles.missionCard}>
              <div className={styles.cardIcon}>
                <FiTarget />
              </div>
              <h3>Our Mission</h3>
              <p>{ABOUT_CONTENT.mission}</p>
            </div>
            <div className={styles.visionCard}>
              <div className={styles.cardIcon}>
                <FiStar />
              </div>
              <h3>Our Vision</h3>
              <p>{ABOUT_CONTENT.vision}</p>
            </div>
          </div>
        </motion.section>

        {/* Description */}
        <motion.section 
          className={styles.descriptionSection}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
        >
          <div className={styles.descriptionContent}>
            <h3>Excellence in Education</h3>
            <div className={styles.descriptionText}>
              {ABOUT_CONTENT.description.split('\n\n').map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Management Team */}
        <motion.section 
          className={styles.managementSection}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.0 }}
        >
          <h3>MANAGEMENT</h3>
          <div className={styles.managementGrid}>
            {MANAGEMENT_TEAM.map((member, index) => (
              <motion.div 
                key={member.id} 
                className={styles.managementCard}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2 + index * 0.1 }}
              >
                <div className={styles.memberImage}>
                  <img src={member.image} alt={member.name} />
                </div>
                <div className={styles.memberInfo}>
                  <h4>{member.name}</h4>
                  <h5>{member.position}</h5>
                  <p>{member.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>


      </div>
    </motion.div>
  );
};

export default AboutPage;
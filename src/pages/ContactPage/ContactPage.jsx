// Modern Contact Page Component
import { motion } from 'framer-motion';
import { 
  FiPhone, 
  FiMail, 
  FiMapPin, 
  FiClock, 
  FiExternalLink,
} from 'react-icons/fi';
import { CONTACT_INFO } from '../../constants/content';
import styles from './ContactPage.module.css';

const ContactPage = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };

  return (
    <motion.div
      className={styles.contactPage}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container">
        <div className={styles.pageHeader}>
          <h1>Contact Us</h1>
          <p>Get in touch with us to start your journey in multimedia and IT education. Visit any of our 5 branches across Mumbai</p>
        </div>
       
        {/* Branch Locations */}
        <motion.section 
          className={styles.branchSection}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div className={styles.sectionHeader} variants={itemVariants}>
            <h2>Institute Centers</h2>
          </motion.div>

          <div className={styles.branchesContainer}>
            {CONTACT_INFO.locations.map((location, index) => (
              <motion.div 
                key={index} 
                className={styles.branchCard}
                variants={itemVariants}
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <div className={styles.branchInfo}>
                  <div className={styles.branchHeader}>
                    <div className={styles.branchIcon}>
                      <FiMapPin />
                    </div>
                    <h3>{location.name}</h3>
                  </div>
                  
                  <div className={styles.branchAddress}>
                    <p>{location.address}</p>
                  </div>
                  
                  {location.contactPerson && (
                    <div className={styles.branchManager}>
                      <strong>{location.contactPerson}</strong>
                    </div>
                  )}
                  
                  <div className={styles.branchContact}>
                    <a href={location.href} className={styles.branchPhone}>
                      <FiPhone />
                      <span>{location.phone}</span>
                    </a>
                  </div>
                  
                  <div className={styles.branchActions}>
                    <a 
                      href={location.googleMapsLink} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className={styles.directionsBtn}
                    >
                      <FiExternalLink />
                      <span>Get Directions</span>
                    </a>
                  </div>
                </div>
                
                <div className={styles.branchMap}>
                  <iframe
                    src={location.mapUrl}
                    width="100%"
                    height="250"
                    style={{ border: 0, borderRadius: '12px' }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title={`${location.name} Location`}
                  ></iframe>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Contact Methods */}
        <motion.section 
          className={styles.contactMethodsSection}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div className={styles.sectionHeader} variants={itemVariants}>
            <h2>Get In Touch</h2>
            <p>Connect with us through multiple channels</p>
          </motion.div>

          <div className={styles.contactMethodsGrid}>

            <motion.div className={styles.contactMethod} variants={itemVariants}>
              <div className={styles.methodIcon}>
                <FiMail />
              </div>
              <h3>Email Us</h3>
              <a href="mailto:info@shankarmultimedia.com">info@shankarmultimedia.com</a>
            </motion.div>

            <motion.div className={styles.contactMethod} variants={itemVariants}>
              <div className={styles.methodIcon}>
                <FiClock />
              </div>
              <h3>Working Hours</h3>
              <p>{CONTACT_INFO.workingHours}</p>
            </motion.div>
          </div>
        </motion.section>
      </div>
    </motion.div>
  );
};

export default ContactPage;
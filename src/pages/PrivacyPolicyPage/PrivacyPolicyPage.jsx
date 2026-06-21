// Privacy Policy Page Component
import { motion } from 'framer-motion';
import { useSEO } from '../../hooks/useSEO';
import styles from './PrivacyPolicyPage.module.css';

const PrivacyPolicyPage = () => {
  useSEO({
    title: 'Privacy Policy - Shankar Multimedia',
    description: 'Privacy Policy of Shankar Multimedia. Your information is secure and protected under Indian law.',
    keywords: 'privacy policy, data protection, personal information, secure',
    url: 'https://www.shankarmultimedia.com/privacy-policy',
  });

  return (
    <motion.div
      className={styles.privacyPage}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container">
        <div className={styles.pageHeader}>
          <h1>Privacy Policy</h1>
          <p>Last Updated: January {new Date().getFullYear()}</p>
        </div>

        <motion.div
          className={styles.content}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          {/* Introduction */}
          <section className={styles.section}>
            <h2>Information Collection</h2>
            <p>
              Shankar Multimedia collects personal information only through offline admission forms submitted at our institute. We do not collect any data through this website or any online forms. All student information is collected in person during the admission process at our physical location.
            </p>
          </section>

          {/* Data Protection */}
          <section className={styles.section}>
            <h2>Data Protection and Privacy</h2>
            <p>
              Your personal information collected during offline admission is secured and protected under the <strong className={styles.highlight}>Information Technology Act, 2000</strong> and applicable Indian data protection laws. We are legally bound and committed to the following:
            </p>
            <ul className={styles.list}>
              <li>We <strong className={styles.highlight}>DO NOT</strong> sell, trade, rent, or share your personal information with any third parties</li>
              <li>Your data is used solely for educational and administrative purposes related to your enrollment</li>
              <li>Information is stored securely with restricted access only to authorized personnel</li>
              <li>Your data is retained only as long as necessary for educational purposes and legal compliance</li>
            </ul>
          </section>

          {/* Contact */}
          <section className={styles.section}>
            <h2>Contact Us</h2>
            <p>
              For any questions about this Privacy Policy or your personal information, please contact us at <strong className={styles.highlight}>info@shankarmultimedia.com</strong>.
            </p>
          </section>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default PrivacyPolicyPage;
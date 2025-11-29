// Modern Footer Component
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  FiMail, 
  FiArrowUp,
  FiClock
} from 'react-icons/fi';
import { SOCIAL_LINKS } from '../../../constants/content';
import styles from './Footer.module.css';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className={styles.footer}>
      <div className={styles.footerTop}>
        <div className="container">
          <div className={styles.footerGrid}>
            {/* Company Info */}
            <div className={styles.footerColumn}>
              <div className={styles.footerLogos}>
                <div className={styles.mainLogo}>
                  <img src="/images/logowhite.png" alt="Shankar Multimedia" />
                </div>
                <div className={styles.certificationLogos}>
                  <img src="/images/img2/35 LOGO.png" alt="35 Years Excellence" className={styles.certLogo} />
                  <img src="/images/img2/wwe.png" alt="WWE Certification" className={styles.certLogo} />
                  <img src="/images/img2/msme.png" alt="msme Certification" className={styles.certLogo} />
                </div>
              </div>
              <p className={styles.footerDescription}>
                With over 35 Years of Excellence, Shankar Multimedia is Mumbai's leading 
                ISO 9001:2015 certified institute for IT and multimedia animation training.
              </p>
              <div className={styles.socialLinks}>
                <a href={SOCIAL_LINKS.facebook} className={styles.socialLink} aria-label="Facebook" target="_blank" rel="noopener noreferrer">
                  <img src="/images/img2/fb.png" alt="Facebook" />
                </a>
                <a href={SOCIAL_LINKS.instagram} className={styles.socialLink} aria-label="Instagram" target="_blank" rel="noopener noreferrer">
                  <img src="/images/img2/int.png" alt="Instagram" />
                </a>
                
                <a href={SOCIAL_LINKS.youtube} className={styles.socialLink} aria-label="YouTube" target="_blank" rel="noopener noreferrer">
                  <img src="/images/img2/yt.png" alt="YouTube" />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div className={styles.footerColumn}>
              <h3 className={styles.footerTitle}>Quick Links</h3>
              <ul className={styles.footerLinks}>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About Us</Link></li>
                <li><Link to="/students-work">Students Work</Link></li>
                <li><Link to="/placements">Placements</Link></li>
                <li><Link to="/contact">Contact Us</Link></li>
              </ul>
            </div>

            {/* Contact Info */}
            <div className={styles.footerColumn}>
              <h3 className={styles.footerTitle}>GET IN TOUCH</h3>
              <div className={styles.contactInfo}>
                <div className={styles.contactItem}>
                  <FiMail />
                  <span>info@shankarmultimedia.com</span>
                </div>
                <div className={styles.contactItem}>
                  <FiClock />
                  <span>Monday To Saturday 8am To 9pm | Sunday 9am To 2pm</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.footerBottom}>
        <div className="container">
          <div className={styles.footerBottomContent}>
            <p className={styles.copyright}>
              Shankar Multimedia. All Rights Reserved ©2025
            </p>
            
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <motion.button
        className={styles.scrollToTop}
        onClick={scrollToTop}
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        aria-label="Scroll to top"
      >
        <FiArrowUp />
      </motion.button>
    </footer>
  );
};

export default Footer;
// Modern Footer Component
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  FiMail, 
  FiArrowUp,
  FiClock,
  FiDownload
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
                  <img src="/images/logowhite.webp" alt="Shankar Multimedia" />
                </div>
                <div className={styles.certificationLogos}>
                  <img src="/images/img2/35 LOGO.webp" alt="36 years Excellence" className={styles.certLogo} />
                  <img src="/images/img2/wwe.webp" alt="WWE Certification" className={styles.certLogo} />
                  <img src="/images/img2/msme.webp" alt="msme Certification" className={styles.certLogo} />
                </div>
              </div>
              <p className={styles.footerDescription}>
                With over 36 years of excellence, Shankar Multimedia is Mumbai’s leading and top-rated, government-recognized animation institute, offering courses in Graphic Design, UI/UX, Motion Graphic Design, Video Editing, VFX, 3D Animation, Digital Marketing, and Multimedia Animation. We are an ISO 9001:2015 certified institute for IT and multimedia animation training.
              </p>
              <div className={styles.socialLinks}>
                <a href={SOCIAL_LINKS.facebook} className={styles.socialLink} aria-label="Facebook" target="_blank" rel="noopener noreferrer">
                  <img src="/images/img2/fb.webp" alt="Facebook" />
                </a>
                <a href={SOCIAL_LINKS.instagram} className={styles.socialLink} aria-label="Instagram" target="_blank" rel="noopener noreferrer">
                  <img src="/images/img2/int.webp" alt="Instagram" />
                </a>
                
                <a href={SOCIAL_LINKS.youtube} className={styles.socialLink} aria-label="YouTube" target="_blank" rel="noopener noreferrer">
                  <img src="/images/img2/yt.webp" alt="YouTube" />
                </a>

                <a href={SOCIAL_LINKS.threads} className={styles.socialLink} aria-label="Threads" target="_blank" rel="noopener noreferrer">
                  <img src="/images/img2/threads.webp" alt="Threads" />
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
                <li><Link to="/privacy-policy">Privacy Policy</Link></li>
                <li><Link to="/terms-conditions">Terms and Conditions</Link></li>
              </ul>
            </div>

            {/* Contact Info */}
            <div className={styles.footerColumn}>
              <h3 className={styles.footerTitle}>Get in Touch</h3>
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
              <br></br>
              <h3 className={styles.footerTitle}>Institute Centers</h3>
              <div className={styles.contactInfo}>
                <ul className={styles.footerLinks}>
                  <li><a href="https://maps.google.com/?q=Shankar+Multimedia+Goregaon+Mumbai" target="_blank" rel="noopener noreferrer">Goregaon</a></li>
                  <li><a href="https://maps.google.com/?q=Shankar+Multimedia+Malad+Mumbai" target="_blank" rel="noopener noreferrer">Malad</a></li>
                  <li><a href="https://maps.google.com/?q=Shankar+Multimedia+Santacruz+Mumbai" target="_blank" rel="noopener noreferrer">Santacruz</a></li>
                  <li><a href="https://maps.google.com/?q=Shankar+Multimedia+Mulund+Mumbai" target="_blank" rel="noopener noreferrer">Mulund</a></li>
                  <li><a href="https://maps.google.com/?q=Shankar+Multimedia+Nalasopara+Mumbai" target="_blank" rel="noopener noreferrer">Nalasopara</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.footerBottom}>
        <div className="container">
          <h3 className={styles.footerTitle}>Certified Programs with Job Placement Assurance</h3>
          <div className={styles.footerBottomContent}>
            <p className={styles.footerLinks}>
              <Link to="/courses/advanced-graphic-&-uiux-design">Graphic and UI/UX Design Course in Mumbai</Link> | <Link to="/courses/advanced-motion-graphic-&-video-editing">Motion Graphic and Video Editing Course in Mumbai</Link> | <Link to="/courses/advanced-3d-animation-&-modeling">3D Animation and Modeling Course in Mumbai</Link> | <Link to="/courses/advanced-interior-design">Interior Design Course in Mumbai</Link> | <Link to="/courses/advanced-3d-animation-&-vfx">3D Animation and VFX Course in Mumbai</Link> | <Link to="/courses/advanced-web-design-&-development">Full Stack Web Development Course in Mumbai</Link> | <Link to="/courses/advanced-digital-marketing">Digital Marketing Course in Mumbai</Link> | <Link to="/courses/advanced-multimedia-animation-&-vfx">Multimedia Animation and VFX Course in Mumbai</Link>
            </p>
          </div>
        </div>
      </div>

      <div className={styles.footerBottom}>
        <div className="container">
          <div className={styles.footerBottomContent}>
            <p className={styles.copyright}>
              Shankar Multimedia. All Rights Reserved ©{new Date().getFullYear()}
            </p>
            
          </div>
        </div>
      </div>

      {/* Download Brochure Button */}
      <motion.a
        href="/Shankar Multimedia Brochure.pdf"
        download="Shankar Multimedia Brochure.pdf"
        className={styles.downloadBrochure}
        initial={{ opacity: 0, y: 20 }} 
        animate={{ opacity: 1, y: 0 }} 
        whileHover={{ scale: 1.05 }} 
        whileTap={{ scale: 0.95 }} 
        aria-label="Download Brochure"
      >
        <FiDownload /> 
        <span>Download Brochure</span>
      </motion.a>
    </footer>
  );
};

export default Footer;
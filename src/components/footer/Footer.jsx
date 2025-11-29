// Footer component with links and social media icons
import PropTypes from 'prop-types';
import styles from './Footer.module.css';
import { navigationItems } from '../../data/navigation';
import { courseOptions } from '../../data/courses';

const Footer = ({ logoSrc, logoAlt, socialLinks }) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer2}>
      <div className="container">
        <div className="row">
          {/* Logo Section */}
          <div className={`col-md-3 ${styles.jojo} mt-5`}>
            <img src={logoSrc} alt={logoAlt} width="50%" />
          </div>

          {/* Navigation Links */}
          <div className="col-md-2 mt-5">
            <ul>
              {navigationItems.map((item) => (
                <li key={item.id}>
                  <a href={item.href}>{item.label}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Courses Links */}
          <div className="col-md-4 mt-5">
            <ul>
              {courseOptions.map((course) => (
                <li key={course.value}>
                  <a href="/">{course.label}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Media Section */}
          <div className="col-md-3 mt-5">
            <ul>
              <li>
                <a href="#contact">GET IN TOUCH</a>
              </li>
            </ul>

            <div className={styles.iconss}>
              {socialLinks.map((social) => (
                <a 
                  key={social.id}
                  href={social.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  aria-label={social.name}
                >
                  <img src={social.icon} alt={social.name} width="10%" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className={styles.footer}>
        <div className="container">
          <div className="row">
            <div className={`col-md-12 text-center ${styles.fut}`}>
              <p>Shankar Multimedia. All Rights Reserved ©{currentYear}</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

Footer.propTypes = {
  logoSrc: PropTypes.string,
  logoAlt: PropTypes.string,
  socialLinks: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
      icon: PropTypes.string.isRequired,
    })
  ),
};

Footer.defaultProps = {
  logoSrc: '/assets/images/logo.png',
  logoAlt: 'Shankar Multimedia Logo',
  socialLinks: [
    {
      id: '1',
      name: 'Instagram',
      url: 'https://www.instagram.com/shankarmultimedia/',
      icon: '/assets/images/int.png',
    },
    {
      id: '2',
      name: 'Facebook',
      url: 'https://m.facebook.com/shankarmultimediamumbai/',
      icon: '/assets/images/fb.png',
    },
    {
      id: '3',
      name: 'YouTube',
      url: 'https://www.youtube.com/@ShankarMultimediaMumbai',
      icon: '/assets/images/yt.png',
    },
    {
      id: '4',
      name: 'LinkedIn',
      url: 'https://in.linkedin.com/logo/shankar-multimedia-9223439986',
      icon: '/assets/images/li.png',
    },
  ],
};

export default Footer;
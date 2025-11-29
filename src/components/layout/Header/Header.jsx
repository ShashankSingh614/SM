// Modern Header component with sticky navigation
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiMenu, FiX, FiPhone, FiClock } from 'react-icons/fi';
import styles from './Header.module.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  const navigationItems = [
    { label: 'Home', path: '/' },
    { label: 'Students Work', path: '/students-work' },
    { label: 'Placements', path: '/placements' },
    { label: 'About Us', path: '/about' },
    { label: 'Contact', path: '/contact' },
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const branches = [
    { name: 'Goregaon', phone: '+91 9819508524' },
    { name: 'Malad', phone: '+91 9223439986' },
    { name: 'Mulund', phone: '+91 9619177392' },
    { name: 'Nalasopara', phone: '+91 70213 82816' },
    { name: 'Santacruz', phone: '+91 7304157986' }
  ];

  return (
    <>
      {/* Top Contact Bar */}
      <div className={styles.topBar}>
        <div className="container">
          <div className={styles.topBarContent}>
            <div className={styles.businessHours}>
              <FiClock className={styles.clockIcon} />
              <span>Monday To Saturday 8am To 9pm | Sunday 9am To 2pm</span>
            </div>
            <div className={styles.branchContacts}>
              {branches.map((branch, index) => (
                <div 
                  key={branch.name} 
                  className={styles.branchItem}
                >
                  <span className={styles.branchName}>{branch.name}</span>
                  <a href={`tel:${branch.phone}`} className={styles.branchPhone}>
                    <FiPhone className={styles.phoneIcon} />
                    {branch.phone}
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <header className={`${styles.header} ${isScrolled ? styles.scrolled : ''}`}>
        <nav className={styles.nav}>
          <div className="container">
            <div className={styles.navContent}>
              {/* Logo */}
              <div className={styles.logo}>
                <Link to="/">
                  <img 
                    src="/images/logo.png" 
                    alt="Shankar Multimedia" 
                    className={styles.logoImg}
                  />
                </Link>
              </div>

              {/* Desktop Navigation */}
              <div className={styles.desktopNav}>
                {navigationItems.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    className={`${styles.navLink} ${
                      location.pathname === item.path ? styles.active : ''
                    }`}
                  >
                    {item.label}
                  </Link>
                ))}
                
              </div>

              {/* Mobile Menu Toggle */}
              <button
                className={styles.mobileToggle}
                onClick={toggleMenu}
                aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
                aria-expanded={isMenuOpen}
              >
                {isMenuOpen ? <FiX /> : <FiMenu />}
              </button>
            </div>
          </div>
        </nav>

        {/* Mobile Navigation */}
        <motion.div
          className={`${styles.mobileNav} ${isMenuOpen ? styles.mobileNavOpen : ''}`}
          initial={false}
          animate={{
            height: isMenuOpen ? 'auto' : 0,
            opacity: isMenuOpen ? 1 : 0,
          }}
          transition={{ duration: 0.3, ease: 'easeInOut' }}
        >
          <div className={styles.mobileNavContent}>
            {navigationItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`${styles.mobileNavLink} ${
                  location.pathname === item.path ? styles.active : ''
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <div className={styles.mobileNavFooter}>
              <Link
                to="/contact"
                className="btn btn-primary"
                onClick={() => setIsMenuOpen(false)}
              >
                Get Started
              </Link>
            </div>
          </div>
        </motion.div>
      </header>
    </>
  );
};

export default Header;
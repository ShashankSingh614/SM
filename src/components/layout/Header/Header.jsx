// Modern Header component with unified navigation
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMenu, FiX, FiPhone, FiChevronDown } from 'react-icons/fi';
import styles from './Header.module.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isBranchDropdownOpen, setIsBranchDropdownOpen] = useState(false);
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
    setIsBranchDropdownOpen(false);
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
    { name: 'Nalasopara', phone: '+91 7021382816' },
    { name: 'Santacruz', phone: '+91 7304157986' }
  ];

  return (
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
              
              {/* Branch Dropdown */}
              <div 
                className={styles.branchDropdown}
                onMouseEnter={() => setIsBranchDropdownOpen(true)}
                onMouseLeave={() => setIsBranchDropdownOpen(false)}
              >
                <button className={styles.branchToggle}>
                  <FiPhone className={styles.phoneIcon} />
                  <span>Call Us</span>
                  <FiChevronDown className={`${styles.chevron} ${isBranchDropdownOpen ? styles.chevronOpen : ''}`} />
                </button>
                
                <AnimatePresence>
                  {isBranchDropdownOpen && (
                    <motion.div 
                      className={styles.branchDropdownMenu}
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.2 }}
                    >
                      {branches.map((branch) => (
                        <a 
                          key={branch.name}
                          href={`tel:${branch.phone.replace(/\s/g, '')}`}
                          className={styles.branchItem}
                        >
                          <span className={styles.branchName}>{branch.name}</span>
                          <span className={styles.branchPhone}>{branch.phone}</span>
                        </a>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
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
          
          {/* Mobile Branch Contacts */}
          <div className={styles.mobileBranchSection}>
            <h4 className={styles.mobileBranchTitle}>
              <FiPhone /> Call Us
            </h4>
            <div className={styles.mobileBranchList}>
              {branches.map((branch) => (
                <a 
                  key={branch.name}
                  href={`tel:${branch.phone.replace(/\s/g, '')}`}
                  className={styles.mobileBranchItem}
                >
                  <span className={styles.mobileBranchName}>{branch.name}</span>
                  <span className={styles.mobileBranchPhone}>{branch.phone}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </header>
  );
};

export default Header;
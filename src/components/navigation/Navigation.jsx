// Navigation component with logo and menu items
import { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './Navigation.module.css';
import { navigationItems } from '../../data/navigation';

const Navigation = ({ logoSrc, logoAlt }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      toggleMobileMenu();
    }
  };

  return (
    <div className="container-fluid">
      <div className="row">
        <div className={styles.home}>
          {/* Desktop Navigation */}
          <nav className={styles.nav} role="navigation" aria-label="Main navigation">
            <div className="container">
              <div className={`${styles.logo} text-left`}>
                <a href="/" aria-label="Shankar Multimedia Home">
                  <img src={logoSrc} alt={logoAlt} width="60%" />
                </a>
              </div>
              <div 
                id="mainListDiv" 
                className={`${styles.mainList} ${isMobileMenuOpen ? styles.showList : ''}`}
              >
                <ul className={styles.navlinks} role="menubar">
                  {navigationItems.map((item) => (
                    <li key={item.id} role="none">
                      <a 
                        href={item.href}
                        className={item.isActive ? styles.active : ''}
                        role="menuitem"
                        aria-current={item.isActive ? 'page' : undefined}
                        onClick={(e) => {
                          e.preventDefault();
                          // For demo purposes, scroll to sections or alert
                          if (item.href === '/') {
                            window.location.href = item.href;
                          } else {
                            alert(`Navigation to ${item.label} - In a real app, this would use React Router`);
                          }
                        }}
                      >
                        {item.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              
              {/* Mobile Menu Toggle */}
              <span 
                className={`${styles.navTrigger} ${isMobileMenuOpen ? styles.active : ''}`}
                onClick={toggleMobileMenu}
                onKeyDown={handleKeyDown}
                role="button"
                tabIndex={0}
                aria-label="Toggle navigation menu"
                aria-expanded={isMobileMenuOpen}
              >
                <i></i>
                <i></i>
                <i></i>
              </span>
            </div>
          </nav>

          {/* Mobile Bootstrap Navigation */}
          <div className="container">
            <nav className={`${styles.menu} navbar navbar-expand-lg navbar-light bg-light`}>
              <button 
                className="navbar-toggler" 
                type="button" 
                data-toggle="collapse" 
                data-target="#navbarSupportedContent" 
                aria-controls="navbarSupportedContent" 
                aria-expanded="false" 
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon float-right"></span>
              </button>

              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                  {navigationItems.map((item) => (
                    <li key={`mobile-${item.id}`} className={`nav-item ${item.isActive ? 'active' : ''}`}>
                      <a 
                        className={`nav-link ${item.isActive ? 'active' : ''}`} 
                        href={item.href}
                        aria-current={item.isActive ? 'page' : undefined}
                        onClick={(e) => {
                          e.preventDefault();
                          if (item.href === '/') {
                            window.location.href = item.href;
                          } else {
                            alert(`Navigation to ${item.label} - In a real app, this would use React Router`);
                          }
                        }}
                      >
                        {item.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
};

Navigation.propTypes = {
  logoSrc: PropTypes.string,
  logoAlt: PropTypes.string,
};

Navigation.defaultProps = {
  logoSrc: '/assets/images/logo.png',
  logoAlt: 'Shankar Multimedia Logo',
};

export default Navigation;
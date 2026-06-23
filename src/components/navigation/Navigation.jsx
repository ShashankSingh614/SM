import { useState } from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
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

  const handleNavClick = () => {
    setIsMobileMenuOpen(false);

    setTimeout(() => {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'auto',
      });

      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
    }, 50);
  };

  return (
    <div className="container-fluid">
      <div className="row">
        <div className={styles.home}>
          <nav
            className={styles.nav}
            role="navigation"
            aria-label="Main navigation"
          >
            <div className="container">
              <div className={`${styles.logo} text-left`}>
                <NavLink
                  to="/"
                  aria-label="Shankar Multimedia Home"
                  onClick={handleNavClick}
                >
                  <img src={logoSrc} alt={logoAlt} width="60%" />
                </NavLink>
              </div>

              <div
                id="mainListDiv"
                className={`${styles.mainList} ${
                  isMobileMenuOpen ? styles.showList : ''
                }`}
              >
                <ul className={styles.navlinks} role="menubar">
                  {navigationItems.map((item) => (
                    <li key={item.id} role="none">
                      <NavLink
                        to={item.href}
                        role="menuitem"
                        onClick={handleNavClick}
                        className={({ isActive }) =>
                          isActive ? styles.active : ''
                        }
                      >
                        {item.label}
                      </NavLink>
                    </li>
                  ))}
                </ul>
              </div>

              <span
                className={`${styles.navTrigger} ${
                  isMobileMenuOpen ? styles.active : ''
                }`}
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
  logoSrc: '/assets/images/logo.webp',
  logoAlt: 'Shankar Multimedia Logo',
};

export default Navigation;
// Header component with phone contact information
import PropTypes from 'prop-types';
import styles from './Header.module.css';

const Header = ({ contacts }) => {
  return (
    <header className={styles.headerWrapper}>
      {/* Single Line Contact Bar */}
      <div className={styles.phone}>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6">
              <div className={styles.hed}>
                <p>Monday To Saturday 8am To 9pm | Sunday 9am To 2pm</p>
              </div>
            </div>
            <div className="col-md-6">
              <div className={styles.hed}>
                <ul className={styles.contactList}>
                  {contacts.map((contact) => (
                    <li key={contact.id}>
                      <a href={`tel:+91${contact.phone}`} aria-label={`Call ${contact.location}`}>
                        {contact.location}: +91 {contact.phone}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

Header.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      location: PropTypes.string.isRequired,
      phone: PropTypes.string.isRequired,
    })
  ),
};

Header.defaultProps = {
  contacts: [
    { id: '1', location: 'Goregaon', phone: '9819508524' },
    { id: '2', location: 'Malad', phone: '9223439986' },
    { id: '3', location: 'Mulund', phone: '9619177392' },
    { id: '4', location: 'Nalasopara', phone: '7021382816' },
    { id: '5', location: 'Santacruz', phone: '7304157986' },
  ],
};

export default Header;
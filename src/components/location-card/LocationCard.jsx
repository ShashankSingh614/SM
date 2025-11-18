// Location card component displaying institute center information
import PropTypes from 'prop-types';
import styles from './LocationCard.module.css';

const LocationCard = ({ location, index }) => {
  
  return (
    <>
      <div className="col-md-6">
        <div className={`${styles.about} pt-3`}>
          <p className="pt- pb-3">
            <strong className={styles.locationTitle}>
              {location.name}
            </strong>
            <br />
            {location.address}
            <br />
            <a 
              href={`tel:${location.phone}`} 
              className={styles.phoneLink}
              aria-label={`Call ${location.contactPerson}`}
            >
              <span>
                <i className="fa fa-phone" aria-hidden="true"></i> 
                {location.contactPerson} (+91 {location.phone})
              </span>
            </a>
            <br />
            You can also email us at info@shankarmultimedia.com or send your enquiries using below form. 
            An asterisk (*) indicates a required entry.
          </p>
        </div>
      </div>

      <div className={`col-md-6 ${index >= 2 ? 'mt-5' : ''}`}>
        <iframe
          src={location.mapUrl}
          width="100%"
          height="350"
          style={{
            border: '2px solid #deb81d',
            marginBottom: index < 4 ? '30px' : '0'
          }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title={`Map showing location of ${location.name} branch`}
        ></iframe>
      </div>
    </>
  );
};

LocationCard.propTypes = {
  location: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    address: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
    contactPerson: PropTypes.string.isRequired,
    mapUrl: PropTypes.string.isRequired,
  }).isRequired,
  index: PropTypes.number.isRequired,
};

export default LocationCard;
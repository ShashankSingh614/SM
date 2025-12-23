// Simple Professional Placement Card Component
import { motion } from 'framer-motion';
import { FiMapPin, FiBriefcase } from 'react-icons/fi';
import PropTypes from 'prop-types';
import styles from './PlacementCard.module.css';

const PlacementCard = ({ student, index }) => {
  return (
    <motion.div
      className={styles.placementCard}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
    >
      <div className={styles.studentImage}>
        <img 
          src={student.image} 
          alt={student.name}
          loading="lazy"
          onError={(e) => {
            e.target.src = '/images/placeholder-student.jpg';
          }}
        />
      </div>
      
      <div className={styles.studentInfo}>
        <h3 className={styles.studentName}>{student.name}</h3>
        
        <div className={styles.studentRole}>
          <FiBriefcase className={styles.roleIcon} />
          <span>{student.role}</span>
        </div>
        
        <div className={styles.studentLocation}>
          <FiMapPin className={styles.locationIcon} />
          <span>{student.location}</span>
        </div>
      </div>
    </motion.div>
  );
};

PlacementCard.propTypes = {
  student: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    role: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
  }).isRequired,
  index: PropTypes.number.isRequired,
};

export default PlacementCard;

// WhatsApp Floating Button Component
import { motion } from 'framer-motion';
import { SOCIAL_LINKS } from '../../../constants/content';
import styles from './WhatsAppButton.module.css';

const WhatsAppButton = () => {
  const handleWhatsAppClick = () => {
    window.open(SOCIAL_LINKS.whatsapp, '_blank');
  };

  return (
    <motion.button
      className={styles.whatsappButton}
      onClick={handleWhatsAppClick}
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ delay: 1, duration: 0.3 }}
      whileTap={{ scale: 0.95 }}
      aria-label="Contact us on WhatsApp"
    >
      <img 
        src="/images/icons8-whatsapp-40.png" 
        alt="WhatsApp" 
        className={styles.whatsappIcon}
      />
    </motion.button>
  );
};

export default WhatsAppButton;


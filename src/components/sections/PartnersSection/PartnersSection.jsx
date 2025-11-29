// Partners Section
import { useState } from 'react';
import { motion } from 'framer-motion';
import { PLACEMENT_COMPANIES } from '../../../constants/content';
import styles from './PartnersSection.module.css';

const PartnersSection = () => {
  const [showMore, setShowMore] = useState(false);
  
  // Get top 12 companies for display (first row)
  const topCompanies = PLACEMENT_COMPANIES.slice(0, 12);
  // Get additional companies for "View More" functionality
  const additionalCompanies = PLACEMENT_COMPANIES.slice(12, 26);
  
  const toggleShowMore = () => {
    setShowMore(!showMore);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: 'easeOut',
      },
    },
  };

  return (
    <section className={styles.partnersSection}>
      <div className="container">
        <motion.div 
          className={styles.sectionHeader}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2>Career Destinations</h2>
        </motion.div>

        <motion.div 
          className={styles.companiesGrid}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {topCompanies.map((company, index) => (
            <motion.div
              key={company.id}
              className={styles.companyCard}
              variants={itemVariants}
              whileHover={{ 
                scale: 1.05,
                y: -5,
                transition: { duration: 0.3 }
              }}
            >
              <div className={`${styles.companyContent} ${!company.logo ? styles.companyContentTextOnly : ''}`}>
                {company.logo ? (
                  <>
                    <img 
                      src={company.logo} 
                      alt={company.name}
                      className={styles.companyLogo}
                    />
                    <span className={styles.companyName}>{company.name}</span>
                  </>
                ) : (
                  <span className={`${styles.companyName} ${styles.companyTextOnly}`}>
                    {company.name}
                  </span>
                )}
              </div>
            </motion.div>
          ))}
          
          {/* Additional companies when expanded */}
          {showMore && additionalCompanies.map((company, index) => (
            <motion.div
              key={company.id}
              className={styles.companyCard}
              variants={itemVariants}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              whileHover={{ 
                scale: 1.05,
                y: -5,
                transition: { duration: 0.3 }
              }}
            >
              <div className={`${styles.companyContent} ${!company.logo ? styles.companyContentTextOnly : ''}`}>
                {company.logo ? (
                  <>
                    <img 
                      src={company.logo} 
                      alt={company.name}
                      className={styles.companyLogo}
                    />
                    <span className={styles.companyName}>{company.name}</span>
                  </>
                ) : (
                  <span className={`${styles.companyName} ${styles.companyTextOnly}`}>
                    {company.name}
                  </span>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          className={styles.sectionFooter}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <button 
            className={styles.viewMoreBtn}
            onClick={toggleShowMore}
          >
            {showMore ? 'View Less Companies' : 'View More Companies'}
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default PartnersSection;
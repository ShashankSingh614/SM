// Centers Gallery Component - Simple cards showing all centers
import { motion } from 'framer-motion';
import styles from './CentersGallery.module.css';

const CentersGallery = () => {
  const centerImages = [
    { id: 1, src: '/images/institute/1.jpg'},
    { id: 2, src: '/images/institute/2.jpg' },
    { id: 3, src: '/images/institute/3.jpg' },
    { id: 4, src: '/images/institute/4.jpg' },
    { id: 5, src: '/images/institute/5.jpg' },
    { id: 6, src: '/images/institute/6.jpg' },
    { id: 7, src: '/images/institute/7.jpg' },
    { id: 8, src: '/images/institute/8.jpg' },
    { id: 9, src: '/images/institute/9.jpg' },
    { id: 10, src: '/images/institute/10.jpg' },
    { id: 11, src: '/images/institute/11.jpg' },
    { id: 12, src: '/images/institute/12.jpg' },
    { id: 13, src: '/images/institute/13.jpg' },
    { id: 14, src: '/images/institute/14.jpg' },
    { id: 15, src: '/images/institute/15.jpg' },
    { id: 16, src: '/images/institute/16.jpg' },
    { id: 17, src: '/images/institute/17.jpg' },
    { id: 18, src: '/images/institute/18.jpg' },
    { id: 19, src: '/images/institute/19.jpg' },
    { id: 20, src: '/images/institute/20.jpg' },
    { id: 21, src: '/images/institute/21.jpg' },
    { id: 22, src: '/images/institute/22.jpg' },
    { id: 23, src: '/images/institute/23.jpg' },
    { id: 24, src: '/images/institute/24.jpg' }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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
    <section className={styles.centersGallery}>
      <div className="container">
        <motion.div 
          className={styles.sectionHeader}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2>Our Centers</h2>
          <p>Explore our state-of-the-art facilities across Mumbai</p>
        </motion.div>

        <motion.div 
          className={styles.gallery}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {centerImages.map((image) => (
            <motion.div 
              key={image.id} 
              className={styles.centerCard}
              variants={itemVariants}
            >
              <div className={styles.imageContainer}>
                <img 
                  src={image.src} 
                  alt={image.alt}
                  loading="lazy"
                />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default CentersGallery;


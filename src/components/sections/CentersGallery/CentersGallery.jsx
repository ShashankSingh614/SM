// Centers Gallery Component - Simple cards showing all centers
import { motion } from 'framer-motion';
import styles from './CentersGallery.module.css';

const CentersGallery = () => {
  const centerImages = [
    { id: 1, src: '/images/team/Shankar Multimedia in Malad.png', alt: 'Shankar Multimedia in Malad' },
    { id: 2, src: '/images/team/Graphic designing classes in mumbai.jpg', alt: 'Graphic designing classes in mumbai' },
    { id: 3, src: '/images/team/team11.jpg', alt: 'Center View' },
    { id: 4, src: '/images/team/best design class & job guarantee.jpg', alt: 'Best design class & job guarantee' },
    { id: 5, src: '/images/team/team2.jpg', alt: 'Center View' },
    { id: 6, src: '/images/team/team3.jpg', alt: 'Center View' },
    { id: 7, src: '/images/team/team4.jpg', alt: 'Center View' },
    { id: 8, src: '/images/team/team5.jpg', alt: 'Center View' },
    { id: 9, src: '/images/team/Job Guarantee.jpg', alt: 'Job Guarantee' },
    { id: 10, src: '/images/team/team6.jpg', alt: 'Center View' },
    { id: 11, src: '/images/team/Shankar Multimedia Malad  Mulund Goregaon.jpg', alt: 'Shankar Multimedia Malad Mulund Goregaon' },
    { id: 12, src: '/images/team/team00.jpg', alt: 'Center View' },
    { id: 13, src: '/images/team/team14.jpg', alt: 'Center View' },
    { id: 14, src: '/images/team/team15.jpg', alt: 'Center View' },
    { id: 15, src: '/images/team/team16.jpg', alt: 'Center View' },
    { id: 16, src: '/images/bt2.jpg', alt: 'Top web designing classes in goregaon' },
    { id: 17, src: '/images/bt3.jpg', alt: 'Top web designing classes in goregaon' },
    { id: 18, src: '/images/bt4.jpg', alt: 'Top web designing classes in goregaon' },
    { id: 19, src: '/images/team/Job Guarantee Graphic courses in mumbai.jpg', alt: 'Job Guarantee Graphic courses in mumbai' },
    { id: 20, src: '/images/team/top motion graphics designing class in malad.jpg', alt: 'Top motion graphics designing class in malad' },
    { id: 21, src: '/images/team/top graphic designing classes in mulund.jpg', alt: 'Top graphic designing classes in mulund' },
    { id: 22, src: '/images/team/top web designing classes in goregaon.jpg', alt: 'Top web designing classes in goregaon' },
    { id: 23, src: '/images/team/top-graphic-designing-classes-in-nalasopara.jpg', alt: 'Top graphic designing classes in nalasopara' },
    { id: 24, src: '/images/bt1.jpg', alt: 'Top web designing classes in goregaon' }
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


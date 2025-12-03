// Modern HomePage with key components
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import HeroSection from '../../components/sections/HeroSection/HeroSection';
import CoursesAccordion from '../../components/sections/CoursesAccordion/CoursesAccordion';
import InstituteFeaturesSection from '../../components/sections/InstituteFeaturesSection/InstituteFeaturesSection';
import CentersGallery from '../../components/sections/CentersGallery/CentersGallery';
import TestimonialsSection from '../../components/sections/TestimonialsSection/TestimonialsSection';
import PartnersSection from '../../components/sections/PartnersSection/PartnersSection';
import styles from './HomePage.module.css';

const HomePage = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const pageVariants = {
    initial: { opacity: 0 },
    in: { opacity: 1 },
    out: { opacity: 0 },
  };

  const pageTransition = {
    type: 'tween',
    ease: 'anticipate',
    duration: 0.6,
  };

  return (
    <motion.div
      className={styles.homePage}
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
    >
      <HeroSection />
      
      <TestimonialsSection />
      
      <PartnersSection />
      
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <CoursesAccordion />
      </motion.div>

      <InstituteFeaturesSection />
      
      <CentersGallery />
    </motion.div>
  );
};

export default HomePage;
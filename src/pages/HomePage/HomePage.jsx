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
import { useSEO } from '../../hooks/useSEO';
import { helmetConfig, structuredData } from '../../utils/helmet';
import CurvedSlider from '../../components/sections/CurvedSlider/CurvedSlider';

// Instagram Placements Images
const instagramPlacementsImages = [
  '/images/instaPlacements/WhatsApp Image 2025-12-11 at 8.11.04 PM.jpeg',
  '/images/instaPlacements/WhatsApp Image 2025-12-15 at 6.55.14 PM (1).jpeg',
  '/images/instaPlacements/WhatsApp Image 2025-12-15 at 6.55.14 PM (2).jpeg',
  '/images/instaPlacements/WhatsApp Image 2025-12-15 at 6.55.14 PM.jpeg',
  '/images/instaPlacements/WhatsApp Image 2025-12-15 at 6.55.15 PM.jpeg',
  '/images/instaPlacements/WhatsApp Image 2025-12-15 at 6.55.16 PM (1).jpeg',
  '/images/instaPlacements/WhatsApp Image 2025-12-15 at 6.55.16 PM (2).jpeg',
  '/images/instaPlacements/WhatsApp Image 2025-12-15 at 6.55.16 PM.jpeg',
  '/images/instaPlacements/WhatsApp Image 2025-12-15 at 6.55.17 PM.jpeg',
  '/images/instaPlacements/WhatsApp Image 2025-12-24 at 2.08.27 PM.jpeg',
  '/images/instaPlacements/WhatsApp Image 2025-12-24 at 2.08.28 PM.jpeg',
  '/images/instaPlacements/WhatsApp Image 2025-12-24 at 2.08.30 PM.jpeg',
  '/images/instaPlacements/WhatsApp Image 2025-12-24 at 2.08.31 PM.jpeg',
  '/images/instaPlacements/WhatsApp Image 2025-12-24 at 2.08.33 PM.jpeg',
  '/images/instaPlacements/WhatsApp Image 2025-12-24 at 2.08.34 PM.jpeg',
  '/images/instaPlacements/WhatsApp Image 2025-12-24 at 2.08.35 PM.jpeg',
  '/images/instaPlacements/WhatsApp Image 2025-12-24 at 2.08.36 PM.jpeg',
];


export default function HomePage() {
  useSEO({
    title: helmetConfig.home.title,
    description: helmetConfig.home.description,
    keywords: helmetConfig.home.keywords,
    canonical: helmetConfig.home.canonical,
    ogImage: helmetConfig.home.ogImage,
    structuredData: structuredData.organizationSchema
  });

  return <HomePageContent />;
}

const HomePageContent = () => {
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

      {/* Curved Slider - Recent Placements */}
      <motion.section 
        initial="hidden"
        animate="visible"
      >
        <h2>Recent Placements</h2>
        <CurvedSlider 
          images={instagramPlacementsImages} 
        />
      </motion.section>
      
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
// Modern Hero Section with working carousel
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FiChevronLeft, 
  FiChevronRight
} from 'react-icons/fi';
import { HERO_CONTENT } from '../../../constants/content';
import styles from './HeroSection.module.css';

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const banners = HERO_CONTENT.banners || [];

  // Auto-slide functionality
  useEffect(() => {
    if (banners.length > 1) {
      const interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % banners.length);
      }, 4000);
      return () => clearInterval(interval);
    }
  }, [banners.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % banners.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + banners.length) % banners.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <section className={styles.hero}>
      

      {/* Main Hero Content */}
      <div className="container">
        <div className={styles.heroContent}>
          {/* Logo and Guarantee Badge */}
          <motion.div 
            className={styles.heroTop}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className={styles.logoSection}>
              <img src="/images/logo.png" alt="Shankar Multimedia" className={styles.logo} />
              <div className={styles.logoText}>
                <h2>{HERO_CONTENT.title}</h2>
                <p>{HERO_CONTENT.subtitle}</p>
              </div>
            </div>
            
          </motion.div>

          {/* Carousel Section */}
          <motion.div 
            className={styles.carouselSection}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className={styles.carousel}>
              <div className={styles.carouselContainer}>
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentSlide}
                    className={styles.carouselSlide}
                    initial={{ opacity: 0, x: 300 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -300 }}
                    transition={{ duration: 0.5, ease: 'easeInOut' }}
                  >
                    <img 
                      src={banners[currentSlide]} 
                      alt={`Shankar Multimedia Course ${currentSlide + 1}`}
                      className={styles.carouselImage}
                    />
                  </motion.div>
                </AnimatePresence>

                {/* Navigation Controls */}
                {banners.length > 1 && (
                  <>
                    <button 
                      className={`${styles.carouselBtn} ${styles.prevBtn}`}
                      onClick={prevSlide}
                      aria-label="Previous slide"
                    >
                      <FiChevronLeft />
                    </button>
                    
                    <button 
                      className={`${styles.carouselBtn} ${styles.nextBtn}`}
                      onClick={nextSlide}
                      aria-label="Next slide"
                    >
                      <FiChevronRight />
                    </button>

                    {/* Indicators */}
                    <div className={styles.carouselIndicators}>
                      {banners.map((_, index) => (
                        <button
                          key={index}
                          className={`${styles.indicator} ${index === currentSlide ? styles.active : ''}`}
                          onClick={() => goToSlide(index)}
                          aria-label={`Go to slide ${index + 1}`}
                        />
                      ))}
                    </div>
                  </>
                )}
              </div>
            </div>
          </motion.div>

          
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
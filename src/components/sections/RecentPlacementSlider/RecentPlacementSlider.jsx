import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import classes from './RecentPlacementSlider.module.css';

const RecentPlacementSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const images = Array.from({ length: 18 }, (_, i) => `/images/instaPlacements/${i + 1}.jpeg`);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <section className={classes.section}>
      <div className={classes.container}>
        {/* Header */}
        <motion.div
          className={classes.sectionHeader}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2>Recent Placements</h2>
          <span className={classes.gradientLine}></span>
        </motion.div>

        {/* Slider */}
        <div className={classes.sliderWrapper}>
          <div className={classes.carousel}>
            <div className={classes.carouselContainer}>
              {/* Slide */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentSlide}
                  className={classes.carouselSlide}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.45, ease: 'easeInOut' }}
                >
                  <img
                    src={images[currentSlide]}
                    alt={`Recent placement ${currentSlide + 1}`}
                    className={classes.carouselImage}
                    loading="lazy"
                  />
                </motion.div>
              </AnimatePresence>

              {/* Controls */}
              <button
                className={`${classes.carouselBtn} ${classes.prevBtn}`}
                onClick={prevSlide}
                aria-label="Previous slide"
              >
                <FiChevronLeft />
              </button>

              <button
                className={`${classes.carouselBtn} ${classes.nextBtn}`}
                onClick={nextSlide}
                aria-label="Next slide"
              >
                <FiChevronRight />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RecentPlacementSlider;

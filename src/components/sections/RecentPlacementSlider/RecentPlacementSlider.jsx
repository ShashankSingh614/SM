import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import classes from './RecentPlacementSlider.module.css';

const images = Array.from(
  { length: 18 },
  (_, i) => `/images/instaPlacements/${i + 1}.jpeg`
);

const slideVariants = {
  enter: {
    x: 80,
    opacity: 0,
  },
  center: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.6, ease: [0.22, 0.61, 0.36, 1] },
  },
  exit: {
    x: -140, // moves more to the left on exit
    opacity: 0,
    transition: { duration: 0.6, ease: [0.22, 0.61, 0.36, 1] },
  },
};

const RecentPlacementSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide(prev => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentSlide(prev => (prev - 1 + images.length) % images.length);
  };

  const goToSlide = index => {
    setCurrentSlide(index);
  };

  return (
    <section className={classes.section}>
      <div className={classes.container}>
        {/* Header */}
        <div className={classes.sectionHeader}>
          <h2>Recent Placements</h2>
        </div>

        {/* Slider */}
        <div className={classes.sliderWrapper}>
          <div className={classes.carousel}>
            <div className={classes.carouselContainer}>
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentSlide}
                  className={classes.carouselSlide}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                >
                  <img
                    src={images[currentSlide]}
                    alt={`Recent placement ${currentSlide + 1}`}
                    className={classes.carouselImage}
                    draggable="false"
                  />
                </motion.div>
              </AnimatePresence>

              {/* Controls */}
              <button
                type="button"
                className={`${classes.carouselBtn} ${classes.prevBtn}`}
                onClick={prevSlide}
                aria-label="Previous placement"
              >
                <FiChevronLeft />
              </button>

              <button
                type="button"
                className={`${classes.carouselBtn} ${classes.nextBtn}`}
                onClick={nextSlide}
                aria-label="Next placement"
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
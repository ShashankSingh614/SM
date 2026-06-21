import { useState, useEffect } from 'react';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import classes from './RecentPlacementSlider.module.css';

const images = Array.from(
  { length: 30 },
  (_, i) => `/images/instaPlacements/${i + 1}.webp`
);

const RecentPlacementSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + images.length) % images.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  // Auto-play with pause on hover
  useEffect(() => {
    if (isHovered) return;

    const interval = setInterval(nextSlide, 4000);
    return () => clearInterval(interval);
  }, [currentSlide, isHovered]);

  const getSlideIndex = (offset) =>
    (currentSlide + offset + images.length) % images.length;

  return (
    <section className={classes.section}>
      <div className={classes.container}>
        {/* Header - Inside background section */}
        <div className={classes.sectionHeader}>
          <h2>Recent Placements and Career Success</h2>
          <p className={classes.headerSubtitle}>Our comprehensively trained students are establishing successful careers across leading multinational companies, creative studios, and technology enterprises worldwide, demonstrating the caliber of professional expertise cultivated through our rigorous educational programs</p>
        </div>

        {/* Slider */}
        <div className={classes.sliderWrapper}>
          
          <div
            className={classes.carousel}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <div className={classes.carouselTrack}>
              {/* Previous Slide */}
              <div className={classes.carouselSlide}>
                <img
                  src={images[getSlideIndex(-1)]}
                  alt="Previous placement"
                  className={classes.carouselImage}
                  draggable="false"
                />
              </div>

              {/* Current / Center Slide */}
              <div className={`${classes.carouselSlide} ${classes.center}`}>
                <img
                  src={images[currentSlide]}
                  alt={`Recent placement ${currentSlide + 1}`}
                  className={classes.carouselImage}
                  draggable="false"
                />
              </div>

              {/* Next Slide */}
              <div className={classes.carouselSlide}>
                <img
                  src={images[getSlideIndex(1)]}
                  alt="Next placement"
                  className={classes.carouselImage}
                  draggable="false"
                />
              </div>
            </div>

            {/* Navigation Buttons at Bottom */}
            <button
              className={`${classes.carouselBtn} ${classes.prevBtn}`}
              onClick={prevSlide}
              aria-label="Previous placement"
            >
              <FiChevronLeft />
            </button>
            <button
              className={`${classes.carouselBtn} ${classes.nextBtn}`}
              onClick={nextSlide}
              aria-label="Next placement"
            >
              <FiChevronRight />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RecentPlacementSlider;

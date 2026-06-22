import { useState, useEffect, useRef, useCallback, useMemo } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import PropTypes from 'prop-types';
import { FiAward, FiBriefcase, FiUsers, FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { Helmet } from 'react-helmet-async';
import { HERO_CONTENT } from '../../../constants/content';
import styles from './HeroSection.module.css';

const AUTOPLAY_MS = 4500;

/* ─── Fade-in wrapper, identical timing/easing to CourseLandingPage's Reveal ─── */
const Reveal = ({ children, delay = 0, className = '' }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });
  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, y: 32 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
};

Reveal.propTypes = {
  children: PropTypes.node,
  delay: PropTypes.number,
  className: PropTypes.string,
};

/* ─── Animated counter, identical logic to CourseLandingPage's Counter ─── */
const Counter = ({ target, suffix = '' }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const step = Math.ceil(target / 40);
    const timer = setInterval(() => {
      start += step;
      if (start >= target) { setCount(target); clearInterval(timer); }
      else setCount(start);
    }, 30);
    return () => clearInterval(timer);
  }, [isInView, target]);
  return <span ref={ref}>{count}{suffix}</span>;
};

Counter.propTypes = {
  target: PropTypes.number.isRequired,
  suffix: PropTypes.string,
};

/* ══════════════════════════════════════════════════════════ */

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const touchStartX = useRef(0);

  const partnerLogos = HERO_CONTENT.partnerLogos || [];

  // Slides come from HERO_CONTENT.banners, accepting either plain URL
  // strings (legacy) or { src, alt, label } objects.
  const slides = useMemo(() => {
    const raw = HERO_CONTENT.banners || [];
    return raw.map((item, i) => {
      if (typeof item === 'string') {
        return {
          src: item,
          alt: `Shankar Multimedia campus and student work, highlight ${i + 1}`,
          label: HERO_CONTENT.slideTopics?.[i] || '',
        };
      }
      return {
        src: item.src,
        alt: item.alt || `Shankar Multimedia campus and student work, highlight ${i + 1}`,
        label: item.label || item.courseLabel || '',
      };
    });
  }, []);

  // Preload the first slide with high priority (it is the LCP candidate);
  // lazily preload the rest so they don't compete for bandwidth.
  useEffect(() => {
    if (!slides.length) return;

    const firstLink = document.createElement('link');
    firstLink.rel = 'preload';
    firstLink.as = 'image';
    firstLink.href = slides[0].src;
    firstLink.setAttribute('fetchpriority', 'high');
    document.head.appendChild(firstLink);

    const idleId = window.requestIdleCallback
      ? window.requestIdleCallback(() => {
        slides.slice(1).forEach((s) => {
          const link = document.createElement('link');
          link.rel = 'preload';
          link.as = 'image';
          link.href = s.src;
          document.head.appendChild(link);
        });
      })
      : setTimeout(() => {
        slides.slice(1).forEach((s) => {
          const link = document.createElement('link');
          link.rel = 'preload';
          link.as = 'image';
          link.href = s.src;
          document.head.appendChild(link);
        });
      }, 300);

    return () => {
      if (window.cancelIdleCallback && typeof idleId === 'number') {
        window.cancelIdleCallback(idleId);
      }
    };
  }, [slides]);

  // Autoplay — pauses on hover/focus/touch so it never fights the user.
  useEffect(() => {
    if (slides.length <= 1 || isPaused) return;
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, AUTOPLAY_MS);
    return () => clearInterval(interval);
  }, [slides.length, isPaused]);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  }, [slides.length]);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  }, [slides.length]);

  const goToSlide = (index) => setCurrentSlide(index);

  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };
  const handleTouchEnd = (e) => {
    const delta = e.changedTouches[0].clientX - touchStartX.current;
    if (Math.abs(delta) < 40) return;
    if (delta < 0) nextSlide();
    else prevSlide();
  };

  // Same shape/values as the stats bar on CourseLandingPage, so the two
  // pages feel like one product. suffix drives the Counter's "+"/"%".
  const stats = [
    { icon: <FiAward aria-hidden="true" />, value: 36, suffix: '+', label: 'Years of Excellence' },
    { icon: <FiBriefcase aria-hidden="true" />, value: 100, suffix: '%', label: 'Job Placement Support' },
    { icon: <FiUsers aria-hidden="true" />, value: 4500, suffix: '+', label: 'Students Trained' },
  ];

  return (
    <>
      {/* Page-level SEO for the homepage hero. Complements the static tags
          already in index.html so hydrated/JS-executing crawlers see
          consistent metadata. */}
      <Helmet>
        <title>Shankar Multimedia | Top Design & Animation Institute, Mumbai</title>
        <meta
          name="description"
          content="Mumbai's top-rated institute for Graphic Design, UI/UX, 3D Animation, VFX and Digital Marketing. 36+ years, ISO certified, 100% placement support."
        />
        <link rel="canonical" href="https://shankarmultimedia.com/" />
      </Helmet>

      <section className={styles.hero} aria-label="Introduction to Shankar Multimedia">
        <div className={styles.heroPanel}>

          <motion.p
            className={styles.eyebrow}
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
          Leading Multimedia and Animation Institute in Mumbai
          </motion.p>

          <motion.h1
            className={styles.heroHeading}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
          >
          Graphic Design, UI/UX, 3D Animation, VFX, Digital Marketing Courses in Mumbai
          </motion.h1>

          <motion.p
            className={styles.heroSubtitle}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
          Our programs are backed by government and industry credentials
          </motion.p>

          <motion.div
            className={styles.heroCtas}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.45 }}
          >
            <a href="/contact" className={styles.btnPrimary}>
              Book Your Free Counselling Session
            </a>
          </motion.div>

          {partnerLogos.length > 0 && (
            <motion.div
              className={styles.partnersBlock}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.6 }}
            >
              <p className={styles.partnersLabel}>Our programs are backed by</p>
              <div className={styles.partnersRow}>
                {partnerLogos.map((logo, i) => (
                  <img
                    key={i}
                    src={logo.src}
                    alt={logo.alt || `${logo.name || 'Partner'} logo`}
                    className={styles.partnerLogo}
                    loading="lazy"
                    decoding="async"
                    width="120"
                    height="40"
                  />
                ))}
              </div>
            </motion.div>
          )}
        </div>

        <motion.div
          className={styles.heroShowcase}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.9, delay: 0.1 }}
          role="region"
          aria-roledescription="carousel"
          aria-label="Shankar Multimedia campus and student work highlights"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onFocus={() => setIsPaused(true)}
          onBlur={() => setIsPaused(false)}
        >
          <div
            className={styles.carouselFrame}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          >
            <AnimatePresence mode="wait">
              {slides[currentSlide] && (
                <motion.figure
                  key={currentSlide}
                  className={styles.carouselSlide}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.6, ease: 'easeInOut' }}
                  role="group"
                  aria-roledescription="slide"
                  aria-label={`${currentSlide + 1} of ${slides.length}`}
                >
                  <img
                    src={slides[currentSlide].src}
                    alt={slides[currentSlide].alt}
                    className={styles.carouselImage}
                    width="1920"
                    height="1280"
                    loading={currentSlide === 0 ? 'eager' : 'lazy'}
                    decoding="async"
                    fetchPriority={currentSlide === 0 ? 'high' : 'auto'}
                  />
                  {slides[currentSlide].label && (
                    <figcaption className={styles.carouselCaption}>
                      {slides[currentSlide].label}
                    </figcaption>
                  )}
                </motion.figure>
              )}
            </AnimatePresence>

            <div className={styles.carouselFade} aria-hidden="true" />

            {slides.length > 1 && (
              <>
                <button
                  type="button"
                  className={`${styles.carouselBtn} ${styles.prevBtn}`}
                  onClick={prevSlide}
                  aria-label="Show previous highlight"
                >
                  <FiChevronLeft aria-hidden="true" />
                </button>

                <button
                  type="button"
                  className={`${styles.carouselBtn} ${styles.nextBtn}`}
                  onClick={nextSlide}
                  aria-label="Show next highlight"
                >
                  <FiChevronRight aria-hidden="true" />
                </button>

                <div className={styles.carouselIndicators} role="tablist" aria-label="Choose a highlight to display">
                  {slides.map((s, index) => (
                    <button
                      key={index}
                      type="button"
                      role="tab"
                      aria-selected={index === currentSlide}
                      className={`${styles.indicator} ${index === currentSlide ? styles.active : ''}`}
                      onClick={() => goToSlide(index)}
                      aria-label={`Show highlight ${index + 1}`}
                    />
                  ))}
                </div>
              </>
            )}
          </div>
        </motion.div>
      </section>

    </>
  );
};

export default HeroSection;
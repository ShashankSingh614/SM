import { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import styles from './CurvedSlider.module.css';

const CARD_WIDTH = 200;
const GAP = 28;
const SPEED = 0.65;

const CurvedSlider = ({ images, title }) => {
  const trackRef = useRef(null);
  const offsetRef = useRef(0);
  const wrapperRef = useRef(null);

  useEffect(() => {
    let rafId;

    const animate = () => {
      offsetRef.current -= SPEED;

      const track = trackRef.current;
      const wrapper = wrapperRef.current;
      if (!track || !wrapper) return;

      track.style.transform = `translateX(${offsetRef.current}px)`;

      const centerX = wrapper.offsetWidth / 2;

      Array.from(track.children).forEach((item) => {
        const rect = item.getBoundingClientRect();
        const itemCenter = rect.left + rect.width / 2;
        const distance = itemCenter - centerX;

        // OUTWARD ARC (center up, sides down)
        const arcY = Math.pow(distance / 400, 2) * 120;

        // Depth effect
        const scale = Math.max(0.75, 1 - Math.abs(distance) / 1400);
        const opacity = Math.max(0.6, 1 - Math.abs(distance) / 1200);

        item.style.transform = `translateY(${arcY}px) scale(${scale})`;
        item.style.opacity = opacity;
      });

      rafId = requestAnimationFrame(animate);
    };

    rafId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(rafId);
  }, []);

  return (
    <section className={styles.curvedSliderSection}>
      <div className={styles.sliderWrapper} ref={wrapperRef}>
        <div className={styles.sliderTrack} ref={trackRef}>
          {[...images, ...images, ...images].map((src, i) => (
            <div className={styles.sliderItem} key={i}>
              <img src={src} alt="" className={styles.placementImage} />
            </div>
          ))}
        </div>

        <div className={styles.leftFade}></div>
        <div className={styles.rightFade}></div>
      </div>
    </section>
  );
};

CurvedSlider.propTypes = {
  images: PropTypes.array.isRequired,
  title: PropTypes.string.isRequired
};

export default CurvedSlider;
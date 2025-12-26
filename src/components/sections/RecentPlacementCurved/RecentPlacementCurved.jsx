import { useEffect, useRef } from 'react';
import styles from './RecentPlacementCurved.module.css';

const SPEED = 0.7;

const RecentPlacementCurved = () => {
  const trackRef = useRef(null);
  const wrapperRef = useRef(null);
  const offsetRef = useRef(0);

  const images = Array.from(
    { length: 18 },
    (_, i) => `/images/instaPlacements/${i + 1}.jpeg`
  );

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

        // outward arc
        const arcY = Math.pow(distance / 400, 2) * 120;
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
    <section className={styles.section}>
      {/* Header EXACTLY like Testimonials */}
      <div className={styles.sectionHeader}>
        <h2>Recent Placements</h2>
        <span className={styles.gradientLine}></span>
      </div>

      <div className={styles.sliderWrapper} ref={wrapperRef}>
        <div className={styles.sliderTrack} ref={trackRef}>
          {[...images, ...images, ...images].map((src, i) => (
            <div className={styles.sliderItem} key={i}>
              <img src={src} alt={`Placement ${i}`} />
            </div>
          ))}
        </div>

        <div className={styles.leftFade} />
        <div className={styles.rightFade} />
      </div>
    </section>
  );
};

export default RecentPlacementCurved;
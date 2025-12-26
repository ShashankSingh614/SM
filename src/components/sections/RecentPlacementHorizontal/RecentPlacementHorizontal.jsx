import styles from './RecentPlacementHorizontal.module.css';

const RecentPlacementHorizontal = () => {
  const images = Array.from(
    { length: 18 },
    (_, i) => `/images/instaPlacements/${i + 1}.jpeg`
  );

  // Duplicate once for seamless infinite loop
  const duplicatedImages = [...images, ...images];

  return (
    <section className={styles.section}>
      <div className={styles.sectionHeader}>
        <h2>Recent Placements</h2>
      </div>

      <div className={styles.sliderWrapper}>
        <div className={styles.sliderTrack}>
          {duplicatedImages.map((src, i) => (
            <div className={styles.sliderItem} key={i}>
              <img
                src={src}
                alt={`Recent placement ${i % 18 + 1}`}
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RecentPlacementHorizontal;
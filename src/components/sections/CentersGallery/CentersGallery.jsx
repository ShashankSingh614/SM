// Centers Gallery Component - Simple cards showing all centers
import { useState, useEffect, useCallback, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './CentersGallery.module.css';
import { 
  FiEye,
  FiX, 
  FiChevronLeft, 
  FiChevronRight 
} from 'react-icons/fi';

const CentersGallery = () => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [imageLoaded, setImageLoaded] = useState(false);

  const centerImages = useMemo(() => [
    { id: 1, src: '/images/institute/1.jpg', alt: 'Campus view' },
    { id: 2, src: '/images/institute/2.jpg', alt: 'Campus view' },
    { id: 3, src: '/images/institute/3.jpg', alt: 'Campus view' },
    { id: 4, src: '/images/institute/4.jpg', alt: 'Campus view' },
    { id: 5, src: '/images/institute/5.jpg', alt: 'Campus view' },
    { id: 6, src: '/images/institute/6.jpg', alt: 'Campus view' },
    { id: 7, src: '/images/institute/7.jpg', alt: 'Campus view' },
    { id: 8, src: '/images/institute/8.jpg', alt: 'Campus view' },
    { id: 9, src: '/images/institute/9.jpg', alt: 'Campus view' },
    { id: 10, src: '/images/institute/10.jpg', alt: 'Campus view' },
    { id: 11, src: '/images/institute/11.jpg', alt: 'Campus view' },
    { id: 12, src: '/images/institute/12.jpg', alt: 'Campus view' },
    { id: 13, src: '/images/institute/13.jpg', alt: 'Campus view' },
    { id: 14, src: '/images/institute/14.jpg', alt: 'Campus view' },
    { id: 15, src: '/images/institute/15.jpg', alt: 'Campus view' },
    { id: 16, src: '/images/institute/16.jpg', alt: 'Campus view' },
    { id: 17, src: '/images/institute/17.jpg', alt: 'Campus view' },
    { id: 18, src: '/images/institute/18.jpg', alt: 'Campus view' },
    { id: 19, src: '/images/institute/19.jpg', alt: 'Goregaon Center' },
    { id: 20, src: '/images/institute/20.jpg', alt: 'Goregaon Center' },
    { id: 21, src: '/images/institute/21.jpg', alt: 'Malad Center' },
    { id: 22, src: '/images/institute/22.jpg', alt: 'Mulund Center' },
    { id: 23, src: '/images/institute/23.jpg', alt: 'Nalasopara Center' },
    { id: 24, src: '/images/institute/24.jpg', alt: 'Santacruz Center' }
  ], []);

  // Open lightbox with image
  const openLightbox = (image, index) => {
    setCurrentImageIndex(index);
    setCurrentImage(image);
    setImageLoaded(false);
    setLightboxOpen(true);
    document.body.style.overflow = 'hidden';
  };

  // Close lightbox
  const closeLightbox = useCallback(() => {
    setLightboxOpen(false);
    setCurrentImage(null);
    setImageLoaded(false);
    document.body.style.overflow = 'unset';
  }, []);

  // Navigate to next image
  const nextImage = useCallback((e) => {
    e?.stopPropagation();
    setImageLoaded(false);
    setCurrentImageIndex((prevIndex) => {
      const nextIndex = (prevIndex + 1) % centerImages.length;
      setCurrentImage(centerImages[nextIndex]);
      return nextIndex;
    });
  }, [centerImages]);

  // Navigate to previous image
  const prevImage = useCallback((e) => {
    e?.stopPropagation();
    setImageLoaded(false);
    setCurrentImageIndex((prevIndex) => {
      const newIndex = prevIndex === 0 ? centerImages.length - 1 : prevIndex - 1;
      setCurrentImage(centerImages[newIndex]);
      return newIndex;
    });
  }, [centerImages]);

  // Keyboard navigation
  useEffect(() => {
    if (!lightboxOpen) return;

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowRight') nextImage();
      if (e.key === 'ArrowLeft') prevImage();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxOpen, closeLightbox, nextImage, prevImage]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: 'easeOut',
      },
    },
  };

  return (
    <section className={styles.centersGallery}>
      <div className="container">
        <motion.div 
          className={styles.sectionHeader}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2>Our Centers</h2>
          <motion.img
            src="/images/mumbai.png"
            className={styles.headerImage}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            loading="lazy"
          />
        </motion.div>

        <motion.div 
          className={styles.gallery}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {centerImages.map((image, index) => (
            <motion.div 
              key={image.id} 
              className={styles.centerCard}
              variants={itemVariants}
              onClick={() => openLightbox(image, index)}
              whileHover={{ y: -5, scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <div className={styles.imageContainer}>
                <img 
                  src={image.src} 
                  alt={image.alt}
                  loading="lazy"
                />
                <div className={styles.imageOverlay}>
                  <FiEye className={styles.eyeIcon} />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {lightboxOpen && currentImage && (
          <motion.div
            className={styles.lightboxOverlay}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={closeLightbox}
          >
            {/* Close Button */}
            <motion.button
              className={styles.lightboxClose}
              onClick={closeLightbox}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ delay: 0.1 }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <FiX />
            </motion.button>

            {/* Previous Button */}
            {centerImages.length > 1 && (
              <motion.button
                className={`${styles.lightboxNav} ${styles.lightboxPrev}`}
                onClick={prevImage}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ delay: 0.1 }}
                whileHover={{ scale: 1.1, x: -5 }}
                whileTap={{ scale: 0.95 }}
              >
                <FiChevronLeft />
              </motion.button>
            )}

            {/* Next Button */}
            {centerImages.length > 1 && (
              <motion.button
                className={`${styles.lightboxNav} ${styles.lightboxNext}`}
                onClick={nextImage}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ delay: 0.1 }}
                whileHover={{ scale: 1.1, x: 5 }}
                whileTap={{ scale: 0.95 }}
              >
                <FiChevronRight />
              </motion.button>
            )}

            {/* Image Container */}
            <motion.div
              className={styles.lightboxContent}
              onClick={(e) => e.stopPropagation()}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
            >
              {!imageLoaded && (
                <div className={styles.lightboxLoader}>
                  <div className={styles.spinner}></div>
                </div>
              )}
              
              <motion.img
                key={currentImage.id}
                src={currentImage.src}
                alt={currentImage.alt}
                className={styles.lightboxImage}
                initial={{ opacity: 0 }}
                animate={{ opacity: imageLoaded ? 1 : 0 }}
                transition={{ duration: 0.3 }}
                onLoad={() => setImageLoaded(true)}
              />

              {/* Image Info */}
              <motion.div
                className={styles.lightboxInfo}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: imageLoaded ? 1 : 0, y: imageLoaded ? 0 : 20 }}
                transition={{ delay: 0.2 }}
              >
                <h3>{currentImage.alt}</h3>
                <span className={styles.imageCounter}>
                  {currentImageIndex + 1} / {centerImages.length}
                </span>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default CentersGallery;
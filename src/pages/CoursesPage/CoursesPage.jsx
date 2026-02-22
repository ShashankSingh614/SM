// Students Work Page - Showcasing Student Portfolios
import { useState, useEffect, useCallback, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FiSearch, 
  FiEye,
  FiArrowRight,
  FiX, 
  FiChevronLeft, 
  FiChevronRight
} from 'react-icons/fi';
import styles from './CoursesPage.module.css';
import { useSEO } from '../../hooks/useSEO';
import { helmetConfig, structuredData } from '../../utils/helmet';

const CoursesPageContent = () => {
  const [selectedCategory] = useState('All');
  const [searchTerm] = useState('');
  const [expandedCategories, setExpandedCategories] = useState({});
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [currentCategoryImages, setCurrentCategoryImages] = useState([]);
  const [imageLoaded, setImageLoaded] = useState(false);

  // Student Work Categories with actual portfolio data
  const portfolioCategories = useMemo(() => [
    {
      id: 'graphic',
      title: 'Graphic & UI/UX Designing',
      description: 'Showcasing layouts, branding, UI/UX, and packaging design work by our talented students',
      works: [
        { id: 1, image: '/images/img2/gra/1.jpg', title: 'Brand Packaging Design', student: 'Student Portfolio' },
        { id: 2, image: '/images/img2/gra/2.jpg', title: 'Cinematic Poster Design', student: 'Student Portfolio' },
        { id: 3, image: '/images/img2/gra/3.jpg', title: 'Vector Art', student: 'Student Portfolio' },
        { id: 4, image: '/images/img2/gra/4.jpg', title: 'Cinematic Poster Design', student: 'Student Portfolio' },
        { id: 5, image: '/images/img2/gra/5.jpg', title: 'Brand Social Media Layout', student: 'Student Portfolio' },
        { id: 6, image: '/images/img2/gra/6.jpg', title: 'Brand Packaging Design', student: 'Student Portfolio' }
      ],
      moreWorks: [
        { id: 101, image: '/images/img2/gra/7.jpg', title: 'Mobile App UI Design', student: 'Student Portfolio' },
        { id: 102, image: '/images/img2/gra/8.jpg', title: 'Photo Retouching', student: 'Student Portfolio' },
        { id: 103, image: '/images/img2/gra/9.jpg', title: 'Vector Art', student: 'Student Portfolio' },
        { id: 104, image: '/images/img2/gra/10.jpg', title: 'Website Layout Design', student: 'Student Portfolio' },
        { id: 105, image: '/images/img2/gra/11.jpg', title: 'Brand Social Media Layout', student: 'Student Portfolio' },
        { id: 106, image: '/images/img2/gra/12.jpg', title: 'Brand Packaging Design', student: 'Student Portfolio' }
      ]
    },
    {
      id: '3d',
      title: '3D Modelling & Animation',
      description: 'Showcasing stall, interior, exterior, bungalow, and architectural design work by our talented students',
      works: [
        { id: 13, image: '/images/img2/3d/1.jpg', title: 'Exhibition Stall Design', student: 'Student Portfolio' },
        { id: 14, image: '/images/img2/3d/2.jpg', title: 'Exhibition Stall Design', student: 'Student Portfolio' },
        { id: 15, image: '/images/img2/3d/3.jpg', title: 'Living Room Interior Design', student: 'Student Portfolio' },
        { id: 16, image: '/images/img2/3d/4.jpg', title: 'Living Room Interior Design', student: 'Student Portfolio' },
        { id: 17, image: '/images/img2/3d/5.jpg', title: 'Modular Kitchen Interior Design', student: 'Student Portfolio' },
        { id: 18, image: '/images/img2/3d/6.jpg', title: 'Building Architecture Design', student: 'Student Portfolio' }
      ],
      moreWorks: [
        { id: 107, image: '/images/img2/3d/7.jpg', title: 'Residential Bungalow Design', student: 'Student Portfolio' },
        { id: 108, image: '/images/img2/3d/8.jpg', title: 'Corporate Reception Design', student: 'Student Portfolio' },
        { id: 109, image: '/images/img2/3d/9.jpg', title: 'Commercial Parking Design', student: 'Student Portfolio' },
        { id: 110, image: '/images/img2/3d/10.jpg', title: 'Bedroom Interior Design', student: 'Student Portfolio' },
        { id: 111, image: '/images/img2/3d/11.jpg', title: 'Living Room Interior Design', student: 'Student Portfolio' },
        { id: 112, image: '/images/img2/3d/12.jpg', title: 'Modular Kitchen Interior Design', student: 'Student Portfolio' }
      ]
    },
    {
      id: 'motion',
      title: 'Motion Graphics, Video Editing & VFX',
      description: 'Showcasing engaging animations, video projects, and visual effects created by our talented students',
      videos: [
        { id: 19, videoId: '68JZqQIursM', student: 'Student Portfolio' },
        { id: 20, videoId: 'WiQ8_1MafPk', student: 'Student Portfolio' },
        { id: 21, videoId: 'qb53NKJEOY8', student: 'Student Portfolio' },
        { id: 22, videoId: '8r-DeWA6sis', student: 'Student Portfolio' },
        { id: 23, videoId: '1gI4DriWEgg', student: 'Student Portfolio' },
        { id: 24, videoId: 'NF7YdTuNjDc', student: 'Student Portfolio' }
      ],
      moreWorks: [
        { id: 113, videoId: 'C1uzUPeUQx4', student: 'Student Portfolio' },
        { id: 114, videoId: 'ohlXoVDXQCg', student: 'Student Portfolio' },
        { id: 115, videoId: 'Dazby5AsOGU', student: 'Student Portfolio' },
        { id: 116, videoId: '1qd2K5WU9vQ', student: 'Student Portfolio' },
        { id: 117, videoId: 'GQexNiswwKo', student: 'Student Portfolio' },
        { id: 118, videoId: 'S19qSluZnNc', student: 'Student Portfolio' }
      ]
    },
    {
      id: 'web',
      title: 'Web Designing & Development',
      description: 'Showcasing responsive website designs and interactive user interfaces created by our students',
      works: [
        { id: 7, image: '/images/img2/web/1.jpg', title: 'Industrial Services Website', student: 'Student Portfolio' },
        { id: 8, image: '/images/img2/web/2.jpg', title: 'E-Commerce Website', student: 'Student Portfolio' },
        { id: 9, image: '/images/img2/web/3.jpg', title: 'Real Estate Industry Website', student: 'Student Portfolio' },
        { id: 10, image: '/images/img2/web/4.jpg', title: 'Real Estate Industry Website', student: 'Student Portfolio' },
        { id: 11, image: '/images/img2/web/5.jpg', title: 'Healthcare Industry Website', student: 'Student Portfolio' },
        { id: 12, image: '/images/img2/web/6.jpg', title: 'Automotive Industry Website', student: 'Student Portfolio' }
      ],
    }
  ], []);
  
  // Toggle expanded state for categories
  const toggleCategory = (categoryId) => {
    setExpandedCategories(prev => ({
      ...prev,
      [categoryId]: !prev[categoryId]
    }));
  };

  // Open lightbox with image
  const openLightbox = (image, categoryId) => {
    const category = portfolioCategories.find(cat => cat.id === categoryId);
    if (category && category.works) {
      const allImages = [...category.works, ...(category.moreWorks || [])];
      const imageIndex = allImages.findIndex(img => img.id === image.id);
      
      setCurrentCategoryImages(allImages);
      setCurrentImageIndex(imageIndex);
      setCurrentImage(image);
      setImageLoaded(false);
      setLightboxOpen(true);
      document.body.style.overflow = 'hidden';
    }
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
      const nextIndex = (prevIndex + 1) % currentCategoryImages.length;
      setCurrentImage(currentCategoryImages[nextIndex]);
      return nextIndex;
    });
  }, [currentCategoryImages]);

  // Navigate to previous image
  const prevImage = useCallback((e) => {
    e?.stopPropagation();
    setImageLoaded(false);
    setCurrentImageIndex((prevIndex) => {
      const newIndex = prevIndex === 0 ? currentCategoryImages.length - 1 : prevIndex - 1;
      setCurrentImage(currentCategoryImages[newIndex]);
      return newIndex;
    });
  }, [currentCategoryImages]);

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

  const categories = ['All', 'Graphic & UI/UX', 'Web Design', '3D Animation', 'Motion Graphics'];

  // Filter categories based on selection and search
  const filteredCategories = portfolioCategories.filter(category => {
    const matchesCategory = selectedCategory === 'All' || 
                           category.title.toLowerCase().includes(selectedCategory.toLowerCase().replace(' & ', ' ').replace('graphics', ''));
    
    const matchesSearch = category.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         category.description.toLowerCase().includes(searchTerm.toLowerCase());
    
    return matchesCategory && matchesSearch;
  });

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
    <motion.div
      className={styles.coursesPage}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container">
        <div className={styles.pageHeader}>
          <h1>Student Portfolio</h1>
          <p className={styles.pageDescription}>Comprehensive exploration of exceptional creative portfolios and professionally executed projects demonstrating the sophisticated design, animation, and technical capabilities developed by our accomplished students across diverse multimedia specializations and creative disciplines</p>
        </div>
        
        {/* Portfolio Categories */}
        <motion.section 
          className={styles.portfolioSection}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <AnimatePresence mode="wait">
            {filteredCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.id}
                className={styles.portfolioCategory}
                variants={itemVariants}
                layout
              >
                <div className={styles.categoryHeader}>
                  <h2>{category.title}</h2>
                  <p>{category.description}</p>
                </div>

                {/* Image Gallery for Graphic, Web, and 3D */}
                {category.works && (
                  <div
                    className={
                      category.id === 'web'
                        ? `${styles.worksGrid} ${styles.webGrid}`
                        : styles.worksGrid
                    }
                  >
                    {category.works.map((work, index) => (
                      <motion.div
                        key={work.id}
                        className={styles.workCard}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.4, delay: index * 0.1 }}
                        whileHover={{ y: -8, scale: 1.02 }}
                        onClick={() => openLightbox(work, category.id)}
                      >
                        <div
                          className={
                            category.id === 'web'
                              ? `${styles.workImage} ${styles.webImage}`
                              : styles.workImage
                          }
                        >
                          <img src={work.image} alt={work.title} loading="lazy" />
                          <div className={styles.workOverlay}>
                            <div className={styles.imageOverlay}>
                              <FiEye className={styles.eyeIcon} />
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                    
                    {/* Additional works when expanded */}
                    {expandedCategories[category.id] && category.moreWorks && category.moreWorks.map((work, index) => (
                      <motion.div
                        key={work.id}
                        className={styles.workCard}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.4, delay: index * 0.1 }}
                        whileHover={{ y: -8, scale: 1.02 }}
                        onClick={() => openLightbox(work, category.id)}
                      >
                        <div
                          className={
                            category.id === 'web'
                              ? `${styles.workImage} ${styles.webImage}`
                              : styles.workImage
                          }
                        >
                          <img src={work.image} alt={work.title} loading="lazy" />
                          <div className={styles.workOverlay}>
                            <div className={styles.workInfo}>
                              <h4>{work.title}</h4>
                              <p>{work.student}</p>
                            </div>
                            <div className={styles.imageOverlay}>
                              <FiEye className={styles.eyeIcon} />
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                )}

                {/* Video Gallery for Motion Graphics */}
                {category.videos && (
                  <div className={styles.videosGrid}>
                    {category.videos.map((video, index) => (
                      <motion.div
                        key={video.id}
                        className={styles.videoCard}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.4, delay: index * 0.1 }}
                      >
                        <div className={styles.videoWrapper}>
                          <iframe
                            width="100%"
                            height="315"
                            src={`https://www.youtube.com/embed/${video.videoId}`}
                            title={video.title}
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                          ></iframe>
                        </div>
                      </motion.div>
                    ))}

                    {/* Additional video works when expanded */}
                    {expandedCategories[category.id] && category.moreWorks && category.moreWorks.map((video, idx) => (
                      <motion.div
                        key={video.id}
                        className={styles.videoCard}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.4, delay: (category.videos?.length || 0) * 0.1 + idx * 0.1 }}
                      >
                        <div className={styles.videoWrapper}>
                          <iframe
                            width="100%"
                            height="315"
                            src={`https://www.youtube.com/embed/${video.videoId}`}
                            title={video.title || 'Student Work'}
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                          ></iframe>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                )}

                <div className={styles.categoryFooter}>
                  {category.moreWorks && (
                    <button 
                      className={styles.viewMoreBtn}
                      onClick={() => toggleCategory(category.id)}
                    >
                      <span>
                        {expandedCategories[category.id] ? 'View Less' : 'View More'} {category.title}
                      </span>
                      <FiArrowRight className={expandedCategories[category.id] ? styles.rotated : ''} />
                    </button>
                  )}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>

          {filteredCategories.length === 0 && (
            <motion.div 
              className={styles.noResults}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <FiSearch className={styles.noResultsIcon} />
              <h3>No categories found</h3>
              <p>Try adjusting your search terms or filters</p>
            </motion.div>
          )}
        </motion.section>
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
            {currentCategoryImages.length > 1 && (
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
            {currentCategoryImages.length > 1 && (
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
                src={currentImage.image}
                alt={currentImage.title}
                className={styles.lightboxImage}
                initial={{ opacity: 0 }}
                animate={{ opacity: imageLoaded ? 1 : 0 }}
                transition={{ duration: 0.3 }}
                onLoad={() => setImageLoaded(true)}
                loading="lazy"
              />

              {/* Image Info */}
              <motion.div
                className={styles.lightboxInfo}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: imageLoaded ? 1 : 0, y: imageLoaded ? 0 : 20 }}
                transition={{ delay: 0.2 }}
              >
                <h3>{currentImage.title}</h3>
                <p>{currentImage.student}</p>
                <span className={styles.imageCounter}>
                  {currentImageIndex + 1} / {currentCategoryImages.length}
                </span>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default function CoursesPage() {
  useSEO({
    title: helmetConfig.courses.title,
    description: helmetConfig.courses.description,
    keywords: helmetConfig.courses.keywords,
    canonical: helmetConfig.courses.canonical,
    structuredData: structuredData.courseSchema
  });

  return <CoursesPageContent />;
}
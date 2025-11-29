// Students Work Page - Showcasing Student Portfolios
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FiSearch, 
  FiEye,
  FiArrowRight,
} from 'react-icons/fi';
import styles from './CoursesPage.module.css';

const CoursesPage = () => {
  const [selectedCategory] = useState('All');
  const [searchTerm] = useState('');
  const [expandedCategories, setExpandedCategories] = useState({});

  // Toggle expanded state for categories
  const toggleCategory = (categoryId) => {
    setExpandedCategories(prev => ({
      ...prev,
      [categoryId]: !prev[categoryId]
    }));
  };

  // Student Work Categories with actual portfolio data
  const portfolioCategories = [
    {
      id: 'graphic',
      title: 'Graphic & UI/UX Designing',
      description: 'Creative designs, branding, and user interface work by our talented students',
      works: [
        { id: 1, image: '/images/img2/gra/1.jpg', title: 'Brand Identity Design', student: 'Student Portfolio' },
        { id: 2, image: '/images/img2/gra/2.jpg', title: 'UI/UX Design Project', student: 'Student Portfolio' },
        { id: 3, image: '/images/img2/gra/3.jpg', title: 'Logo & Branding', student: 'Student Portfolio' },
        { id: 4, image: '/images/img2/gra/4.jpg', title: 'Print Design Work', student: 'Student Portfolio' },
        { id: 5, image: '/images/img2/gra/5.jpg', title: 'Digital Artwork', student: 'Student Portfolio' },
        { id: 6, image: '/images/img2/gra/6.jpg', title: 'Creative Design', student: 'Student Portfolio' }
      ],
      moreWorks: [
        { id: 101, image: '/images/img2/gra/7.jpg', title: 'Advanced Graphic Design', student: 'Student Portfolio' },
        { id: 102, image: '/images/img2/gra/8.jpg', title: 'Brand Campaign Design', student: 'Student Portfolio' },
        { id: 103, image: '/images/img2/gra/9.jpg', title: 'Digital Marketing Design', student: 'Student Portfolio' },
        { id: 104, image: '/images/img2/gra/10.jpg', title: 'Corporate Identity', student: 'Student Portfolio' },
        { id: 105, image: '/images/img2/gra/11.jpg', title: 'Package Design', student: 'Student Portfolio' },
        { id: 106, image: '/images/img2/gra/12.jpg', title: 'Poster Design', student: 'Student Portfolio' }
      ]
    },
    {
      id: '3d',
      title: '3D Modelling & Animation',
      description: '3D models, animations, and visual effects showcasing technical and artistic skills',
      works: [
        { id: 13, image: '/images/img2/3d/1.jpg', title: '3D Character Design', student: 'Student Portfolio' },
        { id: 14, image: '/images/img2/3d/2.jpg', title: 'Architectural Visualization', student: 'Student Portfolio' },
        { id: 15, image: '/images/img2/3d/3.jpg', title: 'Product Modeling', student: 'Student Portfolio' },
        { id: 16, image: '/images/img2/3d/4.jpg', title: '3D Animation Scene', student: 'Student Portfolio' },
        { id: 17, image: '/images/img2/3d/5.jpg', title: 'Environment Design', student: 'Student Portfolio' },
        { id: 18, image: '/images/img2/3d/6.jpg', title: 'Visual Effects', student: 'Student Portfolio' }
      ],
      moreWorks: [
        { id: 113, image: '/images/img2/3d/7.jpg', title: 'Game Asset Design', student: 'Student Portfolio' },
        { id: 114, image: '/images/img2/3d/8.jpg', title: 'Interior Visualization', student: 'Student Portfolio' },
        { id: 115, image: '/images/img2/3d/9.jpg', student: 'Student Portfolio' },
        { id: 116, image: '/images/img2/3d/10.jpg', title: 'Organic Modeling', student: 'Student Portfolio' },
        { id: 117, image: '/images/img2/3d/11.jpg', title: 'Lighting Study', student: 'Student Portfolio' },
        { id: 118, image: '/images/img2/3d/12.jpg', title: 'Motion Graphics', student: 'Student Portfolio' }
      ]
    },
    {
      id: 'motion',
      title: 'Motion Graphics, Video Editing & VFX',
      description: 'Dynamic animations, video projects, and visual effects created by our students',
      videos: [
        { id: 19, videoId: 'C1uzUPeUQx4', student: 'Student Portfolio' },
        { id: 20, videoId: 'ohlXoVDXQCg', student: 'Student Portfolio' },
        { id: 21, videoId: 'Dazby5AsOGU', student: 'Student Portfolio' },
        { id: 22, videoId: '1qd2K5WU9vQ', student: 'Student Portfolio' },
        { id: 23, videoId: 'VdScuMrT5h0', student: 'Student Portfolio' },
        { id: 24, videoId: 'S19qSluZnNc', student: 'Student Portfolio'}
      ]
    },
    {
      id: 'web',
      title: 'Web Designing & Development',
      description: 'Responsive websites, web applications, and digital solutions created by students',
      works: [
        { id: 7, image: '/images/img2/web/1.jpg', title: 'E-commerce Website', student: 'Student Portfolio' },
        { id: 8, image: '/images/img2/web/2.jpg', title: 'Corporate Website', student: 'Student Portfolio' },
        { id: 9, image: '/images/img2/web/3.jpg', title: 'Portfolio Website', student: 'Student Portfolio' },
        { id: 10, image: '/images/img2/web/4.jpg', title: 'Web Application', student: 'Student Portfolio' },
        { id: 11, image: '/images/img2/web/5.jpg', title: 'Landing Page Design', student: 'Student Portfolio' },
        { id: 12, image: '/images/img2/web/6.jpg', title: 'Responsive Design', student: 'Student Portfolio' }
      ],
    }
  ];

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
          <h1>Students Work</h1>
          <p>Explore the creative portfolios and projects created by our talented students across various multimedia disciplines</p>
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
                      >
                        <div
                          className={
                            category.id === 'web'
                              ? `${styles.workImage} ${styles.webImage}`
                              : styles.workImage
                          }
                        >
                          <img src={work.image} alt={work.title} />
                          <div className={styles.workOverlay}>
                            <div className={styles.workInfo}>
                              <h4>{work.title}</h4>
                              <p>{work.student}</p>
                            </div>
                            <button className={styles.viewBtn}>
                              <FiEye />
                            </button>
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
                      >
                        <div
                          className={
                            category.id === 'web'
                              ? `${styles.workImage} ${styles.webImage}`
                              : styles.workImage
                          }
                        >
                          <img src={work.image} alt={work.title} />
                          <div className={styles.workOverlay}>
                            <div className={styles.workInfo}>
                              <h4>{work.title}</h4>
                              <p>{work.student}</p>
                            </div>
                            <button className={styles.viewBtn}>
                              <FiEye />
                            </button>
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
    </motion.div>
  );
};

export default CoursesPage;
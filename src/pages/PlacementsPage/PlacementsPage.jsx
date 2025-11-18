// Modern Placements Page with Simple Professional Cards
import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FiStar,
  FiSearch,
  FiChevronLeft,
  FiChevronRight
} from 'react-icons/fi';
import { ALL_PLACEMENT_STUDENTS } from '../../data/placementStudents';
import PlacementCard from '../../components/ui/PlacementCard/PlacementCard';
import PartnersSection from '../../components/sections/PartnersSection/PartnersSection';
import styles from './PlacementsPage.module.css';

const PlacementsPage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedFilter] = useState('All');
  const [searchTerm] = useState('');
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const alumniSectionRef = useRef(null);
  
  const studentsPerPage = 12;

  // Filter students based on role and search
  const filteredStudents = ALL_PLACEMENT_STUDENTS.filter(student => {
    const matchesSearch = student.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         student.role.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         student.location.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesFilter = selectedFilter === 'All' || 
                         student.role.toLowerCase().includes(selectedFilter.toLowerCase());
    
    return matchesSearch && matchesFilter;
  });

  // Get current page students
  const totalFilteredPages = Math.ceil(filteredStudents.length / studentsPerPage);
  const startIndex = (currentPage - 1) * studentsPerPage;
  const currentStudents = filteredStudents.slice(startIndex, startIndex + studentsPerPage);

  // Reset to page 1 when filters change
  useEffect(() => {
    setCurrentPage(1);
  }, [selectedFilter, searchTerm]);

  const testimonials = [
    {
      id: 1,
      name: 'Shrutika Dudhare',
      role: 'Graphic Designer',
      content: 'Shankar Multimedia gave me the skills and confidence to excel in graphic design. The practical training and placement support were exceptional.',
      image: '/images/place/0Shrutika Dudhare- Gra - Vile Parle.jpg',
      rating: 5
    },
    {
      id: 2,
      name: 'Bharat Bhadwalkar',
      role: '3D Designer at TATA Elxsi',
      content: 'The 3D animation course was comprehensive and industry-focused. Now I\'m working on exciting projects in the animation industry.',
      image: '/images/place/5BHARAT-ASHOK-BHADWALKAR-Santacruz-3d.jpg',
      rating: 5
    },
    {
      id: 3,
      name: 'Sumit Gawade',
      role: 'Frontend Developer',
      content: 'The web development program prepared me well for the industry. The placement team helped me secure a great position.',
      image: '/images/place/7Sumit-Gawade-Andheri (W).jpg',
      rating: 5
    }
  ];

  
 
  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0.1,
      },
    },
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
    if (alumniSectionRef.current) {
      alumniSectionRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const renderPagination = () => {
    if (totalFilteredPages <= 1) return null;

    const pages = [];
    const maxVisiblePages = 5;
    
    let startPage = Math.max(1, currentPage - Math.floor(maxVisiblePages / 2));
    let endPage = Math.min(totalFilteredPages, startPage + maxVisiblePages - 1);
    
    if (endPage - startPage + 1 < maxVisiblePages) {
      startPage = Math.max(1, endPage - maxVisiblePages + 1);
    }

    // Previous button
    if (currentPage > 1) {
      pages.push(
        <button
          key="prev"
          className={styles.pageBtn}
          onClick={() => handlePageChange(currentPage - 1)}
        >
          <FiChevronLeft />
        </button>
      );
    }

    // Page numbers
    for (let i = startPage; i <= endPage; i++) {
      pages.push(
        <button
          key={i}
          className={`${styles.pageBtn} ${i === currentPage ? styles.active : ''}`}
          onClick={() => handlePageChange(i)}
        >
          {i}
        </button>
      );
    }

    // Next button
    if (currentPage < totalFilteredPages) {
      pages.push(
        <button
          key="next"
          className={styles.pageBtn}
          onClick={() => handlePageChange(currentPage + 1)}
        >
          <FiChevronRight />
        </button>
      );
    }

    return pages;
  };

  return (
    <motion.div
      className={styles.placementsPage}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container">
        <div className={styles.pageHeader}>
          <h1>Placements</h1>
          <p>Discover the success stories of our graduates who have secured excellent positions in leading companies worldwide</p>
        </div>

        {/* Testimonials Section */}
        <motion.section 
          className={styles.testimonialsSection}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <h2>Success Stories</h2>
          <div className={styles.testimonialContainer}>
            <AnimatePresence mode="wait">
              <motion.div
                key={currentTestimonial}
                className={styles.testimonial}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
              >
                <div className={styles.testimonialContent}>
                  <div className={styles.testimonialText}>
                    <p>"{testimonials[currentTestimonial].content}"</p>
                    <div className={styles.testimonialRating}>
                      {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                        <FiStar key={i} className={styles.star} />
                      ))}
                    </div>
                  </div>
                  <div className={styles.testimonialAuthor}>
                    <img 
                      src={testimonials[currentTestimonial].image} 
                      alt={testimonials[currentTestimonial].name}
                    />
                    <div>
                      <h4>{testimonials[currentTestimonial].name}</h4>
                      <p>{testimonials[currentTestimonial].role}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
            
            <div className={styles.testimonialIndicators}>
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  className={`${styles.indicator} ${index === currentTestimonial ? styles.active : ''}`}
                  onClick={() => setCurrentTestimonial(index)}
                />
              ))}
            </div>
          </div>
        </motion.section>

        

        {/* Students Gallery */}
        <motion.section 
          ref={alumniSectionRef}
          className={styles.studentsSection}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <h2>Our Successful Alumni</h2>
          
          <AnimatePresence mode="wait">
            <motion.div 
              key={`${currentPage}-${selectedFilter}-${searchTerm}`}
              className={styles.studentsGrid}
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
            >
              {currentStudents.map((student, index) => (
                <PlacementCard 
                  key={student.id} 
                  student={student} 
                  index={index}
                />
              ))}

              <motion.div 
                className={`${styles.studentCard} ${styles.moreCard}`}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 0.2 }}
              >
                <div className={styles.moreCardContent}>
                  <span>& many more...</span>
                </div>
              </motion.div>
            </motion.div>
          </AnimatePresence>

          {/* Pagination */}
          {totalFilteredPages > 1 && (
            <div className={styles.pagination}>
              {renderPagination()}
            </div>
          )}

          {filteredStudents.length === 0 && (
            <motion.div 
              className={styles.noResults}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <FiSearch className={styles.noResultsIcon} />
              <h3>No students found</h3>
              <p>Try adjusting your search terms or filters</p>
            </motion.div>
          )}
        </motion.section>

      </div>
      
      <PartnersSection />
    </motion.div>
  );
};

export default PlacementsPage;
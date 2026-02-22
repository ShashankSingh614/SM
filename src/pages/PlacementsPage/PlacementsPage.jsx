import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiSearch, FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import ALL_PLACEMENT_STUDENTS from '../../data/placementStudents';
import PlacementCard from '../../components/ui/PlacementCard/PlacementCard';
import PartnersSection from '../../components/sections/PartnersSection/PartnersSection';
import styles from './PlacementsPage.module.css';
// FIXED: Named imports
import { useSEO } from '../../hooks/useSEO';
import { helmetConfig } from '../../utils/helmet';
import TestimonialsSection from '../../components/sections/TestimonialsSection/TestimonialsSection';
import RecentPlacementSlider from '../../components/sections/RecentPlacementSlider/RecentPlacementSlider'; // NEW IMPORT

const PlacementsPageContent = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedFilter, setSelectedFilter] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');
  const alumniSectionRef = useRef(null);
  const studentsPerPage = 12;

  // Filter students based on role and search
  const filteredStudents = ALL_PLACEMENT_STUDENTS.filter(student => {
    const matchesSearch = 
      student.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
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

  const handlePageChange = (page) => {
    setCurrentPage(page);
    if (alumniSectionRef.current) {
      alumniSectionRef.current.scrollIntoView({ 
        behavior: 'smooth', 
        block: 'start' 
      });
    }
  };

  const renderPagination = () => {
    if (totalFilteredPages <= 1) return null;

    const pages = [];
    const maxVisiblePages = 5;
    let startPage = Math.max(1, currentPage - Math.floor(maxVisiblePages / 2));
    let endPage = Math.min(totalFilteredPages, startPage + maxVisiblePages - 1);

    if (endPage - startPage + 1 > maxVisiblePages) {
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
        <RecentPlacementSlider />
        
        <TestimonialsSection />

        {/* Students Gallery */}
        <motion.section 
          ref={alumniSectionRef}
          className={styles.studentsSection}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2>Our Successful Alumni</h2>

          <AnimatePresence mode="wait">
            <motion.div 
              key={`${currentPage}-${selectedFilter}-${searchTerm}`}
              className={styles.studentsGrid}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              {currentStudents.map((student, index) => (
                <PlacementCard 
                  key={student.id}
                  student={student}
                  index={index}
                />
              ))}

              {currentPage >= totalFilteredPages && filteredStudents.length === 0 ? (
                <div className={`${styles.studentCard} ${styles.moreCard}`}>
                  <div className={styles.moreCardContent}>
                    <h3>Many More Success Stories</h3>
                  </div>
                </div>
              ) : null}
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

        <PartnersSection />
      </div>
    </motion.div>
  );
};

export default function PlacementsPage() {
  // FIXED: Correct helmetConfig.placements usage
  useSEO({
    title: helmetConfig.placements.title,
    description: helmetConfig.placements.description,
    keywords: helmetConfig.placements.keywords,
    canonical: helmetConfig.placements.canonical
  });

  return <PlacementsPageContent />;
}
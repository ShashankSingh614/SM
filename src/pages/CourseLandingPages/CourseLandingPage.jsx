import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiPlus, FiMinus, FiCheckSquare } from 'react-icons/fi';
import styles from './CourseLandingPage.module.css';
import TestimonialsSection from '../../components/sections/TestimonialsSection/TestimonialsSection';
import RecentPlacementSlider from '../../components/sections/RecentPlacementSlider/RecentPlacementSlider';
import { useParams } from 'react-router-dom';
import { coursesConfig } from './CoursePagesConfig';

const CourseLandingPage = () => {
  const { courseSlug } = useParams();
  const [expandedSection, setExpandedSection] = useState(0);

  const courseData = coursesConfig.find(course => course.slug === courseSlug);

  if (!courseData) {
    return <div className={styles.notFound}><p>Course not found</p></div>;
  }

  const toggleSection = (sectionId) => {
    setExpandedSection(expandedSection === sectionId ? null : sectionId);
  };

  return (
    <main className={styles.coursePageContainer} style={{ userSelect: 'text', WebkitUserSelect: 'text' }}>
      {/* Hero Section */}
      <section className={styles.heroSection}>
        <h1 className={styles.mainHeading}>
          {courseData.h1}
        </h1>
        <p className={styles.introText}>
          {courseData.intro}
        </p>
      </section>

      {/* Portfolio Showcase */}
      <section className={styles.portfolioSection}>
        <h2 className={styles.sectionHeading}>Student Portfolio Work - {courseData.title.split('DIPLOMA IN ')[1]}</h2>
        <p className={styles.sectionDesc}>
          Explore outstanding portfolio pieces from recent graduates demonstrating mastery in all course modules:
        </p>
        <ul className={styles.portfolioList}>
          {courseData.portfolioItems.map((item, idx) => (
            <li key={idx}>
              <strong>{item.title}:</strong> {item.desc}
            </li>
          ))}
        </ul>
      </section>

      {/* CTA Section */}
      <section className={styles.ctaSection}>
        <p className={styles.ctaText}>
          <strong>Enroll Now - Limited Seats Available</strong> in our premium {courseData.duration} diploma program. Join hundreds of successful graduates launching careers at top studios and companies across Mumbai and India. <strong>Schedule your consultation today</strong> to discuss your creative journey and placement pathway with our expert counselors.
        </p>
      </section>

      {/* Course Curriculum */}
      <section className={styles.courseDetailsSection}>
        <h2 className={styles.sectionHeading}>Comprehensive Course Curriculum & Training Details</h2>
        <div className={styles.courseInfo}>
          <div className={styles.courseHeader}>
            <h3>{courseData.title}</h3>
            <div className={styles.courseMeta}>
              <span className={styles.duration}><strong>Duration:</strong> {courseData.duration}</span>
            </div>
          </div>

          {/* Software Tools */}
          <div className={styles.softwaresContainer}>
            <h4>Professional Industry Tools You'll Master:</h4>
            <div className={styles.softwaresList}>
              {courseData.softwares.map((software, idx) => (
                <span key={idx} className={styles.softwareBadge}>
                  <FiCheckSquare /> {software}
                </span>
              ))}
            </div>
          </div>

          {/* Curriculum Accordion */}
          <div className={styles.curriculumAccordion}>
            <h4>Detailed Learning Modules:</h4>
            {courseData.curriculum.map((section, idx) => (
              <div key={idx} className={styles.courseItem}>
                <button
                  className={styles.courseButton}
                  onClick={() => toggleSection(idx)}
                >
                  <span className={styles.courseTitle}>{section.title}</span>
                  <span className={styles.courseIcon}>
                    {expandedSection === idx ? <FiMinus /> : <FiPlus />}
                  </span>
                </button>

                <AnimatePresence>
                  {expandedSection === idx && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className={styles.courseContent}
                    >
                      <ul className={styles.skillsList}>
                        {section.skills.map((skill, skillIdx) => (
                          <li key={skillIdx}>
                            <FiCheckSquare className={styles.checkIcon} />
                            {skill}
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section Component- displays all student videos */}
      <TestimonialsSection />

      {/* Placements Slider Component */}
      <RecentPlacementSlider />

      {/* Final CTA */}
      <section className={styles.finalCtaSection}>
        <h2>Start Your Career in {courseData.title.split('DIPLOMA IN ')[1]}</h2>
        <p>With Shankar Multimedia's 36+ years of excellence, ISO 9001:2015 certification, and 100% job placement guarantee, your success is assured. Enroll today in our next batch and transform your passion into a thriving career.</p>
      </section>
    </main>
  );
};

export default CourseLandingPage;

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiPlus, FiMinus, FiCheckSquare } from 'react-icons/fi';
import { Helmet } from 'react-helmet-async';
import styles from './CourseLandingPage.module.css';
import accordionStyles from '../../components/sections/CoursesAccordion/CoursesAccordion.module.css';
import { useParams } from 'react-router-dom';
import { coursesConfig } from './CoursePagesConfig';
import { generateCourseSchema } from './courseSchema';

const CourseLandingPage = () => {
  const { courseSlug } = useParams();
  const [expandedCourse, setExpandedCourse] = useState(courseSlug);

  const courseData = coursesConfig.find(course => course.slug === courseSlug);

  if (!courseData) {
    return <div className={styles.notFound}><p>Course not found</p></div>;
  }

  const toggleCourse = (courseId) => {
    setExpandedCourse(expandedCourse === courseId ? null : courseId);
  };

  // Generate structured data for AI crawlers and search engines
  const courseSchema = generateCourseSchema(courseData);

  // Batch timings - same as homepage
  const batchTimings = [
    'Monday To Saturday 8am To 9pm',
    'Sunday 9am To 2pm',
    'For students above 14 years',
  ];

  return (
    <>
      <Helmet>
        <title>Graphic Design Course in Mumbai with Portfolio & Placement Support | Shankar Multimedia</title>
        <meta name="description" content="Join Shankar Multimedia's Graphic Design Course in Mumbai. Learn Adobe tools, build a creative portfolio, and get practical training with placement support." />
        <meta name="keywords" content="Graphic Design Course in Mumbai, Graphic Design Institute in Mumbai, Graphic Design Course with Placement in Mumbai, Graphic Design Classes in Mumbai, Graphic Design Portfolio Course" />
        <link rel="canonical" href={`https://shankarmultimedia.com/course/${courseData.slug}`} />
        
        {/* Open Graph for Social Sharing */}
        <meta property="og:title" content="Graphic Design Course in Mumbai with Portfolio & Placement Support | Shankar Multimedia" />
        <meta property="og:description" content="Join Shankar Multimedia's Graphic Design Course in Mumbai. Learn Adobe tools, build a creative portfolio, and get practical training with placement support." />
        <meta property="og:url" content={`https://shankarmultimedia.com/course/${courseData.slug}`} />
        <meta property="og:type" content="website" />
        
        {/* JSON-LD Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify(courseSchema)}
        </script>
      </Helmet>

      <section className={accordionStyles.coursesSection}>
        <div className="container">
          <motion.div 
            className={accordionStyles.sectionHeader}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 style={{ color: '#ffffff' }}>{courseData.h1}</h1>
            <p className={accordionStyles.sectionDescription} style={{ color: '#f5f5f5' }}>
              {courseData.intro}
            </p>
            
            {courseData.courseOverview && (
              <p className={accordionStyles.sectionDescription} style={{ marginTop: '1rem', color: '#f5f5f5' }}>
                {courseData.courseOverview}
              </p>
            )}
            
            {courseData.whatYouWillLearn && (
              <div style={{ marginTop: '1.5rem', color: '#ffffff' }}>
                <h3 style={{ fontSize: '1.25rem', fontWeight: '600', marginBottom: '0.75rem', color: '#ffffff' }}>What You Will Learn</h3>
                <ul style={{ listStyle: 'disc', paddingLeft: '1.5rem', lineHeight: '1.8', color: '#f5f5f5' }}>
                  {courseData.whatYouWillLearn.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              </div>
            )}
            
            {courseData.portfolioText && (
              <div style={{ marginTop: '1.5rem', padding: '1.5rem', background: '#f5f5f5', borderRadius: '8px', border: '1px solid #e0e0e0' }}>
                <h3 style={{ fontSize: '1.25rem', fontWeight: '600', marginBottom: '0.75rem', color: '#212121' }}>Portfolio Building</h3>
                <p style={{ lineHeight: '1.8', color: '#424242', margin: 0 }}>{courseData.portfolioText}</p>
              </div>
            )}
            
            {courseData.careerOutcomes && (
              <div style={{ marginTop: '1.5rem', padding: '1.5rem', background: '#fff9e6', borderRadius: '8px', border: '1px solid #ffd700' }}>
                <h3 style={{ fontSize: '1.25rem', fontWeight: '600', marginBottom: '0.75rem', color: '#212121' }}>Career Outcomes</h3>
                <p style={{ lineHeight: '1.8', color: '#424242', margin: 0 }}>{courseData.careerOutcomes}</p>
              </div>
            )}
            
            {courseData.ctaText && (
              <div style={{ marginTop: '1.5rem', padding: '1.5rem', background: 'linear-gradient(135deg, #D32F2F 0%, #B71C1C 100%)', borderRadius: '8px', color: 'white', textAlign: 'center', boxShadow: '0 4px 6px rgba(0,0,0,0.1)' }}>
                <p style={{ fontSize: '1.125rem', fontWeight: '600', margin: 0, lineHeight: '1.6' }}>{courseData.ctaText}</p>
              </div>
            )}
          </motion.div>

          <div className={accordionStyles.accordionContainer}>
            <motion.div
              className={`${accordionStyles.courseAccordion} ${accordionStyles[courseData.className]}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div 
                className={accordionStyles.courseHeader}
                onClick={() => toggleCourse(courseData.slug)}
              >
                <h2 className={accordionStyles.courseTitle}>{courseData.title}</h2>
                <div className={accordionStyles.expandIcon}>
                  {expandedCourse === courseData.slug ? <FiMinus /> : <FiPlus />}
                </div>
              </div>

              <AnimatePresence>
                {expandedCourse === courseData.slug && (
                  <motion.div
                    className={accordionStyles.courseContent}
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.5, ease: 'easeInOut' }}
                  >
                    <div className={accordionStyles.courseDetails}>
                      <div className={accordionStyles.courseRow}>
                        {/* Software & Duration Column */}
                        <div className={accordionStyles.courseColumn}>
                          <div className={accordionStyles.detailSection}>
                            <h3 className={accordionStyles.sectionTitle}>SOFTWARES COVERED</h3>
                            <div className={accordionStyles.softwareList}>
                              {courseData.softwares.map((software, idx) => (
                                <p key={idx}>
                                  <FiCheckSquare className={accordionStyles.checkIcon} />
                                  {software}
                                </p>
                              ))}
                            </div>
                          </div>

                          <div className={accordionStyles.detailSection}>
                            <h3 className={accordionStyles.sectionTitle}>DURATION</h3>
                            <div className={accordionStyles.durationList}>
                              <p>
                                <FiCheckSquare className={accordionStyles.checkIcon} />
                                Duration: {courseData.duration}
                              </p>
                            </div>
                          </div>

                          <div className={accordionStyles.detailSection}>
                            <h3 className={accordionStyles.sectionTitle}>Batch Timings</h3>
                            {batchTimings.map((timing, idx) => (
                              <p key={idx} className={accordionStyles.timingItem}>
                                {timing.includes('Monday') || timing.includes('Sunday') || timing.includes('above') ? (
                                  <>
                                    <FiCheckSquare className={accordionStyles.checkIcon} />
                                    {timing}
                                  </>
                                ) : (
                                  <span className={accordionStyles.timingDetail}>{timing}</span>
                                )}
                              </p>
                            ))}
                          </div>
                        </div>

                        {/* Course Sections - Split into 2 columns */}
                        <div className={accordionStyles.courseColumn}>
                          {courseData.curriculum.filter((_, idx) => idx % 2 === 0).map((section, sectionIdx) => (
                            <div key={sectionIdx} className={accordionStyles.detailSection}>
                              <h3 className={accordionStyles.sectionTitle}>{section.title}</h3>
                              <div className={accordionStyles.skillsList}>
                                {section.skills.map((skill, skillIdx) => (
                                  <p key={skillIdx}>
                                    <FiCheckSquare className={accordionStyles.checkIcon} />
                                    {skill}
                                  </p>
                                ))}
                              </div>
                            </div>
                          ))}
                        </div>

                        <div className={accordionStyles.courseColumn}>
                          {courseData.curriculum.filter((_, idx) => idx % 2 === 1).map((section, sectionIdx) => (
                            <div key={sectionIdx} className={accordionStyles.detailSection}>
                              <h3 className={accordionStyles.sectionTitle}>{section.title}</h3>
                              <div className={accordionStyles.skillsList}>
                                {section.skills.map((skill, skillIdx) => (
                                  <p key={skillIdx}>
                                    <FiCheckSquare className={accordionStyles.checkIcon} />
                                    {skill}
                                  </p>
                                ))}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CourseLandingPage;

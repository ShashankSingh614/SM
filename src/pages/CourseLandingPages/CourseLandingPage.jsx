import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import { FiPlus, FiMinus, FiCheckSquare, FiArrowRight, FiStar, FiBriefcase, FiAward, FiUsers, FiClock } from 'react-icons/fi';
import { Helmet } from 'react-helmet-async';
import PropTypes from 'prop-types';
import styles from './CourseLandingPage.module.css';
import TestimonialsSection from '../../components/sections/TestimonialsSection/TestimonialsSection';
import RecentPlacementSlider from '../../components/sections/RecentPlacementSlider/RecentPlacementSlider';
import { useParams } from 'react-router-dom';
import { coursesConfig } from './CoursePagesConfig';
import { generateCourseSchema } from './courseSchema';
import PartnersSection from '../../components/sections/PartnersSection/PartnersSection';

/* ─── Fade-in wrapper used for scroll-triggered reveals ─── */
const Reveal = ({ children, delay = 0, className = '' }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });
  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, y: 32 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
};

Reveal.propTypes = {
  children: PropTypes.node,
  delay: PropTypes.number,
  className: PropTypes.string,
};

/* ─── Animated counter for stat numbers ─── */
const Counter = ({ target, suffix = '' }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const step = Math.ceil(target / 40);
    const timer = setInterval(() => {
      start += step;
      if (start >= target) { setCount(target); clearInterval(timer); }
      else setCount(start);
    }, 30);
    return () => clearInterval(timer);
  }, [isInView, target]);
  return <span ref={ref}>{count}{suffix}</span>;
};

Counter.propTypes = {
  target: PropTypes.number.isRequired,
  suffix: PropTypes.string,
};

/* ══════════════════════════════════════════════════════════ */

const CourseLandingPage = () => {
  const { courseSlug } = useParams();
  const [expandedSection, setExpandedSection] = useState(0);
  const [expandedFaq, setExpandedFaq] = useState(null);

  const courseData = coursesConfig.find(c => c.slug === courseSlug);

  if (!courseData) {
    return <div className={styles.notFound}><p>Course not found</p></div>;
  }

  const toggleSection = (idx) => {
    setExpandedSection(expandedSection === idx ? null : idx);
  };

  const toggleFaq = (id) => {
    setExpandedFaq(expandedFaq === id ? null : id);
  };

  const courseSchema = generateCourseSchema(courseData);
  // Derive a short display title: everything after "DIPLOMA IN " or "Diploma in "
  const courseTitle =
    courseData.title.replace(/diploma in /i, '').replace(/advanced /i, '').trim();

  // Stats for the trust bar
  const stats = [
    { icon: <FiAward />, value: 36, suffix: '+', label: 'Years of Excellence' },
    { icon: <FiBriefcase />, value: 100, suffix: '%', label: 'Job Placement' },
    { icon: <FiClock />, value: parseInt(courseData.duration), suffix: ' Months', label: 'Course Duration' },
  ];

  return (
    <>
      <Helmet>
        {/* Primary SEO title – keyword-rich, captures "near me", "after 12th", "in Mumbai" */}
        <title>{courseData.h1} | Best Institute in Mumbai | Shankar Multimedia</title>
        <meta name="description" content={courseData.intro.substring(0, 160)} />
        <meta
          name="keywords"
          content={`best ${courseTitle} course near me,${courseTitle} institute with placement Mumbai,${courseTitle} course fees Mumbai,${courseTitle} course duration Mumbai,${courseTitle} certification course Mumbai,${courseTitle} diploma course with placement,${courseTitle} training institute near me,top-rated ${courseTitle} classes Mumbai,affordable ${courseTitle} course Mumbai,professional ${courseTitle} institute near me,weekend ${courseTitle} classes near me,government recognized ${courseTitle} course Mumbai,job-oriented ${courseTitle} training institute Mumbai,advanced ${courseTitle} diploma Mumbai 2026,best ${courseTitle} academy in Mumbai,,Shankar Multimedia`}
        />
        <link rel="canonical" href={`https://shankarmultimedia.com/course/${courseData.slug}`} />

        {/* Open Graph */}
        <meta property="og:title" content={`${courseData.h1} | Shankar Multimedia`} />
        <meta property="og:description" content={courseData.intro.substring(0, 160)} />
        <meta property="og:url" content={`https://shankarmultimedia.com/course/${courseData.slug}`} />
        <meta property="og:type" content="website" />

        {/* JSON-LD */}
        <script type="application/ld+json">{JSON.stringify(courseSchema)}</script>
      </Helmet>

      <main className={styles.page}>

        {/* ── 1. HERO ────────────────────────────────────────────── */}
        <section className={styles.hero}>
          <div className={styles.heroInner}>
            {/* Eyebrow */}
            <motion.p
              className={styles.eyebrow}
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Mumbai's #1 Multimedia Institute · ISO 9001:2015 Certified · 36+ Years
            </motion.p>

            {/* H1 — keyword-rich, renders large */}
            <motion.h1
              className={styles.heroHeading}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              {courseData.h1}
            </motion.h1>

            {/* Sub-description */}
            <motion.p
              className={styles.heroDesc}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.22 }}
            >
              {courseData.intro}
            </motion.p>

            {/* CTA buttons */}
            <motion.div
              className={styles.heroCtas}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.34 }}
            >
              <a href="/contact" className={styles.btnPrimary}>
                Book Free Counselling <FiArrowRight />
              </a>
              <a href="#curriculum" className={styles.btnOutline}>
                View Curriculum
              </a>
            </motion.div>

            {/* Software pills */}
            <motion.div
              className={styles.softwarePills}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.46 }}
            >
              {(courseData.softwares || []).map((s, i) => (
                <span key={i} className={styles.pill}>{s}</span>
              ))}
            </motion.div>
          </div>

          {/* Decorative gradient orbs */}
          <div className={styles.orb1} aria-hidden="true" />
          <div className={styles.orb2} aria-hidden="true" />
        </section>

        {/* ── 2. TRUST / STATS BAR ───────────────────────────────── */}
        <section className={styles.statsBar}>
          <div className={styles.statsInner}>
            {stats.map((s, i) => (
              <Reveal key={i} delay={i * 0.1} className={styles.statItem}>
                <span className={styles.statIcon}>{s.icon}</span>
                <strong className={styles.statValue}>
                  <Counter target={s.value} suffix={s.suffix} />
                </strong>
                <span className={styles.statLabel}>{s.label}</span>
              </Reveal>
            ))}
          </div>
        </section>

        {/* ── 4. CURRICULUM ─────────────────────────────────────── */}
        <section className={styles.sectionAlt} id="curriculum">
          <div className={styles.container}>
            <Reveal>
              <p className={styles.sectionLabel}>What You'll Learn</p>
              <h2 className={styles.sectionHeading}>
                Complete Course Curriculum
              </h2>
              <div className={styles.courseMeta}>
                <span className={styles.durationBadge}>
                  <FiClock /> {courseData.duration} Program
                </span>
              </div>
            </Reveal>

            {/* Software tools */}
            <Reveal delay={0.1}>
              <div className={styles.toolsRow}>
                <p className={styles.toolsLabel}>Tools & Software You'll Master:</p>
                <div className={styles.toolsList}>
                  {courseData.softwares.map((s, i) => (
                    <span key={i} className={styles.toolBadge}>
                      <FiCheckSquare /> {s}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>

            {/* Accordion modules */}
            <div className={styles.accordion}>
              {courseData.curriculum.map((module, idx) => (
                <Reveal key={idx} delay={idx * 0.06}>
                  <div className={styles.accordionItem}>
                    <button
                      className={`${styles.accordionBtn} ${expandedSection === idx ? styles.accordionBtnOpen : ''}`}
                      onClick={() => toggleSection(idx)}
                      aria-expanded={expandedSection === idx}
                    >
                      <span className={styles.moduleNum}>Module {String(idx + 1).padStart(2, '0')}</span>
                      <span className={styles.moduleTitle}>{module.title}</span>
                      <span className={styles.moduleIcon}>
                        {expandedSection === idx ? <FiMinus /> : <FiPlus />}
                      </span>
                    </button>

                    <AnimatePresence initial={false}>
                      {expandedSection === idx && (
                        <motion.div
                          key="content"
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3, ease: 'easeInOut' }}
                          className={styles.accordionPanel}
                        >
                          <ul className={styles.skillGrid}>
                            {module.skills.map((skill, si) => (
                              <li key={si} className={styles.skillItem}>
                                <FiCheckSquare className={styles.checkIcon} />
                                {skill}
                              </li>
                            ))}
                          </ul>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <RecentPlacementSlider />

        <TestimonialsSection />

        <PartnersSection />

        {/* FAQ Section */}
        <section className={styles.faqSection}>
          <div className="container">
            <motion.div
              className={styles.sectionHeader}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2>Frequently Asked Questions</h2>

              <p className={styles.sectionDescription}>
                Find answers about fees, batch timings, placements, certification,
                course duration, software covered and career opportunities.
              </p>
            </motion.div>

            <div className={styles.accordionContainer}>
              <motion.div
                className={styles.categoryBlock}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                {(courseData.faqs || []).map((item, index) => {
                  const itemId = `faq-${index}`;
                  const isOpen = expandedFaq === itemId;

                  return (
                    <motion.div
                      key={itemId}
                      className={`${styles.faqAccordion} ${styles.cat_courses}`}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{
                        duration: 0.4,
                        delay: index * 0.05
                      }}
                      viewport={{ once: true }}
                    >
                      <div
                        className={styles.faqHeader}
                        onClick={() => toggleFaq(itemId)}
                        role="button"
                        aria-expanded={isOpen}
                      >
                        <h3 className={styles.faqQuestion}>
                          {item.q}
                        </h3>

                        <div className={styles.expandIcon}>
                          {isOpen ? <FiMinus /> : <FiPlus />}
                        </div>
                      </div>

                      <AnimatePresence>
                        {isOpen && (
                          <motion.div
                            className={styles.faqContent}
                            initial={{ height: 0, opacity: 0 }}
                            animate={{
                              height: 'auto',
                              opacity: 1
                            }}
                            exit={{
                              height: 0,
                              opacity: 0
                            }}
                            transition={{
                              duration: 0.5,
                              ease: 'easeInOut'
                            }}
                          >
                            <div className={styles.faqAnswer}>
                              <p>{item.a}</p>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </motion.div>
                  );
                })}
              </motion.div>
            </div>
          </div>
        </section>

        {/* ── 7. COUNSELLING CTA ────────────────────────────────── */}
        <section className={styles.counsellingSection} id="counselling">
          <div className={styles.counsellingInner}>
            <Reveal>
              <p className={styles.eyebrowDark}>Industry Oriented · Placement Assurance · Expert Guidance</p>
              <h2 className={styles.counsellingHeading}>
                Start Your Career in {courseTitle} Today
              </h2>
              <p className={styles.counsellingDesc}>
                Speak directly with our course advisors. They'll walk you through curriculum, batch schedules, fee structure, EMI options, and your personal placement pathway. Seats are limited! Secure yours before the next batch fills up.
              </p>

              <div className={styles.counsellingPoints}>
                {[
                  '1-on-1 session with a senior faculty member',
                  'Personalised career roadmap for your background',
                  'Campus tour and student interaction',
                ].map((pt, i) => (
                  <span key={i} className={styles.counsellingPoint}>
                    <FiCheckSquare /> {pt}
                  </span>
                ))}
              </div>

              <a
                href="https://shankarmultimedia.com/contact"
                className={styles.btnCounselling}
                rel="noopener noreferrer"
              >
                Book Your Free Counselling Session <FiArrowRight />
              </a>
            </Reveal>
          </div>
        </section>

      </main>
    </>
  );
};

export default CourseLandingPage;
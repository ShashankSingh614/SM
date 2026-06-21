// FAQ Section - Same accordion style as CoursesAccordion
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiPlus, FiMinus } from 'react-icons/fi';
import { Helmet } from 'react-helmet-async';
import styles from './FAQSection.module.css';

const faqData = [
  {
    id: 'faq-courses-offered',
    className: 'cat_courses',
    questions: [
      {
        q: 'What multimedia and design courses do you offer?',
        a: 'We offer industry-oriented diploma programs designed to prepare students for real-world creative careers. Our popular courses include Advanced Graphic Designing and UI/UX Design with AI Integration (4 Months), Graphic Designing, UI/UX, Motion Graphics, Video Editing and VFX (6 Months), Advanced 3D Modelling and Animation (6 Months), 3D Modelling, Animation and VFX (8 Months), Advanced Web Designing and Development with UI/UX (6 Months), Advanced Digital Marketing with AI Integration and Automation (6 Months), and Advanced Multimedia Animation and VFX (10 Months).'
      },
      {
        q: 'Do your courses include AI-powered tools and technologies?',
        a: 'Yes. Our programs are updated with the latest AI-powered design and productivity tools used in the creative industry. Students gain hands-on experience with AI-assisted workflows for graphic design, UI/UX, video editing, digital marketing, and content creation.'
      },
      {
        q: 'How can I enroll for a course?',
        a: 'You can enroll by visiting our institute and speaking with our academic counselors. They will help you choose the right course based on your interests, career goals, and experience level. We also offer demo sessions so you can experience our teaching style before taking admission.'
      },
      {
        q: 'Is there any entrance exam or interview for admission?',
        a: 'No entrance test is required. Admission is simple and based on a counseling session where we understand your interests, skill level, and career objectives before recommending the most suitable program.'
      },
      {
        q: 'Can college students or working professionals join the courses?',
        a: 'Absolutely. Our flexible batch timings are specially designed for college students, working professionals, freelancers, and homemakers. We offer morning, afternoon and evening batches so learners can easily manage alongside their daily schedule.'
      },
      {
        q: 'What batch timings are available?',
        a: 'We conduct batches from Monday to Saturday with multiple timing options including 8–10 AM, 10 AM–12 PM, 12–2 PM, 2–4 PM, 4–6 PM, 6–8 PM, and 7–9 PM. Sunday batches are also available from 9 AM to 2 PM. Every batch includes dedicated practical sessions for hands-on learning and project practice.'
      },
      {
        q: 'Do you provide EMI or installment options for course fees?',
        a: 'Yes, we offer flexible payment options including easy installment plans to make professional education affordable and accessible. Our admissions team can guide you with detailed fee structures and payment schedules for each course.'
      },
      {
        q: 'Do you provide placement assistance after course completion?',
        a: 'Yes. We provide dedicated placement assistance to eligible students after successful course completion. Our support includes portfolio development, resume guidance, interview preparation, and interview scheduling.'
      },
      {
        q: 'What career opportunities are available after completing the course?',
        a: 'Students can pursue careers such as Graphic Designer, UI/UX Designer, Motion Graphics Artist, Video Editor, VFX Artist, 3D Animator, Web Designer, Digital Marketing Executive, Social Media Designer, Content Creator, or Freelance Creative Professional.'
      },
      {
        q: 'Will I receive a certificate after completing the course?',
        a: 'Yes. After successfully completing the course and submitting the required projects, students receive an industry-recognized certification from our institute that adds value to their professional portfolio and career opportunities.'
      },
      {
        q: 'Who are the trainers at your institute?',
        a: 'Our trainers are experienced industry professionals actively working in design studios, production houses, advertising agencies, and digital companies. They bring practical knowledge, current industry workflows, and live project experience into the classroom.'
      },
      {
        q: 'Do you offer online or hybrid classes?',
        a: 'Currently, we focus on offline classroom training to ensure maximum hands-on practice, direct mentorship, interactive learning, and better project guidance for students.'
      }
    ]
  }
];

const buildFAQSchema = () => {
  const allQAs = faqData.flatMap(cat => cat.questions);
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: allQAs.map(({ q, a }) => ({
      '@type': 'Question',
      name: q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: a
      }
    }))
  };
};

const FAQSection = () => {
  const [expandedItem, setExpandedItem] = useState(null);

  const toggle = (id) => {
    setExpandedItem(expandedItem === id ? null : id);
  };

  return (
    <>
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify(buildFAQSchema())}
        </script>
      </Helmet>

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
            Find answers about our Graphic Design, UI/UX, Animation, VFX, Video Editing, Web Designing, Digital Marketing, and Multimedia diploma courses including fees, placements, certifications, batch timings, and career opportunities. Get all the information you need to kickstart your creative career with us!
            </p>
          </motion.div>

          <div className={styles.accordionContainer}>
            {faqData.map((category, catIndex) => (
              <motion.div
                key={category.id}
                className={styles.categoryBlock}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: catIndex * 0.08 }}
                viewport={{ once: true }}
              >
                {category.questions.map((item, qIndex) => {
                  const itemId = `${category.id}-q${qIndex}`;
                  const isOpen = expandedItem === itemId;

                  return (
                    <motion.div
                      key={itemId}
                      className={`${styles.faqAccordion} ${styles[category.className]}`}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: qIndex * 0.05 }}
                      viewport={{ once: true }}
                    >
                      <div
                        className={styles.faqHeader}
                        onClick={() => toggle(itemId)}
                        role="button"
                        aria-expanded={isOpen}
                        aria-controls={`answer-${itemId}`}
                      >
                        <h3 className={styles.faqQuestion}>{item.q}</h3>
                        <div className={styles.expandIcon}>
                          {isOpen ? <FiMinus /> : <FiPlus />}
                        </div>
                      </div>

                      <AnimatePresence>
                        {isOpen && (
                          <motion.div
                            id={`answer-${itemId}`}
                            className={styles.faqContent}
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.5, ease: 'easeInOut' }}
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
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default FAQSection;
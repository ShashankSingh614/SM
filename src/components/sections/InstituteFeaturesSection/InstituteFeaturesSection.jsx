// Institute Features Section
import { motion } from 'framer-motion';
import { FiCheckSquare } from 'react-icons/fi';
import styles from './InstituteFeaturesSection.module.css';

const InstituteFeaturesSection = () => {
  const features = [
    {
      id: 1,
      title: 'Comprehensive Career Support',
      description: 'Dedicated job placement assistance is provided through our extensive industry network, encompassing expert resume preparation, personalized interview coaching, and continuous placement support to facilitate successful employment outcomes.'
    },
    {
      id: 2,
      title: 'Personalized Learning Experience',
      description: 'Customized instruction is delivered with batch sizes restricted to 1–5 students, ensuring enhanced individual attention where tailored guidance is provided to match each student\'s unique learning preferences and pace.'
    },
    {
      id: 3,
      title: 'Industry-Recognized Certification',
      description: 'Internationally-valued credentials are earned upon successful course completion, which have been recognized by leading employers and are designed to substantially strengthen professional profiles and advancement prospects.'
    },
    {
      id: 4,
      title: 'Hands-On Practice Labs and Latest Technology',
      description: 'Practical experience is accumulated through access to high-performance systems and cutting-edge infrastructure equipped with contemporary software and sophisticated hardware technologies utilized across the industry.'
    },
    {
      id: 5,
      title: 'Real-World Project Experience',
      description: 'Practical competencies are developed through engagement with industry-based projects, where comprehensive portfolios are constructed demonstrating job-ready qualifications sought by potential employers.'
    },
    {
      id: 6,
      title: 'Lifetime Mentorship and Support',
      description: 'Continuous career and technical guidance is provided perpetually beyond course completion, ensuring sustained professional development and long-term career trajectory optimization for all alumni members.'
    },
    {
      id: 7,
      title: 'Comfortable Learning Environment',
      description: 'Training is conducted in spacious, climate-controlled, and adequately-ventilated learning spaces that have been architecturally designed to maximize environmental comfort and facilitate optimal concentration.'
    },
    {
      id: 8,
      title: 'Expert Faculty and Guidance',
      description: 'Instruction is facilitated by experienced trainers and seasoned industry professionals whose real-world expertise and practical knowledge are consistently integrated throughout the pedagogical approach and curriculum delivery.'
    },
    {
      id: 9,
      title: 'Flexible Batch Timings',
      description: 'Convenient scheduling alternatives are offered to accommodate diverse professional and personal circumstances, enabling students to harmoniously balance their educational pursuits with employment and personal responsibilities.'
    },
    {
      id: 10,
      title: 'Commitment to Excellence',
      description: 'Superior quality instruction, state-of-the-art infrastructure, and highly-qualified faculty collectively ensure that comprehensive, top-tier education and professional preparation methodologies are systematically delivered.'
    }
  ];

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
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };

  return (
    <section className={styles.featuresSection}>
      <div className="container">
        <motion.div 
          className={styles.sectionHeader}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2>Institute Features</h2>
          <p className={styles.headerDescription}>
            Shankar Multimedia establishes itself as a premier educational institution through comprehensive feature offerings meticulously engineered to facilitate superior learning outcomes. Our multifaceted approach encompasses technological infrastructure, pedagogical methodologies, and support systems that have been systematically designed to cultivate student excellence across all academic and professional dimensions.
          </p>
        </motion.div>

        <motion.div 
          className={styles.featuresContainer}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {features.map((feature) => (
            <motion.div
              key={feature.id}
              className={styles.featureItem}
              variants={itemVariants}
            >
              <div className={styles.featureContent}>
                <FiCheckSquare className={styles.checkIcon} />
                <div className={styles.featureText}>
                  <span className={styles.featureTitle}>{feature.title} :</span>
                  <span className={styles.featureDescription}> {feature.description}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default InstituteFeaturesSection;


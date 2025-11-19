// Institute Features Section
import { motion } from 'framer-motion';
import { FiCheckSquare } from 'react-icons/fi';
import styles from './InstituteFeaturesSection.module.css';

const InstituteFeaturesSection = () => {
  const features = [
    {
      id: 1,
      title: 'Comprehensive Career Support',
      description: 'Receive dedicated job placement assistance through our industry network, including expert resume preparation, personalized interview coaching, and continuous placement support.'
    },
    {
      id: 2,
      title: 'Personalized Learning Experience',
      description: 'With batch sizes of 1–5 students, you receive tailored learning, enhanced individual attention, and customized guidance to match your learning style.'
    },
    {
      id: 3,
      title: 'Industry-Recognized Certification',
      description: 'Earn credentials valued by leading employers, helping you strengthen your professional profile and career prospects.'
    },
    {
      id: 4,
      title: 'Hands-On Practice Labs & Latest Technology',
      description: 'Gain practical experience using high-performance systems and modern infrastructure equipped with the latest software and hardware.'
    },
    {
      id: 5,
      title: 'Real-World Project Experience',
      description: 'Work on industry-based projects to build practical skills and develop a strong, job-ready portfolio.'
    },
    {
      id: 6,
      title: 'Lifetime Mentorship & Support',
      description: 'Continue receiving career and technical guidance even after course completion to support your long-term professional growth.'
    },
    {
      id: 7,
      title: 'Comfortable Learning Environment',
      description: 'Train in spacious, air-conditioned, and well-ventilated classrooms designed for maximum comfort and focus.'
    },
    {
      id: 8,
      title: 'Expert Faculty & Guidance',
      description: 'Learn from experienced trainers and industry professionals who bring real-world insights and practical expertise.'
    },
    {
      id: 9,
      title: 'Flexible Batch Timings',
      description: 'Choose from convenient schedule options that allow you to balance your education with work, studies, or personal commitments.'
    },
    {
      id: 10,
      title: 'Commitment to Excellence',
      description: 'Our high-quality training, advanced infrastructure, and skilled faculty ensure you receive top-tier education and professional preparation.'
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
          <h1>INSTITUTE FEATURES</h1>
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


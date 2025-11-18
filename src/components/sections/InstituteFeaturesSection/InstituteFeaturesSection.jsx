// Institute Features Section
import { motion } from 'framer-motion';
import { FiCheckSquare } from 'react-icons/fi';
import styles from './InstituteFeaturesSection.module.css';

const InstituteFeaturesSection = () => {
  const features = [
    {
      id: 1,
      title: '100% Job Guarantee & Comprehensive Career Assistance',
      description: 'We guarantee job placement upon successful completion of the course through our strong industry connections. Additionally, benefit from expert resume preparation, personalized interview coaching, and continuous job placement support.'
    },
    {
      id: 2,
      title: 'Personalized Learning Experience',
      description: 'With batch sizes of 1-5 students, we offer tailored learning, enhanced individual attention, and customized guidance to meet your specific needs.'
    },
    {
      id: 3,
      title: 'Industry-Recognized Certification',
      description: 'Earn credentials that are highly valued by top employers, boosting your career prospects.'
    },
    {
      id: 4,
      title: 'Hands-On Practice Labs & Latest Technology',
      description: 'Gain practical experience with dedicated, high-performance computers and state-of-the-art infrastructure equipped with the latest software and hardware'
    },
    {
      id: 5,
      title: 'Real-World Project Experience',
      description: 'Work on industry-based projects to develop practical skills and ensure you are job-ready.'
    },
    {
      id: 6,
      title: 'Lifetime Mentorship & Support',
      description: 'Receive ongoing career and technical guidance even after course completion to help you navigate your professional journey.'
    },
    {
      id: 7,
      title: 'Comfortable Learning Environment',
      description: 'Study in spacious, air-conditioned, and well-ventilated classrooms designed for optimal focus and comfort.'
    },
    {
      id: 8,
      title: 'Expert Faculty & Guidance',
      description: 'Learn from experienced trainers and industry professionals who provide valuable insights into real-world challenges.'
    },
    {
      id: 9,
      title: 'Flexible Batch Timings',
      description: 'Choose from convenient schedules that fit your lifestyle, allowing you to balance studies with personal commitments.'
    },
    {
      id: 10,
      title: 'Seminars & Workshops',
      description: 'Participate in seminars and workshops conducted by industry experts, gaining valuable insights and staying ahead in your field.'
    },
    {
      id: 11,
      title: 'Commitment to Excellence',
      description: 'Our top-tier training, cutting-edge infrastructure, and experienced faculty ensure you receive the best education and preparation in the industry'
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


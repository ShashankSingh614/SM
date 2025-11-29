// Featured Courses Section
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  FiArrowRight, 
  FiClock, 
  FiUsers, 
  FiStar,
  FiTrendingUp,
  FiAward
} from 'react-icons/fi';
import { COURSES_DATA } from '../../../constants/content';
import styles from './FeaturedCourses.module.css';

const FeaturedCourses = () => {
  // Get top 6 featured courses
  const featuredCourses = COURSES_DATA.slice(0, 6);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };

  return (
    <section className={styles.featuredCourses}>
      <div className="container">
        <motion.div 
          className={styles.sectionHeader}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2>Popular Courses</h2>
          <p>Master the skills that matter with our industry-leading courses designed for career success</p>
          <div className={styles.headerStats}>
            <div className={styles.headerStat}>
              <FiUsers />
              <span>30,000+ Students Enrolled</span>
            </div>
            <div className={styles.headerStat}>
              <FiAward />
              <span>100% Placement Guarantee</span>
            </div>
            <div className={styles.headerStat}>
              <FiTrendingUp />
              <span>Industry-Certified Programs</span>
            </div>
          </div>
        </motion.div>

        <motion.div 
          className={styles.coursesGrid}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {featuredCourses.map((course, index) => (
            <motion.div
              key={course.id}
              className={styles.courseCard}
              variants={itemVariants}
              whileHover={{ 
                y: -10, 
                scale: 1.02,
                transition: { duration: 0.3 }
              }}
            >
              <div className={styles.courseImage}>
                <img src={course.image} alt={course.title} />
                <div className={styles.courseCategory}>
                  <span>{course.category}</span>
                </div>
                <div className={styles.courseBadge}>
                  <FiStar />
                  <span>Popular</span>
                </div>
              </div>

              <div className={styles.courseContent}>
                <h3>{course.name}</h3>
                <p>{course.description}</p>

                <div className={styles.courseFeatures}>
                  <div className={styles.feature}>
                    <FiClock />
                    <span>{course.duration}</span>
                  </div>
                  <div className={styles.feature}>
                    <FiUsers />
                    <span>Live Projects</span>
                  </div>
                  <div className={styles.feature}>
                    <FiAward />
                    <span>Certificate</span>
                  </div>
                </div>

                <div className={styles.courseTools}>
                  <h4>You'll Learn:</h4>
                  <div className={styles.toolsList}>
                    {course.tools.slice(0, 3).map((tool, idx) => (
                      <span key={idx} className={styles.tool}>{tool}</span>
                    ))}
                    {course.tools.length > 3 && (
                      <span className={styles.toolMore}>+{course.tools.length - 3} more</span>
                    )}
                  </div>
                </div>

                <div className={styles.courseFooter}>
                  <div className={styles.coursePrice}>
                    <span className={styles.priceLabel}>Starting from</span>
                    <span className={styles.price}>₹15,000</span>
                  </div>
                  <Link to="/students-work" className={styles.enrollBtn}>
                    <span>Learn More</span>
                    <FiArrowRight />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          className={styles.sectionFooter}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <p>Explore all our students work and find the perfect fit for your career goals</p>
          <Link to="/students-work" className="btn btn-outline btn-lg">
            <span>View More</span>
            <FiArrowRight />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedCourses;
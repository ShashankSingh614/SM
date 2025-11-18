// Testimonials Section
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiStar, FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import styles from './TestimonialsSection.module.css';

const TestimonialsSection = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: 'Saurabh Tandel',
      content: 'Shankar Multimedia completely transformed my career. The practical training, industry exposure, and placement support helped me secure my dream job at Prime Focus. The faculty is exceptional and always ready to help.',
      image: '/images/place/SAURABH-PALGHAR.jpg',
      rating: 5,
      course: 'Graphic Design'
    },
    {
      id: 2,
      name: 'Bharat Bhadwalkar',
      content: 'The 3D animation course gave me all the skills I needed to excel in the industry. The hands-on projects and real-world experience made all the difference. Now I\'m working on exciting projects at TATA Elxsi.',
      image: '/images/place/5BHARAT-ASHOK-BHADWALKAR-Santacruz-3d.jpg',
      rating: 5,
      course: '3D Animation'
    },
    {
      id: 3,
      name: 'Sumit Gawade',    
      content: 'The web development program was comprehensive and up-to-date with industry standards. The placement team worked tirelessly to help me secure a position at Infosys. Highly recommended!',
      image: '/images/place/7Sumit-Gawade-Andheri (W).jpg',
      rating: 5,
      course: 'Web Development'
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className={styles.testimonialsSection}>
      <div className="container">
        <motion.div 
          className={styles.sectionHeader}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2>What Our Students Say</h2>
          <p>Real stories from successful graduates who transformed their careers with us</p>
        </motion.div>

        <div className={styles.testimonialContainer}>
          <AnimatePresence mode="wait">
            <motion.div
              key={currentTestimonial}
              className={styles.testimonial}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5, ease: 'easeInOut' }}
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
                  <div className={styles.authorImage}>
                    <img 
                      src={testimonials[currentTestimonial].image} 
                      alt={testimonials[currentTestimonial].name}
                    />
                  </div>
                  <div className={styles.authorInfo}>
                    <h4>{testimonials[currentTestimonial].name}</h4>
                    <p className={styles.authorRole}>{testimonials[currentTestimonial].role}</p>
                    <span className={styles.authorCourse}>{testimonials[currentTestimonial].course} Graduate</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Controls */}
          <div className={styles.testimonialControls}>
            <button 
              className={styles.controlBtn}
              onClick={prevTestimonial}
              aria-label="Previous testimonial"
            >
              <FiChevronLeft />
            </button>
            
            <div className={styles.testimonialIndicators}>
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  className={`${styles.indicator} ${index === currentTestimonial ? styles.active : ''}`}
                  onClick={() => setCurrentTestimonial(index)}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
            
            <button 
              className={styles.controlBtn}
              onClick={nextTestimonial}
              aria-label="Next testimonial"
            >
              <FiChevronRight />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
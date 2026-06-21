import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiStar, FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import styles from './TestimonialsSection.module.css';

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  
  const testimonials = [
    {
      id: 1,
      name: 'Priti Jha',
      role: 'Motion Graphics Designer and Video Editor',
      location: 'Kandivali',
      videoUrl: 'https://www.youtube.com/embed/MfERrATXbRQ',
      image: '/images/studentPlacements/priti-jha.webp',
      rating: 5
    },
    {
      id: 2,
      name: 'Makrand Patil',
      role: 'Graphic and UI/UXDesigner',
      location: 'Mumbai',
      videoUrl: 'https://www.youtube.com/embed/I0nMbRUwyzc',
      image: '/images/studentPlacements/makrand-patil.webp',
      rating: 5
    },
    {
      id: 3,
      name: 'Avishkar Bhadvale',
      role: '3D Designer',
      location: 'Mumbai',
      videoUrl: 'https://www.youtube.com/embed/aOShLvK40iQ',
      image: '/images/studentPlacements/Avishkar-Bhadvale.webp',
      rating: 5
    },
    {
      id: 4,
      name: 'Omkaresh S. Sawant',
      role: 'Motion Graphics Designer and Video Editor',
      location: 'Worli',
      videoUrl: 'https://www.youtube.com/embed/NpUiGactzms',
      image: '/images/studentPlacements/omkaresh-sawant.webp',
      rating: 5
    },
    {
      id: 5,
      name: 'Neelam Rajvanshi',
      role: '3D Designer',
      location: 'Mumbai',
      videoUrl: 'https://www.youtube.com/embed/Fe9fWM2PqXQ',
      image: '/images/studentPlacements/neelam-rajvanshi.webp',
      rating: 5
    },
    {
      id: 6,
      name: 'Amit Gaikwad',
      role: 'VFX Artist',
      location: 'Goregaon East',
      content: 'The VFX training infrastructure is excellent. Working on live projects helped me understand the real pressure and standards of the industry. I am very grateful to the placement cell for helping me kickstart my career as a VFX Artist.',
      image: '/images/studentPlacements/39Amit Gaikwad VFX Stu Goregaon East.webp',
      rating: 5
    },
    {
      id: 7,
      name: 'Sanjivani More',
      role: 'Web Designer',
      location: 'Goregaon',
      content: 'From responsive layouts to UI logic, the web design course covered everything. The faculty is very supportive and ensures you are interview-ready. I got placed immediately after completing my portfolio.',
      image: '/images/studentPlacements/18Sanjivani More Goregaon - Web Designer.webp',
      rating: 5
    },
    {
      id: 8,
      name: 'Priti Toraskar',
      role: '3D Interior Designer',
      location: 'Mumbai',
      content: 'The specialized training in 3D Interior Design was fantastic. It is very rare to find such detailed technical training at such an affordable fee structure. The career guidance provided by the mentors was invaluable.',
      image: '/images/studentPlacements/107Priti Toraskar. 3D Interior Designer.webp',
      rating: 5
    },
    {
      id: 9,
      name: 'Amruta Shivalkar',
      role: 'Graphic Designer',
      location: 'Alibaug',
      content: 'I traveled from Alibaug because of the reputation of the institute, and it was worth it. The graphic design course pushed my creativity to the next level. The placement team worked hard to find me a job that justified my travel and skills.',
      image: '/images/studentPlacements/2Amruta-Shivalkar-ALibaug.webp',
      rating: 5
    },
    {
      id: 11,
      name: 'Shrutika Dudhare',
      role: 'Graphic Designer',
      location: 'Vile Parle',
      content: 'The graphic design program is incredibly affordable considering the quality of training. I learned the latest tools used in top agencies. The placement team was very supportive, ensuring I had multiple interview opportunities until I found the right fit.',
      image: '/images/studentPlacements/0Shrutika Dudhare- Gra - Vile Parle.webp',
      rating: 5
    },
    {
      id: 12,
      name: 'Mahesh Rajak',
      role: 'VFX Artist',
      location: 'Jogeshwari',
      content: 'Learning VFX here was a game-changer. The course covers the entire pipeline using the latest industry software. The faculty doesn\'t just teach; they mentor you for your career. I am grateful for the 100% placement assistance provided.',
      image: '/images/studentPlacements/85Mahesh Rajak VFX ARTIST Jogeshwari.webp',
      rating: 5
    },
    {
      id: 13,
      name: 'Prashant Salkar',
      role: 'Web Designer',
      location: 'Naigaon',
      content: 'I appreciated how practical the web design course was. We worked on real-world scenarios which made cracking interviews easy. The institute provides excellent support even after placement, which gave me a lot of confidence in my new role.',
      image: '/images/studentPlacements/9Prashant Salkar - Web- Naigaon.webp',
      rating: 5
    },
    {
      id: 14,
      name: 'Saish Gokarankar',
      role: '3D Designer',
      location: 'Dombivali',
      content: 'The 3D design training is comprehensive and up-to-date. The institute focuses heavily on portfolio development, which is crucial for getting hired. I secured a great position thanks to their dedicated placement cell.',
      image: '/images/studentPlacements/15Saish Gokarankar -Dombivali - 3D Designer.webp',
      rating: 5
    },
    {
      id: 15,
      name: 'Prasad Ghevade',
      role: 'Senior Designer',
      location: 'Mumbai',
      content: 'Reaching a Senior Designer level requires strong fundamentals, which I built here. The course curriculum is constantly updated to match current industry standards. It is the best place for affordable, high-quality design education.',
      image: '/images/studentPlacements/10Prasad Ghevade - SR.webp',
      rating: 5
    },
    {
      id: 16,
      name: 'Ajit Gupta',
      role: 'Web Designer',
      location: 'Nalasopara',
      content: 'The faculty ensures every student understands the latest web technologies thoroughly. The fees are very reasonable for the value you get. Their placement team is very aggressive in finding the best opportunities for students.',
      image: '/images/studentPlacements/33Ajit Gupta Web Stu Nalasopara.webp',
      rating: 5
    },
    {
      id: 17,
      name: 'Avinash Gawade',
      role: 'Graphic Designer',
      location: 'Kandivali',
      content: 'An excellent institute for anyone wanting to learn Graphic Design from scratch. The course is structured to make you industry-ready. The placement support is genuine, and they really care about your career progression.',
      image: '/images/studentPlacements/4Avinash Gawade Gra - Kandivali.webp',
      rating: 5
    },
    {
      id: 18,
      name: 'Zakir Shaikh',
      role: 'Web Designer',
      location: 'Malad',
      content: 'The web design course was rigorous and focused on modern coding standards. It gave me the skills I needed to compete in the industry. The placement process was transparent and helped me land a job very quickly.',
      image: '/images/studentPlacements/154Zakir Shaikh Web Student Malad.webp',
      rating: 5
    },
    {
      id: 19,
      name: 'Akshay Sawant',
      role: '3D Designer',
      location: 'Jogeshwari',
      content: 'I highly recommend this institute for 3D design. The mentors are industry experts who teach you the latest techniques. The support I received during the placement phase was outstanding and very personalized.',
      image: '/images/studentPlacements/36Akshay Sawant - 3D Jogeshwari.webp',
      rating: 5
    },
    {
      id: 20,
      name: 'Viraj Raut',
      role: 'Web Designer',
      location: 'Alibaug',
      content: 'The distance from Alibaug didn\'t matter because the quality of education here is unmatched. They teach the latest web standards that companies actually look for. The placement support was consistent, and they helped me find a role that values my skills.',
      image: '/images/studentPlacements/11Viraj Raut Web  Alibaug.webp',
      rating: 5
    },
    {
      id: 21,
      name: 'Sandesh Salekar',
      role: 'Graphic Designer',
      location: 'Mulund',
      content: 'I joined the Mulund branch with zero design knowledge. The faculty transformed me into a professional Graphic Designer. The course fee is very affordable for the level of personal attention and job placement assistance you receive.',
      image: '/images/studentPlacements/17Sandesh Salekar - gra - Mulund.webp',
      rating: 5
    },
    {
      id: 22,
      name: 'Pankaj Sawant',
      role: '3D Designer',
      location: 'Parel',
      content: 'The 3D design course is perfectly structured for the current market. We learned high-end modeling and texturing techniques. The best part was the placement cell they guided me through multiple interviews until I got selected.',
      image: '/images/studentPlacements/8Pankaj Sawant -Parel - 3D Designer.webp',
      rating: 5
    },
    {
      id: 23,
      name: 'Pravin Sakpal',
      role: 'Web Designer',
      location: 'Kurla',
      content: 'Transitioning into Web Design was the best decision I made. The institute provides a very hands-on learning experience with the latest technology. Their post-placement support shows that they genuinely care about their students\' careers.',
      image: '/images/studentPlacements/12Pravin Sakpal- web- kurla.webp',
      rating: 5
    },
    {
      id: 24,
      name: 'Sachin Mistry',
      role: 'Graphic Designer',
      location: 'Kurla',
      content: 'The practical training in graphic design tools gave me the confidence to work on any project. The institute delivers exactly what they promise quality education and 100% placement support at a very reasonable cost.',
      image: '/images/studentPlacements/14Sachin Mistry - gra-Kurla.webp',
      rating: 5
    },
    {
      id: 25,
      name: 'Ankita Tulaskar',
      role: '3D Designer',
      location: 'Santacruz',
      content: 'Learning 3D design here was a fantastic experience. The mentors are industry professionals who know exactly what studios want. I am very thankful for the job assistance that helped me start my journey as a 3D Designer.',
      image: '/images/studentPlacements/49Ankita Tulaskar 3d Stu Santacruz.webp',
      rating: 5
    },
    {
      id: 26,
      name: 'Swapnali Sawant',
      role: 'Graphic Designer',
      location: 'Andheri',
      content: 'I highly recommend this course for its up-to-date syllabus and supportive environment. They focus heavily on building a strong portfolio, which is why I got placed so quickly. The placement team is very dedicated.',
      image: '/images/studentPlacements/145Swapnali Sawant - gra- andheri.webp',
      rating: 5
    },
    {
      id: 27,
      name: 'Dinesh Kadam',
      role: '3D Designer',
      location: 'Goregaon East',
      content: 'The technical depth of the 3D course is impressive. From basics to advanced rendering, everything is covered. The placement support is real they ensure you are placed in a good company with a decent package.',
      image: '/images/studentPlacements/64Dinesh Kadam 3d Stu Goregaon East.webp',
      rating: 5
    },
    {
      id: 28,
      name: 'Manoj Katalkar',
      role: 'VFX Artist',
      location: 'Vile Parle',
      content: 'If you want to enter the VFX industry, this is the place to be. The training is rigorous and follows industry pipelines. I got excellent placement support and guidance even after securing my job.',
      image: '/images/studentPlacements/87manoj Katalkar Gra VFX Stu Vile Parle.webp',
      rating: 5
    },
    {
      id: 29,
      name: 'Kalpesh Khandagale',
      role: 'Web Designer',
      location: 'Jogeshwari',
      content: 'The web design course is value for money. I learned coding and design principals that are currently in demand. The institute helped me prepare for interviews and provided great placement opportunities.',
      image: '/images/studentPlacements/27Kalpesh Khandagale -web- jogeshwari.webp',
      rating: 5
    },
    {
      id: 30,
      name: 'Nutan Chikhale',
      role: 'Graphic Designer',
      location: 'Borivali',
      content: 'The faculty is very patient and skilled. They helped me build a creative portfolio that stood out. I am really happy with the placement assistance provided; they stood by me until I got my offer letter.',
      image: '/images/studentPlacements/97NUTAN CHIKHALE gra - Borivali.webp',
      rating: 5
    },
    {
      id: 31,
      name: 'Bharat Bhadwalkar',
      role: '3D Designer',
      location: 'Santacruz',
      content: 'The 3D design course was completely industry-oriented. We were trained on the latest software and rendering techniques used in big studios today. The placement team provided excellent support until I secured a role that matched my skills perfectly.',
      image: '/images/studentPlacements/5BHARAT-ASHOK-BHADWALKAR-Santacruz-3d.webp',
      rating: 5
    },
    {
      id: 32,
      name: 'Sumit Gawade',
      role: 'Frontend Developer',
      location: 'Andheri (W)',
      content: 'I was looking for a course that offered both affordability and quality, and I found it here. The web development syllabus is updated with the latest technologies. The best part is the placement support they guide you even after you join a company.',
      image: '/images/studentPlacements/7Sumit-Gawade-Andheri (W).webp',
      rating: 5
    },
    {
      id: 33,
      name: 'Sandesh More',
      role: 'Video Editor and Graphics Designer',
      location: 'Goregaon',
      content: 'Learning both Video Editing and Graphics gave me a huge advantage in the job market. The institute focuses on practical portfolio building rather than just theory. Their placement assistance is genuine and very proactive.',
      image: '/images/studentPlacements/16Sandesh More - Goregaon- Video Editor-Graphics Designer.webp',
      rating: 5
    }
  ];

  const reviewPlatforms = [
    { id: 1, name: 'Google', logo: '/images/reviewCompanyLogo/google.webp', rating: 5 },
    { id: 2, name: 'CollegeDunia', logo: '/images/reviewCompanyLogo/cd.webp', rating: 4.9 },
    { id: 3, name: 'JustDial', logo: '/images/reviewCompanyLogo/justdial.webp', rating: 5 },
    { id: 4, name: 'Sulekha', logo: '/images/reviewCompanyLogo/suleka.webp', rating: 4.4 },
    { id: 5, name: 'AmbitionBox', logo: '/images/reviewCompanyLogo/ambition box.webp', rating: 5 },
    { id: 6, name: 'SGNI', logo: '/images/reviewCompanyLogo/sgni.webp', rating: 5 },
  ];
  
  const nextTestimonial = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  }, [testimonials.length]);

  const prevTestimonial = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  }, [testimonials.length]);

  const goToTestimonial = useCallback((index) => {
    setCurrentIndex(index);
  }, []);

  useEffect(() => {
    if (isHovered) return;
    const interval = setInterval(nextTestimonial, 4500);
    return () => clearInterval(interval);
  }, [isHovered, nextTestimonial]);

  const current = testimonials[currentIndex];

  return (
    <section className={styles.testimonialsSection}>
      <div className="container">
        {/* Section Header */}
        <div className={styles.sectionHeader}>
          <h2>Student Testimonials and Career Success Stories</h2>
          <p className={styles.headerSubtitle}>Distinctive accounts from our accomplished alumni whose professional trajectories have been substantially transformed through comprehensive training and dedicated placement support mechanisms offered by Shankar Multimedia</p>
        </div>

        {/* Review Platforms */}
        <div className={styles.reviewPlatforms}>
          {reviewPlatforms.map((platform) => (
            <div key={platform.id} className={styles.reviewPlatformItem}>
              <div className={styles.platformLogo}>
                <img src={platform.logo} alt={platform.name} />
              </div>
              <p className={styles.platformName}>{platform.name}</p>
              <div className={styles.platformRating}>
                {Array(5).fill(0).map((_, i) => (
                  <FiStar
                    key={i}
                    className={`${styles.platformStar} ${i < Math.round(platform.rating) ? styles.platformStarFilled : ''}`}
                  />
                ))}
                <span className={styles.platformRatingValue}>{platform.rating}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Testimonial Slider */}
        <div 
          className={`${styles.testimonialContainer} ${isHovered ? styles.carouselhover : styles.carouselnothover}`}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onTouchStart={() => setIsHovered(true)}
          onTouchEnd={() => setIsHovered(false)}
          onTouchCancel={() => setIsHovered(false)}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              className={styles.testimonial}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ 
                duration: isHovered ? 0 : 0.6, 
                ease: 'easeInOut' 
              }}
            >
              <div className={styles.testimonialContent}>
                {/* Quote Icon */}
                <div className={styles.quoteIcon}>
                  <span>&quot;</span>
                </div>

                {/* Video Testimonial */}
                {current.videoUrl && (
                  <div className={styles.videoContainer}>
                    <iframe
                      src={current.videoUrl}
                      title={`${current.name} testimonial`}
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className={styles.testimonialVideo}
                    ></iframe>
                  </div>
                )}

                {/* Testimonial Text and Rating */}
                <div className={styles.testimonialText}>
                  <p>{current.content}</p>
                  <div className={styles.testimonialRating}>
                    {Array(current.rating).fill(0).map((_, i) => (
                      <FiStar key={i} className={styles.star} />
                    ))}
                  </div>
                </div>

                {/* Author Info */}
                <div className={styles.testimonialAuthor}>
                  <div className={styles.authorImage}>
                    <img src={current.image} alt={current.name} />
                  </div>
                  <div className={styles.authorInfo}>
                    <h4>{current.name}</h4>
                    <p className={styles.authorRole}>{current.role}</p>
                    <p className={styles.authorCourse}>{current.location}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Controls - Prev/Next Buttons (hidden by CSS) */}
          <div className={styles.testimonialControls}>
            <button 
              className={styles.controlBtn} 
              onClick={prevTestimonial}
              aria-label="Previous testimonial"
            >
              <FiChevronLeft />
            </button>

            {/* Indicators */}
            <div className={styles.testimonialIndicators}>
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  className={`${styles.indicator} ${index === currentIndex ? styles.active : ''}`}
                  onClick={() => goToTestimonial(index)}
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
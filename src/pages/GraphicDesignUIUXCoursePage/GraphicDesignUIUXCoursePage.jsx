import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiPlus, FiMinus, FiCheckSquare } from 'react-icons/fi';
import styles from './GraphicDesignUIUXCoursePage.module.css';
import TestimonialsSection from '../../components/sections/TestimonialsSection/TestimonialsSection';
import RecentPlacementSlider from '../../components/sections/RecentPlacementSlider/RecentPlacementSlider';

const GraphicDesignUIUXCoursePage = () => {
  const [expandedSection, setExpandedSection] = useState(0);

  const toggleSection = (sectionId) => {
    setExpandedSection(expandedSection === sectionId ? null : sectionId);
  };

  const courseDetails = {
    id: 'graphic-design',
    title: 'DIPLOMA IN ADVANCED GRAPHIC DESIGNING & UI/UX DESIGN WITH AI INTEGRATION',
    duration: '4 Months',
    softwares: [
      'Adobe Photoshop', 
      'CorelDRAW', 
      'Adobe Illustrator', 
      'Adobe InDesign', 
      'Adobe XD', 
      'Figma', 
      'Canva',
      'Midjourney',
      'Adobe Firefly'
    ],
    sections: [
      {
        id: 0,
        title: 'Raster Graphics',
        skills: [
          'Photoshop Interface & Tools',
          'Color Correction & Grading',
          'Photo Retouching (Spot, Patch, Glamour Skin)',
          'Model, Fashion & Portrait Retouching',
          'Product Retouching (Jewelry, Apparel, Furniture, Real Estate)',
          'Wedding Album Design',
          'Image Restoration (Vintage & Damaged Photos)',
          'Masking Techniques (Layer, Photo, Hair, Ghost Mannequin)',
          'Clipping Path & Color Changing',
          'Black & White to Color Conversion',
          'AI-Enhanced Design (Generative Fill, Neural Filters, Content-Aware Fill)',
          'AI Object Selection',
          'Banner, Poster & Catalog Design',
          'Brand Collateral Creation'
        ]
      },
      {
        id: 1,
        title: 'Vector Graphics & Logo Design',
        skills: [
          'Vector vs Raster Graphics Fundamentals',
          'CorelDRAW Basics & Interface',
          'Digital Illustration Techniques',
          'Professional Logo Design & Tracing',
          'Corporate Identity & Branding Systems',
          'Print Collaterals (Brochure, Business Card, Leaflets)',
          'Packaging & Label Design',
          'Advertising Design & Hoardings',
          'Advanced Drawing & Shape Tools',
          'Fill Types (Fountain, Pattern, Texture, Mesh)',
          'Special Effects (Contour, Extrude, Blend, Shadow)',
          'Brand Guidelines Documentation',
          'AI Text to Vector (Adobe Firefly)',
          'Generative Recolor Technology',
          'Professional Portfolio Building'
        ]
      },
      {
        id: 2,
        title: 'UI/UX Design & Web Design',
        skills: [
          'Adobe XD & Figma Fundamentals',
          'User Interface Design Principles',
          'User Experience Research & Testing',
          'Wireframing Best Practices',
          'Interactive Prototyping',
          'Responsive Design Techniques',
          'Design System Creation',
          'Mobile App UI Design',
          'Web Design Standards & Accessibility',
          'User Testing & Feedback Integration',
          'Component Libraries',
          'Design Handoff for Developers',
          'Figma Collaboration Features',
          'Prototype Presentations'
        ]
      },
      {
        id: 3,
        title: 'Digital Marketing & Brand Design',
        skills: [
          'Social Media Design Optimization',
          'Email Marketing Template Design',
          'Web Banner Design & Optimization',
          'E-commerce Product Design',
          'Content Creation for Marketing',
          'Brand Positioning & Strategy',
          'Visual Storytelling',
          'Typography & Color Psychology',
          'Marketing Collateral Design',
          'Campaign Asset Creation',
          'Performance Design Metrics',
          'Conversion-Optimized Layouts',
          'A/B Testing Design Principles'
        ]
      }
    ]
  };

  return (
    <main className={styles.coursePageContainer}>
      <section className={styles.heroSection}>
        <h1 className="main-heading">
          Best Advanced Graphic Designing & UI/UX Design Course in Mumbai with AI Integration & 100% Job Placements 2026
        </h1>
        <p className="intro-text">
          Transform your creative passion into a lucrative career with Shankar Multimedia's industry-leading Diploma in Advanced Graphic Designing & UI/UX Design with AI Integration—Mumbai's most trusted animation and multimedia institute with 36+ years of proven excellence, ISO 9001:2015 certification, and an unmatched 100% job placement record. Our comprehensive, hands-on curriculum combines cutting-edge design principles, professional-grade industry tools (Adobe Creative Suite, Figma, Sketch, XD, Midjourney, and Adobe Firefly), and real-world project experience to equip you with the exact skills top agencies and tech companies demand. Led by award-winning mentors with decades of advertising, branding, and UX design expertise, you'll build an exhibition-quality portfolio of AI-enhanced logos, responsive mobile app interfaces, interactive prototypes, and digital marketing assets that immediately impress employers. Our 100% job assistance guarantee means certified placement support, interview coaching, and exclusive industry partnerships connecting you with premium roles at Mumbai's leading creative agencies, tech startups, and corporate design teams—with competitive salaries and fast-track career advancement that proves why Shankar Multimedia is Mumbai's #1 choice for aspiring graphic designers and UI/UX specialists seeking guaranteed employment and creative mastery.
        </p>
      </section>

      <section className={styles.portfolioSection}>
        <h2 className="section-heading">Showcase of Student Works in Graphic Designing & UI/UX</h2>
        <p className={styles.sectionDesc}>
          Explore the impressive portfolio creations from our recent batches, demonstrating mastery in modern design tools, AI-enhanced creativity, and industry-standard execution:
        </p>
        <ul className="portfolio-list">
          <li>
            <strong>AI-Enhanced Brand Identity Systems:</strong> Custom logo designs, brand guides, and visual identity suites for e-commerce startups and local Mumbai businesses, created using Figma and Adobe Illustrator with Midjourney concept refinement for unique visual directions.
          </li>
          <li>
            <strong>Responsive Mobile App UI/UX Designs:</strong> Fully interactive, user-centered interface designs for fintech apps, social platforms, and lifestyle services—featuring wireframes, prototypes, and pixel-perfect visual designs in Figma with documented user flows and accessibility compliance.
          </li>
          <li>
            <strong>High-Impact Digital Marketing Collateral:</strong> Email marketing templates, social media graphics, web banners, and animated promotional graphics optimized for Instagram, Facebook, and LinkedIn—demonstrating mastery of Adobe Creative Suite and motion graphics principles.
          </li>
          <li>
            <strong>E-Commerce & Web Design Portfolios:</strong> Complete website interface designs, landing pages, and product marketing pages with conversion-optimized layouts, modern typography, and cohesive design systems built in XD and Webflow for real-client projects.
          </li>
          <li>
            <strong>Interactive Prototype & Design System Documentation:</strong> Fully documented UI component libraries, design tokens, and interactive prototypes showcasing professional-grade handoff documentation for developer collaboration.
          </li>
          <li>
            <strong>Creative Campaign Work & Motion Graphics:</strong> Adobe After Effects motion design, animated infographics, and video graphics package designs created for advertising campaigns and corporate communication projects.
          </li>
        </ul>
      </section>

      <section className={styles.ctaSection}>
        <p className="cta">
          <strong>Enroll Now in Mumbai's Premier Advanced Graphic Designing & UI/UX Design Diploma</strong>—Secure your seat in our next batch and join hundreds of successful graduates building thriving careers in design. With 100% job placement guarantee, hands-on mentorship from industry professionals, cutting-edge AI-integrated curriculum, and Shankar Multimedia's 36+ years of proven excellence, your creative potential is waiting to be unleashed. <strong>Contact us today to schedule your portfolio consultation and enrollment counseling</strong>—limited seats available, and our placement team is ready to guide your journey from student to employed design professional. Join Mumbai's most trusted animation and multimedia institute and transform your design dreams into guaranteed employment success.
        </p>
      </section>

      <section className={styles.courseDetailsSection}>
        <h2 className="section-heading">Comprehensive Course Curriculum</h2>
        <div className={styles.courseInfo}>
          <div className={styles.courseHeader}>
            <h3 style={{ marginBottom: '15px', color: '#333' }}>{courseDetails.title}</h3>
            <div className={styles.courseMeta}>
              <span className={styles.duration}><strong>Duration:</strong> {courseDetails.duration}</span>
            </div>
          </div>

          <div className={styles.softwaresContainer}>
            <h4 style={{ marginBottom: '15px', color: '#555' }}>Professional Tools You'll Master:</h4>
            <div className={styles.softwaresList}>
              {courseDetails.softwares.map((software, idx) => (
                <span key={idx} className={styles.softwareBadge}>
                  <FiCheckSquare style={{ marginRight: '6px' }} /> {software}
                </span>
              ))}
            </div>
          </div>

          <div className={styles.curriculumAccordion}>
            <h4 style={{ marginBottom: '20px', color: '#555' }}>Detailed Learning Modules:</h4>
            {courseDetails.sections.map((section) => (
              <div key={section.id} className={styles.courseItem}>
                <button
                  className={styles.courseButton}
                  onClick={() => toggleSection(section.id)}
                >
                  <span className={styles.courseTitle}>{section.title}</span>
                  <span className={styles.courseIcon}>
                    {expandedSection === section.id ? <FiMinus /> : <FiPlus />}
                  </span>
                </button>

                <AnimatePresence>
                  {expandedSection === section.id && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className={styles.courseContent}
                    >
                      <ul className={styles.skillsList}>
                        {section.skills.map((skill, skillIndex) => (
                          <li key={skillIndex}>
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

      <TestimonialsSection />

      <RecentPlacementSlider />
    </main>
  );
};

export default GraphicDesignUIUXCoursePage;

// Courses Accordion Section - Dropdown Style
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiPlus, FiMinus, FiCheckSquare } from 'react-icons/fi';
import styles from './CoursesAccordion.module.css';

const CoursesAccordion = () => {
  const [expandedCourse, setExpandedCourse] = useState(null);

  const toggleCourse = (courseId) => {
    setExpandedCourse(expandedCourse === courseId ? null : courseId);
  };

  const courses = [
    {
      id: 'graphic-design',
      title: 'DIPLOMA IN ADVANCED GRAPHIC DESIGNING & UI/UX DESIGN',
      className: 'ps_bg',
      
      softwares: [
        'Adobe Photoshop',
        'CorelDraw',
        'Adobe Illustrator',
        'Adobe InDesign',
        'Adobe XD',
        'Figma',
        'Canva',
        'UI Design'
      ],
      sections: [
        {
          title: 'Raster Graphics',
          skills: [
            'Introduction to Photoshop Interface',
            'Overview of Photoshop tools',
            'Color Correction',
            'Wedding Album Designing',
            'Restoration of damaged vintage images',
            'Retouching',
            'Models Retouching',
            'Fashion Photo Retouching',
            'Glamour Retouching',
            'Real Estate Photo Retouching',
            'Jewelry Photo Retouching',
            'Apparels Photo Retouching',
            'Furniture Photo Retouching',
            'Product Retouching',
            'Import and Export your Images',
            'Enhancing any product photos',
            'Black and White to Color',
            'Clipping Path',
            'Colorisation',
            'Ghost Mannequin',
            'Changing Colors of Products',
            'Photo Masking',
            'High-end retouching',
            'Image manipulation',
            'Hair Masking',
            'Image Effects',
            'Page layout',
            'Banner Design',
            'Poster',
            'Catalog Design',
            'Interface Designing'
          ]
        },
        {
          title: 'Vector Graphics',
          skills: [
            'Raster Graphics vs Vector Graphics',
            'Digital Illustration Techniques',
            'Conceptualizing Corporate Identity',
            'Print Collaterals',
            'Logo Design',
            'Logo Tracing',
            'Brochure Design',
            'Character Converts',
            'Visiting card',
            'Ad Hording',
            'Posters',
            'Newsletters',
            'Leaflets',
            'Packaging Design',
            'Print and Media Advertisement',
            'Banner Design',
            'Catalog Design',
            'Branding',
            'Print Artwork Preparation',
            'Property Bar, Welding',
            'Drawing Tools, Modifying',
            'Tools, Skewing',
            'Fill Types: Fountain, Pattern',
            'Textures, Mesh, Uniform',
            'Special Effects: Contour',
            'Extrude, Distort, Blend',
            'Shadow',
            'PowerClip',
            'Perspective, Fit to Text',
            'Advertising designing',
            'Magazine Cover'
          ]
        }
      ]
    },
    {
      id: 'advanced-graphic',
      title: 'DIPLOMA IN ADVANCED GRAPHIC DESIGNING, UI/UX, MOTION GRAPHIC, VIDEO EDITING & VFX',
      className: 'php_bg1',
      softwares: [
        'Adobe Photoshop',
        'CorelDraw',
        'Adobe Illustrator',
        'Adobe InDesign',
        'Adobe XD',
        'Figma',
        'Canva',
        'Adobe After Effects',
        'Adobe Premiere Pro'
      ],
      sections: [
        {
          title: 'Adobe Premiere Pro',
          skills: [
            'Analog versus digital',
            'Frame rate and resolution',
            'Understanding your Storage space',
            'Knowing your system requirements',
            'Defining motion Graphics',
            'Compositing',
            '3D CONVERSION',
            'Rotoscoping',
            'Digitizing footage',
            'Movie titling',
            'Multimedia Presentation',
            'Editing with Special Effects',
            'Rendering techniques',
            'Using the Timeline Editing Tools',
            'Markers: Timeline vs Clip',
            'Adding Images to a Graphic Clip',
            'Creating an end credit roll',
            'Time stretch and frame blending',
            'Timeline vs Project Panel',
            'Understanding Clip Audio',
            'Using the Trim View',
            'Updating Photoshop files',
            'Using Media management',
            'Optimizing render speed',
            'Creating Lighting qualities'
          ]
        },
        {
          title: 'Adobe After Effects',
          skills: [
            'Creating a project',
            'After Effects panel system',
            'Composition Window',
            'Working in the Timeline Window',
            'RAM Preview vs. Standard Preview',
            'Importing Photoshop and Illustrator files',
            'Trimming a video clip',
            'Looping an audio or video file',
            'Creating a layer solid',
            'Animating text with keyframes',
            'Masking & Animating masks',
            'Animating 3D layers',
            'Adjusting render settings',
            'Exporting a project file',
            'Using null objects',
            'Creating Lighting qualities',
            'Adjusting Color',
            'Using the roto brush',
            'Managing multiple projects',
            'Using keylight',
            'Using the 3d camera tracker Compositing'
          ]
        }
      ]
    },
    {
      id: '3d-animation',
      title: 'DIPLOMA IN ADVANCED 3D MODELLING & ANIMATION',
      className: 'three_dbg',
      softwares: [
        'Adobe Photoshop',
        'CorelDraw',
        '3Ds Max',
        'V-RAY Light',
        'V-RAY Material',
        'Corona Render',
        'AutoCAD',
        'SketchUp'
      ],
      sections: [
        {
          title: '3D Modelling',
          skills: [
            'Exhibition and Event Design',
            'Exhibition Stall Design',
            'Interior Designing',
            'Low Poly Modelling',
            'Advanced Texturing',
            'Understanding Cameras and Lights',
            'Painting 3D objects',
            'Exhibition Stall Designing',
            'Rendering Techniques',
            'Visual FX'
          ]
        },
        {
          title: '3D Animation',
          skills: [
            'Concepts of 3D animation',
            '3D Special FX',
            'Animating 3D Objects',
            'Developing Walkthroughs',
            'Character animation',
            'Concepts of Digital Filmmaking',
            'Advanced AutoCAD including Layout plans, elevations, Working drawings, detailing, perspective views and more...'
          ]
        },
        {
          title: 'Visualization, Sketching & 2D Storyboarding',
          skills: [
            'Artistic Visualization',
            'Basics of Drawing',
            'Types of Lines',
            'Types of Shading',
            'Types of Tracing',
            'Free Hand Drawing',
            'Working with Layouts',
            'Visual Grammar',
            'Construction Line',
            'Character Development',
            'Storyboard Making',
            'Classical Animation',
            'Principles of animation',
            'FlipBook Design with Light Box',
            'Developing a storyline concept',
            'Outlining Conceptual ideas',
            'Animation Layout and Design'
          ]
        }
      ]
    },
    {
      id: '3d-vfx',
      title: 'DIPLOMA IN ADVANCED 3D MODELLING & ANIMATION & VFX',
      className: 'nuke_bg',
      softwares: [
        'Adobe Photoshop',
        'CorelDraw',
        '3Ds Max',
        'V-Ray Render - Light & Material',
        'Corona Render',
        'AutoCAD',
        'SketchUp',
        'Adobe After Effects',
        'Adobe Premiere Pro'
      ],
      sections: [
        {
          title: '3D Modelling & Animation',
          skills: [
            'Exhibition and Event Design',
            'Exhibition Stall Design',
            'Interior Designing',
            'Low Poly Modelling',
            'Advanced Texturing',
            'Understanding Cameras and Lights',
            'Painting 3D objects',
            'Exhibition Stall Designing',
            'Rendering Techniques',
            'Visual FX',
            'Concepts of 3D animation',
            '3D Special FX',
            'Animating 3D Objects',
            'Developing Walkthroughs',
            'Character animation',
            'Concepts of Digital Filmmaking'
          ]
        }
      ]
    },
    {
      id: 'web-design',
      title: 'DIPLOMA IN ADVANCED WEB DESIGNING & DEVELOPMENT WITH ADVANCED UI/UX',
      className: 'dw_bg',
      softwares: [
        'Adobe Photoshop',
        'Adobe XD',
        'Figma',
        'Adobe Dreamweaver',
        'HTML / XHTML / CSS / SCSS',
        'HTML5',
        'CSS3',
        'React Js',
        'Bootstrap - 4 & 5',
        'JavaScript & JQuery',
        'Responsive in Media Query',
        'Wordpress',
        'Hosting Website & Uploading FTP',
        'Notepad++',
        'Sublime',
        'Visual Studio Code',
        'Brackets'
      ],
      sections: [
        {
          title: 'Web Page Layout Design Process',
          skills: [
            'Designing for Web',
            'Print versus Web Design',
            'Web 2.0 Design Techniques',
            'Wireframe development',
            'Understanding Color Theory',
            'Composition & Typography for web'
          ]
        },
        {
          title: 'HTML/CSS Structuring',
          skills: [
            'PSD to HTML Conversion',
            'PSD Slicing',
            'Pure CSS Layout with W3C Standards',
            'DIV Based Web Page Structuring',
            'HTML5 Structuring Elements',
            'Body & Text attributes',
            'Marquee tag & its attributes',
            'Headings, Font',
            'Ordered and Unordered Lists',
            'Blockquote',
            'HyperLinks, Sound',
            'Alignment of images & Mapping',
            'Tables : Creating a Table',
            'Combine cells in a row or column',
            'Cells: Spanning, Padding',
            'Forms: Create List Box',
            'Radio Buttons'
          ]
        },
        {
          title: 'WEB PROGRAMMING',
          skills: [
            'Custom Website Designing',
            'UI / UX Design',
            'Web Development',
            'Responsive Web Design',
            'CSS Development',
            'Maintaining websites',
            'enhancing with new technologies'
          ]
        }
      ]
    },
    {
      id: 'multimedia-vfx',
      title: 'DIPLOMA IN ADVANCED MULTIMEDIA ANIMATION & VFX',
      className: 'nuke_bg',
      softwares: [
        'Adobe Photoshop',
        'CorelDraw',
        'Adobe Illustrator',
        'Adobe InDesign',
        'Adobe XD',
        'Figma',
        'Canva',
        'UI Design',
        '3Ds Max',
        'V-RAY Light',
        'V-RAY Material',
        'Corona Render',
        'AutoCAD',
        'SketchUp',
        'Adobe After Effects',
        'Adobe Premiere Pro',
        'Silhouette FX',
        'Nuke',
        'Adobe Audition'
      ],
      sections: [
        {
          title: 'Complete Multimedia Package',
          skills: [
            'All Graphic Design Skills',
            'All 3D Modelling & Animation Skills',
            'All Video Editing & VFX Skills',
            'Advanced Compositing',
            'Professional VFX Techniques',
            'Industry-Standard Workflow'
          ]
        }
      ]
    }
  ];

  const batchTimings = [
    'Monday to Saturday',
    '(8 am - 10 am)',
    '(10 am - 12 pm)',
    '(12 pm - 2 pm)',
    '(2 pm - 4 pm)',
    '(4 pm - 6 pm)',
    '(6 pm - 8 pm)',
    '(7 pm - 9 pm)',
    'Sunday',
    '(9 am - 2 pm)',
    'The above batch timings mentioned include 1 hour practice session.'
  ];

  return (
    <section className={styles.coursesSection}>
      <div className="container">
        <motion.div 
          className={styles.sectionHeader}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h1>DIPLOMA COURSES</h1>
        </motion.div>

        <div className={styles.accordionContainer}>
          {courses.map((course, index) => (
            <motion.div
              key={course.id}
              className={`${styles.courseAccordion} ${styles[course.className]}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div 
                className={styles.courseHeader}
                onClick={() => toggleCourse(course.id)}
              >
                <h2 className={styles.courseTitle}>{course.title}</h2>
                <div className={styles.expandIcon}>
                  {expandedCourse === course.id ? <FiMinus /> : <FiPlus />}
                </div>
              </div>

              <AnimatePresence>
                {expandedCourse === course.id && (
                  <motion.div
                    className={styles.courseContent}
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.5, ease: 'easeInOut' }}
                  >
                    <div className={styles.courseDetails}>
                      <div className={styles.courseRow}>
                        {/* Software & Batch Timing Column */}
                        <div className={styles.courseColumn}>
                          <div className={styles.detailSection}>
                            <h3 className={styles.sectionTitle}>SOFTWARES COVERED</h3>
                            <div className={styles.softwareList}>
                              {course.softwares.map((software, idx) => (
                                <p key={idx}>
                                  <FiCheckSquare className={styles.checkIcon} />
                                  {software}
                                </p>
                              ))}
                            </div>
                          </div>

                          <div className={styles.detailSection}>
                            <h3 className={styles.sectionTitle}>Batch Timings</h3>
                            {batchTimings.map((timing, idx) => (
                              <p key={idx} className={styles.timingItem}>
                                {timing.includes('Monday') || timing.includes('Sunday') || timing.includes('above') ? (
                                  <>
                                    <FiCheckSquare className={styles.checkIcon} />
                                    {timing}
                                  </>
                                ) : (
                                  <span className={styles.timingDetail}>{timing}</span>
                                )}
                              </p>
                            ))}
                          </div>
                        </div>

                        {/* Course Sections */}
                        {course.sections.map((section, sectionIdx) => (
                          <div key={sectionIdx} className={styles.courseColumn}>
                            <div className={styles.detailSection}>
                              <h3 className={styles.sectionTitle}>{section.title}</h3>
                              <div className={styles.skillsList}>
                                {section.skills.map((skill, skillIdx) => (
                                  <p key={skillIdx}>
                                    <FiCheckSquare className={styles.checkIcon} />
                                    {skill}
                                  </p>
                                ))}
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoursesAccordion;


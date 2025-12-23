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
      title: 'DIPLOMA IN ADVANCED GRAPHIC DESIGNING & UI/UX DESIGN WITH AI INTEGRATION',
      className: 'ps_bg',
      softwares: [
        'Adobe Photoshop', 
        'CorelDRAW', 
        'Adobe Illustrator', 
        'Adobe InDesign', 
        'Adobe XD', 
        'Figma', 
        'Canva'
      ],
      duration: [
        'Duration: 4 Months',
      ],
      sections: [
        {
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
            'Image Manipulation & Effects',
            'Banner, Poster & Catalog Design',
            'Page Effects & Border Effects',
            'Frame & Shadow Effects',
            'Water & Mirror Effects',
            '3D Box & Text Effects',
            'Karizma Album Design',
            'Generative AI (Generative Fill, Neural Filters, Content-Aware Fill)',
            'AI Object Selection'
          ]
        },
        {
          title: 'Vector Graphics',
          skills: [
            'Vector vs Raster Graphics',
            'CorelDRAW Basics & Interface',
            'Digital Illustration Techniques',
            'Logo Design & Tracing',
            'Corporate Identity & Branding',
            'Print Collaterals (Brochure, Business Card, Leaflets)',
            'Visiting Card Design (3.5" x 2" with Bleed)',
            'Packaging & Label Design',
            'Advertising Design & Hoardings',
            'Drawing & Shape Tools',
            'Shaping Operations (Weld, Trim, Intersect, Combine)',
            'Fill Types (Fountain, Pattern, Texture, Mesh)',
            'Special Effects (Contour, Extrude, Blend, Shadow, PowerClip)',
            'Magazine Cover Design',
            'Text to Vector with AI (Adobe Firefly)',
            'Generative Recolor',
            'Retype (AI OCR)',
            'Image Trace & Vectorization'
          ]
        },
        {
          title: 'UI/UX Design',
          skills: [
            'Adobe XD & Figma Fundamentals',
            'User Interface Design Principles',
            'User Experience Research',
            'Wireframing & Prototyping',
            'Artboard & Repeat Grid',
            'Interactive Prototypes',
            'Figma Collaboration',
            'Design Systems'
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
        'CorelDRAW', 
        'Adobe Illustrator', 
        'Adobe InDesign', 
        'Adobe XD', 
        'Figma', 
        'Canva',
        'Adobe After Effects',
        'Adobe Premiere Pro',
        'Adobe Media Encoder'
      ],
      duration: [
        'Duration: 6 Months',
      ],
      sections: [
        {
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
            'Image Manipulation & Effects',
            'Banner, Poster & Catalog Design',
            'Page Effects & Border Effects',
            'Frame & Shadow Effects',
            'Water & Mirror Effects',
            '3D Box & Text Effects',
            'Karizma Album Design',
            'Generative AI (Generative Fill, Neural Filters, Content-Aware Fill)',
            'AI Object Selection'
          ]
        },
        {
          title: 'Vector Graphics',
          skills: [
            'Vector vs Raster Graphics',
            'CorelDRAW Basics & Interface',
            'Digital Illustration Techniques',
            'Logo Design & Tracing',
            'Corporate Identity & Branding',
            'Print Collaterals (Brochure, Business Card, Leaflets)',
            'Visiting Card Design (3.5" x 2" with Bleed)',
            'Packaging & Label Design',
            'Advertising Design & Hoardings',
            'Drawing & Shape Tools',
            'Shaping Operations (Weld, Trim, Intersect, Combine)',
            'Fill Types (Fountain, Pattern, Texture, Mesh)',
            'Special Effects (Contour, Extrude, Blend, Shadow, PowerClip)',
            'Magazine Cover Design',
            'Text to Vector with AI (Adobe Firefly)',
            'Generative Recolor',
            'Retype (AI OCR)',
            'Image Trace & Vectorization'
          ]
        },
        {
          title: 'UI/UX Design',
          skills: [
            'Adobe XD & Figma Fundamentals',
            'User Interface Design Principles',
            'User Experience Research',
            'Wireframing & Prototyping',
            'Artboard & Repeat Grid',
            'Interactive Prototypes',
            'Figma Collaboration',
            'Design Systems'
          ]
        },
        {
          title: 'Adobe After Effects',
          skills: [
            'Project Setup & Composition',
            'Animation & Keyframing Basics',
            'Image Scale & Shape Animation',
            'Text Animation with Path',
            'Hold Keyframes & Text Effects',
            'Masking Techniques',
            'Lower Third Design (Mask Path)',
            'Trim Path (Counter Animation)',
            'Layer Animation & Audio Integration',
            'Shatter & CC Split Effects',
            'CC Scatterize & Particle Systems',
            'Fire & Light Effects',
            'CC Rainfall & Radio Waves',
            '3D Layers & Camera Animation',
            'Alpha & Luma Matte',
            'Graph Editor & Repeater',
            'Time Control & Double Roll',
            'Green/Blue Screen Keying',
            'Null Objects & Parenting',
            'Loop Expressions (loopOut)',
            'Motion Tracking & Wiggler',
            'Roto Brush 2/3 (AI-Powered)',
            'Content-Aware Fill for Video',
            'Scene Edit Detection',
            'AI Face & Motion Tracking',
            'Final Render & Collect Files'
          ]
        },
        {
          title: 'Adobe Premiere Pro',
          skills: [
            'Video Editing Fundamentals',
            'Timeline & Clip Management',
            'Text-Based Editing (AI Transcription)',
            'Auto Ducking & AI Audio Tagging',
            'Scene Edit Detection',
            'Auto Reframe',
            'Green/Blue Screen Removal',
            'Track Matte Key',
            'Video & Audio Transitions',
            'Freeze Frame & Timecode',
            'Color Grading (Leave Color, CC Color)',
            'Lighting Effects & Camera Blur',
            'Legacy Title & Essential Graphics',
            'Noise Removal (DeNoise)',
            'Professional Export & Rendering'
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
        'CorelDRAW', 
        '3Ds Max', 
        'V-Ray Rendering', 
        'Corona Render', 
        'Autocad', 
        'SketchUp'
      ],
      duration: [
        'Duration: 6 Months',
      ],
      sections: [
        {
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
            'Image Manipulation & Effects',
            'Banner, Poster & Catalog Design',
            'Page Effects & Border Effects',
            'Frame & Shadow Effects',
            'Water & Mirror Effects',
            '3D Box & Text Effects',
            'Karizma Album Design',
            'Generative AI (Generative Fill, Neural Filters, Content-Aware Fill)',
            'AI Object Selection'
          ]
        },
        {
          title: 'Vector Graphics',
          skills: [
            'Vector vs Raster Graphics',
            'CorelDRAW Basics & Interface',
            'Digital Illustration Techniques',
            'Logo Design & Tracing',
            'Corporate Identity & Branding',
            'Print Collaterals (Brochure, Business Card, Leaflets)',
            'Visiting Card Design (3.5" x 2" with Bleed)',
            'Packaging & Label Design',
            'Advertising Design & Hoardings',
            'Drawing & Shape Tools',
            'Shaping Operations (Weld, Trim, Intersect, Combine)',
            'Fill Types (Fountain, Pattern, Texture, Mesh)',
            'Special Effects (Contour, Extrude, Blend, Shadow, PowerClip)',
            'Magazine Cover Design',
            'Text to Vector with AI (Adobe Firefly)',
            'Generative Recolor',
            'Retype (AI OCR)',
            'Image Trace & Vectorization'
          ]
        },
        {
          title: '3D Modeling',
          skills: [
            'Exhibition & Event Design (Standard Sizes)',
            'Exhibition Stall Design (3m, 6m, 10m)',
            'Reception Counter Design (Small, Medium, Large)',
            'Fascia/Name Board Design',
            'Podium & Meeting Room Layout',
            'Pantry Room Design',
            'Interior Design & Space Planning',
            'Measurement Systems (Metric & Imperial)',
            'Low Poly & High Poly Modeling',
            'Advanced Texturing & UV Mapping',
            'Camera Setup & Composition',
            'Lighting Techniques (3-Point, HDRI)',
            '3D Object Painting',
            'V-Ray & Corona Rendering',
            'Visual Effects Integration'
          ]
        },
        {
          title: '3D Animation',
          skills: [
            'Animation Principles',
            'Object & Transform Animation',
            'Character Rigging & Animation',
            'Architectural Walkthroughs',
            '3D Special Effects',
            'Camera Animation',
            'Digital Filmmaking Concepts'
          ]
        },
        {
          title: 'AutoCAD',
          skills: [
            'Technical Drawing Basics',
            'Layout Plans & Elevations',
            'Working Drawings & Detailing',
            'Perspective Views',
            '2D to 3D Conversion'
          ]
        },
        {
          title: 'Visualization & Storyboarding',
          skills: [
            'Artistic Visualization',
            'Drawing Fundamentals',
            'Sketching Techniques (Lines, Shading, Tracing)',
            'Character Development',
            'Storyboard Creation',
            'Classical Animation Principles',
            'FlipBook Design with Light Box',
            'Animation Layout & Design'
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
        'CorelDRAW', 
        '3Ds Max', 
        'V-Ray Rendering', 
        'Corona Render', 
        'Autocad', 
        'SketchUp', 
        'Adobe After Effects', 
        'Adobe Premiere Pro', 
        'Adobe Media Encoder'
      ],
      duration: [
        'Duration: 8 Months',
      ],
      sections: [
        {
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
            'Image Manipulation & Effects',
            'Banner, Poster & Catalog Design',
            'Page Effects & Border Effects',
            'Frame & Shadow Effects',
            'Water & Mirror Effects',
            '3D Box & Text Effects',
            'Karizma Album Design',
            'Generative AI (Generative Fill, Neural Filters, Content-Aware Fill)',
            'AI Object Selection'
          ]
        },
        {
          title: 'Vector Graphics',
          skills: [
            'Vector vs Raster Graphics',
            'CorelDRAW Basics & Interface',
            'Digital Illustration Techniques',
            'Logo Design & Tracing',
            'Corporate Identity & Branding',
            'Print Collaterals (Brochure, Business Card, Leaflets)',
            'Visiting Card Design (3.5" x 2" with Bleed)',
            'Packaging & Label Design',
            'Advertising Design & Hoardings',
            'Drawing & Shape Tools',
            'Shaping Operations (Weld, Trim, Intersect, Combine)',
            'Fill Types (Fountain, Pattern, Texture, Mesh)',
            'Special Effects (Contour, Extrude, Blend, Shadow, PowerClip)',
            'Magazine Cover Design',
            'Text to Vector with AI (Adobe Firefly)',
            'Generative Recolor',
            'Retype (AI OCR)',
            'Image Trace & Vectorization'
          ]
        },
        {
          title: '3D Modeling',
          skills: [
            'Exhibition & Event Design (Standard Sizes)',
            'Exhibition Stall Design (3m, 6m, 10m)',
            'Reception Counter Design (Small, Medium, Large)',
            'Fascia/Name Board Design',
            'Podium & Meeting Room Layout',
            'Pantry Room Design',
            'Interior Design & Space Planning',
            'Measurement Systems (Metric & Imperial)',
            'Low Poly & High Poly Modeling',
            'Advanced Texturing & UV Mapping',
            'Camera Setup & Composition',
            'Lighting Techniques (3-Point, HDRI)',
            '3D Object Painting',
            'V-Ray & Corona Rendering',
            'Visual Effects Integration'
          ]
        },
        {
          title: '3D Animation',
          skills: [
            'Animation Principles',
            'Object & Transform Animation',
            'Character Rigging & Animation',
            'Architectural Walkthroughs',
            '3D Special Effects',
            'Camera Animation',
            'Digital Filmmaking Concepts'
          ]
        },
        {
          title: 'AutoCAD',
          skills: [
            'Technical Drawing Basics',
            'Layout Plans & Elevations',
            'Working Drawings & Detailing',
            'Perspective Views',
            '2D to 3D Conversion'
          ]
        },
        {
          title: 'Visualization & Storyboarding',
          skills: [
            'Artistic Visualization',
            'Drawing Fundamentals',
            'Sketching Techniques (Lines, Shading, Tracing)',
            'Character Development',
            'Storyboard Creation',
            'Classical Animation Principles',
            'FlipBook Design with Light Box',
            'Animation Layout & Design'
          ]
        },
        {
          title: 'Adobe After Effects',
          skills: [
            'Project Setup & Composition',
            'Animation & Keyframing Basics',
            'Image Scale & Shape Animation',
            'Text Animation with Path',
            'Hold Keyframes & Text Effects',
            'Masking Techniques',
            'Lower Third Design (Mask Path)',
            'Trim Path (Counter Animation)',
            'Layer Animation & Audio Integration',
            'Shatter & CC Split Effects',
            'CC Scatterize & Particle Systems',
            'Fire & Light Effects',
            'CC Rainfall & Radio Waves',
            '3D Layers & Camera Animation',
            'Alpha & Luma Matte',
            'Graph Editor & Repeater',
            'Time Control & Double Roll',
            'Green/Blue Screen Keying',
            'Null Objects & Parenting',
            'Loop Expressions (loopOut)',
            'Motion Tracking & Wiggler',
            'Roto Brush 2/3 (AI-Powered)',
            'Content-Aware Fill for Video',
            'Scene Edit Detection',
            'AI Face & Motion Tracking',
            'Final Render & Collect Files'
          ]
        },
        {
          title: 'Adobe Premiere Pro',
          skills: [
            'Video Editing Fundamentals',
            'Timeline & Clip Management',
            'Text-Based Editing (AI Transcription)',
            'Auto Ducking & AI Audio Tagging',
            'Scene Edit Detection',
            'Auto Reframe',
            'Green/Blue Screen Removal',
            'Track Matte Key',
            'Video & Audio Transitions',
            'Freeze Frame & Timecode',
            'Color Grading (Leave Color, CC Color)',
            'Lighting Effects & Camera Blur',
            'Legacy Title & Essential Graphics',
            'Noise Removal (DeNoise)',
            'Professional Export & Rendering'
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
        'HTML5',
        'CSS3 / SCSS',
        'JavaScript / jQuery',
        'React.js',
        'Bootstrap 4 & 5',
        'WordPress',
        'Notepad++',
        'Sublime Text',
        'Visual Studio Code',
        'Brackets'
      ],
      duration: [
        'Duration: 6 Months',
      ],
      sections: [
        {
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
            'Image Manipulation & Effects',
            'Banner, Poster & Catalog Design',
            'Page Effects & Border Effects',
            'Frame & Shadow Effects',
            'Water & Mirror Effects',
            '3D Box & Text Effects',
            'Karizma Album Design',
            'Generative AI (Generative Fill, Neural Filters, Content-Aware Fill)',
            'AI Object Selection'
          ]
        },
        {
          title: 'Vector Graphics',
          skills: [
            'Vector vs Raster Graphics',
            'CorelDRAW Basics & Interface',
            'Digital Illustration Techniques',
            'Logo Design & Tracing',
            'Corporate Identity & Branding',
            'Print Collaterals (Brochure, Business Card, Leaflets)',
            'Visiting Card Design (3.5" x 2" with Bleed)',
            'Packaging & Label Design',
            'Advertising Design & Hoardings',
            'Drawing & Shape Tools',
            'Shaping Operations (Weld, Trim, Intersect, Combine)',
            'Fill Types (Fountain, Pattern, Texture, Mesh)',
            'Special Effects (Contour, Extrude, Blend, Shadow, PowerClip)',
            'Magazine Cover Design',
            'Text to Vector with AI (Adobe Firefly)',
            'Generative Recolor',
            'Retype (AI OCR)',
            'Image Trace & Vectorization'
          ]
        },
        {
          title: 'Web Design Fundamentals',
          skills: [
            'Web Layout Standards (1500-1800px Width)',
            'Working Area Guidelines (980-1170px)',
            'Header Design (Logo, Menu, Icons)',
            'Banner Design (1200-1500px)',
            'Gallery & Product Sections',
            'Footer Design (Logo, Social Links, Copyright)',
            'Typography Standards (12-30px)',
            'PSD to Web Conversion'
          ]
        },
        {
          title: 'HTML & CSS Development',
          skills: [
            'HTML5 Structure & Semantics',
            'CSS3 Styling & Layouts',
            'PSD to HTML Conversion',
            'Responsive Design Techniques',
            'Bootstrap Framework',
            'Flexbox & Grid Systems',
            'Forms & Tables',
            'Media Elements'
          ]
        },
        {
          title: 'UI/UX Design',
          skills: [
            'Adobe XD & Figma Prototyping',
            'User Interface Principles',
            'User Experience Research',
            'Wireframing & Mockups',
            'Interactive Prototypes',
            'Figma Collaboration',
            'Design Systems & Style Guides'
          ]
        },
        {
          title: 'JavaScript Development',
          skills: [
            'JavaScript Fundamentals',
            'Functions & Variables',
            'DOM Manipulation',
            'Event Handling',
            'Form Validation',
            'jQuery Library',
            'AJAX Requests'
          ]
        },
        {
          title: 'WordPress Development',
          skills: [
            'WordPress Installation',
            'Theme Customization',
            'Plugin Integration',
            'Page & Post Management',
            'Widget Configuration',
            'SEO Optimization'
          ]
        },
        {
          title: 'Advanced Technologies',
          skills: [
            'React.js Components',
            'Server-Side Scripting (PHP)',
            'Database Management (MySQL)',
            'CMS Development',
            'Website Deployment'
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
        'CorelDRAW', 
        'Adobe Illustrator', 
        'Adobe InDesign', 
        'Adobe XD', 
        'Figma', 
        'Canva', 
        'Adobe After Effects', 
        'Adobe Premiere Pro', 
        'Adobe Media Encoder', 
        '3Ds Max', 
        'V-Ray Rendering', 
        'Corona Render', 
        'Autocad', 
        'SketchUp'
      ],
      duration: [
        'Duration: 10 Months',
      ],
      sections: [
        {
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
            'Image Manipulation & Effects',
            'Banner, Poster & Catalog Design',
            'Page Effects & Border Effects',
            'Frame & Shadow Effects',
            'Water & Mirror Effects',
            '3D Box & Text Effects',
            'Karizma Album Design',
            'Generative AI (Generative Fill, Neural Filters, Content-Aware Fill)',
            'AI Object Selection'
          ]
        },
        {
          title: 'Vector Graphics',
          skills: [
            'Vector vs Raster Graphics',
            'CorelDRAW Basics & Interface',
            'Digital Illustration Techniques',
            'Logo Design & Tracing',
            'Corporate Identity & Branding',
            'Print Collaterals (Brochure, Business Card, Leaflets)',
            'Visiting Card Design (3.5" x 2" with Bleed)',
            'Packaging & Label Design',
            'Advertising Design & Hoardings',
            'Drawing & Shape Tools',
            'Shaping Operations (Weld, Trim, Intersect, Combine)',
            'Fill Types (Fountain, Pattern, Texture, Mesh)',
            'Special Effects (Contour, Extrude, Blend, Shadow, PowerClip)',
            'Magazine Cover Design',
            'Text to Vector with AI (Adobe Firefly)',
            'Generative Recolor',
            'Retype (AI OCR)',
            'Image Trace & Vectorization'
          ]
        },
        {
          title: 'UI/UX Design',
          skills: [
            'Adobe XD & Figma Fundamentals',
            'User Interface Design Principles',
            'User Experience Research',
            'Wireframing & Prototyping',
            'Artboard & Repeat Grid',
            'Interactive Prototypes',
            'Figma Collaboration',
            'Design Systems'
          ]
        },
        {
          title: '3D Modeling',
          skills: [
            'Exhibition & Event Design (Standard Sizes)',
            'Exhibition Stall Design (3m, 6m, 10m)',
            'Reception Counter Design (Small, Medium, Large)',
            'Fascia/Name Board Design',
            'Podium & Meeting Room Layout',
            'Pantry Room Design',
            'Interior Design & Space Planning',
            'Measurement Systems (Metric & Imperial)',
            'Low Poly & High Poly Modeling',
            'Advanced Texturing & UV Mapping',
            'Camera Setup & Composition',
            'Lighting Techniques (3-Point, HDRI)',
            '3D Object Painting',
            'V-Ray & Corona Rendering',
            'Visual Effects Integration'
          ]
        },
        {
          title: '3D Animation',
          skills: [
            'Animation Principles',
            'Object & Transform Animation',
            'Character Rigging & Animation',
            'Architectural Walkthroughs',
            '3D Special Effects',
            'Camera Animation',
            'Digital Filmmaking Concepts'
          ]
        },
        {
          title: 'AutoCAD',
          skills: [
            'Technical Drawing Basics',
            'Layout Plans & Elevations',
            'Working Drawings & Detailing',
            'Perspective Views',
            '2D to 3D Conversion'
          ]
        },
        {
          title: 'Visualization & Storyboarding',
          skills: [
            'Artistic Visualization',
            'Drawing Fundamentals',
            'Sketching Techniques (Lines, Shading, Tracing)',
            'Character Development',
            'Storyboard Creation',
            'Classical Animation Principles',
            'FlipBook Design with Light Box',
            'Animation Layout & Design'
          ]
        },
        {
          title: 'Adobe After Effects',
          skills: [
            'Project Setup & Composition',
            'Animation & Keyframing Basics',
            'Image Scale & Shape Animation',
            'Text Animation with Path',
            'Hold Keyframes & Text Effects',
            'Masking Techniques',
            'Lower Third Design (Mask Path)',
            'Trim Path (Counter Animation)',
            'Layer Animation & Audio Integration',
            'Shatter & CC Split Effects',
            'CC Scatterize & Particle Systems',
            'Fire & Light Effects',
            'CC Rainfall & Radio Waves',
            '3D Layers & Camera Animation',
            'Alpha & Luma Matte',
            'Graph Editor & Repeater',
            'Time Control & Double Roll',
            'Green/Blue Screen Keying',
            'Null Objects & Parenting',
            'Loop Expressions (loopOut)',
            'Motion Tracking & Wiggler',
            'Roto Brush 2/3 (AI-Powered)',
            'Content-Aware Fill for Video',
            'Scene Edit Detection',
            'AI Face & Motion Tracking',
            'Final Render & Collect Files'
          ]
        },
        {
          title: 'Adobe Premiere Pro',
          skills: [
            'Video Editing Fundamentals',
            'Timeline & Clip Management',
            'Text-Based Editing (AI Transcription)',
            'Auto Ducking & AI Audio Tagging',
            'Scene Edit Detection',
            'Auto Reframe',
            'Green/Blue Screen Removal',
            'Track Matte Key',
            'Video & Audio Transitions',
            'Freeze Frame & Timecode',
            'Color Grading (Leave Color, CC Color)',
            'Lighting Effects & Camera Blur',
            'Legacy Title & Essential Graphics',
            'Noise Removal (DeNoise)',
            'Professional Export & Rendering'
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
                            <h3 className={styles.sectionTitle}>DURATION</h3>
                            <div className={styles.durationList}>
                              {course.duration.map((dur, idx) => (
                                <p key={idx}>
                                  <FiCheckSquare className={styles.checkIcon} />
                                  {dur}
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

                        {/* Course Sections - Split into 2 columns with better distribution */}
                        <div className={styles.courseColumn}>
                          {course.sections.filter((_, idx) => idx % 2 === 0).map((section, sectionIdx) => (
                            <div key={sectionIdx} className={styles.detailSection}>
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
                          ))}
                        </div>

                        <div className={styles.courseColumn}>
                          {course.sections.filter((_, idx) => idx % 2 === 1).map((section, sectionIdx) => (
                            <div key={sectionIdx} className={styles.detailSection}>
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
                          ))}
                        </div>
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


/**
 * Helmet Configuration for SEO Optimization
 * Based on keywords and metadata from index.html
 */
import { createLocalBusinessSchemas } from './localBusinessSchema';

// Breadcrumb Schema for Navigation
export const createBreadcrumbSchema = (items) => {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    'itemListElement': items.map((item, index) => ({
      '@type': 'ListItem',
      'position': index + 1,
      'name': item.name,
      'item': `https://shankarmultimedia.com${item.url}`
    }))
  };
};

// Usage examples:
export const homePageBreadcrumb = createBreadcrumbSchema([
  { name: 'Home', url: '/' }
]);

export const coursesPageBreadcrumb = createBreadcrumbSchema([
  { name: 'Home', url: '/' },
  { name: 'Courses', url: '/courses' }
]);

export const aboutPageBreadcrumb = createBreadcrumbSchema([
  { name: 'Home', url: '/' },
  { name: 'About', url: '/about' }
]);

export const placementsPageBreadcrumb = createBreadcrumbSchema([
  { name: 'Home', url: '/' },
  { name: 'Placements', url: '/placements' }
]);

export const contactPageBreadcrumb = createBreadcrumbSchema([
  { name: 'Home', url: '/' },
  { name: 'Contact', url: '/contact' }
]);

export const courseDetailBreadcrumb = (courseId, courseName) => createBreadcrumbSchema([
  { name: 'Home', url: '/' },
  { name: 'Courses', url: '/courses' },
  { name: courseName, url: `/courses/${courseId}` }
]);

// Course-Specific FAQ Schema
export const createCourseFAQSchema = (courseName, faqs) => {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    'mainEntity': faqs.map(faq => ({
      '@type': 'Question',
      'name': faq.question,
      'acceptedAnswer': {
        '@type': 'Answer',
        'text': faq.answer
      }
    }))
  };
};

// Graphic Design Course FAQ Schema
export const graphicDesignFAQSchema = (faqs) => createCourseFAQSchema('Graphic Design and UI/UX Design Course', faqs);

export const helmetConfig = {
  home: {
    title: 'Shankar Multimedia | Graphic Design, UI UX, Animation, VFX & Digital Marketing Institute in Mumbai',
    description: 'Join Shankar Multimedia Mumbai for Graphic Design, UI UX Design, Web Development, Digital Marketing, 3D Animation, VFX, Video Editing and AutoCAD courses with placement assistance and industry-focused training.',
    keywords: 'graphic design course mumbai, graphic design institute mumbai, ui ux design course mumbai, web development course mumbai, digital marketing course mumbai, animation course mumbai, 3d animation course mumbai, vfx course mumbai, video editing course mumbai, autocad course mumbai, multimedia institute mumbai, best multimedia institute mumbai, arena animation, maac, frameboxx, zica, iide, dgmark institute, shankar multimedia',
    canonical: 'https://shankarmultimedia.com/',
    ogImage: 'https://shankarmultimedia.com/images/og-image.webp',
    ogType: 'website',
    twitterCard: 'summary_large_image'
  },

  courses: {
    title: 'Multimedia, Design, Animation, VFX & Digital Marketing Courses in Mumbai',
    description: 'Explore industry-focused courses in Graphic Design, UI UX Design, Animation, VFX, Video Editing, Digital Marketing, Web Development and AutoCAD with placement support.',
    keywords: 'multimedia courses mumbai, graphic design training mumbai, ui ux classes mumbai, animation institute mumbai, vfx institute mumbai, web development classes mumbai, digital marketing training mumbai, professional courses mumbai',
    canonical: 'https://shankarmultimedia.com/students-work',
    ogImage: 'https://shankarmultimedia.com/images/og-image.webp'
  },

  about: {
    title: 'About Shankar Multimedia | Leading Multimedia Institute in Mumbai',
    description: 'Learn about Shankar Multimedia, a leading multimedia and technology training institute in Mumbai offering career-focused professional courses.',
    keywords: 'multimedia institute mumbai, graphic design institute mumbai, animation institute mumbai, digital marketing institute mumbai, ui ux institute mumbai, web development institute mumbai',
    canonical: 'https://shankarmultimedia.com/about',
    ogImage: 'https://shankarmultimedia.com/images/og-image.webp'
  },

  placements: {
    title: 'Placements & Student Success Stories',
    description: 'View placement records, student success stories and career opportunities after Graphic Design, UI UX, Animation, VFX, Web Development and Digital Marketing courses.',
    keywords: 'graphic designer jobs mumbai, ui ux jobs mumbai, web developer jobs mumbai, digital marketing jobs mumbai, animation jobs mumbai, vfx jobs mumbai, placement assistance mumbai',
    canonical: 'https://shankarmultimedia.com/placements',
    ogImage: 'https://shankarmultimedia.com/images/og-image.webp'
  },

  contact: {
    title: 'Contact Shankar Multimedia | Admissions & Course Enquiry in Mumbai',
    description: 'Contact Shankar Multimedia for admissions, counselling and course information. Enquire about Graphic Design, UI UX, Animation, VFX, Web Development, Digital Marketing and AutoCAD courses.',
    keywords: 'graphic design classes near me, animation classes near me, digital marketing classes near me, ui ux classes near me, web development classes near me, multimedia institute near me',
    canonical: 'https://shankarmultimedia.com/contact',
    ogImage: 'https://shankarmultimedia.com/images/og-image.webp'
  },

  graphicUiux: {
    title: 'Graphic Design & UI UX Design Course Mumbai | Shankar Multimedia',
    description: 'Professional Graphic Design and UI UX Design course in Mumbai covering Photoshop, Illustrator, Figma, Adobe XD and portfolio development.',
    keywords: 'graphic design course mumbai, ui ux course mumbai, figma course mumbai, graphic designer training mumbai, ui ux institute mumbai',
    canonical: 'https://shankarmultimedia.com/courses/advanced-graphic-and-uiux-design',
    ogImage: 'https://shankarmultimedia.com/images/og-image.webp'
  },

  motionGraphics: {
    title: 'Motion Graphics & Video Editing Course in Mumbai',
    description: 'Learn Adobe Premiere Pro, After Effects, motion graphics, video production and content editing with industry projects.',
    keywords: 'video editing course mumbai, motion graphics course mumbai, after effects course mumbai, premiere pro training mumbai',
    canonical: 'https://shankarmultimedia.com/courses/advanced-motion-graphic-and-video-editing',
    ogImage: 'https://shankarmultimedia.com/images/og-image.webp'
  },

  animation3d: {
    title: '3D Animation & Modeling Course in Mumbai',
    description: 'Learn Autodesk Maya, Blender, character animation, modelling, texturing and rendering with professional projects.',
    keywords: '3d animation course mumbai, maya course mumbai, blender course mumbai, animation institute mumbai',
    canonical: 'https://shankarmultimedia.com/courses/advanced-3d-animation-and-modeling',
    ogImage: 'https://shankarmultimedia.com/images/og-image.webp'
  },

  interiorDesign: {
    title: 'Interior Design & AutoCAD Course in Mumbai',
    description: 'Professional Interior Design and AutoCAD training in Mumbai for architecture, civil and interior design students.',
    keywords: 'interior design course mumbai, autocad course mumbai, autocad training mumbai, interior designing institute mumbai',
    canonical: 'https://shankarmultimedia.com/courses/advanced-interior-design',
    ogImage: 'https://shankarmultimedia.com/images/og-image.webp'
  },

  animationVfx: {
    title: '3D Animation & VFX Course in Mumbai',
    description: 'Master VFX, compositing, CGI, motion graphics and 3D animation using industry-standard tools.',
    keywords: 'vfx course mumbai, animation and vfx institute mumbai, compositing course mumbai, vfx training mumbai',
    canonical: 'https://shankarmultimedia.com/courses/advanced-3d-animation-and-vfx',
    ogImage: 'https://shankarmultimedia.com/images/og-image.webp'
  },

  webDevelopment: {
    title: 'Web Design & Full Stack Development Course in Mumbai',
    description: 'Learn HTML, CSS, JavaScript, React, Node.js, PHP and full stack web development with live projects.',
    keywords: 'web development course mumbai, full stack development course mumbai, react js course mumbai, php course mumbai, web designing course mumbai',
    canonical: 'https://shankarmultimedia.com/courses/advanced-web-design-and-development',
    ogImage: 'https://shankarmultimedia.com/images/og-image.webp'
  },

  digitalMarketing: {
    title: 'Digital Marketing Course in Mumbai',
    description: 'Learn SEO, Google Ads, Meta Ads, Content Marketing, Analytics and AI-powered digital marketing strategies.',
    keywords: 'digital marketing course mumbai, seo course mumbai, google ads course mumbai, social media marketing course mumbai, ai marketing course mumbai',
    canonical: 'https://shankarmultimedia.com/courses/advanced-digital-marketing',
    ogImage: 'https://shankarmultimedia.com/images/og-image.webp'
  },

  multimediaVfx: {
    title: 'Multimedia Animation & VFX Course in Mumbai',
    description: 'Comprehensive multimedia diploma covering Graphic Design, Animation, VFX, Video Editing and Motion Graphics.',
    keywords: 'multimedia course mumbai, animation and vfx course mumbai, multimedia institute mumbai, diploma in multimedia mumbai',
    canonical: 'https://shankarmultimedia.com/courses/advanced-multimedia-animation-and-vfx',
    ogImage: 'https://shankarmultimedia.com/images/og-image.webp'
  }
};

export const structuredData = {
  organizationSchema: {
    '@context': 'https://schema.org',
    '@type': 'EducationalOrganization',
    'name': 'Shankar Multimedia',
    'url': 'https://shankarmultimedia.com',
    'logo': 'https://shankarmultimedia.com/images/logo.webp',
    'description': 'Leading multimedia training institute in Mumbai offering diploma courses in Graphic Design with AI Integrationing, UI/UX, Web Development, Animation, VFX, Video Editing and AutoCAD with placement support.',
    'contactPoint': [
      {
        '@type': 'ContactPoint',
        'telephone': '+91-9223439986',
        'contactType': 'Dharmendra Singh',
        'email': 'info@shankarmultimedia.com'
      }
    ],
    'address': [
      {
        '@type': 'PostalAddress',
        'streetAddress': '501 and 507, 5th Floor, Accord Complex Opp. Railway Station and Bus Depot Goregaon East',
        'addressLocality': 'Mumbai',
        'addressRegion': 'Maharashtra',
        'postalCode': '400063',
        'addressCountry': 'India'
      },
      {
        '@type': 'PostalAddress',
        'streetAddress': '501 and 502, 5th Floor, Center Plaza Shivaji Chowk, Daftary Road Near Railway Station, Malad East',
        'addressLocality': 'Mumbai',
        'addressRegion': 'Maharashtra',
        'postalCode': '400097',
        'addressCountry': 'India'
      },
      {
        '@type': 'PostalAddress',
        'streetAddress': '402, 4th Floor, Neptune Uptown, N S Road Near Bhau Vada Pav, Near Railway Station, Mulund West',
        'addressLocality': 'Mumbai',
        'addressRegion': 'Maharashtra',
        'postalCode': '400080',
        'addressCountry': 'India'
      },
      {
        '@type': 'PostalAddress',
        'streetAddress': '207, 2nd Floor, MLDC Yashwant Orchid Opp. Tulinj Police Station, Central Park Road Near Railway Station, Nalasopara East',
        'addressLocality': 'Mumbai',
        'addressRegion': 'Maharashtra',
        'postalCode': '400208',
        'addressCountry': 'India'
      },
      {
        '@type': 'PostalAddress',
        'streetAddress': '804, 8th Floor, Orion West, Station Road Near Railway Station Santacruz West',
        'addressLocality': 'Mumbai',
        'addressRegion': 'Maharashtra',
        'postalCode': '400054',
        'addressCountry': 'India'
      }
    ],
    'sameAs': [
      'https://www.facebook.com/share/1JiWnFuzfD/',
      'https://www.instagram.com/shankarmultimedia',
      'https://www.youtube.com/@ShankarMultimediaMumbai'
    ]
  },

  localBusinessSchemas: createLocalBusinessSchemas(),

};
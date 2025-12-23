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

export const helmetConfig = {
  home: {
    title: 'Shankar Multimedia | Graphic Design with AI Integration, Motion Graphic Design with AI Integration, 3D Animation, VFX Courses in Mumbai',
    description: 'Join Shankar Multimedia for professional diploma courses in Graphic Design with AI Integrationing, UI/UX Design, Web Development, Full Stack Development, 3D Animation, VFX, Video Editing & AutoCAD with 100% job placement guarantee. Training centers in Goregaon, Malad, Santacruz, Mulund, Nalasopara & Ghatkopar.',
    keywords: 'arena, maac, framebox, Graphic Design with AI Integrationing course in mumbai, best Graphic Design with AI Integration training mumbai, Graphic Design with AI Integration classes goregaon, ui ux design course mumbai, ui ux training mumbai, ui ux design andheri, web designing course in mumbai, web design training mumbai, web development institute mumbai, web developing classes, html css javascript course mumbai, full stack web development course mumbai, full stack developer course mumbai, php laravel course mumbai, animation course in mumbai, 2d animation training mumbai, 3d animation classes goregaon, 3d animation institute goregaon, multimedia animation diploma mumbai, vfx animation course mumbai, advanced animation institute mumbai, 3d modelling animation training mumbai, maya blender animation course mumbai, motion graphics course mumbai, video editing training mumbai, video editing course mumbai, vfx effects classes goregaon, motion Graphic Design with AI Integration institute mumbai, after effects premiere pro course mumbai, video editing bootcamp mumbai, advanced vfx workshop mumbai, compositing vfx training mumbai, film video editing course mumbai, autocad course in mumbai, autocad training goregaon mumbai, best autocad classes mumbai, 2d 3d autocad certification mumbai, autocad mechanical course mumbai, civil autocad training mumbai, interior design autocad workshop mumbai, autocad architecture institute mumbai, Graphic Design with AI Integration classes goregaon east, Graphic Design with AI Integration institute goregaon mumbai, web designing course goregaon, full stack php course goregaon, animation classes goregaon west, vfx training goregaon mumbai, video editing course goregaon, autocad classes goregaon east, Graphic Design with AI Integration classes malad west, ui ux design training malad, best Graphic Design with AI Integration institute malad mumbai, web designing course in malad, web development classes malad, full stack web development malad, php laravel course malad mumbai, animation course in malad, 2d animation classes malad west, 3d animation training malad, vfx course malad mumbai, motion graphics institute malad, video editing classes malad, autocad course in malad, autocad training malad west, autocad classes malad mumbai, civil autocad malad, full stack developer course malad, Graphic Design with AI Integrationing course in santacruz, Graphic Design with AI Integration training santacruz west, ui ux design santacruz east, web development institute santacruz, web designing workshop santacruz, full stack php course santacruz mumbai, animation classes santacruz west, vfx effects training santacruz, motion graphics santacruz, video editing institute santacruz east, autocad course santacruz west, Graphic Design with AI Integrationing course in mulund, Graphic Design with AI Integration institute mulund west, ui ux training mulund east, web designing classes mulund, full stack developer course mulund, php laravel training mulund, animation institute mulund mumbai, 3d animation classes mulund west, vfx training mulund, video editing course mulund east, autocad classes mulund, Graphic Design with AI Integrationing course in nalasopara, Graphic Design with AI Integration classes nalasopara west, ui ux design training nalasopara, best Graphic Design with AI Integration institute nalasopara mumbai, web designing course nalasopara, web development classes nalasopara east, full stack web development nalasopara, animation course nalasopara, 2d 3d animation training nalasopara, vfx course nalasopara west, video editing classes nalasopara, autocad training nalasopara mumbai, Graphic Design with AI Integrationing course in ghatkopar, Graphic Design with AI Integration institute ghatkopar west, ui ux design ghatkopar east, web development classes ghatkopar, full stack web course ghatkopar mumbai, animation training ghatkopar west, vfx course ghatkopar, video editing classes ghatkopar east, autocad classes ghatkopar west, Graphic Design with AI Integrationing course in andheri, ui ux design andheri west, web development classes andheri, animation training andheri mumbai, vfx course andheri east, video editing institute andheri, autocad training andheri west, full stack course andheri, Graphic Design with AI Integration classes andheri east, web designing workshop andheri, 3d animation andheri, motion graphics training andheri, diploma in animation andheri mumbai, Graphic Design with AI Integrationing course in borivali, web design classes borivali west, animation institute borivali, vfx training borivali mumbai, video editing course borivali, autocad classes borivali east, full stack developer borivali, ui ux design borivali, Graphic Design with AI Integration training borivali west, web development bootcamp borivali, 2d 3d animation borivali, motion graphics borivali, multimedia course borivali mumbai, Graphic Design with AI Integrationing course in kandivali, web designing training kandivali west, animation classes kandivali east, vfx institute kandivali, video editing kandivali mumbai, autocad course kandivali west, full stack php kandivali, Graphic Design with AI Integration classes kandivali, ui ux training kandivali, 3d modelling course kandivali, web development classes kandivali east, diploma in vfx kandivali, Graphic Design with AI Integration job in mumbai, Graphic Design with AI Integrationer jobs goregaon, ui ux jobs malad, web developer jobs santacruz, animation jobs mulund, vfx jobs nalasopara, video editing jobs ghatkopar, autocad jobs mumbai, full stack developer jobs andheri, php jobs borivali, multimedia jobs kandivali, near me, animation, mumbai, in',
    canonical: 'https://shankarmultimedia.com/',
    ogImage: 'https://shankarmultimedia.com/images/og-image.jpg',
    ogType: 'website',
    twitterCard: 'summary_large_image'
  },
  
  courses: {
    title: 'Professional Multimedia & Design Courses in Mumbai | Shankar Multimedia',
    description: 'Explore our comprehensive diploma courses: Graphic Design with AI Integration, UI/UX Design, Web Development, Full Stack Development (PHP, Laravel, Node.js), 3D Animation (Maya, Blender), 2D Animation, VFX, Video Editing, and AutoCAD. Industry-expert training with 100% placement support across all Mumbai centers.',
    keywords: 'arena, maac, framebox, Graphic Design with AI Integrationing course in mumbai, best Graphic Design with AI Integration training mumbai, Graphic Design with AI Integration classes goregaon, ui ux design course mumbai, ui ux training mumbai, ui ux design andheri, web designing course in mumbai, web design training mumbai, web development institute mumbai, web developing classes, html css javascript course mumbai, full stack web development course mumbai, full stack developer course mumbai, php laravel course mumbai, animation course in mumbai, 2d animation training mumbai, 3d animation classes goregaon, 3d animation institute goregaon, multimedia animation diploma mumbai, vfx animation course mumbai, advanced animation institute mumbai, 3d modelling animation training mumbai, maya blender animation course mumbai, motion graphics course mumbai, video editing training mumbai, video editing course mumbai, vfx effects classes goregaon, motion Graphic Design with AI Integration institute mumbai, after effects premiere pro course mumbai, video editing bootcamp mumbai, advanced vfx workshop mumbai, compositing vfx training mumbai, film video editing course mumbai, autocad course in mumbai, autocad training goregaon mumbai, best autocad classes mumbai, 2d 3d autocad certification mumbai, autocad mechanical course mumbai, civil autocad training mumbai, interior design autocad workshop mumbai, autocad architecture institute mumbai, Graphic Design with AI Integration classes goregaon east, Graphic Design with AI Integration institute goregaon mumbai, web designing course goregaon, full stack php course goregaon, animation classes goregaon west, vfx training goregaon mumbai, video editing course goregaon, autocad classes goregaon east, Graphic Design with AI Integration classes malad west, ui ux design training malad, best Graphic Design with AI Integration institute malad mumbai, web designing course in malad, web development classes malad, full stack web development malad, php laravel course malad mumbai, animation course in malad, 2d animation classes malad west, 3d animation training malad, vfx course malad mumbai, motion graphics institute malad, video editing classes malad, autocad course in malad, autocad training malad west, autocad classes malad mumbai, civil autocad malad, full stack developer course malad, Graphic Design with AI Integrationing course in santacruz, Graphic Design with AI Integration training santacruz west, ui ux design santacruz east, web development institute santacruz, web designing workshop santacruz, full stack php course santacruz mumbai, animation classes santacruz west, vfx effects training santacruz, motion graphics santacruz, video editing institute santacruz east, autocad course santacruz west, Graphic Design with AI Integrationing course in mulund, Graphic Design with AI Integration institute mulund west, ui ux training mulund east, web designing classes mulund, full stack developer course mulund, php laravel training mulund, animation institute mulund mumbai, 3d animation classes mulund west, vfx training mulund, video editing course mulund east, autocad classes mulund, Graphic Design with AI Integrationing course in nalasopara, Graphic Design with AI Integration classes nalasopara west, ui ux design training nalasopara, best Graphic Design with AI Integration institute nalasopara mumbai, web designing course nalasopara, web development classes nalasopara east, full stack web development nalasopara, animation course nalasopara, 2d 3d animation training nalasopara, vfx course nalasopara west, video editing classes nalasopara, autocad training nalasopara mumbai, Graphic Design with AI Integrationing course in ghatkopar, Graphic Design with AI Integration institute ghatkopar west, ui ux design ghatkopar east, web development classes ghatkopar, full stack web course ghatkopar mumbai, animation training ghatkopar west, vfx course ghatkopar, video editing classes ghatkopar east, autocad classes ghatkopar west, Graphic Design with AI Integrationing course in andheri, ui ux design andheri west, web development classes andheri, animation training andheri mumbai, vfx course andheri east, video editing institute andheri, autocad training andheri west, full stack course andheri, Graphic Design with AI Integration classes andheri east, web designing workshop andheri, 3d animation andheri, motion graphics training andheri, diploma in animation andheri mumbai, Graphic Design with AI Integrationing course in borivali, web design classes borivali west, animation institute borivali, vfx training borivali mumbai, video editing course borivali, autocad classes borivali east, full stack developer borivali, ui ux design borivali, Graphic Design with AI Integration training borivali west, web development bootcamp borivali, 2d 3d animation borivali, motion graphics borivali, multimedia course borivali mumbai, Graphic Design with AI Integrationing course in kandivali, web designing training kandivali west, animation classes kandivali east, vfx institute kandivali, video editing kandivali mumbai, autocad course kandivali west, full stack php kandivali, Graphic Design with AI Integration classes kandivali, ui ux training kandivali, 3d modelling course kandivali, web development classes kandivali east, diploma in vfx kandivali, Graphic Design with AI Integration job in mumbai, Graphic Design with AI Integrationer jobs goregaon, ui ux jobs malad, web developer jobs santacruz, animation jobs mulund, vfx jobs nalasopara, video editing jobs ghatkopar, autocad jobs mumbai, full stack developer jobs andheri, php jobs borivali, multimedia jobs kandivali, near me, animation, mumbai, in',
    canonical: 'https://shankarmultimedia.com/',
    ogImage: 'https://shankarmultimedia.com/images/og-image.jpg'
  },
  
  about: {
    title: 'About Shankar Multimedia | Leading Multimedia Institute in Mumbai',
    description: 'Shankar Multimedia is Mumbai\'s premier multimedia training institute offering placement-assured diploma courses since years. We provide industry-expert training in Graphic Design with AI Integration, Web Development, Animation, VFX, and AutoCAD across 9 centers. Competing with Arena Animation, MAAC, and other institutes with superior placement rates.',
    keywords: 'multimedia institute mumbai, Graphic Design with AI Integration institute, animation training, vfx training, web development institute, best courses in mumbai, arena animation, maac academy, framebox, softpro academy, reliance animation, edit institute, best multimedia training, professional courses, industry expertise, placement assistance, job guarantee, certified courses',
    canonical: 'https://shankarmultimedia.com/',
    ogImage: 'https://shankarmultimedia.com/images/og-image.jpg'
  },
  
  placements: {
    title: 'Student Placements & Success Stories | Shankar Multimedia',
    description: 'Discover real placement success stories from Shankar Multimedia graduates. We provide 100% job placement guarantee with competitive salaries at leading companies. Join hundreds of successful students in Graphic Design with AI Integration, web development, animation, VFX, and AutoCAD roles.',
    keywords: 'placement, job placement, career placement, Graphic Design with AI Integration jobs, Graphic Design with AI Integrationer jobs, ui ux jobs, web developer jobs, animation jobs, vfx jobs, video editing jobs, autocad jobs, full stack developer jobs, php developer jobs, multimedia jobs, placement assistance, job training, career guidance, success stories, placed students, salary packages, leading companies',
    canonical: 'https://shankarmultimedia.com/',
    ogImage: 'https://shankarmultimedia.com/images/og-image.jpg'
  },
  
  contact: {
    title: 'Contact Shankar Multimedia | 9 Training Centers in Mumbai',
    description: 'Contact Shankar Multimedia for course inquiries. Visit us at 9 locations: Goregaon, Malad, Santacruz, Mulund, Nalasopara, Ghatkopar, Andheri, Borivali & Kandivali. Call +91-9819508524 or WhatsApp for instant support. Flexible class timings - morning, afternoon & evening batches available.',
    keywords: 'contact, location, mumbai office, goregaon, malad, santacruz, mulund, nalasopara, ghatkopar, andheri, borivali, kandivali, course inquiry, Graphic Design with AI Integration classes near me, animation classes near me, web design courses near me, training center, phone, email, directions, timings, near me',
    canonical: 'https://shankarmultimedia.com/',
    ogImage: 'https://shankarmultimedia.com/images/og-image.jpg'
  }
};

export const structuredData = {
  organizationSchema: {
    '@context': 'https://schema.org',
    '@type': 'EducationalOrganization',
    'name': 'Shankar Multimedia',
    'url': 'https://shankarmultimedia.com',
    'logo': 'https://shankarmultimedia.com/images/logo.png',
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
        'streetAddress': '501 & 507, 5th Floor, Accord Complex Opp. Railway Station & Bus Depot Goregaon East',
        'addressLocality': 'Mumbai',
        'addressRegion': 'Maharashtra',
        'postalCode': '400063',
        'addressCountry': 'India'
      },
      {
        '@type': 'PostalAddress',
        'streetAddress': '501 & 502, 5th Floor, Center Plaza Shivaji Chowk, Daftary Road Near Railway Station, Malad East',
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

  courseSchema: {
    '@context': 'https://schema.org',
    '@type': 'Course',
    'name': 'Multimedia & Design Courses',
    'description': 'Professional diploma courses in Graphic Design with AI Integration, Web Development, Animation, VFX, and AutoCAD',
    'provider': {
      '@type': 'EducationalOrganization',
      'name': 'Shankar Multimedia'
    },
    'courseCode': 'MULTIMEDIA',
    'duration': 'P6M',
    'offers': {
      '@type': 'Offer',
      'category': 'Paid'
    }
  },

  localBusinessSchemas: createLocalBusinessSchemas(),

  faqSchema: {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    'mainEntity': [
      {
        '@type': 'Question',
        'name': 'What courses does Shankar Multimedia offer?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'We offer comprehensive courses in Graphic Design with AI Integration, UI/UX Design, Web Development, Full Stack Development, Animation, VFX, Video Editing, and AutoCAD.'
        }
      },
      {
        '@type': 'Question',
        'name': 'Does Shankar Multimedia provide placement assistance?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'Yes, we provide placement support and career guidance for all our diploma courses.'
        }
      },
      {
        '@type': 'Question',
        'name': 'Where are the Shankar Multimedia centers located?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'We have centers in Goregaon, Malad, Santacruz, Mulund, Nalasopara, and Ghatkopar in Mumbai.'
        }
      }
    ]
  }
};

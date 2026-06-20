// Image paths constants for easy management and imports

// Main brand assets
export const BRAND_IMAGES = {
  logo: '/images/logo.webp',
  favicon: '/favicon.ico',
};

// Course images and backgrounds
export const COURSE_IMAGES = {
  // 3D Animation & VFX
  '3d': {
    background: '/images/courses/3d.webp',
    icon: '/images/courses/courses/3d.webp',
    icon2: '/images/courses/courses/3d.webp',
  },
  
  // Web Development
  web: {
    background: '/images/courses/web1.webp',
    icon: '/images/courses/web1.webp',
    icon2: '/images/courses/web1.webp',
  },
  
  // Graphic Design
  graphics: {
    background: '/images/courses/gra1.webp',
    icon: '/images/courses/gra1.webp',
    icon2: '/images/courses/gra1.webp',
  }

};

// Background images for hero and sections
export const BACKGROUND_IMAGES = {
  banner1: '/images/backgrounds/banner-1.webp',
  banner2: '/images/backgrounds/banner-11.webp',
  bannerP: '/images/backgrounds/banner-p.webp',
  bannerP1: '/images/backgrounds/banner-p1.webp',
  bannerP2: '/images/backgrounds/banner-p2.webp',
};

// Team member photos
export const TEAM_IMAGES = {
  anurag: '/images/team/anurag_singh.webp',
  deepak: '/images/team/deepak_singh.webp',
  dharmendra: '/images/team/dharmendra_singh.webp',
  saurabh: '/images/team/saurabh_singh.webp',
};

// Social media icons
export const SOCIAL_ICONS = {
  facebook: '/images/icons/icons8-facebook-40.webp',
  instagram: '/images/icons/icons8-instagram-40.webp',
  instagram42: '/images/icons/icons8-instagram-42.webp',
  linkedin: '/images/icons/icons8-linkedin-40.webp',
  whatsapp: '/images/icons/icons8-whatsapp-40.webp',
  youtube: '/images/icons/icons8-youtube-40.webp',
};

// Gallery images (student work samples)
export const GALLERY_IMAGES = {
  graphics: Array.from({ length: 22 }, (_, i) => {
    const num = i === 3 ? 5 : i === 4 ? 6 : i < 3 ? i + 1 : i + 2; // Skip 4.webp as it doesn't exist
    return `/images/gallery/${num}.webp`;
  }).filter(path => !path.includes('4.webp')), // Remove the non-existent 4.webp
};

// Sample placement images (first 20 for performance)
export const PLACEMENT_IMAGES = [
  '/images/studentPlacements/100Pooja Gra Stu Malad.webp',
  '/images/studentPlacements/101Pradeep Maurya Gra Stu Goregaon West.webp',
  '/images/studentPlacements/102Pragati Hinghu Gra Stu Borivali.webp',
  '/images/studentPlacements/103Prasad Dike Gra Stu Nallasopara East.webp',
  '/images/studentPlacements/104Prasad Gra Jogeshwari.webp',
  '/images/studentPlacements/105Prashant patil-Gra - Palghar.webp',
  '/images/studentPlacements/106Pratik Khot Gra Stu - Santacruz.webp',
  '/images/studentPlacements/107Priti Toraskar. 3D Interior Designer.webp',
  '/images/studentPlacements/108Priyanka Chikne Gra Stu WhatsApp Number Nalasopara East.webp',
  '/images/studentPlacements/109Rahul Rikame Gra Stu Goregaon East.webp',
  '/images/studentPlacements/110Raj Tambade Gra Stu Goregaon East.webp',
  '/images/studentPlacements/111Rakesh Kandekar Gra Stu Warli.webp',
  '/images/studentPlacements/112Rakesh Lotankar Gra Stu Jogeshwari.webp',
  '/images/studentPlacements/113Ram Shinde Gra Student Goregaon East.webp',
  '/images/studentPlacements/114Ravindra Ramane Gra Stu Jogeshwari East.webp',
  '/images/studentPlacements/115Reetu  Maurya Gra Stu Goregaon West.webp',
  '/images/studentPlacements/116Rohan kadam Gra Stu Dadar.webp',
  '/images/studentPlacements/117Rohan ratate - gra- nalasopara.webp',
  '/images/studentPlacements/118Rohit sable Gra Stu Jogeshwari.webp',
  '/images/studentPlacements/119Rohit Shriwant gra - goregaon.webp',
];

// Helper function to get random placement images
export const getRandomPlacementImages = (count = 6) => {
  const shuffled = [...PLACEMENT_IMAGES].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
};

// Helper function to get random gallery images
export const getRandomGalleryImages = (count = 8) => {
  const shuffled = [...GALLERY_IMAGES.graphics].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
};

// Course data with images
export const COURSES_WITH_IMAGES = [
  {
    id: 'graphic-design',
    title: 'Graphic Design Mastery',
    image: COURSE_IMAGES['graphics'].icon,
    background: COURSE_IMAGES['graphics'].background,
    category: 'Design',
  },
  {
    id: '3d-animation',
    title: '3D Animation & VFX',
    image: COURSE_IMAGES['3d'].icon,
    background: COURSE_IMAGES['3d'].background,
    category: 'Animation',
  },
  {
    id: 'web-development',
    title: 'Web Development Pro',
    image: COURSE_IMAGES['web'].icon,
    background: COURSE_IMAGES['web'].background,
    category: 'Development',
  },

];

const imageConstants = {
  BRAND_IMAGES,
  COURSE_IMAGES,
  BACKGROUND_IMAGES,
  TEAM_IMAGES,
  SOCIAL_ICONS,
  GALLERY_IMAGES,
  PLACEMENT_IMAGES,
  COURSES_WITH_IMAGES,
  getRandomPlacementImages,
  getRandomGalleryImages,
};

export default imageConstants;
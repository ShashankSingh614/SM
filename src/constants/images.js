// Image paths constants for easy management and imports

// Main brand assets
export const BRAND_IMAGES = {
  logo: '/images/logo.png',
  favicon: '/favicon.ico',
};

// Course images and backgrounds
export const COURSE_IMAGES = {
  // 3D Animation & VFX
  '3d': {
    background: '/images/courses/3_d1.png',
    icon: '/images/courses/courses/3_d1.png',
    icon2: '/images/courses/courses/3_d1.png',
  },
  
  // Web Development
  web: {
    background: '/images/courses/w_d1.png',
    icon: '/images/courses/w_d1.png',
    icon2: '/images/courses/w_d1.png',
  },
  
  // Graphic Design
  graphics: {
    background: '/images/courses/g_d1.png',
    icon: '/images/courses/g_d1.png',
    icon2: '/images/courses/g_d1.png',
  }

};

// Background images for hero and sections
export const BACKGROUND_IMAGES = {
  banner1: '/images/backgrounds/banner-1.png',
  banner2: '/images/backgrounds/banner-11.png',
  bannerP: '/images/backgrounds/banner-p.png',
  bannerP1: '/images/backgrounds/banner-p1.png',
  bannerP2: '/images/backgrounds/banner-p2.png',
};

// Team member photos
export const TEAM_IMAGES = {
  anurag: '/images/team/anurag_singh.jpg',
  deepak: '/images/team/deepak_singh.jpg',
  dharmendra: '/images/team/dharmendra_singh.jpg',
  saurabh: '/images/team/saurabh_singh.jpeg',
};

// Social media icons
export const SOCIAL_ICONS = {
  facebook: '/images/icons/icons8-facebook-40.png',
  instagram: '/images/icons/icons8-instagram-40.png',
  instagram42: '/images/icons/icons8-instagram-42.png',
  linkedin: '/images/icons/icons8-linkedin-40.png',
  whatsapp: '/images/icons/icons8-whatsapp-40.png',
  youtube: '/images/icons/icons8-youtube-40.png',
};

// Gallery images (student work samples)
export const GALLERY_IMAGES = {
  graphics: Array.from({ length: 22 }, (_, i) => {
    const num = i === 3 ? 5 : i === 4 ? 6 : i < 3 ? i + 1 : i + 2; // Skip 4.jpg as it doesn't exist
    return `/images/gallery/${num}.jpg`;
  }).filter(path => !path.includes('4.jpg')), // Remove the non-existent 4.jpg
};

// Sample placement images (first 20 for performance)
export const PLACEMENT_IMAGES = [
  '/images/placements/100Pooja Gra Stu Malad.jpg',
  '/images/placements/101Pradeep Maurya Gra Stu Goregaon West.jpg',
  '/images/placements/102Pragati Hinghu Gra Stu Borivali.jpg',
  '/images/placements/103Prasad Dike Gra Stu Nallasopara East.jpg',
  '/images/placements/104Prasad Gra Jogeshwari.jpg',
  '/images/placements/105Prashant patil-Gra - Palghar.jpg',
  '/images/placements/106Pratik Khot Gra Stu - Santacruz.jpg',
  '/images/placements/107Priti Toraskar. 3D Interior Designer.jpg',
  '/images/placements/108Priyanka Chikne Gra Stu WhatsApp Number Nalasopara East.jpg',
  '/images/placements/109Rahul Rikame Gra Stu Goregaon East.jpg',
  '/images/placements/110Raj Tambade Gra Stu Goregaon East.jpg',
  '/images/placements/111Rakesh Kandekar Gra Stu Warli.jpg',
  '/images/placements/112Rakesh Lotankar Gra Stu Jogeshwari.jpg',
  '/images/placements/113Ram Shinde Gra Student Goregaon East.jpg',
  '/images/placements/114Ravindra Ramane Gra Stu Jogeshwari East.jpg',
  '/images/placements/115Reetu  Maurya Gra Stu Goregaon West.jpg',
  '/images/placements/116Rohan kadam Gra Stu Dadar.jpg',
  '/images/placements/117Rohan ratate - gra- nalasopara.jpg',
  '/images/placements/118Rohit sable Gra Stu Jogeshwari.jpg',
  '/images/placements/119Rohit Shriwant gra - goregaon.jpg',
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
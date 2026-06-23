// JSON-LD Schema for Course Pages - Helps AI crawlers and search engines understand course content

export const generateCourseSchema = (courseData, baseUrl = 'https://shankarmultimedia.com') => {
  return {
    '@context': 'https://schema.org',
    '@type': 'Course',
    name: courseData.title,
    description: courseData.intro,
    url: `${baseUrl}/courses/${courseData.slug}`,
    image: `${baseUrl}/images/course-${courseData.slug}.webp`,
    author: {
      '@type': 'Organization',
      name: 'Shankar Multimedia',
      url: baseUrl,
      sameAs: [
        'https://www.facebook.com/shankarmultimedia',
        'https://www.facebook.com/share/1C1RSS5fJE/',
        'https://www.youtube.com/@ShankarMultimediaMumbai',
        'https://www.facebook.com/deepak.singh.goregaon/',
        'https://www.instagram.com/shankarmultimedia',
        'https://www.instagram.com/shankarmultimediagoregaon',
        'https://www.instagram.com/shankarmultimedia.malad',
        'https://www.instagram.com/shankarmultimedia.nalasopara',
        'https://www.instagram.com/shankarmultimedia.mulund',
      ]
    },
    provider: {
      '@type': 'Organization',
      name: 'Shankar Multimedia',
      url: baseUrl
    },
    duration: `PT${courseData.duration.split(' ')[0]}M`,
    courseCode: courseData.id,
    educationLevel: 'Vocational',
    hasCourseInstance: {
      '@type': 'CourseInstance',
      inLanguage: 'en-IN',
      isAccessibleForFree: false,
      url: `${baseUrl}/courses/${courseData.slug}`
    },
    offers: {
      '@type': 'Offer',
      url: `${baseUrl}/courses/${courseData.slug}`,
      priceCurrency: 'INR',
      availability: 'https://schema.org/InStock'
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '5',
      ratingCount: (courseData.testimonials ?? []).length
    },
    review: (courseData.testimonials ?? []).map(testimonial => ({
      '@type': 'Review',
      reviewRating: {
        '@type': 'Rating',
        ratingValue: '5'
      },
      author: {
        '@type': 'Person',
        name: testimonial.name
      },
      reviewBody: testimonial.quote
    }))
  };
};

// Organization schema for Shankar Multimedia
export const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'EducationalOrganization',
  name: 'Shankar Multimedia',
  url: 'https://shankarmultimedia.com',
  description: 'Leading animation and multimedia institute in Mumbai with 36+ years of excellence',
  sameAs: [
    'https://www.facebook.com/shankarmultimedia',
    'https://www.facebook.com/share/1C1RSS5fJE/',
    'https://www.youtube.com/@ShankarMultimediaMumbai',
    'https://www.facebook.com/deepak.singh.goregaon/',
    'https://www.instagram.com/shankarmultimedia',
    'https://www.instagram.com/shankarmultimediagoregaon',
    'https://www.instagram.com/shankarmultimedia.malad',
    'https://www.instagram.com/shankarmultimedia.nalasopara',
    'https://www.instagram.com/shankarmultimedia.mulund',

  ],
  address: {
    '@type': 'PostalAddress',
    addressCountry: 'IN',
    addressRegion: 'Maharashtra',
    addressLocality: 'Mumbai'
  },
  contactPoint: {
    '@type': 'ContactPoint',
    contactType: 'Customer Support',
    availableLanguageID: 'en-IN'
  }
};
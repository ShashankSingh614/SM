export const createLocalBusinessSchemas = () => {
  return [
    {
      '@context': 'https://schema.org',
      '@type': 'LocalBusiness',
      '@id': 'https://shankarmultimedia.com#goregaon',
      'name': 'Shankar Multimedia - Goregaon',
      'description': 'Shankar Multimedia Goregaon center offers professional diploma courses in Graphic Design, Web Development, Animation, VFX, and more.',
      'url': 'https://shankarmultimedia.com',
      'telephone': '+91-9819508524',
      'email': 'info@shankarmultimedia.com',
      'address': {
        '@type': 'PostalAddress',
        'streetAddress': '501 & 507, 5th Floor, Accord Complex Opp. Railway Station & Bus Depot Goregaon East',
        'addressLocality': 'Goregaon',
        'addressRegion': 'Maharashtra',
        'postalCode': '400063',
        'addressCountry': 'IN'
      },
      'geo': {
        '@type': 'GeoCoordinates',
        'latitude': 19.1136,
        'longitude': 72.8697
      },
      'openingHoursSpecification': [
        {
          '@type': 'OpeningHoursSpecification',
          'dayOfWeek': ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
          'opens': '08:00',
          'closes': '21:00'
        },
        {
          '@type': 'OpeningHoursSpecification',
          'dayOfWeek': ['Sunday'],
          'opens': '09:00',
          'closes': '14:00'
        }
      ],
      'priceRange': '₹30,000 - ₹84,000',
      'aggregateRating': {
        '@type': 'AggregateRating',
        'ratingValue': '5.0',
        'reviewCount': '1600',
        'bestRating': '5',
        'worstRating': '1'
      },
      'sameAs': [
        'https://www.google.com/maps/place/Shankar+Multimedia+Goregaon',
        'https://www.facebook.com/shankarmultimedia',
        'https://www.instagram.com/shankarmultimedia'
      ],
      'areaServed': ['Goregaon', 'Andheri', 'Malad', 'Borivali'],
      'availableLanguage': ['en', 'hi', 'mr'],
      'worksFor': {
        '@type': 'Organization',
        '@id': 'https://shankarmultimedia.com#organization'
      }
    },
    {
      '@context': 'https://schema.org',
      '@type': 'LocalBusiness',
      '@id': 'https://shankarmultimedia.com#malad',
      'name': 'Shankar Multimedia - Malad',
      'description': 'Shankar Multimedia Malad center offers professional diploma courses in Graphic Design, Web Development, Animation, VFX, and more.',
      'url': 'https://shankarmultimedia.com',
      'telephone': '+91-9223439986',
      'email': 'info@shankarmultimedia.com',
      'address': {
        '@type': 'PostalAddress',
        'streetAddress': '501 & 502, 5th Floor, Center Plaza, Shivaji Chowk, Daftary Road, Near Railway Station',
        'addressLocality': 'Malad East',
        'addressRegion': 'Maharashtra',
        'postalCode': '400097',
        'addressCountry': 'IN'
      },
      'geo': {
        '@type': 'GeoCoordinates',
        'latitude': 19.1977,
        'longitude': 72.8476
      },
      'openingHoursSpecification': [
        {
          '@type': 'OpeningHoursSpecification',
          'dayOfWeek': ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
          'opens': '08:00',
          'closes': '21:00'
        },
        {
          '@type': 'OpeningHoursSpecification',
          'dayOfWeek': ['Sunday'],
          'opens': '09:00',
          'closes': '14:00'
        }
      ],
      'priceRange': '₹30,000 - ₹84,000',
      'aggregateRating': {
        '@type': 'AggregateRating',
        'ratingValue': '4.9',
        'reviewCount': '1000',
        'bestRating': '5',
        'worstRating': '1'
      },
      'sameAs': [
        'https://www.google.com/maps/place/Shankar+Multimedia+Malad',
        'https://www.facebook.com/shankarmultimedia',
        'https://www.instagram.com/shankarmultimedia'
      ],
      'areaServed': ['Malad', 'Goregaon', 'Andheri', 'Kandivali'],
      'availableLanguage': ['en', 'hi', 'mr'],
      'worksFor': {
        '@type': 'Organization',
        '@id': 'https://shankarmultimedia.com#organization'
      }
    },
    {
      '@context': 'https://schema.org',
      '@type': 'LocalBusiness',
      '@id': 'https://shankarmultimedia.com#mulund',
      'name': 'Shankar Multimedia - Mulund',
      'description': 'Shankar Multimedia Mulund center offers professional diploma courses in Graphic Design, Web Development, Animation, VFX, and more.',
      'url': 'https://shankarmultimedia.com',
      'telephone': '+91-9619177392',
      'email': 'info@shankarmultimedia.com',
      'address': {
        '@type': 'PostalAddress',
        'streetAddress': '402, 4th Floor, Neptune Uptown, N S Road, Near Bhau Vada Pav, Near Railway Station',
        'addressLocality': 'Mulund West',
        'addressRegion': 'Maharashtra',
        'postalCode': '400080',
        'addressCountry': 'IN'
      },
      'geo': {
        '@type': 'GeoCoordinates',
        'latitude': 19.1743,
        'longitude': 72.9508
      },
      'openingHoursSpecification': [
        {
          '@type': 'OpeningHoursSpecification',
          'dayOfWeek': ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
          'opens': '08:00',
          'closes': '21:00'
        },
        {
          '@type': 'OpeningHoursSpecification',
          'dayOfWeek': ['Sunday'],
          'opens': '09:00',
          'closes': '14:00'
        }
      ],
      'priceRange': '₹30,000 - ₹84,000',
      'aggregateRating': {
        '@type': 'AggregateRating',
        'ratingValue': '4.8',
        'reviewCount': '1200',
        'bestRating': '5',
        'worstRating': '1'
      },
      'sameAs': [
        'https://www.google.com/maps/place/Shankar+Multimedia+Mulund',
        'https://www.facebook.com/shankarmultimedia',
        'https://www.instagram.com/shankarmultimedia'
      ],
      'areaServed': ['Mulund', 'Thane', 'Bhandup', 'Vikhroli'],
      'availableLanguage': ['en', 'hi', 'mr'],
      'worksFor': {
        '@type': 'Organization',
        '@id': 'https://shankarmultimedia.com#organization'
      }
    },
    {
      '@context': 'https://schema.org',
      '@type': 'LocalBusiness',
      '@id': 'https://shankarmultimedia.com#nalasopara',
      'name': 'Shankar Multimedia - Nalasopara',
      'description': 'Shankar Multimedia Nalasopara center offers professional diploma courses in Graphic Design, Web Development, Animation, VFX, and more.',
      'url': 'https://shankarmultimedia.com',
      'telephone': '+91-7021382816',
      'email': 'info@shankarmultimedia.com',
      'address': {
        '@type': 'PostalAddress',
        'streetAddress': '207, 2nd Floor, MLDC Yashwant Orchid, Opp. Tulinj Police Station, Central Park Road, Near Railway Station',
        'addressLocality': 'Nalasopara East',
        'addressRegion': 'Maharashtra',
        'postalCode': '401208',
        'addressCountry': 'IN'
      },
      'geo': {
        '@type': 'GeoCoordinates',
        'latitude': 19.4251,
        'longitude': 72.9392
      },
      'openingHoursSpecification': [
        {
          '@type': 'OpeningHoursSpecification',
          'dayOfWeek': ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
          'opens': '08:00',
          'closes': '21:00'
        },
        {
          '@type': 'OpeningHoursSpecification',
          'dayOfWeek': ['Sunday'],
          'opens': '09:00',
          'closes': '14:00'
        }
      ],
      'priceRange': '₹30,000 - ₹84,000',
      'aggregateRating': {
        '@type': 'AggregateRating',
        'ratingValue': '4.9',
        'reviewCount': '520',
        'bestRating': '5',
        'worstRating': '1'
      },
      'sameAs': [
        'https://www.google.com/maps/place/Shankar+Multimedia+Nalasopara',
        'https://www.facebook.com/shankarmultimedia',
        'https://www.instagram.com/shankarmultimedia'
      ],
      'areaServed': ['Nalasopara', 'Vasai', 'Virar', 'Palghar'],
      'availableLanguage': ['en', 'hi', 'mr'],
      'worksFor': {
        '@type': 'Organization',
        '@id': 'https://shankarmultimedia.com#organization'
      }
    },
    {
      '@context': 'https://schema.org',
      '@type': 'LocalBusiness',
      '@id': 'https://shankarmultimedia.com#santacruz',
      'name': 'Shankar Multimedia - Santacruz',
      'description': 'Shankar Multimedia Santacruz center offers professional diploma courses in Graphic Design, Web Development, Animation, VFX, and more.',
      'url': 'https://shankarmultimedia.com',
      'telephone': '+91-7304157986',
      'email': 'info@shankarmultimedia.com',
      'address': {
        '@type': 'PostalAddress',
        'streetAddress': '804, 8th Floor, Orion West, Station Road, Near Railway Station',
        'addressLocality': 'Santacruz West',
        'addressRegion': 'Maharashtra',
        'postalCode': '400054',
        'addressCountry': 'IN'
      },
      'geo': {
        '@type': 'GeoCoordinates',
        'latitude': 19.0865,
        'longitude': 72.8406
      },
      'openingHoursSpecification': [
        {
          '@type': 'OpeningHoursSpecification',
          'dayOfWeek': ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
          'opens': '08:00',
          'closes': '21:00'
        },
        {
          '@type': 'OpeningHoursSpecification',
          'dayOfWeek': ['Sunday'],
          'opens': '09:00',
          'closes': '14:00'
        }
      ],
      'priceRange': '₹30,000 - ₹84,000',
      'aggregateRating': {
        '@type': 'AggregateRating',
        'ratingValue': '4.8',
        'reviewCount': '1200',
        'bestRating': '5',
        'worstRating': '1'
      },
      'sameAs': [
        'https://www.google.com/maps/place/Shankar+Multimedia+Santacruz',
        'https://www.facebook.com/shankarmultimedia',
        'https://www.instagram.com/shankarmultimedia'
      ],
      'areaServed': ['Santacruz', 'Bandra', 'Vile Parle', 'Khar'],
      'availableLanguage': ['en', 'hi', 'mr'],
      'worksFor': {
        '@type': 'Organization',
        '@id': 'https://shankarmultimedia.com#organization'
      }
    },
    {
      '@context': 'https://schema.org',
      '@type': 'LocalBusiness',
      '@id': 'https://shankarmultimedia.com#ghatkopar',
      'name': 'Shankar Multimedia - Ghatkopar',
      'description': 'Shankar Multimedia Ghatkopar center offers professional diploma courses in Graphic Design, Web Development, Animation, VFX, and more.',
      'url': 'https://shankarmultimedia.com',
      'telephone': '+91-9819508524',
      'email': 'info@shankarmultimedia.com',
      'address': {
        '@type': 'PostalAddress',
        'streetAddress': '[Full Address]',
        'addressLocality': 'Ghatkopar',
        'addressRegion': 'Maharashtra',
        'postalCode': '400077',
        'addressCountry': 'IN'
      },
      'geo': {
        '@type': 'GeoCoordinates',
        'latitude': 19.0282,
        'longitude': 72.9289
      },
      'openingHoursSpecification': [
        {
          '@type': 'OpeningHoursSpecification',
          'dayOfWeek': ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
          'opens': '08:00',
          'closes': '21:00'
        },
        {
          '@type': 'OpeningHoursSpecification',
          'dayOfWeek': ['Sunday'],
          'opens': '09:00',
          'closes': '14:00'
        }
      ],
      'priceRange': '₹30,000 - ₹84,000',
      'aggregateRating': {
        '@type': 'AggregateRating',
        'ratingValue': '4.8',
        'reviewCount': '800',
        'bestRating': '5',
        'worstRating': '1'
      },
      'sameAs': [
        'https://www.google.com/maps/place/Shankar+Multimedia+Ghatkopar',
        'https://www.facebook.com/shankarmultimedia',
        'https://www.instagram.com/shankarmultimedia'
      ],
      'areaServed': ['Ghatkopar', 'Vikhroli', 'Powai', 'Vashi'],
      'availableLanguage': ['en', 'hi', 'mr'],
      'worksFor': {
        '@type': 'Organization',
        '@id': 'https://shankarmultimedia.com#organization'
      }
    },
    {
      '@context': 'https://schema.org',
      '@type': 'LocalBusiness',
      '@id': 'https://shankarmultimedia.com#andheri',
      'name': 'Shankar Multimedia - Andheri',
      'description': 'Shankar Multimedia Andheri center offers professional diploma courses in Graphic Design, Web Development, Animation, VFX, and more.',
      'url': 'https://shankarmultimedia.com',
      'telephone': '+91-9819508524',
      'email': 'info@shankarmultimedia.com',
      'address': {
        '@type': 'PostalAddress',
        'streetAddress': '[Full Address]',
        'addressLocality': 'Andheri',
        'addressRegion': 'Maharashtra',
        'postalCode': '400069',
        'addressCountry': 'IN'
      },
      'geo': {
        '@type': 'GeoCoordinates',
        'latitude': 19.1136,
        'longitude': 72.8697
      },
      'openingHoursSpecification': [
        {
          '@type': 'OpeningHoursSpecification',
          'dayOfWeek': ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
          'opens': '08:00',
          'closes': '21:00'
        },
        {
          '@type': 'OpeningHoursSpecification',
          'dayOfWeek': ['Sunday'],
          'opens': '09:00',
          'closes': '14:00'
        }
      ],
      'priceRange': '₹30,000 - ₹84,000',
      'aggregateRating': {
        '@type': 'AggregateRating',
        'ratingValue': '4.9',
        'reviewCount': '950',
        'bestRating': '5',
        'worstRating': '1'
      },
      'sameAs': [
        'https://www.google.com/maps/place/Shankar+Multimedia+Andheri',
        'https://www.facebook.com/shankarmultimedia',
        'https://www.instagram.com/shankarmultimedia'
      ],
      'areaServed': ['Andheri', 'Goregaon', 'Malad', 'Borivali'],
      'availableLanguage': ['en', 'hi', 'mr'],
      'worksFor': {
        '@type': 'Organization',
        '@id': 'https://shankarmultimedia.com#organization'
      }
    },
    {
      '@context': 'https://schema.org',
      '@type': 'LocalBusiness',
      '@id': 'https://shankarmultimedia.com#borivali',
      'name': 'Shankar Multimedia - Borivali',
      'description': 'Shankar Multimedia Borivali center offers professional diploma courses in Graphic Design, Web Development, Animation, VFX, and more.',
      'url': 'https://shankarmultimedia.com',
      'telephone': '+91-9819508524',
      'email': 'info@shankarmultimedia.com',
      'address': {
        '@type': 'PostalAddress',
        'streetAddress': '[Full Address]',
        'addressLocality': 'Borivali',
        'addressRegion': 'Maharashtra',
        'postalCode': '400092',
        'addressCountry': 'IN'
      },
      'geo': {
        '@type': 'GeoCoordinates',
        'latitude': 19.2183,
        'longitude': 72.8197
      },
      'openingHoursSpecification': [
        {
          '@type': 'OpeningHoursSpecification',
          'dayOfWeek': ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
          'opens': '08:00',
          'closes': '21:00'
        },
        {
          '@type': 'OpeningHoursSpecification',
          'dayOfWeek': ['Sunday'],
          'opens': '09:00',
          'closes': '14:00'
        }
      ],
      'priceRange': '₹30,000 - ₹84,000',
      'aggregateRating': {
        '@type': 'AggregateRating',
        'ratingValue': '4.7',
        'reviewCount': '650',
        'bestRating': '5',
        'worstRating': '1'
      },
      'sameAs': [
        'https://www.google.com/maps/place/Shankar+Multimedia+Borivali',
        'https://www.facebook.com/shankarmultimedia',
        'https://www.instagram.com/shankarmultimedia'
      ],
      'areaServed': ['Borivali', 'Kandivali', 'Dahisar', 'Mira Road'],
      'availableLanguage': ['en', 'hi', 'mr'],
      'worksFor': {
        '@type': 'Organization',
        '@id': 'https://shankarmultimedia.com#organization'
      }
    },
    {
      '@context': 'https://schema.org',
      '@type': 'LocalBusiness',
      '@id': 'https://shankarmultimedia.com#kandivali',
      'name': 'Shankar Multimedia - Kandivali',
      'description': 'Shankar Multimedia Kandivali center offers professional diploma courses in Graphic Design, Web Development, Animation, VFX, and more.',
      'url': 'https://shankarmultimedia.com',
      'telephone': '+91-9819508524',
      'email': 'info@shankarmultimedia.com',
      'address': {
        '@type': 'PostalAddress',
        'streetAddress': '[Full Address]',
        'addressLocality': 'Kandivali',
        'addressRegion': 'Maharashtra',
        'postalCode': '400067',
        'addressCountry': 'IN'
      },
      'geo': {
        '@type': 'GeoCoordinates',
        'latitude': 19.2183,
        'longitude': 72.8197
      },
      'openingHoursSpecification': [
        {
          '@type': 'OpeningHoursSpecification',
          'dayOfWeek': ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
          'opens': '08:00',
          'closes': '21:00'
        },
        {
          '@type': 'OpeningHoursSpecification',
          'dayOfWeek': ['Sunday'],
          'opens': '09:00',
          'closes': '14:00'
        }
      ],
      'priceRange': '₹30,000 - ₹84,000',
      'aggregateRating': {
        '@type': 'AggregateRating',
        'ratingValue': '4.8',
        'reviewCount': '750',
        'bestRating': '5',
        'worstRating': '1'
      },
      'sameAs': [
        'https://www.google.com/maps/place/Shankar+Multimedia+Kandivali',
        'https://www.facebook.com/shankarmultimedia',
        'https://www.instagram.com/shankarmultimedia'
      ],
      'areaServed': ['Kandivali', 'Borivali', 'Dahisar', 'Malad'],
      'availableLanguage': ['en', 'hi', 'mr'],
      'worksFor': {
        '@type': 'Organization',
        '@id': 'https://shankarmultimedia.com#organization'
      }
    }
  ];
};

export const centersData = [
  {
    id: 'goregaon',
    name: 'Goregaon',
    lat: 19.1136,
    lng: 72.8697,
    address: '501 & 507, 5th Floor, Accord Complex Opp. Railway Station & Bus Depot Goregaon East',
    phone: '+91-9819508524',
    email: 'goregaon@shankarmultimedia.com'
  },
  {
    id: 'malad',
    name: 'Malad',
    lat: 19.1977,
    lng: 72.8476,
    address: '501 & 502, 5th Floor, Center Plaza, Shivaji Chowk, Daftary Road, Near Railway Station',
    phone: '+91-9223439986',
    email: 'malad@shankarmultimedia.com'
  },
  {
    id: 'santacruz',
    name: 'Santacruz',
    lat: 19.0865,
    lng: 72.8406,
    address: '804, 8th Floor, Orion West, Station Road, Near Railway Station',
    phone: '+91-7304157986',
    email: 'santacruz@shankarmultimedia.com'
  },
  {
    id: 'mulund',
    name: 'Mulund',
    lat: 19.1743,
    lng: 72.9508,
    address: '402, 4th Floor, Neptune Uptown, N S Road, Near Bhau Vada Pav, Near Railway Station',
    phone: '+91-9619177392',
    email: 'mulund@shankarmultimedia.com'
  },
  {
    id: 'nalasopara',
    name: 'Nalasopara',
    lat: 19.4251,
    lng: 72.9392,
    address: '207, 2nd Floor, MLDC Yashwant Orchid, Opp. Tulinj Police Station, Central Park Road, Near Railway Station',
    phone: '+91-7021382816',
    email: 'nalasopara@shankarmultimedia.com'
  },
  {
    id: 'ghatkopar',
    name: 'Ghatkopar',
    lat: 19.0282,
    lng: 72.9289,
    address: '[Full Address]',
    phone: '[Phone Number]',
    email: 'ghatkopar@shankarmultimedia.com'
  },
  {
    id: 'andheri',
    name: 'Andheri',
    lat: 19.1136,
    lng: 72.8697,
    address: '[Full Address]',
    phone: '[Phone Number]',
    email: 'andheri@shankarmultimedia.com'
  },
  {
    id: 'borivali',
    name: 'Borivali',
    lat: 19.2183,
    lng: 72.8197,
    address: '[Full Address]',
    phone: '[Phone Number]',
    email: 'borivali@shankarmultimedia.com'
  },
  {
    id: 'kandivali',
    name: 'Kandivali',
    lat: 19.2183,
    lng: 72.8197,
    address: '[Full Address]',
    phone: '[Phone Number]',
    email: 'kandivali@shankarmultimedia.com'
  }
];
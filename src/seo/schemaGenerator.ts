import { siteConfig } from './siteConfig';

export function getLocalBusinessSchema() {
  const fullLogoUrl = `${siteConfig.baseUrl}${siteConfig.logoUrl}`;
  const fullImageUrl = `${siteConfig.baseUrl}${siteConfig.defaultOgImage}`;

  return {
    '@context': 'https://schema.org',
    '@type': ['EducationalOrganization', 'LocalBusiness', 'HealthAndBeautyBusiness'],
    '@id': `${siteConfig.baseUrl}/#organization`,
    name: siteConfig.name,
    alternateName: ['SK Beauty-Verse Academy', 'SK Academy Chennai', 'SK International Institute of Skills Chennai'],
    legalName: siteConfig.legalName,
    url: siteConfig.baseUrl,
    logo: fullLogoUrl,
    image: fullImageUrl,
    description: 'Premier Aesthetic and Beauty Training Academy in Chennai offering UK LAPT certified clinical cosmetology, aesthetic lasers, chemical peels, and permanent makeup courses.',
    telephone: siteConfig.admissionsPhoneDisplay,
    email: siteConfig.admissionsEmail,
    founder: {
      '@type': 'Person',
      name: siteConfig.founder,
      jobTitle: 'Founder & Director',
    },
    address: {
      '@type': 'PostalAddress',
      streetAddress: siteConfig.address.streetAddress,
      addressLocality: siteConfig.address.addressLocality,
      addressRegion: siteConfig.address.addressRegion,
      postalCode: siteConfig.address.postalCode,
      addressCountry: siteConfig.address.addressCountry,
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: siteConfig.geo.latitude,
      longitude: siteConfig.geo.longitude,
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
        opens: '10:00',
        closes: '18:00',
      },
    ],
    priceRange: '₹₹',
    currenciesAccepted: 'INR',
    paymentAccepted: 'Cash, Credit Card, UPI, Bank Transfer',
    sameAs: [
      siteConfig.instagramAcademy,
      siteConfig.instagramTechnologies,
    ],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Aesthetic & Beauty Academy Courses',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Course',
            name: 'Clinical Aesthetic Course',
            description: 'Hands-on clinical training in 20+ chemical peels, Pico/Diode lasers, hydra facials, microneedling, and mesotherapy with live model practice.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Course',
            name: 'Permanent Makeup (PMU) Course',
            description: 'Semi-Permanent Makeup training covering Microblading, ombré powder brows, lip blush neutralization, BB glow, and scalp micropigmentation.',
          },
        },
      ],
    },
  };
}

export function getWebSiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${siteConfig.baseUrl}/#website`,
    url: siteConfig.baseUrl,
    name: siteConfig.name,
    alternateName: 'SK Beauty-Verse',
    description: 'Aesthetic Academy in Chennai offering professional clinical cosmetology and permanent makeup training.',
    publisher: {
      '@id': `${siteConfig.baseUrl}/#organization`,
    },
    inLanguage: 'en-IN',
  };
}

export function getBreadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.path.startsWith('http') ? item.path : `${siteConfig.baseUrl}${item.path}`,
    })),
  };
}

export function getAestheticCourseSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Course',
    '@id': `${siteConfig.baseUrl}/course-aesthetic#course`,
    name: 'Clinical Aesthetic Course in Chennai',
    description: 'Comprehensive clinical aesthetic training program covering 20+ chemical peels, clinical lasers (Pico/Q-Switch & Diode), hydra facials, microneedling, mesotherapy, and body contouring on live patients.',
    provider: {
      '@type': 'EducationalOrganization',
      name: siteConfig.name,
      url: siteConfig.baseUrl,
      sameAs: siteConfig.instagramAcademy,
    },
    educationalCredentialAwarded: 'LAPT UK International Diploma',
    occupationalCredentialAwarded: 'Certified Clinical Aesthetician / Cosmetologist',
    courseMode: 'in-person',
    inLanguage: 'en',
    hasCourseInstance: {
      '@type': 'CourseInstance',
      courseMode: 'in-person',
      courseWorkload: 'PT40H',
      location: {
        '@type': 'Place',
        name: siteConfig.name,
        address: {
          '@type': 'PostalAddress',
          streetAddress: siteConfig.address.streetAddress,
          addressLocality: siteConfig.address.addressLocality,
          addressRegion: siteConfig.address.addressRegion,
          postalCode: siteConfig.address.postalCode,
          addressCountry: siteConfig.address.addressCountry,
        },
      },
    },
  };
}

export function getPmuCourseSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Course',
    '@id': `${siteConfig.baseUrl}/course-pmu#course`,
    name: 'Permanent Makeup (PMU) & Microblading Course in Chennai',
    description: 'Professional Semi-Permanent Makeup (SPMU) training covering Microblading, ombré powder brows, lip blush, dark lip neutralization, BB glow, and scalp micropigmentation.',
    provider: {
      '@type': 'EducationalOrganization',
      name: siteConfig.name,
      url: siteConfig.baseUrl,
      sameAs: siteConfig.instagramAcademy,
    },
    educationalCredentialAwarded: 'LAPT UK International Diploma',
    occupationalCredentialAwarded: 'Certified Permanent Makeup (PMU) Artist',
    courseMode: 'in-person',
    inLanguage: 'en',
    hasCourseInstance: {
      '@type': 'CourseInstance',
      courseMode: 'in-person',
      location: {
        '@type': 'Place',
        name: siteConfig.name,
        address: {
          '@type': 'PostalAddress',
          streetAddress: siteConfig.address.streetAddress,
          addressLocality: siteConfig.address.addressLocality,
          addressRegion: siteConfig.address.addressRegion,
          postalCode: siteConfig.address.postalCode,
          addressCountry: siteConfig.address.addressCountry,
        },
      },
    },
  };
}

export function getFaqSchema() {
  const faqs = [
    {
      q: 'What is the duration of the courses at SK Academy Chennai?',
      a: 'Courses range from intensive 7-day fast-track clinical programs to comprehensive multi-week diploma courses with flexible batch schedules.',
    },
    {
      q: 'Do you provide recognized certification for aesthetic and PMU courses?',
      a: 'Yes, our courses provide internationally recognized certifications, including LAPT UK (London Academy of Professional Training) and ISO certification valid across 180+ countries.',
    },
    {
      q: 'Is there hands-on practical training on live models?',
      a: 'Yes, 100% of our clinical training includes hands-on practice on live patient models under the direct 1-on-1 supervision of doctors and master trainers.',
    },
    {
      q: 'Do you provide accommodation and food for outstation or international students?',
      a: 'Yes, comfortable, safe, and hygienic hostel accommodation and daily food facilities are provided for outstation students and international candidates from Sri Lanka, Nepal, and other regions.',
    },
    {
      q: 'What career support and placement assistance is available?',
      a: 'We provide career guidance, job placement assistance, machine vendor contacts, clinic setup advice, and lifetime mentorship for our academy graduates.',
    },
    {
      q: 'Can I pay the course fee in installments / EMI?',
      a: 'Yes, flexible payment schedules and EMI options are available for eligible candidates enrolled in our diploma programs.',
    },
  ];

  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.a,
      },
    })),
  };
}

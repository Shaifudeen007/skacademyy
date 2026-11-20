export interface RouteSEO {
  path: string;
  title: string;
  description: string;
  keywords: string;
  h1: string;
  canonical: string;
  ogType?: 'website' | 'article';
}

export const siteConfig = {
  name: 'SK International Institute of Skills',
  shortName: 'SK Academy',
  legalName: 'SK Beauty verse pvt.ltd',
  tagline: 'Professional Aesthetic Academy in Chennai',
  baseUrl: (import.meta.env.VITE_SITE_URL as string) || 'https://skinternationalinstitute.com',
  founder: 'Sushmitha',
  admissionsPhone: '+918610345830',
  admissionsPhoneDisplay: '+91 86103 45830',
  complaintsPhone: '+917448885802',
  complaintsPhoneDisplay: '+91 744 888 5802',
  admissionsEmail: 'skbeautyverse@gmail.com',
  complaintsEmail: 'complaints.skbeautyverse@gmail.com',
  whatsappUrl: 'https://wa.me/918610345830',
  instagramAcademy: 'https://www.instagram.com/skbeautyverseacademy/',
  instagramTechnologies: 'https://www.instagram.com/skkoreanaesthetictechnologies/',
  equipmentStoreUrl: 'https://skkoreantechnologies.com/',
  address: {
    streetAddress: '48/102, Angalamman Kovil St, Choolai',
    addressLocality: 'Chennai',
    addressRegion: 'Tamil Nadu',
    postalCode: '600012',
    addressCountry: 'IN',
  },
  geo: {
    latitude: 13.0891,
    longitude: 80.2642,
  },
  openingHours: 'Mo-Sa 10:00-18:00',
  accreditation: ['LAPT UK Certified (London Academy of Professional Training)', 'ISO Certified'],
  logoUrl: '/N0__48102__Angalamman_Kovil_St__Choolai__Chennai__Tamil_Nadu_600112.-removebg-preview.png',
  defaultOgImage: '/hero/DSC07258.JPG',
  routes: {
    home: {
      path: '/',
      title: 'SK International Institute | Best Aesthetic Academy in Chennai | Professional Aesthetic Courses',
      description: 'Discover professional aesthetic and beauty courses in Chennai at SK International Institute of Skills. Expert doctor-led training in clinical aesthetics, PMU, and cosmetology with UK LAPT certification.',
      keywords: 'Aesthetic Academy in Chennai, Aesthetic Courses in Chennai, Professional Aesthetic Training in Chennai, Beauty Academy in Chennai, Advanced Aesthetic Courses in Chennai, clinical cosmetology training Chennai, PMU course Chennai',
      h1: 'Professional Aesthetic Academy in Chennai',
      canonical: 'https://skinternationalinstitute.com/',
      ogType: 'website',
    },
    about: {
      path: '/about',
      title: 'About Our Aesthetic Academy in Chennai | SK International Institute of Skills',
      description: 'Learn about SK International Institute of Skills in Choolai, Chennai, founded by Sushmitha. Globally accredited UK LAPT certification, clinical facilities, and expert faculty.',
      keywords: 'About Aesthetic Academy Chennai, Sushmitha aesthetic academy, LAPT UK certified beauty academy Chennai, clinical cosmetology school Chennai',
      h1: 'About SK International Institute of Skills',
      canonical: 'https://skinternationalinstitute.com/about',
      ogType: 'website',
    },
    courses: {
      path: '/courses',
      title: 'Professional Aesthetic & PMU Courses in Chennai | SK Academy',
      description: 'Explore premier aesthetic courses in Chennai. Hands-on clinical training on live models, chemical peels, lasers, microblading, PMU & cosmetology with doctor guidance.',
      keywords: 'Aesthetic Courses in Chennai, PMU course Chennai, clinical cosmetology training Chennai, aesthetic certification courses, semi-permanent makeup classes Chennai',
      h1: 'Professional Aesthetic & PMU Courses in Chennai',
      canonical: 'https://skinternationalinstitute.com/courses',
      ogType: 'website',
    },
    courseAesthetic: {
      path: '/course-aesthetic',
      title: 'Clinical Aesthetic Course in Chennai | Lasers, Peels & Cosmetology Training',
      description: 'Advanced clinical aesthetic course in Chennai. Comprehensive hands-on training on 20+ chemical peels, Pico & Diode lasers, hydra facials, microneedling & mesotherapy with UK LAPT certification.',
      keywords: 'Clinical aesthetic course Chennai, chemical peel training Chennai, laser aesthetic training Chennai, hydra facial training Chennai, advanced cosmetology course Chennai',
      h1: 'Clinical Aesthetic Course in Chennai',
      canonical: 'https://skinternationalinstitute.com/course-aesthetic',
      ogType: 'article',
    },
    coursePmu: {
      path: '/course-pmu',
      title: 'Permanent Makeup (PMU) Course in Chennai | Microblading & SPMU Training',
      description: 'Master Semi-Permanent Makeup (PMU) in Chennai: Microblading, ombré powder brows, lip blush neutralization, BB glow, and scalp micropigmentation with complete machine kit.',
      keywords: 'PMU course in Chennai, microblading course Chennai, lip blush training Chennai, permanent makeup academy Chennai, semi permanent makeup certification Chennai',
      h1: 'Permanent Makeup (PMU) Course in Chennai',
      canonical: 'https://skinternationalinstitute.com/course-pmu',
      ogType: 'article',
    },
    internationalPrograms: {
      path: '/international-programs',
      title: 'International Aesthetic Programs | Sri Lanka, Nepal, Malaysia & UAE Batches',
      description: 'International aesthetic certification programs at SK Academy Chennai. Fast-track batches, live model clinical training, accommodation, and global UK LAPT diploma.',
      keywords: 'International aesthetic academy, aesthetic courses for Sri Lanka students, global cosmetology diploma Chennai, overseas beauty training Chennai',
      h1: 'International Aesthetic Programs & Global Batches',
      canonical: 'https://skinternationalinstitute.com/international-programs',
      ogType: 'website',
    },
    gallery: {
      path: '/gallery',
      title: 'Aesthetic Training Gallery & Clinical Sessions | SK Academy Chennai',
      description: 'View live practical training sessions, machine workshops, and student graduation moments at SK International Institute of Skills in Chennai.',
      keywords: 'Aesthetic training photos, clinical cosmetology workshops Chennai, live model aesthetic training, beauty academy gallery Chennai',
      h1: 'Practical Training & Academy Gallery',
      canonical: 'https://skinternationalinstitute.com/gallery',
      ogType: 'website',
    },
    testimonials: {
      path: '/testimonials',
      title: 'Student Testimonials & Reviews | SK Aesthetic Academy Chennai',
      description: 'Read genuine reviews and success stories from students who completed clinical aesthetic and PMU courses at SK International Institute of Skills Chennai.',
      keywords: 'SK academy reviews, aesthetic course reviews Chennai, beauty academy student testimonials, cosmetology course feedback Chennai',
      h1: 'Student Testimonials & Success Stories',
      canonical: 'https://skinternationalinstitute.com/testimonials',
      ogType: 'website',
    },
  } as Record<string, RouteSEO>,
};

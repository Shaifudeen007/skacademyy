import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const distDir = path.resolve(__dirname, '../dist');

if (!fs.existsSync(distDir)) {
  console.error('dist directory does not exist. Run "vite build" first.');
  process.exit(1);
}

const templatePath = path.join(distDir, 'index.html');
const baseHtml = fs.readFileSync(templatePath, 'utf8');

const baseUrl = 'https://skinternationalinstitute.com';

const routes = [
  {
    path: '/',
    outputPath: path.join(distDir, 'index.html'),
    title: 'Aesthetic Academy in Chennai | Professional Aesthetic Courses | SK Academy',
    description: 'Discover professional aesthetic and beauty courses in Chennai at SK International Institute of Skills. Expert doctor-led training in clinical aesthetics, PMU, and cosmetology with UK LAPT certification.',
    keywords: 'Aesthetic Academy in Chennai, Aesthetic Courses in Chennai, Professional Aesthetic Training in Chennai, Beauty Academy in Chennai, Advanced Aesthetic Courses in Chennai',
    h1: 'Professional Aesthetic Academy in Chennai',
    canonical: `${baseUrl}/`,
    ogType: 'website',
  },
  {
    path: '/about',
    outputPath: path.join(distDir, 'about/index.html'),
    title: 'About Our Aesthetic Academy in Chennai | SK International Institute of Skills',
    description: 'Learn about SK International Institute of Skills in Choolai, Chennai, founded by Sushmitha. Globally accredited UK LAPT certification, clinical facilities, and expert faculty.',
    keywords: 'About Aesthetic Academy Chennai, Sushmitha aesthetic academy, LAPT UK certified beauty academy Chennai',
    h1: 'About SK International Institute of Skills',
    canonical: `${baseUrl}/about`,
    ogType: 'website',
  },
  {
    path: '/courses',
    outputPath: path.join(distDir, 'courses/index.html'),
    title: 'Professional Aesthetic & PMU Courses in Chennai | SK Academy',
    description: 'Explore premier aesthetic courses in Chennai. Hands-on clinical training on live models, chemical peels, lasers, microblading, PMU & cosmetology with doctor guidance.',
    keywords: 'Aesthetic Courses in Chennai, PMU course Chennai, clinical cosmetology training Chennai, aesthetic certification courses',
    h1: 'Professional Aesthetic & PMU Courses in Chennai',
    canonical: `${baseUrl}/courses`,
    ogType: 'website',
  },
  {
    path: '/course-aesthetic',
    outputPath: path.join(distDir, 'course-aesthetic/index.html'),
    title: 'Clinical Aesthetic Course in Chennai | Lasers, Peels & Cosmetology Training',
    description: 'Advanced clinical aesthetic course in Chennai. Comprehensive hands-on training on 20+ chemical peels, Pico & Diode lasers, hydra facials, microneedling & mesotherapy with UK LAPT certification.',
    keywords: 'Clinical aesthetic course Chennai, chemical peel training Chennai, laser aesthetic training Chennai, hydra facial training Chennai',
    h1: 'Clinical Aesthetic Course in Chennai',
    canonical: `${baseUrl}/course-aesthetic`,
    ogType: 'article',
  },
  {
    path: '/course-pmu',
    outputPath: path.join(distDir, 'course-pmu/index.html'),
    title: 'Permanent Makeup (PMU) Course in Chennai | Microblading & SPMU Training',
    description: 'Master Semi-Permanent Makeup (PMU) in Chennai: Microblading, ombré powder brows, lip blush neutralization, BB glow, and scalp micropigmentation with complete machine kit.',
    keywords: 'PMU course in Chennai, microblading course Chennai, lip blush training Chennai, permanent makeup academy Chennai',
    h1: 'Permanent Makeup (PMU) Course in Chennai',
    canonical: `${baseUrl}/course-pmu`,
    ogType: 'article',
  },
  {
    path: '/international-programs',
    outputPath: path.join(distDir, 'international-programs/index.html'),
    title: 'International Aesthetic Programs | Sri Lanka, Nepal, Malaysia & UAE Batches',
    description: 'International aesthetic certification programs at SK Academy Chennai. Fast-track batches, live model clinical training, accommodation, and global UK LAPT diploma.',
    keywords: 'International aesthetic academy, aesthetic courses for Sri Lanka students, global cosmetology diploma Chennai',
    h1: 'International Aesthetic Programs & Global Batches',
    canonical: `${baseUrl}/international-programs`,
    ogType: 'website',
  },
  {
    path: '/gallery',
    outputPath: path.join(distDir, 'gallery/index.html'),
    title: 'Aesthetic Training Gallery & Clinical Sessions | SK Academy Chennai',
    description: 'View live practical training sessions, machine workshops, and student graduation moments at SK International Institute of Skills in Chennai.',
    keywords: 'Aesthetic training photos, clinical cosmetology workshops Chennai, live model aesthetic training',
    h1: 'Practical Training & Academy Gallery',
    canonical: `${baseUrl}/gallery`,
    ogType: 'website',
  },
  {
    path: '/testimonials',
    outputPath: path.join(distDir, 'testimonials/index.html'),
    title: 'Student Testimonials & Reviews | SK Aesthetic Academy Chennai',
    description: 'Read genuine reviews and success stories from students who completed clinical aesthetic and PMU courses at SK International Institute of Skills Chennai.',
    keywords: 'SK academy reviews, aesthetic course reviews Chennai, beauty academy student testimonials',
    h1: 'Student Testimonials & Success Stories',
    canonical: `${baseUrl}/testimonials`,
    ogType: 'website',
  },
];

console.log('Generating SEO-optimized pre-rendered static route HTML files...');

for (const route of routes) {
  let html = baseHtml;

  // Replace title
  html = html.replace(/<title>.*?<\/title>/i, `<title>${route.title}</title>`);
  html = html.replace(/<meta name="title" content=".*?" \/>/i, `<meta name="title" content="${route.title}" />`);

  // Replace description
  html = html.replace(/<meta name="description" content=".*?" \/>/i, `<meta name="description" content="${route.description}" />`);

  // Replace keywords
  html = html.replace(/<meta name="keywords" content=".*?" \/>/i, `<meta name="keywords" content="${route.keywords}" />`);

  // Replace canonical
  html = html.replace(/<link rel="canonical" href=".*?" \/>/i, `<link rel="canonical" href="${route.canonical}" />`);

  // Replace Open Graph
  html = html.replace(/<meta property="og:title" content=".*?" \/>/i, `<meta property="og:title" content="${route.title}" />`);
  html = html.replace(/<meta property="og:description" content=".*?" \/>/i, `<meta property="og:description" content="${route.description}" />`);
  html = html.replace(/<meta property="og:url" content=".*?" \/>/i, `<meta property="og:url" content="${route.canonical}" />`);
  html = html.replace(/<meta property="og:type" content=".*?" \/>/i, `<meta property="og:type" content="${route.ogType}" />`);

  // Replace Twitter
  html = html.replace(/<meta name="twitter:title" content=".*?" \/>/i, `<meta name="twitter:title" content="${route.title}" />`);
  html = html.replace(/<meta name="twitter:description" content=".*?" \/>/i, `<meta name="twitter:description" content="${route.description}" />`);
  html = html.replace(/<meta name="twitter:url" content=".*?" \/>/i, `<meta name="twitter:url" content="${route.canonical}" />`);

  // Add noscript fallback crawlable content inside body
  const noscriptContent = `
    <noscript>
      <div style="padding:2rem;font-family:sans-serif;max-width:800px;margin:0 auto;">
        <h1>${route.h1}</h1>
        <p>${route.description}</p>
        <nav aria-label="Noscript Navigation">
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About Us</a></li>
            <li><a href="/courses">Academy Courses</a></li>
            <li><a href="/course-aesthetic">Clinical Aesthetic Course</a></li>
            <li><a href="/course-pmu">Permanent Makeup (PMU) Course</a></li>
            <li><a href="/international-programs">International Programs</a></li>
            <li><a href="/gallery">Gallery</a></li>
            <li><a href="/testimonials">Student Testimonials</a></li>
          </ul>
        </nav>
      </div>
    </noscript>
  `;

  html = html.replace('<div id="root"></div>', `<div id="root"></div>${noscriptContent}`);

  const dir = path.dirname(route.outputPath);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }

  fs.writeFileSync(route.outputPath, html, 'utf8');
  console.log(`✓ Generated ${path.relative(distDir, route.outputPath)}`);
}

console.log('Prerendering static routes completed successfully.');

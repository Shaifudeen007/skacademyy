import Header from './Header';
import Footer from './Footer';
import { CoursesGrid } from './HomeSections';
import { FAQSection } from './NewSections';
import SEOHead from '../seo/SEOHead';
import { siteConfig } from '../seo/siteConfig';
import { getBreadcrumbSchema, getAestheticCourseSchema, getPmuCourseSchema, getFaqSchema } from '../seo/schemaGenerator';

export default function CoursesPage({
  isDark,
  toggleTheme,
  onNavigate,
}: {
  isDark: boolean;
  toggleTheme: () => void;
  onNavigate: (page: string) => void;
}) {
  const coursesSEO = siteConfig.routes.courses;
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: 'Home', path: '/' },
    { name: 'Academy Courses', path: '/courses' },
  ]);
  const schemas = [
    breadcrumbSchema,
    getAestheticCourseSchema(),
    getPmuCourseSchema(),
    getFaqSchema(),
  ];

  return (
    <div className={`min-h-screen ${isDark ? 'dark bg-[#09090B] text-zinc-50' : 'bg-white text-zinc-900'} font-sans transition-colors duration-300`}>
      <SEOHead
        title={coursesSEO.title}
        description={coursesSEO.description}
        keywords={coursesSEO.keywords}
        canonical={coursesSEO.canonical}
        ogType={coursesSEO.ogType}
        schemas={schemas}
      />
      <Header isDark={isDark} toggleTheme={toggleTheme} onNavigate={onNavigate} />
      <main className="pt-24 md:pt-28">
        <h1 className="sr-only">Professional Aesthetic and PMU Courses in Chennai</h1>
        <CoursesGrid onNavigate={onNavigate} minimal={false} />
        <FAQSection />
      </main>
      <Footer onNavigate={onNavigate} />
    </div>
  );
}

import { useEffect } from 'react';
import Header from './Header';
import Footer from './Footer';
import { Testimonials, VideoTestimonials } from './HomeSections';
import SEOHead from '../seo/SEOHead';
import { siteConfig } from '../seo/siteConfig';
import { getBreadcrumbSchema } from '../seo/schemaGenerator';

export default function TestimonialsPage({
  isDark,
  toggleTheme,
  onNavigate,
}: {
  isDark: boolean;
  toggleTheme: () => void;
  onNavigate: (page: string) => void;
}) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const testimonialsSEO = siteConfig.routes.testimonials;
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: 'Home', path: '/' },
    { name: 'Testimonials', path: '/testimonials' },
  ]);

  return (
    <div className={`min-h-screen ${isDark ? 'dark bg-obsidian text-zinc-50' : 'bg-white text-zinc-900'} font-sans transition-colors duration-300`}>
      <SEOHead
        title={testimonialsSEO.title}
        description={testimonialsSEO.description}
        keywords={testimonialsSEO.keywords}
        canonical={testimonialsSEO.canonical}
        ogType={testimonialsSEO.ogType}
        schemas={[breadcrumbSchema]}
      />
      <Header isDark={isDark} toggleTheme={toggleTheme} onNavigate={onNavigate} />
      <main className="pt-24 pb-12">
        <h1 className="sr-only">Student Testimonials & Reviews - SK Aesthetic Academy Chennai</h1>
        <VideoTestimonials />
        <Testimonials />
      </main>
      <Footer onNavigate={onNavigate} />
    </div>
  );
}

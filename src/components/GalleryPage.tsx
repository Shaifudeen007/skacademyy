import { useEffect } from 'react';
import Header from './Header';
import Footer from './Footer';
import { GallerySection } from './NewSections';
import SEOHead from '../seo/SEOHead';
import { siteConfig } from '../seo/siteConfig';
import { getBreadcrumbSchema } from '../seo/schemaGenerator';

export default function GalleryPage({
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

  const gallerySEO = siteConfig.routes.gallery;
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: 'Home', path: '/' },
    { name: 'Training Gallery', path: '/gallery' },
  ]);

  return (
    <div className={`min-h-screen ${isDark ? 'dark bg-[#09090B] text-zinc-50' : 'bg-white text-zinc-900'} font-sans transition-colors duration-300`}>
      <SEOHead
        title={gallerySEO.title}
        description={gallerySEO.description}
        keywords={gallerySEO.keywords}
        canonical={gallerySEO.canonical}
        ogType={gallerySEO.ogType}
        schemas={[breadcrumbSchema]}
      />
      <Header isDark={isDark} toggleTheme={toggleTheme} onNavigate={onNavigate} />
      <main className="pt-28 md:pt-32">
        <h1 className="sr-only">Practical Aesthetic Training Gallery - SK International Institute of Skills</h1>
        <GallerySection />
      </main>
      <Footer onNavigate={onNavigate} />
    </div>
  );
}

import Header from './Header';
import Footer from './Footer';
import { FounderSpotlight } from './HomeSections';
import { AboutSection, CertificationSection } from './NewSections';
import { useEffect } from 'react';
import SEOHead from '../seo/SEOHead';
import { siteConfig } from '../seo/siteConfig';
import { getLocalBusinessSchema, getBreadcrumbSchema } from '../seo/schemaGenerator';

export default function AboutPage({
  isDark,
  toggleTheme,
  onNavigate,
}: {
  isDark: boolean;
  toggleTheme: () => void;
  onNavigate?: (page: string) => void;
}) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const aboutSEO = siteConfig.routes.about;
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
  ]);
  const schemas = [getLocalBusinessSchema(), breadcrumbSchema];

  return (
    <div className={`min-h-screen ${isDark ? 'dark bg-obsidian text-zinc-50' : 'bg-white text-zinc-900'} font-sans transition-colors duration-300`}>
      <SEOHead
        title={aboutSEO.title}
        description={aboutSEO.description}
        keywords={aboutSEO.keywords}
        canonical={aboutSEO.canonical}
        ogType={aboutSEO.ogType}
        schemas={schemas}
      />
      <Header isDark={isDark} toggleTheme={toggleTheme} onNavigate={onNavigate} />
      <main className="pt-28 md:pt-32">
        <h1 className="sr-only">About SK International Institute of Skills - Aesthetic Academy in Chennai</h1>
        <AboutSection showStats={true} onNavigate={onNavigate} />
        <FounderSpotlight />
        <CertificationSection />
      </main>
      <Footer onNavigate={onNavigate} />
    </div>
  );
}

import Header from './Header';
import Footer from './Footer';
import { FounderSpotlight } from './HomeSections';
import { AboutSection, CertificationSection } from './NewSections';
import { useEffect } from 'react';

export default function AboutPage({ isDark, onNavigate }: { isDark: boolean, onNavigate?: (page: string) => void }) {
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className={`min-h-screen ${isDark ? 'dark bg-obsidian text-zinc-50' : 'bg-white text-zinc-900'} font-sans transition-colors duration-300`}>
      <Header onNavigate={onNavigate} />
      <main className="pt-20 md:pt-16">
        <AboutSection onNavigate={onNavigate} />
        <FounderSpotlight />
        <CertificationSection />
      </main>
      <Footer />
    </div>
  );
}

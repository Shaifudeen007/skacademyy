import Header from './Header';
import Footer from './Footer';
import { FounderSpotlight } from './HomeSections';
import { AboutSection, CertificationSection } from './NewSections';
import { useEffect } from 'react';

export default function AboutPage({ isDark, toggleTheme, onNavigate }: { isDark: boolean, toggleTheme: () => void, onNavigate?: (page: string) => void }) {
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className={`min-h-screen ${isDark ? 'dark bg-obsidian text-zinc-50' : 'bg-white text-zinc-900'} font-sans transition-colors duration-300`}>
      <Header isDark={isDark} toggleTheme={toggleTheme} onNavigate={onNavigate} />
      <main className="pt-32 md:pt-32">
        <AboutSection showStats={true} onNavigate={onNavigate} />
        <FounderSpotlight />
        <CertificationSection />
      </main>
      <Footer />
    </div>
  );
}

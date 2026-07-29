
import Header from './Header';
import Hero from './Hero';
import { Advantage, FounderSpotlight, ServicesGrid, CoursesGrid, Testimonials } from './HomeSections';
import Footer from './Footer';

export default function LandingPage({ isDark, toggleTheme, onNavigate }: { isDark: boolean, toggleTheme: () => void, onNavigate?: (page: string) => void }) {
  return (
    <div className={`min-h-screen ${isDark ? 'dark bg-obsidian text-zinc-50' : 'bg-white text-zinc-900'} font-sans transition-colors duration-300`}>
      <Header isDark={isDark} toggleTheme={toggleTheme} onNavigate={onNavigate} />
      <main>
        <Hero />
        <Advantage />
        <FounderSpotlight />
        <ServicesGrid onNavigate={onNavigate} />
        <CoursesGrid />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
}

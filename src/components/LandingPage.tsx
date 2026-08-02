
import Header from './Header';
import Hero from './Hero';

import { 
  TrainingExperienceSection, 
  WhoCanJoinSection, 
  ContactSection, 
  FinalCTASection,
  WhyChooseUsSection,
  EquipmentSalesSection,
  InstagramProfilesSection
} from './NewSections';
import Footer from './Footer';

export default function LandingPage({ isDark, toggleTheme, onNavigate }: { isDark: boolean, toggleTheme: () => void, onNavigate?: (page: string) => void }) {
  return (
    <div className={`min-h-screen ${isDark ? 'dark bg-obsidian text-zinc-50' : 'bg-white text-zinc-900'} font-sans transition-colors duration-300`}>
      <Header isDark={isDark} toggleTheme={toggleTheme} onNavigate={onNavigate} />
      <main>
        <Hero />
        <EquipmentSalesSection />
        <TrainingExperienceSection />
        <WhoCanJoinSection />
        <WhyChooseUsSection />
        <InstagramProfilesSection />
        <ContactSection />
        <FinalCTASection />
      </main>
      <Footer />
      
    </div>
  );
}

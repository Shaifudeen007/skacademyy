
import Header from './Header';
import Hero from './Hero';
import { CoursesGrid, Testimonials, VideoTestimonials } from './HomeSections';
import { 
  AboutSection, 
  TrainingExperienceSection, 
  GallerySection, 
  WhoCanJoinSection, 
  ContactSection, 
  FinalCTASection,
  WhyChooseUsSection,
  EquipmentSalesSection
} from './NewSections';
import Footer from './Footer';

export default function LandingPage({ isDark, toggleTheme, onNavigate }: { isDark: boolean, toggleTheme: () => void, onNavigate?: (page: string) => void }) {
  return (
    <div className={`min-h-screen ${isDark ? 'dark bg-obsidian text-zinc-50' : 'bg-white text-zinc-900'} font-sans transition-colors duration-300`}>
      <Header isDark={isDark} toggleTheme={toggleTheme} onNavigate={onNavigate} />
      <main>
        <Hero />
        <AboutSection onNavigate={onNavigate} />
        <WhyChooseUsSection />
        <CoursesGrid onNavigate={onNavigate} />
        <EquipmentSalesSection />
        <TrainingExperienceSection />
        <GallerySection onNavigate={onNavigate} limit={6} />

        <WhoCanJoinSection />
        <VideoTestimonials />
        <Testimonials />
        <ContactSection />
        <FinalCTASection />
      </main>
      <Footer />
      
    </div>
  );
}

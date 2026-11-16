import Header from './Header';
import Hero from './Hero';
import SriLankaBatchSection from './SriLankaBatchSection';
import { CoursesGrid } from './HomeSections';
import {
  TrainingExperienceSection,
  WhoCanJoinSection,
  ContactSection,
  FinalCTASection,
  WhyChooseUsSection,
  EquipmentSalesSection,
  InstagramProfilesSection,
  FAQSection,
} from './NewSections';
import Footer from './Footer';
import SEOHead from '../seo/SEOHead';
import { siteConfig } from '../seo/siteConfig';
import { getLocalBusinessSchema, getWebSiteSchema, getFaqSchema } from '../seo/schemaGenerator';

export default function LandingPage({
  isDark,
  toggleTheme,
  onNavigate,
}: {
  isDark: boolean;
  toggleTheme: () => void;
  onNavigate?: (page: string) => void;
}) {
  const homeSEO = siteConfig.routes.home;
  const homeSchemas = [getLocalBusinessSchema(), getWebSiteSchema(), getFaqSchema()];

  return (
    <div className={`min-h-screen ${isDark ? 'dark bg-obsidian text-zinc-50' : 'bg-white text-zinc-900'} font-sans transition-colors duration-300`}>
      <SEOHead
        title={homeSEO.title}
        description={homeSEO.description}
        keywords={homeSEO.keywords}
        canonical={homeSEO.canonical}
        ogType={homeSEO.ogType}
        schemas={homeSchemas}
      />
      <Header isDark={isDark} toggleTheme={toggleTheme} onNavigate={onNavigate} />
      <main>
        <Hero />
        <SriLankaBatchSection onNavigate={onNavigate} />
        <CoursesGrid onNavigate={onNavigate} minimal={true} />
        <EquipmentSalesSection />
        <TrainingExperienceSection />
        <WhoCanJoinSection />
        <WhyChooseUsSection />
        <InstagramProfilesSection />
        <FAQSection />
        <ContactSection />
        <FinalCTASection />
      </main>
      <Footer onNavigate={onNavigate} />
    </div>
  );
}

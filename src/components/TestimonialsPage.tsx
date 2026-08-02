
import Header from './Header';
import Footer from './Footer';
import { Testimonials, VideoTestimonials } from './HomeSections';

export default function TestimonialsPage({ isDark, toggleTheme, onNavigate }: { isDark: boolean, toggleTheme: () => void, onNavigate: (page: string) => void }) {
  return (
    <div className={`min-h-screen ${isDark ? 'dark bg-obsidian text-zinc-50' : 'bg-white text-zinc-900'} font-sans transition-colors duration-300`}>
      <Header isDark={isDark} toggleTheme={toggleTheme} onNavigate={onNavigate} />
      <div className="pt-24 pb-12">
        <VideoTestimonials />
        <Testimonials />
      </div>
      <Footer />
    </div>
  );
}

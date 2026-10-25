import Header from './Header';
import Footer from './Footer';
import { CoursesGrid } from './HomeSections';

export default function CoursesPage({ isDark, toggleTheme, onNavigate }: { isDark: boolean, toggleTheme: () => void, onNavigate: (page: string) => void }) {
  return (
    <div className={`min-h-screen ${isDark ? 'dark bg-[#09090B] text-zinc-50' : 'bg-white text-zinc-900'} font-sans transition-colors duration-300`}>
      <Header isDark={isDark} toggleTheme={toggleTheme} onNavigate={onNavigate} />
      <main className="pt-24 md:pt-28">
        <CoursesGrid onNavigate={onNavigate} />
      </main>
      <Footer />
    </div>
  );
}

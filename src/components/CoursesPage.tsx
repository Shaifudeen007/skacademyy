import Header from './Header';
import { CoursesGrid } from './HomeSections';

export default function CoursesPage({ isDark, toggleTheme, onNavigate }: { isDark: boolean, toggleTheme: () => void, onNavigate: (page: string) => void }) {
  return (
    <div className={`min-h-screen ${isDark ? 'dark bg-[#09090B] text-zinc-50' : 'bg-white text-zinc-900'} font-sans transition-colors duration-300`}>
      <Header isDark={isDark} toggleTheme={toggleTheme} onNavigate={onNavigate} />
      <main className="pt-0 md:pt-0">
        <CoursesGrid onNavigate={onNavigate} />
      </main>
    </div>
  );
}

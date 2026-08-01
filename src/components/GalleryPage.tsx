import Header from './Header';
import { GallerySection } from './NewSections';

export default function GalleryPage({ isDark, onNavigate }: { isDark: boolean, onNavigate: (page: string) => void }) {
  return (
    <div className={`min-h-screen ${isDark ? 'dark bg-[#09090B] text-zinc-50' : 'bg-white text-zinc-900'} font-sans transition-colors duration-300`}>
      <Header onNavigate={onNavigate} />
      <main className="pt-20 md:pt-16">
        <GallerySection onNavigate={onNavigate} />
      </main>
    </div>
  );
}

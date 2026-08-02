import { Home, Sparkles, GraduationCap, Info, Moon, Sun, MessageSquareHeart } from 'lucide-react';

export default function Header({ toggleTheme, isDark, onNavigate }: { toggleTheme?: () => void, isDark?: boolean, onNavigate?: (page: string) => void }) {
  return (
    <>
      <div className="fixed top-0 md:top-6 left-0 right-0 z-50 flex justify-center md:px-4 pointer-events-none">
        <header className="pointer-events-auto w-full md:w-auto bg-white dark:bg-[#18181B] md:bg-[#18181B] text-zinc-900 md:text-white dark:text-white shadow-2xl rounded-none md:rounded-full px-4 py-3 md:p-2 flex items-center justify-between md:justify-center gap-4 sm:gap-6 border-b border-zinc-200 dark:border-zinc-700/50 md:border-zinc-700/50">
          
          <div className="flex items-center gap-3">
            {/* Brand Circular Icon */}
            <a href="#home" onClick={() => onNavigate && onNavigate('home')} className="w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center shrink-0 hover:scale-105 transition-transform">
              <div className="relative inline-block pr-1">
                <span className="font-black text-xl md:text-2xl tracking-tighter bg-clip-text text-transparent bg-glare-gradient bg-[length:200%_auto] animate-text-glare">SK</span>
              </div>
            </a>
            
            {/* Brand Name for Mobile */}
            <span className="md:hidden font-extrabold tracking-wide text-lg text-zinc-900 dark:text-white">International Institute of Skills</span>
          </div>
          
          {/* Nav Links */}
          <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
            {['Home', 'About', 'Courses', 'Gallery', 'Testimonials', 'Contact'].map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase()}`} 
                onClick={(e) => {
                  e.preventDefault();
                  if (item === 'About' && onNavigate) onNavigate('about');
                  else if (item === 'Courses' && onNavigate) onNavigate('courses');
                  else if (item === 'Gallery' && onNavigate) onNavigate('gallery');
                  else if (item === 'Testimonials' && onNavigate) onNavigate('testimonials');
                  else if (onNavigate) {
                    onNavigate('home');
                    if (item === 'Contact') {
                      setTimeout(() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }), 100);
                    } else {
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }
                  }
                }}
                className="hover:text-gold-metallic transition-colors"
              >
                {item}
              </a>
            ))}
          </nav>
          
          {/* Actions */}
          <div className="flex items-center gap-2 pl-2">
            <button onClick={toggleTheme} className="p-2.5 rounded-full hover:bg-white/10 transition-colors pointer-events-auto">
              {isDark !== false ? <Sun className="w-4 h-4 text-gold-metallic" /> : <Moon className="w-4 h-4 text-zinc-400" />}
            </button>
          </div>
        </header>
      </div>

      {/* Mobile Bottom Bar */}
      <div className="md:hidden fixed bottom-6 left-4 right-4 z-50">
        <nav className="flex justify-around items-center p-3 bg-white/95 dark:bg-[#18181B]/95 backdrop-blur-xl border border-zinc-200/50 dark:border-zinc-800/50 rounded-full shadow-[0_10px_40px_rgba(0,0,0,0.1)] dark:shadow-[0_10px_40px_rgba(0,0,0,0.6)]">
          <a href="#home" onClick={() => onNavigate && onNavigate('home')} className="flex flex-col items-center gap-1 text-zinc-500 dark:text-zinc-400 hover:text-gold-bronze dark:hover:text-gold-metallic hover:-translate-y-1 hover:drop-shadow-[0_0_8px_rgba(212,175,55,0.6)] transition-all duration-300">
            <Home className="w-5 h-5" />
            <span className="text-[9px] sm:text-[10px] font-bold uppercase tracking-wider">Home</span>
          </a>
          <a href="#about" onClick={() => onNavigate && onNavigate('about')} className="flex flex-col items-center gap-1 text-zinc-500 dark:text-zinc-400 hover:text-gold-bronze dark:hover:text-gold-metallic hover:-translate-y-1 hover:drop-shadow-[0_0_8px_rgba(212,175,55,0.6)] transition-all duration-300">
            <Info className="w-5 h-5" />
            <span className="text-[9px] sm:text-[10px] font-bold uppercase tracking-wider">About</span>
          </a>

          <a href="#courses" onClick={(e) => { e.preventDefault(); if (onNavigate) onNavigate('courses'); }} className="flex flex-col items-center gap-1 text-zinc-500 dark:text-zinc-400 hover:text-gold-bronze dark:hover:text-gold-metallic hover:-translate-y-1 hover:drop-shadow-[0_0_8px_rgba(212,175,55,0.6)] transition-all duration-300">
            <GraduationCap className="w-5 h-5" />
            <span className="text-[9px] sm:text-[10px] font-bold uppercase tracking-wider">Courses</span>
          </a>
          <a href="#gallery" onClick={(e) => { e.preventDefault(); if (onNavigate) onNavigate('gallery'); }} className="flex flex-col items-center gap-1 text-zinc-500 dark:text-zinc-400 hover:text-gold-bronze dark:hover:text-gold-metallic hover:-translate-y-1 hover:drop-shadow-[0_0_8px_rgba(212,175,55,0.6)] transition-all duration-300">
            <Sparkles className="w-5 h-5" />
            <span className="text-[9px] sm:text-[10px] font-bold uppercase tracking-wider">Gallery</span>
          </a>
          <a href="#testimonials" onClick={(e) => { e.preventDefault(); if (onNavigate) onNavigate('testimonials'); }} className="flex flex-col items-center gap-1 text-zinc-500 dark:text-zinc-400 hover:text-gold-bronze dark:hover:text-gold-metallic hover:-translate-y-1 hover:drop-shadow-[0_0_8px_rgba(212,175,55,0.6)] transition-all duration-300">
            <MessageSquareHeart className="w-5 h-5" />
            <span className="text-[9px] sm:text-[10px] font-bold uppercase tracking-wider">Reviews</span>
          </a>
        </nav>
      </div>
    </>
  );
}

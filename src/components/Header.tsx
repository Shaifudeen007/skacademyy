import { Moon, Sun, Home, Sparkles, GraduationCap, Info } from 'lucide-react';

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
            <span className="md:hidden font-extrabold tracking-wide text-lg text-zinc-900 dark:text-white">Beauty Academy</span>
          </div>
          
          {/* Nav Links */}
          <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
            {['Home', 'Services', 'Courses', 'Bookings', 'Blogs', 'Gallery', 'Contact'].map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase()}`} 
                onClick={() => {
                  if (item === 'Services' && onNavigate) onNavigate('services');
                  else if (onNavigate) onNavigate('home');
                }}
                className="hover:text-gold-metallic transition-colors"
              >
                {item}
              </a>
            ))}
          </nav>
          
          {/* Actions */}
          <div className="flex items-center gap-2 pl-2">
            {toggleTheme && (
              <button onClick={toggleTheme} className="p-2.5 rounded-full hover:bg-white/10 transition-colors pointer-events-auto">
                {isDark ? <Sun className="w-4 h-4 text-gold-metallic" /> : <Moon className="w-4 h-4 text-zinc-400" />}
              </button>
            )}
            <a href="#contact" className="bg-white text-black hover:bg-zinc-200 font-medium px-6 py-3 rounded-full text-sm transition-colors hidden sm:block pointer-events-auto">
              Book Appointment
            </a>
          </div>
        </header>
      </div>

      {/* Mobile Bottom Bar */}
      <div className="md:hidden fixed bottom-6 left-4 right-4 z-50">
        <nav className="flex justify-around items-center p-3 bg-white/95 dark:bg-[#18181B]/95 backdrop-blur-xl border border-zinc-200/50 dark:border-zinc-800/50 rounded-full shadow-[0_10px_40px_rgba(0,0,0,0.1)] dark:shadow-[0_10px_40px_rgba(0,0,0,0.6)]">
          <a href="#home" onClick={() => onNavigate && onNavigate('home')} className="flex flex-col items-center gap-1 text-zinc-500 dark:text-zinc-400 hover:text-gold-bronze dark:hover:text-gold-metallic hover:-translate-y-1 hover:drop-shadow-[0_0_8px_rgba(212,175,55,0.6)] transition-all duration-300">
            <Home className="w-5 h-5" />
            <span className="text-[10px] font-bold uppercase tracking-wider">Home</span>
          </a>
          <a href="#about" onClick={() => onNavigate && onNavigate('home')} className="flex flex-col items-center gap-1 text-zinc-500 dark:text-zinc-400 hover:text-gold-bronze dark:hover:text-gold-metallic hover:-translate-y-1 hover:drop-shadow-[0_0_8px_rgba(212,175,55,0.6)] transition-all duration-300">
            <Info className="w-5 h-5" />
            <span className="text-[10px] font-bold uppercase tracking-wider">About</span>
          </a>
          <a href="#services" onClick={() => onNavigate && onNavigate('services')} className="flex flex-col items-center gap-1 text-zinc-500 dark:text-zinc-400 hover:text-gold-bronze dark:hover:text-gold-metallic hover:-translate-y-1 hover:drop-shadow-[0_0_8px_rgba(212,175,55,0.6)] transition-all duration-300">
            <Sparkles className="w-5 h-5" />
            <span className="text-[10px] font-bold uppercase tracking-wider">Services</span>
          </a>
          <a href="#courses" onClick={() => onNavigate && onNavigate('home')} className="flex flex-col items-center gap-1 text-zinc-500 dark:text-zinc-400 hover:text-gold-bronze dark:hover:text-gold-metallic hover:-translate-y-1 hover:drop-shadow-[0_0_8px_rgba(212,175,55,0.6)] transition-all duration-300">
            <GraduationCap className="w-5 h-5" />
            <span className="text-[10px] font-bold uppercase tracking-wider">Courses</span>
          </a>
        </nav>
      </div>
    </>
  );
}

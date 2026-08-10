import { Home, Sparkles, GraduationCap, Info, Moon, Sun, MessageSquareHeart, Calendar, MessageCircle } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function Header({ toggleTheme, isDark, onNavigate }: { toggleTheme?: () => void, isDark?: boolean, onNavigate?: (page: string) => void }) {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <div className="fixed top-0 left-0 right-0 z-50 flex flex-col pointer-events-none">
        <header className={`pointer-events-auto w-full font-['Work_Sans'] text-zinc-900 dark:text-white rounded-none transition-all duration-300 ${isScrolled ? 'bg-white/70 dark:bg-black/40 backdrop-blur-xl shadow-lg dark:shadow-[0_4px_30px_rgba(0,0,0,0.3)]' : 'bg-transparent'}`}>
          <div className="max-w-7xl mx-auto w-full px-4 py-2 sm:px-6 md:py-2 lg:px-8 flex items-center justify-between gap-2 sm:gap-6">

            <div className="flex items-center gap-2 max-w-[80%] md:max-w-none shrink-0">
              {/* Brand Circular Icon */}
              <a href="#home" onClick={() => onNavigate && onNavigate('home')} className="h-12 md:h-16 flex items-center justify-center shrink-0 hover:scale-110 transition-transform ml-1 md:ml-4">
                <img
                  src="/N0__48102__Angalamman_Kovil_St__Choolai__Chennai__Tamil_Nadu_600112.-removebg-preview.png"
                  alt="SK Academy Logo"
                  className="h-full object-contain scale-[2.5] translate-y-3"
                />
              </a>

              {/* Brand Name */}
              <span className="font-extrabold tracking-tight text-[15px] sm:text-base lg:text-lg whitespace-nowrap truncate text-zinc-900 dark:text-white ml-2">SK International Institute of Skills</span>
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
            <div className="flex items-center justify-end gap-2 shrink-0">
              <button onClick={toggleTheme} className="p-2.5 rounded-full hover:bg-black/5 dark:hover:bg-white/10 transition-colors pointer-events-auto">
                {isDark !== false ? <Sun className="w-4 h-4 text-gold-metallic" /> : <Moon className="w-4 h-4 text-zinc-400" />}
              </button>
            </div>
          </div>
        </header>

        {/* Marquee */}
        <a 
          href="https://wa.me/918610345830?text=Hello%20SK%20Academy,%20I%20would%20like%20to%20know%20more%20about%20the%20courses."
          target="_blank" 
          rel="noopener noreferrer"
          className="overflow-hidden whitespace-nowrap pointer-events-auto w-full bg-gold-gradient text-zinc-900 py-3 sm:py-1.5 shadow-md flex font-medium text-sm tracking-wide border-b border-gold-bronze/20 hover:opacity-90 transition-opacity cursor-pointer block group"
        >
          <div className="animate-marquee inline-flex shrink-0 items-center">
            <span className="mx-6 font-bold flex items-center gap-1.5"><Sparkles className="w-3.5 h-3.5" /> Upcoming Batches 2026! Reserve your place and begin your journey toward a successful career.</span>
            <span className="mx-2 text-gold-bronze">•</span>
            <span className="mx-6 flex items-center gap-1.5"><Calendar className="w-3.5 h-3.5" /> <span className="font-bold">Aesthetic Course:</span> 10/08/2026 & 17/08/2026 (10:00 AM - 06:00 PM)</span>
            <span className="mx-2 text-gold-bronze">•</span>
            <span className="mx-6 flex items-center gap-1.5"><Calendar className="w-3.5 h-3.5" /> <span className="font-bold">PMU Course:</span> 14/08/2026 (10:00 AM - 06:00 PM)</span>
            <span className="mx-2 text-gold-bronze">•</span>
            <span className="mx-6 flex items-center gap-1.5"><MessageCircle className="w-3.5 h-3.5" /> Seats are filling fast! <span className="font-bold underline group-hover:text-white transition-colors">WhatsApp: +91 86103 45830</span> to secure your enrollment. <Sparkles className="w-3.5 h-3.5 ml-1" /></span>
          </div>
          <div className="animate-marquee inline-flex shrink-0 items-center" aria-hidden="true">
            <span className="mx-6 font-bold flex items-center gap-1.5"><Sparkles className="w-3.5 h-3.5" /> Upcoming Batches 2026! Reserve your place and begin your journey toward a successful career.</span>
            <span className="mx-2 text-gold-bronze">•</span>
            <span className="mx-6 flex items-center gap-1.5"><Calendar className="w-3.5 h-3.5" /> <span className="font-bold">Aesthetic Course:</span> 10/08/2026 & 17/08/2026 (10:00 AM - 06:00 PM)</span>
            <span className="mx-2 text-gold-bronze">•</span>
            <span className="mx-6 flex items-center gap-1.5"><Calendar className="w-3.5 h-3.5" /> <span className="font-bold">PMU Course:</span> 14/08/2026 (10:00 AM - 06:00 PM)</span>
            <span className="mx-2 text-gold-bronze">•</span>
            <span className="mx-6 flex items-center gap-1.5"><MessageCircle className="w-3.5 h-3.5" /> Seats are filling fast! <span className="font-bold underline group-hover:text-white transition-colors">WhatsApp: +91 86103 45830</span> to secure your enrollment. <Sparkles className="w-3.5 h-3.5 ml-1" /></span>
          </div>
        </a>
      </div>

      {/* Mobile Bottom Bar */}
      <div className="md:hidden fixed bottom-6 left-4 right-4 z-50">
        <nav className="flex justify-around items-center p-3 font-['Work_Sans'] rounded-full transition-all duration-300 bg-white/70 dark:bg-black/40 backdrop-blur-xl shadow-[0_4px_20px_rgba(0,0,0,0.1)] dark:shadow-[0_4px_30px_rgba(0,0,0,0.3)] border border-zinc-200/50 dark:border-zinc-800/50">
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

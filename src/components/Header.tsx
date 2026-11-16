import { Home, Sparkles, Info, Moon, Sun, MessageSquareHeart, Calendar, MessageCircle, ChevronDown, Globe, BookOpen } from 'lucide-react';
import { useState, useEffect } from 'react';

const internationalCountries = [
  { name: 'Sri Lanka', flag: '🇱🇰', flagImg: 'https://flagcdn.com/w40/lk.png', isComingSoon: false },
  { name: 'Nepal', flag: '🇳🇵', flagImg: 'https://flagcdn.com/w40/np.png', isComingSoon: true },
  { name: 'Malaysia', flag: '🇲🇾', flagImg: 'https://flagcdn.com/w40/my.png', isComingSoon: true },
  { name: 'Dubai', flag: '🇦🇪', flagImg: 'https://flagcdn.com/w40/ae.png', isComingSoon: true },
];

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
            <nav className="hidden md:flex items-center gap-4 lg:gap-6 text-sm font-medium">
              <a
                href="/"
                onClick={(e) => {
                  e.preventDefault();
                  if (onNavigate) {
                    onNavigate('home');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }
                }}
                className="hover:text-gold-metallic transition-colors"
              >
                Home
              </a>

              <a
                href="/about"
                onClick={(e) => {
                  e.preventDefault();
                  if (onNavigate) onNavigate('about');
                }}
                className="hover:text-gold-metallic transition-colors"
              >
                About
              </a>

              {/* Courses Dropdown */}
              <div className="relative group">
                <a
                  href="/courses"
                  onClick={(e) => {
                    e.preventDefault();
                    if (onNavigate) onNavigate('courses');
                  }}
                  className="flex items-center gap-1.5 hover:text-gold-metallic transition-colors py-2 cursor-pointer"
                >
                  <span>Courses</span>
                  <ChevronDown className="w-3.5 h-3.5 group-hover:rotate-180 transition-transform duration-200 text-gold-metallic" />
                </a>

                {/* Dropdown Menu */}
                <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2 w-80 opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition-all duration-200 z-50">
                  <div className="p-2.5 rounded-2xl bg-white/95 dark:bg-[#111]/95 border border-zinc-200 dark:border-zinc-800 shadow-2xl backdrop-blur-xl space-y-1">
                    <div className="px-3 py-1.5 border-b border-zinc-100 dark:border-zinc-800/80 mb-1">
                      <span className="block text-[10px] font-bold uppercase tracking-wider text-gold-bronze dark:text-gold-champagne">
                        Flagship Programs
                      </span>
                    </div>

                    <button
                      type="button"
                      onClick={(e) => {
                        e.preventDefault();
                        if (onNavigate) onNavigate('course-aesthetic');
                      }}
                      className="w-full text-left px-3 py-2.5 rounded-xl hover:bg-gold-bronze/10 dark:hover:bg-gold-metallic/10 transition-colors flex items-center justify-between gap-3 group/item cursor-pointer"
                    >
                      <div className="flex flex-col min-w-0 flex-1">
                        <span className="font-bold text-sm text-zinc-900 dark:text-zinc-100 group-hover/item:text-gold-metallic transition-colors">
                          Aesthetic Course
                        </span>
                        <span className="text-[11px] text-zinc-500 dark:text-zinc-400 truncate">Clinical Cosmetology & Lasers</span>
                      </div>
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/25 shrink-0 whitespace-nowrap">
                        <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                        <span>Open</span>
                      </span>
                    </button>

                    <button
                      type="button"
                      onClick={(e) => {
                        e.preventDefault();
                        if (onNavigate) onNavigate('course-pmu');
                      }}
                      className="w-full text-left px-3 py-2.5 rounded-xl hover:bg-gold-bronze/10 dark:hover:bg-gold-metallic/10 transition-colors flex items-center justify-between gap-3 group/item cursor-pointer"
                    >
                      <div className="flex flex-col min-w-0 flex-1">
                        <span className="font-bold text-sm text-zinc-900 dark:text-zinc-100 group-hover/item:text-gold-metallic transition-colors">
                          PMU Course
                        </span>
                        <span className="text-[11px] text-zinc-500 dark:text-zinc-400 truncate">Semi-Permanent Makeup</span>
                      </div>
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/25 shrink-0 whitespace-nowrap">
                        <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                        <span>Open</span>
                      </span>
                    </button>

                    <div className="border-t border-zinc-100 dark:border-zinc-800/80 pt-1 mt-1">
                      <button
                        type="button"
                        onClick={(e) => {
                          e.preventDefault();
                          if (onNavigate) onNavigate('courses');
                        }}
                        className="w-full text-left px-3 py-2 rounded-xl text-xs font-bold text-gold-bronze dark:text-gold-champagne hover:bg-gold-bronze/10 transition-colors flex items-center justify-between cursor-pointer"
                      >
                        <span>View All Academy Courses</span>
                        <span>→</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* International Programs Dropdown */}
              <div className="relative group">
                <a
                  href="/international-programs"
                  onClick={(e) => {
                    e.preventDefault();
                    if (onNavigate) onNavigate('international-programs');
                  }}
                  className="flex items-center gap-1.5 hover:text-gold-metallic transition-colors py-2 cursor-pointer"
                >
                  <span>International Programs</span>
                  <ChevronDown className="w-3.5 h-3.5 group-hover:rotate-180 transition-transform duration-200 text-gold-metallic" />
                </a>

                {/* Dropdown Menu */}
                <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2 w-80 opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition-all duration-200 z-50">
                  <div className="p-2.5 rounded-2xl bg-white/95 dark:bg-[#111]/95 border border-zinc-200 dark:border-zinc-800 shadow-2xl backdrop-blur-xl space-y-1">
                    <div className="px-3 py-1.5 border-b border-zinc-100 dark:border-zinc-800/80 mb-1">
                      <span className="block text-[10px] font-bold uppercase tracking-wider text-gold-bronze dark:text-gold-champagne">
                        Global Student Hubs
                      </span>
                    </div>

                    {internationalCountries.map((c) => (
                      <button
                        key={c.name}
                        type="button"
                        onClick={(e) => {
                          e.preventDefault();
                          if (onNavigate) onNavigate('international-programs');
                        }}
                        className="w-full text-left px-3 py-2.5 rounded-xl hover:bg-gold-bronze/10 dark:hover:bg-gold-metallic/10 transition-colors flex items-center justify-between gap-3 group/item cursor-pointer"
                      >
                        <div className="flex items-center gap-2.5 min-w-0 flex-1">
                          <img src={c.flagImg} alt={c.name} className="w-5 h-3.5 object-cover rounded-sm shadow-xs border border-zinc-200 dark:border-zinc-700 shrink-0" />
                          <span className="font-bold text-sm text-zinc-900 dark:text-zinc-100 group-hover/item:text-gold-metallic transition-colors truncate">
                            {c.name}
                          </span>
                        </div>

                        {c.isComingSoon ? (
                          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-bold bg-amber-500/10 text-amber-500 dark:text-amber-400 border border-amber-500/25 shadow-sm shrink-0 whitespace-nowrap">
                            <span className="relative flex h-1.5 w-1.5">
                              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
                              <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-amber-500"></span>
                            </span>
                            <span className="animate-pulse tracking-wide uppercase text-[9px]">Coming Soon</span>
                          </span>
                        ) : (
                          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/25 shrink-0 whitespace-nowrap">
                            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                            <span>Enrolling</span>
                          </span>
                        )}
                      </button>
                    ))}

                    <div className="border-t border-zinc-100 dark:border-zinc-800/80 pt-1 mt-1">
                      <button
                        type="button"
                        onClick={(e) => {
                          e.preventDefault();
                          if (onNavigate) onNavigate('international-programs');
                        }}
                        className="w-full text-left px-3 py-2 rounded-xl text-xs font-bold text-gold-bronze dark:text-gold-champagne hover:bg-gold-bronze/10 transition-colors flex items-center justify-between"
                      >
                        <span>View International Programs</span>
                        <span>→</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <a
                href="/gallery"
                onClick={(e) => {
                  e.preventDefault();
                  if (onNavigate) onNavigate('gallery');
                }}
                className="hover:text-gold-metallic transition-colors"
              >
                Gallery
              </a>

              <a
                href="/testimonials"
                onClick={(e) => {
                  e.preventDefault();
                  if (onNavigate) onNavigate('testimonials');
                }}
                className="hover:text-gold-metallic transition-colors"
              >
                Testimonials
              </a>

              <a
                href="/#contact"
                onClick={(e) => {
                  e.preventDefault();
                  if (onNavigate) {
                    onNavigate('home');
                    setTimeout(() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }), 100);
                  }
                }}
                className="hover:text-gold-metallic transition-colors"
              >
                Contact
              </a>
            </nav>

            {/* Actions */}
            <div className="flex items-center justify-end gap-2 shrink-0">
              <button onClick={toggleTheme} className="p-2.5 rounded-full hover:bg-black/5 dark:hover:bg-white/10 transition-colors pointer-events-auto" aria-label="Toggle dark/light theme">
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
            <span className="mx-6 flex items-center gap-2">
              <Globe className="w-3.5 h-3.5 shrink-0" />
              <span>
                <span className="font-bold">International Admissions:</span> Course admission is going on for 4 countries — <span className="font-extrabold underline decoration-zinc-900/40">Sri Lanka, Nepal, Malaysia & Dubai</span>!
              </span>
            </span>
            <span className="mx-2 text-gold-bronze">•</span>
            <span className="mx-6 flex items-center gap-1.5"><Calendar className="w-3.5 h-3.5" /> <span className="font-bold">Aesthetic Course:</span> Admissions Open 2026 (10:00 AM - 06:00 PM)</span>
            <span className="mx-2 text-gold-bronze">•</span>
            <span className="mx-6 flex items-center gap-1.5"><MessageCircle className="w-3.5 h-3.5" /> Seats are filling fast! <span className="font-bold underline group-hover:text-white transition-colors">WhatsApp: +91 86103 45830</span> to secure your enrollment. <Sparkles className="w-3.5 h-3.5 ml-1" /></span>
          </div>
          <div className="animate-marquee inline-flex shrink-0 items-center" aria-hidden="true">
            <span className="mx-6 font-bold flex items-center gap-1.5"><Sparkles className="w-3.5 h-3.5" /> Upcoming Batches 2026! Reserve your place and begin your journey toward a successful career.</span>
            <span className="mx-2 text-gold-bronze">•</span>
            <span className="mx-6 flex items-center gap-2">
              <Globe className="w-3.5 h-3.5 shrink-0" />
              <span>
                <span className="font-bold">International Admissions:</span> Course admission is going on for 4 countries — <span className="font-extrabold underline decoration-zinc-900/40">Sri Lanka, Nepal, Malaysia & Dubai</span>!
              </span>
            </span>
            <span className="mx-2 text-gold-bronze">•</span>
            <span className="mx-6 flex items-center gap-1.5"><Calendar className="w-3.5 h-3.5" /> <span className="font-bold">Aesthetic Course:</span> Admissions Open 2026 (10:00 AM - 06:00 PM)</span>
            <span className="mx-2 text-gold-bronze">•</span>
            <span className="mx-6 flex items-center gap-1.5"><MessageCircle className="w-3.5 h-3.5" /> Seats are filling fast! <span className="font-bold underline group-hover:text-white transition-colors">WhatsApp: +91 86103 45830</span> to secure your enrollment. <Sparkles className="w-3.5 h-3.5 ml-1" /></span>
          </div>
        </a>
      </div>

      {/* Mobile Bottom Bar */}
      <div className="md:hidden fixed bottom-6 left-4 right-4 z-50">
        <nav className="flex justify-around items-center p-3 font-['Work_Sans'] rounded-full transition-all duration-300 bg-white/70 dark:bg-black/40 backdrop-blur-xl shadow-[0_4px_20px_rgba(0,0,0,0.1)] dark:shadow-[0_4px_30px_rgba(0,0,0,0.3)] border border-zinc-200/50 dark:border-zinc-800/50">
          <a href="/" onClick={(e) => { e.preventDefault(); if (onNavigate) onNavigate('home'); }} className="flex flex-col items-center gap-1 text-zinc-500 dark:text-zinc-400 hover:text-gold-bronze dark:hover:text-gold-metallic hover:-translate-y-1 hover:drop-shadow-[0_0_8px_rgba(212,175,55,0.6)] transition-all duration-300">
            <Home className="w-5 h-5" />
            <span className="text-[9px] sm:text-[10px] font-bold uppercase tracking-wider">Home</span>
          </a>
          <a href="/about" onClick={(e) => { e.preventDefault(); if (onNavigate) onNavigate('about'); }} className="flex flex-col items-center gap-1 text-zinc-500 dark:text-zinc-400 hover:text-gold-bronze dark:hover:text-gold-metallic hover:-translate-y-1 hover:drop-shadow-[0_0_8px_rgba(212,175,55,0.6)] transition-all duration-300">
            <Info className="w-5 h-5" />
            <span className="text-[9px] sm:text-[10px] font-bold uppercase tracking-wider">About</span>
          </a>

          <a href="/courses" onClick={(e) => { e.preventDefault(); if (onNavigate) onNavigate('courses'); }} className="flex flex-col items-center gap-1 text-zinc-500 dark:text-zinc-400 hover:text-gold-bronze dark:hover:text-gold-metallic hover:-translate-y-1 hover:drop-shadow-[0_0_8px_rgba(212,175,55,0.6)] transition-all duration-300">
            <BookOpen className="w-5 h-5" />
            <span className="text-[9px] sm:text-[10px] font-bold uppercase tracking-wider">Courses</span>
          </a>

          <a href="/international-programs" onClick={(e) => { e.preventDefault(); if (onNavigate) onNavigate('international-programs'); }} className="flex flex-col items-center gap-1 text-zinc-500 dark:text-zinc-400 hover:text-gold-bronze dark:hover:text-gold-metallic hover:-translate-y-1 hover:drop-shadow-[0_0_8px_rgba(212,175,55,0.6)] transition-all duration-300">
            <Globe className="w-5 h-5" />
            <span className="text-[9px] sm:text-[10px] font-bold uppercase tracking-wider">Programs</span>
          </a>

          <a href="/gallery" onClick={(e) => { e.preventDefault(); if (onNavigate) onNavigate('gallery'); }} className="flex flex-col items-center gap-1 text-zinc-500 dark:text-zinc-400 hover:text-gold-bronze dark:hover:text-gold-metallic hover:-translate-y-1 hover:drop-shadow-[0_0_8px_rgba(212,175,55,0.6)] transition-all duration-300">
            <Sparkles className="w-5 h-5" />
            <span className="text-[9px] sm:text-[10px] font-bold uppercase tracking-wider">Gallery</span>
          </a>
          <a href="/testimonials" onClick={(e) => { e.preventDefault(); if (onNavigate) onNavigate('testimonials'); }} className="flex flex-col items-center gap-1 text-zinc-500 dark:text-zinc-400 hover:text-gold-bronze dark:hover:text-gold-metallic hover:-translate-y-1 hover:drop-shadow-[0_0_8px_rgba(212,175,55,0.6)] transition-all duration-300">
            <MessageSquareHeart className="w-5 h-5" />
            <span className="text-[9px] sm:text-[10px] font-bold uppercase tracking-wider">Reviews</span>
          </a>
        </nav>
      </div>
    </>
  );
}

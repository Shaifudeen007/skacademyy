import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Globe, ArrowRight, MessageCircle, CheckCircle2 } from 'lucide-react';

interface CountryInfo {
  name: string;
  flagImg: string;
  badge: string;
  isEnrolling?: boolean;
  highlight: string;
}

const countries: CountryInfo[] = [
  {
    name: 'Sri Lanka',
    flagImg: 'https://flagcdn.com/w80/lk.png',
    badge: 'Admissions Open',
    isEnrolling: true,
    highlight: 'Hands-on Live Patients & Travel Support',
  },
  {
    name: 'India (HQ)',
    flagImg: 'https://flagcdn.com/w80/in.png',
    badge: 'Main Campus',
    isEnrolling: true,
    highlight: '5,000+ Alumni & UK Certification',
  },
  {
    name: 'Dubai (UAE)',
    flagImg: 'https://flagcdn.com/w80/ae.png',
    badge: 'Coming Soon',
    isEnrolling: false,
    highlight: 'Advanced International Protocols',
  },
  {
    name: 'Malaysia',
    flagImg: 'https://flagcdn.com/w80/my.png',
    badge: 'Coming Soon',
    isEnrolling: false,
    highlight: 'Master Trainer Clinical Certifications',
  },
  {
    name: 'Nepal',
    flagImg: 'https://flagcdn.com/w80/np.png',
    badge: 'Coming Soon',
    isEnrolling: false,
    highlight: '1-on-1 Mentorship & Career Guidance',
  },
];

interface CountryPopupProps {
  onNavigate?: (page: string) => void;
  isOpenTrigger?: boolean;
}

export default function CountryPopup({ onNavigate, isOpenTrigger = true }: CountryPopupProps) {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (!isOpenTrigger) return;

    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 800);

    return () => clearTimeout(timer);
  }, [isOpenTrigger]);

  // Lock body scroll when popup is open
  useEffect(() => {
    if (isOpen) {
      const originalStyle = window.getComputedStyle(document.body).overflow;
      document.body.style.overflow = 'hidden';
      return () => {
        document.body.style.overflow = originalStyle;
      };
    }
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsOpen(false);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleExplore = (countryName?: string) => {
    setIsOpen(false);
    if (onNavigate) {
      onNavigate('international-programs');
    } else {
      window.dispatchEvent(new CustomEvent('navigate', { detail: 'international-programs' }));
    }
    if (countryName) {
      setTimeout(() => {
        const el = document.getElementById(countryName.toLowerCase().replace(/[^a-z0-9]/g, '-'));
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="fixed inset-0 z-[250] w-screen h-[100dvh] max-h-[100dvh] bg-[#070709]/95 text-zinc-100 backdrop-blur-2xl flex flex-col justify-between overflow-hidden select-none p-3.5 sm:p-6 md:p-8"
        >
          {/* Ambient Lighting Gradients */}
          <div className="pointer-events-none absolute -top-32 -left-32 w-96 h-96 rounded-full bg-gold-metallic/15 blur-[120px]" />
          <div className="pointer-events-none absolute -bottom-32 -right-32 w-96 h-96 rounded-full bg-gold-bronze/15 blur-[120px]" />

          {/* Fixed Prominent Close Icon Button at Top Right */}
          <div className="absolute top-3 right-3 sm:top-5 sm:right-6 z-[260]">
            <button
              type="button"
              onClick={handleClose}
              aria-label="Close popup"
              className="group flex items-center gap-2 px-3 py-2 sm:px-4 sm:py-2.5 rounded-full bg-zinc-900/90 hover:bg-zinc-800 text-zinc-200 hover:text-white border border-gold-metallic/40 hover:border-gold-metallic shadow-[0_4px_24px_rgba(0,0,0,0.6),0_0_20px_rgba(212,175,55,0.25)] transition-all cursor-pointer hover:scale-105 active:scale-95"
            >
              <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-zinc-300 group-hover:text-gold-champagne transition-colors">
                Close
              </span>
              <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-gold-metallic/20 border border-gold-metallic/40 flex items-center justify-center text-gold-champagne group-hover:bg-gold-metallic group-hover:text-zinc-950 transition-all duration-300">
                <X className="w-3.5 h-3.5 sm:w-4 sm:h-4 stroke-[2.5]" />
              </div>
            </button>
          </div>

          {/* Top Header Section */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35 }}
            className="text-center max-w-3xl mx-auto pt-1 sm:pt-2 shrink-0"
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gold-metallic/15 border border-gold-metallic/35 text-gold-champagne text-[11px] sm:text-xs font-bold uppercase tracking-widest mb-1.5 shadow-[0_0_15px_rgba(212,175,55,0.15)]">
              <Globe className="w-4 h-4 text-gold-metallic animate-spin-slow" />
              <span>SK International Institute • Global Hubs</span>
            </div>

            <h2 className="text-2xl sm:text-4xl md:text-5xl font-black text-white tracking-tight leading-tight">
              International Clinical Admissions <span className="text-transparent bg-clip-text bg-gold-gradient">2026</span>
            </h2>

            <p className="text-xs sm:text-sm md:text-base text-zinc-300 mt-1.5 max-w-2xl mx-auto line-clamp-2">
              UK LAPT & ISO accredited clinical diplomas in Aesthetic Medicine & PMU. Choose your region to view admissions and batch schedules.
            </p>
          </motion.div>

          {/* Middle Section: Big, Bold Country Cards */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.35, delay: 0.1 }}
            className="w-full max-w-7xl mx-auto my-auto py-2 sm:py-4 shrink-1 flex flex-col justify-center"
          >
            {/* Desktop / Tablet Grid (Big, spacious 5-column layout) */}
            <div className="hidden sm:grid sm:grid-cols-2 lg:grid-cols-5 gap-4 md:gap-5">
              {countries.map((c) => (
                <div
                  key={c.name}
                  onClick={() => handleExplore(c.name)}
                  className={`group relative rounded-2xl p-5 md:p-6 transition-all duration-300 cursor-pointer overflow-hidden flex flex-col justify-between border-2 min-h-[240px] md:min-h-[265px] ${
                    c.isEnrolling
                      ? 'bg-gradient-to-b from-zinc-900/95 via-zinc-900/80 to-zinc-950/95 border-gold-metallic/50 hover:border-gold-metallic shadow-[0_12px_40px_rgba(0,0,0,0.6),0_0_25px_rgba(212,175,55,0.2)] hover:shadow-[0_16px_50px_rgba(212,175,55,0.35)] hover:-translate-y-1.5'
                      : 'bg-zinc-900/70 hover:bg-zinc-900/95 border-zinc-800 hover:border-gold-metallic/40 shadow-[0_8px_30px_rgba(0,0,0,0.5)] hover:-translate-y-1'
                  }`}
                >
                  {c.isEnrolling && (
                    <div className="absolute top-0 left-0 right-0 h-1.5 bg-gold-gradient opacity-100" />
                  )}

                  <div>
                    {/* Flag + Badge */}
                    <div className="flex items-center justify-between gap-3 mb-4">
                      <img
                        src={c.flagImg}
                        alt={`${c.name} Flag`}
                        className="w-12 h-7.5 md:w-14 md:h-9 object-cover rounded-lg shadow-md border-2 border-zinc-700 group-hover:border-gold-metallic transition-colors shrink-0"
                      />
                      {c.isEnrolling ? (
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 shadow-[0_0_12px_rgba(16,185,129,0.25)]">
                          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                          <span>{c.badge}</span>
                        </span>
                      ) : (
                        <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold bg-amber-500/20 text-amber-300 border border-amber-500/40">
                          <span>{c.badge}</span>
                        </span>
                      )}
                    </div>

                    <h3 className="font-extrabold text-xl md:text-2xl text-white group-hover:text-gold-champagne transition-colors leading-tight">
                      {c.name}
                    </h3>

                    <p className="text-xs md:text-sm text-zinc-300 mt-2.5 line-clamp-3 leading-relaxed">
                      {c.highlight}
                    </p>
                  </div>

                  <div className="pt-4 mt-3 border-t border-zinc-800/80 flex items-center justify-between text-sm md:text-base font-bold text-gold-champagne group-hover:text-white transition-colors">
                    <span className="group-hover:underline">Explore Batch</span>
                    <ArrowRight className="w-4 h-4 md:w-5 md:h-5 transform group-hover:translate-x-1.5 transition-transform text-gold-metallic" />
                  </div>
                </div>
              ))}
            </div>

            {/* Mobile View Cards (Bigger & Punchier) */}
            <div className="sm:hidden space-y-2.5">
              {countries.map((c) => (
                <div
                  key={c.name}
                  onClick={() => handleExplore(c.name)}
                  className={`group relative rounded-xl px-4 py-3 transition-all active:scale-98 flex items-center justify-between border-2 ${
                    c.isEnrolling
                      ? 'bg-zinc-900/95 border-gold-metallic/50 shadow-md shadow-gold-metallic/15'
                      : 'bg-zinc-900/80 border-zinc-800'
                  }`}
                >
                  <div className="flex items-center gap-3 min-w-0">
                    <img
                      src={c.flagImg}
                      alt={`${c.name} Flag`}
                      className="w-10 h-6.5 object-cover rounded-md border border-zinc-700 shrink-0"
                    />
                    <div className="min-w-0">
                      <span className="font-extrabold text-sm text-white truncate block">
                        {c.name}
                      </span>
                      <p className="text-[11px] text-zinc-300 truncate">
                        {c.highlight}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 shrink-0 pl-2">
                    {c.isEnrolling ? (
                      <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-bold bg-emerald-500/20 text-emerald-300 border border-emerald-500/40">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                        <span>Open</span>
                      </span>
                    ) : (
                      <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-bold bg-amber-500/20 text-amber-300 border border-amber-500/40">
                        <span>Soon</span>
                      </span>
                    )}
                    <ArrowRight className="w-4 h-4 text-gold-metallic" />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Bottom Action Bar */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, delay: 0.15 }}
            className="w-full max-w-7xl mx-auto pt-2 pb-1 shrink-0 flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4 border-t border-zinc-800/80"
          >
            {/* Trust Pill / Description */}
            <div className="hidden md:flex items-center gap-5 text-xs md:text-sm text-zinc-300 font-medium">
              <span className="inline-flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-gold-metallic" />
                <span>UK LAPT & ISO Accredited</span>
              </span>
              <span className="inline-flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-gold-metallic" />
                <span>100% Practical Live Patients</span>
              </span>
              <span className="inline-flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-gold-metallic" />
                <span>Travel & Batch Guidance</span>
              </span>
            </div>

            {/* Action Buttons */}
            <div className="flex items-center gap-2.5 w-full sm:w-auto">
              <a
                href="https://wa.me/918610345830?text=Hello%20SK%20Academy,%20I%20am%20inquiring%20about%20international%20admissions."
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 py-3 px-5 rounded-xl text-xs sm:text-sm font-bold bg-[#25D366] hover:bg-[#1ebd5b] text-white transition-all shadow-[0_4px_16px_rgba(37,211,102,0.3)] hover:scale-102 active:scale-98"
              >
                <MessageCircle className="w-4 h-4 fill-white" />
                <span>WhatsApp Admission Desk</span>
              </a>

              <button
                type="button"
                onClick={() => handleExplore()}
                className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 py-3 px-5 rounded-xl text-xs sm:text-sm font-bold bg-gold-gradient text-zinc-950 hover:brightness-110 transition-all shadow-[0_4px_16px_rgba(212,175,55,0.3)] hover:scale-102 active:scale-98 cursor-pointer"
              >
                <span>View All Programs</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

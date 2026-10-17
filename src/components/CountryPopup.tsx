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
    highlight: 'Hands-on Live Patients & Clinical Training',
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
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-[250] flex items-center justify-center p-3 sm:p-5 bg-black/75 backdrop-blur-sm"
          onClick={handleClose}
        >
          {/* Centered Wide Modal Dialog */}
          <motion.div
            initial={{ scale: 0.92, opacity: 0, y: 15 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.94, opacity: 0, y: 10 }}
            transition={{ type: 'spring', damping: 26, stiffness: 360 }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-4xl lg:max-w-5xl max-h-[92vh] bg-[#0c0c0f]/95 border border-gold-metallic/40 rounded-2xl sm:rounded-3xl shadow-[0_25px_70px_rgba(0,0,0,0.85),0_0_40px_rgba(212,175,55,0.2)] flex flex-col overflow-hidden text-zinc-100 backdrop-blur-xl"
          >
            {/* Ambient Background Glow */}
            <div className="pointer-events-none absolute -top-32 -left-32 w-80 h-80 rounded-full bg-gold-metallic/15 blur-[100px]" />
            <div className="pointer-events-none absolute -bottom-32 -right-32 w-80 h-80 rounded-full bg-gold-bronze/15 blur-[100px]" />

            {/* Modal Header */}
            <div className="relative px-5 sm:px-6 pt-5 pb-4 border-b border-zinc-800/80 bg-zinc-900/50 flex items-start justify-between gap-4 shrink-0">
              <div>
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gold-metallic/15 border border-gold-metallic/35 text-gold-champagne text-[10px] sm:text-xs font-bold uppercase tracking-wider mb-1.5 shadow-[0_0_12px_rgba(212,175,55,0.15)]">
                  <Globe className="w-3.5 h-3.5 text-gold-metallic animate-spin-slow" />
                  <span>SK International Institute • Global Hubs</span>
                </div>
                <h3 className="text-xl sm:text-2xl md:text-3xl font-black text-white tracking-tight leading-snug">
                  International Clinical Admissions <span className="text-transparent bg-clip-text bg-gold-gradient">2026</span>
                </h3>
                <p className="text-xs sm:text-sm text-zinc-300 mt-1 max-w-2xl leading-relaxed">
                  UK LAPT & ISO accredited clinical diplomas in Aesthetic Medicine & PMU. Choose your region to view batch schedules.
                </p>
              </div>

              {/* Close Button */}
              <button
                type="button"
                onClick={handleClose}
                aria-label="Close popup"
                className="shrink-0 group flex items-center gap-1.5 px-3 py-1.5 sm:px-3.5 sm:py-2 rounded-full bg-zinc-800/90 hover:bg-zinc-700 text-zinc-300 hover:text-white border border-zinc-700/70 hover:border-gold-metallic/50 transition-all cursor-pointer hover:scale-105 active:scale-95"
              >
                <span className="text-xs font-bold uppercase tracking-wider text-zinc-400 group-hover:text-gold-champagne transition-colors hidden sm:inline">
                  Close
                </span>
                <X className="w-4 h-4 stroke-[2.5]" />
              </button>
            </div>

            {/* Country Cards (Desktop 5-Column Grid, Tablet 2/3-Column, Mobile List) */}
            <div className="p-4 sm:p-5 md:p-6 overflow-y-auto max-h-[58vh] overscroll-contain">
              {/* Tablet & Desktop Grid */}
              <div className="hidden sm:grid sm:grid-cols-2 lg:grid-cols-5 gap-3.5">
                {countries.map((c) => (
                  <div
                    key={c.name}
                    onClick={() => handleExplore(c.name)}
                    className={`group relative rounded-2xl p-4 transition-all duration-300 cursor-pointer overflow-hidden flex flex-col justify-between border ${
                      c.isEnrolling
                        ? 'bg-gradient-to-b from-zinc-900/95 via-zinc-900/80 to-zinc-950/95 border-gold-metallic/50 hover:border-gold-metallic shadow-[0_8px_30px_rgba(0,0,0,0.5),0_0_20px_rgba(212,175,55,0.15)] hover:shadow-[0_12px_35px_rgba(212,175,55,0.25)] hover:-translate-y-1'
                        : 'bg-zinc-900/60 hover:bg-zinc-900/90 border-zinc-800/90 hover:border-zinc-700 hover:-translate-y-0.5'
                    }`}
                  >
                    {c.isEnrolling && (
                      <div className="absolute top-0 left-0 right-0 h-1 bg-gold-gradient opacity-100" />
                    )}

                    <div>
                      {/* Flag + Badge */}
                      <div className="flex items-center justify-between gap-2 mb-3">
                        <img
                          src={c.flagImg}
                          alt={`${c.name} Flag`}
                          className="w-10 h-6.5 object-cover rounded shadow-md border border-zinc-700 group-hover:border-gold-metallic transition-colors shrink-0"
                        />
                        {c.isEnrolling ? (
                          <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-bold bg-emerald-500/20 text-emerald-300 border border-emerald-500/35 shadow-[0_0_8px_rgba(16,185,129,0.2)]">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                            <span>{c.badge}</span>
                          </span>
                        ) : (
                          <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-medium bg-zinc-800 text-zinc-400 border border-zinc-700/60">
                            <span>{c.badge}</span>
                          </span>
                        )}
                      </div>

                      <h4 className="font-extrabold text-base text-white group-hover:text-gold-champagne transition-colors leading-snug">
                        {c.name}
                      </h4>

                      <p className="text-xs text-zinc-400 mt-1.5 line-clamp-2 leading-relaxed">
                        {c.highlight}
                      </p>
                    </div>

                    <div className="pt-3 mt-3 border-t border-zinc-800/80 flex items-center justify-between text-xs font-bold text-gold-champagne group-hover:text-white transition-colors">
                      <span className="group-hover:underline">Explore Batch</span>
                      <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform text-gold-metallic" />
                    </div>
                  </div>
                ))}
              </div>

              {/* Mobile View Cards */}
              <div className="sm:hidden space-y-2.5">
                {countries.map((c) => (
                  <div
                    key={c.name}
                    onClick={() => handleExplore(c.name)}
                    className={`group relative rounded-xl p-3 transition-all cursor-pointer flex items-center justify-between border ${
                      c.isEnrolling
                        ? 'bg-zinc-900/90 border-gold-metallic/45 shadow-sm'
                        : 'bg-zinc-900/60 border-zinc-800'
                    }`}
                  >
                    <div className="flex items-center gap-3 min-w-0 pr-2">
                      <img
                        src={c.flagImg}
                        alt={`${c.name} flag`}
                        className="w-9 h-6 object-cover rounded shadow-sm border border-zinc-700 shrink-0"
                      />
                      <div className="min-w-0">
                        <span className="font-extrabold text-sm text-white group-hover:text-gold-champagne transition-colors truncate block">
                          {c.name}
                        </span>
                        <p className="text-[11px] text-zinc-400 truncate mt-0.5">
                          {c.highlight}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 shrink-0">
                      {c.isEnrolling ? (
                        <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-bold bg-emerald-500/15 text-emerald-300 border border-emerald-500/35">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                          <span>Open</span>
                        </span>
                      ) : (
                        <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-semibold bg-zinc-800 text-zinc-400 border border-zinc-700/60">
                          <span>Soon</span>
                        </span>
                      )}
                      <ArrowRight className="w-3.5 h-3.5 text-gold-metallic" />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Modal Footer / Actions */}
            <div className="px-5 sm:px-6 py-3.5 border-t border-zinc-800/80 bg-zinc-900/50 shrink-0 flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4">
              <div className="hidden md:flex items-center gap-5 text-xs text-zinc-400 font-medium">
                <span className="inline-flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-gold-metallic" />
                  <span>UK LAPT & ISO Accredited</span>
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-gold-metallic" />
                  <span>100% Practical Live Patients</span>
                </span>
              </div>

              <div className="flex items-center gap-2.5 w-full sm:w-auto">
                <a
                  href="https://wa.me/918610345830?text=Hello%20SK%20Academy,%20I%20am%20inquiring%20about%20international%20admissions."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-xs sm:text-sm font-bold bg-[#25D366] hover:bg-[#1ebd5b] text-white transition-all shadow-[0_4px_14px_rgba(37,211,102,0.25)] hover:scale-[1.02] active:scale-98"
                >
                  <MessageCircle className="w-4 h-4 fill-white" />
                  <span>WhatsApp Desk</span>
                </a>

                <button
                  type="button"
                  onClick={() => handleExplore()}
                  className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-xs sm:text-sm font-bold bg-gold-gradient text-zinc-950 hover:brightness-110 transition-all shadow-[0_4px_14px_rgba(212,175,55,0.25)] hover:scale-[1.02] active:scale-98 cursor-pointer"
                >
                  <span>All Programs</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

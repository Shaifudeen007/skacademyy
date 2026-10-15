import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Globe, ArrowRight, MessageCircle } from 'lucide-react';

interface CountryInfo {
  name: string;
  flagImg: string;
  badge: string;
  isEnrolling?: boolean;
}

const countries: CountryInfo[] = [
  {
    name: 'Sri Lanka',
    flagImg: 'https://flagcdn.com/w80/lk.png',
    badge: 'Admissions Open',
    isEnrolling: true,
  },
  {
    name: 'Nepal',
    flagImg: 'https://flagcdn.com/w80/np.png',
    badge: 'Coming Soon',
  },
  {
    name: 'Malaysia',
    flagImg: 'https://flagcdn.com/w80/my.png',
    badge: 'Coming Soon',
  },
  {
    name: 'Dubai (UAE)',
    flagImg: 'https://flagcdn.com/w80/ae.png',
    badge: 'Coming Soon',
  },
  {
    name: 'India (HQ)',
    flagImg: 'https://flagcdn.com/w80/in.png',
    badge: 'Main Campus',
    isEnrolling: true,
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

  const handleExplore = () => {
    setIsOpen(false);
    if (onNavigate) {
      onNavigate('international-programs');
    } else {
      window.dispatchEvent(new CustomEvent('navigate', { detail: 'international-programs' }));
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
          className="fixed inset-0 z-[250] flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs"
          onClick={handleClose}
        >
          {/* Compact Modal Box */}
          <motion.div
            initial={{ scale: 0.92, opacity: 0, y: 16 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.94, opacity: 0, y: 12 }}
            transition={{ type: 'spring', damping: 25, stiffness: 350 }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-sm sm:max-w-md bg-white dark:bg-[#111114] rounded-2xl border border-gold-metallic/35 shadow-[0_15px_50px_rgba(0,0,0,0.4),0_0_30px_rgba(212,175,55,0.15)] overflow-hidden"
          >
            {/* Header */}
            <div className="relative px-5 pt-5 pb-3 border-b border-zinc-100 dark:border-zinc-800/80 bg-zinc-50/70 dark:bg-zinc-900/40 flex items-start justify-between gap-3">
              <div>
                <div className="inline-flex items-center gap-1 text-[10px] font-bold uppercase tracking-wider text-gold-bronze dark:text-gold-champagne mb-1">
                  <Globe className="w-3 h-3" />
                  <span>Global Student Hubs</span>
                </div>
                <h3 className="text-base sm:text-lg font-bold text-zinc-900 dark:text-white tracking-tight leading-snug">
                  International Admissions
                </h3>
                <p className="text-[11px] sm:text-xs text-zinc-500 dark:text-zinc-400 mt-0.5">
                  UK certified clinical diploma batches open globally.
                </p>
              </div>

              {/* Close Button */}
              <button
                type="button"
                onClick={handleClose}
                aria-label="Close popup"
                className="shrink-0 w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-zinc-100 hover:bg-zinc-200 dark:bg-zinc-800 dark:hover:bg-zinc-700 text-zinc-600 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-white flex items-center justify-center transition-all cursor-pointer border border-zinc-200 dark:border-zinc-700/60"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Compact Country List */}
            <div className="p-3 sm:p-4 space-y-1.5">
              {countries.map((c) => (
                <div
                  key={c.name}
                  onClick={handleExplore}
                  className="group flex items-center justify-between p-2 sm:p-2.5 rounded-xl bg-zinc-50/80 dark:bg-zinc-900/50 hover:bg-gold-bronze/10 dark:hover:bg-gold-metallic/10 border border-zinc-200/60 dark:border-zinc-800/80 hover:border-gold-metallic/40 transition-all cursor-pointer"
                >
                  <div className="flex items-center gap-2.5">
                    <img
                      src={c.flagImg}
                      alt={`${c.name} flag`}
                      className="w-7 h-4.5 sm:w-8 sm:h-5 object-cover rounded shadow-xs border border-zinc-200 dark:border-zinc-700"
                    />
                    <span className="font-semibold text-xs sm:text-sm text-zinc-900 dark:text-zinc-100 group-hover:text-gold-bronze dark:group-hover:text-gold-champagne transition-colors">
                      {c.name}
                    </span>
                  </div>

                  {c.isEnrolling ? (
                    <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-bold bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/25">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                      {c.badge}
                    </span>
                  ) : (
                    <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-bold bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/25">
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse" />
                      {c.badge}
                    </span>
                  )}
                </div>
              ))}
            </div>

            {/* Footer */}
            <div className="px-3 pb-3 sm:px-4 sm:pb-4 pt-1 flex items-center gap-2">
              <a
                href="https://wa.me/918610345830?text=Hello%20SK%20Academy,%20I%20am%20inquiring%20about%20international%20admissions."
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 inline-flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl text-xs font-bold bg-[#25D366] hover:bg-[#1ebd5b] text-white transition-all shadow-xs"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                <span>WhatsApp</span>
              </a>

              <button
                type="button"
                onClick={handleExplore}
                className="flex-[1.4] inline-flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl text-xs font-bold bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 hover:bg-gold-gradient hover:text-zinc-900 transition-all shadow-xs cursor-pointer"
              >
                <span>View Programs</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

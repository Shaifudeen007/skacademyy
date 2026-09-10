import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Calendar, Clock, BookOpen, MessageCircle } from 'lucide-react';

export function SchedulePopup() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 15000);

    return () => clearTimeout(timer);
  }, []);

  const scheduleData = [
    {
      course: "Aesthetic Course",
      date: "SEP - 16- 2026",
      time: "10:00 AM - 06:00 PM"
    }
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div 
          className="fixed inset-0 z-[200] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setIsOpen(false)}
        >
          <motion.div 
            onClick={(e) => e.stopPropagation()}
            className="bg-white dark:bg-[#09090B] rounded-3xl w-full max-w-2xl overflow-hidden shadow-[0_0_50px_rgba(212,175,55,0.2)] border border-gold-metallic/20 relative flex flex-col transform scale-[0.95] sm:scale-100 origin-center"
            initial={{ scale: 0.9, y: 20, opacity: 0 }}
            animate={{ scale: 1, y: 0, opacity: 1 }}
            exit={{ scale: 0.9, y: 20, opacity: 0 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
          >
            {/* Header */}
            <div className="bg-zinc-900 text-white p-3 md:p-4 relative overflow-hidden shrink-0">
              <div className="absolute inset-0 bg-gold-gradient opacity-20"></div>
              <button 
                type="button"
                onClick={() => setIsOpen(false)}
                className="absolute top-4 right-4 text-white/70 hover:text-white bg-black/20 hover:bg-black/40 rounded-full p-2 transition-all z-50 cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
              
              <div className="relative z-10 text-center">
                <div className="inline-block px-2 py-0.5 bg-gold-metallic/20 border border-gold-metallic/50 rounded-full text-gold-bronze text-[9px] font-bold uppercase tracking-wider mb-1">
                  New Batches
                </div>
                <h2 className="text-lg md:text-2xl font-extrabold tracking-tight">Upcoming Batch - 2026</h2>
                <p className="text-zinc-300 text-[11px] md:text-sm mt-1">Reserve your place and begin your journey toward a successful career!</p>
              </div>
            </div>

            {/* Content */}
            <div className="p-3 md:p-5">
              <div className="mb-3 md:mb-4">
                <h3 className="text-base md:text-lg font-bold text-zinc-900 dark:text-white mb-2 md:mb-3 flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-gold-metallic" /> Course Schedule
                </h3>
                
                <div className="space-y-1.5 md:space-y-2">
                  {scheduleData.map((item, index) => (
                    <div key={index} className="flex flex-row justify-between items-center p-2 md:p-3 rounded-xl bg-zinc-50 dark:bg-black/50 border border-zinc-100 dark:border-zinc-800 hover:border-gold-metallic/30 transition-colors">
                      <div className="flex items-center gap-2">
                        <div className="w-6 h-6 md:w-8 md:h-8 rounded-full bg-gold-metallic/10 flex items-center justify-center text-gold-metallic shrink-0">
                          <BookOpen className="w-3 h-3 md:w-4 md:h-4" />
                        </div>
                        <span className="font-bold text-zinc-900 dark:text-zinc-100 text-xs md:text-base">{item.course}</span>
                      </div>
                      <div className="flex flex-col items-end text-zinc-600 dark:text-zinc-400">
                        <div className="flex items-center gap-1">
                          <Calendar className="w-3 h-3 text-gold-metallic/70" />
                          <span className="font-medium text-zinc-800 dark:text-zinc-200 text-[10px] md:text-sm">{item.date}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="w-3 h-3 text-gold-metallic/70" />
                          <span className="text-[10px] md:text-sm">{item.time}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Call to Action */}
              <div className="bg-zinc-50 dark:bg-zinc-900/50 p-3 md:p-4 rounded-2xl border border-zinc-100 dark:border-zinc-800 text-center">
                <h4 className="font-bold text-sm md:text-base text-zinc-900 dark:text-white mb-0.5 md:mb-1">Book Your Seat Now</h4>
                <p className="text-zinc-600 dark:text-zinc-400 text-[10px] md:text-[13px] mb-2 md:mb-3 max-w-md mx-auto leading-tight">
                  Seats are filling fast. Message us on WhatsApp to secure your enrollment.
                </p>
                <a 
                  href="https://wa.me/918610345830?text=I%20am%20interested%20in%20booking%20a%20seat%20for%20the%20upcoming%20batch." 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-1 md:gap-2 bg-[#25D366] hover:bg-[#128C7E] text-white px-4 py-2 md:px-6 md:py-2.5 rounded-xl font-bold shadow-lg shadow-[#25D366]/20 transition-all hover:scale-105 active:scale-95 w-full md:w-auto text-[11px] md:text-sm"
                >
                  <MessageCircle className="w-3 h-3 md:w-4 md:h-4" />
                  WhatsApp: +91 86103 45830
                </a>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

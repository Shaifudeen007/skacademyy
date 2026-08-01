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
      date: "03/08/2026",
      time: "10:00 AM - 06:00 PM"
    },
    {
      course: "Nail Course",
      date: "08/08/2026",
      time: "10:00 AM - 06:00 PM"
    },
    {
      course: "Hair Extension",
      date: "12/08/2026",
      time: "10:00 AM - 06:00 PM"
    },
    {
      course: "PMU Course",
      date: "27/08/2026",
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
        >
          <motion.div 
            className="bg-white dark:bg-[#09090B] rounded-3xl w-full max-w-2xl overflow-hidden shadow-[0_0_50px_rgba(212,175,55,0.2)] border border-gold-metallic/20 relative"
            initial={{ scale: 0.9, y: 20, opacity: 0 }}
            animate={{ scale: 1, y: 0, opacity: 1 }}
            exit={{ scale: 0.9, y: 20, opacity: 0 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
          >
            {/* Header */}
            <div className="bg-zinc-900 text-white p-6 relative overflow-hidden">
              <div className="absolute inset-0 bg-gold-gradient opacity-20"></div>
              <button 
                onClick={() => setIsOpen(false)}
                className="absolute top-4 right-4 text-white/70 hover:text-white bg-black/20 hover:bg-black/40 rounded-full p-2 transition-all z-10"
              >
                <X className="w-5 h-5" />
              </button>
              
              <div className="relative z-10 text-center">
                <div className="inline-block px-3 py-1 bg-gold-metallic/20 border border-gold-metallic/50 rounded-full text-gold-bronze text-xs font-bold uppercase tracking-wider mb-2">
                  New Batches
                </div>
                <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight">Upcoming Batch - 2026</h2>
                <p className="text-zinc-300 mt-2">Reserve your place and begin your journey toward a successful career!</p>
              </div>
            </div>

            {/* Content */}
            <div className="p-6 md:p-8">
              <div className="mb-8">
                <h3 className="text-xl font-bold text-zinc-900 dark:text-white mb-6 flex items-center gap-2">
                  <Calendar className="w-5 h-5 text-gold-metallic" /> Course Schedule
                </h3>
                
                <div className="space-y-4">
                  {scheduleData.map((item, index) => (
                    <div key={index} className="flex flex-col md:flex-row justify-between items-start md:items-center p-4 rounded-xl bg-zinc-50 dark:bg-black/50 border border-zinc-100 dark:border-zinc-800 hover:border-gold-metallic/30 transition-colors">
                      <div className="flex items-center gap-3 mb-2 md:mb-0">
                        <div className="w-10 h-10 rounded-full bg-gold-metallic/10 flex items-center justify-center text-gold-metallic shrink-0">
                          <BookOpen className="w-5 h-5" />
                        </div>
                        <span className="font-bold text-zinc-900 dark:text-zinc-100 text-lg">{item.course}</span>
                      </div>
                      <div className="flex flex-col md:flex-row items-start md:items-center gap-2 md:gap-6 text-zinc-600 dark:text-zinc-400 pl-13 md:pl-0">
                        <div className="flex items-center gap-2">
                          <Calendar className="w-4 h-4 text-gold-metallic/70" />
                          <span className="font-medium text-zinc-800 dark:text-zinc-200">{item.date}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Clock className="w-4 h-4 text-gold-metallic/70" />
                          <span>{item.time}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Call to Action */}
              <div className="bg-zinc-50 dark:bg-zinc-900/50 p-6 rounded-2xl border border-zinc-100 dark:border-zinc-800 text-center">
                <h4 className="font-bold text-lg text-zinc-900 dark:text-white mb-2">Book Your Seat Now</h4>
                <p className="text-zinc-600 dark:text-zinc-400 text-sm mb-6 max-w-md mx-auto">
                  Seats are filling fast. Message us on WhatsApp to secure your enrollment for the upcoming batch.
                </p>
                <a 
                  href="https://wa.me/918610345830?text=I%20am%20interested%20in%20booking%20a%20seat%20for%20the%20upcoming%20batch." 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#128C7E] text-white px-8 py-4 rounded-xl font-bold shadow-lg shadow-[#25D366]/20 transition-all hover:scale-105 active:scale-95 w-full md:w-auto"
                >
                  <MessageCircle className="w-5 h-5" />
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

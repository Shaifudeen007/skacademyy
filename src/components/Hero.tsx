import { Calendar, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

const heroImages = [
  '/hero/DSC07258.JPG',
  '/hero/DSC07226.JPG',
  '/hero/DSC07230.JPG',
  '/hero/DSC07243.JPG',
  '/hero/DSC07247.JPG'
];

export default function Hero() {
  const [currentImgIndex, setCurrentImgIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImgIndex((prev) => (prev + 1) % heroImages.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <motion.section 
      id="home" 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="relative overflow-hidden pt-28 pb-8 lg:pt-40 lg:pb-12"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          {/* Text Content */}
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
            }}
            className="max-w-2xl order-last lg:order-first mt-2 lg:mt-0 text-center lg:text-left relative"
          >
            {/* Aeroplane Glowing Pulse Border Watermark */}
            <div 
              aria-hidden="true" 
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 pointer-events-none select-none flex items-center justify-center"
            >
              <motion.svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="url(#plane-gold-glow)"
                strokeWidth="0.8"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-[380px] h-[380px] sm:w-[440px] sm:h-[440px] md:w-[480px] md:h-[480px] lg:w-[520px] lg:h-[520px] shrink-0 -rotate-12"
                animate={{
                  filter: [
                    'drop-shadow(0 0 6px rgba(212, 175, 55, 0.3)) drop-shadow(0 0 16px rgba(212, 175, 55, 0.15))',
                    'drop-shadow(0 0 24px rgba(212, 175, 55, 0.85)) drop-shadow(0 0 50px rgba(212, 175, 55, 0.45))',
                    'drop-shadow(0 0 6px rgba(212, 175, 55, 0.3)) drop-shadow(0 0 16px rgba(212, 175, 55, 0.15))',
                  ],
                  opacity: [0.12, 0.32, 0.12],
                  scale: [0.97, 1.03, 0.97],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <defs>
                  <linearGradient id="plane-gold-glow" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#F5D061" />
                    <stop offset="50%" stopColor="#D4AF37" />
                    <stop offset="100%" stopColor="#AA7C11" />
                  </linearGradient>
                </defs>
                <path d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z" />
              </motion.svg>
            </div>

            <motion.h1 
              variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } } }}
              className="text-4xl sm:text-4xl md:text-5xl lg:text-[3.5rem] font-extrabold tracking-tight leading-[1.12] mb-6 uppercase text-zinc-900 dark:text-white"
            >
              BEAUTY KNOWS <br className="hidden lg:block"/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-bronze to-gold-metallic dark:from-gold-champagne dark:to-gold-metallic">NO BOUNDARIES.</span>
              <br className="hidden lg:block"/>
              <span className="text-zinc-800 dark:text-zinc-200">YOUR TALENT. YOUR FUTURE. OUR GLOBAL REACH.</span>
            </motion.h1>
            <motion.p 
              variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } } }}
              className="text-xl sm:text-2xl md:text-xl text-zinc-600 dark:text-zinc-400 mb-8 leading-relaxed"
            >
              Turn your passion into a profession with expert-led, hands-on beauty education. From India to Sri Lanka, Nepal, the UAE, and beyond, we empower aspiring salon professionals, makeup artists, and beauty entrepreneurs with skills to shine on a global stage.
            </motion.p>
            <motion.div 
              variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } } }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <button 
                onClick={() => window.open('https://wa.me/918610345830', '_blank')}
                className="bg-gold-gradient text-zinc-900 shadow-[0_0_15px_rgba(212,175,55,0.4)] hover:shadow-[0_0_25px_rgba(212,175,55,0.6)] hover:scale-105 active:scale-95 transition-all py-3 px-6 sm:px-8 text-base sm:text-lg font-extrabold w-full sm:w-auto flex items-center justify-center gap-2 rounded-[1.5px]"
              >
                <Calendar className="w-5 h-5" />
                Enroll Now
              </button>
            </motion.div>

          </motion.div>

          {/* Visual Frame */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative lg:h-[500px] flex items-center justify-center order-first lg:order-last w-full mt-4 sm:mt-8 lg:mt-0"
          >
            <div className="relative w-full max-w-full sm:max-w-md lg:max-w-md aspect-[2/3] sm:aspect-[4/5] lg:aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl border border-zinc-200/50 dark:border-gold-metallic/30 bg-zinc-100">
              <div className="absolute inset-0 bg-gold-gradient opacity-10 mix-blend-overlay z-10 pointer-events-none"></div>
              
              <AnimatePresence mode="popLayout">
                <motion.img 
                  key={currentImgIndex}
                  src={heroImages[currentImgIndex]} 
                  alt="Luxury Beauty Treatment"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 1.5, ease: "easeInOut" }}
                  className="absolute inset-0 object-cover w-full h-full object-center"
                />
              </AnimatePresence>
              
              {/* Floating Badge */}
              <div className="absolute bottom-6 left-6 right-6 glass-card p-4 rounded-xl flex items-center gap-4 z-20">
                <div className="w-12 h-12 rounded-full bg-white/20 dark:bg-black/40 flex items-center justify-center backdrop-blur-md shadow-inner">
                  <Sparkles className="w-6 h-6 text-gold-bronze dark:text-gold-metallic" />
                </div>
                <div>
                  <p className="font-bold text-sm text-zinc-900 dark:text-white">LAPT-UK Accredited</p>
                  <p className="text-xs text-zinc-600 dark:text-zinc-300">Valid in 180+ countries</p>
                </div>
              </div>
            </div>
            
            {/* Background Decorative Blur */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gold-metallic/20 dark:bg-gold-metallic/10 blur-[100px] rounded-full -z-10 pointer-events-none"></div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}

import { useState, useEffect } from 'react';
import LandingPage from './components/LandingPage';
import AboutPage from './components/AboutPage';
import CoursesPage from './components/CoursesPage';
import GalleryPage from './components/GalleryPage';
import AestheticCoursePage from './components/AestheticCoursePage';
import PmuCoursePage from './components/PmuCoursePage';
import NailArtCoursePage from './components/NailArtCoursePage';
import HairExtensionCoursePage from './components/HairExtensionCoursePage';
import HairCoursePage from './components/HairCoursePage';
import { motion, AnimatePresence } from 'framer-motion';

function App() {
  const [isDark, setIsDark] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  // Splash screen timeout
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2800);
    return () => clearTimeout(timer);
  }, []);

  const [currentPage, setCurrentPage] = useState('home');

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  return (
    <div className="w-full min-h-screen relative overflow-x-hidden">
      <AnimatePresence>
        {isLoading && (
          <motion.div 
            initial={{ opacity: 1 }}
            exit={{ y: '-100%', opacity: 0 }}
            transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
            className={`fixed inset-0 z-[100] flex items-center justify-center ${isDark ? 'bg-[#09090B] text-white' : 'bg-zinc-50 text-zinc-900'}`}
          >
            <div className="flex flex-col items-center gap-8">
              {/* Logo Reveal */}
              <motion.div 
                className="relative flex items-center justify-center"
                initial={{ scale: 0, rotate: -90 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ duration: 1, ease: "easeOut" }}
              >
                <div className="w-24 h-24 rounded-full bg-gold-gradient flex items-center justify-center shadow-[0_0_40px_rgba(212,175,55,0.4)] relative overflow-hidden">
                  <motion.div 
                    className="absolute inset-0 bg-glare-gradient bg-[length:200%_auto] opacity-50 mix-blend-overlay"
                    animate={{ backgroundPosition: ['200% center', '-200% center'] }}
                    transition={{ duration: 2.5, ease: "linear", repeat: Infinity }}
                  />
                  <span className="text-[#09090B] font-black text-4xl tracking-tighter relative z-20">SK</span>
                </div>
                
                {/* Outer spinning ring */}
                <motion.div 
                  className="absolute inset-[-12px] rounded-full border border-gold-metallic/20 border-t-gold-metallic"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 2.5, ease: "linear", repeat: Infinity }}
                />
              </motion.div>

              {/* Text Reveal */}
              <div className="overflow-hidden mt-4">
                <motion.h2 
                  className="text-lg md:text-xl font-extrabold tracking-[0.2em] uppercase text-center px-4"
                  initial={{ y: 50, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
                >
                  SK International <br className="hidden md:block" /> Institute of Skills
                </motion.h2>
              </div>
              
              {/* Expanding Gold Line */}
              <motion.div 
                className="h-[2px] bg-gold-gradient rounded-full"
                initial={{ width: 0, opacity: 0 }}
                animate={{ width: "160px", opacity: 1 }}
                transition={{ duration: 1, delay: 1.2, ease: "easeInOut" }}
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {currentPage === 'about' ? (
        <AboutPage isDark={isDark} toggleTheme={() => setIsDark(!isDark)} onNavigate={setCurrentPage} />
      ) : currentPage === 'courses' ? (
        <CoursesPage isDark={isDark} toggleTheme={() => setIsDark(!isDark)} onNavigate={setCurrentPage} />
      ) : currentPage === 'course-aesthetic' ? (
        <AestheticCoursePage isDark={isDark} toggleTheme={() => setIsDark(!isDark)} onNavigate={setCurrentPage} />
      ) : currentPage === 'course-pmu' ? (
        <PmuCoursePage isDark={isDark} toggleTheme={() => setIsDark(!isDark)} onNavigate={setCurrentPage} />
      ) : currentPage === 'course-nailart' ? (
        <NailArtCoursePage isDark={isDark} toggleTheme={() => setIsDark(!isDark)} onNavigate={setCurrentPage} />
      ) : currentPage === 'course-hair-extension' ? (
        <HairExtensionCoursePage isDark={isDark} toggleTheme={() => setIsDark(!isDark)} onNavigate={setCurrentPage} />
      ) : currentPage === 'course-hair' ? (
        <HairCoursePage isDark={isDark} toggleTheme={() => setIsDark(!isDark)} onNavigate={setCurrentPage} />
      ) : currentPage === 'gallery' ? (
        <GalleryPage isDark={isDark} toggleTheme={() => setIsDark(!isDark)} onNavigate={setCurrentPage} />
      ) : (
        <LandingPage isDark={isDark} toggleTheme={() => setIsDark(!isDark)} onNavigate={setCurrentPage} />
      )}
    </div>
  );
}

export default App;

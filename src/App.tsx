import { useState, useEffect } from 'react';
import LandingPage from './components/LandingPage';
import AboutPage from './components/AboutPage';
import GalleryPage from './components/GalleryPage';
import AestheticCoursePage from './components/AestheticCoursePage';
import PmuCoursePage from './components/PmuCoursePage';
import NailArtCoursePage from './components/NailArtCoursePage';
import HairExtensionCoursePage from './components/HairExtensionCoursePage';
import HairCoursePage from './components/HairCoursePage';

import TestimonialsPage from './components/TestimonialsPage';
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
    const handleNavigate = (e: Event) => {
      const customEvent = e as CustomEvent<string>;
      if (customEvent.detail) {
        setCurrentPage(customEvent.detail);
      }
    };
    window.addEventListener('navigate', handleNavigate);
    return () => window.removeEventListener('navigate', handleNavigate);
  }, []);

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
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black text-white"
          >
            <div className="flex flex-col items-center">
              {/* Logo Reveal */}
              <motion.div 
                className="relative flex items-center justify-center"
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 1, ease: "easeOut" }}
              >
                <img 
                  src="/N0__48102__Angalamman_Kovil_St__Choolai__Chennai__Tamil_Nadu_600112.-removebg-preview.png" 
                  alt="SK Logo" 
                  className="w-80 sm:w-96 md:w-[28rem] h-auto object-contain drop-shadow-[0_0_20px_rgba(212,175,55,0.5)]" 
                />
              </motion.div>

              {/* Text Reveal */}
              <div className="overflow-hidden -mt-20 md:-mt-32">
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
      ) : currentPage === 'testimonials' ? (
        <TestimonialsPage isDark={isDark} toggleTheme={() => setIsDark(!isDark)} onNavigate={setCurrentPage} />
      ) : (
        <LandingPage isDark={isDark} toggleTheme={() => setIsDark(!isDark)} onNavigate={setCurrentPage} />
      )}



      {/* Floating WhatsApp Button */}
      <a 
        href="https://wa.me/918610345830" 
        target="_blank" 
        rel="noopener noreferrer"
        className="fixed bottom-24 sm:bottom-6 right-4 sm:right-6 z-50 flex flex-row-reverse items-center justify-start bg-[#25D366] hover:bg-[#128C7E] text-white rounded-full shadow-[0_4px_14px_0_rgba(37,211,102,0.39)] transition-all duration-500 overflow-hidden group w-[3.5rem] h-[3.5rem] sm:w-[4rem] sm:h-[4rem] hover:w-[160px] sm:hover:w-[180px]"
      >
        <div className="flex items-center justify-center min-w-[3.5rem] min-h-[3.5rem] sm:min-w-[4rem] sm:min-h-[4rem]">
          <svg viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7 sm:w-8 sm:h-8">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 00-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
          </svg>
        </div>
        <span className="font-bold text-sm sm:text-base whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pl-2">Enquire Now</span>
      </a>
    </div>
  );
}

export default App;


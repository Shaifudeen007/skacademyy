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
import { SchedulePopup } from './components/SchedulePopup';
import { motion, AnimatePresence } from 'framer-motion';

function App() {
  const [isDark] = useState(true);
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
        <AboutPage isDark={isDark} onNavigate={setCurrentPage} />
      ) : currentPage === 'courses' ? (
        <CoursesPage isDark={isDark} onNavigate={setCurrentPage} />
      ) : currentPage === 'course-aesthetic' ? (
        <AestheticCoursePage isDark={isDark} onNavigate={setCurrentPage} />
      ) : currentPage === 'course-pmu' ? (
        <PmuCoursePage isDark={isDark} onNavigate={setCurrentPage} />
      ) : currentPage === 'course-nailart' ? (
        <NailArtCoursePage isDark={isDark} onNavigate={setCurrentPage} />
      ) : currentPage === 'course-hair-extension' ? (
        <HairExtensionCoursePage isDark={isDark} onNavigate={setCurrentPage} />
      ) : currentPage === 'course-hair' ? (
        <HairCoursePage isDark={isDark} onNavigate={setCurrentPage} />
      ) : currentPage === 'gallery' ? (
        <GalleryPage isDark={isDark} onNavigate={setCurrentPage} />
      ) : (
        <LandingPage isDark={isDark} onNavigate={setCurrentPage} />
      )}

      <SchedulePopup />
    </div>
  );
}

export default App;

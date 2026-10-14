import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  CheckCircle2, 
  ArrowRight, 
  GraduationCap, 
  Sparkles, 
  Calendar, 
  ChevronLeft, 
  ChevronRight
} from 'lucide-react';
import { CreativeUnderline } from './NewSections';

const srilankaPhotos = [
  { src: '/Srilanka/DSC07258.JPG', caption: 'Clinical Practical Demonstration with Live Models' },
  { src: '/Srilanka/DSC07243.JPG', caption: 'Hands-on Aesthetic Machine & Laser Training' },
  { src: '/Srilanka/DSC07247.JPG', caption: '1-on-1 Mentorship with Expert Doctor Guidance' },
  { src: '/Srilanka/DSC07319.JPG', caption: 'Advanced Skin Analysis & Clinical Protocols' },
  { src: '/Srilanka/DSC07492.JPG', caption: 'Comprehensive Aesthetic Procedure Training' },
  { src: '/Srilanka/DSC07505.JPG', caption: 'Student Practical Sessions & Precision Technique' },
  { src: '/Srilanka/DSC07226.JPG', caption: 'Real-world Clinic Environment Learning' },
  { src: '/Srilanka/DSC07230.JPG', caption: 'Graduation & International UK Diploma Award' },
];


export default function SriLankaBatchSection({ onNavigate }: { onNavigate?: (page: string) => void }) {
  const [currentIdx, setCurrentIdx] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIdx((prev) => (prev + 1) % srilankaPhotos.length);
    }, 4500);
    return () => clearInterval(timer);
  }, []);

  const nextPhoto = () => setCurrentIdx((prev) => (prev + 1) % srilankaPhotos.length);
  const prevPhoto = () => setCurrentIdx((prev) => (prev - 1 + srilankaPhotos.length) % srilankaPhotos.length);

  return (
    <motion.section
      id="srilanka-batch"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true, margin: "-80px" }}
      className="py-12 md:py-20 relative overflow-hidden bg-white dark:bg-[#09090B]"
    >
      {/* Background Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] max-w-6xl h-96 bg-gold-metallic/5 dark:bg-gold-metallic/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <div className="flex flex-wrap items-center justify-center gap-2.5 mb-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-zinc-100 dark:bg-zinc-800/80 border border-zinc-200 dark:border-zinc-700 shadow-xs">
              <img 
                src="https://flagcdn.com/w80/lk.png" 
                alt="Sri Lanka Flag" 
                className="w-6 h-4 object-cover rounded shadow-xs" 
              />
              <span className="text-xs font-bold uppercase tracking-wider text-zinc-900 dark:text-zinc-100">
                Location: Sri Lanka
              </span>
            </div>

            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/30">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span>Admissions Open</span>
            </span>

            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-gold-bronze/10 dark:bg-gold-metallic/10 text-gold-bronze dark:text-gold-champagne border border-gold-bronze/20 dark:border-gold-metallic/20">
              <Sparkles className="w-3.5 h-3.5" />
              <span>International Batch</span>
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-zinc-900 dark:text-white tracking-tight">
            Sri Lanka <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-bronze to-gold-metallic">Aesthetic Course Batch</span>
          </h2>
          <CreativeUnderline />

          <p className="text-base sm:text-lg text-zinc-600 dark:text-zinc-400 max-w-3xl mx-auto leading-relaxed">
            Welcoming students, doctors, and beauty specialists traveling from <strong>Sri Lanka</strong> for intensive hands-on clinical training, live model practice, and internationally recognized UK certifications.
          </p>
        </div>

        {/* 2-Column Main Showcase: Carousel & Details */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center mb-16">
          {/* Left Column: Interactive Photo Carousel */}
          <div className="lg:col-span-7">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-zinc-200 dark:border-zinc-800 bg-zinc-900 aspect-[4/3] sm:aspect-[16/10] group">
              <AnimatePresence mode="wait">
                <motion.img
                  key={currentIdx}
                  src={srilankaPhotos[currentIdx].src}
                  alt={srilankaPhotos[currentIdx].caption}
                  initial={{ opacity: 0, scale: 1.05 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.6 }}
                  className="w-full h-full object-cover object-center"
                />
              </AnimatePresence>

              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />

              {/* Top Floating Badge */}
              <div className="absolute top-4 left-4 flex items-center gap-2 z-20">
                <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/60 backdrop-blur-md border border-white/20 text-white text-xs font-bold">
                  <img 
                    src="https://flagcdn.com/w40/lk.png" 
                    alt="Sri Lanka Flag" 
                    className="w-5 h-3.5 object-cover rounded shadow-xs" 
                  />
                  <span>Sri Lanka Batch Gallery</span>
                </div>
              </div>

              {/* Photo Counter */}
              <div className="absolute top-4 right-4 z-20">
                <span className="px-3 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/20 text-white text-xs font-bold">
                  {currentIdx + 1} / {srilankaPhotos.length}
                </span>
              </div>

              {/* Caption */}
              <div className="absolute bottom-4 left-4 right-16 z-20">
                <p className="text-white text-sm sm:text-base font-semibold drop-shadow-md">
                  {srilankaPhotos[currentIdx].caption}
                </p>
              </div>

              {/* Arrow navigation buttons */}
              <button
                onClick={prevPhoto}
                className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/50 hover:bg-black/80 text-white flex items-center justify-center backdrop-blur-md transition-all opacity-80 hover:opacity-100 z-20"
                aria-label="Previous Photo"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={nextPhoto}
                className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/50 hover:bg-black/80 text-white flex items-center justify-center backdrop-blur-md transition-all opacity-80 hover:opacity-100 z-20"
                aria-label="Next Photo"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>

            {/* Thumbnail Navigation Strip */}
            <div className="flex items-center gap-2 mt-4 overflow-x-auto pb-2 scrollbar-none">
              {srilankaPhotos.map((photo, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentIdx(i)}
                  className={`relative flex-shrink-0 w-16 h-12 rounded-xl overflow-hidden border-2 transition-all ${
                    currentIdx === i
                      ? 'border-gold-metallic scale-105 shadow-md'
                      : 'border-transparent opacity-60 hover:opacity-100'
                  }`}
                >
                  <img src={photo.src} alt="" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* Right Column: Key Details & Fast-Track Enrollment */}
          <div className="lg:col-span-5 flex flex-col justify-between h-full space-y-6">
            <div className="rounded-3xl bg-zinc-50 dark:bg-[#111] border border-zinc-200 dark:border-zinc-800 p-6 sm:p-8 shadow-lg">
              <div className="flex items-center gap-2.5 text-gold-bronze dark:text-gold-champagne font-bold text-xs uppercase tracking-wider mb-2">
                <Calendar className="w-4 h-4" /> Batch Highlights & Training
              </div>
              <h3 className="text-2xl font-bold text-zinc-900 dark:text-white mb-3">
                Hands-On Practical Training & Mentorship
              </h3>
              <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed mb-6">
                Tailored for students and professionals traveling from Sri Lanka for comprehensive clinical mastery, real patient practice, and international credentials.
              </p>

              <div className="space-y-3.5 mb-8">
                {[
                  'Extensive Hands-on Practical Training',
                  'Live Model Practical Classes',
                  'LAPT UK International Certification (Valid in 180+ Countries)',
                  'Personalized 1-on-1 Doctor Mentoring',
                  'Fast-Track Accelerated Batch Scheduling'
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3 text-sm font-medium text-zinc-800 dark:text-zinc-200">
                    <CheckCircle2 className="w-4 h-4 text-gold-metallic flex-shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              {/* Call to Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href="https://wa.me/918610345830?text=Hello%20SK%20Academy,%20I%20am%20interested%20in%20joining%20the%20Sri%20Lanka%20Aesthetic%20Course%20Batch."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-3.5 px-6 rounded-xl bg-gold-gradient text-zinc-900 font-extrabold text-sm transition-all flex items-center justify-center gap-2 shadow-md hover:scale-[1.02] text-center"
                >
                  <GraduationCap className="w-4 h-4" />
                  <span>Inquire for Sri Lanka Batch</span>
                  <ArrowRight className="w-4 h-4" />
                </a>

                {onNavigate && (
                  <button
                    onClick={() => onNavigate('international-programs')}
                    className="py-3.5 px-5 rounded-xl bg-zinc-200/70 hover:bg-zinc-200 dark:bg-zinc-800 hover:dark:bg-zinc-700 text-zinc-900 dark:text-zinc-100 font-bold text-sm transition-all flex items-center justify-center gap-1.5 border border-zinc-300 dark:border-zinc-700"
                  >
                    <span>All Hubs</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}

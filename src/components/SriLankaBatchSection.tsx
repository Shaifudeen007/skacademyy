import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  CheckCircle2, 
  ArrowRight, 
  GraduationCap, 
  ChevronLeft, 
  ChevronRight, 
  Globe 
} from 'lucide-react';
import { CreativeUnderline } from './NewSections';

const completedBatchPhotos = [
  { src: '/Srilanka/DSC07258.JPG', caption: 'Clinical Practical Demonstration with Live Models', cohort: 'Sri Lanka Cohort' },
  { src: '/Srilanka/DSC07243.JPG', caption: 'Hands-on Aesthetic Machine & Laser Training', cohort: 'Sri Lanka Cohort' },
  { src: '/Srilanka/DSC07247.JPG', caption: '1-on-1 Mentorship with Expert Doctor Guidance', cohort: 'Sri Lanka Cohort' },
  { src: '/Srilanka/DSC07319.JPG', caption: 'Advanced Skin Analysis & Clinical Protocols', cohort: 'Sri Lanka Cohort' },
  { src: '/gallery/DSC03560.JPG', caption: 'Clinical Hands-on Practical Training Session', cohort: 'Clinical Academy Batch' },
  { src: '/gallery/DSC03564.JPG', caption: 'Doctor Mentorship & Aesthetic Clinical Guidance', cohort: 'Clinical Academy Batch' },
  { src: '/gallery/DSC05480.JPG', caption: 'Live Model Treatment & Skin Assessment', cohort: 'Clinical Academy Batch' },
  { src: '/gallery/DSC05547.JPG', caption: 'State-of-the-art Laser Machine & Device Training', cohort: 'Clinical Academy Batch' },
];

export default function SriLankaBatchSection({ onNavigate }: { onNavigate?: (page: string) => void }) {
  const [currentIdx, setCurrentIdx] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIdx((prev) => (prev + 1) % completedBatchPhotos.length);
    }, 4500);
    return () => clearInterval(timer);
  }, []);

  const nextPhoto = () => setCurrentIdx((prev) => (prev + 1) % completedBatchPhotos.length);
  const prevPhoto = () => setCurrentIdx((prev) => (prev - 1 + completedBatchPhotos.length) % completedBatchPhotos.length);

  return (
    <motion.section
      id="international-batches"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true, margin: "-80px" }}
      className="py-12 md:py-20 relative overflow-hidden bg-white dark:bg-[#09090B]"
    >
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] max-w-6xl h-96 bg-gold-metallic/5 dark:bg-gold-metallic/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <div className="flex items-center justify-center mb-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-zinc-100 dark:bg-zinc-800/80 border border-zinc-200 dark:border-zinc-700 shadow-xs">
              <Globe className="w-4 h-4 text-gold-bronze dark:text-gold-metallic" />
              <span className="text-xs font-bold uppercase tracking-wider text-zinc-900 dark:text-zinc-100">
                Global Clinical Training
              </span>
            </div>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-zinc-900 dark:text-white tracking-tight">
            International <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-bronze to-gold-metallic">Course Batches</span>
          </h2>
          <CreativeUnderline />

          <p className="text-base sm:text-lg text-zinc-600 dark:text-zinc-400 max-w-3xl mx-auto leading-relaxed mt-4">
            We conduct dedicated clinical certification batches for doctors, cosmetologists, and beauty specialists across India and worldwide destinations including Sri Lanka, Nepal, Malaysia, and Dubai.
          </p>
        </div>

        {/* 2-Column Main Showcase: Real Batch Photos & Program Details */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Real Completed Batch Photos Carousel */}
          <div className="lg:col-span-7">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-zinc-200 dark:border-zinc-800 bg-zinc-900 aspect-[4/3] sm:aspect-[16/10] group">
              <AnimatePresence mode="wait">
                <motion.img
                  key={currentIdx}
                  src={completedBatchPhotos[currentIdx].src}
                  alt={completedBatchPhotos[currentIdx].caption}
                  initial={{ opacity: 0, scale: 1.05 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                  className="w-full h-full object-cover object-center"
                />
              </AnimatePresence>

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent pointer-events-none" />

              {/* Top Floating Badge */}
              <div className="absolute top-4 left-4 flex items-center gap-2 z-20">
                <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-black/75 backdrop-blur-md border border-white/20 text-white text-xs font-bold shadow-md">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                  <span>Completed Batch Training • {completedBatchPhotos[currentIdx].cohort}</span>
                </div>
              </div>

              {/* Photo Counter */}
              <div className="absolute top-4 right-4 z-20">
                <span className="px-3 py-1 rounded-full bg-black/75 backdrop-blur-md border border-white/20 text-white text-xs font-bold">
                  {currentIdx + 1} / {completedBatchPhotos.length}
                </span>
              </div>

              {/* Caption */}
              <div className="absolute bottom-4 left-4 right-16 z-20">
                <p className="text-white text-sm sm:text-base font-semibold drop-shadow-md">
                  {completedBatchPhotos[currentIdx].caption}
                </p>
              </div>

              {/* Arrow navigation buttons */}
              <button
                type="button"
                onClick={prevPhoto}
                className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/50 hover:bg-black/80 text-white flex items-center justify-center backdrop-blur-md transition-all opacity-80 hover:opacity-100 z-20 cursor-pointer"
                aria-label="Previous Photo"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                type="button"
                onClick={nextPhoto}
                className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/50 hover:bg-black/80 text-white flex items-center justify-center backdrop-blur-md transition-all opacity-80 hover:opacity-100 z-20 cursor-pointer"
                aria-label="Next Photo"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>

            {/* Thumbnail Navigation Strip */}
            <div className="flex items-center gap-2 mt-4 overflow-x-auto pb-2 scrollbar-none">
              {completedBatchPhotos.map((photo, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => setCurrentIdx(i)}
                  className={`relative flex-shrink-0 w-16 h-12 rounded-xl overflow-hidden border-2 transition-all cursor-pointer ${
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

          {/* Right Column: International Programs Overview & Country Statuses */}
          <div className="lg:col-span-5 flex flex-col justify-between h-full space-y-6">
            <div className="rounded-3xl bg-zinc-50 dark:bg-[#111] border border-zinc-200 dark:border-zinc-800 p-6 sm:p-8 shadow-lg">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-gold-bronze/10 dark:bg-gold-metallic/10 text-gold-bronze dark:text-gold-champagne border border-gold-bronze/20 dark:border-gold-metallic/20 mb-3">
                <Globe className="w-3.5 h-3.5" />
                <span>Global Batches & Accreditation</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-zinc-900 dark:text-white tracking-tight mb-3">
                Worldwide Practical Training
              </h3>

              <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed mb-6">
                We organize clinical immersion batches for students and doctors across <strong>India, Sri Lanka, Nepal, Malaysia, and Dubai</strong>. Students receive intensive patient practice, hostel & food support, and globally valid UK certifications.
              </p>

              {/* Country Status Highlights */}
              <div className="space-y-3 mb-6 p-4 rounded-2xl bg-white dark:bg-zinc-900/80 border border-zinc-200 dark:border-zinc-800">
                <div className="flex items-center justify-between text-xs sm:text-sm">
                  <div className="flex items-center gap-2 font-bold text-zinc-900 dark:text-white">
                    <img src="https://flagcdn.com/w40/in.png" alt="India" className="w-4 h-3 object-cover rounded-xs" />
                    <span>India Batch</span>
                  </div>
                  <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 border border-emerald-500/30">
                    Admissions Open
                  </span>
                </div>

                <div className="flex items-center justify-between text-xs sm:text-sm">
                  <div className="flex items-center gap-2 font-bold text-zinc-900 dark:text-white">
                    <img src="https://flagcdn.com/w40/lk.png" alt="Sri Lanka" className="w-4 h-3 object-cover rounded-xs" />
                    <span>Sri Lanka Batch</span>
                  </div>
                  <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-blue-500/15 text-blue-600 dark:text-blue-400 border border-blue-500/30">
                    Completed • Next Open
                  </span>
                </div>

                <div className="flex items-center justify-between text-xs sm:text-sm">
                  <div className="flex items-center gap-2 font-bold text-zinc-900 dark:text-white">
                    <img src="https://flagcdn.com/w40/np.png" alt="Nepal" className="w-4 h-3 object-cover rounded-xs" />
                    <span>Nepal Batch</span>
                  </div>
                  <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-amber-500/15 text-amber-600 dark:text-amber-400 border border-amber-500/30">
                    Upcoming 2026
                  </span>
                </div>

                <div className="flex items-center justify-between text-xs sm:text-sm">
                  <div className="flex items-center gap-2 font-bold text-zinc-900 dark:text-white">
                    <img src="https://flagcdn.com/w40/my.png" alt="Malaysia" className="w-4 h-3 object-cover rounded-xs" />
                    <span>Malaysia Batch</span>
                  </div>
                  <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-amber-500/15 text-amber-600 dark:text-amber-400 border border-amber-500/30">
                    Upcoming 2026
                  </span>
                </div>

                <div className="flex items-center justify-between text-xs sm:text-sm">
                  <div className="flex items-center gap-2 font-bold text-zinc-900 dark:text-white">
                    <img src="https://flagcdn.com/w40/ae.png" alt="Dubai" className="w-4 h-3 object-cover rounded-xs" />
                    <span>Dubai (UAE) Batch</span>
                  </div>
                  <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-amber-500/15 text-amber-600 dark:text-amber-400 border border-amber-500/30">
                    Upcoming 2026
                  </span>
                </div>
              </div>

              {/* Core Features */}
              <div className="space-y-2.5 mb-8">
                {[
                  '100% Hands-on Practical Training on Live Models',
                  'LAPT UK International Certification (Valid in 180+ Countries)',
                  'Hostel & Food Facilities Available in Chennai',
                  '1-on-1 Doctor Mentoring & Machine Handling Kit'
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2.5 text-xs sm:text-sm font-medium text-zinc-800 dark:text-zinc-200">
                    <CheckCircle2 className="w-4 h-4 text-gold-metallic shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href={`https://wa.me/918610345830?text=${encodeURIComponent('Hello SK Academy, I would like to inquire about joining a clinical course batch (India, Sri Lanka, Nepal, Malaysia, Dubai).')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-3.5 px-6 rounded-xl bg-gold-gradient text-zinc-900 font-extrabold text-sm transition-all flex items-center justify-center gap-2 shadow-md hover:scale-[1.02] text-center cursor-pointer"
                >
                  <GraduationCap className="w-4 h-4" />
                  <span>Inquire for Course Batches</span>
                  <ArrowRight className="w-4 h-4" />
                </a>

                {onNavigate && (
                  <button
                    type="button"
                    onClick={() => onNavigate('international-programs')}
                    className="py-3.5 px-5 rounded-xl bg-zinc-200/70 hover:bg-zinc-200 dark:bg-zinc-800 hover:dark:bg-zinc-700 text-zinc-900 dark:text-zinc-100 font-bold text-sm transition-all flex items-center justify-center gap-1.5 border border-zinc-300 dark:border-zinc-700 cursor-pointer"
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

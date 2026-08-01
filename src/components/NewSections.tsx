import { motion, AnimatePresence } from 'framer-motion';
import { 
  CheckCircle, 
  MapPin, 
  Phone, 
  Mail, 
  Calendar, 
  Trophy, 
  Award, 
  Briefcase, 
  Camera,
  ChevronDown,
  ArrowRight,
  GraduationCap,
  Heart,
  ShieldCheck,
  Sparkles,
  X,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';
import { AnimatedCounter } from './HomeSections';
import { useState, useEffect } from 'react';

export function CreativeUnderline({ className = "justify-center" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-2 mb-10 ${className}`}>
      <div className="w-16 h-[2px] bg-gradient-to-r from-transparent to-gold-metallic rounded-full"></div>
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
      >
        <Sparkles className="w-5 h-5 text-gold-metallic" fill="currentColor" />
      </motion.div>
      <div className="w-16 h-[2px] bg-gradient-to-l from-transparent to-gold-metallic rounded-full"></div>
    </div>
  );
}

// 1. About Section
export function AboutSection({ onNavigate }: { onNavigate?: (page: string) => void }) {
  const stats = [
    { title: "Students Trained", num: 1000, suffix: "+", icon: GraduationCap },
    { title: "Doctors Trained", num: 100, suffix: "+", icon: Heart },
    { title: "Years Experience", num: 3, suffix: "+", icon: Award },
    { title: "Govt Registered", text: "ISO & UDYAM", icon: ShieldCheck }
  ];

  return (
    <motion.section 
      id="about"
      initial={{ opacity: 0 }} 
      whileInView={{ opacity: 1 }} 
      transition={{ duration: 0.8 }} 
      viewport={{ once: true, margin: "-100px" }}
      className="py-12 md:py-20 bg-white dark:bg-[#09090B]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold text-zinc-900 dark:text-white mb-6">About SK International Institute of Skills</h2>
        <CreativeUnderline />
        <div className="text-lg text-zinc-600 dark:text-zinc-400 max-w-4xl mx-auto leading-relaxed mb-16 space-y-6 text-justify">
          <p>
            <strong>SK International Institute of Skills</strong> is a premier beauty and aesthetics academy dedicated to empowering aspiring professionals with world-class education and practical expertise. Founded by <a href="#founder" onClick={(e) => { e.preventDefault(); if (onNavigate) { onNavigate('about'); setTimeout(() => { document.getElementById('founder')?.scrollIntoView({ behavior: 'smooth' }); }, 100); } else { document.getElementById('founder')?.scrollIntoView({ behavior: 'smooth' }); } }} className="font-bold text-gold-bronze hover:text-gold-metallic underline decoration-gold-bronze/30 hover:decoration-gold-metallic underline-offset-4 transition-all duration-300">Sushmitha Karthick</a>, the institute is built on a vision of delivering internationally recognized beauty training that prepares students for successful global careers.
          </p>
          <p>
            With certified trainers, modern facilities, and hands-on practical sessions, we ensure every student gains the confidence and skills needed to excel in the beauty industry. Whether you dream of working with leading salons or starting your own beauty business, we provide the knowledge, guidance, and support to help you succeed.
          </p>
          <p>
            At SK International Institute of Skills, we don't just teach beauty—we create confident professionals and future industry leaders.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              className="glass-card p-8 rounded-3xl border border-zinc-200 dark:border-zinc-800 flex flex-col items-center justify-center gap-4 hover:-translate-y-2 transition-transform duration-300 shadow-xl"
            >
              <motion.div animate={{ scale: [1, 1.1, 1] }} transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}>
                <stat.icon className="w-10 h-10 text-gold-bronze dark:text-gold-metallic mb-2" fill="currentColor" fillOpacity={0.2} />
              </motion.div>
              <div className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-gold-bronze to-gold-metallic dark:from-gold-champagne dark:to-gold-metallic">
                {stat.num !== undefined ? (
                  <AnimatedCounter from={0} to={stat.num} suffix={stat.suffix || ""} duration={2} />
                ) : (
                  <span className="text-2xl">{stat.text}</span>
                )}
              </div>
              <h3 className="text-zinc-900 dark:text-white font-bold text-lg">{stat.title}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}

// 1.5 Why Choose Us Section
export function WhyChooseUsSection() {
  const reasons = [
    { title: "LAPT-UK Accredited", desc: "Certificates Valid in 180+ Countries", icon: Award },
    { title: "Industry-Expert Trainers", desc: "Learn from Certified Beauty Professionals", icon: Sparkles },
    { title: "100% Practical Training", desc: "Hands-On Learning with Live Models", icon: CheckCircle },
    { title: "Career & Business Support", desc: "Job Assistance and Salon Startup Guidance", icon: Briefcase }
  ];

  return (
    <motion.section 
      id="why-choose-us"
      initial={{ opacity: 0 }} 
      whileInView={{ opacity: 1 }} 
      transition={{ duration: 0.8 }} 
      viewport={{ once: true, margin: "-100px" }}
      className="py-24 bg-zinc-50 dark:bg-[#111]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-zinc-900 dark:text-white mb-6">Why Choose Us</h2>
          <CreativeUnderline />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-zinc-900 p-8 rounded-3xl border border-zinc-200 dark:border-zinc-800 shadow-xl hover:-translate-y-2 transition-transform duration-300 text-center flex flex-col items-center group"
            >
              <div className="w-16 h-16 rounded-full bg-gold-bronze/10 dark:bg-gold-metallic/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <reason.icon className="w-8 h-8 text-gold-bronze dark:text-gold-metallic" />
              </div>
              <h3 className="text-xl font-bold text-zinc-900 dark:text-white mb-3">{reason.title}</h3>
              <p className="text-zinc-600 dark:text-zinc-400 text-sm leading-relaxed">{reason.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}

const trainingSlides = [
  {
    image: "/Acadmey/DSC05892.JPG",
    title: "Real-World Practice",
    desc: "Our academy provides extensive hands-on experience using the latest aesthetic equipment. You will work on live models under the direct supervision of expert doctors.",
    bullets: ['Live Model Practice', 'Advanced Clinical Equipment', 'Expert Doctor Supervision']
  },
  {
    image: "/Acadmey/DSC05304.JPG.jpeg",
    title: "Expert Mentorship",
    desc: "Learn directly from industry veterans. Our instructors provide personalized feedback to ensure you master every technique with precision.",
    bullets: ['1-on-1 Guidance', 'Industry Secrets', 'Safety Protocols']
  },
  {
    image: "/Acadmey/DSC05912.JPG",
    title: "Modern Facilities",
    desc: "Train in our state-of-the-art clinic setting. We replicate real-world scenarios so you are fully prepared for your professional career.",
    bullets: ['State-of-the-art Setup', 'Premium Products', 'Hygiene Standards']
  }
];

export function TrainingExperienceSection() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % trainingSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <motion.section 
      id="training-experience"
      initial={{ opacity: 0 }} 
      whileInView={{ opacity: 1 }} 
      transition={{ duration: 0.8 }} 
      viewport={{ once: true, margin: "-100px" }}
      className="py-24 bg-zinc-50 dark:bg-[#111]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-zinc-900 dark:text-white mb-6">Hands-On Training Experience</h2>
          <CreativeUnderline />
        </div>
        
        <div className="relative w-full max-w-6xl mx-auto rounded-3xl overflow-hidden shadow-2xl bg-white dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-800 flex flex-col md:flex-row min-h-[500px]">
          
          {/* Left Side: Photo */}
          <div className="w-full md:w-1/2 h-64 md:h-auto relative overflow-hidden bg-zinc-200 dark:bg-zinc-800">
            <AnimatePresence mode="wait">
              <motion.img 
                key={currentSlide}
                src={trainingSlides[currentSlide].image}
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.8 }}
                className="absolute inset-0 w-full h-full object-cover"
                alt={trainingSlides[currentSlide].title}
              />
            </AnimatePresence>
          </div>

          {/* Right Side: Content */}
          <div className="w-full md:w-1/2 p-8 md:p-12 lg:p-16 flex flex-col justify-center relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.5 }}
                className="flex-1 flex flex-col justify-center"
              >
                <h3 className="text-2xl md:text-3xl font-bold mb-4 text-zinc-900 dark:text-white">{trainingSlides[currentSlide].title}</h3>
                <p className="text-zinc-600 dark:text-zinc-400 mb-8 text-base md:text-lg leading-relaxed">
                  {trainingSlides[currentSlide].desc}
                </p>
                <ul className="space-y-4">
                  {trainingSlides[currentSlide].bullets.map((item, i) => (
                    <li 
                      key={i} 
                      className="flex items-center gap-4 font-medium text-zinc-800 dark:text-zinc-200"
                    >
                      <CheckCircle className="w-6 h-6 text-gold-metallic flex-shrink-0" /> {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            </AnimatePresence>

            {/* Pagination Indicators */}
            <div className="flex gap-3 mt-12">
              {trainingSlides.map((_, idx) => (
                <button 
                  key={idx}
                  onClick={() => setCurrentSlide(idx)}
                  className={`h-2 rounded-full transition-all duration-300 ${currentSlide === idx ? 'w-8 bg-gold-metallic' : 'w-2 bg-zinc-300 dark:bg-zinc-700 hover:bg-gold-metallic/50'}`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>
          </div>
          
        </div>
      </div>
    </motion.section>
  );
}

// 3. Gallery Section
export function GallerySection({ onNavigate, limit }: { onNavigate?: (page: string) => void, limit?: number }) {
  const allImages = [
    '/gallery/DSC03560.JPG',
    '/gallery/DSC03564.JPG',
    '/gallery/DSC05461.JPG',
    '/gallery/DSC05480.JPG',
    '/gallery/DSC05487.JPG',
    '/gallery/DSC05488.JPG',
    '/gallery/DSC05523.JPG',
    '/gallery/DSC05524.JPG'
  ];
  
  const images = limit ? allImages.slice(0, limit) : allImages;
  
  const [lightboxIdx, setLightboxIdx] = useState<number | null>(null);

  const prevImage = () => {
    if (lightboxIdx !== null) {
      setLightboxIdx((lightboxIdx - 1 + images.length) % images.length);
    }
  };

  const nextImage = () => {
    if (lightboxIdx !== null) {
      setLightboxIdx((lightboxIdx + 1) % images.length);
    }
  };

  return (
    <>
      <motion.section 
        id="gallery"
        initial={{ opacity: 0 }} 
        whileInView={{ opacity: 1 }} 
        transition={{ duration: 0.8 }} 
        viewport={{ once: true, margin: "-100px" }}
        className="py-24 bg-white dark:bg-[#09090B]"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-4 mb-4">
              <Camera className="w-8 h-8 text-gold-metallic" />
              <h2 className="text-3xl md:text-4xl font-extrabold text-zinc-900 dark:text-white">Academy Gallery</h2>
            </div>
            <CreativeUnderline />
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {images.map((imgSrc, i) => (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: (i % 4) * 0.1 }}
                viewport={{ once: true }}
                onClick={() => setLightboxIdx(i)}
                className={`rounded-xl overflow-hidden cursor-pointer ${i === 0 || i === 3 ? 'col-span-2 row-span-2' : ''}`}
              >
                <img 
                  src={imgSrc} 
                  alt={`Gallery Item ${i + 1}`} 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500 min-h-[150px]"
                />
              </motion.div>
            ))}
          </div>
          {limit && (
            <div className="mt-16 text-center">
              <button 
                onClick={() => onNavigate && onNavigate('gallery')}
                className="inline-flex items-center gap-2 px-8 py-4 bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 font-bold rounded-full hover:scale-105 transition-transform shadow-xl"
              >
                Explore More <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          )}
        </div>
      </motion.section>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxIdx !== null && (
          <motion.div 
            key="lightbox"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/95 flex items-center justify-center"
            style={{ zIndex: 9999 }}
            onClick={() => setLightboxIdx(null)}
          >
            <button 
              onClick={(e) => { e.stopPropagation(); setLightboxIdx(null); }}
              className="absolute top-4 right-4 md:top-8 md:right-8 w-12 h-12 bg-black/50 rounded-full flex items-center justify-center text-white/70 hover:text-white hover:bg-black/80 transition-all"
            >
              <X className="w-8 h-8" />
            </button>
            
            <button 
              onClick={(e) => { e.stopPropagation(); prevImage(); }}
              className="absolute left-2 md:left-8 w-12 h-12 md:w-16 md:h-16 bg-black/50 rounded-full flex items-center justify-center text-white/70 hover:text-white hover:bg-black/80 transition-all z-10"
            >
              <ChevronLeft className="w-8 h-8 md:w-12 md:h-12" />
            </button>

            <img 
              src={images[lightboxIdx]} 
              alt={`Gallery Image ${lightboxIdx + 1}`}
              onClick={(e) => e.stopPropagation()}
              className="max-h-[85vh] max-w-[90vw] object-contain rounded-lg shadow-2xl relative z-0"
            />

            <button 
              onClick={(e) => { e.stopPropagation(); nextImage(); }}
              className="absolute right-2 md:right-8 w-12 h-12 md:w-16 md:h-16 bg-black/50 rounded-full flex items-center justify-center text-white/70 hover:text-white hover:bg-black/80 transition-all z-10"
            >
              <ChevronRight className="w-8 h-8 md:w-12 md:h-12" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

// 4. Before/After Section
export function BeforeAfterSection() {
  return (
    <motion.section 
      id="before-after"
      initial={{ opacity: 0 }} 
      whileInView={{ opacity: 1 }} 
      transition={{ duration: 0.8 }} 
      viewport={{ once: true, margin: "-100px" }}
      className="py-24 bg-zinc-50 dark:bg-[#111]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold text-zinc-900 dark:text-white mb-6">Transformations</h2>
        <CreativeUnderline />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {[1, 2].map((i) => (
            <div key={i} className="flex gap-2">
              <div className="flex-1 relative rounded-l-2xl overflow-hidden">
                <div className="absolute top-2 left-2 bg-black/50 text-white px-2 py-1 text-xs rounded z-10">Before</div>
                <img src={`https://images.unsplash.com/photo-1512496015851-a90fb38ba796?auto=format&fit=crop&q=80&w=300&h=400&sig=${i}a`} alt="Before" className="w-full h-full object-cover grayscale opacity-80" />
              </div>
              <div className="flex-1 relative rounded-r-2xl overflow-hidden">
                <div className="absolute top-2 right-2 bg-gold-metallic text-white px-2 py-1 text-xs rounded z-10">After</div>
                <img src={`https://images.unsplash.com/photo-1512496015851-a90fb38ba796?auto=format&fit=crop&q=80&w=300&h=400&sig=${i}b`} alt="After" className="w-full h-full object-cover" />
              </div>
            </div>
          ))}
        </div>
        <div className="mt-16 text-center">
          <button 
            className="inline-flex items-center gap-2 px-8 py-4 bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 font-bold rounded-full hover:scale-105 transition-transform shadow-xl"
          >
            Explore More <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </motion.section>
  );
}

// 5. Certification Section
export function CertificationSection() {
  const accreditations = [
    "Lakmé Academy Certified",
    "LAPT Certification (UK)",
    "ISO 9001:2005",
    "UDYAM Registered"
  ];

  return (
    <motion.section 
      id="certification"
      initial={{ opacity: 0 }} 
      whileInView={{ opacity: 1 }} 
      transition={{ duration: 0.8 }} 
      viewport={{ once: true, margin: "-100px" }}
      className="py-24 bg-white dark:bg-[#09090B]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <Award className="w-16 h-16 text-gold-metallic mx-auto mb-4" />
        <h2 className="text-3xl md:text-4xl font-extrabold text-zinc-900 dark:text-white mb-6">Academy Accreditations</h2>
        <CreativeUnderline />
        <p className="text-lg text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto mb-12">
          SK International Institute of Skills is proudly accredited and recognized by leading global and national organizations, ensuring our training meets the highest industry standards.
        </p>
        <div className="flex flex-wrap justify-center gap-6">
          {accreditations.map((acc, i) => (
            <motion.div 
              key={i}
              whileHover={{ scale: 1.05 }}
              className="px-8 py-4 bg-gold-bronze/10 dark:bg-gold-metallic/10 border border-gold-bronze/30 dark:border-gold-metallic/30 rounded-full font-bold text-gold-bronze dark:text-gold-champagne shadow-[0_0_15px_rgba(212,175,55,0.15)] hover:shadow-[0_0_30px_rgba(212,175,55,0.3)] transition-shadow flex items-center gap-3 cursor-default"
            >
              <ShieldCheck className="w-5 h-5" /> {acc}
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}

// 6. Who Can Join Section
export function WhoCanJoinSection() {
  const audience = [
    "Beginners with a passion for beauty and wellness",
    "Aspiring Makeup Artists and Beauticians",
    "Salon Professionals looking to upgrade their skills",
    "Students seeking a career in the beauty industry",
    "Homemakers planning to restart or build a career",
    "Entrepreneurs who want to start their own salon or beauty studio",
    "Individuals looking for internationally recognized certifications",
    "Professionals seeking better career opportunities in India and abroad"
  ];

  const joinImages = [
    "/img/DSC05488.JPG",
    "/img/DSC05523.JPG",
    "/img/DSC05892 (1).JPG"
  ];
  const [currentImg, setCurrentImg] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImg((prev) => (prev + 1) % joinImages.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <motion.section 
      id="who-can-join"
      initial={{ opacity: 0 }} 
      whileInView={{ opacity: 1 }} 
      transition={{ duration: 0.8 }} 
      viewport={{ once: true, margin: "-100px" }}
      className="py-24 bg-zinc-50 dark:bg-[#111]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2 text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-extrabold text-zinc-900 dark:text-white mb-6 text-center md:text-left">Who Can Join Our Academy?</h2>
            <CreativeUnderline className="justify-center md:justify-start" />
            <p className="text-lg text-zinc-600 dark:text-zinc-400 mb-6">
              Our academy welcomes anyone with a passion for the beauty industry, regardless of their background or experience level.
            </p>
            <ul className="space-y-4">
              {audience.map((item, idx) => (
                <motion.li 
                  key={idx} 
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center gap-3"
                >
                  <CheckCircle className="w-6 h-6 text-gold-metallic flex-shrink-0" />
                  <span className="font-medium text-zinc-900 dark:text-zinc-200 text-left">{item}</span>
                </motion.li>
              ))}
            </ul>
          </div>
          <div className="w-full md:w-1/2">
            <div className="relative w-full h-[400px] md:h-[500px] rounded-3xl overflow-hidden shadow-2xl">
              <AnimatePresence mode="wait">
                <motion.img 
                  key={currentImg}
                  src={joinImages[currentImg]}
                  initial={{ opacity: 0, scale: 1.05 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.8 }}
                  className="absolute inset-0 w-full h-full object-cover"
                  alt="Who can join"
                />
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}

// 7. Achievements Section
export function AchievementsSection() {
  return (
    <motion.section 
      id="achievements"
      initial={{ opacity: 0 }} 
      whileInView={{ opacity: 1 }} 
      transition={{ duration: 0.8 }} 
      viewport={{ once: true, margin: "-100px" }}
      className="py-24 bg-white dark:bg-[#09090B]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold text-zinc-900 dark:text-white mb-6">Our Achievements</h2>
        <CreativeUnderline />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { title: "Best Beauty Academy 2023", desc: "Recognized for excellence in aesthetic training." },
            { title: "500+ Successful Alumni", desc: "Graduates working in top brands globally." },
            { title: "Excellence in SPMU", desc: "Awarded for advanced semi-permanent makeup techniques." }
          ].map((item, idx) => (
            <motion.div 
              key={idx} 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              viewport={{ once: true }}
              className="p-8 border border-zinc-200 dark:border-zinc-800 rounded-2xl hover:border-gold-metallic transition-colors"
            >
              <Trophy className="w-12 h-12 text-gold-metallic mx-auto mb-4" />
              <h3 className="font-bold text-xl mb-2">{item.title}</h3>
              <p className="text-zinc-600 dark:text-zinc-400">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}

// 8. Upcoming Batch Popup
export function UpcomingBatchPopup() {
  const [show, setShow] = useState(false);
  const [closed, setClosed] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (!closed) {
        setShow(true);
      }
    }, 60000); // 1 minute
    return () => clearTimeout(timer);
  }, [closed]);

  if (!show) return null;

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0, x: 50, scale: 0.9 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9, x: 50 }}
          className="fixed top-20 sm:top-24 right-4 sm:right-6 z-50 bg-white dark:bg-[#111] p-5 sm:p-6 rounded-2xl shadow-2xl border border-zinc-200 dark:border-zinc-800 w-[90vw] sm:w-80 max-w-sm shadow-gold-metallic/20"
        >
          <button 
            onClick={() => { setShow(false); setClosed(true); }}
            className="absolute top-4 right-4 text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
          
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 bg-gold-metallic/20 rounded-full flex items-center justify-center">
              <Calendar className="w-5 h-5 text-gold-metallic" />
            </div>
            <h4 className="font-bold text-zinc-900 dark:text-white leading-tight">Join Our Upcoming Batch!</h4>
          </div>
          
          <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-4">
            Next masterclass batch is starting soon. Limited seats available.
          </p>
          
          <button className="w-full bg-gold-gradient text-white font-bold py-2 rounded-lg hover:shadow-lg transition-shadow text-sm">
            Enroll Now
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

// 9. FAQ Section
export function FAQSection() {
  const faqs = [
    { q: "What is the duration of the courses?", a: "Courses range from 1-day workshops to 6-month comprehensive diplomas." },
    { q: "Do you provide certification?", a: "Yes, all our courses provide industry-recognized certifications, including ISO and LAPT." },
    { q: "Is there any placement assistance?", a: "We offer 100% placement assistance and career guidance for our long-term courses." },
    { q: "Can I pay in installments?", a: "Yes, flexible EMI options are available for diploma and advanced courses." }
  ];

  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <motion.section 
      id="faq"
      initial={{ opacity: 0 }} 
      whileInView={{ opacity: 1 }} 
      transition={{ duration: 0.8 }} 
      viewport={{ once: true, margin: "-100px" }}
      className="py-24 bg-white dark:bg-[#09090B]"
    >
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-zinc-900 dark:text-white mb-6">Frequently Asked Questions</h2>
          <CreativeUnderline />
        </div>
        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <motion.div 
              key={idx} 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="border border-zinc-200 dark:border-zinc-800 rounded-xl overflow-hidden"
            >
              <button 
                onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
                className="w-full text-left px-6 py-4 flex justify-between items-center font-bold bg-zinc-50 dark:bg-[#111] hover:bg-zinc-100 dark:hover:bg-[#1a1a1a] transition-colors"
              >
                {faq.q}
                <ChevronDown className={`w-5 h-5 transition-transform ${openIdx === idx ? 'rotate-180 text-gold-metallic' : 'text-zinc-400'}`} />
              </button>
              {openIdx === idx && (
                <div className="px-6 py-4 bg-white dark:bg-[#09090B] text-zinc-600 dark:text-zinc-400">
                  {faq.a}
                </div>
              )}
            </motion.div>
          ))}
        </div>
        <div className="mt-16 text-center">
          <button 
            className="inline-flex items-center gap-2 px-8 py-4 bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 font-bold rounded-full hover:scale-105 transition-transform shadow-xl"
          >
            Explore More <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </motion.section>
  );
}

// 9.5 Equipment Sales Section
export function EquipmentSalesSection() {
  return (
    <motion.section 
      initial={{ opacity: 0 }} 
      whileInView={{ opacity: 1 }} 
      transition={{ duration: 0.8 }} 
      viewport={{ once: true, margin: "-100px" }}
      className="py-24 bg-white dark:bg-[#09090B] relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-gold-bronze/5 dark:bg-gold-metallic/5" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="bg-zinc-50 dark:bg-[#111] rounded-3xl p-8 md:p-12 lg:p-16 border border-zinc-200 dark:border-zinc-800 shadow-2xl flex flex-col lg:flex-row items-center gap-12">
          
          <div className="flex-1 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold-bronze/10 dark:bg-gold-metallic/10 text-gold-bronze dark:text-gold-champagne font-bold text-sm mb-6 border border-gold-bronze/20 dark:border-gold-metallic/20">
              <Sparkles className="w-4 h-4" />
              SK Korean Technologies
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-zinc-900 dark:text-white mb-6 leading-tight">
              Premium Aesthetic <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-bronze to-gold-metallic">Machines & Equipment</span>
            </h2>
            <p className="text-lg text-zinc-600 dark:text-zinc-400 mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              We provide world-class, advanced aesthetic machines for clinics, salons, and beauty professionals. Upgrade your practice with cutting-edge technology directly from industry leaders.
            </p>
            <button 
              onClick={() => window.open('https://skkoreantechnologies.com/', '_blank')}
              className="bg-gold-gradient text-zinc-900 shadow-[0_0_15px_rgba(212,175,55,0.4)] hover:shadow-[0_0_25px_rgba(212,175,55,0.6)] hover:scale-105 transition-all py-4 px-10 text-lg font-extrabold flex items-center justify-center gap-2 rounded-full mx-auto lg:mx-0 uppercase tracking-wide w-full sm:w-auto"
            >
              Explore Machines <ArrowRight className="w-5 h-5" />
            </button>
          </div>

          <div className="flex-1 w-full relative">
            <div className="absolute inset-0 bg-gradient-to-tr from-gold-bronze/20 to-transparent rounded-3xl transform translate-x-4 translate-y-4" />
            <img 
              src="/machines/DSC05547 (1).JPG" 
              alt="SK Korean Technologies Aesthetic Machines" 
              className="w-full h-[300px] md:h-[400px] object-cover rounded-3xl shadow-xl relative z-10"
            />
          </div>

        </div>
      </div>
    </motion.section>
  );
}

// 10. Contact Section
export function ContactSection() {
  return (
    <motion.section 
      id="contact"
      initial={{ opacity: 0 }} 
      whileInView={{ opacity: 1 }} 
      transition={{ duration: 0.8 }} 
      viewport={{ once: true, margin: "-100px" }}
      className="py-24 bg-zinc-50 dark:bg-[#111]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-zinc-900 dark:text-white mb-6">Get In Touch</h2>
          <CreativeUnderline />
          <p className="text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto">Ready to start your beauty career? Contact us today to learn more about our courses and enrollment process.</p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            
            <div className="space-y-6 mb-8">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-white dark:bg-black flex items-center justify-center border border-zinc-200 dark:border-zinc-800">
                  <MapPin className="w-5 h-5 text-gold-metallic" />
                </div>
                <div>
                  <h4 className="font-bold">Location</h4>
                  <p className="text-zinc-500">SK Beauty verse pvt.ltd<br />48/102 , Angalamman Kovil st, Choolai , Chennai - 600 012</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-white dark:bg-black flex items-center justify-center border border-zinc-200 dark:border-zinc-800">
                  <Phone className="w-5 h-5 text-gold-metallic" />
                </div>
                <div>
                  <h4 className="font-bold">Phone</h4>
                  <p className="text-zinc-500">+91 86103 45830<br />+91 744 888 5802</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-white dark:bg-black flex items-center justify-center border border-zinc-200 dark:border-zinc-800">
                  <Mail className="w-5 h-5 text-gold-metallic" />
                </div>
                <div>
                  <h4 className="font-bold">Email</h4>
                  <p className="text-zinc-500">skbeautyverse@gmail.com</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-white dark:bg-[#09090B] p-8 rounded-3xl shadow-xl border border-zinc-100 dark:border-zinc-900">
            <h3 className="text-2xl font-bold mb-6">Send a Message</h3>
            <form className="space-y-4">
              <input type="text" placeholder="Your Name" className="w-full px-4 py-3 rounded-xl bg-zinc-50 dark:bg-[#111] border border-zinc-200 dark:border-zinc-800 focus:outline-none focus:border-gold-metallic transition-colors" />
              <input type="email" placeholder="Your Email" className="w-full px-4 py-3 rounded-xl bg-zinc-50 dark:bg-[#111] border border-zinc-200 dark:border-zinc-800 focus:outline-none focus:border-gold-metallic transition-colors" />
              <textarea placeholder="Your Message" rows={4} className="w-full px-4 py-3 rounded-xl bg-zinc-50 dark:bg-[#111] border border-zinc-200 dark:border-zinc-800 focus:outline-none focus:border-gold-metallic transition-colors"></textarea>
              <button className="w-full btn-primary py-4 justify-center text-lg">Submit Request</button>
            </form>
          </div>
        </div>
      </div>
    </motion.section>
  );
}

// 11. Final CTA Section
export function FinalCTASection() {
  return (
    <motion.section 
      initial={{ opacity: 0 }} 
      whileInView={{ opacity: 1 }} 
      transition={{ duration: 0.8 }} 
      viewport={{ once: true, margin: "-100px" }}
      className="py-24 relative overflow-hidden bg-gold-gradient"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 text-zinc-900">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight mb-6 uppercase">Ready to Transform Your Future?</h2>
        <p className="text-lg sm:text-xl font-medium mb-10 max-w-2xl mx-auto">Enroll today and take the first step towards a successful career in the beauty and aesthetics industry.</p>
        <button 
          onClick={() => window.open('https://wa.me/918610345830', '_blank')}
          className="bg-zinc-900 text-white hover:bg-black px-6 py-4 sm:px-10 sm:py-5 rounded-full font-bold text-base sm:text-lg shadow-2xl hover:scale-105 transition-transform inline-flex items-center gap-3"
        >
          Join SK Academy <ArrowRight className="w-6 h-6" />
        </button>
      </div>
    </motion.section>
  );
}

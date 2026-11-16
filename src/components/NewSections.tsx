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
  ChevronRight,
  Headphones,
  Maximize2
} from 'lucide-react';
import { AnimatedCounter } from './HomeSections';
import { useState, useEffect, useRef } from 'react';

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
export function AboutSection({ onNavigate, showStats = false }: { onNavigate?: (page: string) => void, showStats?: boolean }) {
  const stats = [
    { title: "Students Trained", num: 1000, suffix: "+", icon: GraduationCap },
    { title: "Doctors Trained", num: 100, suffix: "+", icon: Heart },
    { title: "Years Experience", num: 3, suffix: "+", icon: Award },

    { title: "Accredited", text: "LAPT UK", icon: ShieldCheck }
  ];

  return (
    <motion.section
      id="about"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true, margin: "-100px" }}
      className="pt-12 md:pt-16 pb-12 md:pb-20 bg-white dark:bg-[#09090B] scroll-mt-24"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-gold-bronze/10 dark:bg-gold-metallic/10 text-gold-bronze dark:text-gold-champagne font-bold text-xs mb-4 border border-gold-bronze/20 dark:border-gold-metallic/20">
          <Award className="w-3.5 h-3.5" />
          OUR STORY
        </div>
        <h2 className="text-3xl md:text-5xl font-extrabold mb-6 text-zinc-900 dark:text-white text-center tracking-tight">
          About <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-bronze to-gold-metallic">SK International Institute of Skills</span>
        </h2>
        <CreativeUnderline />
        <div className="text-lg text-zinc-600 dark:text-zinc-400 max-w-4xl mx-auto leading-relaxed mb-16 space-y-6 text-justify">
          <p>
            <strong>SK International Institute of Skills</strong> is a premier beauty and aesthetics academy dedicated to empowering aspiring professionals with world-class education and practical expertise. Founded by <a href="#founder" onClick={(e) => { e.preventDefault(); if (onNavigate) { onNavigate('about'); setTimeout(() => { document.getElementById('founder')?.scrollIntoView({ behavior: 'smooth' }); }, 100); } else { document.getElementById('founder')?.scrollIntoView({ behavior: 'smooth' }); } }} className="font-bold text-gold-bronze hover:text-gold-metallic underline decoration-gold-bronze/30 hover:decoration-gold-metallic underline-offset-4 transition-all duration-300">Sushmitha</a>, the institute is built on a vision of delivering internationally recognized beauty training that prepares students for successful global careers.
          </p>
          <p>
            With certified trainers, modern facilities, and hands-on practical sessions, we ensure every student gains the confidence and skills needed to excel in the beauty industry. Whether you dream of working with leading salons or starting your own beauty business, we provide the knowledge, guidance, and support to help you succeed.
          </p>
          <p>
            At SK International Institute of Skills, we don't just teach beauty—we create confident professionals and future industry leaders.
          </p>
        </div>

        {showStats && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
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
        )}
      </div>
    </motion.section>
  );
}

// 1.5 Why Choose Us Section
export function WhyChooseUsSection() {
  const reasons = [
    { title: "LAPT-UK Accredited", desc: <>Certificates Valid in <span className="font-extrabold text-gold-bronze dark:text-gold-metallic bg-gold-metallic/10 px-1.5 py-0.5 rounded-md">180+ Countries</span></>, icon: Award },
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
      className="py-12 md:py-16 bg-zinc-50 dark:bg-[#111]"
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
      className="pt-4 pb-4 md:pt-8 md:pb-8 bg-zinc-50 dark:bg-[#111]"
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
interface GalleryPhoto {
  src: string;
  caption: string;
  category: string;
  country: 'India' | 'Sri Lanka';
}

const indiaGalleryImages: GalleryPhoto[] = [
  {
    src: '/gallery/DSC03560.JPG',
    caption: 'Clinical Hands-on Practical Training Session',
    category: 'Practical Training',
    country: 'India'
  },
  {
    src: '/gallery/DSC03564.JPG',
    caption: 'Doctor Mentorship & Aesthetic Clinical Guidance',
    category: 'Doctor Mentorship',
    country: 'India'
  },
  {
    src: '/gallery/DSC05480.JPG',
    caption: 'Live Model Treatment & Skin Assessment',
    category: 'Live Models',
    country: 'India'
  },
  {
    src: '/gallery/DSC05487.JPG',
    caption: 'Precision Aesthetic Procedure Guidance',
    category: 'Precision Technique',
    country: 'India'
  },
  {
    src: '/gallery/DSC05523.JPG',
    caption: 'Advanced Facial Aesthetics & Rejuvenation Demo',
    category: 'Facial Aesthetics',
    country: 'India'
  },
  {
    src: '/gallery/DSC05547.JPG',
    caption: 'State-of-the-art Laser Machine & Device Training',
    category: 'Laser Machines',
    country: 'India'
  },
  {
    src: '/gallery/DSC05897.JPG',
    caption: 'Interactive Theory Lecture & Protocol Guidance',
    category: 'Classroom & Theory',
    country: 'India'
  },
  {
    src: '/gallery/DSC05912.JPG',
    caption: 'Small Batch Mentorship & Real-world Practice',
    category: 'Clinical Practice',
    country: 'India'
  },
  {
    src: '/gallery/DSC05916.JPG',
    caption: 'World-class Academy Clinical Infrastructure',
    category: 'Academy Facility',
    country: 'India'
  }
];

const srilankaGalleryImages: GalleryPhoto[] = [
  {
    src: '/Srilanka/DSC07258.JPG',
    caption: 'Clinical Practical Demonstration with Live Models',
    category: 'Live Models',
    country: 'Sri Lanka'
  },
  {
    src: '/Srilanka/DSC07243.JPG',
    caption: 'Hands-on Aesthetic Machine & Laser Training',
    category: 'Laser Machines',
    country: 'Sri Lanka'
  },
  {
    src: '/Srilanka/DSC07247.JPG',
    caption: '1-on-1 Mentorship with Expert Doctor Guidance',
    category: 'Doctor Guidance',
    country: 'Sri Lanka'
  },
  {
    src: '/Srilanka/DSC07319.JPG',
    caption: 'Advanced Skin Analysis & Clinical Protocols',
    category: 'Skin Protocols',
    country: 'Sri Lanka'
  },
  {
    src: '/Srilanka/DSC07492.JPG',
    caption: 'Comprehensive Aesthetic Procedure Training',
    category: 'Procedure Training',
    country: 'Sri Lanka'
  },
  {
    src: '/Srilanka/DSC07505.JPG',
    caption: 'Student Practical Sessions & Precision Technique',
    category: 'Precision Practice',
    country: 'Sri Lanka'
  },
  {
    src: '/Srilanka/DSC07226.JPG',
    caption: 'Real-world Clinic Environment Learning',
    category: 'Clinic Setup',
    country: 'Sri Lanka'
  },
  {
    src: '/Srilanka/DSC07230.JPG',
    caption: 'Graduation & International UK Diploma Award',
    category: 'UK Certification',
    country: 'Sri Lanka'
  }
];

export function GallerySection() {
  const [activeTab, setActiveTab] = useState<'all' | 'india' | 'srilanka'>('all');
  const [lightboxState, setLightboxState] = useState<{ images: GalleryPhoto[]; idx: number } | null>(null);

  const indiaSectionRef = useRef<HTMLDivElement>(null);
  const srilankaSectionRef = useRef<HTMLDivElement>(null);

  const handleViewIndia = () => {
    setActiveTab('india');
    setTimeout(() => {
      indiaSectionRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 60);
  };

  const handleViewSriLanka = () => {
    setActiveTab('srilanka');
    setTimeout(() => {
      srilankaSectionRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 60);
  };

  const prevImage = () => {
    if (!lightboxState) return;
    setLightboxState({
      images: lightboxState.images,
      idx: (lightboxState.idx - 1 + lightboxState.images.length) % lightboxState.images.length
    });
  };

  const nextImage = () => {
    if (!lightboxState) return;
    setLightboxState({
      images: lightboxState.images,
      idx: (lightboxState.idx + 1) % lightboxState.images.length
    });
  };

  useEffect(() => {
    if (!lightboxState) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setLightboxState(null);
      if (e.key === 'ArrowLeft') prevImage();
      if (e.key === 'ArrowRight') nextImage();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxState]);

  const currentPhoto = lightboxState ? lightboxState.images[lightboxState.idx] : null;

  return (
    <>
      <motion.section
        id="gallery"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, margin: "-100px" }}
        className="pt-4 pb-16 md:pt-8 md:pb-20 bg-white dark:bg-[#09090B]"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-10 md:mb-14">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-gold-bronze/10 dark:bg-gold-metallic/10 text-gold-bronze dark:text-gold-champagne font-bold text-xs mb-4 border border-gold-bronze/20 dark:border-gold-metallic/20">
              <Camera className="w-3.5 h-3.5" />
              OUR CLINICAL & INTERNATIONAL GALLERIES
            </div>
            <h2 className="text-3xl md:text-5xl font-extrabold mb-4 text-zinc-900 dark:text-white text-center tracking-tight">
              Academy <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-bronze to-gold-metallic">Gallery</span>
            </h2>
            <CreativeUnderline />
            <p className="text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
              Explore hands-on clinical training, live patient demonstrations, and international batches from our <strong>India</strong> and <strong>Sri Lanka</strong> facilities.
            </p>
          </div>

          {/* 2 Main Cards (India & Sri Lanka) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
            {/* 1. India Card */}
            <motion.div
              whileHover={{ y: -4 }}
              transition={{ duration: 0.3 }}
              onClick={handleViewIndia}
              className={`relative rounded-3xl overflow-hidden cursor-pointer transition-all duration-300 border ${
                activeTab === 'india'
                  ? 'border-gold-metallic ring-2 ring-gold-metallic/30 shadow-[0_0_25px_rgba(212,175,55,0.25)]'
                  : 'border-zinc-200 dark:border-zinc-800 hover:border-gold-metallic/50 shadow-lg'
              } bg-zinc-900 group`}
            >
              {/* Background Cover Image with Overlay */}
              <div className="relative h-56 sm:h-64 overflow-hidden">
                <img
                  src={indiaGalleryImages[0].src}
                  alt="Hands-on clinical aesthetic training at Chennai campus - SK Academy"
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 brightness-[0.75] group-hover:brightness-[0.85]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />

                {/* Country Flag Badge & Photo Count */}
                <div className="absolute top-4 left-4 flex items-center gap-2">
                  <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/60 backdrop-blur-md border border-white/20 text-white text-xs font-bold">
                    <img
                      src="https://flagcdn.com/w80/in.png"
                      alt="India Flag"
                      className="w-5 h-3.5 object-cover rounded shadow-xs"
                    />
                    <span>India</span>
                  </div>
                </div>

                <div className="absolute top-4 right-4">
                  <span className="px-3 py-1.5 rounded-full bg-black/60 backdrop-blur-md border border-gold-metallic/30 text-gold-metallic text-xs font-bold">
                    {indiaGalleryImages.length} Photos
                  </span>
                </div>

                {/* Bottom Content within Image */}
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="flex items-center gap-1.5 text-gold-metallic text-xs font-semibold mb-1">
                    <MapPin className="w-3.5 h-3.5" />
                    <span>Chennai Campus</span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-black text-white tracking-wide">
                    India
                  </h3>
                </div>
              </div>

              {/* Bottom Card Footer Details */}
              <div className="p-5 bg-zinc-50 dark:bg-zinc-900/90 flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-t border-zinc-200 dark:border-zinc-800">
                <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 line-clamp-1">
                  Practical demonstrations, patient assessments & aesthetic machinery.
                </p>
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleViewIndia();
                  }}
                  className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold tracking-wider uppercase transition-all shrink-0 bg-gradient-to-r from-gold-bronze to-gold-metallic text-black shadow-md hover:scale-105 active:scale-95"
                >
                  <span>View Images</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </motion.div>

            {/* 2. Sri Lanka Card */}
            <motion.div
              whileHover={{ y: -4 }}
              transition={{ duration: 0.3 }}
              onClick={handleViewSriLanka}
              className={`relative rounded-3xl overflow-hidden cursor-pointer transition-all duration-300 border ${
                activeTab === 'srilanka'
                  ? 'border-gold-metallic ring-2 ring-gold-metallic/30 shadow-[0_0_25px_rgba(212,175,55,0.25)]'
                  : 'border-zinc-200 dark:border-zinc-800 hover:border-gold-metallic/50 shadow-lg'
              } bg-zinc-900 group`}
            >
              {/* Background Cover Image with Overlay */}
              <div className="relative h-56 sm:h-64 overflow-hidden">
                <img
                  src={srilankaGalleryImages[0].src}
                  alt="Sri Lanka international student cohort practical aesthetic training at SK Academy Chennai"
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 brightness-[0.75] group-hover:brightness-[0.85]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />

                {/* Country Flag Badge & Photo Count */}
                <div className="absolute top-4 left-4 flex items-center gap-2">
                  <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/60 backdrop-blur-md border border-white/20 text-white text-xs font-bold">
                    <img
                      src="https://flagcdn.com/w80/lk.png"
                      alt="Sri Lanka Flag"
                      className="w-5 h-3.5 object-cover rounded shadow-xs"
                    />
                    <span>Sri Lanka</span>
                  </div>
                </div>

                <div className="absolute top-4 right-4">
                  <span className="px-3 py-1.5 rounded-full bg-black/60 backdrop-blur-md border border-gold-metallic/30 text-gold-metallic text-xs font-bold">
                    {srilankaGalleryImages.length} Photos
                  </span>
                </div>

                {/* Bottom Content within Image */}
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="flex items-center gap-1.5 text-gold-metallic text-xs font-semibold mb-1">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>International Doctors Batch</span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-black text-white tracking-wide">
                    Sri Lanka
                  </h3>
                </div>
              </div>

              {/* Bottom Card Footer Details */}
              <div className="p-5 bg-zinc-50 dark:bg-zinc-900/90 flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-t border-zinc-200 dark:border-zinc-800">
                <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 line-clamp-1">
                  International training batch, doctor mentorship & UK Diploma certification.
                </p>
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleViewSriLanka();
                  }}
                  className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold tracking-wider uppercase transition-all shrink-0 bg-gradient-to-r from-gold-bronze to-gold-metallic text-black shadow-md hover:scale-105 active:scale-95"
                >
                  <span>View Images</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </motion.div>
          </div>

          {/* Quick Filter Bar */}
          <div className="flex items-center justify-center gap-2 sm:gap-3 mb-10 flex-wrap">
            <button
              onClick={() => {
                setActiveTab('all');
                setTimeout(() => {
                  indiaSectionRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }, 60);
              }}
              className={`px-4 sm:px-5 py-2 rounded-full text-xs sm:text-sm font-bold transition-all duration-300 ${
                activeTab === 'all'
                  ? 'bg-gradient-to-r from-gold-bronze to-gold-metallic text-black shadow-lg shadow-gold-metallic/20 scale-105'
                  : 'bg-zinc-100 dark:bg-zinc-800/80 text-zinc-700 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-white border border-zinc-200 dark:border-zinc-700'
              }`}
            >
              All Images ({indiaGalleryImages.length + srilankaGalleryImages.length})
            </button>
            <button
              onClick={handleViewIndia}
              className={`inline-flex items-center gap-2 px-4 sm:px-5 py-2 rounded-full text-xs sm:text-sm font-bold transition-all duration-300 ${
                activeTab === 'india'
                  ? 'bg-gradient-to-r from-gold-bronze to-gold-metallic text-black shadow-lg shadow-gold-metallic/20 scale-105'
                  : 'bg-zinc-100 dark:bg-zinc-800/80 text-zinc-700 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-white border border-zinc-200 dark:border-zinc-700'
              }`}
            >
              <img src="https://flagcdn.com/w40/in.png" alt="India" className="w-4 h-3 rounded-xs object-cover" />
              <span>India ({indiaGalleryImages.length})</span>
            </button>
            <button
              onClick={handleViewSriLanka}
              className={`inline-flex items-center gap-2 px-4 sm:px-5 py-2 rounded-full text-xs sm:text-sm font-bold transition-all duration-300 ${
                activeTab === 'srilanka'
                  ? 'bg-gradient-to-r from-gold-bronze to-gold-metallic text-black shadow-lg shadow-gold-metallic/20 scale-105'
                  : 'bg-zinc-100 dark:bg-zinc-800/80 text-zinc-700 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-white border border-zinc-200 dark:border-zinc-700'
              }`}
            >
              <img src="https://flagcdn.com/w40/lk.png" alt="Sri Lanka" className="w-4 h-3 rounded-xs object-cover" />
              <span>Sri Lanka ({srilankaGalleryImages.length})</span>
            </button>
          </div>

          {/* Galleries Display */}
          <div className="space-y-12">
            {/* CARD 1: INDIA GALLERY */}
            {(activeTab === 'all' || activeTab === 'india') && (
              <motion.div
                ref={indiaSectionRef}
                id="india-gallery"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="scroll-mt-28 md:scroll-mt-32 rounded-3xl p-6 sm:p-8 md:p-10 bg-zinc-50/70 dark:bg-zinc-900/60 border border-zinc-200 dark:border-zinc-800 shadow-xl relative overflow-hidden"
              >
                {/* Decorative Top Accent Glow */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-gold-bronze via-gold-metallic to-gold-champagne" />

                {/* India Header */}
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8 pb-6 border-b border-zinc-200 dark:border-zinc-800">
                  <div className="flex items-center gap-3.5">
                    <img
                      src="https://flagcdn.com/w80/in.png"
                      alt="India Flag"
                      className="w-10 h-7 object-cover rounded-md shadow-md border border-zinc-300 dark:border-zinc-700 shrink-0"
                    />
                    <div>
                      <div className="flex items-center gap-2">
                        <h3 className="text-2xl sm:text-3xl font-extrabold text-zinc-900 dark:text-white tracking-tight">
                          India
                        </h3>
                        <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-gold-bronze/10 dark:bg-gold-metallic/10 text-gold-bronze dark:text-gold-champagne border border-gold-bronze/20 dark:border-gold-metallic/20">
                          {indiaGalleryImages.length} Photos
                        </span>
                      </div>
                      <p className="text-xs sm:text-sm text-zinc-500 dark:text-zinc-400 mt-1 flex items-center gap-1.5">
                        <MapPin className="w-3.5 h-3.5 text-gold-metallic" />
                        <span>Chennai Campus – Practical Training, Laser Demonstrations & Clinical Sessions</span>
                      </p>
                    </div>
                  </div>

                  <span className="text-xs font-semibold text-zinc-500 dark:text-zinc-400 hidden sm:block">
                    Click any image to view full screen
                  </span>
                </div>

                {/* India Images Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                  {indiaGalleryImages.map((photo, i) => (
                    <motion.div
                      key={photo.src}
                      initial={{ opacity: 0, scale: 0.95 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.4, delay: (i % 3) * 0.08 }}
                      viewport={{ once: true }}
                      onClick={() => setLightboxState({ images: indiaGalleryImages, idx: i })}
                      className="group relative rounded-2xl overflow-hidden cursor-pointer bg-zinc-900 border border-zinc-200 dark:border-zinc-800/80 shadow-md aspect-[4/3]"
                    >
                      <img
                        src={photo.src}
                        alt={photo.caption}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                      />
                      {/* Gradient Overlay & Details */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-4">
                        <div className="flex justify-between items-start">
                          <span className="px-2.5 py-1 rounded-full text-[11px] font-bold bg-black/60 backdrop-blur-md text-gold-metallic border border-gold-metallic/30">
                            {photo.category}
                          </span>
                          <span className="w-8 h-8 rounded-full bg-black/60 backdrop-blur-md text-white/80 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:scale-110">
                            <Maximize2 className="w-4 h-4" />
                          </span>
                        </div>
                        <div>
                          <p className="text-white text-xs sm:text-sm font-semibold drop-shadow-md line-clamp-2">
                            {photo.caption}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}

            {/* CARD 2: SRI LANKA GALLERY */}
            {(activeTab === 'all' || activeTab === 'srilanka') && (
              <motion.div
                ref={srilankaSectionRef}
                id="srilanka-gallery"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="scroll-mt-28 md:scroll-mt-32 rounded-3xl p-6 sm:p-8 md:p-10 bg-zinc-50/70 dark:bg-zinc-900/60 border border-zinc-200 dark:border-zinc-800 shadow-xl relative overflow-hidden"
              >
                {/* Decorative Top Accent Glow */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-emerald-500 via-gold-metallic to-gold-bronze" />

                {/* Sri Lanka Header */}
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8 pb-6 border-b border-zinc-200 dark:border-zinc-800">
                  <div className="flex items-center gap-3.5">
                    <img
                      src="https://flagcdn.com/w80/lk.png"
                      alt="Sri Lanka Flag"
                      className="w-10 h-7 object-cover rounded-md shadow-md border border-zinc-300 dark:border-zinc-700 shrink-0"
                    />
                    <div>
                      <div className="flex items-center gap-2">
                        <h3 className="text-2xl sm:text-3xl font-extrabold text-zinc-900 dark:text-white tracking-tight">
                          Sri Lanka
                        </h3>
                        <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/30">
                          {srilankaGalleryImages.length} Photos
                        </span>
                      </div>
                      <p className="text-xs sm:text-sm text-zinc-500 dark:text-zinc-400 mt-1 flex items-center gap-1.5">
                        <Sparkles className="w-3.5 h-3.5 text-gold-metallic" />
                        <span>International Training Batch – Live Models, Doctor Guidance & UK Diploma Award</span>
                      </p>
                    </div>
                  </div>

                  <span className="text-xs font-semibold text-zinc-500 dark:text-zinc-400 hidden sm:block">
                    Click any image to view full screen
                  </span>
                </div>

                {/* Sri Lanka Images Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                  {srilankaGalleryImages.map((photo, i) => (
                    <motion.div
                      key={photo.src}
                      initial={{ opacity: 0, scale: 0.95 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.4, delay: (i % 4) * 0.08 }}
                      viewport={{ once: true }}
                      onClick={() => setLightboxState({ images: srilankaGalleryImages, idx: i })}
                      className="group relative rounded-2xl overflow-hidden cursor-pointer bg-zinc-900 border border-zinc-200 dark:border-zinc-800/80 shadow-md aspect-[4/3]"
                    >
                      <img
                        src={photo.src}
                        alt={photo.caption}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                      />
                      {/* Gradient Overlay & Details */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-4">
                        <div className="flex justify-between items-start">
                          <span className="px-2.5 py-1 rounded-full text-[11px] font-bold bg-black/60 backdrop-blur-md text-emerald-400 border border-emerald-500/30">
                            {photo.category}
                          </span>
                          <span className="w-8 h-8 rounded-full bg-black/60 backdrop-blur-md text-white/80 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:scale-110">
                            <Maximize2 className="w-4 h-4" />
                          </span>
                        </div>
                        <div>
                          <p className="text-white text-xs sm:text-sm font-semibold drop-shadow-md line-clamp-2">
                            {photo.caption}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </motion.section>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {lightboxState && currentPhoto && (
          <motion.div
            key="lightbox"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/95 backdrop-blur-md flex items-center justify-center select-none"
            style={{ zIndex: 9999 }}
            onClick={() => setLightboxState(null)}
          >
            {/* Top Bar with Info and Close */}
            <div
              className="absolute top-4 left-4 right-4 sm:top-6 sm:left-8 sm:right-8 flex items-center justify-between z-20"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/70 backdrop-blur-md border border-white/20 text-white text-xs font-bold">
                  <img
                    src={currentPhoto.country === 'India' ? 'https://flagcdn.com/w40/in.png' : 'https://flagcdn.com/w40/lk.png'}
                    alt={currentPhoto.country}
                    className="w-4 h-3 object-cover rounded-xs"
                  />
                  <span>{currentPhoto.country} Album</span>
                </div>
                <span className="px-3 py-1.5 rounded-full bg-black/70 backdrop-blur-md border border-white/20 text-gold-metallic text-xs font-bold">
                  {lightboxState.idx + 1} / {lightboxState.images.length}
                </span>
              </div>

              <button
                onClick={() => setLightboxState(null)}
                className="w-11 h-11 bg-black/60 border border-white/20 rounded-full flex items-center justify-center text-white/80 hover:text-white hover:bg-black/90 transition-all cursor-pointer"
                aria-label="Close Lightbox"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Left Previous Button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                prevImage();
              }}
              className="absolute left-2 sm:left-6 w-11 h-11 sm:w-14 sm:h-14 bg-black/60 border border-white/20 rounded-full flex items-center justify-center text-white/80 hover:text-white hover:bg-black/90 transition-all z-20 cursor-pointer"
              aria-label="Previous Image"
            >
              <ChevronLeft className="w-7 h-7 sm:w-9 sm:h-9" />
            </button>

            {/* Main Center Image */}
            <div
              className="relative max-h-[80vh] max-w-[92vw] flex flex-col items-center justify-center z-10"
              onClick={(e) => e.stopPropagation()}
            >
              <motion.img
                key={currentPhoto.src}
                src={currentPhoto.src}
                alt={currentPhoto.caption}
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.25 }}
                className="max-h-[75vh] max-w-[90vw] object-contain rounded-xl shadow-2xl border border-white/10"
              />
              {/* Bottom Caption Pill */}
              <div className="mt-4 px-4 py-2 rounded-xl bg-black/80 backdrop-blur-md border border-white/15 text-center max-w-2xl">
                <p className="text-white text-xs sm:text-sm font-semibold tracking-wide">
                  {currentPhoto.caption}
                </p>
                <span className="text-[11px] text-gold-metallic font-medium mt-0.5 block">
                  {currentPhoto.category} • {currentPhoto.country} Academy
                </span>
              </div>
            </div>

            {/* Right Next Button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                nextImage();
              }}
              className="absolute right-2 sm:right-6 w-11 h-11 sm:w-14 sm:h-14 bg-black/60 border border-white/20 rounded-full flex items-center justify-center text-white/80 hover:text-white hover:bg-black/90 transition-all z-20 cursor-pointer"
              aria-label="Next Image"
            >
              <ChevronRight className="w-7 h-7 sm:w-9 sm:h-9" />
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
      className="py-12 md:py-16 bg-zinc-50 dark:bg-[#111]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold text-zinc-900 dark:text-white mb-6">Transformations</h2>
        <CreativeUnderline />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {[1, 2].map((i) => (
            <div key={i} className="flex gap-2">
              <div className="flex-1 relative rounded-l-2xl overflow-hidden">
                <div className="absolute top-2 left-2 bg-black/50 text-white px-2 py-1 text-xs rounded z-10">Before</div>
                <img src={`https://images.unsplash.com/photo-1512496015851-a90fb38ba796?auto=format&fit=crop&q=80&w=300&h=400&sig=${i}a`} alt="Clinical skin treatment before procedure result - SK Academy Chennai" loading="lazy" decoding="async" className="w-full h-full object-cover grayscale opacity-80" />
              </div>
              <div className="flex-1 relative rounded-r-2xl overflow-hidden">
                <div className="absolute top-2 right-2 bg-gold-metallic text-white px-2 py-1 text-xs rounded z-10">After</div>
                <img src={`https://images.unsplash.com/photo-1512496015851-a90fb38ba796?auto=format&fit=crop&q=80&w=300&h=400&sig=${i}b`} alt="Clinical skin treatment after procedure result - SK Academy Chennai" loading="lazy" decoding="async" className="w-full h-full object-cover" />
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
    "LAPT UK Accredited",
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
      className="py-12 md:py-16 bg-white dark:bg-[#09090B]"
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
              className="px-6 sm:px-8 py-3 sm:py-4 bg-gold-bronze/10 dark:bg-gold-metallic/10 border border-gold-bronze/30 dark:border-gold-metallic/30 rounded-full font-bold text-sm sm:text-base text-gold-bronze dark:text-gold-champagne shadow-[0_0_15px_rgba(212,175,55,0.15)] hover:shadow-[0_0_30px_rgba(212,175,55,0.3)] transition-shadow flex items-center gap-2 sm:gap-3 cursor-default whitespace-nowrap"
            >
              <ShieldCheck className="w-4 sm:w-5 h-4 sm:h-5" /> {acc}
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
    "/Acadmey/DSC05892.JPG",
    "/Acadmey/DSC05897.JPG",
    "/Acadmey/DSC05912.JPG"
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
      className="pt-12 pb-4 md:pt-16 md:pb-8 bg-zinc-50 dark:bg-[#111]"
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
      className="py-12 md:py-16 bg-white dark:bg-[#09090B]"
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
      className="py-12 md:py-16 bg-white dark:bg-[#09090B]"
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
      className="pt-4 pb-4 md:pt-8 md:pb-8 bg-white dark:bg-[#09090B] relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-gold-bronze/5 dark:bg-gold-metallic/5" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="bg-zinc-50 dark:bg-[#111] rounded-3xl p-8 md:p-12 lg:p-16 border border-zinc-200 dark:border-zinc-800 shadow-2xl flex flex-col items-center gap-12">

          <div className="flex-1 text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold-bronze/10 dark:bg-gold-metallic/10 text-gold-bronze dark:text-gold-champagne font-bold text-sm mb-6 border border-gold-bronze/20 dark:border-gold-metallic/20">
              <Sparkles className="w-4 h-4" />
              SK Korean Technologies
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-zinc-900 dark:text-white mb-6 leading-tight">
              Premium Aesthetic <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-bronze to-gold-metallic">Machines & Equipment</span>
            </h2>
            <p className="text-lg text-zinc-600 dark:text-zinc-400 mb-8 max-w-2xl mx-auto leading-relaxed">
              We provide world-class, advanced aesthetic machines for clinics, salons, and beauty professionals. Upgrade your practice with cutting-edge technology directly from industry leaders.
            </p>
            <button
              onClick={() => window.open('https://skkoreantechnologies.com/', '_blank')}
              className="bg-gold-gradient text-zinc-900 shadow-[0_0_15px_rgba(212,175,55,0.4)] hover:shadow-[0_0_25px_rgba(212,175,55,0.6)] hover:scale-105 active:scale-95 transition-all py-3 px-6 sm:px-8 text-base sm:text-lg font-extrabold flex items-center justify-center gap-2 rounded-[1.5px] mx-auto uppercase tracking-wide w-full sm:w-auto"
            >
              Explore Machines <ArrowRight className="w-5 h-5" />
            </button>
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
      className="pt-4 pb-12 md:pt-8 md:pb-16 bg-zinc-50 dark:bg-[#111]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-zinc-900 dark:text-white mb-6">Get In Touch</h2>
          <CreativeUnderline />
          <p className="text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto">Ready to start your beauty career? Contact us today to learn more about our courses and enrollment process.</p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-6">
            <div className="p-6 rounded-2xl bg-white dark:bg-[#09090B] border border-zinc-200 dark:border-zinc-800 shadow-md">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-gold-bronze/10 dark:bg-gold-metallic/10 flex items-center justify-center border border-gold-bronze/20 dark:border-gold-metallic/20 flex-shrink-0">
                  <MapPin className="w-5 h-5 text-gold-metallic" />
                </div>
                <div>
                  <h4 className="font-bold text-lg text-zinc-900 dark:text-white">Visit Our Academy</h4>
                  <p className="text-zinc-600 dark:text-zinc-400 mt-1 leading-relaxed text-sm">
                    <span className="font-semibold text-zinc-800 dark:text-zinc-200">SK Beauty verse pvt.ltd</span><br />
                    48/102, Angalamman Kovil st, Choolai, Chennai - 600 012
                  </p>
                </div>
              </div>
            </div>

            {/* Admissions Card */}
            <div className="p-6 rounded-2xl bg-white dark:bg-[#09090B] border border-zinc-200 dark:border-zinc-800 shadow-md relative overflow-hidden group hover:border-gold-metallic/50 transition-all">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-gold-bronze/10 dark:bg-gold-metallic/10 flex items-center justify-center border border-gold-bronze/20 dark:border-gold-metallic/20 flex-shrink-0">
                  <GraduationCap className="w-5 h-5 text-gold-metallic" />
                </div>
                <div className="flex-1">
                  <span className="inline-block px-2.5 py-0.5 rounded-full text-xs font-semibold bg-gold-bronze/10 text-gold-bronze dark:text-gold-champagne mb-1.5 uppercase tracking-wider">
                    Admissions & Enquiries
                  </span>
                  <h4 className="font-bold text-lg text-zinc-900 dark:text-white mb-2">Admissions Desk</h4>
                  <div className="space-y-2 text-sm text-zinc-600 dark:text-zinc-400">
                    <div>
                      <a href="tel:+918610345830" className="inline-flex items-center gap-2 hover:text-gold-metallic transition-colors font-medium">
                        <Phone className="w-4 h-4 text-gold-metallic" />
                        <span>+91 86103 45830</span>
                      </a>
                    </div>
                    <div>
                      <a href="mailto:skbeautyverse@gmail.com" className="inline-flex items-center gap-2 hover:text-gold-metallic transition-colors font-medium">
                        <Mail className="w-4 h-4 text-gold-metallic" />
                        <span>skbeautyverse@gmail.com</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Complaints & Grievances Card */}
            <div className="p-6 rounded-2xl bg-white dark:bg-[#09090B] border border-zinc-200 dark:border-zinc-800 shadow-md relative overflow-hidden group hover:border-gold-metallic/50 transition-all">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-gold-bronze/10 dark:bg-gold-metallic/10 flex items-center justify-center border border-gold-bronze/20 dark:border-gold-metallic/20 flex-shrink-0">
                  <Headphones className="w-5 h-5 text-gold-metallic" />
                </div>
                <div className="flex-1">
                  <span className="inline-block px-2.5 py-0.5 rounded-full text-xs font-semibold bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 mb-1.5 uppercase tracking-wider">
                    Student Support & Resolution
                  </span>
                  <h4 className="font-bold text-lg text-zinc-900 dark:text-white mb-2">Complaints & Grievances</h4>
                  <div className="space-y-2 text-sm text-zinc-600 dark:text-zinc-400">
                    <div>
                      <a href="tel:+917448885802" className="inline-flex items-center gap-2 hover:text-gold-metallic transition-colors font-medium">
                        <Phone className="w-4 h-4 text-gold-metallic" />
                        <span>+91 744 888 5802</span>
                      </a>
                    </div>
                    <div>
                      <a href="mailto:complaints.skbeautyverse@gmail.com" className="inline-flex items-center gap-2 hover:text-gold-metallic transition-colors font-medium">
                        <Mail className="w-4 h-4 text-gold-metallic" />
                        <span>complaints.skbeautyverse@gmail.com</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-[#09090B] p-8 rounded-3xl shadow-xl border border-zinc-100 dark:border-zinc-900">
            <h3 className="text-2xl font-bold mb-6">Send a Message</h3>
            <form className="space-y-4" onSubmit={(e) => {
              e.preventDefault();
              const formData = new FormData(e.currentTarget);
              const dept = formData.get('department') === 'complaints' ? 'Complaints & Grievances' : 'Admissions & Enquiries';
              const targetNumber = formData.get('department') === 'complaints' ? '917448885802' : '918610345830';
              const name = formData.get('name');
              const email = formData.get('email');
              const message = formData.get('message');
              const text = `*Department:* ${dept}%0A*Name:* ${name}%0A*Email:* ${email}%0A*Message:* ${message}`;
              window.open(`https://wa.me/${targetNumber}?text=${text}`, '_blank');
            }}>
              <div>
                <label className="block text-xs font-semibold text-zinc-500 uppercase tracking-wider mb-2">Department</label>
                <select
                  name="department"
                  defaultValue="admissions"
                  className="w-full px-4 py-3 rounded-xl bg-zinc-50 dark:bg-[#111] border border-zinc-200 dark:border-zinc-800 focus:outline-none focus:border-gold-metallic transition-colors text-zinc-900 dark:text-white"
                >
                  <option value="admissions">Course Admissions & Enquiries</option>
                  <option value="complaints">Complaints & Grievances</option>
                </select>
              </div>
              <div>
                <label className="block text-xs font-semibold text-zinc-500 uppercase tracking-wider mb-2">Your Name</label>
                <input name="name" type="text" required placeholder="Your Name" className="w-full px-4 py-3 rounded-xl bg-zinc-50 dark:bg-[#111] border border-zinc-200 dark:border-zinc-800 focus:outline-none focus:border-gold-metallic transition-colors" />
              </div>
              <div>
                <label className="block text-xs font-semibold text-zinc-500 uppercase tracking-wider mb-2">Your Email</label>
                <input name="email" type="email" required placeholder="Your Email" className="w-full px-4 py-3 rounded-xl bg-zinc-50 dark:bg-[#111] border border-zinc-200 dark:border-zinc-800 focus:outline-none focus:border-gold-metallic transition-colors" />
              </div>
              <div>
                <label className="block text-xs font-semibold text-zinc-500 uppercase tracking-wider mb-2">Your Message</label>
                <textarea name="message" required placeholder="Write your message here..." rows={4} className="w-full px-4 py-3 rounded-xl bg-zinc-50 dark:bg-[#111] border border-zinc-200 dark:border-zinc-800 focus:outline-none focus:border-gold-metallic transition-colors"></textarea>
              </div>
              <button type="submit" className="w-full btn-primary py-4 justify-center text-lg">Submit Request</button>
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
      className="py-12 md:py-16 relative overflow-hidden bg-gold-gradient"
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

// 12. Instagram Profiles Section
export function InstagramProfilesSection() {
  const profiles = [
    {
      handle: "skkoreanaesthetictechnologies",
      name: "SK Korean Aesthetic Technologies",
      link: "https://www.instagram.com/skkoreanaesthetictechnologies/",
      bio: "Premium Korean aesthetic machines, clinical equipment, and advanced technologies."
    },
    {
      handle: "skbeautyverseacademy",
      name: "SK International Institute of Skills",
      link: "https://www.instagram.com/skbeautyverseacademy/",
      bio: "Learn professional makeup and aesthetic skills."
    }
  ];

  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true, margin: "-100px" }}
      className="py-12 md:py-16 bg-white dark:bg-[#09090B]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold text-zinc-900 dark:text-white mb-6">Follow Us on Instagram</h2>
        <CreativeUnderline />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12 max-w-4xl mx-auto">
          {profiles.map((profile, idx) => (
            <motion.a
              href={profile.link}
              target="_blank"
              rel="noopener noreferrer"
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.2 }}
              viewport={{ once: true }}
              className="group block p-8 rounded-3xl border-2 border-transparent hover:border-gold-metallic bg-zinc-50 dark:bg-zinc-900 shadow-lg hover:shadow-2xl transition-all duration-300 relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 opacity-80" />
              <div className="flex flex-col items-center gap-4">
                <div className="w-20 h-20 rounded-full bg-gradient-to-tr from-orange-500 via-pink-500 to-purple-500 p-1">
                  <div className="w-full h-full rounded-full bg-white dark:bg-zinc-900 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-pink-500 w-10 h-10"><rect width="20" height="20" x="2" y="2" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" x2="17.51" y1="6.5" y2="6.5" /></svg>
                  </div>
                </div>
                <div>
                  <h3 className="font-bold text-xl text-zinc-900 dark:text-white group-hover:text-gold-bronze dark:group-hover:text-gold-metallic transition-colors">{profile.name}</h3>
                  <p className="text-sm font-medium text-zinc-500 mb-4">@{profile.handle}</p>
                  <p className="text-zinc-600 dark:text-zinc-400 text-sm mb-6 max-w-xs mx-auto">{profile.bio}</p>
                </div>
                <span className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 font-bold text-sm hover:scale-105 transition-transform">
                  Follow <ArrowRight className="w-4 h-4" />
                </span>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </motion.section>
  );
}

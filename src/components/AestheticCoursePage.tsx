import { useEffect } from 'react';
import Header from './Header';
import Footer from './Footer';

import { CreativeUnderline } from './NewSections';
import { CheckCircle, GraduationCap, Sparkles, BookOpen, ArrowLeft } from 'lucide-react';

export default function AestheticCoursePage({ isDark, toggleTheme, onNavigate }: { isDark: boolean, toggleTheme: () => void, onNavigate: (page: string) => void }) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const syllabus = [
    {
      title: "Skin Science & Fundamentals",
      icon: <BookOpen className="w-6 h-6" />,
      desc: "Master the foundations of aesthetic treatments and skin science.",
      items: ["Introduction to Aesthetics", "Safety & Hygiene Protocols", "Client Consultation & Handling", "Skin Anatomy & Functions", "Skin Types & Skin Analysis", "Common Skin Conditions", "Professional Skincare Routine", "18+ Professional Serum Knowledge"]
    },
    {
      title: "Advanced Facial Treatments",
      icon: <Sparkles className="w-6 h-6" />,
      desc: "Learn to perform highly requested advanced facial procedures.",
      items: ["Hydra Facial", "Oxygen Facial", "Medi Facial", "Cryo Facial", "Vampire Facial (Theory)", "Professional Facial Protocols"]
    },
    {
      title: "Mesotherapy & Rejuvenation",
      icon: <BookOpen className="w-6 h-6" />,
      desc: "Skin rejuvenation techniques using modern equipment.",
      items: ["Mesotherapy Techniques", "Electroporation", "Microneedling", "PRP & GFC Basics", "Mechanical Exfoliation", "Dermaplaning", "Microdermabrasion", "Body Polishing"]
    },
    {
      title: "Chemical Peel Treatments",
      icon: <BookOpen className="w-6 h-6" />,
      desc: "Master acid-based exfoliation treatments for various skin concerns.",
      items: ["Client Assessment & Peel Selection", "Peel Safety & Procedures", "Salicylic, Glycolic, TCA Peels", "Yellow, Black, Pumpkin, Party Peels", "Body Peel", "20+ Professional Peel Knowledge"]
    },
    {
      title: "Laser & Advanced Technologies",
      icon: <BookOpen className="w-6 h-6" />,
      desc: "Operate high-end aesthetic clinical machines safely and effectively.",
      items: ["Laser Fundamentals", "Pico / Q-Switch & Diode Laser", "Laser Hair & Tattoo Removal", "Carbon Peel Facial", "Machine Handling & Safety", "AI Face Analysis & Light Therapy", "High Frequency, Galvanic, Ultrasonic", "Wart & Mole Removal, Ear Piercing"]
    },
    {
      title: "Scar, Pigmentation & Body",
      icon: <BookOpen className="w-6 h-6" />,
      desc: "Advanced therapeutic treatments for severe skin and body concerns.",
      items: ["Acne Scar & Stretch Mark Reduction", "Melasma & Pigmentation Treatment", "Dark Circle & Neck Treatment", "Anti-Acne Therapy", "Body Contouring & Inch Loss", "EMS, RF, 40K Cavitation", "Suction, Lymphatic & Heat Blanket Therapy"]
    }
  ];

  return (
    <div className={`min-h-screen ${isDark ? 'dark bg-[#09090B] text-zinc-50' : 'bg-white text-zinc-900'} font-sans transition-colors duration-300 relative pb-24`}>
      <Header isDark={isDark} toggleTheme={toggleTheme} onNavigate={onNavigate} />
      
      {/* Hero Section */}
      <div className="relative pt-32 md:pt-40 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.03] dark:opacity-[0.05] pointer-events-none"></div>
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gold-metallic/20 blur-[120px] rounded-full pointer-events-none opacity-50"></div>
        
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <button 
            onClick={() => onNavigate('home')}
            className="mb-8 inline-flex items-center gap-2 text-zinc-600 dark:text-zinc-400 hover:text-gold-metallic dark:hover:text-gold-metallic transition-colors group"
          >
            <div className="p-2 rounded-full bg-zinc-100 dark:bg-zinc-800 group-hover:bg-gold-metallic/10 transition-colors">
              <ArrowLeft className="w-5 h-5" />
            </div>
            <span className="font-bold">Back to Home</span>
          </button>

          <div className="text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold-bronze/10 dark:bg-gold-metallic/10 text-gold-bronze dark:text-gold-champagne font-bold text-xs sm:text-sm mb-6 border border-gold-bronze/20 dark:border-gold-metallic/20 backdrop-blur-sm">
              <GraduationCap className="w-4 h-4" />
              LAPT UK CERTIFIED
            </div>
            
            <h1 className="text-5xl md:text-7xl font-extrabold mb-6 tracking-tight text-zinc-900 dark:text-white">
              Aesthetic <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-bronze to-gold-metallic">Course</span>
            </h1>
            <CreativeUnderline />
            
            <h2 className="text-xl md:text-2xl font-medium text-zinc-600 dark:text-zinc-400 mt-8 max-w-3xl mx-auto leading-relaxed">
              Master Advanced Aesthetic Treatments with International Certification.
            </h2>
            
            <div className="mt-10 flex flex-wrap justify-center gap-4 text-sm font-bold text-zinc-700 dark:text-zinc-300">
              <span className="px-5 py-2.5 bg-white dark:bg-zinc-900 rounded-full border border-zinc-200 dark:border-zinc-800 shadow-sm flex items-center gap-2"><Sparkles className="w-4 h-4 text-gold-metallic"/> 100% Practical</span>
              <span className="px-5 py-2.5 bg-white dark:bg-zinc-900 rounded-full border border-zinc-200 dark:border-zinc-800 shadow-sm flex items-center gap-2"><CheckCircle className="w-4 h-4 text-gold-metallic"/> Live Patient Practice</span>
              <span className="px-5 py-2.5 bg-white dark:bg-zinc-900 rounded-full border border-zinc-200 dark:border-zinc-800 shadow-sm flex items-center gap-2"><GraduationCap className="w-4 h-4 text-gold-metallic"/> LAPT UK Accredited</span>
            </div>
          </div>
        </div>
      </div>

      <main className="pb-16 relative">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="prose prose-lg dark:prose-invert max-w-none text-zinc-600 dark:text-zinc-400 leading-relaxed space-y-6 text-center md:text-left bg-zinc-50 dark:bg-[#111] p-8 rounded-3xl border border-zinc-200 dark:border-zinc-800 shadow-sm">
            <p>
              Our Aesthetic Course is designed for aspiring beauty professionals, salon owners, doctors, and skincare enthusiasts who want to build a successful career in the rapidly growing aesthetics industry. This comprehensive program combines in-depth theoretical knowledge with intensive hands-on practical training, enabling students to confidently perform advanced skin and aesthetic treatments.
            </p>
            <p>
              Accredited by <strong>LAPT UK</strong>, the course follows international standards and is delivered by experienced Master Trainers. From skin analysis and facial treatments to chemical peels, lasers, mesotherapy, and body contouring, you'll gain the practical skills and confidence required to excel in professional aesthetic practice.
            </p>
          </div>

          {/* Highlights Bento Grid */}
          <div className="mt-16">
            <h3 className="text-3xl font-bold mb-8 flex items-center gap-3">
              <Sparkles className="text-gold-metallic" /> Course Highlights
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {[
                "Internationally Accredited by LAPT UK",
                "Certificate Valid in 192+ Countries",
                "Complete Hands-on Practical Training",
                "Live Client Demonstrations",
                "Expert Master Trainers",
                "Latest Aesthetic Machines & Equipment",
                "Lifetime Student Support",
                "Business Setup Guidance",
                "Job Placement Assistance",
                "Vendor & Product Knowledge",
                "Internship Opportunity",
                "International Certification upon Completion"
              ].map((highlight, idx) => (
                <div key={idx} className="bg-white dark:bg-zinc-900 p-6 rounded-2xl border border-zinc-200 dark:border-zinc-800 flex items-start gap-3 hover:border-gold-metallic/30 hover:shadow-lg transition-all group">
                  <CheckCircle className="w-6 h-6 text-gold-bronze group-hover:scale-110 transition-transform shrink-0" />
                  <span className="font-bold text-zinc-800 dark:text-zinc-200">{highlight}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Curriculum */}
          <div className="mt-24">
            <div className="text-center mb-12">
              <h3 className="text-4xl font-extrabold mb-4">Course Syllabus</h3>
              <p className="text-zinc-500">Everything you will learn in this intensive program.</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {syllabus.map((item, idx) => (
                <div key={idx} className="relative group p-8 rounded-3xl bg-zinc-50 dark:bg-[#111] border border-zinc-200 dark:border-zinc-800 hover:border-gold-metallic/50 hover:shadow-[0_10px_30px_rgba(212,175,55,0.1)] transition-all duration-500 hover:-translate-y-1 overflow-hidden z-10">
                  {/* Watermark Number */}
                  <div className="absolute -right-4 -bottom-6 text-[140px] font-black text-zinc-900/10 dark:text-white/10 group-hover:text-gold-metallic/20 transition-colors z-0 select-none pointer-events-none leading-none">
                    {String(idx + 1).padStart(2, '0')}
                  </div>
                  
                  <div className="relative z-10">
                    <div className="w-12 h-12 rounded-2xl bg-gold-metallic/10 flex items-center justify-center text-gold-metallic mb-6 group-hover:scale-110 transition-transform">
                      {item.icon}
                    </div>
                    <h4 className="text-2xl font-bold mb-3 text-zinc-900 dark:text-white group-hover:text-gold-bronze dark:group-hover:text-gold-champagne transition-colors">
                      {item.title}
                    </h4>
                    <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-6">{item.desc}</p>
                    <ul className="space-y-3">
                      {item.items.map((listItem, lIdx) => (
                        <li key={lIdx} className="flex items-start gap-2 text-zinc-700 dark:text-zinc-300 font-medium text-sm">
                          <div className="w-1.5 h-1.5 rounded-full bg-gold-metallic mt-1.5 shrink-0" />
                          {listItem}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-24 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-zinc-50 to-white dark:from-[#111] dark:to-zinc-900 p-10 rounded-3xl border border-zinc-200 dark:border-zinc-800 shadow-md">
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-3 text-zinc-900 dark:text-white">
                <GraduationCap className="text-gold-metallic w-8 h-8" /> Who Can Join?
              </h3>
              <ul className="space-y-4">
                {[
                  "Beginners with no prior experience",
                  "Beauticians & Makeup Artists",
                  "Salon & Spa Owners",
                  "Doctors & Healthcare Professionals",
                  "Cosmetologists & Beauty Entrepreneurs",
                  "Students looking for a career in Aesthetics",
                  "Anyone passionate about professional skincare"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-zinc-700 dark:text-zinc-300 font-medium">
                    <div className="w-2 h-2 rounded-full bg-zinc-300 dark:bg-zinc-700" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-gradient-to-br from-zinc-50 to-white dark:from-[#111] dark:to-zinc-900 p-10 rounded-3xl border border-zinc-200 dark:border-zinc-800 shadow-md">
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-3 text-zinc-900 dark:text-white">
                <Sparkles className="text-gold-metallic w-8 h-8" /> Career Opportunities
              </h3>
              <ul className="space-y-4">
                {[
                  "Aesthetic Practitioner",
                  "Skin Care Specialist",
                  "Laser Technician",
                  "Hydra Facial & Chemical Peel Specialist",
                  "Beauty Clinic Consultant",
                  "Medical Aesthetic Assistant",
                  "Freelance Aesthetic Professional",
                  "Salon or Clinic Owner",
                  "Beauty Trainer"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-zinc-700 dark:text-zinc-300 font-medium">
                    <div className="w-2 h-2 rounded-full bg-zinc-300 dark:bg-zinc-700" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

        </div>
      </main>
      
      <Footer />

      {/* Sticky Bottom Enroll Bar */}
      <div className="fixed bottom-0 left-0 w-full z-50 bg-white/80 dark:bg-[#09090B]/80 backdrop-blur-xl border-t border-gold-metallic/20 p-4 shadow-[0_-10px_40px_rgba(0,0,0,0.1)]">
        <div className="max-w-5xl mx-auto flex items-center justify-between gap-4">
          <div className="hidden sm:block">
            <h4 className="font-extrabold text-zinc-900 dark:text-white text-lg">Aesthetic Course</h4>
            <p className="text-sm text-zinc-600 dark:text-zinc-400 font-medium">LAPT UK Certified • International Diploma</p>
          </div>
          <button 
            onClick={() => window.open('https://wa.me/918610345830?text=Hello%20SK%20Academy,%20I%20would%20like%20to%20enroll%20in%20the%20Aesthetic%20Course.', '_blank')}
            className="w-full sm:w-auto px-8 py-3.5 bg-gold-gradient text-zinc-900 font-extrabold rounded-[1.5px] hover:scale-105 transition-all shadow-lg shadow-gold-metallic/20 text-center"
          >
            Enroll Now on WhatsApp
          </button>
        </div>
      </div>

    </div>
  );
}

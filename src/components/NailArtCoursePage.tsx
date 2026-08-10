import { useEffect } from 'react';
import Header from './Header';
import Footer from './Footer';

import { CreativeUnderline } from './NewSections';
import { CheckCircle, GraduationCap, Sparkles, BookOpen, ArrowLeft } from 'lucide-react';

export default function NailArtCoursePage({ isDark, toggleTheme, onNavigate }: { isDark: boolean, toggleTheme: () => void, onNavigate: (page: string) => void }) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const syllabus = [
    {
      title: "Basic Foundation",
      icon: <BookOpen className="w-6 h-6" />,
      desc: "Master the essentials of nail care and preparation.",
      items: ["Nail Anatomy & Shapes", "Product Knowledge & Machine Handling", "Dry Manicure & Pedicure", "Nail Preparation & Hand Care", "Gel Polish Application & Removal"]
    },
    {
      title: "Types of Extensions",
      icon: <Sparkles className="w-6 h-6" />,
      desc: "Learn to build professional nail extensions using various techniques.",
      items: ["Press-on, Acrylic & Hard Gel Nails", "Inlay, Overlay & Inbuild Techniques", "Dip Powder & Acrylic Refill", "Gel-X & Poly Gel (Inbuild) Extensions", "Toe Nail Extensions"]
    },
    {
      title: "Nail Arts - Level 1",
      icon: <BookOpen className="w-6 h-6" />,
      desc: "Fundamental nail art techniques for elegant designs.",
      items: ["Top Coat Types & Polka Dot Art (3 Types)", "Embossed Art (2 Types) & Sweater Art", "Marble, Bloom, & Flash Ink Art (2 Types)", "Chrome Nails (3 Types)"]
    },
    {
      title: "Nail Arts - Level 2",
      icon: <BookOpen className="w-6 h-6" />,
      desc: "Intermediate designs to elevate your artistry.",
      items: ["Tape, Mylar, & Line Art", "Spider Gel Art (2 Types) & Spiral Art", "French Nails (4 Types) & Cat Eye Nails (4 Types)", "Optical Illusion Art (2 Types) & Sticker Art"]
    },
    {
      title: "Nail Arts - Levels 3 & 4",
      icon: <Sparkles className="w-6 h-6" />,
      desc: "Advanced, highly sought-after 3D & trend-setting designs.",
      items: ["Transfer Foil, Mermaid, & Butterfly Art", "Aquarelle, Animal Print & Rose Art", "Neon Pigment, Sugar & Pop Art Nails", "Photo Art, Aqua Nails & 3D, 5D, 7D Art"]
    },
    {
      title: "Salon Knowledge",
      icon: <GraduationCap className="w-6 h-6" />,
      desc: "Everything you need to run a successful nail business.",
      items: ["Client Consultation & Hygiene Protocols", "Tool Sterilization & Service Pricing", "Social Media Marketing & Client Retention", "Business Setup & Time Management"]
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
            onClick={() => onNavigate('courses')}
            className="mb-8 inline-flex items-center gap-2 text-zinc-600 dark:text-zinc-400 hover:text-gold-metallic dark:hover:text-gold-metallic transition-colors group"
          >
            <div className="p-2 rounded-full bg-zinc-100 dark:bg-zinc-800 group-hover:bg-gold-metallic/10 transition-colors">
              <ArrowLeft className="w-5 h-5" />
            </div>
            <span className="font-bold">Back to Courses</span>
          </button>

          <div className="text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold-bronze/10 dark:bg-gold-metallic/10 text-gold-bronze dark:text-gold-champagne font-bold text-xs sm:text-sm mb-6 border border-gold-bronze/20 dark:border-gold-metallic/20 backdrop-blur-sm">
              <GraduationCap className="w-4 h-4" />
              PROFESSIONAL DIPLOMA
            </div>
            
            <h1 className="text-5xl md:text-7xl font-extrabold mb-6 tracking-tight text-zinc-900 dark:text-white">
              Nail Art <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-bronze to-gold-metallic">Extension Course</span>
            </h1>
            <CreativeUnderline />
            
            <h2 className="text-xl md:text-2xl font-medium text-zinc-600 dark:text-zinc-400 mt-8 max-w-3xl mx-auto leading-relaxed">
              Become a Professional Nail Artist in just 7 Days.
            </h2>
            
            <div className="mt-10 flex flex-wrap justify-center gap-4 text-sm font-bold text-zinc-700 dark:text-zinc-300">
              <span className="px-5 py-2.5 bg-white dark:bg-zinc-900 rounded-full border border-zinc-200 dark:border-zinc-800 shadow-sm flex items-center gap-2"><Sparkles className="w-4 h-4 text-gold-metallic"/> 7-Day Masterclass</span>
              <span className="px-5 py-2.5 bg-white dark:bg-zinc-900 rounded-full border border-zinc-200 dark:border-zinc-800 shadow-sm flex items-center gap-2"><CheckCircle className="w-4 h-4 text-gold-metallic"/> Hands-On Training</span>
              <span className="px-5 py-2.5 bg-white dark:bg-zinc-900 rounded-full border border-zinc-200 dark:border-zinc-800 shadow-sm flex items-center gap-2"><GraduationCap className="w-4 h-4 text-gold-metallic"/> International Certificate</span>
            </div>
          </div>
        </div>
      </div>

      <main className="pb-16 relative">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="prose prose-lg dark:prose-invert max-w-none text-zinc-600 dark:text-zinc-400 leading-relaxed space-y-6 text-center md:text-left bg-zinc-50 dark:bg-[#111] p-8 rounded-3xl border border-zinc-200 dark:border-zinc-800 shadow-sm">
            <p>
              Transform your creativity into a successful career with our 7-Day Nail Art Extension Master Class. Learn everything from nail fundamentals to advanced nail art techniques through hands-on practical training.
            </p>
            <p>
              From basic nail anatomy to advanced nail art and salon business management, you'll receive complete practical training using professional products and equipment. Whether your goal is to work in a salon, become a freelance nail artist, or start your own nail studio, this course provides the skills and confidence to succeed.
            </p>
          </div>

          {/* Highlights Bento Grid */}
          <div className="mt-16">
            <h3 className="text-3xl font-bold mb-8 flex items-center gap-3">
              <Sparkles className="text-gold-metallic" /> Course Highlights
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {[
                "7-Day Master Class",
                "Hands-on Practical Training",
                "International Certificate (180+ Countries)",
                "Expert Trainers & Limited Batch Size",
                "Career & Business Guidance",
                "Lifetime Support"
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
                  "Beginners",
                  "Beauticians & Makeup Artists",
                  "Salon Owners & Beauty Professionals",
                  "Students & Entrepreneurs",
                  "Anyone passionate about nail artistry"
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
                  "Professional Nail Artist",
                  "Nail Extension Specialist",
                  "Nail Art Designer",
                  "Salon Nail Technician",
                  "Freelance Nail Artist",
                  "Nail Studio Owner & Trainer"
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
            <h4 className="font-extrabold text-zinc-900 dark:text-white text-lg">Nail Art Extension Course</h4>
            <p className="text-sm text-zinc-600 dark:text-zinc-400 font-medium">7-Day Masterclass • Professional Diploma</p>
          </div>
          <button 
            onClick={() => window.open('https://wa.me/918610345830?text=Hello%20SK%20Academy,%20I%20would%20like%20to%20enroll%20in%20the%20Nail%20Art%20Course.', '_blank')}
            className="w-full sm:w-auto px-8 py-3.5 bg-gold-gradient text-zinc-900 font-extrabold rounded-[1.5px] hover:scale-105 transition-all shadow-lg shadow-gold-metallic/20 text-center"
          >
            Enroll Now on WhatsApp
          </button>
        </div>
      </div>

    </div>
  );
}

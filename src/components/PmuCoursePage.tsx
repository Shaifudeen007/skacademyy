import { useEffect } from 'react';
import Header from './Header';
import Footer from './Footer';

import { CreativeUnderline } from './NewSections';
import { CheckCircle, GraduationCap, Sparkles, BookOpen, ArrowLeft } from 'lucide-react';

export default function PmuCoursePage({ isDark, toggleTheme, onNavigate }: { isDark: boolean, toggleTheme: () => void, onNavigate: (page: string) => void }) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className={`min-h-screen ${isDark ? 'dark bg-[#09090B] text-zinc-50' : 'bg-white text-zinc-900'} font-sans transition-colors duration-300`}>
      <Header isDark={isDark} toggleTheme={toggleTheme} onNavigate={onNavigate} />
      
      <main className="pt-24 md:pt-32 pb-16 relative">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <button 
            onClick={() => onNavigate('courses')}
            className="mb-8 inline-flex items-center gap-2 text-zinc-600 dark:text-zinc-400 hover:text-gold-metallic dark:hover:text-gold-metallic transition-colors group"
          >
            <div className="p-2 rounded-full bg-zinc-100 dark:bg-zinc-800 group-hover:bg-gold-metallic/10 transition-colors">
              <ArrowLeft className="w-5 h-5" />
            </div>
            <span className="font-bold">Back to Courses</span>
          </button>

          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-extrabold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-gold-bronze to-gold-metallic">
              PMU Course
            </h1>
            <h2 className="text-xl md:text-2xl font-bold text-zinc-700 dark:text-zinc-300 mb-6">
              Become a Certified Permanent Makeup (PMU) Artist
            </h2>
            <CreativeUnderline />
          </div>

          <div className="prose prose-lg dark:prose-invert max-w-none text-zinc-600 dark:text-zinc-400 leading-relaxed space-y-6">
            <p className="text-lg">
              Our Permanent Makeup (PMU) Course is designed for aspiring beauty professionals who want to master the art of semi-permanent cosmetic enhancements. This intensive program combines detailed theory with extensive hands-on practical training, equipping students with the skills to perform industry-leading PMU procedures with confidence and precision.
            </p>
            <p className="text-lg">
              Accredited by <strong>LAPT UK</strong>, the course is delivered by experienced Master Trainers and follows international standards. From eyebrow enhancement and lip pigmentation to BB Glow, scalp micropigmentation, lash and brow treatments, you'll gain real-world expertise using professional tools, machines, and techniques.
            </p>
          </div>

          {/* Highlights */}
          <div className="mt-16 bg-zinc-50 dark:bg-[#111] rounded-3xl p-8 border border-zinc-200 dark:border-zinc-800 shadow-xl">
            <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
              <Sparkles className="text-gold-metallic" /> Course Highlights
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                "LAPT UK International Accreditation",
                "International Certificate Valid in 192+ Countries",
                "Complete Hands-on Practical Training",
                "Live Model Practice",
                "Training by Certified Master Trainers",
                "Latest PMU Machines & Tools",
                "Professional Product Knowledge",
                "Vendor Support & Guidance",
                "Lifetime Student Support",
                "Business Startup Guidance",
                "Internship Opportunity",
                "Job Placement Assistance",
                "International Student ID Card & Welcome Letter"
              ].map((highlight, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-gold-bronze shrink-0 mt-0.5" />
                  <span className="font-medium text-zinc-700 dark:text-zinc-300">{highlight}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Curriculum */}
          <div className="mt-16">
            <h3 className="text-3xl font-bold mb-8 text-center">What You'll Learn</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              
              <div className="glass-card p-6 rounded-2xl border border-zinc-200 dark:border-zinc-800">
                <h4 className="text-xl font-bold mb-4 text-gold-bronze dark:text-gold-champagne flex items-center gap-2">
                  <BookOpen className="w-5 h-5" /> Microblading & Shading
                </h4>
                <ul className="space-y-2 text-zinc-600 dark:text-zinc-400">
                  <li>• Brow Anatomy, Mapping & Measurements</li>
                  <li>• Types of Blades & Microblading Tools</li>
                  <li>• Precision Hair Stroke Technique</li>
                  <li>• Ombré Brows & Combination Brows</li>
                  <li>• Powder Brows & Feather Brows</li>
                  <li>• Micro Shading Techniques</li>
                </ul>
              </div>

              <div className="glass-card p-6 rounded-2xl border border-zinc-200 dark:border-zinc-800">
                <h4 className="text-xl font-bold mb-4 text-gold-bronze dark:text-gold-champagne flex items-center gap-2">
                  <BookOpen className="w-5 h-5" /> Lip & Scalp Pigmentation
                </h4>
                <ul className="space-y-2 text-zinc-600 dark:text-zinc-400">
                  <li>• Lip Blush & Lip Neutralization</li>
                  <li>• Lip Liner & Pigment Selection</li>
                  <li>• Lip Product Knowledge</li>
                  <li>• Scalp Pigmentation Theory</li>
                  <li>• Scalp Micropigmentation Techniques</li>
                </ul>
              </div>

              <div className="glass-card p-6 rounded-2xl border border-zinc-200 dark:border-zinc-800">
                <h4 className="text-xl font-bold mb-4 text-gold-bronze dark:text-gold-champagne flex items-center gap-2">
                  <BookOpen className="w-5 h-5" /> BB Glow Treatment
                </h4>
                <ul className="space-y-2 text-zinc-600 dark:text-zinc-400">
                  <li>• BB Glow Theory & Foundation</li>
                  <li>• Dr. Pen Knowledge & Booster Serums</li>
                  <li>• Blush, Contour & Highlight Techniques</li>
                  <li>• Light Therapy</li>
                </ul>
              </div>

              <div className="glass-card p-6 rounded-2xl border border-zinc-200 dark:border-zinc-800">
                <h4 className="text-xl font-bold mb-4 text-gold-bronze dark:text-gold-champagne flex items-center gap-2">
                  <BookOpen className="w-5 h-5" /> Lash, Brow & Hydra Lips
                </h4>
                <ul className="space-y-2 text-zinc-600 dark:text-zinc-400">
                  <li>• Lash Lamination & Lifting</li>
                  <li>• Brow Lamination & Tinting</li>
                  <li>• Hydra Lips Theory & Procedure</li>
                  <li>• Professional Serum & Product Knowledge</li>
                </ul>
              </div>

              <div className="glass-card p-6 rounded-2xl border border-zinc-200 dark:border-zinc-800 md:col-span-2">
                <h4 className="text-xl font-bold mb-4 text-gold-bronze dark:text-gold-champagne flex items-center gap-2">
                  <BookOpen className="w-5 h-5" /> Professional Training & Business Support
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <ul className="space-y-2 text-zinc-600 dark:text-zinc-400">
                    <li>• Client Consultation & Skin Assessment</li>
                    <li>• Machine Handling, Safety & Hygiene</li>
                    <li>• Hands-on Practice with Learning Materials</li>
                  </ul>
                  <ul className="space-y-2 text-zinc-600 dark:text-zinc-400">
                    <li>• Vendor Support & Product Selection</li>
                    <li>• Online & Offline Product Suppliers</li>
                    <li>• Business Setup Tips & Guidance</li>
                  </ul>
                </div>
              </div>

            </div>
          </div>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-zinc-50 dark:bg-[#111] p-8 rounded-3xl border border-zinc-200 dark:border-zinc-800">
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <GraduationCap className="text-gold-metallic" /> Who Can Join?
              </h3>
              <p className="text-zinc-600 dark:text-zinc-400 mb-4">This course is perfect for:</p>
              <ul className="space-y-2 text-zinc-600 dark:text-zinc-400">
                <li>• Beginners with no prior experience</li>
                <li>• Beauticians & Makeup Artists</li>
                <li>• Salon & Spa Owners</li>
                <li>• Beauty Professionals & Cosmetologists</li>
                <li>• Entrepreneurs</li>
                <li>• Anyone looking to start a career in Permanent Makeup</li>
              </ul>
            </div>

            <div className="bg-zinc-50 dark:bg-[#111] p-8 rounded-3xl border border-zinc-200 dark:border-zinc-800">
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <Sparkles className="text-gold-metallic" /> Career Opportunities
              </h3>
              <p className="text-zinc-600 dark:text-zinc-400 mb-4">After completing the course, you can work as:</p>
              <ul className="space-y-2 text-zinc-600 dark:text-zinc-400">
                <li>• Certified PMU Artist</li>
                <li>• Microblading Specialist</li>
                <li>• Lip Blush & Brow Artist</li>
                <li>• Scalp Micropigmentation Expert</li>
                <li>• BB Glow Specialist</li>
                <li>• Lash & Brow Technician</li>
                <li>• Freelance PMU Professional</li>
                <li>• Beauty Studio Owner & Trainer</li>
              </ul>
            </div>
          </div>

          <div className="mt-16 bg-zinc-50 dark:bg-[#111] p-8 md:p-12 rounded-3xl border border-zinc-200 dark:border-zinc-800 shadow-xl text-center">
             <h3 className="text-3xl font-bold mb-6">Why Choose Our PMU Course?</h3>
             <p className="text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed max-w-3xl mx-auto">
               Our PMU training goes beyond learning techniques. We focus on developing your practical skills, client consultation abilities, and business knowledge so you can confidently start your own beauty business or work in leading salons and aesthetic clinics. With internationally recognized certification, expert mentorship, and lifetime support, you'll be fully prepared for a successful career in the permanent makeup industry.
             </p>
          </div>

          <div className="mt-16 text-center">
            <button 
              onClick={() => window.open('https://wa.me/918610345830', '_blank')}
              className="inline-flex items-center justify-center px-10 py-5 bg-gold-gradient text-white font-extrabold text-lg rounded-full shadow-[0_10px_30px_rgba(212,175,55,0.4)] hover:shadow-[0_10px_40px_rgba(212,175,55,0.6)] hover:scale-105 transition-all"
            >
              Enroll in PMU Course Now
            </button>
          </div>

        </div>
      </main>
      
      <Footer />
    </div>
  );
}

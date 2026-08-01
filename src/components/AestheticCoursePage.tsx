import { useEffect } from 'react';
import Header from './Header';
import Footer from './Footer';

import { CreativeUnderline } from './NewSections';
import { CheckCircle, GraduationCap, Sparkles, BookOpen, ArrowLeft } from 'lucide-react';

export default function AestheticCoursePage({ isDark, onNavigate }: { isDark: boolean, onNavigate: (page: string) => void }) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className={`min-h-screen ${isDark ? 'dark bg-[#09090B] text-zinc-50' : 'bg-white text-zinc-900'} font-sans transition-colors duration-300`}>
      <Header onNavigate={onNavigate} />
      
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
              Aesthetic Course
            </h1>
            <h2 className="text-xl md:text-2xl font-bold text-zinc-700 dark:text-zinc-300 mb-6">
              Master Advanced Aesthetic Treatments with International Certification
            </h2>
            <CreativeUnderline />
          </div>

          <div className="prose prose-lg dark:prose-invert max-w-none text-zinc-600 dark:text-zinc-400 leading-relaxed space-y-6">
            <p className="text-lg">
              Our Aesthetic Course is designed for aspiring beauty professionals, salon owners, doctors, and skincare enthusiasts who want to build a successful career in the rapidly growing aesthetics industry. This comprehensive program combines in-depth theoretical knowledge with intensive hands-on practical training, enabling students to confidently perform advanced skin and aesthetic treatments.
            </p>
            <p className="text-lg">
              Accredited by <strong>LAPT UK</strong>, the course follows international standards and is delivered by experienced Master Trainers. From skin analysis and facial treatments to chemical peels, lasers, mesotherapy, and body contouring, you'll gain the practical skills and confidence required to excel in professional aesthetic practice.
            </p>
          </div>

          {/* Highlights */}
          <div className="mt-16 relative bg-gold-metallic/[0.03] dark:bg-[#0a0a0a] rounded-3xl p-8 border border-gold-metallic/50 shadow-[0_0_40px_rgba(212,175,55,0.2)] overflow-hidden before:absolute before:inset-0 before:bg-gold-gradient before:opacity-[0.05] before:pointer-events-none">
            <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
              <Sparkles className="text-gold-metallic" /> Course Highlights
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                "Internationally Accredited by LAPT UK",
                <>Certificate Valid in <span className="font-extrabold text-gold-bronze dark:text-gold-metallic bg-gold-metallic/10 px-1.5 py-0.5 rounded-md">192+ Countries</span></>,
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
              
              {/* Module 1 */}
              <div className="glass-card p-6 rounded-2xl border border-zinc-200 dark:border-zinc-800">
                <h4 className="text-xl font-bold mb-4 text-gold-bronze dark:text-gold-champagne flex items-center gap-2">
                  <BookOpen className="w-5 h-5" /> Skin Science & Fundamentals
                </h4>
                <ul className="space-y-2 text-zinc-600 dark:text-zinc-400">
                  <li>• Introduction to Aesthetics</li>
                  <li>• Safety & Hygiene Protocols</li>
                  <li>• Client Consultation & Handling</li>
                  <li>• Skin Anatomy & Functions</li>
                  <li>• Skin Types & Skin Analysis</li>
                  <li>• Common Skin Conditions</li>
                  <li>• Professional Skincare Routine</li>
                  <li>• 18+ Professional Serum Knowledge</li>
                </ul>
              </div>

              {/* Module 2 */}
              <div className="glass-card p-6 rounded-2xl border border-zinc-200 dark:border-zinc-800">
                <h4 className="text-xl font-bold mb-4 text-gold-bronze dark:text-gold-champagne flex items-center gap-2">
                  <BookOpen className="w-5 h-5" /> Advanced Facial Treatments
                </h4>
                <ul className="space-y-2 text-zinc-600 dark:text-zinc-400">
                  <li>• Hydra Facial</li>
                  <li>• Oxygen Facial</li>
                  <li>• Medi Facial</li>
                  <li>• Cryo Facial</li>
                  <li>• Vampire Facial (Theory)</li>
                  <li>• Professional Facial Protocols</li>
                </ul>
              </div>

              {/* Module 3 */}
              <div className="glass-card p-6 rounded-2xl border border-zinc-200 dark:border-zinc-800">
                <h4 className="text-xl font-bold mb-4 text-gold-bronze dark:text-gold-champagne flex items-center gap-2">
                  <BookOpen className="w-5 h-5" /> Mesotherapy & Rejuvenation
                </h4>
                <ul className="space-y-2 text-zinc-600 dark:text-zinc-400">
                  <li>• Mesotherapy Techniques</li>
                  <li>• Electroporation</li>
                  <li>• Microneedling</li>
                  <li>• PRP & GFC Basics</li>
                  <li>• Mechanical Exfoliation</li>
                  <li>• Dermaplaning</li>
                  <li>• Microdermabrasion</li>
                  <li>• Body Polishing</li>
                </ul>
              </div>

              {/* Module 4 */}
              <div className="glass-card p-6 rounded-2xl border border-zinc-200 dark:border-zinc-800">
                <h4 className="text-xl font-bold mb-4 text-gold-bronze dark:text-gold-champagne flex items-center gap-2">
                  <BookOpen className="w-5 h-5" /> Chemical Peel Treatments
                </h4>
                <ul className="space-y-2 text-zinc-600 dark:text-zinc-400">
                  <li>• Client Assessment & Peel Selection</li>
                  <li>• Peel Safety & Procedures</li>
                  <li>• Salicylic, Glycolic, TCA Peels</li>
                  <li>• Yellow, Black, Pumpkin, Party Peels</li>
                  <li>• Body Peel</li>
                  <li>• 20+ Professional Peel Knowledge</li>
                </ul>
              </div>

              {/* Module 5 */}
              <div className="glass-card p-6 rounded-2xl border border-zinc-200 dark:border-zinc-800">
                <h4 className="text-xl font-bold mb-4 text-gold-bronze dark:text-gold-champagne flex items-center gap-2">
                  <BookOpen className="w-5 h-5" /> Laser & Advanced Technologies
                </h4>
                <ul className="space-y-2 text-zinc-600 dark:text-zinc-400">
                  <li>• Laser Fundamentals</li>
                  <li>• Pico / Q-Switch & Diode Laser</li>
                  <li>• Laser Hair & Tattoo Removal</li>
                  <li>• Carbon Peel Facial</li>
                  <li>• Machine Handling & Safety</li>
                  <li>• AI Face Analysis & Light Therapy</li>
                  <li>• High Frequency, Galvanic, Ultrasonic</li>
                  <li>• Wart & Mole Removal, Ear Piercing</li>
                </ul>
              </div>
              
              {/* Module 6 */}
              <div className="glass-card p-6 rounded-2xl border border-zinc-200 dark:border-zinc-800">
                <h4 className="text-xl font-bold mb-4 text-gold-bronze dark:text-gold-champagne flex items-center gap-2">
                  <BookOpen className="w-5 h-5" /> Scar, Pigmentation & Body
                </h4>
                <ul className="space-y-2 text-zinc-600 dark:text-zinc-400">
                  <li>• Acne Scar & Stretch Mark Reduction</li>
                  <li>• Melasma & Pigmentation Treatment</li>
                  <li>• Dark Circle & Neck Treatment</li>
                  <li>• Anti-Acne Therapy</li>
                  <li>• Body Contouring & Inch Loss</li>
                  <li>• EMS, RF, 40K Cavitation</li>
                  <li>• Suction, Lymphatic & Heat Blanket Therapy</li>
                </ul>
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
                <li>• Doctors & Healthcare Professionals</li>
                <li>• Cosmetologists & Beauty Entrepreneurs</li>
                <li>• Students looking for a career in Aesthetics</li>
                <li>• Anyone passionate about professional skincare</li>
              </ul>
            </div>

            <div className="bg-zinc-50 dark:bg-[#111] p-8 rounded-3xl border border-zinc-200 dark:border-zinc-800">
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <Sparkles className="text-gold-metallic" /> Career Opportunities
              </h3>
              <p className="text-zinc-600 dark:text-zinc-400 mb-4">After completing the course, you can work as:</p>
              <ul className="space-y-2 text-zinc-600 dark:text-zinc-400">
                <li>• Aesthetic Practitioner</li>
                <li>• Skin Care Specialist</li>
                <li>• Laser Technician</li>
                <li>• Hydra Facial & Chemical Peel Specialist</li>
                <li>• Beauty Clinic Consultant</li>
                <li>• Medical Aesthetic Assistant</li>
                <li>• Freelance Aesthetic Professional</li>
                <li>• Salon or Clinic Owner</li>
                <li>• Beauty Trainer</li>
              </ul>
            </div>
          </div>

          <div className="mt-16 text-center">
            <button 
              onClick={() => window.open('https://wa.me/918610345830', '_blank')}
              className="inline-flex items-center justify-center px-10 py-5 bg-gold-gradient text-white font-extrabold text-lg rounded-full shadow-[0_10px_30px_rgba(212,175,55,0.4)] hover:shadow-[0_10px_40px_rgba(212,175,55,0.6)] hover:scale-105 transition-all"
            >
              Enroll in Aesthetic Course Now
            </button>
          </div>

        </div>
      </main>
      
      <Footer />
    </div>
  );
}

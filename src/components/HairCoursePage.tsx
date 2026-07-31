import { useEffect } from 'react';
import Header from './Header';
import Footer from './Footer';

import { CreativeUnderline } from './NewSections';
import { CheckCircle, GraduationCap, Sparkles, BookOpen, ArrowLeft, Scissors } from 'lucide-react';

export default function HairCoursePage({ isDark, toggleTheme, onNavigate }: { isDark: boolean, toggleTheme: () => void, onNavigate: (page: string) => void }) {
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
              Hair Stylist Course
            </h1>
            <h2 className="text-xl md:text-2xl font-bold text-zinc-700 dark:text-zinc-300 mb-6">
              Become a Professional Hair Stylist
            </h2>
            <CreativeUnderline />
          </div>

          <div className="prose prose-lg dark:prose-invert max-w-none text-zinc-600 dark:text-zinc-400 leading-relaxed space-y-6">
            <p className="text-lg">
              Turn your passion for hairstyling into a rewarding career with our 2-Week Hair Stylist Course. This comprehensive training program is designed for beginners and professionals who want to master modern haircutting, coloring, styling, chemical treatments, and hair spa therapies.
            </p>
            <p className="text-lg">
              Learn directly from expert trainers through intensive hands-on practical sessions and gain the confidence to work in leading salons or start your own hairstyling business. Our Hair Stylist Course covers everything from the fundamentals of hair cutting to advanced coloring techniques, chemical treatments, professional blow-drying, and therapeutic hair spa services. With practical demonstrations and live practice, you'll develop the skills needed to become a successful hairstylist.
            </p>
          </div>

          {/* Highlights */}
          <div className="mt-16 bg-zinc-50 dark:bg-[#111] rounded-3xl p-8 border border-zinc-200 dark:border-zinc-800 shadow-xl">
            <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
              <Sparkles className="text-gold-metallic" /> Course Highlights
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                "2-Week Intensive Training",
                "Beginner to Advanced Curriculum",
                "Expert Trainers",
                "100% Hands-on Practical Sessions",
                "Live Demonstrations",
                "International Certification (180+ Countries)",
                "Industry-Level Techniques",
                "Professional Salon Training",
                "Practical Skill Development"
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
            <h3 className="text-3xl font-bold mb-8 text-center">Course Syllabus</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              
              <div className="glass-card p-6 rounded-2xl border border-zinc-200 dark:border-zinc-800">
                <h4 className="text-xl font-bold mb-4 text-gold-bronze dark:text-gold-champagne flex items-center gap-2">
                  <Scissors className="w-5 h-5" /> Hair Cutting
                </h4>
                <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-4">Master professional haircutting techniques for different face shapes and styles.</p>
                <ul className="space-y-2 text-zinc-600 dark:text-zinc-400">
                  <li>• Basic Haircuts (Layer, U-Cut, V-Cut)</li>
                  <li>• Advanced Haircuts (Step Cut, Signature Cut)</li>
                  <li>• Professional Finishing Techniques</li>
                </ul>
              </div>

              <div className="glass-card p-6 rounded-2xl border border-zinc-200 dark:border-zinc-800">
                <h4 className="text-xl font-bold mb-4 text-gold-bronze dark:text-gold-champagne flex items-center gap-2">
                  <BookOpen className="w-5 h-5" /> Hair Coloring
                </h4>
                <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-4">Learn professional coloring techniques from basic to advanced.</p>
                <ul className="space-y-2 text-zinc-600 dark:text-zinc-400">
                  <li>• Global Hair Color</li>
                  <li>• Highlights & Root Touch-Up</li>
                  <li>• Hair Toning & Color Selection</li>
                  <li>• Professional Application Methods</li>
                </ul>
              </div>

              <div className="glass-card p-6 rounded-2xl border border-zinc-200 dark:border-zinc-800">
                <h4 className="text-xl font-bold mb-4 text-gold-bronze dark:text-gold-champagne flex items-center gap-2">
                  <BookOpen className="w-5 h-5" /> Blow Dry & Styling
                </h4>
                <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-4">Create salon-quality hairstyles using professional blow-drying techniques.</p>
                <ul className="space-y-2 text-zinc-600 dark:text-zinc-400">
                  <li>• Straight, Out-In & HTR Blow Dry</li>
                  <li>• Roll Blow Dry</li>
                  <li>• Hair Finishing Techniques</li>
                </ul>
              </div>

              <div className="glass-card p-6 rounded-2xl border border-zinc-200 dark:border-zinc-800">
                <h4 className="text-xl font-bold mb-4 text-gold-bronze dark:text-gold-champagne flex items-center gap-2">
                  <BookOpen className="w-5 h-5" /> Chemical Treatments
                </h4>
                <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-4">Master professional chemical services for smooth, healthy, and manageable hair.</p>
                <ul className="space-y-2 text-zinc-600 dark:text-zinc-400">
                  <li>• Hair Straightening & Smoothening</li>
                  <li>• Keratin Treatment</li>
                  <li>• Curl Blocking</li>
                  <li>• Sectioning Techniques</li>
                </ul>
              </div>

              <div className="glass-card p-6 rounded-2xl border border-zinc-200 dark:border-zinc-800">
                <h4 className="text-xl font-bold mb-4 text-gold-bronze dark:text-gold-champagne flex items-center gap-2">
                  <BookOpen className="w-5 h-5" /> Hair Spa Treatments
                </h4>
                <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-4">Provide professional hair care treatments for healthy hair and scalp.</p>
                <ul className="space-y-2 text-zinc-600 dark:text-zinc-400">
                  <li>• Dandruff & Hair Fall Treatment</li>
                  <li>• Butter Hair Spa Treatment</li>
                  <li>• Professional Massage Strokes</li>
                  <li>• Deep Hair Nourishment</li>
                </ul>
              </div>

              <div className="glass-card p-6 rounded-2xl border border-zinc-200 dark:border-zinc-800">
                <h4 className="text-xl font-bold mb-4 text-gold-bronze dark:text-gold-champagne flex items-center gap-2">
                  <BookOpen className="w-5 h-5" /> Professional Knowledge
                </h4>
                <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-4">Master proper sectioning and professional salon procedures.</p>
                <ul className="space-y-2 text-zinc-600 dark:text-zinc-400">
                  <li>• Hair Sectioning (Profile, Crest, Diamond)</li>
                  <li>• Client Consultation & Hair Analysis</li>
                  <li>• Professional Salon Workflow</li>
                  <li>• Practical Client Handling</li>
                </ul>
              </div>

            </div>
          </div>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-zinc-50 dark:bg-[#111] p-8 rounded-3xl border border-zinc-200 dark:border-zinc-800">
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <GraduationCap className="text-gold-metallic" /> Who Can Join?
              </h3>
              <p className="text-zinc-600 dark:text-zinc-400 mb-4">This course is suitable for:</p>
              <ul className="space-y-2 text-zinc-600 dark:text-zinc-400">
                <li>• Beginners (Men & Women - Unisex)</li>
                <li>• Beauticians & Hairdressers</li>
                <li>• Salon Professionals & Makeup Artists</li>
                <li>• Beauty Entrepreneurs</li>
                <li>• Anyone passionate about hairstyling</li>
              </ul>
            </div>

            <div className="bg-zinc-50 dark:bg-[#111] p-8 rounded-3xl border border-zinc-200 dark:border-zinc-800">
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <Sparkles className="text-gold-metallic" /> Career Opportunities
              </h3>
              <p className="text-zinc-600 dark:text-zinc-400 mb-4">After completing the course, you can work as:</p>
              <ul className="space-y-2 text-zinc-600 dark:text-zinc-400">
                <li>• Professional Hair Stylist</li>
                <li>• Hair Cutting Specialist & Color Expert</li>
                <li>• Hair Spa Therapist</li>
                <li>• Salon Hairdresser</li>
                <li>• Freelance Hair Stylist & Bridal Hair Stylist</li>
                <li>• Salon Owner & Beauty Academy Trainer</li>
              </ul>
            </div>
          </div>

          <div className="mt-16 bg-zinc-50 dark:bg-[#111] p-8 md:p-12 rounded-3xl border border-zinc-200 dark:border-zinc-800 shadow-xl text-center">
             <h3 className="text-3xl font-bold mb-6">Why Choose Our Hair Stylist Course?</h3>
             <p className="text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed max-w-3xl mx-auto">
               Develop the skills, creativity, and confidence to excel in the beauty industry. With expert guidance, practical training, and internationally recognized certification, our Hair Stylist Course prepares you for a successful career in salons, studios, or your own business.
             </p>
             <div className="mt-6 flex flex-wrap justify-center gap-4 text-sm font-bold text-zinc-700 dark:text-zinc-300">
               <span className="px-4 py-2 bg-white dark:bg-black rounded-full border border-zinc-200 dark:border-zinc-700 shadow-sm">Duration: 2 Weeks</span>
               <span className="px-4 py-2 bg-white dark:bg-black rounded-full border border-zinc-200 dark:border-zinc-700 shadow-sm">Mode: Practical + Theory</span>
               <span className="px-4 py-2 bg-white dark:bg-black rounded-full border border-zinc-200 dark:border-zinc-700 shadow-sm">International Certificate</span>
             </div>
          </div>

          <div className="mt-16 text-center">
            <button 
              onClick={() => window.open('https://wa.me/918610345830', '_blank')}
              className="inline-flex items-center justify-center px-10 py-5 bg-gold-gradient text-white font-extrabold text-lg rounded-full shadow-[0_10px_30px_rgba(212,175,55,0.4)] hover:shadow-[0_10px_40px_rgba(212,175,55,0.6)] hover:scale-105 transition-all"
            >
              Enroll in Hair Stylist Course Now
            </button>
          </div>

        </div>
      </main>
      
      <Footer />
    </div>
  );
}

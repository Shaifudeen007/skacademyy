import { useEffect } from 'react';
import Header from './Header';
import Footer from './Footer';

import { CreativeUnderline } from './NewSections';
import { CheckCircle, GraduationCap, Sparkles, BookOpen, ArrowLeft } from 'lucide-react';

export default function NailArtCoursePage({ isDark, onNavigate }: { isDark: boolean, onNavigate: (page: string) => void }) {
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
              Nail Art Extension Course
            </h1>
            <h2 className="text-xl md:text-2xl font-bold text-zinc-700 dark:text-zinc-300 mb-6">
              Become a Professional Nail Artist
            </h2>
            <CreativeUnderline />
          </div>

          <div className="prose prose-lg dark:prose-invert max-w-none text-zinc-600 dark:text-zinc-400 leading-relaxed space-y-6">
            <p className="text-lg">
              Transform your creativity into a successful career with our 7-Day Nail Art Extension Master Class. Learn everything from nail fundamentals to advanced nail art techniques through hands-on practical training. This course is designed to help you master professional nail extensions, creative nail designs, and salon management skills.
            </p>
            <p className="text-lg">
              Our Nail Art Extension Course is designed for beginners and beauty professionals who want to build a successful career in the nail industry. From basic nail anatomy to advanced nail art and salon business management, you'll receive complete practical training using professional products and equipment. Whether your goal is to work in a salon, become a freelance nail artist, or start your own nail studio, this course provides the skills and confidence to succeed.
            </p>
          </div>

          {/* Highlights */}
          <div className="mt-16 relative bg-gold-metallic/[0.03] dark:bg-[#0a0a0a] rounded-3xl p-8 border border-gold-metallic/50 shadow-[0_0_40px_rgba(212,175,55,0.2)] overflow-hidden before:absolute before:inset-0 before:bg-gold-gradient before:opacity-[0.05] before:pointer-events-none">
            <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
              <Sparkles className="text-gold-metallic" /> Course Highlights
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                "7-Day Master Class",
                "Hands-on Practical Training",
                <>International Certificate <span className="font-extrabold text-gold-bronze dark:text-gold-metallic bg-gold-metallic/10 px-1.5 py-0.5 rounded-md">(180+ Countries)</span></>,
                "Expert Trainers & Limited Batch Size",
                "Career Guidance",
                "Lifetime Support"
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
                  <BookOpen className="w-5 h-5" /> Basic Foundation
                </h4>
                <ul className="space-y-2 text-zinc-600 dark:text-zinc-400">
                  <li>• Nail Anatomy & Shapes</li>
                  <li>• Product Knowledge & Machine Handling</li>
                  <li>• Dry Manicure & Pedicure</li>
                  <li>• Nail Preparation & Hand Care</li>
                  <li>• Gel Polish Application & Removal</li>
                </ul>
              </div>

              <div className="glass-card p-6 rounded-2xl border border-zinc-200 dark:border-zinc-800">
                <h4 className="text-xl font-bold mb-4 text-gold-bronze dark:text-gold-champagne flex items-center gap-2">
                  <BookOpen className="w-5 h-5" /> Types of Extensions
                </h4>
                <ul className="space-y-2 text-zinc-600 dark:text-zinc-400">
                  <li>• Press-on, Acrylic & Hard Gel Nails</li>
                  <li>• Inlay, Overlay & Inbuild Techniques</li>
                  <li>• Dip Powder & Acrylic Refill</li>
                  <li>• Gel-X & Poly Gel (Inbuild) Extensions</li>
                  <li>• Toe Nail Extensions</li>
                </ul>
              </div>

              <div className="glass-card p-6 rounded-2xl border border-zinc-200 dark:border-zinc-800">
                <h4 className="text-xl font-bold mb-4 text-gold-bronze dark:text-gold-champagne flex items-center gap-2">
                  <BookOpen className="w-5 h-5" /> Nail Arts - Level 1
                </h4>
                <ul className="space-y-2 text-zinc-600 dark:text-zinc-400">
                  <li>• Top Coat Types & Polka Dot Art (3 Types)</li>
                  <li>• Embossed Art (2 Types) & Sweater Art</li>
                  <li>• Marble, Bloom, & Flash Ink Art (2 Types)</li>
                  <li>• Chrome Nails (3 Types)</li>
                </ul>
              </div>

              <div className="glass-card p-6 rounded-2xl border border-zinc-200 dark:border-zinc-800">
                <h4 className="text-xl font-bold mb-4 text-gold-bronze dark:text-gold-champagne flex items-center gap-2">
                  <BookOpen className="w-5 h-5" /> Nail Arts - Level 2
                </h4>
                <ul className="space-y-2 text-zinc-600 dark:text-zinc-400">
                  <li>• Tape, Mylar, & Line Art</li>
                  <li>• Spider Gel Art (2 Types) & Spiral Art</li>
                  <li>• French Nails (4 Types) & Cat Eye Nails (4 Types)</li>
                  <li>• Optical Illusion Art (2 Types) & Sticker Art</li>
                </ul>
              </div>

              <div className="glass-card p-6 rounded-2xl border border-zinc-200 dark:border-zinc-800">
                <h4 className="text-xl font-bold mb-4 text-gold-bronze dark:text-gold-champagne flex items-center gap-2">
                  <BookOpen className="w-5 h-5" /> Nail Arts - Levels 3 & 4
                </h4>
                <ul className="space-y-2 text-zinc-600 dark:text-zinc-400">
                  <li>• Transfer Foil, Mermaid, & Butterfly Art</li>
                  <li>• Aquarelle, Animal Print & Rose Art</li>
                  <li>• Neon Pigment, Sugar & Pop Art Nails</li>
                  <li>• Photo Art, Aqua Nails & 3D, 5D, 7D Art</li>
                </ul>
              </div>

              <div className="glass-card p-6 rounded-2xl border border-zinc-200 dark:border-zinc-800">
                <h4 className="text-xl font-bold mb-4 text-gold-bronze dark:text-gold-champagne flex items-center gap-2">
                  <BookOpen className="w-5 h-5" /> Salon Knowledge
                </h4>
                <ul className="space-y-2 text-zinc-600 dark:text-zinc-400">
                  <li>• Client Consultation & Hygiene Protocols</li>
                  <li>• Tool Sterilization & Service Pricing</li>
                  <li>• Social Media Marketing & Client Retention</li>
                  <li>• Business Setup & Time Management</li>
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
                <li>• Beginners</li>
                <li>• Beauticians & Makeup Artists</li>
                <li>• Salon Owners & Beauty Professionals</li>
                <li>• Students & Entrepreneurs</li>
                <li>• Anyone passionate about nail artistry</li>
              </ul>
            </div>

            <div className="bg-zinc-50 dark:bg-[#111] p-8 rounded-3xl border border-zinc-200 dark:border-zinc-800">
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <Sparkles className="text-gold-metallic" /> Career Opportunities
              </h3>
              <p className="text-zinc-600 dark:text-zinc-400 mb-4">After completing the course, you can work as:</p>
              <ul className="space-y-2 text-zinc-600 dark:text-zinc-400">
                <li>• Professional Nail Artist</li>
                <li>• Nail Extension Specialist</li>
                <li>• Nail Art Designer</li>
                <li>• Salon Nail Technician</li>
                <li>• Freelance Nail Artist</li>
                <li>• Nail Studio Owner & Trainer</li>
              </ul>
            </div>
          </div>

          <div className="mt-16 bg-zinc-50 dark:bg-[#111] p-8 md:p-12 rounded-3xl border border-zinc-200 dark:border-zinc-800 shadow-xl text-center">
             <h3 className="text-3xl font-bold mb-6">Why Choose Our Nail Art Course?</h3>
             <p className="text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed max-w-3xl mx-auto">
               International Certification, Beginner to Advanced Curriculum, Live Practical Sessions, Industry-Standard Products & Tools, Expert Trainers, Small Batch Training, Lifetime Learning Support, Career & Business Guidance, and 100% Practical Learning!
             </p>
             <div className="mt-6 flex flex-wrap justify-center gap-4 text-sm font-bold text-zinc-700 dark:text-zinc-300">
               <span className="px-4 py-2 bg-white dark:bg-black rounded-full border border-zinc-200 dark:border-zinc-700 shadow-sm">Duration: 7 Days</span>
               <span className="px-4 py-2 bg-white dark:bg-black rounded-full border border-zinc-200 dark:border-zinc-700 shadow-sm">Mode: Hands-on</span>
               <span className="px-4 py-2 bg-white dark:bg-black rounded-full border border-zinc-200 dark:border-zinc-700 shadow-sm">International Certificate</span>
             </div>
          </div>

          <div className="mt-16 text-center">
            <button 
              onClick={() => window.open('https://wa.me/918610345830', '_blank')}
              className="inline-flex items-center justify-center px-10 py-5 bg-gold-gradient text-white font-extrabold text-lg rounded-full shadow-[0_10px_30px_rgba(212,175,55,0.4)] hover:shadow-[0_10px_40px_rgba(212,175,55,0.6)] hover:scale-105 transition-all"
            >
              Enroll in Nail Art Course Now
            </button>
          </div>

        </div>
      </main>
      
      <Footer />
    </div>
  );
}

import { useEffect } from 'react';
import Header from './Header';
import Footer from './Footer';

import { CreativeUnderline } from './NewSections';
import { CheckCircle, GraduationCap, Sparkles, BookOpen, ArrowLeft, Scissors } from 'lucide-react';

export default function HairExtensionCoursePage({ isDark, onNavigate }: { isDark: boolean, onNavigate: (page: string) => void }) {
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
              Professional Hair Extension Master Course
            </h1>
            <h2 className="text-xl md:text-2xl font-bold text-zinc-700 dark:text-zinc-300 mb-6">
              Become a Certified Hair Extension Specialist
            </h2>
            <CreativeUnderline />
          </div>

          <div className="prose prose-lg dark:prose-invert max-w-none text-zinc-600 dark:text-zinc-400 leading-relaxed space-y-6">
            <p className="text-lg">
              Master the art of professional hair extensions with our comprehensive Hair Extension Master Course. Designed for beginners and beauty professionals, this course covers everything from the fundamentals of hair extensions to advanced application techniques, maintenance, and removal. Through detailed theory and intensive hands-on practice, you'll gain the confidence and skills needed to build a successful career in the beauty industry.
            </p>
            <p className="text-lg">
              Whether you aspire to work in a salon, become a freelance hair extension artist, or launch your own hair extension business, this course equips you with internationally recognized skills and practical expertise.
            </p>
          </div>

          {/* Highlights */}
          <div className="mt-16 relative bg-gold-metallic/[0.03] dark:bg-[#0a0a0a] rounded-3xl p-8 border border-gold-metallic/50 shadow-[0_0_40px_rgba(212,175,55,0.2)] overflow-hidden before:absolute before:inset-0 before:bg-gold-gradient before:opacity-[0.05] before:pointer-events-none">
            <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
              <Sparkles className="text-gold-metallic" /> Course Highlights
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                <>International Certificate <span className="font-extrabold text-gold-bronze dark:text-gold-metallic bg-gold-metallic/10 px-1.5 py-0.5 rounded-md">(180+ Countries)</span></>,
                "Beginner to Advanced Curriculum",
                "Expert Trainers",
                "100% Hands-on Practical Training",
                "Live Demonstrations & Detailed Theory Sessions",
                "Professional Notes",
                "Vendor & Product Knowledge",
                "Hair Extension Product Guidance",
                "Lifetime Career Support",
                "Hair Extension Removal & Fixing Techniques"
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
              
              <div className="glass-card p-6 rounded-2xl border border-zinc-200 dark:border-zinc-800 md:col-span-2">
                <h4 className="text-xl font-bold mb-6 text-gold-bronze dark:text-gold-champagne flex items-center gap-2">
                  <Scissors className="w-5 h-5" /> Hair Extension Techniques
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h5 className="font-bold text-zinc-900 dark:text-zinc-100 mb-1">1. Micro Ring & Nano Ring</h5>
                    <p className="text-zinc-600 dark:text-zinc-400 text-sm mb-4">Installation, maintenance, and removal without heat or glue, plus advanced nano-ring application for a seamless look.</p>
                    
                    <h5 className="font-bold text-zinc-900 dark:text-zinc-100 mb-1">2. Mini / I-Tip & Flat Keratin</h5>
                    <p className="text-zinc-600 dark:text-zinc-400 text-sm mb-4">Professional installation using I-Tip and Mini Tip techniques, alongside flat keratin bonding for natural-looking extensions.</p>
                    
                    <h5 className="font-bold text-zinc-900 dark:text-zinc-100 mb-1">3. Tape-In & Clip-In Extensions</h5>
                    <p className="text-zinc-600 dark:text-zinc-400 text-sm mb-4">Application, maintenance, repositioning, and temporary installation suitable for everyday styling.</p>
                  </div>
                  <div>
                    <h5 className="font-bold text-zinc-900 dark:text-zinc-100 mb-1">4. Ice Glue & Keratin Tip</h5>
                    <p className="text-zinc-600 dark:text-zinc-400 text-sm mb-4">Professional bonding techniques using ice glue and heat fusion application using premium keratin tips.</p>
                    
                    <h5 className="font-bold text-zinc-900 dark:text-zinc-100 mb-1">5. Weft & Feather Extensions</h5>
                    <p className="text-zinc-600 dark:text-zinc-400 text-sm mb-4">Professional weft installation and blending, plus creative feather application for fashion styling.</p>
                    
                    <h5 className="font-bold text-zinc-900 dark:text-zinc-100 mb-1">6. Fixing & Removal</h5>
                    <p className="text-zinc-600 dark:text-zinc-400 text-sm">Safe removal methods, maintenance, and correction techniques.</p>
                  </div>
                </div>
              </div>

              <div className="glass-card p-6 rounded-2xl border border-zinc-200 dark:border-zinc-800">
                <h4 className="text-xl font-bold mb-4 text-gold-bronze dark:text-gold-champagne flex items-center gap-2">
                  <BookOpen className="w-5 h-5" /> Hair Extension Making (Practical)
                </h4>
                <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-4">Learn how to create professional hair extensions from scratch.</p>
                <ul className="space-y-2 text-zinc-600 dark:text-zinc-400">
                  <li>• Flat Keratin Hair Extension Making</li>
                  <li>• Keratin Hair Extension Making</li>
                  <li>• Tape-In Hair Extension Making</li>
                  <li>• Invisible Hair Extension Making</li>
                </ul>
              </div>

              <div className="glass-card p-6 rounded-2xl border border-zinc-200 dark:border-zinc-800">
                <h4 className="text-xl font-bold mb-4 text-gold-bronze dark:text-gold-champagne flex items-center gap-2">
                  <BookOpen className="w-5 h-5" /> Professional Knowledge & Tools
                </h4>
                <ul className="space-y-2 text-zinc-600 dark:text-zinc-400">
                  <li>• Extension Adhesives & Removal Solutions</li>
                  <li>• Keratin Tools & Installation Equipment</li>
                  <li>• Maintenance Accessories</li>
                  <li>• Product Knowledge & Vendor Information</li>
                </ul>
              </div>

              <div className="glass-card p-6 rounded-2xl border border-zinc-200 dark:border-zinc-800 md:col-span-2">
                <h4 className="text-xl font-bold mb-4 text-gold-bronze dark:text-gold-champagne flex items-center gap-2">
                  <BookOpen className="w-5 h-5" /> Additional Learning & Business Setup
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <ul className="space-y-2 text-zinc-600 dark:text-zinc-400">
                    <li>• Client Consultation & Hair Analysis</li>
                    <li>• Hair Extension Selection</li>
                    <li>• Hair Care After Extension</li>
                    <li>• Maintenance Techniques</li>
                  </ul>
                  <ul className="space-y-2 text-zinc-600 dark:text-zinc-400">
                    <li>• Professional Tool Usage, Safety & Hygiene</li>
                    <li>• Pricing Your Services</li>
                    <li>• Building Client Trust</li>
                    <li>• Business Setup Guidance</li>
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
              <p className="text-zinc-600 dark:text-zinc-400 mb-4">This course is ideal for:</p>
              <ul className="space-y-2 text-zinc-600 dark:text-zinc-400">
                <li>• Beginners</li>
                <li>• Hair Stylists & Beauticians</li>
                <li>• Salon Owners & Makeup Artists</li>
                <li>• Beauty Professionals & Freelancers</li>
                <li>• Entrepreneurs</li>
                <li>• Anyone passionate about hair styling and extensions</li>
              </ul>
            </div>

            <div className="bg-zinc-50 dark:bg-[#111] p-8 rounded-3xl border border-zinc-200 dark:border-zinc-800">
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <Sparkles className="text-gold-metallic" /> Career Opportunities
              </h3>
              <p className="text-zinc-600 dark:text-zinc-400 mb-4">After completing the course, you can work as:</p>
              <ul className="space-y-2 text-zinc-600 dark:text-zinc-400">
                <li>• Hair Extension Specialist</li>
                <li>• Professional Hair Stylist</li>
                <li>• Salon Hair Technician</li>
                <li>• Bridal Hair Artist</li>
                <li>• Freelance Hair Extension Artist</li>
                <li>• Hair Extension Educator</li>
                <li>• Hair Studio Owner & Beauty Consultant</li>
              </ul>
            </div>
          </div>

          <div className="mt-16 bg-zinc-50 dark:bg-[#111] p-8 md:p-12 rounded-3xl border border-zinc-200 dark:border-zinc-800 shadow-xl text-center">
             <h3 className="text-3xl font-bold mb-6">Why Choose Our Hair Extension Course?</h3>
             <p className="text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed max-w-3xl mx-auto">
               Gain internationally recognized skills, master the latest hair extension techniques, and build a rewarding career with our Professional Hair Extension Master Course. Learn from industry experts and become job-ready with hands-on practical training.
             </p>
             <div className="mt-6 flex flex-wrap justify-center gap-4 text-sm font-bold text-zinc-700 dark:text-zinc-300">
               <span className="px-4 py-2 bg-white dark:bg-black rounded-full border border-zinc-200 dark:border-zinc-700 shadow-sm">Level: Beginner to Advanced</span>
               <span className="px-4 py-2 bg-white dark:bg-black rounded-full border border-zinc-200 dark:border-zinc-700 shadow-sm">Mode: 100% Practical</span>
               <span className="px-4 py-2 bg-white dark:bg-black rounded-full border border-zinc-200 dark:border-zinc-700 shadow-sm">International Certificate</span>
             </div>
          </div>

          <div className="mt-16 text-center">
            <button 
              onClick={() => window.open('https://wa.me/918610345830', '_blank')}
              className="inline-flex items-center justify-center px-10 py-5 bg-gold-gradient text-white font-extrabold text-lg rounded-full shadow-[0_10px_30px_rgba(212,175,55,0.4)] hover:shadow-[0_10px_40px_rgba(212,175,55,0.6)] hover:scale-105 transition-all"
            >
              Enroll in Hair Extension Course Now
            </button>
          </div>

        </div>
      </main>
      
      <Footer />
    </div>
  );
}

import Header from './Header';
import Footer from './Footer';
import { CertificationSection } from './NewSections';
import { motion } from 'framer-motion';
import { 
  ArrowRight, 
  MessageCircle, 
  Sparkles, 
  CheckCircle2, 
  Plane,
  GraduationCap
} from 'lucide-react';
import { useEffect } from 'react';
import SEOHead from '../seo/SEOHead';
import { siteConfig } from '../seo/siteConfig';
import { getBreadcrumbSchema } from '../seo/schemaGenerator';

const destinations = [
  {
    country: "Sri Lanka",
    flag: "🇱🇰",
    flagImg: "https://flagcdn.com/w80/lk.png",
    isComingSoon: false,
    badge: "Admissions Open",
    desc: "Comprehensive international diploma programs designed for students and professionals traveling from Sri Lanka. Full support with accommodation and accelerated batch scheduling.",
    highlights: [
      "LAPT UK International Diploma",
      "Hands-on Live Model Training",
      "Fast-track Batches for Students",
      "Visa & Travel Assistance"
    ]
  },
  {
    country: "Nepal",
    flag: "🇳🇵",
    flagImg: "https://flagcdn.com/w80/np.png",
    isComingSoon: true,
    badge: "Coming Soon",
    desc: "Welcoming students and professionals from Nepal for premier international certification. Intensive practical training with personalized 1-on-1 mentorship.",
    highlights: [
      "Globally Valid in 180+ Countries",
      "Personalized 1-on-1 Guidance",
      "Complete Hands-on Practical Protocols",
      "Business & Career Guidance"
    ]
  },
  {
    country: "Malaysia",
    flag: "🇲🇾",
    flagImg: "https://flagcdn.com/w80/my.png",
    isComingSoon: true,
    badge: "Coming Soon",
    desc: "Globally accredited training tailored to international standards. Hands-on clinical sessions with advanced international techniques and master trainer accreditation.",
    highlights: [
      "Advanced International Techniques",
      "Master Trainer Certification",
      "Global Industry Standards",
      "Worldwide Career Readiness"
    ]
  },
  {
    country: "Dubai (UAE)",
    flag: "🇦🇪",
    flagImg: "https://flagcdn.com/w80/ae.png",
    isComingSoon: true,
    badge: "Coming Soon",
    desc: "World-class credentials designed to meet international standards for global professionals, clinic founders, and high-end beauty specialists.",
    highlights: [
      "Prestigious UK Certification",
      "International Clinical Standards",
      "Global Client Consultation Skills",
      "International Professional Network"
    ]
  }
];

export default function InternationalProgramsPage({ 
  isDark, 
  toggleTheme, 
  onNavigate 
}: { 
  isDark: boolean; 
  toggleTheme: () => void; 
  onNavigate?: (page: string) => void; 
}) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const internationalSEO = siteConfig.routes.internationalPrograms;
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: 'Home', path: '/' },
    { name: 'International Programs', path: '/international-programs' },
  ]);

  return (
    <div className={`min-h-screen ${isDark ? 'dark bg-[#09090B] text-zinc-50' : 'bg-white text-zinc-900'} font-sans transition-colors duration-300`}>
      <SEOHead
        title={internationalSEO.title}
        description={internationalSEO.description}
        keywords={internationalSEO.keywords}
        canonical={internationalSEO.canonical}
        ogType={internationalSEO.ogType}
        schemas={[breadcrumbSchema]}
      />
      <Header isDark={isDark} toggleTheme={toggleTheme} onNavigate={onNavigate} />

      <main className="pt-28 md:pt-36">
        {/* Global Hubs Section: Sri Lanka, Nepal, Malaysia, Dubai */}
        <section className="relative overflow-hidden pb-16 pt-6 md:pb-20 md:pt-10">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-gold-metallic/5 dark:bg-gold-metallic/10 rounded-full blur-[140px] pointer-events-none" />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center mb-14">
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold-bronze/10 dark:bg-gold-metallic/10 text-gold-bronze dark:text-gold-champagne font-bold text-xs sm:text-sm mb-6 border border-gold-bronze/20 dark:border-gold-metallic/20"
              >
                <Plane className="w-4 h-4" />
                <span>Global Training Network • Valid in 180+ Countries</span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.1 }}
                className="text-2xl min-[480px]:text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-black text-zinc-900 dark:text-white tracking-tight md:whitespace-nowrap"
              >
                International Hubs & <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-bronze to-gold-metallic">Student Community</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto mt-6 text-base sm:text-lg leading-relaxed"
              >
                SK International Institute of Skills welcomes students and professionals from across <strong>Sri Lanka</strong>, <strong>Nepal</strong>, <strong>Malaysia</strong>, and <strong>Dubai</strong> with comprehensive training, accommodation support, and internationally recognized certifications.
              </motion.p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
              {destinations.map((dest, idx) => (
                <motion.div
                  key={dest.country}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="rounded-3xl bg-white dark:bg-[#111] border border-zinc-200 dark:border-zinc-800 p-6 flex flex-col justify-between shadow-md hover:shadow-2xl hover:border-gold-metallic/50 transition-all group h-full"
                >
                  <div className="flex-1 flex flex-col">
                    <div className="flex items-center justify-between gap-2 mb-4">
                      <img 
                        src={dest.flagImg} 
                        alt={`${dest.country} flag`} 
                        className="w-10 h-7 object-cover rounded-md shadow-sm border border-zinc-200 dark:border-zinc-700 shrink-0" 
                      />
                      {dest.isComingSoon ? (
                        <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-amber-500/10 text-amber-500 dark:text-amber-400 border border-amber-500/30">
                          <span className="relative flex h-1.5 w-1.5">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-amber-500"></span>
                          </span>
                          <span className="animate-pulse tracking-wide">Coming Soon</span>
                        </span>
                      ) : (
                        <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/30">
                          <span className="h-1.5 w-1.5 rounded-full bg-emerald-500"></span>
                          <span>Admissions Open</span>
                        </span>
                      )}
                    </div>

                    <h3 className="text-xl sm:text-2xl font-extrabold text-zinc-900 dark:text-white group-hover:text-gold-metallic transition-colors mb-3">
                      {dest.country}
                    </h3>

                    <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed mb-5">
                      {dest.desc}
                    </p>

                    <div className="space-y-2 mb-6 mt-auto">
                      {dest.highlights.map((feat, fIdx) => (
                        <div key={fIdx} className="flex items-start gap-2 text-xs text-zinc-700 dark:text-zinc-300">
                          <CheckCircle2 className="w-3.5 h-3.5 text-gold-metallic flex-shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-2">
                    {dest.isComingSoon ? (
                      <a
                        href={`https://wa.me/918610345830?text=Hello%20SK%20Academy,%20I%20am%20interested%20in%20the%20upcoming%20International%20Program%20for%20${encodeURIComponent(dest.country)}.`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full py-3 px-4 rounded-xl bg-zinc-100 hover:bg-zinc-200 dark:bg-zinc-800 hover:dark:bg-zinc-700 text-zinc-800 dark:text-zinc-200 text-xs font-bold transition-all flex items-center justify-center gap-1.5 shadow-sm group/btn border border-zinc-200 dark:border-zinc-700 text-center"
                      >
                        <span>Register Interest</span>
                        <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform shrink-0" />
                      </a>
                    ) : (
                      <a
                        href={`https://wa.me/918610345830?text=Hello%20SK%20Academy,%20I%20am%20inquiring%20about%20International%20Programs%20for%20students%20from%20${encodeURIComponent(dest.country)}.`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full py-3 px-4 rounded-xl bg-gold-gradient text-zinc-900 font-extrabold text-xs transition-all flex items-center justify-center gap-1.5 shadow-md hover:scale-[1.02] group/btn text-center"
                      >
                        <GraduationCap className="w-4 h-4 flex-shrink-0" />
                        <span>Inquire Now</span>
                        <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform shrink-0" />
                      </a>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Accreditations Section */}
        <CertificationSection />

        {/* CTA Banner */}
        <section className="py-12 md:py-16 bg-gold-gradient relative overflow-hidden">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-zinc-900 relative z-10">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-zinc-900/10 text-zinc-900 font-bold text-xs uppercase tracking-wider mb-4">
              <Sparkles className="w-3.5 h-3.5" /> Sri Lanka • Nepal • Malaysia • Dubai
            </div>
            <h2 className="text-3xl sm:text-4xl font-black mb-4 uppercase">Ready to Start Your International Career?</h2>
            <p className="text-base sm:text-lg font-medium mb-8 max-w-xl mx-auto">
              Seats are filling fast for upcoming international batches. Speak with our international admissions counselor today.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="https://wa.me/918610345830?text=Hello%20SK%20Academy,%20I%20would%20like%20to%20know%20more%20about%20your%20International%20Programs."
                target="_blank"
                rel="noopener noreferrer"
                className="bg-zinc-900 text-white hover:bg-black px-8 py-4 rounded-full font-bold text-base shadow-xl hover:scale-105 transition-all inline-flex items-center gap-2"
              >
                <MessageCircle className="w-5 h-5" /> Enquire on WhatsApp
              </a>
              <button
                onClick={() => {
                  if (onNavigate) {
                    onNavigate('home');
                    setTimeout(() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }), 100);
                  }
                }}
                className="bg-white/90 hover:bg-white text-zinc-900 px-8 py-4 rounded-full font-bold text-base shadow-lg hover:scale-105 transition-all inline-flex items-center gap-2"
              >
                Contact Admissions <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

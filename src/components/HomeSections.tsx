
import { Sparkles, Award, GraduationCap, ShieldCheck, Scissors, Heart, ArrowRight, Flower2, ChevronLeft, ChevronRight, User } from 'lucide-react';
import { motion, useInView, animate, AnimatePresence } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import { CreativeUnderline } from './NewSections';

export function AnimatedCounter({ from, to, suffix, prefix = "", duration = 2.5 }: { from: number, to: number, suffix: string, prefix?: string, duration?: number }) {
  const nodeRef = useRef<HTMLSpanElement>(null);
  const inView = useInView(nodeRef, { once: true, margin: "-50px" });

  useEffect(() => {
    if (inView && nodeRef.current) {
      const controls = animate(from, to, {
        duration,
        ease: "easeOut",
        onUpdate(value) {
          if (nodeRef.current) {
            nodeRef.current.textContent = prefix + Math.round(value).toString() + suffix;
          }
        }
      });
      return () => controls.stop();
    }
  }, [inView, from, to, duration, prefix, suffix]);

  return <span ref={nodeRef}>{prefix}{from}{suffix}</span>;
}

export function Advantage() {
  const features = [
    { icon: Sparkles, title: "Certified Expertise", sub: "Lakmé Academy Certified & Trained" },
    { icon: Award, title: <><AnimatedCounter from={0} to={3} suffix="+" /> Years Experience</>, sub: <><AnimatedCounter from={0} to={100} suffix="+" /> Doctors Trained</> },
    { icon: GraduationCap, title: "Hands-on Training", sub: <>Trained <AnimatedCounter from={0} to={500} suffix="+" /> Students</> },
    { icon: ShieldCheck, title: "Govt Registered", sub: "ISO 9001:2005 & UDYAM Certified" }
  ];

  return (
    <motion.section 
      initial={{ opacity: 0 }} 
      whileInView={{ opacity: 1 }} 
      transition={{ duration: 0.8 }} 
      viewport={{ once: true, margin: "-100px" }}
      className="py-12 md:py-16 relative overflow-hidden bg-zinc-50 dark:bg-[#09090B]"
    >
      <div className="absolute inset-0 bg-gold-gradient opacity-[0.03] pointer-events-none" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-gold-bronze/10 dark:bg-gold-metallic/10 text-gold-bronze dark:text-gold-champagne font-bold text-xs mb-4 border border-gold-bronze/20 dark:border-gold-metallic/20">
            <ShieldCheck className="w-3.5 h-3.5" />
            OUR ADVANTAGE
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold mb-6 text-zinc-900 dark:text-white text-center tracking-tight">
            Why <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-bronze to-gold-metallic">Choose Us</span>
          </h2>
          <div className="w-24 h-1 bg-gold-metallic mx-auto rounded-full opacity-70"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, idx) => {
            const Icon = feature.icon;
            return (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="group relative p-8 rounded-3xl transition-all duration-500 shadow-[0_0_15px_rgba(212,175,55,0.1)] hover:shadow-[0_0_35px_rgba(212,175,55,0.3)] active:scale-[0.98] dark:shadow-[0_0_15px_rgba(212,175,55,0.2)] dark:hover:shadow-[0_0_35px_rgba(212,175,55,0.5)] border border-gold-metallic/30 hover:border-gold-metallic overflow-hidden flex flex-col items-center text-center bg-white dark:bg-[#111]"
              >
                {/* Glare Effect Overlay */}
                <div 
                  className="absolute inset-0 bg-glare-gradient bg-[length:200%_auto] opacity-0 group-hover:opacity-30 mix-blend-overlay pointer-events-none transition-opacity duration-500"
                  style={{ animation: 'text-glare 3s linear infinite' }}
                />
                
                <div className="relative z-10">
                  <div className="mb-6 inline-flex p-4 rounded-full bg-zinc-50 dark:bg-black transition-colors duration-500 shadow-inner border border-zinc-200 dark:border-zinc-800 group-hover:border-gold-metallic/50">
                    <Icon className="w-8 h-8 text-gold-metallic transform group-hover:scale-110 transition-transform duration-500" />
                  </div>
                  <h3 className="font-extrabold text-xl mb-3 text-zinc-900 dark:text-white tracking-tight">{feature.title}</h3>
                  <p className="text-sm text-zinc-600 dark:text-zinc-400 font-medium leading-relaxed">{feature.sub}</p>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </motion.section>
  );
}

export function FounderSpotlight() {
  return (
    <motion.section 
      id="founder"
      initial={{ opacity: 0, y: 50 }} 
      whileInView={{ opacity: 1, y: 0 }} 
      transition={{ duration: 0.8 }} 
      viewport={{ once: true, margin: "-100px" }}
      className="py-12 md:py-16"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="glass-card rounded-3xl overflow-hidden flex flex-col lg:flex-row shadow-2xl relative group">
          {/* Glare Effect Overlay applied to the whole card */}
          <div 
            className="absolute inset-0 bg-glare-gradient bg-[length:200%_auto] opacity-30 mix-blend-overlay pointer-events-none z-10"
            style={{ animation: 'text-glare 4s linear infinite' }}
          />
          <div className="lg:w-2/5 min-h-[350px] lg:min-h-[450px] relative overflow-hidden">
            <img 
              src="/hero/Founder%20pic/Sushmitha.png" 
              alt="Sushmitha"
              className="absolute inset-0 w-full h-full object-cover object-top transition-transform duration-1000 group-hover:scale-105 z-0"
            />
          </div>
          <div className="lg:w-3/5 p-8 lg:p-12 xl:p-16 flex flex-col justify-center bg-white/50 dark:bg-black/20 relative z-20">
            <h2 className="text-sm font-bold tracking-widest text-gold-bronze dark:text-gold-metallic uppercase mb-2">About The Founder</h2>
            <h3 className="text-3xl lg:text-4xl font-extrabold mb-2">Sushmitha</h3>
            <p className="text-lg italic text-gold-bronze dark:text-gold-champagne mb-8 font-medium">"Empowering Dreams Through Beauty Education."</p>
            <div className="text-zinc-700 dark:text-zinc-300 text-base lg:text-lg leading-relaxed space-y-6 mb-8">
              <p>
                As the creative force behind SK International Institute of Skills, I am a dedicated makeup artist with a deep passion for skin, hair, aesthetics, and SPMU. Treating every face as a unique canvas, I specialize in bridal makeup and advanced skincare. My goal is to make your most cherished moments truly unforgettable by enhancing your natural beauty. Let me help you shine with a look that elevates your confidence and lasts far beyond the moment.
              </p>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}

export const servicesData = [
  // Skin Care
  { category: 'Skin Care', icon: Sparkles, type: 'Service', title: "Acne Scar Removal", price: "₹1,999", desc: "Involves various treatments aimed at reducing the appearance of scars left by acne.", img: "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?auto=format&fit=crop&q=80" },
  { category: 'Skin Care', icon: Sparkles, type: 'Service', title: "Advance Yellow Peel", price: "₹2,999", desc: "Chemical peel used to treat hyperpigmentation, acne, fine lines, and uneven skin tone with minimal downtime.", img: "https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&q=80" },
  { category: 'Skin Care', icon: Sparkles, type: 'Service', title: "Anti Acne Treatment", price: "₹1,299", desc: "Strategies and products aimed at reducing and managing pimples, blackheads, whiteheads, and cysts.", img: "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?auto=format&fit=crop&q=80" },
  { category: 'Skin Care', icon: Sparkles, type: 'Service', title: "Carbon Peel Facial", price: "₹2,499", desc: "Also known as a 'Hollywood peel', a non-invasive laser treatment combining carbon lotion and laser for rejuvenation.", img: "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?auto=format&fit=crop&q=80" },
  { category: 'Skin Care', icon: Sparkles, type: 'Service', title: "Chemical Peels", price: "₹1,299", desc: "Exfoliates the skin, improves texture, and reveals fresh, smoother skin underneath.", img: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&q=80" },
  { category: 'Skin Care', icon: Sparkles, type: 'Service', title: "Dark Neck Treatment", price: "₹1,499", desc: "Effective treatments and remedies for improving the appearance of hyperpigmentation and dark neck skin.", img: "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?auto=format&fit=crop&q=80" },
  { category: 'Skin Care', icon: Sparkles, type: 'Service', title: "Dermaplanning", price: "₹1,198", desc: "Gently scrapes off dead skin cells and peach fuzz to exfoliate, leaving skin smoother and brighter.", img: "https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&q=80" },
  { category: 'Skin Care', icon: Sparkles, type: 'Service', title: "Facial", price: "₹499", desc: "Customized skincare treatment including cleansing, exfoliating, steaming, and massaging.", img: "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?auto=format&fit=crop&q=80" },
  { category: 'Skin Care', icon: Sparkles, type: 'Service', title: "Hydra Facial", price: "₹1,499", desc: "Non-invasive treatment combining cleansing, exfoliation, extraction, hydration, and antioxidant protection.", img: "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?auto=format&fit=crop&q=80" },
  { category: 'Skin Care', icon: Sparkles, type: 'Service', title: "Microdermabrasion", price: "₹1,499", desc: "Minimally invasive procedure to exfoliate the outermost layer of dead skin cells for improved texture.", img: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&q=80" },
  { category: 'Skin Care', icon: Sparkles, type: 'Service', title: "Microneedling", price: "₹2,499", desc: "Uses fine needles to create micro-injuries that stimulate collagen and elastin production.", img: "https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&q=80" },
  { category: 'Skin Care', icon: Sparkles, type: 'Service', title: "SK Signature Facial", price: "₹2,499", desc: "Customized medi-facial utilizing medical-grade products to address specific skin concerns.", img: "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?auto=format&fit=crop&q=80" },
  { category: 'Skin Care', icon: Sparkles, type: 'Service', title: "Under Eye Treatment", price: "₹1,299", desc: "Addresses dark circles, puffiness, fine lines, and wrinkles caused by various factors.", img: "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?auto=format&fit=crop&q=80" },
  { category: 'Skin Care', icon: Sparkles, type: 'Service', title: "Warts & Mole Removal", price: "₹199", desc: "Safe removal of cosmetically undesirable or uncomfortable common skin growths.", img: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&q=80" },

  // Hair & Makeup
  { category: 'Hair & Makeup', icon: Scissors, type: 'Service', title: "Laser Hair Removal", price: "₹1,499", desc: "Uses concentrated light beams to target melanin, damaging the follicle to inhibit future hair growth.", img: "https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&q=80" },
  { category: 'Hair & Makeup', icon: Heart, type: 'Service', title: "Lip Pigmentation", price: "₹1,099", desc: "Treatment for the darkening or discoloration of the lips caused by genetics or lifestyle.", img: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&q=80" },
  { category: 'Hair & Makeup', icon: Heart, type: 'Service', title: "Professional Makeup", price: "Custom", desc: "Bridal Makeup, Party Makeup, Airbrush, Haldi & Occasional Styling.", img: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&q=80" },
  { category: 'Hair & Makeup', icon: Scissors, type: 'Service', title: "Hair Care & Treatments", price: "Custom", desc: "Keratin, Hair Spa, Botox, Smoothing, Damage Control.", img: "https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&q=80" },

  // Nails & Spa
  { category: 'Nails & Spa', icon: Flower2, type: 'Service', title: "Manicure", price: "₹499", desc: "Cosmetic treatment for hands and nails, including trimming, shaping, cuticle care, and massage.", img: "https://images.unsplash.com/photo-1519014816548-bf5fe059e98b?auto=format&fit=crop&q=80" },
  { category: 'Nails & Spa', icon: Flower2, type: 'Service', title: "Pedicure", price: "₹599", desc: "Cosmetic treatment for the feet and toenails to improve appearance and health.", img: "https://images.unsplash.com/photo-1519014816548-bf5fe059e98b?auto=format&fit=crop&q=80" },
  { category: 'Nails & Spa', icon: Flower2, type: 'Service', title: "Pedi-Spa", price: "₹899", desc: "Enhanced pedicure treatment combined with spa-like features for a luxurious experience.", img: "https://images.unsplash.com/photo-1519014816548-bf5fe059e98b?auto=format&fit=crop&q=80" },
  { category: 'Nails & Spa', icon: Flower2, type: 'Service', title: "Signature Medi-Pedispa", price: "₹1,299", desc: "Specialized foot care focusing on addressing more complex foot issues with thorough, high-quality care.", img: "https://images.unsplash.com/photo-1519014816548-bf5fe059e98b?auto=format&fit=crop&q=80" },
  { category: 'Nails & Spa', icon: Flower2, type: 'Service', title: "Signature Medi-Manispa", price: "₹1,299", desc: "Medical manicure combining traditional nail care with advanced treatments to improve health.", img: "https://images.unsplash.com/photo-1519014816548-bf5fe059e98b?auto=format&fit=crop&q=80" },
  { category: 'Nails & Spa', icon: Flower2, type: 'Service', title: "Waxing", price: "₹499", desc: "Method of hair removal that removes the hair directly from the root.", img: "https://images.unsplash.com/photo-1519014816548-bf5fe059e98b?auto=format&fit=crop&q=80" },

  // Courses
  { category: 'Courses', icon: GraduationCap, type: 'Course', title: "Aesthetic Course", price: "Contact for price", desc: "Professional aesthetic training covering various advanced techniques and treatments.", img: "/DSC04305.JPG" },
  { category: 'Courses', icon: GraduationCap, type: 'Course', title: "PMU Course", price: "Contact for price", desc: "Intensive training in Permanent Makeup, including eyebrow, lip, and eyeliner techniques.", img: "/WhatsApp Image 2026-08-01 at 6.23.29 PM.jpeg" },
  { category: 'Courses', icon: GraduationCap, type: 'Course', title: "Nail Art Course", price: "Contact for price", desc: "Master the art of nail design, extensions, and professional nail care.", img: "/DSC05703.JPG" },
  { category: 'Courses', icon: GraduationCap, type: 'Course', title: "Hair Course", price: "Contact for price", desc: "Comprehensive training in haircuts, styling, coloring, and hair treatments.", img: "/DSC04559 (1).JPG" },
  { category: 'Courses', icon: GraduationCap, type: 'Course', title: "Hair Extension", price: "Contact for price", desc: "Learn advanced hair extension techniques and proper maintenance.", img: "/DSC04559 (1).JPG" },
];

export function ServicesGrid({ onNavigate }: { onNavigate?: (page: string) => void }) {
  const topServices = servicesData.filter(s => ['Acne Scar Removal', 'Professional Makeup', 'Laser Hair Removal'].includes(s.title));

  return (
    <motion.section 
      id="services" 
      initial={{ opacity: 0, y: 50 }} 
      whileInView={{ opacity: 1, y: 0 }} 
      transition={{ duration: 0.8 }} 
      viewport={{ once: true, margin: "-100px" }}
      className="py-12 md:py-16 bg-zinc-50 dark:bg-[#0c0c0e]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-gold-bronze/10 dark:bg-gold-metallic/10 text-gold-bronze dark:text-gold-champagne font-bold text-xs mb-4 border border-gold-bronze/20 dark:border-gold-metallic/20">
            <Sparkles className="w-3.5 h-3.5" />
            PREMIUM TREATMENTS
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold mb-6 text-zinc-900 dark:text-white text-center tracking-tight">
            Core <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-bronze to-gold-metallic">Services</span>
          </h2>
          <CreativeUnderline />
          <p className="text-lg text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto mt-6">
            Explore our extensive range of premium aesthetic treatments.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:[&>*:nth-child(3n+2)]:translate-y-12 pb-12">
          {topServices.map((svc, idx) => {
            const Icon = svc.icon;
            return (
              <motion.div 
                key={svc.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                whileHover={{ y: -10 }}
                className="group glass-card rounded-2xl overflow-hidden cursor-pointer flex flex-col h-full hover:shadow-2xl hover:shadow-gold-metallic/10 active:scale-[0.98] transition-all duration-300 border border-zinc-200 dark:border-zinc-800"
              >
                <div className="h-48 relative flex items-center justify-center bg-zinc-100 dark:bg-[#1a1a1a] group-hover:bg-gold-bronze/10 dark:group-hover:bg-gold-metallic/10 transition-colors duration-500 overflow-hidden">
                  <Icon className="w-24 h-24 text-gold-bronze dark:text-gold-metallic opacity-20 absolute -right-4 -bottom-4 group-hover:scale-110 transition-transform duration-700" />
                  <Icon className="w-16 h-16 text-gold-bronze dark:text-gold-metallic group-hover:scale-110 transition-transform duration-700 relative z-10" />
                  <div className="absolute top-4 left-4 z-20 px-3 py-2 bg-white/90 dark:bg-black/80 backdrop-blur-md rounded-lg flex items-center gap-2 shadow-sm">
                    <Icon className="w-4 h-4 text-gold-bronze dark:text-gold-metallic" />
                    <span className="text-xs font-bold uppercase tracking-wider text-zinc-900 dark:text-white">{svc.type}</span>
                  </div>
                </div>
                <div className="p-8 flex-1 flex flex-col bg-white dark:bg-[#111]">
                  <h3 className="font-extrabold text-xl lg:text-2xl mb-3 text-zinc-900 dark:text-white leading-tight">{svc.title}</h3>
                  {svc.price && (
                    <div className="inline-block px-3 py-1 bg-gold-bronze/10 dark:bg-gold-metallic/10 rounded-full text-gold-bronze dark:text-gold-champagne font-bold text-sm mb-4 w-fit border border-gold-bronze/20 dark:border-gold-metallic/20">
                      {svc.price}
                    </div>
                  )}
                  <p className="text-zinc-600 dark:text-zinc-400 text-sm lg:text-base mb-8 flex-1 leading-relaxed">{svc.desc}</p>
                  <a href="#" className="inline-flex items-center gap-2 text-sm font-bold text-gold-bronze dark:text-gold-champagne group-hover:gap-3 transition-all mt-auto uppercase tracking-wide">
                    Know More <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </motion.div>
            )
          })}
        </div>
        
        <div className="mt-16 text-center">
          <button 
            onClick={() => onNavigate && onNavigate('services')}
            className="inline-flex items-center gap-2 px-8 py-4 bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 font-bold rounded-full hover:scale-105 transition-transform"
          >
            View All Services <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </motion.section>
  );
}
export function CoursesGrid({ onNavigate }: { onNavigate?: (page: string) => void }) {
  const courses = servicesData.filter(s => s.category === 'Courses');

  return (
    <motion.section 
      id="courses" 
      initial={{ opacity: 0, y: 50 }} 
      whileInView={{ opacity: 1, y: 0 }} 
      transition={{ duration: 0.8 }} 
      viewport={{ once: true, margin: "-100px" }}
      className="pt-16 pb-16 md:pt-24 md:pb-24 bg-white dark:bg-[#09090B] relative overflow-hidden"
    >
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-gold-metallic/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-zinc-400/10 dark:bg-zinc-800/20 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 md:mb-24 relative">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold-bronze/10 dark:bg-gold-metallic/10 text-gold-bronze dark:text-gold-champagne font-bold text-sm mb-6 border border-gold-bronze/20 dark:border-gold-metallic/20">
            <GraduationCap className="w-4 h-4" />
            WORLD CLASS EDUCATION
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-7xl font-extrabold mb-6 text-zinc-900 dark:text-white text-center tracking-tight">
            Professional <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-bronze to-gold-metallic">Academy</span>
          </h2>
          <CreativeUnderline />
          <p className="text-lg md:text-xl text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto mt-6 leading-relaxed">
            Transform your passion into a career with our globally valid certification courses. Learn from industry experts and master advanced techniques.
          </p>
        </div>
        
        <div className="flex flex-col gap-12 lg:gap-32 pb-12">
          {courses.map((svc, idx) => {
            const Icon = svc.icon;
            const isEven = idx % 2 !== 0;

            return (
              <motion.div 
                key={svc.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.7, ease: "easeOut" }}
                className={`flex flex-col ${isEven ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-6 sm:gap-8 lg:gap-16 group bg-zinc-50/80 dark:bg-[#111]/80 p-5 sm:p-8 lg:p-0 rounded-[2.5rem] lg:bg-transparent lg:dark:bg-transparent`}
              >
                {/* Image Section */}
                <div className="w-full lg:w-[55%] relative">
                  <div className="relative rounded-[2rem] lg:rounded-[3rem] overflow-hidden aspect-[4/3] lg:aspect-[16/10] shadow-[0_10px_30px_rgba(0,0,0,0.1)] lg:shadow-[0_20px_50px_rgba(0,0,0,0.15)] dark:shadow-[0_10px_30px_rgba(0,0,0,0.3)] lg:dark:shadow-[0_20px_50px_rgba(0,0,0,0.4)] border border-zinc-200/50 dark:border-zinc-800/50 group-hover:shadow-[0_30px_60px_rgba(212,175,55,0.15)] transition-all duration-700">
                    <img 
                      src={svc.img} 
                      alt={svc.title} 
                      className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000 ease-out" 
                    />
                    <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors duration-700" />
                    
                    {/* Badge */}
                    <div className="absolute top-4 left-4 sm:top-6 sm:left-6 lg:top-8 lg:left-8 z-20 px-3 py-1.5 sm:px-4 sm:py-2 lg:px-5 lg:py-2.5 bg-white/95 dark:bg-black/90 backdrop-blur-md rounded-xl sm:rounded-2xl flex items-center gap-1.5 sm:gap-2 shadow-lg border border-white/20 dark:border-zinc-700/50">
                      <Icon className="w-3.5 h-3.5 sm:w-4 sm:h-4 lg:w-5 lg:h-5 text-gold-bronze dark:text-gold-metallic" />
                      <span className="text-[10px] sm:text-xs lg:text-sm font-bold uppercase tracking-widest text-zinc-900 dark:text-white">{svc.type}</span>
                    </div>
                  </div>
                  
                  {/* Decorative Background Element */}
                  <div className={`absolute -z-10 w-full h-full rounded-[3rem] border-2 border-gold-metallic/20 hidden lg:block ${isEven ? '-top-8 -right-8' : '-bottom-8 -left-8'} transition-transform duration-700 group-hover:translate-x-0 group-hover:translate-y-0`} />
                </div>

                {/* Content Section */}
                <div className="w-full lg:w-[45%] flex flex-col justify-center py-2 sm:py-4 lg:py-0 px-2 sm:px-0">
                  <h3 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-black mb-4 lg:mb-6 text-zinc-900 dark:text-white leading-[1.1] tracking-tight group-hover:text-gold-bronze dark:group-hover:text-gold-champagne transition-colors">
                    {svc.title}
                  </h3>
                  
                  {svc.price && (
                    <div className="inline-flex items-center gap-2 px-4 py-2 sm:px-5 sm:py-2.5 bg-zinc-200/50 dark:bg-zinc-800/50 lg:bg-zinc-100 lg:dark:bg-zinc-900 rounded-full text-gold-bronze dark:text-gold-champagne font-bold text-xs sm:text-sm mb-6 w-fit border border-zinc-200 dark:border-zinc-800 shadow-sm">
                      <Sparkles className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                      {svc.price}
                    </div>
                  )}
                  
                  <p className="text-base sm:text-lg lg:text-xl text-zinc-600 dark:text-zinc-400 mb-8 lg:mb-12 leading-relaxed font-medium">
                    {svc.desc}
                  </p>
                  
                  <div>
                    {['Aesthetic Course', 'PMU Course'].includes(svc.title) ? (
                      <button 
                        type="button"
                        onClick={() => { 
                          if (svc.title === 'Aesthetic Course' && onNavigate) onNavigate('course-aesthetic'); 
                          else if (svc.title === 'PMU Course' && onNavigate) onNavigate('course-pmu');
                        }} 
                        className="inline-flex items-center justify-center gap-2 sm:gap-3 font-bold transition-all uppercase tracking-wider bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 px-6 py-3.5 sm:px-8 sm:py-4 lg:px-10 lg:py-5 text-sm sm:text-base rounded-full hover:bg-gold-gradient hover:text-zinc-900 shadow-xl hover:shadow-[0_15px_30px_rgba(212,175,55,0.3)] hover:-translate-y-1 group/btn w-full sm:w-auto cursor-pointer"
                      >
                        View Course Details
                        <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover/btn:translate-x-1 transition-transform" />
                      </button>
                    ) : (
                      <a 
                        href={`https://wa.me/918610345830?text=${encodeURIComponent(`Hello SK Academy, I would like to enroll in the ${svc.title}.`)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-2 sm:gap-3 font-bold transition-all uppercase tracking-wider bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 px-6 py-3.5 sm:px-8 sm:py-4 lg:px-10 lg:py-5 text-sm sm:text-base rounded-full hover:bg-gold-gradient hover:text-zinc-900 shadow-xl hover:shadow-[0_15px_30px_rgba(212,175,55,0.3)] hover:-translate-y-1 group/btn w-full sm:w-auto"
                      >
                        Enroll Now
                        <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover/btn:translate-x-1 transition-transform" />
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </motion.section>
  );
}

const reviews = [
  { text: "Completed my 7 Days Aesthetic Training Program! It was an amazing learning experience with hands-on practice, detailed theory sessions, and supportive guidance from Karthik Sir. The classes were well organized, and I gained valuable practical knowledge.", author: "Sidarathi Sid", role: "7 Days Aesthetic Training Program", avatar: "https://i.pravatar.cc/150?u=Sidarathi" },
  { text: "I joined the 15-day Hairdresser Course, and it was a wonderful learning experience. The trainers explained everything clearly, and every session was informative and useful. Thank you, SK Beauty Verse Academy, for this valuable training.", author: "Ananthi Selvam", role: "15-Day Hairdresser Course", avatar: "https://i.pravatar.cc/150?u=Ananthi" },
  { text: "Amazing training experience! Karthik Sir and the entire team are friendly and professional. They ensure every student is comfortable while providing excellent guidance. The focus on safety and technique is outstanding.", author: "Raja Lakshmi", role: "Student", avatar: "https://i.pravatar.cc/150?u=Raja" },
  { text: "Completed the Aesthetic Course at SK Beauty Verse Academy and I'm really impressed. The syllabus was well structured, practical training was excellent, and the trainers provided hands-on sessions with the latest aesthetic procedures.", author: "Dany Sony", role: "Aesthetic Course", avatar: "https://i.pravatar.cc/150?u=Dany" },
  { text: "The 7-day Aesthetic & PMU course was well structured and easy to understand. The trainers explained every topic clearly with both theory and practical sessions, making learning enjoyable and effective.", author: "Jency Ruby", role: "Aesthetic & PMU", avatar: "https://i.pravatar.cc/150?u=Jency" },
  { text: "The best place to learn Cosmetology and Aesthetic courses in Chennai. The academy, accommodation, and overall facilities were excellent. Karthik Sir and Nithya Mam teach professionally and make learning easy.", author: "Keerthi Mahi", role: "Student", avatar: "https://i.pravatar.cc/150?u=Keerthi" },
  { text: "I had the best experience learning Nail Art. I learned more than I expected. Special thanks to Archana Mam for her excellent guidance throughout the course.", author: "Abinaya D", role: "Nail Art", avatar: "https://i.pravatar.cc/150?u=Abinaya" },
  { text: "One of the best Beauty & Aesthetic academies. The training helped improve my skills significantly. Thank you for such valuable learning.", author: "Raziya Begam", role: "Student", avatar: "https://i.pravatar.cc/150?u=Raziya" },
  { text: "SK Beauty Verse is an excellent place to learn non-medical aesthetic courses. The short-duration program is highly useful, especially for women looking to build a career.", author: "Kani Mozhi", role: "Student", avatar: "https://i.pravatar.cc/150?u=Kani" },
  { text: "Very useful and detailed learning experience. I learned skin analysis, Hydra Facial, Microneedling, Laser Basics, and many advanced aesthetic procedures.", author: "Shalini G.", role: "Aesthetic Training", avatar: "https://i.pravatar.cc/150?u=Shalini" },
  { text: "I gained more knowledge and confidence after completing the course. The academy also arranged placement opportunities with a good salary. Thank you to the entire team.", author: "Sharmila Devi", role: "Student", avatar: "https://i.pravatar.cc/150?u=Sharmila" },
  { text: "Joining SK Beauty Verse Academy was one of the best decisions. Karthik Sir explained every topic patiently and clearly. The academy also provided food and comfortable accommodation.", author: "Nisha Krishi", role: "Aesthetic & PMU", avatar: "https://i.pravatar.cc/150?u=Nisha" },
  { text: "It was a great learning experience. I gained excellent exposure to nail extensions and nail art. Thanks to Archana Mam for sharing her knowledge.", author: "Somu Sumathi", role: "Nail Extensions", avatar: "https://i.pravatar.cc/150?u=Somu" },
  { text: "The classes were excellent. Everything was explained clearly, and the trainers patiently cleared every doubt. I completed my course with complete confidence.", author: "Jayashree Santhosh", role: "Student", avatar: "https://i.pravatar.cc/150?u=Jayashree" },
  { text: "I'm really happy to study here. Karthik Sir's teaching style is friendly and engaging. I learned many new techniques and feel proud to have studied here.", author: "Nilaloshi Nila", role: "Student", avatar: "https://i.pravatar.cc/150?u=Nilaloshi" },
  { text: "Excellent academy with experienced trainers. The hostel is comfortable, hygienic, and the food is good. Thank you, Karthik Sir, for your excellent guidance.", author: "Priya S", role: "Student", avatar: "https://i.pravatar.cc/150?u=Priya" },
  { text: "Excellent learning experience with valuable knowledge. Thank you so much, Karthik Sir and the SK Academy team.", author: "Bhavani Praveenkumar", role: "Student", avatar: "https://i.pravatar.cc/150?u=Bhavani" },
  { text: "Excellent coaching by Karthik Sir. Even with no prior knowledge, I learned through extensive practical sessions. The food, accommodation, and explanations were excellent.", author: "Shenbaga Valli", role: "Student", avatar: "https://i.pravatar.cc/150?u=Shenbaga" },
  { text: "One of the best academies in Chennai. The syllabus is completed in a short duration without compromising quality. The certificate is valuable, and the teaching is excellent.", author: "Surya Surya", role: "Student", avatar: "https://i.pravatar.cc/150?u=Surya" },
  { text: "Great learning experience. Both the theory and practical sessions exceeded my expectations.", author: "Manju Beauty", role: "Student", avatar: "https://i.pravatar.cc/150?u=Manju" },
  { text: "I completed the Aesthetic Class training. It was a detailed and highly useful learning experience.", author: "Harini Baskaran", role: "Student", avatar: "https://i.pravatar.cc/150?u=Harini" },
  { text: "Excellent trainers. The hostel is clean, hygienic, and safe. Daily food was provided, making the entire learning experience comfortable.", author: "Ramya Perumal", role: "Student", avatar: "https://i.pravatar.cc/150?u=Ramya" },
  { text: "A very useful course with kind trainers. The academy also provides immediate job opportunities, making it ideal for homemakers and aspiring beauticians.", author: "Babu Ji", role: "Student", avatar: "https://i.pravatar.cc/150?u=Babu" },
  { text: "Best place to learn. Excellent coaching and valuable practical knowledge.", author: "Subhashiny Gopinath", role: "Student", avatar: "https://i.pravatar.cc/150?u=Subhashiny" },
  { text: "The Aesthetic and PMU course was highly informative. Free food and accommodation made learning comfortable. I recommend this academy to anyone looking to upgrade their career.", author: "Kousy", role: "Student", avatar: "https://i.pravatar.cc/150?u=Kousy" },
  { text: "Best academy in Chennai. They cover a comprehensive syllabus in a short period with extensive practical sessions. Free food and accommodation are a great advantage.", author: "Azhagi Makeup Artist", role: "Student", avatar: "https://i.pravatar.cc/150?u=Azhagi" },
  { text: "Very useful training with advanced teaching techniques. The trainers explain every concept professionally.", author: "Rathika Manikandan", role: "Student", avatar: "https://i.pravatar.cc/150?u=Rathika" },
  { text: "An amazing experience beyond my expectations. The classes, practical sessions, and knowledge shared were outstanding. Highly recommended for anyone serious about building a career in aesthetics.", author: "Nag Ammi", role: "Student", avatar: "https://i.pravatar.cc/150?u=Nag" },
  { text: "The classes were excellent and easy to understand. After the 7-day course, I feel much more confident. Overall, it was a wonderful experience.", author: "Kalaiselvi", role: "Student", avatar: "https://i.pravatar.cc/150?u=Kalaiselvi" },
  { text: "I had no knowledge about aesthetics before joining. Now I feel confident because of the excellent theory classes, practical sessions, and safe accommodation provided.", author: "Megha Baskaran", role: "Student", avatar: "https://i.pravatar.cc/150?u=Megha" }
];

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => setCurrentIndex((curr) => (curr + 1) % reviews.length);
  const prev = () => setCurrentIndex((curr) => (curr - 1 + reviews.length) % reviews.length);

  return (
    <motion.section 
      initial={{ opacity: 0 }} 
      whileInView={{ opacity: 1 }} 
      transition={{ duration: 0.8 }} 
      viewport={{ once: true, margin: "-100px" }}
      className="pt-12 pb-12 md:pt-16 md:pb-16 relative overflow-hidden bg-zinc-50 dark:bg-[#111]"
    >
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-gold-metallic/5 blur-[120px] rounded-full pointer-events-none -z-10"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-gold-bronze/10 dark:bg-gold-metallic/10 text-gold-bronze dark:text-gold-champagne font-bold text-xs mb-4 border border-gold-bronze/20 dark:border-gold-metallic/20">
            <Heart className="w-3.5 h-3.5" />
            SUCCESS STORIES
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold mb-6 text-zinc-900 dark:text-white text-center tracking-tight">
            What Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-bronze to-gold-metallic">Students Say</span>
          </h2>
          <CreativeUnderline />
          <p className="text-lg md:text-xl text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto mt-6 leading-relaxed">
            Real feedback from our graduates who have successfully transformed their careers.
          </p>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12 relative max-w-5xl mx-auto">
          
          <button onClick={prev} className="w-12 h-12 shrink-0 rounded-full bg-white dark:bg-zinc-900 shadow-lg border border-zinc-200 dark:border-zinc-800 flex items-center justify-center text-zinc-900 dark:text-white hover:text-gold-metallic dark:hover:text-gold-metallic hover:scale-105 transition-all z-20 hidden md:flex">
            <ChevronLeft className="w-6 h-6" />
          </button>
          
          <div className="relative w-full max-w-3xl min-h-[380px] md:min-h-[300px] h-auto pb-4">
            {/* Stack layers */}
            <div className="absolute inset-0 bg-zinc-200 dark:bg-zinc-800 rounded-2xl transform rotate-[-2deg] scale-[0.98] shadow-xl border border-zinc-300 dark:border-zinc-700 z-0 transition-transform duration-500"></div>
            <div className="absolute inset-0 bg-zinc-100 dark:bg-zinc-800/80 rounded-2xl transform rotate-[2deg] scale-[0.98] shadow-xl border border-zinc-200 dark:border-zinc-700 z-0 transition-transform duration-500"></div>
            
            <AnimatePresence mode="wait">
              <motion.div 
                key={currentIndex}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="absolute inset-0 bg-white dark:bg-[#18181B] rounded-2xl shadow-2xl border border-zinc-100 dark:border-zinc-800 p-8 md:p-12 flex flex-col justify-center z-10"
              >
                <h3 className="text-lg md:text-xl font-medium leading-relaxed text-zinc-800 dark:text-zinc-200 mb-8">
                  "{reviews[currentIndex].text}"
                </h3>
                
                <div className="flex items-center gap-4 mt-auto">
                  <div className="w-10 h-10 rounded-full bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center shadow-sm border border-zinc-200 dark:border-zinc-700">
                    <User className="w-5 h-5 text-zinc-500 dark:text-zinc-400" />
                  </div>
                  <div>
                    <h4 className="font-bold text-zinc-900 dark:text-white text-sm">{reviews[currentIndex].author}</h4>
                    <p className="text-xs text-gold-metallic">{reviews[currentIndex].role}</p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <button onClick={next} className="w-12 h-12 shrink-0 rounded-full bg-white dark:bg-zinc-900 shadow-lg border border-zinc-200 dark:border-zinc-800 flex items-center justify-center text-zinc-900 dark:text-white hover:text-gold-metallic dark:hover:text-gold-metallic hover:scale-105 transition-all z-20 hidden md:flex">
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Mobile buttons */}
          <div className="flex gap-4 mt-4 md:hidden">
            <button onClick={prev} className="w-12 h-12 rounded-full bg-white dark:bg-zinc-900 shadow-lg border border-zinc-200 dark:border-zinc-800 flex items-center justify-center text-zinc-900 dark:text-white hover:text-gold-metallic dark:hover:text-gold-metallic hover:scale-105 transition-all">
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button onClick={next} className="w-12 h-12 rounded-full bg-white dark:bg-zinc-900 shadow-lg border border-zinc-200 dark:border-zinc-800 flex items-center justify-center text-zinc-900 dark:text-white hover:text-gold-metallic dark:hover:text-gold-metallic hover:scale-105 transition-all">
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

        </div>
      </div>
    </motion.section>
  );
}

export function VideoTestimonials() {
  const videos = [
    { title: "PMU & Aesthetic Course", src: "/videos/aestheticandpmu.mp4" },
    { title: "Nail Course", src: "/videos/Video-80734.mp4" },
    { title: "Hair Course", src: "/videos/Video-81156.mp4" },
  ];

  return (
    <motion.section 
      initial={{ opacity: 0 }} 
      whileInView={{ opacity: 1 }} 
      transition={{ duration: 0.8 }} 
      viewport={{ once: true, margin: "-100px" }}
      className="pt-4 pb-0 md:pt-8 md:pb-4 bg-zinc-50 dark:bg-[#111]"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-gold-bronze/10 dark:bg-gold-metallic/10 text-gold-bronze dark:text-gold-champagne font-bold text-xs mb-4 border border-gold-bronze/20 dark:border-gold-metallic/20">
            <Heart className="w-3.5 h-3.5" />
            HEAR FROM THEM
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold mb-6 text-zinc-900 dark:text-white text-center tracking-tight">
            Student <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-bronze to-gold-metallic">Testimonials</span>
          </h2>
          <CreativeUnderline />
        </div>
        <div className="flex flex-wrap md:flex-nowrap justify-center gap-4 md:gap-8">
          {videos.map((video, idx) => (
            <motion.div 
              key={idx} 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              viewport={{ once: true }}
              className="w-full sm:w-[calc(50%-0.5rem)] md:w-full md:flex-1 bg-white dark:bg-zinc-900 p-3 sm:p-6 rounded-2xl sm:rounded-3xl border border-gold-metallic/30 shadow-[0_0_30px_rgba(212,175,55,0.1)] overflow-hidden flex flex-col hover:-translate-y-2 transition-transform duration-300"
            >
              <h3 className="text-sm sm:text-xl font-bold text-center text-zinc-900 dark:text-white mb-2 sm:mb-4 flex items-center justify-center min-h-[2.5rem] sm:min-h-[auto]">{video.title}</h3>
              <div className="relative w-full aspect-[9/16] bg-zinc-100 dark:bg-zinc-800 rounded-lg sm:rounded-2xl overflow-hidden shadow-inner group">
                <video 
                  src={video.src} 
                  controls 
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}


import { Sparkles, Award, GraduationCap, ShieldCheck, Scissors, Heart, Star, ArrowRight, Flower2 } from 'lucide-react';
import { motion, useInView, animate } from 'framer-motion';
import { useEffect, useRef } from 'react';

function AnimatedCounter({ from, to, suffix, prefix = "", duration = 2.5 }: { from: number, to: number, suffix: string, prefix?: string, duration?: number }) {
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
    { icon: Award, title: <><AnimatedCounter from={0} to={3} suffix="+" /> Years Experience</>, sub: <><AnimatedCounter from={0} to={488} suffix="+" /> Satisfied Clients</> },
    { icon: GraduationCap, title: "Hands-on Training", sub: <>Trained <AnimatedCounter from={0} to={500} suffix="+" /> Students</> },
    { icon: ShieldCheck, title: "Govt Registered", sub: "ISO 9001:2005 & UDYAM Certified" }
  ];

  return (
    <motion.section 
      initial={{ opacity: 0 }} 
      whileInView={{ opacity: 1 }} 
      transition={{ duration: 0.8 }} 
      viewport={{ once: true, margin: "-100px" }}
      className="py-24 relative overflow-hidden bg-zinc-50 dark:bg-[#09090B]"
    >
      <div className="absolute inset-0 bg-gold-gradient opacity-[0.03] pointer-events-none" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-zinc-900 dark:text-white tracking-wider mb-2">Why Choose Us</h2>
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
                className="group relative p-8 rounded-3xl transition-all duration-500 shadow-[0_0_15px_rgba(212,175,55,0.1)] hover:shadow-[0_0_35px_rgba(212,175,55,0.3)] dark:shadow-[0_0_15px_rgba(212,175,55,0.2)] dark:hover:shadow-[0_0_35px_rgba(212,175,55,0.5)] border border-gold-metallic/30 hover:border-gold-metallic overflow-hidden flex flex-col items-center text-center bg-white dark:bg-[#111]"
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
      id="about"
      initial={{ opacity: 0, y: 50 }} 
      whileInView={{ opacity: 1, y: 0 }} 
      transition={{ duration: 0.8 }} 
      viewport={{ once: true, margin: "-100px" }}
      className="py-24"
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
              alt="Sushmitha Karthick"
              className="absolute inset-0 w-full h-full object-cover object-top transition-transform duration-1000 group-hover:scale-105 z-0"
            />
          </div>
          <div className="lg:w-3/5 p-8 lg:p-12 xl:p-16 flex flex-col justify-center bg-white/50 dark:bg-black/20 relative z-20">
            <h2 className="text-sm font-bold tracking-widest text-gold-bronze dark:text-gold-metallic uppercase mb-2">About The Founder</h2>
            <h3 className="text-3xl lg:text-4xl font-extrabold mb-2">Sushmitha Karthick</h3>
            <p className="text-lg italic text-gold-bronze dark:text-gold-champagne mb-8 font-medium">"Empowering Dreams Through Beauty Education."</p>
            <div className="text-zinc-700 dark:text-zinc-300 text-base lg:text-lg leading-relaxed space-y-6 mb-8">
              <p>
                As the creative force behind SK Beauty-Verse, I am a dedicated makeup artist with a deep passion for skin, hair, aesthetics, and SPMU. Treating every face as a unique canvas, I specialize in bridal makeup and advanced skincare. My goal is to make your most cherished moments truly unforgettable by enhancing your natural beauty. Let me help you shine with a look that elevates your confidence and lasts far beyond the moment.
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
  { category: 'Courses', icon: GraduationCap, type: 'Course', title: "Aesthetic Course", price: "₹24,999 - ₹44,999", desc: "In-depth training with a globally valid LAPT certificate. Covers dermal fillers, chemical peels, microneedling.", img: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&q=80" },
  { category: 'Courses', icon: GraduationCap, type: 'Course', title: "Beautician & Cosmetology", price: "₹14,999 - ₹24,999", desc: "Comprehensive training in skincare, haircare, makeup, and nail art. Provides both theoretical knowledge and hands-on practice.", img: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&q=80" },
  { category: 'Courses', icon: GraduationCap, type: 'Course', title: "Semi-Permanent Makeup", price: "₹14,999", desc: "2-Day intensive course covering fundamentals to advanced techniques in eyebrow microblading, lip blush, and eyeliner tattooing.", img: "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?auto=format&fit=crop&q=80" },
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
      className="py-24 bg-zinc-50 dark:bg-[#0c0c0e]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 text-zinc-900 dark:text-white">Core Services</h2>
          <p className="text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto">Explore our extensive range of premium aesthetic treatments.</p>
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
                className="group glass-card rounded-2xl overflow-hidden cursor-pointer flex flex-col h-full hover:shadow-2xl hover:shadow-gold-metallic/10 transition-all duration-300 border border-zinc-200 dark:border-zinc-800"
              >
                <div className="h-56 relative overflow-hidden">
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors z-10" />
                  <img src={svc.img} alt={svc.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                  <div className="absolute top-4 left-4 z-20 px-3 py-2 bg-white/90 dark:bg-black/80 backdrop-blur-md rounded-lg flex items-center gap-2">
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

export function CoursesGrid() {
  const courses = servicesData.filter(s => s.category === 'Courses');

  return (
    <motion.section 
      id="courses" 
      initial={{ opacity: 0, y: 50 }} 
      whileInView={{ opacity: 1, y: 0 }} 
      transition={{ duration: 0.8 }} 
      viewport={{ once: true, margin: "-100px" }}
      className="py-24 bg-white dark:bg-[#09090B]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 text-zinc-900 dark:text-white">Professional Academy</h2>
          <p className="text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto">Transform your passion into a career with our globally valid certification courses.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:[&>*:nth-child(3n+2)]:translate-y-12 pb-12">
          {courses.map((svc, idx) => {
            const Icon = svc.icon;
            return (
              <motion.div 
                key={svc.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                whileHover={{ y: -10 }}
                className="group glass-card rounded-2xl overflow-hidden cursor-pointer flex flex-col h-full hover:shadow-2xl hover:shadow-gold-metallic/10 transition-all duration-300 border border-zinc-200 dark:border-zinc-800"
              >
                <div className="h-56 relative overflow-hidden">
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors z-10" />
                  <img src={svc.img} alt={svc.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                  <div className="absolute top-4 left-4 z-20 px-3 py-2 bg-white/90 dark:bg-black/80 backdrop-blur-md rounded-lg flex items-center gap-2">
                    <Icon className="w-4 h-4 text-gold-bronze dark:text-gold-metallic" />
                    <span className="text-xs font-bold uppercase tracking-wider text-zinc-900 dark:text-white">{svc.type}</span>
                  </div>
                </div>
                <div className="p-8 flex-1 flex flex-col bg-zinc-50 dark:bg-[#111]">
                  <h3 className="font-extrabold text-xl lg:text-2xl mb-3 text-zinc-900 dark:text-white leading-tight">{svc.title}</h3>
                  {svc.price && (
                    <div className="inline-block px-3 py-1 bg-gold-bronze/10 dark:bg-gold-metallic/10 rounded-full text-gold-bronze dark:text-gold-champagne font-bold text-sm mb-4 w-fit border border-gold-bronze/20 dark:border-gold-metallic/20">
                      {svc.price}
                    </div>
                  )}
                  <p className="text-zinc-600 dark:text-zinc-400 text-sm lg:text-base mb-8 flex-1 leading-relaxed">{svc.desc}</p>
                  <a href="#" className="inline-flex items-center gap-2 text-sm font-bold text-gold-bronze dark:text-gold-champagne group-hover:gap-3 transition-all mt-auto uppercase tracking-wide">
                    Enroll Now <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </motion.section>
  );
}

export function Testimonials() {
  return (
    <motion.section 
      initial={{ opacity: 0, scale: 0.95 }} 
      whileInView={{ opacity: 1, scale: 1 }} 
      transition={{ duration: 0.8 }} 
      viewport={{ once: true, margin: "-100px" }}
      className="py-24 relative overflow-hidden"
    >
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-gold-metallic/5 blur-[120px] rounded-full -z-10"></div>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="flex justify-center gap-1 mb-8">
          {[1,2,3,4,5].map(i => <Star key={i} className="w-6 h-6 fill-gold-bronze text-gold-bronze dark:fill-gold-metallic dark:text-gold-metallic" />)}
        </div>
        <h3 className="text-2xl md:text-4xl font-medium leading-relaxed mb-8">
          "Wonderful service as usual, felt so relaxed and good ambiance. Much recommended!"
        </h3>
        <p className="font-bold text-lg mb-8">— Gopinath S.</p>
        <button className="btn-outline mx-auto">Leave a Review on Google</button>
      </div>
    </motion.section>
  );
}

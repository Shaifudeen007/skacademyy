import Header from './Header';
import Footer from './Footer';
import { servicesData } from './HomeSections';
import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, ArrowRight } from 'lucide-react';

export default function ServicesPage({ isDark, toggleTheme, onNavigate }: { isDark: boolean, toggleTheme: () => void, onNavigate: (page: string) => void }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = ['All', 'Skin Care', 'Hair & Makeup', 'Nails & Spa', 'Courses'];

  const filteredServices = useMemo(() => {
    return servicesData.filter(service => {
      const matchesSearch = service.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                            service.desc.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = activeCategory === 'All' || service.category === activeCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchTerm, activeCategory]);

  return (
    <div className={`min-h-screen ${isDark ? 'dark bg-obsidian text-zinc-50' : 'bg-white text-zinc-900'} font-sans transition-colors duration-300`}>
      <Header isDark={isDark} toggleTheme={toggleTheme} onNavigate={onNavigate} />
      
      <main className="pt-32 pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-black mb-6 text-zinc-900 dark:text-white tracking-tight">Our Full Service Menu</h1>
            <p className="text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto text-lg">Browse our complete list of premium aesthetic treatments, beauty services, and academy courses.</p>
          </div>

          {/* Search and Filters */}
          <div className="max-w-4xl mx-auto mb-16 space-y-8">
            <div className="relative group">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <Search className="h-6 w-6 text-zinc-400 group-focus-within:text-gold-bronze dark:group-focus-within:text-gold-metallic transition-colors" />
              </div>
              <input
                type="text"
                placeholder="Search for a service or treatment..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-14 pr-6 py-4 bg-zinc-100 dark:bg-[#111] border-2 border-transparent focus:border-gold-bronze dark:focus:border-gold-metallic rounded-2xl outline-none text-lg text-zinc-900 dark:text-white transition-all shadow-lg shadow-black/5 dark:shadow-white/5"
              />
            </div>

            {/* Category Tabs */}
            <div className="flex flex-wrap justify-center gap-3">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-6 py-2.5 rounded-full font-bold text-sm transition-all duration-300 ${
                    activeCategory === cat 
                      ? 'bg-gold-bronze text-white dark:bg-gold-metallic dark:text-zinc-900 shadow-lg shadow-gold-bronze/30' 
                      : 'bg-zinc-100 dark:bg-[#111] text-zinc-600 dark:text-zinc-400 hover:bg-zinc-200 dark:hover:bg-zinc-800'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:[&>*:nth-child(3n+2)]:translate-y-12 pb-12">
            <AnimatePresence>
              {filteredServices.length > 0 ? (
                filteredServices.map((svc) => {
                  const Icon = svc.icon;
                  return (
                    <motion.div 
                      key={svc.title}
                      layout
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.9 }}
                      transition={{ duration: 0.3 }}
                      whileHover={{ y: -5 }}
                      className="group glass-card rounded-2xl overflow-hidden cursor-pointer flex flex-col h-full hover:shadow-2xl hover:shadow-gold-metallic/10 transition-all duration-300 border border-zinc-200 dark:border-zinc-800"
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
                })
              ) : (
                <div className="col-span-full py-20 text-center text-zinc-500">
                  <p className="text-xl font-medium">No services found matching your search.</p>
                </div>
              )}
            </AnimatePresence>
          </div>

        </div>
      </main>
      
      <Footer />
    </div>
  );
}

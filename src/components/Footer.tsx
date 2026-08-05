


export default function Footer() {
  const handleNav = (e: React.MouseEvent, page: string) => {
    e.preventDefault();
    window.dispatchEvent(new CustomEvent('navigate', { detail: page }));
  };

  return (
    <footer id="contact" className="relative bg-zinc-100 dark:bg-[#050505] pt-16 pb-8 border-t border-zinc-200 dark:border-zinc-800/50 overflow-hidden">
      {/* Watermark Background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.03] dark:opacity-[0.02] pointer-events-none select-none">
        <span className="text-[300px] font-black tracking-tighter">SK</span>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12 mb-12">
          {/* Brand Info */}
          <div className="lg:col-span-2">
            <div className="flex flex-col gap-1 mb-4">
              <span className="font-bold text-lg tracking-wide">SK International Institute of Skills</span>
              <p className="text-zinc-600 dark:text-zinc-400 text-sm max-w-sm mt-1 leading-relaxed">
                Aesthetic clinic and academy led by Sushmitha. We offer professional certification courses in skincare, haircare, and bridal makeup, empowering students with hands-on training and industry-leading techniques for a successful career.
              </p>
            </div>
            <div className="flex items-center gap-4 mt-3">
              <a 
                href="https://www.instagram.com/skbeautyverseacademy/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-10 h-10 rounded-full bg-zinc-200 dark:bg-zinc-800 flex items-center justify-center text-zinc-600 dark:text-zinc-400 hover:bg-gold-metallic hover:text-white transition-all"
                aria-label="Instagram"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="font-bold mb-4">Quick Links</h4>
            <ul className="space-y-3 text-sm text-zinc-600 dark:text-zinc-400">
              <li><a href="#home" onClick={(e) => handleNav(e, 'home')} className="hover:text-gold-metallic transition-colors">Home</a></li>
              <li><a href="#about" onClick={(e) => handleNav(e, 'about')} className="hover:text-gold-metallic transition-colors">About</a></li>
              <li><a href="#courses" onClick={(e) => handleNav(e, 'courses')} className="hover:text-gold-metallic transition-colors">Courses</a></li>
              <li><a href="#gallery" onClick={(e) => handleNav(e, 'gallery')} className="hover:text-gold-metallic transition-colors">Gallery</a></li>
              <li><a href="#testimonials" onClick={(e) => handleNav(e, 'testimonials')} className="hover:text-gold-metallic transition-colors">Reviews</a></li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h4 className="font-bold mb-4">Contact Us</h4>
            <ul className="space-y-3 text-sm text-zinc-600 dark:text-zinc-400">
              <li>+91 86103 45830</li>
              <li>+91 744 888 5802</li>
              <li>skbeautyverse@gmail.com</li>
            </ul>
          </div>
          
          {/* Address */}
          <div>
            <h4 className="font-bold mb-4">Visit Us</h4>
            <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
              SK International Institute of Skills<br />
              48/102 , Angalamman Kovil st,<br />
              Choolai , Chennai - 600 012
            </p>
          </div>
        </div>
        
        <div className="pt-8 border-t border-zinc-200 dark:border-zinc-800/50 flex justify-center items-center gap-4">
          <p className="text-sm text-zinc-500 text-center">© 2026 SK International Institute of Skills. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}


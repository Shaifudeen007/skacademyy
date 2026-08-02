

export default function Footer() {
  return (
    <footer id="contact" className="relative bg-zinc-100 dark:bg-[#050505] pt-16 pb-8 border-t border-zinc-200 dark:border-zinc-800/50 overflow-hidden">
      {/* Watermark Background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.03] dark:opacity-[0.02] pointer-events-none select-none">
        <span className="text-[300px] font-black tracking-tighter">SK</span>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Info */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <img src="/N0__48102__Angalamman_Kovil_St__Choolai__Chennai__Tamil_Nadu_600112.-removebg-preview.png" alt="Logo" className="h-16 md:h-20 w-auto object-contain drop-shadow-md scale-125 origin-left" />
              <span className="font-bold text-lg tracking-wide pl-2">SK International Institute of Skills</span>
            </div>
            <p className="text-zinc-600 dark:text-zinc-400 text-sm mb-4">
              Aesthetic clinic, and academy led by Sushmitha.
            </p>
            <div className="flex items-center gap-4 mt-6">
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
              SK Beauty verse pvt.ltd<br />
              48/102 , Angalamman Kovil st,<br />
              Choolai , Chennai - 600 012
            </p>
          </div>
          
          {/* Legal */}
          <div>
            <h4 className="font-bold mb-4">Registrations</h4>
            <ul className="space-y-2 text-sm text-zinc-600 dark:text-zinc-400">
              <li>GST: 33AAOCB4562B1ZX</li>
              <li>ISO 9001:2005</li>
              <li>UDYAM-TN-02-0245303</li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-zinc-200 dark:border-zinc-800/50 flex justify-center items-center gap-4">
          <p className="text-sm text-zinc-500 text-center">© 2026 SK International Institute of Skills. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

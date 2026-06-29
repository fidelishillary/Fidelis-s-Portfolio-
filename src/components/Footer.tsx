import { Shield, ArrowUp } from 'lucide-react';

export default function Footer() {
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="main-footer" className="bg-[#050505] border-t border-white/5 py-12 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/1 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 border-b border-white/5 pb-8 mb-8">
          
          {/* Logo brand */}
          <div className="flex flex-col text-left">
            <span className="font-serif italic text-base text-white tracking-tight leading-tight">Fidelis Hillary</span>
            <span className="font-mono text-[8px] text-slate-500 uppercase tracking-widest mt-1">IT Infrastructure & Cybersecurity</span>
          </div>

          {/* Quick links */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-[11px] uppercase tracking-wider text-slate-400 font-sans">
            <a href="#about" className="hover:text-white transition-colors">About</a>
            <a href="#experience" className="hover:text-white transition-colors">Experience</a>
            <a href="#projects" className="hover:text-white transition-colors">Projects</a>
            <a href="#skills" className="hover:text-white transition-colors">Skills</a>
            <a href="#contact" className="hover:text-white transition-colors">Contact</a>
          </div>

          {/* Scroll to Top */}
          <button
            id="footer-scroll-top-btn"
            onClick={handleScrollToTop}
            className="p-2.5 rounded-full border border-white/10 hover:border-white bg-transparent text-slate-400 hover:text-white transition-all cursor-pointer group"
            aria-label="Scroll Back to Top"
          >
            <ArrowUp className="w-4 h-4 group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>

        {/* Legal and compliance footnotes */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-[9px] text-slate-500 font-mono tracking-widest uppercase">
          <p>© {new Date().getFullYear()} Fidelis Hillary. All rights reserved.</p>
          <div className="flex items-center space-x-4">
            <span>React & Vite</span>
            <span className="h-3 w-px bg-white/10" />
            <span>Tailwind CSS</span>
          </div>
        </div>

      </div>
    </footer>
  );
}

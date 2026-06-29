import { motion } from 'motion/react';
import { Shield, Server, FileText, ArrowDown } from 'lucide-react';
import { personalInfo } from '../data';

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { y: 25, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: 'spring', stiffness: 100, damping: 15 }
    }
  };

  const handleScrollTo = (id: string) => {
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center pt-32 pb-20 bg-[#050505] overflow-hidden"
    >
      {/* Subtle Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:5rem_5rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_40%,#000_70%,transparent_100%)] opacity-80 z-0" />

      {/* Elegant Radial Accents */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-white/2 rounded-full blur-[140px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 z-10 w-full">
        <motion.div
          id="hero-content-container"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-center"
        >
          {/* Tagline Badge */}
          <motion.div variants={itemVariants} className="inline-flex items-center space-x-2.5 px-4 py-2 rounded-full bg-[#080808] border border-white/5 text-[9px] tracking-[0.2em] font-mono text-slate-400 mb-8 shadow-sm">
            <span className="relative flex h-1.5 w-1.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500"></span>
            </span>
            <span className="uppercase">Open for full-time roles</span>
          </motion.div>

          {/* Heading Name */}
          <motion.h1
            variants={itemVariants}
            className="font-serif leading-[0.82] tracking-tighter italic text-white text-7xl sm:text-8xl md:text-9xl mb-8"
          >
            Fidelis<br />Hillary.
          </motion.h1>

          {/* Tagline Subtitle */}
          <motion.p
            variants={itemVariants}
            className="font-sans text-[10px] font-bold uppercase tracking-[0.4em] text-slate-400 mb-8 max-w-2xl mx-auto"
          >
            IT Infrastructure, Cloud & Cybersecurity Enthusiast
          </motion.p>

          {/* Short Narrative Bio */}
          <motion.p
            variants={itemVariants}
            className="font-sans text-sm sm:text-base text-slate-400 max-w-xl mx-auto mb-12 leading-relaxed font-light"
          >
            Recent IT graduate from <span className="text-white font-medium">Universiti Teknologi PETRONAS</span>, specializing in enterprise Splunk SIEM orchestration, VMware virtualization, and machine learning research.
          </motion.p>

          {/* Primary Call to Action Controls */}
          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20">
            <button
              id="hero-cta-projects"
              onClick={() => handleScrollTo('#projects')}
              className="w-full sm:w-auto text-[10px] uppercase tracking-widest border border-white px-8 py-3.5 rounded-full bg-white text-black font-bold hover:bg-transparent hover:text-white transition-all duration-300 cursor-pointer"
            >
              Explore Projects
            </button>
            <button
              id="hero-cta-experience"
              onClick={() => handleScrollTo('#experience')}
              className="w-full sm:w-auto text-[10px] uppercase tracking-widest border border-white/20 px-8 py-3.5 rounded-full text-slate-400 hover:text-white hover:border-white/50 transition-all duration-300 bg-transparent cursor-pointer"
            >
              View Experience
            </button>
          </motion.div>

          {/* Quantitative Impact Highlights Dashboard */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-4xl mx-auto border-t border-white/5 pt-16 text-left"
          >
            {/* Metric 1 */}
            <div id="stat-splunk-efficiency" className="p-6 rounded-xl bg-[#080808] border border-white/5 hover:border-white/10 transition-all">
              <div className="flex items-center justify-between mb-4">
                <span className="font-mono text-[9px] uppercase tracking-widest text-slate-500">SIEM Performance</span>
                <span className="text-[10px] text-teal-400 font-mono">01</span>
              </div>
              <div className="font-serif italic text-3xl text-white">65% – 77%</div>
              <p className="font-sans text-[11px] text-slate-400 mt-2 font-light leading-relaxed">Splunk query execution time acceleration achieved across enterprise dashboards.</p>
            </div>

            {/* Metric 2 */}
            <div id="stat-migration-volume" className="p-6 rounded-xl bg-[#080808] border border-white/5 hover:border-white/10 transition-all">
              <div className="flex items-center justify-between mb-4">
                <span className="font-mono text-[9px] uppercase tracking-widest text-slate-500">Data Lifecycle</span>
                <span className="text-[10px] text-indigo-400 font-mono">02</span>
              </div>
              <div className="font-serif italic text-3xl text-white">850GB+</div>
              <p className="font-sans text-[11px] text-slate-400 mt-2 font-light leading-relaxed">High-capacity SharePoint repositories migrated securely to AWS storage bucket.</p>
            </div>

            {/* Metric 3 */}
            <div id="stat-fyp-research" className="p-6 rounded-xl bg-[#080808] border border-white/5 hover:border-white/10 transition-all">
              <div className="flex items-center justify-between mb-4">
                <span className="font-mono text-[9px] uppercase tracking-widest text-slate-500">Graduate Focus</span>
                <span className="text-[10px] text-emerald-400 font-mono">03</span>
              </div>
              <div className="font-serif italic text-xl sm:text-2xl text-white leading-tight min-h-[2.5rem] flex items-center">
                Bachelor of Information Technology (Hons)
              </div>
              <p className="font-sans text-[11px] text-slate-400 mt-2 font-light leading-relaxed">Specialized research combining static reverse engineering and ML malware classification.</p>
            </div>
          </motion.div>

          {/* Scroll Down Indicator */}
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="hidden sm:flex justify-center mt-16 cursor-pointer"
            onClick={() => handleScrollTo('#about')}
            id="hero-scroll-trigger"
          >
            <div className="p-2 rounded-full border border-white/10 hover:border-white/20 bg-[#080808]">
              <ArrowDown className="w-3.5 h-3.5 text-slate-500 hover:text-white transition-colors" />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

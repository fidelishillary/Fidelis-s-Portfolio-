import { Shield, BookOpen, Download, UserCheck, Star } from 'lucide-react';
import { personalInfo } from '../data';

export default function About() {
  const valuesIcons = [
    <Shield className="w-5 h-5 text-teal-400" />,
    <UserCheck className="w-5 h-5 text-indigo-400" />,
    <Star className="w-5 h-5 text-emerald-400" />
  ];

  return (
    <section id="about" className="py-24 bg-[#050505] border-t border-white/5 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/2 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <div className="text-center sm:text-left mb-16">
          <p className="text-[9px] uppercase tracking-[0.3em] text-slate-500 mb-2 font-mono">01 / BIOGRAPHY</p>
          <h2 className="font-serif italic text-3xl sm:text-4xl text-white tracking-tight">
            About Me
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Card Layout Column - Student & Intern Profile */}
          <div className="col-span-1 lg:col-span-5 flex flex-col items-center">
            <div id="profile-id-badge" className="w-full max-w-sm rounded-2xl bg-[#080808] border border-white/5 p-6 shadow-2xl relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/2 rounded-full blur-2xl pointer-events-none" />
              
              {/* Profile Header Block */}
              <div className="pb-6 border-b border-white/5 text-left">
                <div>
                  <h3 className="font-sans font-bold text-base text-white">Fidelis Hillary</h3>
                  <p className="font-mono text-[10px] text-slate-500 mt-1">STUDENT_ID: 22007169</p>
                  <p className="font-mono text-[9px] text-slate-400 tracking-wider font-semibold uppercase mt-0.5">CLOUD INFRA & CYBERSECURITY INTERN</p>
                </div>
              </div>

              {/* Education & Mentorship Data */}
              <div className="py-6 space-y-4 font-sans text-sm border-b border-white/5 text-left">
                <div className="flex items-start space-x-3">
                  <BookOpen className="w-4 h-4 text-slate-500 mt-0.5 shrink-0" />
                  <div>
                    <p className="font-semibold text-slate-300 text-xs uppercase tracking-wider">{personalInfo.degree}</p>
                    <p className="text-[11px] text-slate-500">{personalInfo.university}</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <UserCheck className="w-4 h-4 text-slate-500 mt-0.5 shrink-0" />
                  <div>
                    <p className="font-semibold text-slate-300 text-xs uppercase tracking-wider">Mentorship & Guidance</p>
                    <p className="text-xs text-slate-400 mt-1">Intern Supervisor: <span className="text-white">Mohd Rizal Mohd Som</span></p>
                    <p className="text-[10px] text-slate-500">Lead, CloudOps & Server Support, Vantris Energy</p>
                    <p className="text-xs text-slate-400 mt-1">FYP Supervisor: <span className="text-white">Dr. A. O. Balogon</span></p>
                    <p className="text-[10px] text-slate-500">UTP Academic Department</p>
                  </div>
                </div>
              </div>

              {/* Action Button: Download Credentials/CV */}
              <div className="pt-6">
                <a
                  id="about-cta-resume"
                  href="#contact"
                  className="w-full inline-flex items-center justify-center px-4 py-2.5 text-[10px] uppercase tracking-widest rounded-full text-slate-300 hover:text-white border border-white/10 hover:border-white/30 transition-all bg-transparent group"
                >
                  <Download className="mr-2 w-3.5 h-3.5 text-slate-400 group-hover:-translate-y-0.5 transition-transform" />
                  Request Resume (CV)
                </a>
              </div>
            </div>
          </div>

          {/* Biography & Professional Summary Column */}
          <div className="col-span-1 lg:col-span-7 space-y-8 text-slate-300 text-left">
            <div className="space-y-4">
              <h3 className="font-serif italic text-xl text-white">
                Fresh Graduate Entering the Enterprise Market
              </h3>
              <p className="font-sans text-sm text-slate-400 leading-relaxed font-light">
                As a fresh graduate in Information Technology from <strong>Universiti Teknologi PETRONAS (UTP)</strong>, my educational journey has been deeply marked by rigor, practical application, and full integration into active corporate infrastructure environments.
              </p>
              <p className="font-sans text-sm text-slate-400 leading-relaxed font-light">
                During my internship at <strong>Vantris Energy Berhad</strong>, I didn't merely watch over system consoles. I was entrusted with executing high-risk, multi-hundred-gigabyte data migrations, resolving Level 2 system incidents, and optimizing critical SIEM dashboards to safeguard operations across international rig fleets and offices.
              </p>
            </div>

            {/* Core Values / "Our Way" Philosophy */}
            <div className="space-y-4">
              <h4 className="font-mono text-[9px] uppercase tracking-[0.2em] text-slate-500 font-bold">
                My Core Professional Philosophy
              </h4>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {personalInfo.philosophies.map((phil, i) => (
                  <div
                    id={`philosophy-${phil.title.toLowerCase().replace(/\s+/g, '-')}`}
                    key={phil.title}
                    className="p-5 rounded-xl bg-[#080808] border border-white/5 hover:border-white/10 transition-all duration-300"
                  >
                    <div className="p-2 bg-white/5 border border-white/10 rounded-full w-fit mb-4">
                      {valuesIcons[i]}
                    </div>
                    <h5 className="font-sans font-bold text-white text-xs uppercase tracking-wider mb-2">{phil.title}</h5>
                    <p className="font-sans text-xs text-slate-400 leading-relaxed font-light">{phil.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

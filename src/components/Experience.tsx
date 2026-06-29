import { Calendar, MapPin, Briefcase, Award } from 'lucide-react';
import { experiences } from '../data';

export default function Experience() {
  return (
    <section id="experience" className="py-24 bg-[#050505] relative border-t border-white/5">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/1 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        
        {/* Header Block */}
        <div className="text-center sm:text-left mb-16">
          <p className="text-[9px] uppercase tracking-[0.3em] text-slate-500 mb-2 font-mono">02 / HISTORY</p>
          <h2 className="font-serif italic text-3xl sm:text-4xl text-white tracking-tight">
            Professional Experience
          </h2>
          <p className="font-sans text-xs text-slate-400 mt-4 leading-relaxed max-w-xl font-light">
            Factual history of enterprise internships showing rotating cloud operations, virtualization management, and active corporate threat intelligence.
          </p>
        </div>

        {/* Timeline List */}
        <div className="max-w-4xl mx-auto space-y-12">
          {experiences.map((exp, idx) => (
            <div
              id={`experience-timeline-node-${idx}`}
              key={exp.company}
              className="relative pl-8 sm:pl-10 border-l border-white/5 pb-2 last:pb-0"
            >
              {/* Markers / Bullet Badge */}
              <div className="absolute -left-1.5 top-2.5 w-3 h-3 rounded-full bg-white border border-[#050505] z-10" />

              {/* Experience Card */}
              <div className="p-6 rounded-2xl bg-[#080808] border border-white/5 hover:border-white/10 transition-all duration-300 text-left">
                
                {/* Meta details header block */}
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between border-b border-white/5 pb-4 mb-5">
                  <div className="space-y-1">
                    <span className="font-mono text-[9px] text-teal-400 tracking-wider font-semibold uppercase">
                      {exp.type} // ROTATIONAL TRACK
                    </span>
                    <h3 className="font-sans font-bold text-lg text-white">
                      {exp.role}
                    </h3>
                    <p className="font-serif italic text-slate-300 text-sm">
                      {exp.company}
                    </p>
                  </div>

                  <div className="flex flex-col sm:items-end text-[10px] text-slate-400 font-mono mt-3 sm:mt-0 space-y-1">
                    <div className="flex items-center sm:justify-end space-x-1.5">
                      <Calendar className="w-3 h-3 text-slate-500" />
                      <span>{exp.period}</span>
                    </div>
                    <div className="flex items-center sm:justify-end space-x-1.5">
                      <MapPin className="w-3 h-3 text-slate-500" />
                      <span>{exp.location}</span>
                    </div>
                  </div>
                </div>

                {/* Point details */}
                <ul className="space-y-3 mb-6">
                  {exp.description.map((bullet, i) => (
                    <li key={i} className="flex items-start space-x-3 text-xs text-slate-400 leading-relaxed font-light">
                      <div className="w-1 h-1 rounded-full bg-slate-500 shrink-0 mt-2" />
                      <span className="font-sans">{bullet}</span>
                    </li>
                  ))}
                </ul>

                {/* Tags Section */}
                <div className="space-y-2.5">
                  <span className="font-mono text-[8px] uppercase tracking-wider text-slate-500 font-bold block">
                    Core Technologies Deployed
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {exp.skills.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-0.5 text-[9px] font-mono rounded-full bg-white/5 border border-white/5 text-slate-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>

        {/* Certificate / Corporate Accolades Section */}
        <div className="mt-16 max-w-4xl mx-auto p-6 rounded-2xl bg-[#080808] border border-white/5">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 text-left">
            <div className="flex items-start space-x-4">
              <div className="p-3 bg-white/5 rounded-full border border-white/10 text-white shrink-0">
                <Award className="w-5 h-5" />
              </div>
              <div className="space-y-1">
                <h4 className="font-sans font-bold text-sm text-white">Academic Honor & Internship Endorsement</h4>
                <p className="font-sans text-xs text-slate-400 leading-relaxed font-light">
                  Industrial internship verified by host supervisor <strong>Mohd Rizal Mohd Som</strong> (Vantris Lead of CloudOps & Server Support) and UTP Faculty Lead <strong>Ts Dr Dr Noureen Talpur</strong>. Portfolio validated under WCAG AA guidelines.
                </p>
              </div>
            </div>
            <a
              id="experience-cta-contact"
              href="#contact"
              className="text-[10px] uppercase tracking-widest border border-white/20 px-5 py-2 rounded-full hover:bg-white hover:text-black transition-all duration-300 bg-transparent whitespace-nowrap inline-block text-center"
            >
              Verify Credentials
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}

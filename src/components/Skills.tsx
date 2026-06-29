import { useState } from 'react';
import { Shield, Server, Terminal, Wrench, CheckCircle } from 'lucide-react';
import { skills } from '../data';

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState<'all' | 'languages' | 'cybersecurity' | 'cloud_ops' | 'tools'>('all');

  const categories = [
    { id: 'all', label: 'All Tech Stack', icon: <Wrench className="w-4 h-4" /> },
    { id: 'cybersecurity', label: 'Security & SIEM', icon: <Shield className="w-4 h-4" /> },
    { id: 'cloud_ops', label: 'CloudOps & Virtualization', icon: <Server className="w-4 h-4" /> },
    { id: 'languages', label: 'Languages & Scripts', icon: <Terminal className="w-4 h-4" /> },
  ];

  const filteredSkills = skills.filter(
    (skill) => activeCategory === 'all' || skill.category === activeCategory
  );

  return (
    <section id="skills" className="py-24 bg-[#050505] border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Header Block */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div className="text-center md:text-left mb-6 md:mb-0">
            <p className="text-[9px] uppercase tracking-[0.3em] text-slate-500 mb-2 font-mono">04 / EXPERTISE</p>
            <h2 className="font-serif italic text-3xl sm:text-4xl text-white tracking-tight">
              Technical Arsenal
            </h2>
            <p className="font-sans text-xs text-slate-400 mt-4 leading-relaxed max-w-xl font-light">
              Categorized list of tools, platforms, and methodologies backed by solid academic theory and rigorous real-world corporate execution.
            </p>
          </div>

          {/* Interactive Filters */}
          <div className="flex flex-wrap items-center justify-center gap-2">
            {categories.map((cat) => (
              <button
                id={`skill-filter-${cat.id}`}
                key={cat.id}
                onClick={() => setActiveCategory(cat.id as any)}
                className={`inline-flex items-center space-x-1.5 px-4 py-2 text-[10px] uppercase tracking-wider font-sans font-medium rounded-full border transition-all cursor-pointer ${
                  activeCategory === cat.id
                    ? 'bg-[#080808] text-white border-white/25 shadow-md'
                    : 'bg-transparent text-slate-400 border-white/5 hover:border-white/10 hover:text-slate-200'
                }`}
              >
                {cat.icon}
                <span>{cat.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Skills Grid Dashboard */}
        <div id="skills-display-grid" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill, index) => (
            <div
              id={`skill-card-${skill.name.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`}
              key={skill.name}
              className="p-5 rounded-xl bg-[#080808] border border-white/5 hover:border-white/12 transition-all duration-300 group text-left"
            >
              {/* Skill Info */}
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center space-x-2.5">
                  <CheckCircle className="w-3.5 h-3.5 text-white/30 group-hover:scale-110 transition-transform" />
                  <span className="font-sans font-bold text-slate-200 text-sm tracking-tight group-hover:text-white transition-colors">
                    {skill.name}
                  </span>
                </div>
                <span className="font-serif italic text-xs text-slate-400">
                  {skill.level}%
                </span>
              </div>

              {/* Progress Slider (Static/Visual Indicator) */}
              <div className="w-full h-[3px] bg-[#050505] rounded-full overflow-hidden">
                <div
                  className="h-full rounded-full bg-white transition-all duration-1000 ease-out"
                  style={{ width: `${skill.level}%` }}
                />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

import React from 'react';
import { Layout, Server, Database, Sparkles, Zap } from 'lucide-react';
import { skillsData } from '../data/portfolioData';

const iconMap = { Layout, Server, Database, Sparkles, Zap };

const levelColor = {
  Advanced: 'bg-gradient-to-r from-cyan-500 to-indigo-500',
  Proficient: 'bg-gradient-to-r from-indigo-500 to-purple-500',
  Intermediate: 'bg-gradient-to-r from-purple-500 to-violet-500'
};

const levelWidth = {
  Advanced: 'w-[90%]',
  Proficient: 'w-[72%]',
  Intermediate: 'w-[55%]'
};

export default function Skills() {
  return (
    <section id="skills" className="relative py-20 sm:py-28 overflow-hidden">
      {/* Background subtle glow */}
      <div className="absolute top-40 left-0 w-[450px] h-[350px] bg-indigo-700/10 blur-[120px] rounded-full pointer-events-none -z-10" />
      <div className="absolute bottom-20 right-0 w-[400px] h-[300px] bg-cyan-600/10 blur-[120px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-3">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-semibold text-cyan-400 bg-cyan-400/10 border border-cyan-400/20">
            <Sparkles className="w-3.5 h-3.5" />
            02. TECHNICAL ARSENAL
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Skills &amp;{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-indigo-400">
              Technologies
            </span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg max-w-2xl mx-auto">
            A carefully curated stack built from building production-grade platforms, systems, and AI-powered tooling.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skillsData.map((category, catIdx) => {
            const Icon = iconMap[category.icon] || Sparkles;
            return (
              <div
                key={catIdx}
                className="glass-panel rounded-2xl p-6 hover:border-indigo-500/30 transition-all duration-300 hover:shadow-lg hover:shadow-indigo-500/10"
              >
                {/* Category Header */}
                <div className="flex items-center gap-3 mb-6">
                  <div className={`p-2.5 rounded-xl bg-gradient-to-br ${category.color} shadow-md`}>
                    <Icon className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-100 tracking-tight">
                    {category.category}
                  </h3>
                </div>

                {/* Skills List */}
                <div className="space-y-3.5">
                  {category.skills.map((skill, skillIdx) => (
                    <div key={skillIdx}>
                      <div className="flex items-center justify-between mb-1.5">
                        <span className="text-sm font-medium text-slate-200">
                          {skill.name}
                        </span>
                        <span className={`text-[10px] font-semibold px-2 py-0.5 rounded-full text-white ${levelColor[skill.level] || 'bg-slate-600'}`}>
                          {skill.level}
                        </span>
                      </div>
                      <div className="h-1.5 bg-slate-800/80 rounded-full overflow-hidden">
                        <div
                          className={`h-full rounded-full ${levelColor[skill.level] || 'bg-slate-600'} ${levelWidth[skill.level] || 'w-1/2'} transition-all`}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

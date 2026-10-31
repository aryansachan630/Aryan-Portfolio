import React from 'react';
import { GraduationCap, MapPin, Calendar, BookOpen, CheckCircle2 } from 'lucide-react';
import { educationData } from '../data/portfolioData';

export default function Education() {
  return (
    <section id="education" className="relative py-20 sm:py-28 overflow-hidden">
      {/* Subtle glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-emerald-600/8 blur-[130px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 space-y-3">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-semibold text-emerald-400 bg-emerald-400/10 border border-emerald-400/20">
            <GraduationCap className="w-3.5 h-3.5" />
            04. EDUCATION
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Academic{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">
              Background
            </span>
          </h2>
        </div>

        {/* Education Cards */}
        <div className="max-w-4xl mx-auto space-y-8">
          {educationData.map((edu, idx) => (
            <div
              key={idx}
              className="glass-panel rounded-2xl p-6 sm:p-8 hover:border-emerald-500/30 transition-all duration-300 hover:shadow-lg hover:shadow-emerald-500/10"
            >
              {/* Top header */}
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-5">
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-emerald-500 to-cyan-500 flex items-center justify-center shadow-lg shadow-emerald-500/20 shrink-0">
                    <GraduationCap className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-extrabold text-white leading-snug">
                      {edu.degree}
                    </h3>
                    <p className="text-cyan-300 font-semibold text-sm mt-1">{edu.institution}</p>
                  </div>
                </div>

                <div className="flex flex-col gap-1.5 shrink-0">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-300 text-xs font-semibold">
                    <Calendar className="w-3.5 h-3.5" />
                    {edu.timeline}
                  </span>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800 border border-slate-700 text-slate-300 text-xs font-medium">
                    <MapPin className="w-3.5 h-3.5 text-rose-400" />
                    {edu.location}
                  </span>
                  <span className="text-center text-[11px] font-semibold text-amber-400 bg-amber-400/10 border border-amber-400/20 px-2 py-1 rounded-lg">
                    {edu.status}
                  </span>
                </div>
              </div>

              {/* Bio */}
              <p className="text-slate-400 text-sm sm:text-base leading-relaxed mb-6">
                {edu.description}
              </p>

              {/* Coursework grid */}
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <BookOpen className="w-4 h-4 text-cyan-400" />
                  <h4 className="text-sm font-bold text-slate-200 uppercase tracking-widest">
                    Key Coursework
                  </h4>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {edu.coursework.map((course, cIdx) => (
                    <div
                      key={cIdx}
                      className="flex items-center gap-2 p-2.5 rounded-lg bg-slate-900/60 border border-slate-800/80 hover:border-emerald-500/30 transition-colors"
                    >
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                      <span className="text-sm text-slate-300 font-medium">{course}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}

          {/* Self-Taught / Learning card */}
          <div className="glass-card rounded-2xl p-6 sm:p-8 border-dashed border-slate-700/70">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center shadow-md">
                <BookOpen className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-lg font-bold text-white">Self-Taught & Continuous Learning</h3>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed">
              Beyond formal education, I actively invest in self-directed learning through building real projects, studying system design patterns, and contributing to open-source. My flagship project <span className="text-cyan-300 font-semibold">CampusX</span> — a production-grade, full-stack campus platform — is the direct product of this relentless self-improvement philosophy.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

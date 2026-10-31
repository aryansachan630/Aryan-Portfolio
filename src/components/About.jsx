import React from 'react';
import { User, Code2 } from 'lucide-react';
import { personalData } from '../data/portfolioData';

export default function About() {
  return (
    <section id="about" className="relative py-20 sm:py-28 overflow-hidden">
      <div className="absolute top-0 right-0 w-[350px] h-[350px] bg-indigo-600/8 blur-[110px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 space-y-3">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-semibold text-indigo-400 bg-indigo-400/10 border border-indigo-400/20">
            <User className="w-3.5 h-3.5" />
            01. ABOUT ME
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Who Am{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">
              I?
            </span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* Left: Bio card */}
          <div className="glass-panel rounded-2xl p-7 sm:p-8 space-y-5 hover:border-indigo-500/30 transition-all">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-indigo-500 via-purple-500 to-cyan-400 flex items-center justify-center shadow-lg shadow-indigo-500/25">
              <span className="font-mono text-xl font-extrabold text-white">&lt;AS/&gt;</span>
            </div>

            <div>
              <h3 className="text-2xl font-extrabold text-white mb-1">{personalData.name}</h3>
              <p className="text-cyan-400 font-semibold text-sm">{personalData.title}</p>
            </div>

            <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
              {personalData.bio}
            </p>

            <div className="grid grid-cols-2 gap-3 pt-2">
              <div className="p-3 rounded-xl bg-slate-900/60 border border-slate-800">
                <p className="text-xs text-slate-500 mb-1 uppercase tracking-wider">Degree</p>
                <p className="text-sm font-semibold text-slate-200">B.Tech CSE</p>
              </div>
              <div className="p-3 rounded-xl bg-slate-900/60 border border-slate-800">
                <p className="text-xs text-slate-500 mb-1 uppercase tracking-wider">University</p>
                <p className="text-sm font-semibold text-slate-200">AKTU (2027)</p>
              </div>
              <div className="p-3 rounded-xl bg-slate-900/60 border border-slate-800">
                <p className="text-xs text-slate-500 mb-1 uppercase tracking-wider">Location</p>
                <p className="text-sm font-semibold text-slate-200">Noida, India</p>
              </div>
              <div className="p-3 rounded-xl bg-slate-900/60 border border-slate-800">
                <p className="text-xs text-slate-500 mb-1 uppercase tracking-wider">Status</p>
                <p className="text-sm font-semibold text-emerald-300">Open to Hire</p>
              </div>
            </div>
          </div>

          {/* Right: Values & what I do */}
          <div className="space-y-4">
            {[
              {
                icon: '🏗️',
                title: 'Full Stack Architecture',
                desc: 'I engineer end-to-end systems — from clean, performant React UIs to robust Express backends and scalable MongoDB schemas — built to handle real-world traffic.'
              },
              {
                icon: '🤖',
                title: 'AI-Powered Experiences',
                desc: 'I integrate cutting-edge AI APIs like Google Gemini to build intelligent copilots, automated summarizers, and context-aware assistant features into production apps.'
              },
              {
                icon: '🚀',
                title: 'Production-Grade Shipping',
                desc: 'I ship projects to the cloud using Docker, Render, and Vercel with proper environment management, CI/CD pipelines, and production-ready configurations.'
              },
              {
                icon: '📱',
                title: 'Pixel-Perfect Responsive UI',
                desc: 'I craft glassmorphic, animated, responsive interfaces using Tailwind CSS v4 that look stunning on every device — from mobile-first to widescreen.'
              }
            ].map((item, idx) => (
              <div
                key={idx}
                className="flex items-start gap-4 p-5 rounded-xl glass-card glass-card-hover"
              >
                <div className="text-2xl w-10 shrink-0">{item.icon}</div>
                <div>
                  <h4 className="font-bold text-slate-100 mb-1 text-sm sm:text-base">{item.title}</h4>
                  <p className="text-sm text-slate-400 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

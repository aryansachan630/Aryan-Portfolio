import React, { useState } from 'react';
import { ArrowRight, Terminal as TerminalIcon, Sparkles, MapPin, Check, Copy, ExternalLink, Code2, Globe } from 'lucide-react';
import { personalData, terminalSnippets } from '../data/portfolioData';

export default function Hero() {
  const [activeTab, setActiveTab] = useState('about');
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(terminalSnippets[activeTab]);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Ambient background glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-gradient-to-tr from-indigo-600/20 via-cyan-500/15 to-purple-600/20 blur-[130px] rounded-full pointer-events-none -z-10" />
      <div className="absolute top-12 left-10 w-72 h-72 bg-blue-600/10 blur-[90px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Hero Text & CTAs */}
          <div className="lg:col-span-7 space-y-6">
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-emerald-500/30 text-emerald-300 text-xs sm:text-sm font-medium shadow-sm backdrop-blur-md">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
              </span>
              <span>Available for 2025/2026 Internships & SDE Roles</span>
            </div>

            {/* Main Title */}
            <div className="space-y-3">
              <h2 className="text-sm sm:text-base font-mono uppercase tracking-widest text-cyan-400 font-semibold">
                Welcome to my universe
              </h2>
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.1]">
                Hi, I'm{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-indigo-300 to-purple-400">
                  {personalData.name}
                </span>
              </h1>
              <p className="text-xl sm:text-2xl text-slate-300 font-medium tracking-tight">
                {personalData.title}
              </p>
            </div>

            {/* Subtitle / Bio */}
            <p className="text-base sm:text-lg text-slate-400 leading-relaxed max-w-2xl">
              Computer Science undergraduate at <span className="text-slate-200 font-semibold">AKTU (Class of 2027)</span> based in <span className="text-slate-200 font-semibold">Noida</span>. 
              Creator of <span className="text-cyan-300 font-semibold underline decoration-cyan-500/50 underline-offset-4">CampusX</span>. 
              I engineer scalable full-stack web platforms, real-time collaboration engines, and integrate intelligent AI copilot workflows.
            </p>

            {/* CTA Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-white bg-gradient-to-r from-indigo-500 via-indigo-600 to-cyan-500 shadow-lg shadow-indigo-500/25 hover:shadow-indigo-500/40 hover:scale-[1.02] active:scale-[0.98] transition-all"
              >
                <span>View CampusX & Projects</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-slate-200 bg-slate-900/80 border border-slate-700/80 hover:bg-slate-800 hover:border-slate-600 hover:text-white transition-all backdrop-blur-sm"
              >
                <span>Get in Touch</span>
              </a>

              <a
                href={personalData.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-4 py-3.5 rounded-xl text-slate-400 hover:text-white hover:bg-white/5 border border-transparent hover:border-white/10 transition-all text-sm font-medium"
              >
                <Code2 className="w-4 h-4 text-cyan-400" />
                <span>GitHub</span>
                <ExternalLink className="w-3.5 h-3.5 opacity-60" />
              </a>
            </div>

            {/* Location & Quick Meta */}
            <div className="flex items-center gap-4 pt-2 text-xs sm:text-sm text-slate-400">
              <div className="flex items-center gap-1.5">
                <MapPin className="w-4 h-4 text-rose-400" />
                <span>{personalData.location}</span>
              </div>
              <span className="text-slate-700">•</span>
              <div className="flex items-center gap-1.5">
                <Globe className="w-4 h-4 text-cyan-400" />
                <span>AKTU B.Tech CSE (2027)</span>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Terminal & Code Card */}
          <div className="lg:col-span-5">
            <div className="relative group">
              {/* Outer decorative gradient border */}
              <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-cyan-500/30 via-indigo-500/30 to-purple-500/30 blur-xl opacity-75 group-hover:opacity-100 transition duration-500" />

              <div className="relative rounded-2xl bg-[#0b1120] border border-slate-800 shadow-2xl overflow-hidden font-mono text-xs sm:text-sm">
                {/* Terminal Header Bar */}
                <div className="bg-[#0f172a] px-4 py-3 border-b border-slate-800 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                    <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                    <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                    <span className="ml-2 text-xs text-slate-400 flex items-center gap-1">
                      <TerminalIcon className="w-3.5 h-3.5 text-cyan-400" />
                      aryan-terminal
                    </span>
                  </div>

                  {/* Copy Button */}
                  <button
                    onClick={handleCopy}
                    className="flex items-center gap-1 text-[11px] text-slate-400 hover:text-cyan-300 px-2 py-1 rounded bg-slate-800/80 hover:bg-slate-700/80 transition-colors"
                    title="Copy command output"
                  >
                    {copied ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-400" />
                        <span className="text-emerald-400">Copied</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span>Copy</span>
                      </>
                    )}
                  </button>
                </div>

                {/* Tab Switcher */}
                <div className="flex border-b border-slate-800/80 bg-slate-900/60 text-xs">
                  <button
                    onClick={() => setActiveTab('about')}
                    className={`px-3 py-2 border-b-2 font-medium transition-colors ${
                      activeTab === 'about'
                        ? 'border-cyan-400 text-cyan-300 bg-slate-800/50'
                        : 'border-transparent text-slate-400 hover:text-slate-200'
                    }`}
                  >
                    about_me.json
                  </button>
                  <button
                    onClick={() => setActiveTab('skills')}
                    className={`px-3 py-2 border-b-2 font-medium transition-colors ${
                      activeTab === 'skills'
                        ? 'border-cyan-400 text-cyan-300 bg-slate-800/50'
                        : 'border-transparent text-slate-400 hover:text-slate-200'
                    }`}
                  >
                    skills.sh
                  </button>
                  <button
                    onClick={() => setActiveTab('contact')}
                    className={`px-3 py-2 border-b-2 font-medium transition-colors ${
                      activeTab === 'contact'
                        ? 'border-cyan-400 text-cyan-300 bg-slate-800/50'
                        : 'border-transparent text-slate-400 hover:text-slate-200'
                    }`}
                  >
                    connect.sh
                  </button>
                </div>

                {/* Terminal Content Body */}
                <div className="p-4 sm:p-5 text-slate-300 overflow-x-auto min-h-[220px] max-h-[280px]">
                  <pre className="font-mono text-xs leading-relaxed text-slate-300 whitespace-pre">
                    {terminalSnippets[activeTab]}
                  </pre>
                </div>

                {/* Terminal Footer */}
                <div className="px-4 py-2.5 bg-slate-950/80 border-t border-slate-800/80 flex items-center justify-between text-[11px] text-slate-400">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    <span>Bash 5.2.15 • UTF-8</span>
                  </div>
                  <span className="text-slate-500 font-sans">Click tabs to inspect</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Stats Banner */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4">
          {personalData.stats.map((stat, idx) => (
            <div
              key={idx}
              className="p-4 rounded-xl glass-card hover:border-cyan-500/40 transition-all duration-300 group"
            >
              <div className="text-2xl sm:text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-indigo-300 group-hover:scale-105 transition-transform origin-left">
                {stat.value}
              </div>
              <div className="text-sm font-semibold text-slate-200 mt-1">
                {stat.label}
              </div>
              <div className="text-xs text-slate-400 mt-0.5">
                {stat.detail}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

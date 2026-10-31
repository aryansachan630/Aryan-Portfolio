import React, { useState } from 'react';
import { ExternalLink, GitFork, Star, Rocket, ChevronDown, ChevronUp, Globe } from 'lucide-react';
import { projectsData } from '../data/portfolioData';

export default function Projects() {
  const [expanded, setExpanded] = useState({});

  const toggle = (id) => setExpanded(prev => ({ ...prev, [id]: !prev[id] }));

  const featured = projectsData.filter(p => p.featured);
  const others = projectsData.filter(p => !p.featured);

  return (
    <section id="projects" className="relative py-20 sm:py-28 overflow-hidden">
      {/* Ambient glow */}
      <div className="absolute top-1/3 right-0 w-[400px] h-[400px] bg-purple-600/10 blur-[120px] rounded-full pointer-events-none -z-10" />
      <div className="absolute bottom-0 left-1/4 w-[350px] h-[300px] bg-cyan-600/8 blur-[110px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 space-y-3">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-semibold text-purple-400 bg-purple-400/10 border border-purple-400/20">
            <Rocket className="w-3.5 h-3.5" />
            03. PROJECTS
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            What I've{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">
              Built
            </span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg max-w-2xl mx-auto">
            A showcase of my full-stack engineering work — from production campus platforms to AI-powered developer tools.
          </p>
        </div>

        {/* Featured Projects */}
        <div className="space-y-6 mb-10">
          {featured.map((project) => (
            <div
              key={project.id}
              className="glass-panel rounded-2xl overflow-hidden hover:border-purple-500/30 transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/10"
            >
              <div className="p-6 sm:p-8">
                {/* Top row: badge, title, links */}
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-4">
                  <div>
                    <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-gradient-to-r from-indigo-500 to-cyan-500 text-white mb-3">
                      <Star className="w-3 h-3" />
                      {project.badge}
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                      {project.title}
                    </h3>
                    <p className="text-sm text-cyan-300/80 font-medium mt-1">
                      {project.tagline}
                    </p>
                  </div>
                  <div className="flex items-center gap-2 shrink-0">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-semibold text-slate-300 bg-slate-800 hover:bg-slate-700 border border-slate-700 rounded-lg transition-colors"
                    >
                    <GitFork className="w-4 h-4" />
                      Source
                    </a>
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-semibold text-white bg-gradient-to-r from-indigo-500 to-cyan-500 hover:opacity-90 rounded-lg shadow-md shadow-indigo-500/20 transition-all"
                    >
                      <Globe className="w-4 h-4" />
                      Live Demo
                      <ExternalLink className="w-3 h-3 opacity-70" />
                    </a>
                  </div>
                </div>

                {/* Description */}
                <p className="text-slate-400 text-sm sm:text-base leading-relaxed mb-5">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-5">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="px-2.5 py-1 text-xs font-mono font-medium text-cyan-300 bg-cyan-400/10 border border-cyan-400/20 rounded-md"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Highlights Accordion */}
                <div>
                  <button
                    onClick={() => toggle(project.id)}
                    className="inline-flex items-center gap-2 text-xs font-semibold text-slate-400 hover:text-cyan-400 transition-colors"
                  >
                    {expanded[project.id] ? (
                      <>
                        <ChevronUp className="w-4 h-4" />
                        Hide Key Features
                      </>
                    ) : (
                      <>
                        <ChevronDown className="w-4 h-4" />
                        Show Key Features
                      </>
                    )}
                  </button>

                  {expanded[project.id] && (
                    <ul className="mt-4 space-y-2.5 pl-1">
                      {project.highlights.map((h, i) => (
                        <li key={i} className="flex items-start gap-2.5 text-sm text-slate-300">
                          <span className="mt-1 flex-shrink-0 w-1.5 h-1.5 rounded-full bg-cyan-400" />
                          {h}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Other Projects Grid */}
        <h3 className="text-lg font-bold text-slate-300 mb-5 tracking-tight">More Projects</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {others.map((project) => (
            <div
              key={project.id}
              className="glass-card glass-card-hover rounded-2xl p-5 sm:p-6 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[11px] font-semibold px-2 py-0.5 rounded-full bg-slate-700 text-slate-300">
                    {project.badge}
                  </span>
                  <div className="flex items-center gap-2">
                    <a href={project.githubUrl} target="_blank" rel="noreferrer" className="p-1.5 text-slate-400 hover:text-white transition-colors">
                    <GitFork className="w-4 h-4" />
                    </a>
                    <a href={project.liveUrl} target="_blank" rel="noreferrer" className="p-1.5 text-slate-400 hover:text-cyan-400 transition-colors">
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                </div>

                <h3 className="text-lg font-bold text-white mb-1.5">{project.title}</h3>
                <p className="text-xs text-cyan-300/70 font-medium mb-3">{project.tagline}</p>
                <p className="text-sm text-slate-400 leading-relaxed mb-4">{project.description}</p>
              </div>

              <div className="flex flex-wrap gap-1.5 mt-auto">
                {project.tags.slice(0, 4).map((tag, i) => (
                  <span
                    key={i}
                    className="px-2 py-0.5 text-[10px] font-mono font-medium text-indigo-300 bg-indigo-400/10 border border-indigo-400/20 rounded"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* GitHub CTA */}
        <div className="mt-12 text-center">
          <a
            href="https://github.com/aryansachan630"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-slate-200 border border-slate-700 hover:border-cyan-500/50 hover:text-cyan-300 glass-panel transition-all"
          >
            <GitFork className="w-5 h-5" />
            View All Projects on GitHub
            <ExternalLink className="w-4 h-4 opacity-60" />
          </a>
        </div>
      </div>
    </section>
  );
}

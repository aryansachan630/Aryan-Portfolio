import React from 'react';
import { GitFork, Link2, Mail, ArrowUp, Terminal } from 'lucide-react';
import { personalData } from '../data/portfolioData';

export default function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  const links = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Education', href: '#education' },
    { name: 'Contact', href: '#contact' }
  ];

  return (
    <footer className="relative border-t border-white/5 bg-[#050810]/80 backdrop-blur-lg mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          {/* Logo + tagline */}
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-indigo-500 via-purple-500 to-cyan-400 p-[1px]">
                <div className="w-full h-full bg-[#070b14] rounded-[10px] flex items-center justify-center">
                  <span className="font-mono text-xs font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-indigo-400">&lt;AS/&gt;</span>
                </div>
              </div>
              <div>
                <p className="font-bold text-slate-100 leading-none">Aryan Sachan</p>
                <p className="text-[11px] font-mono text-cyan-400/80 mt-0.5">Full Stack Developer</p>
              </div>
            </div>
            <p className="text-sm text-slate-500 max-w-xs leading-relaxed">
              Building impactful, scalable web experiences one commit at a time. AKTU CSE '27 | Noida, India.
            </p>
          </div>

          {/* Nav links */}
          <nav className="flex flex-wrap gap-x-6 gap-y-2">
            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm text-slate-400 hover:text-cyan-400 transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Social Icons + Back to Top */}
          <div className="flex items-center gap-2">
            <a
              href={`mailto:${personalData.email}`}
              className="p-2 text-slate-400 hover:text-rose-400 hover:bg-white/5 rounded-lg transition-colors"
              title="Email"
            >
              <Mail className="w-5 h-5" />
            </a>
            <a
              href={personalData.github}
              target="_blank"
              rel="noreferrer"
              className="p-2 text-slate-400 hover:text-white hover:bg-white/5 rounded-lg transition-colors"
              title="GitHub"
            >
              <GitFork className="w-5 h-5" />
            </a>
            <a
              href={personalData.linkedin}
              target="_blank"
              rel="noreferrer"
              className="p-2 text-slate-400 hover:text-blue-400 hover:bg-white/5 rounded-lg transition-colors"
              title="LinkedIn"
            >
              <Link2 className="w-5 h-5" />
            </a>
            <button
              onClick={scrollToTop}
              className="p-2 text-slate-400 hover:text-cyan-400 hover:bg-white/5 rounded-lg transition-colors border border-transparent hover:border-cyan-500/30"
              title="Back to top"
            >
              <ArrowUp className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Divider */}
        <div className="mt-8 pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-slate-500 font-mono text-center sm:text-left">
            © {new Date().getFullYear()} Aryan Sachan · Built with React 19 · Tailwind CSS v4 · Vite
          </p>
          <div className="flex items-center gap-2 text-xs text-slate-600">
            <Terminal className="w-3.5 h-3.5" />
            <span>Designed & engineered by Aryan Sachan</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

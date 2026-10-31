import React, { useState, useEffect } from 'react';
import { Menu, X, Terminal, ExternalLink, Mail, GitFork, Link2 } from 'lucide-react';
import { personalData } from '../data/portfolioData';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Education', href: '#education' },
    { name: 'Contact', href: '#contact' }
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-[#070b14]/85 backdrop-blur-md border-b border-white/10 shadow-lg shadow-black/40 py-3' 
        : 'bg-transparent py-5'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-500 via-purple-500 to-cyan-400 p-[1px] shadow-lg shadow-indigo-500/20 group-hover:shadow-indigo-500/40 transition-all">
              <div className="w-full h-full bg-[#0b1120] rounded-[11px] flex items-center justify-center">
                <span className="font-mono font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-indigo-400 group-hover:scale-110 transition-transform">
                  &lt;AS/&gt;
                </span>
              </div>
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-slate-100 text-lg tracking-tight group-hover:text-cyan-400 transition-colors">
                Aryan Sachan
              </span>
              <span className="text-[11px] font-mono text-cyan-400/80 -mt-1">
                Full-Stack Eng.
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 bg-slate-900/60 p-1.5 rounded-full border border-white/5 backdrop-blur-sm">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-4 py-1.5 text-sm font-medium text-slate-300 hover:text-white hover:bg-white/5 rounded-full transition-all"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Desktop Right Actions */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href={personalData.github}
              target="_blank"
              rel="noreferrer"
              className="p-2 text-slate-400 hover:text-white hover:bg-white/5 rounded-lg transition-colors"
              title="GitHub Profile"
            >
              <GitFork className="w-5 h-5" />
            </a>
            <a
              href={personalData.linkedin}
              target="_blank"
              rel="noreferrer"
              className="p-2 text-slate-400 hover:text-cyan-400 hover:bg-white/5 rounded-lg transition-colors"
              title="LinkedIn Profile"
            >
              <Link2 className="w-5 h-5" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-semibold bg-gradient-to-r from-indigo-500 to-cyan-500 text-white shadow-md shadow-indigo-500/25 hover:shadow-indigo-500/40 hover:opacity-95 transition-all"
            >
              <Mail className="w-4 h-4" />
              <span>Let's Talk</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-2">
            <a
              href="#contact"
              className="px-3 py-1.5 text-xs font-semibold bg-indigo-600/30 text-indigo-300 border border-indigo-500/30 rounded-md"
            >
              Hire Me
            </a>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-slate-300 hover:text-white rounded-lg hover:bg-white/5 focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden bg-[#0a0f1d] border-b border-white/10 px-4 pt-3 pb-6 space-y-3">
          <div className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="px-3 py-2 text-base font-medium text-slate-300 hover:text-cyan-400 hover:bg-white/5 rounded-lg transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>
          <div className="pt-3 border-t border-white/10 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <a
                href={personalData.github}
                target="_blank"
                rel="noreferrer"
                className="p-2 text-slate-300 hover:text-white hover:bg-white/5 rounded-lg"
              >
                <GitFork className="w-5 h-5" />
              </a>
              <a
                href={personalData.linkedin}
                target="_blank"
                rel="noreferrer"
                className="p-2 text-slate-300 hover:text-cyan-400 hover:bg-white/5 rounded-lg"
              >
                <Link2 className="w-5 h-5" />
              </a>
            </div>
            <a
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold bg-gradient-to-r from-indigo-500 to-cyan-500 text-white rounded-lg shadow-sm"
            >
              <Mail className="w-4 h-4" />
              Contact Aryan
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

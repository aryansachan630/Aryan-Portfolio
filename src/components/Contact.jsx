import React, { useState } from 'react';
import { Mail, GitFork, Link2, MapPin, Send, Check, ExternalLink, MessageSquare, AlertCircle } from 'lucide-react';
import { personalData } from '../data/portfolioData';

// ✅ Web3Forms Access Key — Replace with your key from https://web3forms.com
const WEB3FORMS_ACCESS_KEY = 'addbff9b-53f9-4047-8419-a7107e5fe817';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState('idle'); // idle | loading | success | error

  const handleChange = (e) => setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (WEB3FORMS_ACCESS_KEY === 'YOUR_ACCESS_KEY_HERE') {
      alert('⚠️ Please set your Web3Forms Access Key in Contact.jsx!');
      return;
    }

    setStatus('loading');

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          name: form.name,
          email: form.email,
          subject: form.subject || `Portfolio Contact from ${form.name}`,
          message: form.message,
          // Optional: redirect after submission (comment out if not needed)
          // redirect: 'https://your-portfolio.com/thank-you',
          botcheck: false,
        }),
      });

      const data = await response.json();

      if (data.success) {
        setStatus('success');
        setForm({ name: '', email: '', subject: '', message: '' });
        setTimeout(() => setStatus('idle'), 5000);
      } else {
        console.error('Web3Forms error:', data);
        setStatus('error');
        setTimeout(() => setStatus('idle'), 4000);
      }
    } catch (err) {
      console.error('Network error:', err);
      setStatus('error');
      setTimeout(() => setStatus('idle'), 4000);
    }
  };

  const contactLinks = [
    {
      label: 'Email',
      value: personalData.email,
      icon: Mail,
      href: `mailto:${personalData.email}`,
      color: 'from-rose-500 to-pink-600',
      badge: 'Preferred'
    },
    {
      label: 'GitHub',
      value: 'github.com/aryansachan630',
      icon: GitFork,
      href: personalData.github,
      color: 'from-slate-600 to-slate-700',
      badge: 'Open Source'
    },
    {
      label: 'LinkedIn',
      value: 'linkedin.com/in/aryan-sachan',
      icon: Link2,
      href: personalData.linkedin,
      color: 'from-blue-600 to-blue-700',
      badge: 'Professional'
    }
  ];

  return (
    <section id="contact" className="relative py-20 sm:py-28 overflow-hidden">
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[500px] h-[350px] bg-gradient-to-tr from-rose-600/10 via-indigo-600/15 to-cyan-600/10 blur-[120px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 space-y-3">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-semibold text-rose-400 bg-rose-400/10 border border-rose-400/20">
            <MessageSquare className="w-3.5 h-3.5" />
            05. GET IN TOUCH
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Let's{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-400 to-indigo-400">
              Collaborate
            </span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg max-w-2xl mx-auto">
            Looking for a passionate full-stack developer? I'd love to connect. Fill the form and I'll get back to you directly on my email!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-start">
          {/* Left: Contact Links */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-2 mb-2">
              <MapPin className="w-4 h-4 text-rose-400" />
              <span className="text-sm text-slate-400">Based in <span className="text-slate-200 font-semibold">Noida, India</span> — Open to Remote</span>
            </div>

            {contactLinks.map((link, idx) => {
              const Icon = link.icon;
              return (
                <a
                  key={idx}
                  href={link.href}
                  target={link.href.startsWith('mailto') ? undefined : '_blank'}
                  rel="noreferrer"
                  className="flex items-center gap-4 p-4 rounded-2xl glass-card glass-card-hover group"
                >
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${link.color} flex items-center justify-center shadow-md shrink-0 group-hover:scale-110 transition-transform`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">{link.label}</span>
                      <span className="text-[10px] font-semibold px-1.5 py-0.5 rounded bg-slate-700 text-slate-300">{link.badge}</span>
                    </div>
                    <p className="text-sm font-semibold text-slate-200 mt-0.5 truncate">{link.value}</p>
                  </div>
                  <ExternalLink className="w-4 h-4 text-slate-500 group-hover:text-cyan-400 transition-colors shrink-0" />
                </a>
              );
            })}

            {/* Availability badge */}
            <div className="p-4 rounded-2xl bg-emerald-400/5 border border-emerald-400/20 mt-6">
              <div className="flex items-center gap-2 mb-2">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
                </span>
                <span className="text-sm font-bold text-emerald-300">Currently Available</span>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed">
                Open to <strong className="text-slate-200">internships</strong>, <strong className="text-slate-200">freelance projects</strong>, and <strong className="text-slate-200">full-time SDE roles</strong>.
              </p>
            </div>
          </div>

          {/* Right: Contact Form */}
          <div className="lg:col-span-3">
            <form onSubmit={handleSubmit} className="glass-panel rounded-2xl p-6 sm:p-8 space-y-5">
              <div>
                <h3 className="text-lg font-bold text-white">Send a Message</h3>
                <p className="text-xs text-slate-500 mt-1">Your message will be delivered directly to my inbox. I typically reply within 24 hours.</p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-400 mb-1.5 uppercase tracking-wider">Your Name *</label>
                  <input
                    type="text" name="name" value={form.name} onChange={handleChange} required
                    placeholder="e.g. Rahul Sharma"
                    className="w-full px-4 py-3 bg-slate-900/80 border border-slate-700 rounded-xl text-slate-200 placeholder-slate-500 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-400 mb-1.5 uppercase tracking-wider">Your Email *</label>
                  <input
                    type="email" name="email" value={form.email} onChange={handleChange} required
                    placeholder="e.g. rahul@example.com"
                    className="w-full px-4 py-3 bg-slate-900/80 border border-slate-700 rounded-xl text-slate-200 placeholder-slate-500 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-400 mb-1.5 uppercase tracking-wider">Subject</label>
                <input
                  type="text" name="subject" value={form.subject} onChange={handleChange}
                  placeholder="e.g. Internship Opportunity at XYZ Corp"
                  className="w-full px-4 py-3 bg-slate-900/80 border border-slate-700 rounded-xl text-slate-200 placeholder-slate-500 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-400 mb-1.5 uppercase tracking-wider">Message *</label>
                <textarea
                  name="message" value={form.message} onChange={handleChange} required rows={5}
                  placeholder="Hi Aryan, I'd love to discuss a project / internship opportunity..."
                  className="w-full px-4 py-3 bg-slate-900/80 border border-slate-700 rounded-xl text-slate-200 placeholder-slate-500 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition resize-none"
                />
              </div>

              {/* Success Message */}
              {status === 'success' && (
                <div className="flex items-center gap-3 px-4 py-3 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-300">
                  <Check className="w-5 h-5 shrink-0" />
                  <div>
                    <p className="text-sm font-semibold">Message sent successfully!</p>
                    <p className="text-xs opacity-75 mt-0.5">I'll get back to you within 24 hours.</p>
                  </div>
                </div>
              )}

              {/* Error Message */}
              {status === 'error' && (
                <div className="flex items-center gap-3 px-4 py-3 rounded-xl bg-rose-500/10 border border-rose-500/30 text-rose-300">
                  <AlertCircle className="w-5 h-5 shrink-0" />
                  <div>
                    <p className="text-sm font-semibold">Something went wrong.</p>
                    <p className="text-xs opacity-75 mt-0.5">Please email me directly at {personalData.email}</p>
                  </div>
                </div>
              )}

              <button
                type="submit"
                disabled={status === 'loading' || status === 'success'}
                className={`w-full flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-bold text-white transition-all disabled:cursor-not-allowed ${
                  status === 'success'
                    ? 'bg-emerald-500 opacity-80'
                    : status === 'loading'
                    ? 'bg-indigo-500/60 opacity-70'
                    : 'bg-gradient-to-r from-indigo-500 to-cyan-500 shadow-lg shadow-indigo-500/25 hover:shadow-indigo-500/40 hover:scale-[1.01] active:scale-[0.99]'
                }`}
              >
                {status === 'loading' ? (
                  <>
                    <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"></path>
                    </svg>
                    Sending...
                  </>
                ) : status === 'success' ? (
                  <><Check className="w-5 h-5" /> Sent Successfully!</>
                ) : (
                  <><Send className="w-5 h-5" /> Send Message</>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

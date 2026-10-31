import React from 'react';
import './index.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';

// Section divider component
const Divider = () => (
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="h-px bg-gradient-to-r from-transparent via-slate-800 to-transparent" />
  </div>
);

export default function App() {
  return (
    <div className="relative bg-[#070b14] min-h-screen overflow-x-hidden">
      {/* Global dot pattern overlay */}
      <div className="fixed inset-0 bg-dot-pattern opacity-30 pointer-events-none -z-20" />

      <Navbar />

      <main>
        <Hero />
        <Divider />
        <About />
        <Divider />
        <Skills />
        <Divider />
        <Projects />
        <Divider />
        <Education />
        <Divider />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}

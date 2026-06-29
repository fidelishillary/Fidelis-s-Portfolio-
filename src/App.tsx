/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="bg-slate-950 min-h-screen text-slate-100 selection:bg-teal-500/30 selection:text-teal-200 scroll-smooth antialiased">
      {/* Dynamic Global Glow Filters */}
      <div className="fixed inset-0 pointer-events-none z-40">
        <div className="absolute top-0 left-0 right-0 h-[500px] bg-gradient-to-b from-indigo-950/15 via-transparent to-transparent" />
      </div>

      {/* Global Navigation */}
      <Navbar />

      {/* Main Single Page Sections */}
      <main className="relative">
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Contact />
      </main>

      {/* Global Footer */}
      <Footer />
    </div>
  );
}

import React, { useState, useEffect } from 'react';
import { Menu, X, Shield, ArrowUpRight } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      setIsOpen(false);
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <nav
      id="main-navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-350 ${
        isScrolled
          ? 'bg-black/90 backdrop-blur-md border-b border-white/5 py-4 shadow-2xl'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex items-center justify-between">
          {/* Logo Brand */}
          <a
            id="nav-logo"
            href="#hero"
            onClick={(e) => handleScrollTo(e, '#hero')}
            className="flex flex-col text-left group"
          >
            <span className="font-sans text-xs font-bold text-white uppercase tracking-[0.4em] leading-tight group-hover:text-teal-400 transition-colors">
              Fidelis Hillary
            </span>
            <span className="font-mono text-[9px] text-slate-500 tracking-[0.2em] uppercase mt-0.5">
              SEC_ARCH // INFRA
            </span>
          </a>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center space-x-12">
            <div className="flex items-center space-x-8">
              {navItems.map((item) => (
                <a
                  id={`nav-link-${item.name.toLowerCase()}`}
                  key={item.name}
                  href={item.href}
                  onClick={(e) => handleScrollTo(e, item.href)}
                  className="font-sans text-[10px] font-bold uppercase tracking-[0.3em] text-slate-400 hover:text-white pb-1 transition-all relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[1px] after:bg-white after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:origin-left"
                >
                  {item.name}
                </a>
              ))}
            </div>

            {/* CTA: Get In Touch */}
            <a
              id="nav-cta-resume"
              href="#contact"
              onClick={(e) => handleScrollTo(e, '#contact')}
              className="inline-flex items-center justify-center text-[10px] uppercase tracking-widest border border-white/20 px-5 py-2 rounded-full hover:bg-white hover:text-black transition-all duration-300"
            >
              Contact Me
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              id="nav-mobile-toggle"
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-slate-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-teal-500 rounded-lg"
              aria-label="Toggle Navigation Menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div
          id="nav-mobile-menu"
          className="md:hidden bg-slate-950/95 border-b border-slate-800 backdrop-blur-lg px-4 pt-2 pb-6 space-y-3 animate-in fade-in slide-in-from-top-5 duration-200"
        >
          {navItems.map((item) => (
            <a
              id={`nav-mobile-link-${item.name.toLowerCase()}`}
              key={item.name}
              href={item.href}
              onClick={(e) => handleScrollTo(e, item.href)}
              className="block font-sans text-base font-medium text-slate-300 hover:text-teal-400 hover:bg-slate-900/50 py-2 px-3 rounded-lg transition-colors"
            >
              {item.name}
            </a>
          ))}
          <div className="pt-2 border-t border-slate-800/80">
            <a
              id="nav-mobile-cta"
              href="#contact"
              onClick={(e) => handleScrollTo(e, '#contact')}
              className="flex items-center justify-center w-full px-4 py-2.5 text-sm font-sans font-medium text-white bg-gradient-to-r from-teal-500 to-indigo-600 rounded-lg shadow-md hover:opacity-90"
            >
              Contact Me
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}

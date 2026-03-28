import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Github, Linkedin, Mail } from 'lucide-react';
import { content } from '../content';

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'py-4' : 'py-6'
    }`}>
      <div className="container mx-auto px-6">
        <div className={`flex items-center justify-between rounded-full px-6 py-2 transition-all duration-300 ${
          isScrolled ? 'glass-card bg-white/5' : ''
        }`}>
          <a href="#" className="text-xl font-bold tracking-tighter text-gradient">
            {content.name.split(' ')[0]}.
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-slate-400 hover:text-white transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-4">
            <a href={content.github} target="_blank" rel="noopener noreferrer" className="p-2 text-slate-400 hover:text-white transition-colors">
              <Github size={20} />
            </a>
            <a href={content.linkedin} target="_blank" rel="noopener noreferrer" className="p-2 text-slate-400 hover:text-white transition-colors">
              <Linkedin size={20} />
            </a>
            <a href="#contact" className="btn-primary py-1.5 px-5 text-sm">
              Contact Me
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden p-2 text-slate-400 hover:text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 mt-2 px-6 md:hidden"
          >
            <div className="glass-card bg-primary/95 p-6 flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-lg font-medium text-slate-300 hover:text-white"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <hr className="border-white/10" />
              <div className="flex justify-around py-2">
                <a href={content.github} target="_blank" rel="noopener noreferrer" className="text-slate-400">
                  <Github size={24} />
                </a>
                <a href={content.linkedin} target="_blank" rel="noopener noreferrer" className="text-slate-400">
                  <Linkedin size={24} />
                </a>
                <a href={`mailto:${content.email}`} className="text-slate-400">
                  <Mail size={24} />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

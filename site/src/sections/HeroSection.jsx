import React from 'react';
import { motion } from 'framer-motion';
import { Download, FileText, ArrowRight } from 'lucide-react';
import { content } from '../content';

export const HeroSection = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden">
      {/* Background Blobs */}
      <div className="absolute top-1/4 -left-20 w-72 h-72 bg-accent-indigo/20 rounded-full blur-[120px]" />
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-accent-sky/15 rounded-full blur-[160px]" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-accent-indigo font-semibold tracking-wider text-sm md:text-base mb-4 flex items-center gap-2">
              <span className="w-8 h-[1px] bg-accent-indigo"></span>
              SOFTWARE ENGINEER
            </h2>

            <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight leading-[1.1]">
              Crafting scalable <br />
              <span className="text-gradient">digital experiences</span>
            </h1>

            <p className="text-xl text-slate-400 mb-10 max-w-2xl leading-relaxed">
              Hello, I'm <span className="text-white font-medium">{content.name}</span>.
              {content.summary.split('.')[0]}. I specialize in building robust backend systems
              and beautiful mobile applications.
            </p>

            <div className="flex flex-wrap gap-4 items-center">
              <a href="#projects" className="btn-primary flex items-center gap-2 group">
                View My Work
                <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
              </a>
              <a
                href="/Resume_Sivakumaran M.pdf"
                target="_blank"
                className="btn-glass flex items-center gap-2"
              >
                <Download size={18} />
                Download Resume
              </a>
            </div>

            <div className="mt-16 flex items-center gap-8 text-slate-500">
              <div className="flex flex-col">
                <span className="text-2xl font-bold text-white">2+</span>
                <span className="text-xs uppercase tracking-widest font-semibold">Years Exp</span>
              </div>
              <div className="h-8 w-[1px] bg-white/10" />
              <div className="flex flex-col">
                <span className="text-2xl font-bold text-white">20+</span>
                <span className="text-xs uppercase tracking-widest font-semibold">Projects Done</span>
              </div>
              <div className="h-8 w-[1px] bg-white/10" />
              <div className="flex flex-col">
                <span className="text-2xl font-bold text-white">5+</span>
                <span className="text-xs uppercase tracking-widest font-semibold">Certifications</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

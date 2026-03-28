import React from 'react';
import { motion } from 'framer-motion';
import { Download, ArrowRight } from 'lucide-react';
import { content } from '../content';
import portraitImg from '../assets/siva.jpg';

export const HeroSection = () => {
  return (
    <section className="relative min-h-[90vh] flex items-start md:items-center pt-20 overflow-hidden">
      {/* Background Blobs */}
      <div className="absolute top-1/4 -left-20 w-72 h-72 bg-accent-indigo/20 rounded-full blur-[120px]" />
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-accent-sky/15 rounded-full blur-[160px]" />

      {/* Portrait: bottom fade on mobile; right-side fade on md+ — same fade-in, no layout shift */}
      <motion.div
        className="pointer-events-none absolute bottom-0 left-0 right-0 z-[1] h-[min(42vh,19rem)] sm:h-[min(44vh,22rem)] md:inset-x-auto md:top-20 md:right-0 md:bottom-0 md:left-auto md:h-auto md:w-[min(52%,28rem)] lg:w-[min(48%,32rem)]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.35, ease: [0.22, 1, 0.36, 1] }}
      >
        <img
          src={portraitImg}
          alt={`${content.name}, Software Engineer`}
          className="h-full w-full object-cover object-[center_25%] sm:object-[center_30%] [mask-image:linear-gradient(to_top,black_0%,black_55%,transparent_100%)] md:object-[center_30%] md:[mask-image:linear-gradient(to_right,transparent_0%,rgba(0,0,0,0.35)_18%,black_45%)]"
          loading="eager"
          decoding="async"
        />
      </motion.div>

      <div className="container mx-auto px-6 relative z-10 w-full pb-[min(42vh,19rem)] sm:pb-[min(44vh,22rem)] md:pb-0">
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
                href="/resume-sivakumaran-m.pdf"
                target="_blank"
                rel="noopener noreferrer"
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

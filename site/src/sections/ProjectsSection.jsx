import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Layers, CheckCircle2 } from 'lucide-react';
import { content } from '../content';
import { GlassCard } from '../components/GlassCard';

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 bg-slate-900/30">
      <div className="container mx-auto px-6">
        <div className="flex flex-col mb-16 items-center text-center">
          <h2 className="text-accent-green font-semibold tracking-wider text-sm mb-2 uppercase">Portfolio</h2>
          <h3 className="text-4xl font-bold tracking-tight mb-4">Featured Projects</h3>
          <p className="text-slate-400 max-w-2xl">
            A selection of my recent works, ranging from scalable backend architectures 
            to cross-platform mobile applications.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {content.projects.map((project, index) => (
            <GlassCard key={index} delay={index * 0.1} className="flex flex-col h-full group">
              <div className="flex items-center justify-between mb-6">
                <div className="p-3 bg-white/5 rounded-xl text-accent-sky group-hover:scale-110 transition-transform">
                  <Layers size={24} />
                </div>
                <div className="flex gap-4">
                  <a href="#" className="p-2 text-slate-400 hover:text-white transition-colors">
                    <Github size={20} />
                  </a>
                  <a href="#" className="p-2 text-slate-400 hover:text-white transition-colors">
                    <ExternalLink size={20} />
                  </a>
                </div>
              </div>

              <h4 className="text-2xl font-bold mb-3 group-hover:text-accent-sky transition-colors">
                {project.title}
              </h4>
              <p className="text-slate-400 mb-6 flex-grow leading-relaxed">
                {project.description}
              </p>

              <div className="space-y-4 mb-8">
                <h5 className="text-xs font-bold uppercase tracking-widest text-slate-500">Key Achievements</h5>
                <ul className="grid grid-cols-1 gap-2">
                  {project.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-slate-300">
                      <CheckCircle2 size={14} className="text-accent-green" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-wrap gap-2 pt-4 border-t border-white/10">
                {project.tech.map((tech, i) => (
                  <span 
                    key={i} 
                    className="px-3 py-1 bg-white/5 rounded-full text-xs font-medium text-slate-300 border border-white/10"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
};

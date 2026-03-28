import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin } from 'lucide-react';
import { content } from '../content';
import { GlassCard } from '../components/GlassCard';

export const ExperienceSection = () => {
  return (
    <section id="experience" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="flex flex-col mb-16">
          <h2 className="text-accent-indigo font-semibold tracking-wider text-sm mb-2 uppercase">Journey</h2>
          <h3 className="text-4xl font-bold tracking-tight">Work Experience</h3>
        </div>

        <div className="space-y-8 max-w-4xl mx-auto">
          {content.experience.map((exp, index) => (
            <GlassCard key={index} delay={index * 0.1} className="relative overflow-hidden group">
              {/* Corner accent */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-accent-indigo/10 rounded-full -mr-16 -mt-16 blur-3xl group-hover:bg-accent-indigo/20 transition-all duration-500" />
              
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
                <div className="flex-1">
                  <div className="flex items-center gap-3 text-accent-sky mb-2">
                    <Briefcase size={18} />
                    <span className="font-semibold uppercase tracking-wider text-xs">{exp.company}</span>
                  </div>
                  <h4 className="text-2xl font-bold text-white mb-2">{exp.role}</h4>
                  
                  <div className="flex flex-wrap gap-4 text-sm text-slate-400 mb-6">
                    <div className="flex items-center gap-1.5">
                      <Calendar size={14} />
                      {exp.period}
                    </div>
                    <div className="flex items-center gap-1.5">
                      <MapPin size={14} />
                      {exp.location}
                    </div>
                  </div>

                  <ul className="space-y-3">
                    {exp.description.map((item, i) => (
                      <li key={i} className="flex items-start gap-3 text-slate-400 leading-relaxed">
                        <span className="mt-2.5 w-1.5 h-1.5 rounded-full bg-accent-indigo flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
};

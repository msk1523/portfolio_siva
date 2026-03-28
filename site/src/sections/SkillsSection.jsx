import React from 'react';
import { motion } from 'framer-motion';
import { content } from '../content';
import { GlassCard } from '../components/GlassCard';
import { 
  Smartphone, 
  Globe, 
  Cloud, 
  Code2, 
  Cpu 
} from 'lucide-react';

export const SkillsSection = () => {
  const getIcon = (category) => {
    switch (category) {
      case 'mobile': return <Smartphone size={24} className="text-accent-indigo" />;
      case 'web': return <Globe size={24} className="text-accent-sky" />;
      case 'cloud': return <Cloud size={24} className="text-accent-green" />;
      case 'languages': return <Code2 size={24} className="text-accent-sky" />;
      case 'core': return <Cpu size={24} className="text-accent-indigo" />;
      default: return <Code2 size={24} />;
    }
  };

  return (
    <section id="skills" className="py-24">
      <div className="container mx-auto px-6">
        <div className="flex flex-col mb-16 items-center text-center">
          <h2 className="text-accent-sky font-semibold tracking-wider text-sm mb-2 uppercase">Expertise</h2>
          <h3 className="text-4xl font-bold tracking-tight mb-4">Technical Stack</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {Object.entries(content.skills).map(([category, skills], index) => (
            <GlassCard key={category} delay={index * 0.1}>
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-white/5 rounded-2xl">
                  {getIcon(category)}
                </div>
                <h4 className="text-lg font-bold capitalize">{category}</h4>
              </div>

              <div className="flex flex-wrap gap-2">
                {skills.map((skill, i) => (
                  <span 
                    key={i} 
                    className="px-4 py-2 bg-white/5 rounded-lg text-sm text-slate-300 border border-white/5 hover:bg-white/10 hover:border-white/20 transition-all cursor-default"
                  >
                    {skill}
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

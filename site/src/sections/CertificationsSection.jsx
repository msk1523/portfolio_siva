import React from 'react';
import { motion } from 'framer-motion';
import { Award, CheckCircle } from 'lucide-react';
import { content } from '../content';
import { GlassCard } from '../components/GlassCard';

export const CertificationsSection = () => {
  return (
    <section id="certifications" className="py-24 bg-slate-900/30">
      <div className="container mx-auto px-6">
        <div className="flex flex-col mb-16 items-center text-center">
          <h2 className="text-accent-green font-semibold tracking-wider text-sm mb-2 uppercase">Achievements</h2>
          <h3 className="text-4xl font-bold tracking-tight mb-4">Certifications</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {content.certifications.map((cert, index) => (
            <GlassCard key={index} delay={index * 0.1} className="flex items-center gap-4">
              <div className="p-3 bg-accent-green/10 rounded-full text-accent-green">
                <Award size={24} />
              </div>
              <h4 className="text-lg font-medium text-slate-200">{cert}</h4>
              <CheckCircle size={18} className="ml-auto text-accent-green" />
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
};

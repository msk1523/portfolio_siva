import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, MapPin, Phone, Send } from 'lucide-react';
import { content } from '../content';
import { GlassCard } from '../components/GlassCard';

export const ContactSection = () => {
  return (
    <section id="contact" className="py-24">
      <div className="container mx-auto px-6">
        <div className="flex flex-col mb-16 items-center text-center">
          <h2 className="text-accent-indigo font-semibold tracking-wider text-sm mb-2 uppercase">Connect</h2>
          <h3 className="text-4xl font-bold tracking-tight mb-4">Get In Touch</h3>
          <p className="text-slate-400 max-w-2xl">
            Currently looking for new opportunities. Whether you have a question or
            just want to say hi, I'll try my best to get back to you!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <div className="space-y-6">
            <GlassCard className="flex items-center gap-6 p-8">
              <div className="w-14 h-14 bg-accent-indigo/10 rounded-2xl flex items-center justify-center text-accent-indigo">
                <Mail size={28} />
              </div>
              <div>
                <h4 className="text-sm font-bold uppercase tracking-widest text-slate-500 mb-1">Email</h4>
                <a href={`mailto:${content.email}`} className="text-xl font-medium hover:text-accent-indigo transition-colors uppercase">
                  {content.email}
                </a>
              </div>
            </GlassCard>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <GlassCard className="flex flex-col gap-4">
                <div className="w-12 h-12 bg-accent-sky/10 rounded-xl flex items-center justify-center text-accent-sky">
                  <Linkedin size={24} />
                </div>
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-1">LinkedIn</h4>
                  <a href={content.linkedin} target="_blank" rel="noopener noreferrer" className="font-medium hover:text-accent-sky transition-colors">
                    Sivakumaran Manivaannan
                  </a>
                </div>
              </GlassCard>

              <GlassCard className="flex flex-col gap-4">
                <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center text-white">
                  <Github size={24} />
                </div>
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-1">GitHub</h4>
                  <a href={content.github} target="_blank" rel="noopener noreferrer" className="font-medium hover:text-white transition-colors">
                    msk1523
                  </a>
                </div>
              </GlassCard>
            </div>

            <GlassCard className="flex items-center gap-6">
              <div className="w-12 h-12 bg-accent-green/10 rounded-xl flex items-center justify-center text-accent-green">
                <MapPin size={24} />
              </div>
              <div>
                <h4 className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-1">Location</h4>
                <p className="font-medium">{content.location}</p>
              </div>
            </GlassCard>
          </div>

          <GlassCard className="p-8">
            <form className="space-y-6" onSubmit={(e) => {
              e.preventDefault();
              const formData = new FormData(e.currentTarget);
              const name = formData.get('name');
              const email = formData.get('email');
              const subject = formData.get('subject');
              const message = formData.get('message');
              
              const mailtoUrl = `mailto:${content.email}?subject=${encodeURIComponent(
                subject || 'Inquiry from Portfolio'
              )}&body=${encodeURIComponent(
                `Hi Sivakumaran,\n\nYou have a new message from your portfolio:\n\n` +
                `Name: ${name}\n` +
                `Reply-To: ${email}\n\n` +
                `Message:\n${message}`
              )}`;
              
              window.location.href = mailtoUrl;
            }}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-400 ml-1">Name</label>
                  <input
                    type="text"
                    name="name"
                    required
                    placeholder="John Doe"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-accent-indigo/50 transition-colors"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-400 ml-1">Email</label>
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="john@example.com"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-accent-indigo/50 transition-colors"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-400 ml-1">Subject</label>
                <input
                  type="text"
                  name="subject"
                  required
                  placeholder="Inquiry about collaboration"
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-accent-indigo/50 transition-colors"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-400 ml-1">Message</label>
                <textarea
                  name="message"
                  required
                  rows="4"
                  placeholder="Your message here..."
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-accent-indigo/50 transition-colors resize-none"
                />
              </div>
              <button type="submit" className="btn-primary w-full py-4 flex items-center justify-center gap-2 group">
                Send Message
                <Send size={18} className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </button>
            </form>
          </GlassCard>
        </div>
      </div>
    </section>
  );
};

export const Footer = () => {
  return (
    <footer className="py-12 border-t border-white/5">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="text-center md:text-left">
          <p className="text-sm text-slate-500">
            © {new Date().getFullYear()} {content.name}. All rights reserved.
          </p>
          <p className="text-xs text-slate-600 mt-1">
            Built with React, Tailwind & Framer Motion.
          </p>
        </div>

        <div className="flex gap-8">
          <a href="#" className="text-xs font-bold uppercase tracking-widest text-slate-500 hover:text-white transition-colors">Privacy</a>
          <a href="#" className="text-xs font-bold uppercase tracking-widest text-slate-500 hover:text-white transition-colors">Terms</a>
          <a href="#" className="text-xs font-bold uppercase tracking-widest text-slate-500 hover:text-white transition-colors">Sitemap</a>
        </div>
      </div>
    </footer>
  );
};

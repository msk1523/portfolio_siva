import React from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './sections/HeroSection';
import { ExperienceSection } from './sections/ExperienceSection';
import { ProjectsSection } from './sections/ProjectsSection';
import { SkillsSection } from './sections/SkillsSection';
import { CertificationsSection } from './sections/CertificationsSection';
import { ContactSection, Footer } from './sections/ContactSection';

function App() {
  return (
    <div className="relative min-h-screen">
      <Navbar />

      <main>
        <HeroSection />

        <div className="container mx-auto px-6 py-24" id="about">
          <div className="max-w-4xl">
            <h2 className="text-accent-indigo font-semibold tracking-wider text-sm mb-2 uppercase">About Me</h2>
            <p className="text-3xl md:text-4xl font-bold leading-tight mb-8">
              A software engineer passionate about building
              <span className="text-gradient"> resilient, high-performance systems </span>
              and large-scale infrastructure.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-slate-400 leading-relaxed">
              <p>
                With hands-on experience in C# .NET, Flutter, and cloud platforms, I bridge the gap between
                complex backend architectures and seamless user experiences. I thrive on solving
                optimization challenges and designing secure microservices.
              </p>
              <p>
                My background in Computer Science and Design allows me to approach problems with both
                technical rigor and aesthetic sensibility, ensuring that the systems I build are not
                only powerful but also intuitive to use.
              </p>
            </div>
          </div>
        </div>

        <ExperienceSection />
        <ProjectsSection />
        <SkillsSection />
        <CertificationsSection />
        <ContactSection />
      </main>

      {/* <Footer /> */}
    </div>
  );
}

export default App;

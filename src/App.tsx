import React from 'react';
import { Navbar } from '@/components/layout/Navbar';
import { Hero } from '@/components/sections/Hero';
import { ProjectsSection } from '@/components/sections/ProjectsSection';
import { About } from '@/components/sections/About';
import { MusicSection } from '@/components/sections/music/MusicSection';
import { PhotographySection } from '@/components/sections/photography/PhotographySection';
import { Contact } from '@/components/sections/Contact';

export const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#F3F0E8] text-[#151515] flex flex-col justify-between selection:bg-[#FF4D24] selection:text-white">
      {/* Skip to Content for Keyboard Accessibility */}
      <a
        href="#hero"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:bg-[#111111] focus:text-[#F3F0E8] focus:px-4 focus:py-2 focus:font-mono focus:text-xs focus:outline focus:outline-2 focus:outline-[#FF4D24]"
      >
        Skip to main content
      </a>

      {/* Adaptive Editorial Navigation */}
      <Navbar />

      {/* Structured Narrative Track: Opening -> Projects -> Personal Background -> Music -> Photography -> Contact */}
      <main id="main-content" className="flex-1 flex flex-col w-full bg-[#F3F0E8]">
        {/* Section 00: The Interruption Hero (Paper Environment) */}
        <Hero />

        {/* Section 01: Selected Work — The 4 Bespoke Project Presentations */}
        <ProjectsSection />

        {/* Section 02: Personal Background & Engineering Interests (Paper Environment) */}
        <About />

        {/* Section 03A: Music — LOUD / IN PROGRESS (Ink Environment) */}
        <MusicSection />

        {/* Section 03B: Photography — WHAT THE EYE KEEPS (Paper Environment) */}
        <PhotographySection />

        {/* Section 04: Transmission & Colophon (Ink Environment) */}
        <Contact />
      </main>
    </div>
  );
};

export default App;

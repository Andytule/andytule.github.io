import React from 'react';

import Footer from '@/components/layout/Footer';
import Navbar from '@/components/layout/Navbar';
import Contact from '@/components/sections/Contact';
import Hero from '@/components/sections/Hero';
import Projects from '@/components/sections/Projects';
import Resume from '@/components/sections/Resume';
import Skills from '@/components/sections/Skills';
import Timeline from '@/components/sections/Timeline';

const App = (): React.ReactElement => (
  <div className="relative min-h-screen overflow-x-hidden bg-[var(--color-bg)]">
    {/* Apple-style layered ambient light system */}
    <div aria-hidden="true" className="fixed inset-0 pointer-events-none z-0">
      {/* Base sweep — barely-there blue-to-purple */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(135deg, rgba(40,90,200,0.05) 0%, transparent 55%, rgba(90,30,180,0.04) 100%)',
        }}
      />
      {/* Top-left blue */}
      <div
        className="absolute rounded-full"
        style={{
          left: '-20%',
          top: '-15%',
          height: '900px',
          width: '900px',
          background:
            'radial-gradient(circle at center, rgba(60,130,255,0.05) 0%, transparent 65%)',
          filter: 'blur(80px)',
        }}
      />
      {/* Bottom-right purple */}
      <div
        className="absolute rounded-full"
        style={{
          right: '-15%',
          bottom: '-10%',
          height: '900px',
          width: '900px',
          background:
            'radial-gradient(circle at center, rgba(120,50,240,0.05) 0%, transparent 65%)',
          filter: 'blur(80px)',
        }}
      />
    </div>

    <Navbar />

    <main className="relative z-10">
      <Hero />
      <Skills />
      <Timeline />
      <Projects />
      <Contact />
      <Resume />
    </main>

    <Footer />
  </div>
);

export default App;

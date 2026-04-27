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
  <div
    style={{
      position: 'relative',
      minHeight: '100vh',
      overflowX: 'hidden',
      background: 'var(--color-bg)',
    }}
  >
    {/* Apple-style layered ambient light system */}
    <div
      aria-hidden="true"
      style={{ position: 'fixed', inset: 0, pointerEvents: 'none', zIndex: 0 }}
    >
      {/* Base sweep — barely-there blue-to-purple */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background:
            'linear-gradient(135deg, rgba(40,90,200,0.05) 0%, transparent 55%, rgba(90,30,180,0.04) 100%)',
        }}
      />
      {/* Top-left blue */}
      <div
        style={{
          position: 'absolute',
          left: '-20%',
          top: '-15%',
          height: '900px',
          width: '900px',
          borderRadius: '50%',
          background:
            'radial-gradient(circle at center, rgba(60,130,255,0.05) 0%, transparent 65%)',
          filter: 'blur(80px)',
        }}
      />
      {/* Bottom-right purple */}
      <div
        style={{
          position: 'absolute',
          right: '-15%',
          bottom: '-10%',
          height: '900px',
          width: '900px',
          borderRadius: '50%',
          background:
            'radial-gradient(circle at center, rgba(120,50,240,0.05) 0%, transparent 65%)',
          filter: 'blur(80px)',
        }}
      />
    </div>

    <Navbar />

    <main style={{ position: 'relative', zIndex: 10 }}>
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

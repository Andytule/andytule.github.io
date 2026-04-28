import React from 'react';

import { AmbientBackground, Footer, Navbar } from '@/components/layout';
import Contact from '@/components/sections/Contact';
import Hero from '@/components/sections/Hero';
import Projects from '@/components/sections/Projects';
import Resume from '@/components/sections/Resume';
import Skills from '@/components/sections/Skills';
import Timeline from '@/components/sections/Timeline';

const App = (): React.ReactElement => (
  <div className="relative min-h-screen overflow-x-hidden bg-[var(--color-bg)]">
    <AmbientBackground />
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

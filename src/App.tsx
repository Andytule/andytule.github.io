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
  <div className="relative min-h-screen overflow-x-hidden bg-[#0e0e10]">
    {/* Ambient background orbs */}
    <div
      aria-hidden="true"
      className="pointer-events-none fixed right-[-10%] top-[-20%] h-[700px] w-[700px] rounded-full bg-[radial-gradient(circle,rgba(59,130,246,0.04)_0%,transparent_70%)]"
    />
    <div
      aria-hidden="true"
      className="pointer-events-none fixed left-[-15%] top-[40%] h-[700px] w-[700px] rounded-full bg-[radial-gradient(circle,rgba(59,130,246,0.03)_0%,transparent_70%)]"
    />

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

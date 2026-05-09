import React, { ReactElement, useState } from 'react';

import { AmbientBackground, Footer, Navbar } from '@/components/layout';
import AppLoader from '@/components/layout/AppLoader';
import Contact from '@/components/sections/Contact';
import Education from '@/components/sections/Education';
import Hero from '@/components/sections/Hero';
import Projects from '@/components/sections/Projects';
import Resume from '@/components/sections/Resume';
import Skills from '@/components/sections/Skills';
import WorkExperience from '@/components/sections/WorkExperience';

const App = (): ReactElement => {
  const [loaded, setLoaded] = useState(false);

  return (
    <>
      {!loaded && <AppLoader onComplete={() => setLoaded(true)} />}
      <div
        className="relative min-h-screen overflow-x-hidden"
        style={{
          opacity: loaded ? 1 : 0,
          transition: 'opacity 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
        }}
      >
        <AmbientBackground />
        <Navbar />
        <main className="relative z-10">
          <Hero />
          <Skills />
          <WorkExperience />
          <Projects />
          <Education />
          <Contact />
          <Resume />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default App;

import React from 'react';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { SKILLS } from '@/data';
import useScrollReveal from '@/hooks/useScrollReveal';

const Skills: React.FC = () => {
  const ref = useScrollReveal<HTMLElement>();

  return (
    <section id="skills" className="mx-auto max-w-[1200px] px-6 py-16" ref={ref}>
      {/* Section header */}
      <div className="mb-10">
        <p className="mb-2 text-[0.65rem] font-semibold uppercase tracking-widest text-[#60a5fa]">
          Technical Arsenal
        </p>
        <h2 className="font-display text-[clamp(1.75rem,4vw,2rem)] font-semibold tracking-tight text-[#f0f0f2]">
          What I work with
        </h2>
        <div className="mt-2 h-0.5 w-10 rounded-full bg-[#3b82f6]" />
      </div>

      <div className="grid grid-cols-2 gap-4 lg:grid-cols-3">
        {SKILLS.map((skill) => (
          <Card
            key={skill.category}
            className="group border-white/7 bg-[#1c1c1f] transition-all duration-200 hover:-translate-y-0.5 hover:border-[#60a5fa]/30 hover:shadow-[0_0_20px_rgba(33,150,243,0.1)]"
          >
            <CardHeader className="pb-2">
              <div className="mb-1 text-xl" aria-hidden="true">
                {skill.icon}
              </div>
              <CardTitle className="font-display text-base font-semibold text-[#f0f0f2]">
                {skill.category}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm leading-relaxed text-[#4a4a55]">{skill.items.join(', ')}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default Skills;

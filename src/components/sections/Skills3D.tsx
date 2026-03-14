import { useEffect, useRef, useState } from 'react';

const skillCategories = [
  {
    title: 'Frontend',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 7.5l3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0021 18V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v12a2.25 2.25 0 002.25 2.25z" />
      </svg>
    ),
    accent: 'accent',
    skills: [
      { name: 'React / React Native', level: 95 },
      { name: 'TypeScript', level: 90 },
      { name: 'JavaScript (ES6+)', level: 92 },
      { name: 'HTML/CSS', level: 88 },
    ],
  },
  {
    title: 'Backend',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 14.25h13.5m-13.5 0a3 3 0 01-3-3m3 3a3 3 0 100 6h13.5a3 3 0 100-6m-16.5-3a3 3 0 013-3h13.5a3 3 0 013 3m-19.5 0a4.5 4.5 0 01.9-2.7L5.737 5.1a3.375 3.375 0 012.7-1.35h7.126c1.062 0 2.062.5 2.7 1.35l2.587 3.45a4.5 4.5 0 01.9 2.7m0 0a3 3 0 01-3 3m0 3h.008v.008h-.008v-.008zm0-6h.008v.008h-.008v-.008zm-3 6h.008v.008h-.008v-.008zm0-6h.008v.008h-.008v-.008z" />
      </svg>
    ),
    accent: 'teal',
    skills: [
      { name: 'Python / Flask', level: 85 },
      { name: 'Node.js', level: 80 },
      { name: 'REST APIs', level: 88 },
      { name: 'Databases (SQL/NoSQL)', level: 78 },
    ],
  },
  {
    title: 'Tools & Other',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17l-5.1-3.06a1.5 1.5 0 010-2.58l5.1-3.06a1.5 1.5 0 011.59 0l5.1 3.06a1.5 1.5 0 010 2.58l-5.1 3.06a1.5 1.5 0 01-1.59 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17l-5.1 3.06m5.1-3.06l5.1 3.06M3.27 6.96L8.41 10.02m7.18 0l5.14-3.06" />
      </svg>
    ),
    accent: 'amber',
    skills: [
      { name: 'Git / GitHub', level: 90 },
      { name: 'Docker', level: 72 },
      { name: 'Figma / Design', level: 75 },
      { name: 'CI/CD Pipelines', level: 70 },
    ],
  },
];

function SkillBar({ name, level, visible, delay }: { name: string; level: number; visible: boolean; delay: number }) {
  return (
    <div className="space-y-2">
      <div className="flex justify-between text-sm">
        <span className="text-text-primary font-medium">{name}</span>
        <span className="font-mono text-text-muted text-xs">{level}%</span>
      </div>
      <div className="skill-bar-track">
        <div
          className="skill-bar-fill"
          style={{
            width: visible ? `${level}%` : '0%',
            transitionDelay: `${delay}ms`,
          }}
        />
      </div>
    </div>
  );
}

export default function Skills3D() {
  const sectionRef = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.15 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="relative z-10 py-28 px-4 sm:px-6 lg:px-8" id="skills">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 space-y-4">
          <div className="section-badge mx-auto w-fit">
            <span className="w-1.5 h-1.5 rounded-full bg-teal" />
            Tech Stack
          </div>
          <h2 className="text-3xl md:text-5xl font-bold font-display text-text-primary">
            Skills & <span className="gradient-text">Expertise</span>
          </h2>
          <p className="text-text-secondary text-base max-w-lg mx-auto">
            Technologies and tools I use to bring ideas to life.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {skillCategories.map((cat, catIdx) => {
            const colorMap: Record<string, { iconBg: string; iconText: string; dot: string }> = {
              accent: { iconBg: 'bg-accent/10', iconText: 'text-accent-light', dot: 'bg-accent-light' },
              teal: { iconBg: 'bg-teal/10', iconText: 'text-teal', dot: 'bg-teal' },
              amber: { iconBg: 'bg-amber/10', iconText: 'text-amber', dot: 'bg-amber' },
            };
            const colors = colorMap[cat.accent];

            return (
              <div
                key={cat.title}
                className={`glass-card p-6 transition-all duration-700 ${
                  visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${catIdx * 150}ms` }}
              >
                {/* Category header */}
                <div className="flex items-center gap-3 mb-6">
                  <div className={`w-10 h-10 rounded-xl ${colors.iconBg} ${colors.iconText} flex items-center justify-center`}>
                    {cat.icon}
                  </div>
                  <div>
                    <h3 className="font-display text-lg font-bold text-text-primary">{cat.title}</h3>
                  </div>
                </div>

                {/* Skill bars */}
                <div className="space-y-4">
                  {cat.skills.map((skill, i) => (
                    <SkillBar
                      key={skill.name}
                      name={skill.name}
                      level={skill.level}
                      visible={visible}
                      delay={300 + catIdx * 200 + i * 150}
                    />
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

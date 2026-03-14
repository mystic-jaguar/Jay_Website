import { useEffect, useRef, useState } from 'react';

export default function About3D() {
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

  const highlights = [
    { label: 'Projects', value: '7+', color: 'accent' },
    { label: 'Technologies', value: '12+', color: 'teal' },
    { label: 'Years Coding', value: '3+', color: 'amber' },
  ];

  return (
    <section ref={sectionRef} className="relative z-10 py-28 px-4 sm:px-6 lg:px-8" id="about">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 space-y-4">
          <div className="section-badge mx-auto w-fit">
            <span className="w-1.5 h-1.5 rounded-full bg-accent-light" />
            About Me
          </div>
          <h2 className="text-3xl md:text-5xl font-bold font-display text-text-primary">
            Who I <span className="gradient-text">Am</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Bio */}
          <div
            className={`lg:col-span-7 space-y-6 transition-all duration-700 ${
              visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <div className="glass-card p-6 md:p-8 space-y-5" style={{ transform: 'none' }}>
              <p className="text-text-primary text-base md:text-lg leading-relaxed">
                I'm a <span className="text-accent-light font-semibold">Full-Stack Developer</span> passionate about creating
                high-performance, user-centric applications. With deep expertise in{' '}
                <span className="text-accent-light">TypeScript</span>,{' '}
                <span className="text-accent-light">React</span>, and{' '}
                <span className="text-teal">Python</span>, I bridge the gap between design and technology.
              </p>
              <p className="text-text-secondary text-sm md:text-base leading-relaxed">
                Currently building mobile apps, e-commerce platforms, and AI-powered solutions.
                I love turning complex problems into elegant, performant code. When I'm not coding,
                you'll find me exploring new technologies and contributing to open-source projects.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="/docs/Jay_Resume.pdf"
                download="Jay_Warale_Resume.pdf"
                className="btn-primary justify-center"
                id="download-cv-about"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
                Download Resume
              </a>
              <a
                href="https://github.com/mystic-jaguar"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline justify-center"
                id="github-about"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                </svg>
                View GitHub
              </a>
            </div>
          </div>

          {/* Right side — stats & visual */}
          <div
            className={`lg:col-span-5 space-y-6 transition-all duration-700 ${
              visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{ transitionDelay: '200ms' }}
          >
            {/* Stats cards */}
            <div className="grid grid-cols-3 gap-3">
              {highlights.map((h) => {
                const colorMap: Record<string, string> = {
                  accent: 'text-accent-light',
                  teal: 'text-teal',
                  amber: 'text-amber',
                };
                return (
                  <div key={h.label} className="glass-card p-4 text-center" style={{ transform: 'none' }}>
                    <div className={`text-2xl font-bold font-display ${colorMap[h.color]}`}>{h.value}</div>
                    <div className="text-text-muted text-[11px] font-mono mt-1">{h.label}</div>
                  </div>
                );
              })}
            </div>

            {/* Visual card */}
            <div className="glass-card p-8 text-center" style={{ transform: 'none' }}>
              <div className="relative w-full aspect-square rounded-2xl bg-gradient-to-br from-accent/10 via-transparent to-teal/10 flex items-center justify-center border border-white/5 overflow-hidden">
                <span className="text-7xl font-bold font-display gradient-text">{'</>'}</span>
                <div className="absolute -top-8 -right-8 w-32 h-32 bg-accent/10 rounded-full blur-3xl" />
                <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-teal/10 rounded-full blur-3xl" />
              </div>
              <p className="text-text-muted text-[11px] font-mono mt-4 tracking-wider uppercase">
                Jay Warale — Developer & Builder
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

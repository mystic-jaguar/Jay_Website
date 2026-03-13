import { useState, useEffect, useRef } from 'react';

export default function AboutContact() {
  const [formStatus, setFormStatus] = useState<'idle' | 'sending' | 'sent'>('idle');
  const skillsRef = useRef<HTMLElement>(null);
  const [skillsVisible, setSkillsVisible] = useState(false);

  // Intersection observer for skill bar animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setSkillsVisible(true);
          }
        });
      },
      { threshold: 0.2 }
    );

    if (skillsRef.current) {
      observer.observe(skillsRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleContactSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormStatus('sending');

    setTimeout(() => {
      setFormStatus('sent');
      (e.target as HTMLFormElement).reset();

      setTimeout(() => {
        setFormStatus('idle');
      }, 3000);
    }, 1500);
  };

  const frontendSkills = [
    { name: 'React / React Native', level: 95 },
    { name: 'TypeScript', level: 90 },
    { name: 'JavaScript', level: 92 },
  ];

  const backendSkills = [
    { name: 'Python / Flask', level: 85 },
    { name: 'Node.js', level: 80 },
  ];

  const SkillBar = ({ name, level, delay }: { name: string; level: number; delay: number }) => (
    <div className="space-y-2">
      <div className="flex justify-between font-mono text-xs">
        <span className="text-hud-text">{name}</span>
        <span className="text-neon-cyan">{level}%</span>
      </div>
      <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden border border-neon-cyan/10">
        <div
          className="h-full bg-gradient-to-r from-neon-cyan/70 to-neon-cyan rounded-full skill-bar-fill transition-all"
          style={{
            '--target-width': `${level}%`,
            animationDelay: skillsVisible ? `${delay}s` : '999s',
          } as React.CSSProperties}
        ></div>
      </div>
    </div>
  );

  return (
    <div className="relative z-10 w-full">
      {/* ===== SKILLS SECTION ===== */}
      <section ref={skillsRef} className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto" id="skills">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <div className="font-mono text-[11px] text-neon-cyan/50 tracking-[0.3em] uppercase">
            {'// sector_03'}
          </div>
          <h2 className="text-3xl md:text-5xl font-bold font-space text-white">
            TECH_STACK <span className="text-neon-cyan glow-text-cyan">//</span>{' '}
            <span className="text-hud-muted">ARSENAL</span>
          </h2>
          <div className="w-24 h-[1px] bg-gradient-to-r from-transparent via-neon-cyan/40 to-transparent mx-auto mt-4"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Frontend Module */}
          <div className="cyber-card p-6 rounded-lg hud-brackets">
            <h3 className="font-space text-lg font-bold mb-6 flex items-center gap-3">
              <span className="w-2.5 h-2.5 rounded-full bg-neon-cyan animate-pulse"></span>
              <span className="text-white">FRONTEND</span>
              <span className="font-mono text-[9px] text-neon-cyan/40 tracking-widest">_MODULE</span>
            </h3>
            <div className="space-y-5">
              {frontendSkills.map((skill, i) => (
                <SkillBar key={skill.name} name={skill.name} level={skill.level} delay={0.3 + i * 0.2} />
              ))}
            </div>
          </div>

          {/* Backend Module */}
          <div className="cyber-card p-6 rounded-lg hud-brackets">
            <h3 className="font-space text-lg font-bold mb-6 flex items-center gap-3">
              <span className="w-2.5 h-2.5 rounded-full bg-neon-magenta animate-pulse"></span>
              <span className="text-white">BACKEND</span>
              <span className="font-mono text-[9px] text-neon-magenta/40 tracking-widest">_MODULE</span>
            </h3>
            <div className="space-y-5">
              {backendSkills.map((skill, i) => (
                <SkillBar key={skill.name} name={skill.name} level={skill.level} delay={0.5 + i * 0.2} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===== ABOUT SECTION ===== */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto" id="about">
        <div className="text-center mb-16 space-y-4">
          <div className="font-mono text-[11px] text-neon-cyan/50 tracking-[0.3em] uppercase">
            {'// sector_04'}
          </div>
          <h2 className="text-3xl md:text-5xl font-bold font-space text-white">
            ABOUT <span className="text-neon-magenta glow-text-magenta">//</span>{' '}
            <span className="text-hud-muted">JAY</span>
          </h2>
          <div className="w-24 h-[1px] bg-gradient-to-r from-transparent via-neon-magenta/40 to-transparent mx-auto mt-4"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center max-w-6xl mx-auto">
          {/* Bio */}
          <div className="lg:col-span-7 space-y-6">
            <div className="cyber-card p-6 rounded-lg hud-brackets">
              <div className="font-mono text-[10px] text-neon-cyan/40 mb-4 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
                CLASSIFIED // ACCESS_GRANTED
              </div>
              <p className="text-hud-text text-base leading-relaxed mb-4">
                Full-stack developer passionate about crafting high-performance, user-centric applications. With deep expertise in{' '}
                <span className="text-neon-cyan">TypeScript</span>,{' '}
                <span className="text-neon-cyan">React</span>, and{' '}
                <span className="text-neon-magenta">Python</span>, I bridge the gap between design and technology — ensuring every line of code translates into a seamless user experience.
              </p>
              <p className="text-hud-muted text-sm leading-relaxed">
                Currently building mobile apps, e-commerce platforms, and AI-powered solutions. Always exploring the bleeding edge of web technology.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="/docs/Jay_Resume.pdf"
                download="Jay_Warale_Resume.pdf"
                className="btn-neon btn-neon-solid rounded-lg flex items-center justify-center gap-3"
                id="download-cv-about"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                DOWNLOAD_CV
              </a>
              <a
                href="https://github.com/mystic-jaguar"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-neon btn-neon-magenta rounded-lg flex items-center justify-center gap-3"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                </svg>
                VIEW_GITHUB
              </a>
            </div>
          </div>

          {/* Profile Visual */}
          <div className="lg:col-span-5 hidden lg:block">
            <div className="cyber-card rounded-xl p-8 hud-brackets">
              <div className="relative w-full aspect-square rounded-lg bg-gradient-to-br from-neon-cyan/10 to-neon-magenta/10 flex items-center justify-center border border-white/5 overflow-hidden">
                <span className="text-neon-cyan/15 font-space text-8xl font-bold">&lt;/&gt;</span>
                {/* Decorative glow spots */}
                <div className="absolute -top-6 -right-6 w-28 h-28 bg-neon-cyan/10 rounded-full blur-3xl"></div>
                <div className="absolute -bottom-10 -left-10 w-36 h-36 bg-neon-magenta/10 rounded-full blur-3xl"></div>
              </div>
              <div className="mt-4 font-mono text-[10px] text-hud-dim text-center tracking-wider">
                IDENTITY: JAY_WARALE // CLEARANCE: MAX
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== CONTACT SECTION ===== */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto" id="contact">
        <div className="text-center mb-16 space-y-4">
          <div className="font-mono text-[11px] text-neon-cyan/50 tracking-[0.3em] uppercase">
            {'// sector_05'}
          </div>
          <h2 className="text-3xl md:text-5xl font-bold font-space text-white">
            CONTACT <span className="text-neon-cyan glow-text-cyan">//</span>{' '}
            <span className="text-hud-muted">TRANSMISSION</span>
          </h2>
          <p className="font-mono text-sm text-hud-muted max-w-lg mx-auto">
            Initiate a secure transmission. Currently accepting new missions.
          </p>
          <div className="w-24 h-[1px] bg-gradient-to-r from-transparent via-neon-cyan/40 to-transparent mx-auto mt-4"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="cyber-card p-6 rounded-lg hud-brackets">
              <h3 className="font-space text-xl font-bold text-white mb-4">
                Let's Build Something <span className="text-neon-cyan">Extraordinary</span>
              </h3>
              <p className="text-hud-muted text-sm leading-relaxed mb-6">
                Have a project in mind or want to collaborate? I'm currently available for freelance projects and full-time opportunities. Let's connect.
              </p>

              <div className="space-y-4">
                {/* Email */}
                <div className="flex items-center gap-4 p-3 rounded-lg bg-white/[0.02] border border-neon-cyan/10">
                  <div className="w-10 h-10 rounded-lg bg-neon-cyan/10 border border-neon-cyan/20 flex items-center justify-center text-neon-cyan">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-mono text-[10px] text-hud-dim uppercase tracking-widest">EMAIL_CHANNEL</p>
                    <a href="mailto:jaywarale1@gmail.com" className="text-sm text-neon-cyan hover:text-neon-cyan/80 transition-colors font-mono">
                      jaywarale1@gmail.com
                    </a>
                  </div>
                </div>

                {/* GitHub */}
                <div className="flex items-center gap-4 p-3 rounded-lg bg-white/[0.02] border border-neon-magenta/10">
                  <div className="w-10 h-10 rounded-lg bg-neon-magenta/10 border border-neon-magenta/20 flex items-center justify-center text-neon-magenta">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-mono text-[10px] text-hud-dim uppercase tracking-widest">GITHUB_PROFILE</p>
                    <a href="https://github.com/mystic-jaguar" target="_blank" rel="noopener noreferrer" className="text-sm text-neon-magenta hover:text-neon-magenta/80 transition-colors font-mono">
                      @mystic-jaguar
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="cyber-card p-6 rounded-lg hud-brackets">
            <div className="font-mono text-[10px] text-neon-cyan/40 mb-6 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-neon-cyan animate-pulse"></span>
              SECURE_CHANNEL // ENCRYPTED
            </div>

            <form className="space-y-5" id="contact-form" onSubmit={handleContactSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="space-y-1.5">
                  <label className="font-mono text-[10px] text-hud-dim uppercase tracking-widest" htmlFor="name">
                    FULL_NAME
                  </label>
                  <input
                    className="w-full px-4 py-3 cyber-input rounded-lg text-sm"
                    id="name"
                    name="name"
                    placeholder="John Doe"
                    type="text"
                    required
                  />
                </div>
                <div className="space-y-1.5">
                  <label className="font-mono text-[10px] text-hud-dim uppercase tracking-widest" htmlFor="email">
                    EMAIL_ADDR
                  </label>
                  <input
                    className="w-full px-4 py-3 cyber-input rounded-lg text-sm"
                    id="email"
                    name="email"
                    placeholder="john@example.com"
                    type="email"
                    required
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="font-mono text-[10px] text-hud-dim uppercase tracking-widest" htmlFor="subject">
                  SUBJECT_LINE
                </label>
                <input
                  className="w-full px-4 py-3 cyber-input rounded-lg text-sm"
                  id="subject"
                  name="subject"
                  placeholder="Project Inquiry"
                  type="text"
                  required
                />
              </div>

              <div className="space-y-1.5">
                <label className="font-mono text-[10px] text-hud-dim uppercase tracking-widest" htmlFor="message">
                  MESSAGE_BODY
                </label>
                <textarea
                  className="w-full px-4 py-3 cyber-input rounded-lg text-sm resize-none"
                  id="message"
                  name="message"
                  placeholder="Tell me about your project..."
                  rows={5}
                  required
                ></textarea>
              </div>

              <button
                className={`w-full py-4 font-mono text-sm font-bold tracking-wider rounded-lg transition-all duration-300 ${
                  formStatus === 'sent'
                    ? 'bg-green-500/20 border border-green-400/50 text-green-400 shadow-[0_0_15px_rgba(74,222,128,0.3)]'
                    : formStatus === 'sending'
                    ? 'bg-neon-cyan/10 border border-neon-cyan/30 text-neon-cyan/50 cursor-not-allowed'
                    : 'bg-neon-cyan/10 border border-neon-cyan/40 text-neon-cyan hover:bg-neon-cyan/20 hover:shadow-neon-cyan hover:border-neon-cyan transform hover:-translate-y-1'
                }`}
                type="submit"
                disabled={formStatus !== 'idle'}
              >
                {formStatus === 'sending'
                  ? '>>> TRANSMITTING...'
                  : formStatus === 'sent'
                  ? '✓ TRANSMISSION_SENT'
                  : '>>> SEND_TRANSMISSION'}
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* ===== FOOTER ===== */}
      <footer className="border-t border-neon-cyan/10 py-8 px-4">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-neon-cyan animate-pulse"></span>
            <p className="font-mono text-xs text-hud-dim">
              © {new Date().getFullYear()} Jay Warale. All systems operational.
            </p>
          </div>
          <div className="font-mono text-[10px] text-hud-dim tracking-wider">
            BUILT_WITH // REACT + TYPESCRIPT + TAILWIND
          </div>
        </div>
      </footer>
    </div>
  );
}

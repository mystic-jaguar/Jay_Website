import { useEffect } from 'react';

export default function Hero() {
  // Parallax effect
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const mouseX = e.clientX / window.innerWidth - 0.5;
      const mouseY = e.clientY / window.innerHeight - 0.5;

      const layers = document.querySelectorAll('.parallax-cyber');
      layers.forEach((el, index) => {
        const target = el as HTMLElement;
        const depth = (index + 1) * 15;
        const x = mouseX * depth;
        const y = mouseY * depth;
        target.style.transform = `translate(${x}px, ${y}px)`;
      });
    };

    document.addEventListener('mousemove', handleMouseMove);
    return () => document.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden" id="home">
      {/* HUD Decorative Elements */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        {/* Corner HUD brackets */}
        <div className="absolute top-28 left-8 w-16 h-16 border-l-2 border-t-2 border-neon-cyan/20 parallax-cyber"></div>
        <div className="absolute top-28 right-8 w-16 h-16 border-r-2 border-t-2 border-neon-cyan/20 parallax-cyber"></div>
        <div className="absolute bottom-8 left-8 w-16 h-16 border-l-2 border-b-2 border-neon-magenta/20 parallax-cyber"></div>
        <div className="absolute bottom-8 right-8 w-16 h-16 border-r-2 border-b-2 border-neon-magenta/20 parallax-cyber"></div>

        {/* Floating data circles */}
        <div className="hidden lg:block absolute top-1/3 right-[8%] parallax-cyber">
          <div className="w-32 h-32 rounded-full border border-neon-cyan/10 animate-spin-slow flex items-center justify-center">
            <div className="w-20 h-20 rounded-full border border-neon-cyan/20 flex items-center justify-center">
              <div className="w-3 h-3 bg-neon-cyan/40 rounded-full animate-pulse"></div>
            </div>
          </div>
        </div>

        {/* Horizontal scan line */}
        <div className="absolute left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-neon-cyan/20 to-transparent animate-float" style={{ top: '30%' }}></div>

        {/* Side data stream */}
        <div className="hidden lg:block absolute left-6 top-1/2 -translate-y-1/2 font-mono text-[10px] text-neon-cyan/15 leading-relaxed parallax-cyber">
          <div>SYS.INIT</div>
          <div>0x7FF01</div>
          <div>RENDER:OK</div>
          <div>MEM:2.4GB</div>
          <div>NET:LIVE</div>
          <div>FPS:120</div>
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Hero Content */}
          <div className="text-center lg:text-left space-y-8">
            {/* Status indicator */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-neon-cyan/20 bg-neon-cyan/5 font-mono text-[10px] uppercase tracking-[0.25em] text-neon-cyan">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-neon-cyan opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-neon-cyan"></span>
              </span>
              SYSTEM: ONLINE
            </div>

            {/* Glitch Title */}
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-[0.9] tracking-tighter font-space">
              <span
                className="glitch-text text-white block"
                data-text="JAY"
              >
                JAY
              </span>
              <span
                className="glitch-text text-neon-cyan glow-text-cyan block mt-2"
                data-text="WARALE"
              >
                WARALE
              </span>
            </h1>

            {/* Subtitle */}
            <p className="font-mono text-hud-muted text-sm md:text-base tracking-wider">
              <span className="text-neon-cyan/60">&gt;</span> Full-Stack Developer{' '}
              <span className="text-neon-magenta">&</span> Digital Architect
            </p>

            {/* Description */}
            <p className="text-hud-muted text-base md:text-lg max-w-md mx-auto lg:mx-0 leading-relaxed font-light">
              Crafting high-performance digital experiences that push the boundaries of web technology. Specializing in React, TypeScript, and Python ecosystems.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <a
                href="/docs/Jay_Resume.pdf"
                download="Jay_Warale_Resume.pdf"
                className="btn-neon-solid btn-neon rounded-lg flex items-center gap-3"
                id="download-cv-btn"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                DOWNLOAD_CV
              </a>
              <a
                href="#projects"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="btn-neon btn-neon-magenta rounded-lg flex items-center gap-3"
                id="view-projects-btn"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
                VIEW_PROJECTS
              </a>
            </div>

            {/* Social Links */}
            <div className="flex items-center justify-center lg:justify-start gap-4 pt-2">
              <a
                href="https://github.com/mystic-jaguar"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 border border-neon-cyan/20 rounded-lg flex items-center justify-center text-hud-muted hover:text-neon-cyan hover:border-neon-cyan/50 hover:shadow-neon-cyan transition-all duration-300"
                title="GitHub"
                id="github-link"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                </svg>
              </a>
              <a
                href="mailto:jaywarale1@gmail.com"
                className="w-10 h-10 border border-neon-cyan/20 rounded-lg flex items-center justify-center text-hud-muted hover:text-neon-magenta hover:border-neon-magenta/50 hover:shadow-neon-magenta transition-all duration-300"
                title="Email"
                id="email-link"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                </svg>
              </a>
            </div>
          </div>

          {/* Hero Visual - HUD Display */}
          <div className="hidden lg:flex items-center justify-center relative">
            <div className="relative w-96 h-96">
              {/* Outer ring */}
              <div className="absolute inset-0 border border-neon-cyan/10 rounded-full animate-spin-slow"></div>
              <div className="absolute inset-4 border border-neon-cyan/15 rounded-full animate-spin-slow" style={{ animationDirection: 'reverse', animationDuration: '15s' }}></div>
              <div className="absolute inset-10 border border-neon-magenta/10 rounded-full animate-spin-slow" style={{ animationDuration: '25s' }}></div>

              {/* Center display */}
              <div className="absolute inset-16 cyber-card rounded-2xl flex flex-col items-center justify-center hud-brackets p-6">
                <div className="font-mono text-[10px] text-neon-cyan/50 uppercase tracking-[0.3em] mb-4">
                  DEV_PROFILE
                </div>
                <div className="text-6xl font-bold font-space text-neon-cyan/20 mb-4">
                  &lt;/&gt;
                </div>
                <div className="w-full space-y-2">
                  <div className="flex justify-between font-mono text-[9px] text-hud-muted">
                    <span>PROJECTS</span>
                    <span className="text-neon-cyan">7</span>
                  </div>
                  <div className="h-[1px] bg-neon-cyan/10"></div>
                  <div className="flex justify-between font-mono text-[9px] text-hud-muted">
                    <span>STACK</span>
                    <span className="text-neon-cyan">TS/REACT</span>
                  </div>
                  <div className="h-[1px] bg-neon-cyan/10"></div>
                  <div className="flex justify-between font-mono text-[9px] text-hud-muted">
                    <span>STATUS</span>
                    <span className="text-green-400">ACTIVE</span>
                  </div>
                </div>
              </div>

              {/* Floating badge */}
              <div className="absolute -top-2 right-8 glass-cyber p-3 rounded-lg animate-float">
                <div className="font-mono text-[9px] text-neon-cyan/40 uppercase tracking-widest mb-1">RENDER</div>
                <div className="font-mono text-sm text-neon-cyan font-bold">120 FPS</div>
              </div>

              <div className="absolute -bottom-2 left-4 glass-cyber p-3 rounded-lg animate-float" style={{ animationDelay: '1s' }}>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></div>
                  <span className="font-mono text-[10px] text-hud-muted">ALL SYSTEMS GO</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3">
        <div className="w-[1px] h-12 bg-gradient-to-b from-neon-cyan/40 to-transparent animate-pulse"></div>
        <span className="font-mono text-[9px] text-neon-cyan/30 uppercase tracking-[0.3em]" style={{ writingMode: 'vertical-rl' }}>
          SCROLL
        </span>
      </div>
    </section>
  );
}

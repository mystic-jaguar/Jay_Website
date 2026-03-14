import { useEffect, useRef, useState } from 'react';

export default function Hero3D() {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const [typedText, setTypedText] = useState('');
  const fullText = 'Full-Stack Developer & Digital Architect';

  // Typing animation
  useEffect(() => {
    let i = 0;
    const timer = setInterval(() => {
      if (i <= fullText.length) {
        setTypedText(fullText.slice(0, i));
        i++;
      } else {
        clearInterval(timer);
      }
    }, 45);
    return () => clearInterval(timer);
  }, []);

  // Parallax on mouse move
  useEffect(() => {
    const handleMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 20;
      const y = (e.clientY / window.innerHeight - 0.5) * 20;
      document.querySelectorAll<HTMLElement>('.hero-parallax').forEach((el, idx) => {
        const depth = (idx + 1) * 0.5;
        el.style.transform = `translate(${x * depth}px, ${y * depth}px)`;
      });
    };
    window.addEventListener('mousemove', handleMove);
    return () => window.removeEventListener('mousemove', handleMove);
  }, []);

  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden" id="home">
      <div className="relative z-10 max-w-6xl mx-auto px-6 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left content */}
          <div className="space-y-8 text-center lg:text-left">
            {/* Status badge */}
            <div className="inline-flex opacity-0 animate-slide-up">
              <div className="section-badge">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-teal" />
                </span>
                Available for work
              </div>
            </div>

            {/* Name */}
            <h1
              ref={titleRef}
              className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold font-display leading-[0.95] tracking-tight opacity-0 animate-slide-up"
              style={{ animationDelay: '0.1s' }}
            >
              <span className="text-text-primary block">Jay</span>
              <span className="gradient-text block mt-1">Warale</span>
            </h1>

            {/* Typed subtitle */}
            <p
              className="font-mono text-text-secondary text-sm md:text-base opacity-0 animate-slide-up"
              style={{ animationDelay: '0.2s' }}
            >
              <span className="text-accent-light">{'>'}</span> {typedText}
              <span className="inline-block w-[2px] h-4 bg-accent-light ml-1 animate-glow-pulse align-middle" />
            </p>

            {/* Description */}
            <p
              className="text-text-secondary text-base md:text-lg max-w-md mx-auto lg:mx-0 leading-relaxed opacity-0 animate-slide-up"
              style={{ animationDelay: '0.3s' }}
            >
              Crafting high-performance digital experiences with React, TypeScript, and Python. Turning complex problems into elegant solutions.
            </p>

            {/* CTA Buttons */}
            <div
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 opacity-0 animate-slide-up"
              style={{ animationDelay: '0.4s' }}
            >
              <a
                href="/docs/Jay_Resume.pdf"
                download="Jay_Warale_Resume.pdf"
                className="btn-primary"
                id="download-cv-btn"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
                Download CV
              </a>
              <button onClick={scrollToProjects} className="btn-outline" id="view-projects-btn">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
                View Projects
              </button>
            </div>

            {/* Social Links */}
            <div
              className="flex items-center justify-center lg:justify-start gap-3 opacity-0 animate-slide-up"
              style={{ animationDelay: '0.5s' }}
            >
              <a
                href="https://github.com/mystic-jaguar"
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 rounded-xl border border-surface-border bg-surface flex items-center justify-center text-text-secondary hover:text-accent-light hover:border-accent/40 hover:shadow-glow-sm transition-all duration-300"
                title="GitHub"
                id="github-link"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                </svg>
              </a>
              <a
                href="https://linkedin.com/in/jaywarale"
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 rounded-xl border border-surface-border bg-surface flex items-center justify-center text-text-secondary hover:text-teal hover:border-teal/40 hover:shadow-glow-teal transition-all duration-300"
                title="LinkedIn"
                id="linkedin-link"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
              <a
                href="mailto:jaywarale1@gmail.com"
                className="w-11 h-11 rounded-xl border border-surface-border bg-surface flex items-center justify-center text-text-secondary hover:text-amber hover:border-amber/40 transition-all duration-300"
                title="Email"
                id="email-link"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                </svg>
              </a>
            </div>
          </div>

          {/* Right side — 3D visual element */}
          <div className="hidden lg:flex items-center justify-center">
            <div className="relative w-[420px] h-[420px] hero-parallax">
              {/* Glowing orb layers */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-accent/20 to-teal/10 blur-[80px] animate-glow-pulse" />
              
              {/* Rotating rings */}
              <div className="absolute inset-8 border border-accent/10 rounded-full animate-spin-slow" />
              <div className="absolute inset-16 border border-teal/10 rounded-full animate-spin-slow" style={{ animationDirection: 'reverse', animationDuration: '18s' }} />
              <div className="absolute inset-24 border border-accent/15 rounded-full animate-spin-slow" style={{ animationDuration: '30s' }} />

              {/* Center content */}
              <div className="absolute inset-28 glass-card rounded-2xl flex flex-col items-center justify-center" style={{ transform: 'none' }}>
                <div className="text-6xl font-bold font-display gradient-text mb-3">{'</>'}</div>
                <div className="text-text-muted font-mono text-[10px] tracking-widest uppercase">Developer</div>
              </div>

              {/* Floating stat cards */}
              <div className="absolute -top-4 right-12 glass-card px-4 py-3 rounded-xl animate-float hero-parallax" style={{ transform: 'none' }}>
                <div className="text-xs text-text-muted font-mono">Projects</div>
                <div className="text-lg font-bold text-accent-light font-display">7+</div>
              </div>

              <div className="absolute -bottom-4 left-8 glass-card px-4 py-3 rounded-xl animate-float-delayed hero-parallax" style={{ transform: 'none' }}>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-teal animate-pulse" />
                  <span className="text-xs text-text-secondary font-mono">Open to work</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 opacity-0 animate-fade-in" style={{ animationDelay: '1.5s' }}>
        <div className="scroll-indicator" />
        <span className="text-text-muted text-[10px] font-mono tracking-widest uppercase">Scroll</span>
      </div>
    </section>
  );
}

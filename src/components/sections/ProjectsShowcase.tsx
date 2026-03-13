export default function ProjectsShowcase() {
  const projects = [
    {
      name: 'MobiAssist',
      description: 'Mobile AI Assistant built with cutting-edge artificial intelligence capabilities. React Native cross-platform mobile application.',
      tech: ['TypeScript', 'React Native', 'AI/ML'],
      url: 'https://github.com/mystic-jaguar/MobiAssist',
      accent: 'cyan' as const,
      status: 'ACTIVE',
    },
    {
      name: 'ZPinEcom',
      description: 'Full-stack e-commerce platform with modern payment integrations, inventory management, and real-time order tracking.',
      tech: ['TypeScript', 'Full-Stack', 'E-Commerce'],
      url: 'https://github.com/mystic-jaguar/ZPinEcom',
      accent: 'magenta' as const,
      status: 'DEPLOYED',
    },
    {
      name: 'furniture-store',
      description: 'Elegant furniture browsing and shopping experience. Clean UI with smooth animations and responsive design.',
      tech: ['JavaScript', 'React', 'CSS'],
      url: 'https://github.com/mystic-jaguar/furniture-store',
      accent: 'cyan' as const,
      status: 'LIVE',
    },
    {
      name: 'offline-chatbot',
      description: 'Intelligent AI chatbot that operates fully offline. Built with local NLP models for private, fast conversations.',
      tech: ['JavaScript', 'Node.js', 'NLP'],
      url: 'https://github.com/mystic-jaguar/offline-chatbot',
      accent: 'magenta' as const,
      status: 'STABLE',
    },
  ];

  const accentStyles = {
    cyan: {
      border: 'border-neon-cyan/20 hover:border-neon-cyan/60',
      glow: 'hover:shadow-neon-cyan',
      tag: 'border-neon-cyan/30 text-neon-cyan bg-neon-cyan/5',
      badge: 'text-neon-cyan',
      dot: 'bg-neon-cyan',
      btn: 'border-neon-cyan/40 text-neon-cyan hover:bg-neon-cyan/10 hover:border-neon-cyan',
    },
    magenta: {
      border: 'border-neon-magenta/20 hover:border-neon-magenta/60',
      glow: 'hover:shadow-neon-magenta',
      tag: 'border-neon-magenta/30 text-neon-magenta bg-neon-magenta/5',
      badge: 'text-neon-magenta',
      dot: 'bg-neon-magenta',
      btn: 'border-neon-magenta/40 text-neon-magenta hover:bg-neon-magenta/10 hover:border-neon-magenta',
    },
  };

  return (
    <section className="relative z-10 w-full py-24 px-4 sm:px-6 lg:px-8" id="projects">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <div className="font-mono text-[11px] text-neon-cyan/50 tracking-[0.3em] uppercase">
            {'// sector_02'}
          </div>
          <h2 className="text-3xl md:text-5xl font-bold font-space text-white">
            PROJECTS <span className="text-neon-cyan glow-text-cyan">//</span>{' '}
            <span className="text-hud-muted">MISSION_LOG</span>
          </h2>
          <p className="font-mono text-sm text-hud-muted max-w-lg mx-auto">
            Active deployments and archived operations from the field.
          </p>
          <div className="w-24 h-[1px] bg-gradient-to-r from-transparent via-neon-cyan/40 to-transparent mx-auto mt-4"></div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project) => {
            const style = accentStyles[project.accent];
            return (
              <div
                key={project.name}
                className={`cyber-card p-6 rounded-lg transition-all duration-400 ${style.border} ${style.glow} group hud-brackets`}
              >
                {/* Card Header */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className={`w-2 h-2 rounded-full ${style.dot} animate-pulse`}></div>
                    <h3 className={`font-space text-xl font-bold text-white group-hover:${style.badge} transition-colors`}>
                      {project.name}
                    </h3>
                  </div>
                  <span className={`font-mono text-[9px] tracking-[0.2em] ${style.badge} px-2 py-1 border ${style.tag.split(' ').slice(0, 1).join(' ')} rounded`}>
                    {project.status}
                  </span>
                </div>

                {/* Description */}
                <p className="text-hud-muted text-sm leading-relaxed mb-5 font-light">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-5">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className={`font-mono text-[10px] px-2.5 py-1 border rounded ${style.tag} tracking-wider`}
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* CTA */}
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex items-center gap-2 font-mono text-xs tracking-wider px-4 py-2.5 border rounded-md transition-all duration-300 ${style.btn}`}
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                  </svg>
                  VIEW_ON_GITHUB
                  <svg className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

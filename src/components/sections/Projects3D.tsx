import { useEffect, useRef, useState, useCallback } from 'react';

const projects = [
  {
    name: 'MobiAssist',
    description: 'Mobile AI Assistant built with cutting-edge artificial intelligence capabilities. Cross-platform React Native application with intelligent conversation engine.',
    tech: ['TypeScript', 'React Native', 'AI/ML'],
    url: 'https://github.com/mystic-jaguar/MobiAssist',
    status: 'Active',
    color: 'accent',
  },
  {
    name: 'ZPinEcom',
    description: 'Full-stack e-commerce platform with modern payment integrations, inventory management, and real-time order tracking system.',
    tech: ['TypeScript', 'Full-Stack', 'E-Commerce'],
    url: 'https://github.com/mystic-jaguar/ZPinEcom',
    status: 'Deployed',
    color: 'teal',
  },
  {
    name: 'furniture-store',
    description: 'Elegant furniture browsing and shopping experience with clean UI, smooth animations, and fully responsive design.',
    tech: ['JavaScript', 'React', 'CSS'],
    url: 'https://github.com/mystic-jaguar/furniture-store',
    status: 'Live',
    color: 'accent',
  },
  {
    name: 'offline-chatbot',
    description: 'Intelligent AI chatbot that operates fully offline using local NLP models for private, fast, and secure conversations.',
    tech: ['JavaScript', 'Node.js', 'NLP'],
    url: 'https://github.com/mystic-jaguar/offline-chatbot',
    status: 'Stable',
    color: 'teal',
  },
];

function ProjectCard({ project, index }: { project: typeof projects[0]; index: number }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = cardRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.15 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    card.style.transform = `perspective(800px) rotateY(${x * 8}deg) rotateX(${-y * 8}deg) translateY(-4px)`;
  }, []);

  const handleMouseLeave = useCallback(() => {
    const card = cardRef.current;
    if (card) card.style.transform = 'perspective(800px) rotateY(0deg) rotateX(0deg) translateY(0px)';
  }, []);

  const isAccent = project.color === 'accent';

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`glass-card p-6 md:p-8 transition-all duration-500 cursor-default ${
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
      style={{
        transitionDelay: `${index * 120}ms`,
        transformStyle: 'preserve-3d',
      }}
    >
      {/* Header */}
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center gap-3">
          <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${
            isAccent ? 'bg-accent/10 text-accent-light' : 'bg-teal/10 text-teal'
          }`}>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12.75V12A2.25 2.25 0 014.5 9.75h15A2.25 2.25 0 0121.75 12v.75m-8.69-6.44l-2.12-2.12a1.5 1.5 0 00-1.061-.44H4.5A2.25 2.25 0 002.25 6v12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9a2.25 2.25 0 00-2.25-2.25h-5.379a1.5 1.5 0 01-1.06-.44z" />
            </svg>
          </div>
          <div>
            <h3 className="font-display text-lg font-bold text-text-primary">{project.name}</h3>
          </div>
        </div>
        <span className={`text-[10px] font-mono font-medium tracking-wider px-2.5 py-1 rounded-full border ${
          isAccent
            ? 'border-accent/30 text-accent-light bg-accent/5'
            : 'border-teal/30 text-teal bg-teal/5'
        }`}>
          {project.status}
        </span>
      </div>

      {/* Description */}
      <p className="text-text-secondary text-sm leading-relaxed mb-5">{project.description}</p>

      {/* Tech tags */}
      <div className="flex flex-wrap gap-2 mb-6">
        {project.tech.map((t) => (
          <span
            key={t}
            className="text-[11px] font-mono font-medium px-2.5 py-1 rounded-lg bg-white/[0.04] border border-white/[0.06] text-text-secondary"
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
        className={`inline-flex items-center gap-2 text-sm font-medium transition-all duration-300 group ${
          isAccent ? 'text-accent-light hover:text-accent' : 'text-teal hover:text-teal-light'
        }`}
      >
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
        </svg>
        View on GitHub
        <svg className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
        </svg>
      </a>
    </div>
  );
}

export default function Projects3D() {
  return (
    <section className="relative z-10 py-28 px-4 sm:px-6 lg:px-8" id="projects">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 space-y-4">
          <div className="section-badge mx-auto w-fit">
            <span className="w-1.5 h-1.5 rounded-full bg-accent-light" />
            Featured Work
          </div>
          <h2 className="text-3xl md:text-5xl font-bold font-display text-text-primary">
            Projects I've <span className="gradient-text">Built</span>
          </h2>
          <p className="text-text-secondary text-base max-w-lg mx-auto">
            A collection of applications and platforms I've designed and developed.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <ProjectCard key={project.name} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

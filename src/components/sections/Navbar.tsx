import { useState, useEffect } from 'react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const links = [
    { id: 'home', label: 'Home' },
    { id: 'projects', label: 'Projects' },
    { id: 'skills', label: 'Skills' },
    { id: 'about', label: 'About' },
    { id: 'contact', label: 'Contact' },
  ];

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Track active section with IntersectionObserver
  useEffect(() => {
    const sectionIds = links.map((l) => l.id);
    const observers: IntersectionObserver[] = [];

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveSection(id);
        },
        { rootMargin: '-40% 0px -55% 0px' }
      );
      obs.observe(el);
      observers.push(obs);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
    setIsMobileOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled ? 'glass-nav shadow-lg' : 'bg-transparent'
      }`}
      id="main-nav"
    >
      <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Logo */}
        <button
          onClick={() => scrollTo('home')}
          className="flex items-center gap-2.5 group"
          aria-label="Go to top"
        >
          <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-accent to-teal flex items-center justify-center group-hover:shadow-glow-sm transition-all duration-300">
            <span className="text-white font-display font-bold text-sm">JW</span>
          </div>
          <span className="font-display text-lg font-bold text-text-primary group-hover:text-accent-light transition-colors duration-300">
            Jay<span className="text-accent-light">.dev</span>
          </span>
        </button>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-1">
          {links.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollTo(link.id)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                activeSection === link.id
                  ? 'text-accent-light bg-accent/10'
                  : 'text-text-secondary hover:text-text-primary hover:bg-white/5'
              }`}
            >
              {link.label}
            </button>
          ))}
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden relative w-10 h-10 flex flex-col items-center justify-center gap-1.5"
          onClick={() => setIsMobileOpen(!isMobileOpen)}
          aria-label="Toggle menu"
        >
          <span
            className={`w-5 h-[2px] bg-text-primary transition-all duration-300 ${
              isMobileOpen ? 'rotate-45 translate-y-[5px]' : ''
            }`}
          />
          <span
            className={`w-5 h-[2px] bg-text-primary transition-all duration-300 ${
              isMobileOpen ? 'opacity-0 scale-0' : ''
            }`}
          />
          <span
            className={`w-5 h-[2px] bg-text-primary transition-all duration-300 ${
              isMobileOpen ? '-rotate-45 -translate-y-[5px]' : ''
            }`}
          />
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-400 ${
          isMobileOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="glass-nav border-t border-surface-border px-6 py-4 space-y-1">
          {links.map((link, i) => (
            <button
              key={link.id}
              onClick={() => scrollTo(link.id)}
              className={`block w-full text-left px-4 py-3 rounded-lg text-sm font-medium transition-all duration-300 ${
                activeSection === link.id
                  ? 'text-accent-light bg-accent/10'
                  : 'text-text-secondary hover:text-text-primary hover:bg-white/5'
              }`}
              style={{ animationDelay: `${i * 50}ms` }}
            >
              {link.label}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
}

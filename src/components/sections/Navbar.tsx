import { useState } from 'react';

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'HOME', href: '#home' },
    { label: 'PROJECTS', href: '#projects' },
    { label: 'SKILLS', href: '#skills' },
    { label: 'ABOUT', href: '#about' },
    { label: 'CONTACT', href: '#contact' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-nav" id="main-nav">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#home"
          onClick={(e) => handleNavClick(e, '#home')}
          className="flex items-center gap-3 group"
        >
          <div className="relative w-9 h-9 border border-neon-cyan/60 flex items-center justify-center rotate-45 group-hover:border-neon-cyan group-hover:shadow-neon-cyan transition-all duration-300">
            <div className="w-3 h-3 bg-neon-cyan/80 -rotate-45"></div>
          </div>
          <span className="font-space text-xl font-bold tracking-tight text-white group-hover:text-neon-cyan transition-colors duration-300">
            JAY<span className="text-neon-cyan">.W</span>
          </span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="font-mono text-xs tracking-[0.15em] text-hud-muted hover:text-neon-cyan transition-all duration-300 relative group"
            >
              <span className="text-neon-cyan/50 mr-1 group-hover:text-neon-cyan">//</span>
              {link.label}
              <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-neon-cyan group-hover:w-full transition-all duration-300"></span>
            </a>
          ))}
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden relative w-10 h-10 flex flex-col items-center justify-center gap-1.5"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle mobile menu"
        >
          <span className={`w-6 h-[2px] bg-neon-cyan transition-all duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-[5px]' : ''}`}></span>
          <span className={`w-6 h-[2px] bg-neon-cyan transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : ''}`}></span>
          <span className={`w-6 h-[2px] bg-neon-cyan transition-all duration-300 ${isMobileMenuOpen ? '-rotate-45 -translate-y-[5px]' : ''}`}></span>
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden absolute top-20 left-0 right-0 glass-nav border-t border-neon-cyan/10 transition-all duration-300 overflow-hidden ${
          isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-6 py-6 space-y-4">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="block font-mono text-sm tracking-[0.15em] text-hud-muted hover:text-neon-cyan transition-colors duration-300 py-2 border-b border-neon-cyan/5"
            >
              <span className="text-neon-cyan/50 mr-2">&gt;</span>
              {link.label}
            </a>
          ))}
        </div>
      </div>

      {/* Bottom neon glow line */}
      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-neon-cyan/30 to-transparent"></div>
    </nav>
  );
}

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative z-10 border-t border-surface-border py-8 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Left */}
        <div className="flex items-center gap-3">
          <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-accent to-teal flex items-center justify-center">
            <span className="text-white font-display font-bold text-[10px]">JW</span>
          </div>
          <p className="text-text-muted text-xs font-mono">
            © {new Date().getFullYear()} Jay Warale. All rights reserved.
          </p>
        </div>

        {/* Center */}
        <div className="text-text-muted text-[11px] font-mono tracking-wider">
          Built with React · TypeScript · Three.js
        </div>

        {/* Right — back to top */}
        <button
          onClick={scrollToTop}
          className="w-9 h-9 rounded-xl border border-surface-border bg-surface flex items-center justify-center text-text-muted hover:text-accent-light hover:border-accent/40 transition-all duration-300"
          aria-label="Back to top"
          id="back-to-top"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
          </svg>
        </button>
      </div>
    </footer>
  );
}

import { useState, useEffect, useRef } from 'react';

export default function Contact3D() {
  const [formStatus, setFormStatus] = useState<'idle' | 'sending' | 'sent'>('idle');
  const sectionRef = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormStatus('sending');

    const form = e.target as HTMLFormElement;
    const name = (form.elements.namedItem('name') as HTMLInputElement).value;
    const email = (form.elements.namedItem('email') as HTMLInputElement).value;
    const subject = (form.elements.namedItem('subject') as HTMLInputElement).value;
    const message = (form.elements.namedItem('message') as HTMLTextAreaElement).value;

    const body = `Hi Jay,\n\nMy name is ${name} (${email}).\n\n${message}`;
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=jaywarale1@gmail.com&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    setTimeout(() => {
      window.open(gmailUrl, '_blank');
      setFormStatus('sent');
      form.reset();
      setTimeout(() => setFormStatus('idle'), 3000);
    }, 800);
  };

  return (
    <section ref={sectionRef} className="relative z-10 py-28 px-4 sm:px-6 lg:px-8" id="contact">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 space-y-4">
          <div className="section-badge mx-auto w-fit">
            <span className="w-1.5 h-1.5 rounded-full bg-teal" />
            Get In Touch
          </div>
          <h2 className="text-3xl md:text-5xl font-bold font-display text-text-primary">
            Let's <span className="gradient-text">Connect</span>
          </h2>
          <p className="text-text-secondary text-base max-w-lg mx-auto">
            Have a project in mind or want to collaborate? I'd love to hear from you.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Contact Info */}
          <div
            className={`space-y-6 transition-all duration-700 ${
              visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <div className="glass-card p-6 md:p-8 space-y-6" style={{ transform: 'none' }}>
              <div>
                <h3 className="font-display text-xl font-bold text-text-primary mb-2">
                  Let's build something <span className="text-accent-light">extraordinary</span>
                </h3>
                <p className="text-text-secondary text-sm leading-relaxed">
                  I'm currently available for freelance projects and full-time opportunities.
                  Feel free to reach out through the form or any of the channels below.
                </p>
              </div>

              <div className="space-y-4">
                {/* Email */}
                <a
                  href="mailto:jaywarale1@gmail.com"
                  className="flex items-center gap-4 p-4 rounded-xl bg-white/[0.02] border border-surface-border hover:border-accent/30 transition-all duration-300 group"
                  id="contact-email"
                >
                  <div className="w-11 h-11 rounded-xl bg-accent/10 flex items-center justify-center text-accent-light group-hover:shadow-glow-sm transition-all">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-text-muted text-[11px] font-mono uppercase tracking-wider">Email</p>
                    <p className="text-text-primary text-sm font-medium">jaywarale1@gmail.com</p>
                  </div>
                </a>

                {/* GitHub */}
                <a
                  href="https://github.com/mystic-jaguar"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-xl bg-white/[0.02] border border-surface-border hover:border-teal/30 transition-all duration-300 group"
                  id="contact-github"
                >
                  <div className="w-11 h-11 rounded-xl bg-teal/10 flex items-center justify-center text-teal group-hover:shadow-glow-teal transition-all">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-text-muted text-[11px] font-mono uppercase tracking-wider">GitHub</p>
                    <p className="text-text-primary text-sm font-medium">@mystic-jaguar</p>
                  </div>
                </a>

                {/* LinkedIn */}
                <a
                  href="https://linkedin.com/in/jaywarale"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-xl bg-white/[0.02] border border-surface-border hover:border-accent/30 transition-all duration-300 group"
                  id="contact-linkedin"
                >
                  <div className="w-11 h-11 rounded-xl bg-accent/10 flex items-center justify-center text-accent-light group-hover:shadow-glow-sm transition-all">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-text-muted text-[11px] font-mono uppercase tracking-wider">LinkedIn</p>
                    <p className="text-text-primary text-sm font-medium">jaywarale</p>
                  </div>
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div
            className={`transition-all duration-700 ${
              visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{ transitionDelay: '150ms' }}
          >
            <div className="glass-card p-6 md:p-8" style={{ transform: 'none' }}>
              <form className="space-y-5" id="contact-form" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-text-muted text-[11px] font-mono uppercase tracking-wider" htmlFor="name">
                      Name
                    </label>
                    <input
                      className="form-input"
                      id="name"
                      name="name"
                      placeholder="Your name"
                      type="text"
                      required
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-text-muted text-[11px] font-mono uppercase tracking-wider" htmlFor="email">
                      Email
                    </label>
                    <input
                      className="form-input"
                      id="email"
                      name="email"
                      placeholder="you@example.com"
                      type="email"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-text-muted text-[11px] font-mono uppercase tracking-wider" htmlFor="subject">
                    Subject
                  </label>
                  <input
                    className="form-input"
                    id="subject"
                    name="subject"
                    placeholder="What's this about?"
                    type="text"
                    required
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-text-muted text-[11px] font-mono uppercase tracking-wider" htmlFor="message">
                    Message
                  </label>
                  <textarea
                    className="form-input resize-none"
                    id="message"
                    name="message"
                    placeholder="Tell me about your project..."
                    rows={5}
                    required
                  />
                </div>

                <button
                  className={`w-full py-3.5 rounded-xl font-medium text-sm transition-all duration-400 ${
                    formStatus === 'sent'
                      ? 'bg-teal/15 border border-teal/40 text-teal shadow-glow-teal'
                      : formStatus === 'sending'
                      ? 'bg-accent/10 border border-accent/20 text-accent-light/50 cursor-not-allowed'
                      : 'btn-primary justify-center w-full'
                  }`}
                  type="submit"
                  disabled={formStatus !== 'idle'}
                >
                  {formStatus === 'sending'
                    ? 'Sending...'
                    : formStatus === 'sent'
                    ? '✓ Message Sent!'
                    : 'Send Message'}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

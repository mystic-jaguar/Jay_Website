import Navbar from './components/sections/Navbar';
import Scene3D from './components/3d/Scene3D';
import Hero3D from './components/sections/Hero3D';
import Projects3D from './components/sections/Projects3D';
import Skills3D from './components/sections/Skills3D';
import About3D from './components/sections/About3D';
import Contact3D from './components/sections/Contact3D';
import Footer from './components/sections/Footer';
import { Analytics } from "@vercel/analytics/react";
import './index.css';
import { useEffect } from 'react';

// Layout top ignoring transforms — reading getBoundingClientRect would feed our own translate back in
function docTop(el: HTMLElement | null) {
  let y = 0;
  for (; el; el = el.offsetParent as HTMLElement | null) y += el.offsetTop;
  return y;
}

// Scroll-driven zoom for section cards and standalone buttons: upcoming items zoom in from
// in front of the viewer (large, blurred, transparent), settle at rest near viewport center,
// then zoom out into the background (shrinking, desaturating, fading). Scrolling up reverses it.
// Uses individual `translate`/`scale` + `filter` so it stacks with Projects' mouse-tilt
// `transform`, button hover lifts, and Skills' opacity reveal.
function useScrollCards3D() {
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    let raf = 0;
    let last = 0;
    let smoothY = window.scrollY;
    const positioned = new WeakSet<HTMLElement>();
    // Touch scrolling already has native momentum; heavy easing on top makes cards lag the finger
    const easeRate = window.matchMedia('(pointer: coarse)').matches ? 18 : 7;
    const update = (now: number) => {
      // Ease a smoothed scroll value toward the real one (frame-rate independent),
      // so wheel steps glide instead of snapping. Keep looping until it settles.
      const dt = last ? Math.min((now - last) / 1000, 0.1) : 1 / 60;
      last = now;
      const target = window.scrollY;
      smoothY += (target - smoothY) * (1 - Math.exp(-dt * easeRate));
      if (Math.abs(target - smoothY) < 0.5) smoothY = target;
      raf = smoothY === target ? 0 : requestAnimationFrame(update);
      if (!raf) last = 0;

      // clientHeight doesn't jump when the mobile address bar shows/hides (innerHeight does), and
      // body.offsetHeight ignores overflow from our own scaled cards (scrollHeight doesn't) —
      // either feeding back into the anchor made the last cards flicker on mobile.
      const vh = document.documentElement.clientHeight;
      const maxScroll = Math.max(0, document.body.offsetHeight - vh);
      const HOLD = 0.3; // fraction of the travel range where an item sits fully visible at rest
      // ponytail: re-query each frame so filtered/lazy cards are picked up; fine for ~25 elements
      // Contact form card is excluded (always sharp); buttons inside cards ride along with their card.
      const targets = document.querySelectorAll<HTMLElement>(
        'section:not(#home) .glass-card:not(:has(form)), :is(.btn-primary, .btn-outline):not(.glass-card *)',
      );
      targets.forEach((el) => {
        const h = el.offsetHeight;
        const dTop = docTop(el);
        const top = dTop - smoothY;
        // Rest band, measured by the card's edges (not its center) so tall cards on mobile are
        // fully arrived as soon as they fill the screen instead of after you've scrolled past:
        // short cards rest when centered; tall ones from when their top reaches mid-screen until
        // their bottom passes mid-screen, so they're fully arrived while you're reading them.
        // On narrow screens every card uses the edge rule, with a wide rest band and no extra hold,
        // so the next card is already showing while the previous one scrolls away (no blank screen).
        const narrow = window.innerWidth < 768;
        if (!positioned.has(el)) {
          positioned.add(el);
          if (getComputedStyle(el).position === 'static') el.style.position = 'relative';
        }
        if (narrow) {
          // Mobile: cheap compositor-only fade/scale, no filter/translate (blur on top of the cards'
          // backdrop-filter was the main scroll jank). Fully in once the top edge reaches mid-screen,
          // starts leaving once the bottom edge passes mid-screen.
          let arrive = vh * 0.5;
          if (dTop < vh) arrive = Math.max(arrive, dTop); // first screen: visible on load
          arrive = Math.max(arrive, dTop - maxScroll); // page end: must be able to arrive
          const inOff = (top - arrive) / (vh * 0.5);
          const outOff = (top + h - vh * 0.5) / (vh * 0.5);
          const m = inOff > 0 ? Math.min(1, inOff) : outOff < 0 ? Math.max(-1, outOff) : 0;
          const a = Math.abs(m);
          el.style.translate = '';
          el.style.scale = m ? String(m > 0 ? 1 + a * 0.15 : 1 - a * 0.15) : '';
          // filter opacity (not style.opacity) so Skills' own opacity reveal isn't overridden
          el.style.filter = m ? `opacity(${1 - a})` : '';
          el.style.pointerEvents = a > 0.5 ? 'none' : '';
          el.style.zIndex = m ? '1' : '2';
          return;
        }
        const short = h < vh * 0.5;
        let startLine = short ? (vh - h) / 2 : vh * 0.5; // screen y where the top edge arrives
        const endLine = short ? (vh + h) / 2 : vh * 0.5; // screen y where the bottom edge starts leaving
        if (dTop < vh) startLine = Math.max(startLine, dTop); // first screen: visible on load
        startLine = Math.max(startLine, dTop - maxScroll); // page end: must be able to arrive
        const off = top > startLine ? top - startLine : top + h < endLine ? top + h - endLine : 0;
        const raw = Math.max(-1, Math.min(1, off / (vh * 0.6)));
        // Dead zone around rest: the item stays fully visible before zooming starts
        const hold = HOLD;
        const u = Math.sign(raw) * Math.max(0, Math.abs(raw) - hold) / (1 - hold);
        const a = Math.abs(u) * Math.abs(u) * (3 - 2 * Math.abs(u)); // smoothstep: glides in and out
        const scale = u > 0 ? 1 + a * 1.8 : 1 - a * 0.75; // zoom in from front / zoom out to back
        el.style.translate = `0 ${-u * vh * 0.2}px`; // slight hold toward center → only a little stacking
        el.style.scale = u ? String(scale) : '';
        // Incoming fades faster so it can't cover the card still being read
        const opacity = u > 0 ? Math.pow(1 - a, 2.5) : 1 - a;
        el.style.filter = u ? `saturate(${u < 0 ? 1 - a : 1}) blur(${a * 3}px) opacity(${opacity})` : '';
        el.style.pointerEvents = a > 0.5 ? 'none' : ''; // faded items mustn't block clicks
        el.style.zIndex = u ? '1' : '2'; // resting item always drawn above transitioning neighbours
      });
    };
    const onScroll = () => { if (!raf) raf = requestAnimationFrame(update); };
    update(performance.now());
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, []);
}

function App() {
  useScrollCards3D();
  return (
    <div className="bg-void text-text-primary font-sans antialiased min-h-screen">
      <Scene3D />
      <Navbar />

      {/* Scrollable Content */}
      <div className="relative z-10 w-full">
        <Hero3D />
        <Projects3D />
        <Skills3D />
        <About3D />
        <Contact3D />
        <Footer />
      </div>
      <Analytics />
    </div>
  );
}

export default App;

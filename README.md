# Jay Warale — 3D Portfolio Website

An immersive, interactive 3D portfolio website built with React, TypeScript, Three.js (React Three Fiber), and Tailwind CSS. Features a deep space theme with floating 3D geometries, particle fields, bloom post-processing, and glass-morphism UI components.

## Tech Stack

- **Framework:** React 19 + TypeScript + Vite
- **3D Engine:** Three.js via React Three Fiber + Drei + Postprocessing
- **Styling:** Tailwind CSS 3.4
- **Animations:** CSS animations, Intersection Observer scroll triggers, GSAP, Framer Motion
- **Deployment:** Vercel (with Analytics)

## Features

- 🌌 **3D Background Scene** — Animated particle field with floating wireframe geometries and bloom effects
- ✨ **Hero Section** — Typing animation, parallax mouse tracking, gradient name, rotating orbital rings
- 📁 **Projects** — 3D perspective tilt cards on hover with staggered scroll-reveal animations
- 🛠️ **Skills** — Animated progress bars triggered on scroll across Frontend, Backend, and Tools categories
- 👤 **About** — Glass card bio with stats and download resume/GitHub CTAs
- 📬 **Contact** — Working contact form (Gmail compose), email/GitHub/LinkedIn links

## Getting Started

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
npm run preview
```

## Project Structure

```
src/
├── components/
│   ├── 3d/          # Three.js 3D components (Scene3D, ParticleField, FloatingGeometry)
│   └── sections/    # Page sections (Navbar, Hero3D, Projects3D, Skills3D, About3D, Contact3D, Footer)
├── App.tsx          # Main app shell
├── main.tsx         # React entry point
└── index.css        # Design system & utilities
```

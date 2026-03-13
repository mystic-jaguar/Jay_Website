# Jay Warale — Cyberpunk Portfolio

A futuristic **cyberpunk-themed** personal portfolio website built with modern web technologies. Features neon glow effects, glitch text animations, holographic HUD elements, matrix particle backgrounds, and a complete interactive experience.

## 🚀 Tech Stack

| Technology | Purpose |
|---|---|
| **React 19** | UI Components |
| **TypeScript** | Type Safety |
| **Vite 7** | Build Tool & Dev Server |
| **Tailwind CSS 3** | Utility-First Styling |
| **Framer Motion** | Animations (available) |
| **GSAP** | Advanced Animations (available) |

## 📁 Project Structure

```
Jay_Website/
├── docs/
│   └── Jay_Resume.pdf          # Downloadable CV
├── public/
│   └── vite.svg
├── src/
│   ├── components/
│   │   └── sections/
│   │       ├── CyberBackground.tsx   # Animated particle grid background
│   │       ├── Navbar.tsx            # Cyber navigation with mobile menu
│   │       ├── Hero.tsx              # Glitch title + HUD hero section
│   │       ├── ProjectsShowcase.tsx  # GitHub project cards
│   │       └── AboutContact.tsx      # Skills + About + Contact + Footer
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css                     # Cyberpunk design system
├── index.html
├── tailwind.config.js
├── package.json
└── vite.config.ts
```

## 🛠️ Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 🌐 Deploy to Vercel

1. Push code to GitHub
2. Go to [vercel.com](https://vercel.com) → Import your GitHub repository
3. Vercel auto-detects Vite — click **Deploy**
4. Your site is live!

## ✨ Features

- **Glitch text animations** on hero title
- **Neon glow effects** (cyan & magenta) throughout
- **Animated particle background** with connection lines
- **Scanline overlay** for CRT/hacker aesthetic
- **Working Download CV** button (serves `docs/Jay_Resume.pdf`)
- **Real GitHub projects** with live links
- **Animated skill bars** with intersection observer
- **Contact form** with visual submission feedback
- **Fully responsive** mobile-first design
- **Smooth scroll** navigation

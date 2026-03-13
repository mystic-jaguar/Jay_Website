# Human Action Required

## Prerequisites — Software to Install

### 1. Node.js (Required)
- Download from: https://nodejs.org/
- Install the **LTS version** (v20+)
- Verify: `node --version` and `npm --version`

### 2. Git (Required)
- Download from: https://git-scm.com/
- Verify: `git --version`

## Setup Steps

### Step 1: Install Dependencies
```bash
cd Jay_Website
npm install
```

### Step 2: Run Development Server
```bash
npm run dev
```
Open `http://localhost:5173` in your browser.

### Step 3: Build for Production
```bash
npm run build
```

## Deploy to Vercel

### Step 1: Push to GitHub
```bash
git add .
git commit -m "Cyberpunk portfolio redesign"
git push origin main
```

### Step 2: Deploy on Vercel
1. Go to https://vercel.com and sign in with GitHub
2. Click **"Add New → Project"**
3. Import your `Jay_Website` repository
4. Vercel auto-detects Vite settings — click **Deploy**
5. Your site will be live at `your-project.vercel.app`

## API Keys Required

**None** — This is a static frontend project with no API keys needed.

## Important Files

| File | Purpose |
|---|---|
| `docs/Jay_Resume.pdf` | Your CV — the "Download CV" button serves this file |
| `src/components/sections/ProjectsShowcase.tsx` | Edit project descriptions and GitHub URLs here |
| `src/components/sections/AboutContact.tsx` | Edit bio text, skills data, and contact email here |
| `src/components/sections/Hero.tsx` | Edit hero title, subtitle, and status text here |

## Notes

- Replace `docs/Jay_Resume.pdf` with your updated resume anytime
- The contact form currently shows visual feedback only (no backend). To add real email sending, integrate a service like EmailJS, Formspree, or Resend.

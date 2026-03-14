# Human Action Required

## Software Prerequisites

Make sure you have the following installed:

1. **Node.js** (v18 or later)
   - Download from: https://nodejs.org/
   - Verify: `node --version`

2. **npm** (comes with Node.js)
   - Verify: `npm --version`

3. **Git** (optional, for version control)
   - Download from: https://git-scm.com/

## Setup Steps

1. Open a terminal in the project root (`c:\Jay_Website`)
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```
4. Open the URL shown in the terminal (usually `http://localhost:5173`)

## API Keys

**None required!** This is a fully client-side application with no external API dependencies.

## Resume File

Place your resume PDF at:
```
docs/Jay_Resume.pdf
```
The "Download CV" buttons link to this file. If you rename it, update the `href` in `Hero3D.tsx` and `About3D.tsx`.

## Deployment (Vercel)

1. Push to GitHub
2. Import the repo into [Vercel](https://vercel.com)
3. Vercel auto-detects Vite — just click Deploy
4. Vercel Analytics is already integrated in the app

## Customization

- **Personal info** (name, email, GitHub): Update in the section components under `src/components/sections/`
- **Projects**: Edit the `projects` array in `Projects3D.tsx`
- **Skills**: Edit the `skillCategories` array in `Skills3D.tsx`
- **Colors/Theme**: Modify `tailwind.config.js` and `src/index.css`

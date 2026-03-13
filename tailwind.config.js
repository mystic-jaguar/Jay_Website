/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
        space: ['Space Grotesk', 'sans-serif'],
      },
      colors: {
        cyber: {
          void: '#050510',
          dark: '#0a0a1a',
          surface: '#0d1025',
          card: '#0a0f2e',
          border: '#1a1f3e',
        },
        neon: {
          cyan: '#00f5ff',
          magenta: '#ff00e5',
          purple: '#a855f7',
          blue: '#3b82f6',
        },
        hud: {
          text: '#e0e0e0',
          muted: '#6a6a8a',
          dim: '#3a3a5a',
        },
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'float-slow': 'float 8s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'pulse-neon': 'pulseNeon 2s ease-in-out infinite',
        'glitch': 'glitch 3s ease-in-out infinite',
        'scanline': 'scanline 8s linear infinite',
        'flicker': 'flicker 4s linear infinite',
        'grow-width': 'growWidth 1.5s ease-out forwards',
        'fade-in-up': 'fadeInUp 0.8s ease-out forwards',
        'cyber-border': 'cyberBorder 3s ease-in-out infinite',
        'matrix-fall': 'matrixFall 10s linear infinite',
        'spin-slow': 'spin 20s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        pulseNeon: {
          '0%, 100%': { opacity: '1', filter: 'brightness(1)' },
          '50%': { opacity: '0.7', filter: 'brightness(1.3)' },
        },
        glitch: {
          '0%, 100%': { transform: 'translate(0)' },
          '20%': { transform: 'translate(-2px, 2px)' },
          '40%': { transform: 'translate(-2px, -2px)' },
          '60%': { transform: 'translate(2px, 2px)' },
          '80%': { transform: 'translate(2px, -2px)' },
        },
        scanline: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100%)' },
        },
        flicker: {
          '0%, 19.999%, 22%, 62.999%, 64%, 64.999%, 70%, 100%': { opacity: '1' },
          '20%, 21.999%, 63%, 63.999%, 65%, 69.999%': { opacity: '0.33' },
        },
        growWidth: {
          '0%': { width: '0%' },
          '100%': { width: 'var(--target-width)' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        cyberBorder: {
          '0%, 100%': { borderColor: 'rgba(0, 245, 255, 0.3)' },
          '50%': { borderColor: 'rgba(0, 245, 255, 0.8)' },
        },
        matrixFall: {
          '0%': { transform: 'translateY(-100vh)', opacity: '1' },
          '100%': { transform: 'translateY(100vh)', opacity: '0' },
        },
      },
      boxShadow: {
        'neon-cyan': '0 0 15px rgba(0, 245, 255, 0.4), 0 0 30px rgba(0, 245, 255, 0.2)',
        'neon-magenta': '0 0 15px rgba(255, 0, 229, 0.4), 0 0 30px rgba(255, 0, 229, 0.2)',
        'neon-cyan-lg': '0 0 20px rgba(0, 245, 255, 0.5), 0 0 60px rgba(0, 245, 255, 0.3), 0 0 100px rgba(0, 245, 255, 0.1)',
        'cyber-card': '0 0 1px rgba(0, 245, 255, 0.3), inset 0 0 30px rgba(0, 245, 255, 0.05)',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/container-queries'),
  ],
}

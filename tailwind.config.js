/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
        display: ['Space Grotesk', 'sans-serif'],
      },
      colors: {
        // Deep space palette
        void: {
          DEFAULT: '#030014',
          50: '#0a0525',
          100: '#110835',
          200: '#1a0d4a',
        },
        // Primary accent — electric violet
        accent: {
          DEFAULT: '#7c3aed',
          light: '#a78bfa',
          dark: '#5b21b6',
          glow: '#8b5cf6',
        },
        // Secondary accent — aurora teal 
        teal: {
          DEFAULT: '#2dd4bf',
          light: '#5eead4',
          dark: '#0d9488',
          glow: '#14b8a6',
        },
        // Warm accent — solar amber
        amber: {
          DEFAULT: '#f59e0b',
          light: '#fbbf24',
          dark: '#d97706',
        },
        // Text hierarchy
        text: {
          primary: '#f1f5f9',
          secondary: '#94a3b8',
          muted: '#475569',
        },
        // Surface colors
        surface: {
          DEFAULT: 'rgba(15, 10, 40, 0.6)',
          solid: '#0f0a28',
          hover: 'rgba(124, 58, 237, 0.08)',
          border: 'rgba(124, 58, 237, 0.15)',
        },
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'float-delayed': 'float 6s ease-in-out 2s infinite',
        'glow-pulse': 'glowPulse 3s ease-in-out infinite',
        'slide-up': 'slideUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'slide-up-delayed': 'slideUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.2s forwards',
        'fade-in': 'fadeIn 1s ease-out forwards',
        'spin-slow': 'spin 25s linear infinite',
        'gradient-shift': 'gradientShift 8s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-15px)' },
        },
        glowPulse: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.6' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(40px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        gradientShift: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
      },
      boxShadow: {
        'glow-sm': '0 0 15px rgba(124, 58, 237, 0.3)',
        'glow-md': '0 0 30px rgba(124, 58, 237, 0.4), 0 0 60px rgba(124, 58, 237, 0.15)',
        'glow-lg': '0 0 40px rgba(124, 58, 237, 0.5), 0 0 80px rgba(124, 58, 237, 0.2)',
        'glow-teal': '0 0 20px rgba(45, 212, 191, 0.3), 0 0 40px rgba(45, 212, 191, 0.15)',
        'glass': '0 8px 32px rgba(0, 0, 0, 0.3)',
      },
    },
  },
  plugins: [],
}

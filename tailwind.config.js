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
        // Solar Dusk — deep indigo
        void: {
          DEFAULT: '#0d0818',
          50: '#1a1030',
          100: '#24163f',
          200: '#3b2360',
        },
        // Primary accent — sunset orange
        accent: {
          DEFAULT: '#ff7a45',
          light: '#ffb38a',
          dark: '#e0552a',
          glow: '#ff8f45',
        },
        // Secondary accent — golden hour 
        teal: {
          DEFAULT: '#ffd166',
          light: '#ffe29a',
          dark: '#e0a93a',
          glow: '#ffc34d',
        },
        // Warm accent — solar amber
        amber: {
          DEFAULT: '#f59e0b',
          light: '#fbbf24',
          dark: '#d97706',
        },
        // Text hierarchy
        text: {
          primary: '#fff4e6',
          secondary: '#c9b8c9',
          muted: '#7a6680',
        },
        // Surface colors
        surface: {
          DEFAULT: 'rgba(26, 16, 48, 0.6)',
          solid: '#1a1030',
          hover: 'rgba(255, 122, 69, 0.08)',
          border: 'rgba(255, 122, 69, 0.15)',
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
        'glow-sm': '0 0 15px rgba(255, 122, 69, 0.3)',
        'glow-md': '0 0 30px rgba(255, 122, 69, 0.4), 0 0 60px rgba(255, 122, 69, 0.15)',
        'glow-lg': '0 0 40px rgba(255, 122, 69, 0.5), 0 0 80px rgba(255, 122, 69, 0.2)',
        'glow-teal': '0 0 20px rgba(255, 209, 102, 0.3), 0 0 40px rgba(255, 209, 102, 0.15)',
        'glass': '0 8px 32px rgba(0, 0, 0, 0.3)',
      },
    },
  },
  plugins: [],
}

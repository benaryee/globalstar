import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '1.5rem',
        lg: '2rem',
      },
      screens: {
        '2xl': '1280px',
      },
    },
    extend: {
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        display: ['var(--font-display)', 'var(--font-inter)', 'system-ui', 'sans-serif'],
      },
      colors: {
        primary: {
          50: '#eef2ff',
          100: '#e0e7ff',
          200: '#c7d2fe',
          300: '#a5b4fc',
          400: '#818cf8',
          500: '#6366f1',
          600: '#4f46e5',
          700: '#4338ca',
          800: '#3730a3',
          900: '#312e81',
          950: '#1e1b4b',
        },
        accent: {
          400: '#22d3ee',
          500: '#06b6d4',
          600: '#0891b2',
        },
        wa: {
          50: '#e7fbf0',
          100: '#c8f5da',
          200: '#9aebbe',
          300: '#5fdc99',
          400: '#2dc97a',
          500: '#25d366',
          600: '#1ebe5d',
          700: '#149d4a',
          800: '#107a3a',
          900: '#0a5e2d',
        },
        ink: {
          50: '#f8fafc',
          100: '#f1f5f9',
          200: '#e2e8f0',
          300: '#cbd5e1',
          400: '#94a3b8',
          500: '#64748b',
          600: '#475569',
          700: '#334155',
          800: '#1e293b',
          900: '#0f172a',
          950: '#020617',
        },
      },
      backgroundImage: {
        'grid-light':
          "linear-gradient(to right, rgba(15,23,42,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(15,23,42,0.06) 1px, transparent 1px)",
        'grid-dark':
          "linear-gradient(to right, rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.06) 1px, transparent 1px)",
        'radial-fade':
          'radial-gradient(circle at 50% 0%, rgba(99,102,241,0.18), transparent 60%)',
        'mesh':
          'radial-gradient(at 20% 10%, rgba(37,211,102,0.22) 0px, transparent 50%), radial-gradient(at 80% 20%, rgba(99,102,241,0.18) 0px, transparent 50%), radial-gradient(at 50% 90%, rgba(34,211,238,0.18) 0px, transparent 50%)',
      },
      boxShadow: {
        glow: '0 0 60px -10px rgba(99,102,241,0.45)',
        soft: '0 10px 40px -10px rgba(15,23,42,0.18)',
        ring: '0 0 0 1px rgba(255,255,255,0.06), 0 20px 60px -20px rgba(0,0,0,0.55)',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-in-out',
        'slide-up': 'slideUp 0.6s ease-out',
        float: 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulseSlow 4s ease-in-out infinite',
        shimmer: 'shimmer 2.6s linear infinite',
        marquee: 'marquee 30s linear infinite',
        gradient: 'gradient 8s ease infinite',
        aurora: 'aurora 12s ease infinite',
      },
      keyframes: {
        fadeIn: { '0%': { opacity: '0' }, '100%': { opacity: '1' } },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        pulseSlow: {
          '0%, 100%': { opacity: '0.6' },
          '50%': { opacity: '1' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        gradient: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        aurora: {
          '0%, 100%': { transform: 'translate3d(0,0,0) scale(1)' },
          '50%': { transform: 'translate3d(20px,-30px,0) scale(1.05)' },
        },
      },
    },
  },
  plugins: [],
}
export default config

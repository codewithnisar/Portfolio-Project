/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        darkbg: '#030014', // deep obsidian
        darkcard: 'rgba(10, 7, 26, 0.65)',
        lightbg: '#fafafa',
        lightcard: 'rgba(255, 255, 255, 0.75)',
        accentCyan: '#00f2fe',
        accentViolet: '#9b51e0',
        accentPink: '#ff007f',
        cyanGlow: 'rgba(0, 242, 254, 0.15)',
        violetGlow: 'rgba(155, 81, 224, 0.15)',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Outfit', 'sans-serif'],
        mono: ['Fira Code', 'Courier New', 'monospace'],
      },
      animation: {
        'pulse-slow': 'pulse 8s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float-slow': 'float 6s ease-in-out infinite',
        'float-medium': 'float 4s ease-in-out infinite',
        'glow-cyan': 'glowCyan 3s ease-in-out infinite alternate',
        'glow-violet': 'glowViolet 3s ease-in-out infinite alternate',
        'spin-slow': 'spin 15s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-15px)' },
        },
        glowCyan: {
          '0%': { boxShadow: '0 0 10px rgba(0, 242, 254, 0.2), 0 0 20px rgba(0, 242, 254, 0.1)' },
          '100%': { boxShadow: '0 0 20px rgba(0, 242, 254, 0.5), 0 0 35px rgba(0, 242, 254, 0.3)' },
        },
        glowViolet: {
          '0%': { boxShadow: '0 0 10px rgba(155, 81, 224, 0.2), 0 0 20px rgba(155, 81, 224, 0.1)' },
          '100%': { boxShadow: '0 0 20px rgba(155, 81, 224, 0.5), 0 0 35px rgba(155, 81, 224, 0.3)' },
        },
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
}

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        cheez: {
          yellow: '#FFD147',
          cream: '#f8f3e6',
          dark: '#4E4E4E',
          light: '#e0dbd1',
          white: '#fffdf7',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'bounce-slow': 'bounce 2s infinite',
        'pulse-slow': 'pulse 3s infinite',
        'fade-in': 'fadeIn 1.2s ease-out forwards',
        'fade-in-delay': 'fadeIn 1.2s ease-out 0.3s forwards',
        'fade-in-delay-2': 'fadeIn 1.2s ease-out 0.6s forwards',
        'hero-zoom': 'heroZoom 2s ease-out forwards',
      }
    },
  },
  plugins: [],
} 
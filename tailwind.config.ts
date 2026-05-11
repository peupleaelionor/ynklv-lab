import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}', './lib/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        void: '#050505',
        ink: '#F5F1E8',
        acid: '#D7FF3F',
        graphite: '#141414',
        line: 'rgba(245,241,232,0.14)',
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'Inter', 'sans-serif'],
        display: ['var(--font-space)', 'Space Grotesk', 'sans-serif'],
      },
      boxShadow: {
        acid: '0 0 40px rgba(215,255,63,0.18)',
      },
    },
  },
  plugins: [],
};

export default config;

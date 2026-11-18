import type { Config } from 'tailwindcss';

export default {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-poppins)', 'sans-serif'],
        display: ['var(--font-instrument)', 'Georgia', 'serif'],
      },
      colors: {
        navy: '#0D469F', deep: '#061A43', yellow: '#FAE63E', ink: '#08162D', cream: '#F8FAFE',
      },
      boxShadow: { lux: '0 18px 55px rgba(6,26,67,.09)' },
    },
  },
  plugins: [],
} satisfies Config;

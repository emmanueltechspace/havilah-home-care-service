/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        havilah: {
          50: '#f6f3fb',
          100: '#ece5f7',
          200: '#d6c9ef',
          300: '#b9a3e2',
          400: '#9a78d2',
          500: '#8057c0',
          600: '#6d40a8',
          700: '#5b338a',
          800: '#4a2c70',
          900: '#3d275b',
          950: '#251438',
        },
        gold: {
          50: '#fdfaf3',
          100: '#faf2e0',
          200: '#f3e3bd',
          300: '#eacd8a',
          400: '#e0b25a',
          500: '#d49a3a',
          600: '#c07f2d',
          700: '#9d6226',
          800: '#804f27',
          900: '#6a4124',
        },
        cream: {
          50: '#fefdfb',
          100: '#fdfaf5',
          200: '#faf3e8',
          300: '#f5e9d4',
          400: '#ecd9b8',
        },
        charcoal: {
          50: '#f6f6f7',
          100: '#e2e3e6',
          200: '#c6c8cd',
          300: '#9fa2ab',
          400: '#747880',
          500: '#565a62',
          600: '#42464d',
          700: '#363a40',
          800: '#2a2d32',
          900: '#1d1f23',
        },
      },
      fontFamily: {
        display: ['"Playfair Display"', 'Georgia', 'serif'],
        body: ['Lato', 'system-ui', 'sans-serif'],
      },
      maxWidth: {
        '8xl': '88rem',
      },
      keyframes: {
        'fade-in': {
          '0%': { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in-simple': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
      animation: {
        'fade-in': 'fade-in 0.7s ease-out forwards',
        'fade-in-simple': 'fade-in-simple 0.5s ease-out forwards',
      },
    },
  },
  plugins: [],
};

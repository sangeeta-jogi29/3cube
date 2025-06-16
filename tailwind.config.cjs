/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      keyframes: {
        fallBounce: {
          '0%': { transform: 'translateY(-300%)', opacity: '0' },
          '40%': { transform: 'translateY(0)', opacity: '1' },
          '55%': { transform: 'translateY(-25px)' },
          '70%': { transform: 'translateY(0)' },
          '80%': { transform: 'translateY(-12px)' },
          '90%': { transform: 'translateY(0)' },
          '95%': { transform: 'translateY(-4px)' },
          '100%': { transform: 'translateY(0)' }
        },
      },
      animation: {
        fallBounce: 'fallBounce 1.8s ease-out',
      },
    },
  },
  plugins: [],
};
/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        luxury: '#050505',
        gold: '#d4af37',
        ivory: '#f8f2eb',
        brown: '#3f2b22',
        'soft-brown': '#7b5e57',
        emerald: '#34c759'
      },
      boxShadow: {
        luxury: '0 20px 60px rgba(0,0,0,0.24)',
        soft: '0 8px 24px rgba(0,0,0,0.12)'
      }
    }
  },
  plugins: [],
};

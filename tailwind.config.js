/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        amber: '#FFBE0B',
        pantone: '#FB5607',
        azure: '#3A86FF',
        tiffanyBlue: '#75DDDD',
        blueViolet: '#8338EC',
      },
    },

    fontFamily: {
      'playfair-display': ['Playfair Display', 'serif'],
    },
  },
  plugins: [],
};

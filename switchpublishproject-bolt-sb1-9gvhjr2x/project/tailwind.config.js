/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontSize: {
        'fluid-h1': 'clamp(2.8rem, 3.2vw + 1rem, 5.0rem)',
        'fluid-h2': 'clamp(2.2rem, 2.5vw + .8rem, 3.6rem)',
      },
      spacing: {
        'fluid-pad': 'clamp(1.5rem, 3vw, 4.5rem)',
      },
    },
  },
  plugins: [],
};

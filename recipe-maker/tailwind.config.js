/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        'backgound-fridge': "url('./assets/images/background3.png')",
      },
    },
  },
  plugins: [],
  darkMode: 'class',
};

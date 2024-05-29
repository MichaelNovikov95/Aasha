/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line no-undef
module.exports = {
  content: ['./src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {},
    colors: {
      'cosmic-latte': '#F9F6E5',
      glaucous: '#7576B9',
      'lavender-web': '#E5E6FA',
      'resoultion-blue': '#30307A',
      'raisin-black': '#222124',
      'davys-gray': '#5F5F61',
      'davys-gray_2': '#5A5C60',
      'cadet-gray': '#A1A0A3',
      'slate-gray': '#6D758F',
      white: '#FFF'
    },
    backgroundImage: {
      'hero-pattern': "url('../src/assets/svg/backfround.jpg')"
    },
    fontSize: {
      h3: '47px',
      h4: '33px',
      h5: '24px',
      h6: '20px',
      subtitle1: '16px',
      subtitle2: '14px',
      body1: '16px',
      body2: '14px',
      button: '14px',
      caption: '12px'
    }
  },
  plugins: []
}

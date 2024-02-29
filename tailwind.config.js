/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    container: {
      screens: {
        xl: '1360px',
      },
      center: true,
      padding: {
        DEFAULT: '1rem',
      },
    },
    colors: {
      main: 'rgb(46, 5, 255)',
      green: 'rgb(87, 87, 87)',
      blue: {
        200: 'rgb(15, 15, 15)',
      },
      black: {
        200: 'rgb(15, 15, 15)',
      },
      white: '#fff',
    },
    extend: {},
  },
  plugins: [],
}

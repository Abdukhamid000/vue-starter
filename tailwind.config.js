/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    container: {
      screens: {
        xl: '1390px',
      },
      center: true,
      padding: {
        DEFAULT: '1rem',
      },
    },
    colors: {
      main: 'rgb(46, 5, 255)',
      green: {
        100: 'rgb(87, 87, 87)',
        200: 'rgb(237, 237, 237)',
        300: 'rgb(247, 246, 255)',
        400: 'rgb(242, 242, 242)',
      },
      blue: {
        200: 'rgb(15, 15, 15)',
      },
      black: {
        DEFAULT: '#000',
        200: 'rgb(15, 15, 15)',
      },
      white: '#fff',
    },
    extend: {},
  },
  plugins: [],
}

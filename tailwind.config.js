/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
     fontFamily:{
      roboto: ['Roboto','sans-serif']
     },
     colors:{
      gray100: '#e1e1e6',
      gray300: '#c4c4cc',
      gray400: '#8d8d99',
      gray600: '#323238',
      gray700: '#29292e',
      gray800:'#202024',
      gray900:'#121214',
      
      green300:'#00B373',
      green500:'#00875f',

      red500:'#f75a68'
     }
    },
    maxWidth:{
      app:'70rem'
    },
    gridTemplateColumns:{
      app: '16rem 1fr',
      md: '1fr',
    },
  },
  plugins: [],
}
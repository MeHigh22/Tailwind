module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    debugScreens: {
    position: ['top', 'left'],
},
    extend: {
      fontFamily: {
      headline: ['Rampart One']
}

    }
  },
  variants: {
    extend: {},
  },
  plugins: [
 require('tailwindcss-debug-screens'),
 ]
}

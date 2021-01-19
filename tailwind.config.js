module.exports = {
  purge: {
    enabled: false, // setting it to false builds the whole CSS, setting it to true removes unused classes
    //Files that it searches for CSS classes
    content: [
      './src/**/*.html',
      './src/**/*.js',
      './views/**/*.ejs',
  ]},
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

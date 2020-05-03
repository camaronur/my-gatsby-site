module.exports = {
    plugins: {
      autoprefixer: {  grid: "no-autoplace"},
      'postcss-import': {},
      'postcss-nested': {},
      'postcss-custom-media': {
        importFrom: ['./src/styles/viewport.css']
      }
    }
  }
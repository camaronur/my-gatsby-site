module.exports = {
  plugins: {
    autoprefixer: {},
    'postcss-import': {},
    'postcss-nested': {},
    'postcss-custom-media': {
      importFrom: ['./src/styles/viewport.css']
    }
  }
}

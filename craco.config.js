// craco.config.js
module.exports = {
  style: {
    postcss: {
      plugins: [
        require('tailwindcss'),
        require('autoprefixer'),
      ],
    },
  },
};module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
}

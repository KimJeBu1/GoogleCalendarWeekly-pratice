// module.exports = {
//   plugins: {
//     tailwindcss: {},
//     autoprefixer: {},
//   },
// }

const postcssNormalize = require('postcss-normalize')

module.exports = {
  plugins: [
    'tailwindcss: {}',
    'autoprefixer: {}',
    require('postcss-flexbugs-fixes'),
    require('postcss-preset-env')({
      stage: 0,
    }),
    postcssNormalize(),
  ],
}

require('babel-core/register')()

require('babel-polyfill')

// Css required hook
require('css-modules-require-hook')({
  extensions: ['.css'],
  preprocessCss: (data, filename) =>
      require('node-sass').renderSync({
          data,
          file: filename
      }).css,
  camelCase: true,
  generateScopedName: '[name]__[local]__[hash:base64:8]'
})

// Image required hook
require('asset-require-hook')({
  extensions: ['jpg', 'png', 'gif', 'webp'],
  limit: 8000
})

require('./server')
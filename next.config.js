// const withSass = require('@zeit/next-sass')
// const withTM = require('next-plugin-transpile-modules');

// module.exports = withSass({
//   webpack: (config, options) => {
//     config.node = {
//       fs: 'empty'
//     }
//     return config
//   },
//   cssModules: true,
// });

const withTM = require('next-transpile-modules')(['govuk-frontend-react']); // pass the modules you would like to see transpiled

module.exports = withTM();
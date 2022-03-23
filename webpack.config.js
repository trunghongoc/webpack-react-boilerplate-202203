const webpackMerge = require('webpack-merge')
const common = require('./webpack/webpack.common')

const envs = {
  development: 'dev',
  production: 'prod'
}
/* eslint-disable global-require,import/no-dynamic-require */
const env = envs[process.env.NODE_ENV || 'development']
console.log('---env:', { env, p: `./webpack/webpack.${env}.js` })
const envConfig = require(`./webpack/webpack.${env}.js`)
console.log('---envConfig:', envConfig)
module.exports = webpackMerge(common, envConfig)

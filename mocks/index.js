require('tsconfig-paths/register')
require('ts-node').register({ compilerOptions: { module: 'commonjs' }, transpileOnly: true })
require('./start')

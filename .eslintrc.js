module.exports = {
  root: true,
  env: {
    node: true,
    es2021: true 
  },
  extends: [
    'plugin:vue/vue3-essential',
    'eslint:recommended'
  ],
  parserOptions: {
    parser: '@babel/eslint-parser',
    requireConfigFile: false,
  }
}
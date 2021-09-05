const defaultConfig = require('tailwindcss/defaultConfig')
const formsPlugin = require('@tailwindcss/forms')
const daisyui = require('daisyui')
const typo = require('@tailwindcss/typography')

module.exports = {
  mode: 'jit',
  purge: ['index.html', 'src/**/*.tsx'],
  theme: {
    fontFamily: {
      sans: ['Inter', defaultConfig.theme.fontFamily.sans],
    },
    textColor: { primary: '#2A2E37', white: '#EDE9FE' },
  },
  darkMode: 'media',
  plugins: [formsPlugin, typo, daisyui],
}

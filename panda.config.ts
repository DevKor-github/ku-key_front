import { defineConfig } from '@pandacss/dev'

export default defineConfig({
  // Whether to use css reset
  preflight: true,

  // Where to look for your css declarations
  include: ['./src/**/*.{js,jsx,ts,tsx}', './pages/**/*.{js,jsx,ts,tsx}'],

  // Files to exclude
  exclude: [],

  // Useful for theme customization
  theme: {
    semanticTokens: {
      colors: {
        white: { value: '#FFFFFF' },
        black: {
          1: { value: '#000000' },
          2: { value: '#383838' },
        },
        darkGray: {
          1: { value: '#6B6B6B' },
          2: { value: '#ACACAC' },
        },
        lightGray: {
          1: { value: '#D9D9D9' },
          2: { value: '#F4F4F4' },
        },
        red: {
          1: { value: '#A00C0C' },
          2: { value: '#E70000' },
          3: { value: '#F37979' },
          4: { value: '#FFC2AF' },
        },
      },
    },
    extend: {},
  },

  // The output directory for your css system
  outdir: 'styled-system',
})

import { defineConfig } from '@pandacss/dev'

import {
  buttonRecipe,
  carouselButtonRecipe,
  globalLayoutRecipe,
  clubTagRecipe,
  inputRecipe,
  labelRecipe,
  menubar,
  modalCardRecipe,
  postCardRecipe,
  postTextPreviewRecipe,
  reactionTagRecipe,
  shadowRecipe,
  tagRecipe,
  textStyles,
  sheetRecipe,
  toastRecipe,
  keyframes,
} from './src/lib/recipes/index'
import { semanticTokens } from './src/lib/semanticTokens'
import { tokenToRem } from './src/lib/constants/tokenToRem'

export default defineConfig({
  // Whether to use css reset
  preflight: true,

  // Where to look for your css declarations
  include: ['./src/**/*.{js,jsx,ts,tsx}', './pages/**/*.{js,jsx,ts,tsx}'],

  // Files to exclude
  exclude: [],

  // Useful for theme customization
  theme: {
    extend: {
      recipes: {
        label: labelRecipe,
        button: buttonRecipe,
        input: inputRecipe,
        modalCard: modalCardRecipe,
        clubTag: clubTagRecipe,
        shadow: shadowRecipe,
        boardTag: tagRecipe,
        postTextPreview: postTextPreviewRecipe,
        globalLayout: globalLayoutRecipe,
        reactionButton: reactionTagRecipe,
        carouselButton: carouselButtonRecipe,
        postCard: postCardRecipe,
        sheet: sheetRecipe,
        toast: toastRecipe,
      },
      slotRecipes: {
        menubar: menubar,
      },
      tokens: {
        colors: {
          white: { value: '#FFFFFF' },
          bg: {
            gray: { value: '#F9F9F9' },
            red: {
              1: {
                value: '#FFF4F4',
              },
              2: {
                value: '#FFFDFD',
              },
            },
          },
          black: {
            1: { value: '#000000' },
            2: { value: '#2D2D2D' },
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
            5: { value: '#FF0000' },
          },
        },
        sizes: tokenToRem,
        zIndex: {
          // semanticTokens로 옮기기
          mobileHeader: { value: 10, description: '모바일 헤더의 z-index' },
        },
      },
      breakpoints: {
        xs: '390px',
        sm: '580px',
        md: '900px',
        lg: '1200px',
      },
      textStyles,
      keyframes,
      semanticTokens,
    },
  },
  jsxFramework: 'react',

  // The output directory for your css system
  outdir: 'styled-system',
})

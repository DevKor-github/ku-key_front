import { style } from '@vanilla-extract/css'

import { f } from '@/style'

export const FlexWrapper = style([
  f.flexColumn,
  f.alignCenter,
  f.wFull,
  f.hFull,
  {
    padding: '0 9rem',
    paddingTop: '0.63rem',
    paddingBottom: '3.13rem',
  },
])
export const Wrapper = style([
  f.wFull,
  f.hFull,
  f.flexColumn,
  {
    maxWidth: '77rem',
  },
])
export const Container = style([f.flexColumn, f.justifyBetween, { flexGrow: 1 }])
export const FormContainer = style([
  f.flexColumn,
  {
    gap: '2.5rem',
  },
])
export const FormLayout = style([f.flexRow, f.alignCenter, { gap: '2.5rem' }])

export const SubmitButton = style({
  alignSelf: 'end',
})

export const CloseButton = style({
  alignSelf: 'end',
})

import { style } from '@vanilla-extract/css'

import { f } from '@/style'
import { vars } from '@/theme/theme.css'

export const Wrapper = style([
  f.flex,
  f.directionColumn,
  f.justifyBetween,
  f.alignStart,
  f.background.white,
  {
    width: '18.375rem',
    height: '7.875rem',
    padding: '1rem 1.25rem',
    border: `1px solid ${vars.color.lightGray2}`,
    borderRadius: '16px',
  },
  f.smDown({
    width: 'calc((100vw - 3.125rem)/2)',
    height: '5.375rem',
    padding: '0.75rem 0.75rem',
    borderRadius: '10px',
  }),
])

export const Header = style([f.flex, f.justifyBetween, f.alignCenter, f.wFull])

export const Rate = style([f.flex, f.alignCenter, { gap: '0.5rem' }])

export const Body = style([f.flex, f.directionColumn, f.alignStart, f.wFull, { gap: '0.25rem' }])

export const Professor = style([f.flex, f.alignCenter, { gap: '0.25rem' }])

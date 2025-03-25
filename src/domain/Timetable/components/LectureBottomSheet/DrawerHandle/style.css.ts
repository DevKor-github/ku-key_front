import { style } from '@vanilla-extract/css'

import { f } from '@/style'
import { vars } from '@/theme/theme.css'

export const Container = style([
  f.pAbsolute,
  f.flexCenter,
  {
    padding: '0.625rem',
    backgroundColor: 'rgba(255, 255, 255, 0.80)',
    borderRadius: '3.125rem',
    boxShadow: vars.shadow.p25,
    backdropFilter: 'blur(10px)',
    top: -92,
  },
])

export const SelectButton = style([
  vars.typography.desktop.heading2M,
  f.flexCenter,
  {
    margin: '0.875rem 1.75rem',
    color: vars.color.darkGray2,
    borderRadius: '3.125rem',
    cursor: 'pointer',
  },
])

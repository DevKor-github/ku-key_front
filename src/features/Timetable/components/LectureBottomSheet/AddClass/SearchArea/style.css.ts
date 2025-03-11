import { style } from '@vanilla-extract/css'

import { BOTTOM_SHEET_CONTENTS_MAX_WIDTH } from '@/features/Timetable/components/LectureBottomSheet/constants'
import { f } from '@/style'
import { vars } from '@/theme/theme.css'

export const Wrapper = style([
  f.flexRow,
  f.wFull,
  f.justifyBetween,
  {
    maxWidth: BOTTOM_SHEET_CONTENTS_MAX_WIDTH,
  },
])

export const Section = style([
  f.flexRow,
  f.alignCenter,
  {
    gap: '1.25rem',
  },
])

export const CategoryChip = style([
  f.flexCenter,
  vars.typography.desktop.body2M,
  {
    padding: '0.125rem 0.625rem',
    backgroundColor: vars.color.darkGray2,
    borderRadius: '1.625rem',
    color: vars.color.white,
  },
])

export const Input = style([{ width: '39.625rem' }])

export const CloseButton = style([
  f.flexCenter,
  {
    width: '1.875rem',
    height: '1.875rem',
    color: vars.color.white,
    backgroundColor: vars.color.red3,
    borderRadius: '100%',
    cursor: 'pointer',
  },
])

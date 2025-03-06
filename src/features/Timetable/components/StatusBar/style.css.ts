import { style } from '@vanilla-extract/css'

import { CONTENTS_MAX_W } from '@/domain/Timetable/constants'
import { f } from '@/style'

export const Wrapper = style([f.flexCenter, f.wFull])

export const Contents = style([
  f.flexRow,
  f.wFull,
  f.alignCenter,
  f.justifyBetween,
  {
    maxWidth: CONTENTS_MAX_W,
    marginTop: '3.12rem',
    marginBottom: '1.25rem',
  },
])

export const TimetableControl = style([
  f.flexRow,
  f.alignCenter,
  {
    gap: '0.625rem',
  },
])

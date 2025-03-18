import { style } from '@vanilla-extract/css'

import { CONTENTS_MAX_W } from '@/domain/Timetable/constants'
import { f } from '@/style'
import { vars } from '@/theme/theme.css'

export const Wrapper = style([
  f.wFull,
  f.flexCenter,
  {
    padding: '2.8rem 0',
    backgroundColor: vars.color.bgGray,
  },
])

export const Contents = style([
  f.flexRow,
  f.justifyBetween,
  f.wFull,
  {
    maxWidth: CONTENTS_MAX_W,
    margin: '2rem',
  },
])

export const Control = style([
  f.flexRow,
  { gap: '1.25rem' },
  f.mdDown({
    flexDirection: 'column',
  }),
])

export const Title = style([
  {
    color: vars.color.black,
    fontSize: '2rem',
    fontWeight: 800,
  },
])

export const Share = style([
  f.mdDown({
    display: 'none',
  }),
])

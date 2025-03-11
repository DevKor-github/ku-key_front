import { style } from '@vanilla-extract/css'

import { CONTENTS_MAX_W } from '@/domain/Timetable/constants'
import { f } from '@/style'
import { vars } from '@/theme/theme.css'

export const Wrapper = style([
  f.wFull,
  {
    maxWidth: CONTENTS_MAX_W,
  },
])

export const Header = style([
  f.wFull,
  f.flexRow,
  f.justifyBetween,
  f.alignCenter,
  f.pRelative,
  {
    height: '4rem',
    backgroundColor: vars.color.bgGray,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    border: `1px solid ${vars.color.lightGray1}`,
    padding: '0 2rem',
  },
])

export const Info = style([
  f.flexRow,
  f.alignCenter,
  {
    gap: '0.625rem',
  },
])

export const Semester = style([
  {
    color: vars.color.darkGray1,
    fontSize: 20,
    fontWeight: 700,
    whiteSpace: 'nowrap',
  },
])

export const Title = style([
  {
    border: 'none',
    color: vars.color.lightGray1,
    fontWeight: 500,
    fontSize: 18,
    outline: 'none',
    width: '70%',
    overflow: 'hidden',
    whiteSpace: 'nowrap',
    textOverflow: 'ellipsis',
  },
])

export const OptionButton = style([
  f.flexCenter,
  {
    color: vars.color.darkGray1,
    cursor: 'pointer',
    transition: 'background 0.256s',
    borderRadius: '100%',
    height: '1.875rem',
    width: '1.875rem',
    ':hover': {
      backgroundColor: vars.color.lightGray1,
    },
  },
  f.smDown({
    display: 'none',
  }),
])

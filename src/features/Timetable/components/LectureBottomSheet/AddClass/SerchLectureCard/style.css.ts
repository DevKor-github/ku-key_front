import { style } from '@vanilla-extract/css'
import { recipe } from '@vanilla-extract/recipes'

import { BOTTOM_SHEET_CONTENTS_MAX_WIDTH } from '@/features/Timetable/components/LectureBottomSheet/constants'
import { f } from '@/style'
import { vars } from '@/theme/theme.css'

export const Wrapper = recipe({
  base: [
    f.flex,
    f.justifyCenter,
    f.alignCenter,
    f.wFull,
    {
      borderTop: `1px solid ${vars.color.lightGray2}`,
    },
  ],
  variants: {
    isFirst: {
      true: {
        borderTop: 'none',
      },
    },
  },
})

export const Contents = style([
  f.flexColumn,
  f.alignStart,
  f.wFull,
  {
    maxWidth: BOTTOM_SHEET_CONTENTS_MAX_WIDTH,
    padding: '0.625rem 0',
    gap: '0.5rem',
  },
])

export const Header = style([f.wFull, f.flexRow, f.justifyBetween, f.alignCenter])

export const CourseOutline = style([
  f.flexRow,
  f.alignCenter,
  {
    gap: '0.625rem',
  },
])

export const Syllabus = style([
  f.flexCenter,
  {
    fontSize: '0.75rem',
    fontWeight: 600,
    lineHeight: 'normal',
    color: vars.color.darkGray2,
    padding: '0.25rem 0.625rem',
    height: '1.375rem',
    backgroundColor: vars.color.lightGray2,
    borderRadius: '1.25rem',
  },
])

export const CourseName = style([vars.typography.mobile.headingSB])

export const InfoAndReview = style([
  f.flexRow,
  f.alignCenter,
  {
    gap: '0.875rem',
  },
])

export const CategoryAndCredits = style([
  {
    color: vars.color.darkGray1,
    fontSize: '0.75rem',
    fontWeight: 400,
  },
])

export const Review = style([
  f.flexRow,
  f.alignCenter,
  {
    gap: '0.15rem',
    color: vars.color.darkGray1,
  },
])

export const Footer = style([
  f.flexRow,
  f.alignCenter,
  vars.typography.desktop.body2R,
  {
    color: vars.color.darkGray1,
    gap: '0.625rem',
  },
])

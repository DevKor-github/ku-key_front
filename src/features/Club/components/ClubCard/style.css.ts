import { style } from '@vanilla-extract/css'
import { recipe } from '@vanilla-extract/recipes'

import { f } from '@/style'
import { vars } from '@/theme/theme.css'

export const Wrapper = style([f.flex, f.justifyBetween, f.alignCenter])

export const ContentsWrapper = style([
  f.flex,
  {
    alignItems: 'stretch',
    textAlign: 'left',
    gap: 20,
    flexGrow: 1,
  },
])

export const Image = style({
  width: 294,
  height: 250,
  objectFit: 'cover',
  borderRadius: 10,
  flexShrink: 0,
})

export const LikeButton = recipe({
  base: [
    f.flex,
    f.flexColumn,
    f.alignCenter,
    f.cursorPointer,
    {
      color: vars.color.darkGray2,
      fontSize: 14,
      fontWeight: 500,
      lineHeight: 1.2,
      transition: 'color 0.25s ease',
      gap: 8,
      width: 69,
      flexShrink: 0,
    },
  ],
  variants: {
    myLikes: {
      true: {
        color: vars.color.red3,
      },
    },
  },
})

export const HeartIcon = recipe({
  base: {
    width: 30,
    color: vars.color.lightGray1,
    transition: 'color 0.25s ease',
  },
  variants: {
    myLikes: {
      true: {
        color: vars.color.red3,
      },
    },
  },
})

export const DescriptionWrapper = style([
  f.flex,
  f.flexColumn,
  f.justifyBetween,
  {
    flexGrow: 1,
    gap: 12,
  },
])

export const Header = style([f.flex, f.flexColumn, { gap: 12, color: vars.color.black }])

export const TitleWrapper = style([f.flex, f.flexColumn, { gap: 6 }])

export const Summary = style([
  {
    fontSize: 18,
    fontWeight: 500,
    lineHeight: 1.2,
  },
])

export const Title = style([vars.typography.desktop.titleSB])

export const ScheduleWrapper = style([
  f.flex,
  f.flexColumn,
  {
    gap: 6,
    fontSize: 16,
    fontWeight: 600,
    lineHeight: 1.2,
  },
])

export const Footer = style([f.flex, f.flexColumn, { gap: 12 }])
export const Description = style({
  fontWeight: 400,
  color: vars.color.darkGray1,
  fontSize: 14,
  lineHeight: 1.4,
  WebkitLineClamp: 3,
  WebkitBoxOrient: 'vertical',
  display: '-webkit-box',
  textOverflow: 'ellipsis',
  overflow: 'hidden',
})

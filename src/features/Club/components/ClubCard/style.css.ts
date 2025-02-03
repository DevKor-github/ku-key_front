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
  f.smDown({
    gap: 10,
  }),
])

export const Image = style([
  {
    width: 294,
    height: 250,
    objectFit: 'cover',
    borderRadius: 10,
    flexShrink: 0,
  },
  f.smDown({
    width: 110,
    height: 110,
    borderRadius: 6,
    border: '1px solid',
    borderColor: vars.color.lightGray1,
  }),
])

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
    f.smDown({
      color: vars.color.darkGray1,
      fontSize: 10,
      fontWeight: 400,
      gap: 4,
      width: 40,
    }),
  ],
  variants: {
    myLikes: {
      true: [
        {
          color: vars.color.red3,
        },
        f.smDown({
          color: vars.color.red3,
        }),
      ],
    },
  },
})

export const HeartIcon = recipe({
  base: [
    {
      width: 30,
      color: vars.color.lightGray1,
      transition: 'color 0.25s ease',
    },
    f.smDown({
      width: 16.5,
      color: vars.color.darkGray2,
    }),
  ],
  variants: {
    myLikes: {
      true: [
        {
          color: vars.color.red3,
        },
        f.smDown({
          color: vars.color.red3,
        }),
      ],
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
  f.smDown({
    gap: 6,
    margin: '2.5px 0',
  }),
])

export const Header = style([f.flex, f.flexColumn, { gap: 12, color: vars.color.black }, f.smDown({ gap: 6 })])

export const TitleWrapper = style([f.flex, f.flexColumn, { gap: 6 }, f.smDown({ gap: 0 })])
export const Summary = style([
  {
    fontSize: 18,
    fontWeight: 500,
    lineHeight: 1.2,
  },
  f.smDown({
    fontSize: 12,
    fontWeight: 400,
  }),
])
export const Title = style([
  vars.typography.desktop.titleSB,
  f.smDown({
    fontSize: 16,
    fontWeight: 500,
  }),
])

export const ScheduleWrapper = style([
  f.flex,
  f.flexColumn,
  {
    gap: 6,
    fontSize: 16,
    fontWeight: 600,
    lineHeight: 1.2,
  },
  f.smDown({
    gap: 2,
    fontSize: 12,
    fontWeight: 400,
  }),
])

export const MobileSchedule = style([f.flex, f.alignCenter, f.gap])
export const MobileScheduleIcon = style({
  flexShrink: 0,
  color: vars.color.red3,
})
export const MobileScheduleText = style([
  {
    WebkitLineClamp: 1,
    WebkitBoxOrient: 'vertical',
    display: '-webkit-box',
    textOverflow: 'ellipsis',
    overflow: 'hidden',
  },
])

export const Footer = style([f.flex, f.flexColumn, { gap: 12 }])
export const Description = style([
  {
    fontWeight: 400,
    color: vars.color.darkGray1,
    fontSize: 14,
    lineHeight: 1.4,
    WebkitLineClamp: 3,
    WebkitBoxOrient: 'vertical',
    display: '-webkit-box',
    textOverflow: 'ellipsis',
    overflow: 'hidden',
  },
  f.smDown({
    fontSize: 10,
    lineHeight: 1.3,
    WebkitLineClamp: 2,
  }),
])

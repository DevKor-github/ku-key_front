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
    gap: '1.25rem',
    flexGrow: 1,
  },
  f.smDown({
    gap: '0.625rem',
  }),
])

export const Image = style([
  {
    width: '18.375rem',
    height: '15.625rem',
    objectFit: 'cover',
    borderRadius: 10,
    flexShrink: 0,
  },
  f.smDown({
    width: '6.875rem',
    height: '6.875rem',
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
      fontSize: '0.875rem',
      fontWeight: 500,
      lineHeight: 1.2,
      transition: 'color 0.25s ease',
      gap: '0.5rem',
      width: '4.3rem',
      flexShrink: 0,
    },
    f.smDown({
      color: vars.color.darkGray1,
      fontSize: '0.625rem',
      fontWeight: 400,
      gap: '0.25rem',
      width: '2.5rem',
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
      width: '1.875rem',
      color: vars.color.lightGray1,
      transition: 'color 0.25s ease',
    },
    f.smDown({
      width: '1.03rem',
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
    gap: '0.75rem',
  },
  f.smDown({
    gap: '0.375rem',
    margin: '0.03rem 0',
  }),
])

export const Header = style([
  f.flex,
  f.flexColumn,
  { gap: '0.75rem', color: vars.color.black },
  f.smDown({ gap: '0.375rem' }),
])

export const TitleWrapper = style([f.flex, f.flexColumn, { gap: '0.375rem' }, f.smDown({ gap: 0 })])
export const Summary = style([
  {
    fontSize: '1.125rem',
    fontWeight: 500,
    lineHeight: 1.2,
  },
  f.smDown({
    fontSize: '0.75rem',
    fontWeight: 400,
  }),
])
export const Title = style([
  vars.typography.desktop.titleSB,
  f.smDown({
    fontSize: '1rem',
    fontWeight: 500,
  }),
])

export const ScheduleWrapper = style([
  f.flex,
  f.flexColumn,
  {
    gap: '0.375rem',
    fontSize: '1rem',
    fontWeight: 600,
    lineHeight: 1.2,
  },
  f.smDown({
    gap: '0.125rem',
    fontSize: '0.75rem',
    fontWeight: 400,
  }),
])

export const Footer = style([f.flex, f.flexColumn, { gap: 12 }])
export const Description = style([
  {
    fontWeight: 400,
    color: vars.color.darkGray1,
    fontSize: '0.875rem',
    lineHeight: 1.4,
    WebkitLineClamp: 3,
    WebkitBoxOrient: 'vertical',
    display: '-webkit-box',
    textOverflow: 'ellipsis',
    overflow: 'hidden',
  },
  f.smDown({
    fontSize: '0.625rem',
    lineHeight: 1.3,
    WebkitLineClamp: 2,
  }),
])

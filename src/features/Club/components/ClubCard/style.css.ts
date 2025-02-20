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
    gap: '1rem',
    flexGrow: 1,
  },
  f.smDown({
    gap: '0.62rem',
  }),
])

export const ImageContainer = style([
  f.pRelative,
  {
    flexShrink: 0,
  },
])

export const Image = style([
  {
    width: '11.625rem',
    height: '11.625rem',
    objectFit: 'cover',
    borderRadius: 10,
  },
  f.smDown({
    width: '6.875rem',
    height: '6.875rem',
    borderRadius: 6,
    border: '1px solid',
    borderColor: vars.color.lightGray1,
  }),
])
export const DesktopLikeButton = recipe({
  base: [
    f.pAbsolute,
    f.flex,
    vars.typography.desktop.body2R,
    f.alignCenter,
    f.justifyBetween,
    f.cursorPointer,
    {
      top: '0.56rem',
      right: '0.56rem',
      zIndex: 100,
      gap: '0.19rem',
      padding: '0.19rem 0.25rem',
      backgroundColor: 'rgba(255, 255, 255, 0.80)',
      borderRadius: 6,
      color: vars.color.black,
      transition: 'all 0.25s ease',
      width: '4rem',
      height: '2rem',
    },
  ],
  variants: {
    myLikes: {
      true: [
        {
          backgroundColor: 'rgba(255, 205, 205, 0.8)',
          color: vars.color.red2,
        },
      ],
    },
  },
})

export const MobileLikeButton = recipe({
  base: [
    f.flex,
    f.flexColumn,
    f.alignCenter,
    f.cursorPointer,
    {
      color: vars.color.darkGray1,
      transition: 'color 0.25s ease',
      gap: '0.25rem',
      width: '2.5rem',
      flexShrink: 0,
    },
    vars.typography.mobile.miniTag2,
  ],
  variants: {
    myLikes: {
      true: [
        {
          color: vars.color.red3,
        },
      ],
    },
  },
})

export const HeartIcon = recipe({
  base: [
    {
      width: '1.18rem',
      color: vars.color.black,
      transition: 'color 0.25s ease',
      marginLeft: '0.22rem',
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
    gap: '0.25rem',
  },
  f.smDown({
    gap: '0.375rem',
    margin: '0.03rem 0',
  }),
])

export const TitleWrapper = style([f.flex, f.flexColumn, { gap: '0.25rem' }, f.smDown({ gap: 0 })])
export const Summary = style([vars.typography.desktop.body1R, f.smDown(vars.typography.mobile.miniTag1R)])
export const Title = style([vars.typography.desktop.heading2SB, f.smDown(vars.typography.mobile.headingM)])

export const Description = style([
  vars.typography.desktop.body2R,
  {
    color: vars.color.darkGray1,
    WebkitLineClamp: 2,
    WebkitBoxOrient: 'vertical',
    display: '-webkit-box',
    textOverflow: 'ellipsis',
    overflow: 'hidden',
  },
  f.smDown({
    WebkitLineClamp: 2,
    ...vars.typography.mobile.miniTag2,
  }),
])

import { style } from '@vanilla-extract/css'
import { recipe } from '@vanilla-extract/recipes'

import { f } from '@/style'
import { vars } from '@/theme/theme.css'

export const Layout = style([
  f.wFull,
  f.hFull,
  f.flexColumn,
  f.smUp({
    alignItems: 'center',
    padding: '6.25rem 0',
  }),
])

export const Wrapper = style([
  f.flex,
  f.flexRow,
  f.smUp({
    maxWidth: '65rem',
    gap: '2.5rem',
  }),
  f.smDown({ flexDirection: 'column' }),
])

export const Image = style([
  f.smUp({
    width: '31.5rem',
    borderRadius: 5,
  }),
])

export const ContentsWrapper = style([
  f.flex,
  f.flexColumn,
  f.smUp({
    gap: '2rem',
  }),
  f.smDown({
    padding: '1.25rem',
  }),
])

export const ContentsHeader = style([
  f.flex,
  f.alignCenter,
  f.justifyBetween,
  f.smDown({
    paddingBottom: 12,
    borderBottom: '1px solid',
    borderBottomColor: vars.color.lightGray2,
  }),
])

export const TitleWrapper = style([
  f.flex,
  f.flexColumn,
  f.smUp({
    gap: '0.625rem',
  }),
])

export const Category = style([
  vars.typography.desktop.body1M,
  {
    color: vars.color.darkGray1,
  },
  f.smDown(vars.typography.mobile.bodyM),
])

export const Title = style([
  vars.typography.desktop.titleSB,
  { color: vars.color.black },
  f.smDown(vars.typography.mobile.display2SB),
])

export const LikeButton = recipe({
  base: [
    f.cursorPointer,
    { width: '2.4rem', color: vars.color.lightGray1, transition: 'color 0.256s' },
    f.smUp({
      marginRight: '1.42rem',
    }),
    f.smDown({
      width: '1.66rem',
    }),
  ],
  variants: {
    clicked: {
      true: {
        color: vars.color.red3,
      },
    },
  },
})

export const Contents = style([
  f.flex,
  f.flexColumn,
  { gap: 20 },
  f.smDown({ marginTop: 12, paddingBottom: 20, borderBottom: '1px solid', borderBottomColor: vars.color.lightGray2 }),
])

export const ScheduleWrapper = style([f.flex, f.flexColumn, f.gap])

export const Description = style([
  vars.typography.desktop.body1R,
  {
    color: vars.color.black,
    opacity: 0.8,
  },
  f.smDown(vars.typography.mobile.bodyR),
])

export const ContactsWrapper = style([
  f.flex,
  f.flexColumn,
  { gap: '0.5rem' },
  f.smDown({
    marginTop: '1.25rem',
  }),
])

export const ContactsLabel = style([
  f.flex,
  f.alignCenter,
  vars.typography.desktop.body1R,
  { color: vars.color.darkGray1, gap: '0.375rem' },
  f.smDown({
    ...vars.typography.mobile.bodyR,
  }),
])

export const Contacts = style([f.flex, f.alignCenter, { gap: '0.375rem' }])

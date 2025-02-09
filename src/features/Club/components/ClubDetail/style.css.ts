import { style } from '@vanilla-extract/css'

import { f } from '@/style'
import { vars } from '@/theme/theme.css'

export const Wrapper = style([f.flex, f.flexRow, f.smDown({ flexDirection: 'column' })])

export const Image = style({})

export const ContentsWrapper = style([
  f.flex,
  f.flexColumn,
  {
    padding: 20,
  },
])

export const ContentsHeader = style([
  f.flex,
  f.alignCenter,
  f.justifyBetween,
  {
    paddingBottom: 12,
    borderBottom: '1px solid',
    borderBottomColor: vars.color.lightGray2,
  },
])

export const TitleWrapper = style([f.flex, f.flexColumn])

export const Category = style([
  vars.typography.mobile.bodyM,
  {
    color: vars.color.darkGray1,
  },
])

export const Title = style([vars.typography.mobile.display2SB, { color: vars.color.black }])

export const LikeButton = style([f.cursorPointer, { width: 27, color: vars.color.lightGray1 }])

export const Contents = style([
  f.flex,
  f.flexColumn,
  { gap: 20, marginTop: 12, paddingBottom: 20, borderBottom: '1px solid', borderBottomColor: vars.color.lightGray2 },
])

export const ScheduleWrapper = style([f.flex, f.flexColumn, f.gap])

export const Description = style([
  vars.typography.mobile.bodyR,
  {
    color: vars.color.black,
    opacity: 0.8,
  },
])

export const ContactsWrapper = style([f.flex, f.flexColumn, { gap: 8, marginTop: 20 }])

export const ContactsLabel = style([
  f.flex,
  f.alignCenter,
  vars.typography.mobile.bodyR,
  { gap: 6, color: vars.color.darkGray1 },
])

export const Contacts = style([f.flex, f.alignCenter, { gap: 6 }])

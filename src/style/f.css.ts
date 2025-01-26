import { style } from '@vanilla-extract/css'

import { vars } from '@/theme/theme.css'

export const flex = style({ display: 'flex' })

export const alignStart = style({ alignItems: 'flex-start' })

export const alignEnd = style({ alignItems: 'flex-end' })

export const alignCenter = style({ alignItems: 'center' })

export const justifyStart = style({ justifyContent: 'flex-start' })

export const justifyEnd = style({ justifyContent: 'flex-end' })

export const justifyCenter = style({ justifyContent: 'center' })

export const justifyBetween = style({ justifyContent: 'space-between' })

export const justifyAround = style({ justifyContent: 'space-around' })

export const directionRow = style({ flexDirection: 'row' })

export const directionRowReverse = style({ flexDirection: 'row-reverse' })

export const directionColumn = style({ flexDirection: 'column' })

export const directionColumnReverse = style({ flexDirection: 'column-reverse' })

export const flexCenter = style({ display: 'flex', alignItems: 'center', justifyContent: 'center' })

export const flexBetween = style({ display: 'flex', alignItems: 'center', justifyContent: 'space-between' })

export const flexColumn = style({ display: 'flex', flexDirection: 'column' })

export const flexRow = style({ display: 'flex', flexDirection: 'row' })

// Wrap
export const wrap = style({ flexWrap: 'wrap' })

export const wrapReverse = style({ flexWrap: 'wrap-reverse' })

export const grow = style({ flexGrow: 1 })

export const shrink = style({ flexShrink: 1 })

export const wFull = style({ width: '100%' })

export const wScreen = style({ width: '100vw' })

export const hFull = style({ height: '100%' })

export const hScreen = style({ height: '100vh' })

// Gap
export const gap = style({ gap: '0.25rem' }) // 4px
export const gap2 = style({ gap: '0.5rem' }) // 8px
export const gap3 = style({ gap: '0.75rem' }) // 12px
export const gap4 = style({ gap: '1rem' }) // 16px
export const gap5 = style({ gap: '1.25rem' }) // 20px
export const gap6 = style({ gap: '1.5rem' }) // 24px
export const gap8 = style({ gap: '2rem' }) // 32px

export const background = {
  ...Object.entries(vars.color).reduce(
    (acc, [key, value]) => {
      acc[key as keyof typeof vars.color] = style({ background: value })
      return acc
    },
    {} as { [key in keyof typeof vars.color]: string },
  ),
  ...Object.entries(vars.gradient).reduce(
    (acc, [key, value]) => {
      acc[key as keyof typeof vars.gradient] = style({ background: value })
      return acc
    },
    {} as { [key in keyof typeof vars.gradient]: string },
  ),
}

export const staticColor = Object.entries(vars.color).reduce(
  (acc, [key, value]) => {
    acc[key as keyof typeof vars.color] = style({ color: value })
    return acc
  },
  {} as { [key in keyof typeof vars.color]: string },
)

export const gradientColor = Object.entries(vars.gradient).reduce(
  (acc, [key, value]) => {
    acc[key as keyof typeof vars.gradient] = style({ color: value })
    return acc
  },
  {} as { [key in keyof typeof vars.gradient]: string },
)

export const color = {
  static: staticColor,
  gradient: gradientColor,
}

export const shadow = Object.entries(vars.shadow).reduce(
  (acc, [key, value]) => {
    acc[key as keyof typeof vars.shadow] = style({ boxShadow: value })
    return acc
  },
  {} as { [key in keyof typeof vars.shadow]: string },
)

export const typographyD = Object.entries(vars.typography.desktop).reduce(
  (acc, [key, value]) => {
    acc[key as keyof typeof vars.typography.desktop] = style({
      fontSize: value.fontSize,
      fontWeight: value.fontWeight,
      lineHeight: value.lineHeight,
    })
    return acc
  },
  {} as { [key in keyof typeof vars.typography.desktop]: string },
)

export const typographyM = Object.entries(vars.typography.mobile).reduce(
  (acc, [key, value]) => {
    acc[key as keyof typeof vars.typography.mobile] = style({
      fontSize: value.fontSize,
      fontWeight: value.fontWeight,
      lineHeight: value.lineHeight,
    })
    return acc
  },
  {} as { [key in keyof typeof vars.typography.mobile]: string },
)

export const typography = { mobile: typographyM, desktop: typographyD }

export const cursorPointer = style({ cursor: 'pointer' })

export const cursorDefault = style({ cursor: 'default' })

export const cursorNotAllowed = style({ cursor: 'not-allowed' })

export const pAbsolute = style({ position: 'absolute' })

export const pFixed = style({ position: 'fixed' })

export const pRelative = style({ position: 'relative' })

export const pStatic = style({ position: 'static' })

export const pSticky = style({ position: 'sticky' })

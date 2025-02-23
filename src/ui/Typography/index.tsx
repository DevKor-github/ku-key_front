import { forwardRef } from 'react'

import { vars } from '@/theme/theme.css'
import { useMediaQueryByName } from '@/util/hooks/useMediaQueryByName'

type Props = {
  children: React.ReactNode
  style?: React.CSSProperties
  color?: ColorValue
  variant?: keyof typeof vars.typography
  typography?: keyof typeof vars.typography.desktop | keyof typeof vars.typography.mobile
}

export type ColorValue = keyof typeof vars.color

export const Typography = forwardRef<HTMLParagraphElement, Props>(
  ({ children, color = 'black', variant, typography = 'display1B', style, ...rest }, ref) => {
    const isMobile = useMediaQueryByName('smDown')
    const getColor = (color: ColorValue) => {
      return vars.color[color]
    }

    const typographyVariant = variant ?? (isMobile ? 'mobile' : 'desktop')
    const typographyStyle =
      typographyVariant === 'desktop'
        ? vars.typography.desktop[typography as keyof typeof vars.typography.desktop]
        : vars.typography.mobile[typography as keyof typeof vars.typography.mobile]

    return (
      <p
        ref={ref}
        style={{
          color: getColor(color),
          ...style,
          ...typographyStyle,
          display: 'inline-block',
        }}
        {...rest}
      >
        {children}
      </p>
    )
  },
)

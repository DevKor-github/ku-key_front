import { forwardRef } from 'react'

import { vars } from '@/theme/theme.css'

type Props = {
  children: React.ReactNode
  style?: React.CSSProperties
  color?: ColorValue
  variant?: keyof typeof vars.typography
  typography?: keyof typeof vars.typography.desktop | keyof typeof vars.typography.mobile
}

export type ColorValue = keyof typeof vars.color

export const Typography = forwardRef<HTMLParagraphElement, Props>(
  ({ children, color = 'black', variant = 'desktop', typography = 'display1B', ...props }, ref) => {
    const getColor = (color: ColorValue) => {
      return vars.color[color]
    }

    const typographyStyle =
      variant === 'desktop'
        ? vars.typography.desktop[typography as keyof typeof vars.typography.desktop]
        : vars.typography.mobile[typography as keyof typeof vars.typography.mobile]
    return (
      <p
        ref={ref}
        style={{
          ...props.style,
          color: getColor(color),
          ...typographyStyle,
          display: 'inline-block',
        }}
        {...props}
      >
        {children}
      </p>
    )
  },
)

import { forwardRef } from 'react'

import { vars } from '@/theme/theme.css'
import { useMediaQueryByName } from '@/util/hooks/useMediaQueryByName'

type Props = {
  children: React.ReactNode
  style?: React.CSSProperties
  color?: ColorValue
  variant?: keyof typeof vars.typography
  typography?: keyof typeof vars.typography.desktop | keyof typeof vars.typography.mobile
  mobileTypography?: keyof typeof vars.typography.mobile
} & React.HTMLAttributes<HTMLParagraphElement>

export type ColorValue = keyof typeof vars.color

export const Typography = forwardRef<HTMLParagraphElement, Props>(
  ({ children, color = 'black', typography, style, mobileTypography, ...rest }, ref) => {
    const isMobile = useMediaQueryByName('smDown')
    const getColor = (color: ColorValue) => {
      return vars.color[color]
    }
    const getTypography = () => {
      if (isMobile) {
        if (mobileTypography) {
          return vars.typography.mobile[mobileTypography]
        }
        return vars.typography.mobile[typography as keyof typeof vars.typography.mobile]
      }
      if (typography === undefined && mobileTypography) {
        return vars.typography.mobile[mobileTypography as keyof typeof vars.typography.mobile]
      }
      return vars.typography.desktop[typography as keyof typeof vars.typography.desktop]
    }

    return (
      <p
        ref={ref}
        style={{
          color: getColor(color),
          ...style,
          ...getTypography(),
          display: 'inline-block',
        }}
        {...rest}
      >
        {children}
      </p>
    )
  },
)

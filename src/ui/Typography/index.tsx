import { forwardRef } from 'react'
import { match, P } from 'ts-pattern'

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

    const baseTypography = isMobile ? vars.typography.mobile.bodyM : vars.typography.desktop.body1M
    const getTypography = () => {
      return match({ isMobile, typography, mobileTypography })
        .with(
          { isMobile: true, mobileTypography: P.not(undefined) },
          ({ mobileTypography }) => vars.typography.mobile[mobileTypography],
        )
        .with(
          { isMobile: true, typography: P.not(undefined) },
          ({ typography }) => vars.typography.mobile[typography as keyof typeof vars.typography.mobile],
        )
        .with({ isMobile: true }, () => baseTypography)
        .with(
          { typography: undefined, mobileTypography: P.not(undefined) },
          ({ mobileTypography }) => vars.typography.mobile[mobileTypography],
        )
        .with(
          { typography: P.not(undefined) },
          ({ typography }) => vars.typography.desktop[typography as keyof typeof vars.typography.desktop],
        )
        .with({ typography: undefined }, () => baseTypography)
        .exhaustive()
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

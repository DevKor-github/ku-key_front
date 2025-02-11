import { Slot } from '@radix-ui/react-slot'
import { forwardRef } from 'react'

import * as s from './style.css'

type Props = {
  suffixIcon?: React.ReactNode
  prefixIcon?: React.ReactNode
  children: React.ReactNode
  asChild?: boolean
  style?: React.CSSProperties
} & React.ButtonHTMLAttributes<HTMLButtonElement>

export const Chip = forwardRef<HTMLButtonElement, Props>(
  ({ suffixIcon, prefixIcon, children, asChild, onClick, ...props }, ref) => {
    const Component = asChild ? Slot : 'button'

    return (
      <Component ref={ref} onClick={onClick} {...props} className={s.Chip}>
        <div data-part="content">
          {prefixIcon && <span data-part="prefix">{prefixIcon}</span>}
          <span data-part="text">{children}</span>
          {suffixIcon && <span data-part="suffix">{suffixIcon}</span>}
        </div>
      </Component>
    )
  },
)

Chip.displayName = 'Chip'

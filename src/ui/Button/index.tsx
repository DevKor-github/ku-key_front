import { Slot } from '@radix-ui/react-slot'
import { forwardRef } from 'react'

import * as s from './style.css'

type Props = {
  suffixIcon?: React.ReactNode
  prefixIcon?: React.ReactNode
  children: React.ReactNode
  asChild?: boolean
  style?: React.CSSProperties
  variant?: s.ButtonVariants
} & React.ButtonHTMLAttributes<HTMLButtonElement>

export const Button = forwardRef<HTMLButtonElement, Props>(
  ({ suffixIcon, prefixIcon, children, asChild, onClick, variant = 'default', ...props }, ref) => {
    const Component = asChild ? Slot : 'button'

    return (
      <Component ref={ref} onClick={onClick} {...props} className={s.Button[variant]}>
        <div data-part="content">
          {prefixIcon && <span data-part="prefix">{prefixIcon}</span>}
          <span data-part="text">{children}</span>
          {suffixIcon && <span data-part="suffix">{suffixIcon}</span>}
        </div>
      </Component>
    )
  },
)

Button.displayName = 'Button'

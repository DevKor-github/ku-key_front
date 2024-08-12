import * as CheckboxPrimitive from '@radix-ui/react-checkbox'
import { css, cx } from '@styled-stytem/css'
import { Check } from 'lucide-react'
import { forwardRef } from 'react'

const Checkbox = forwardRef<
  React.ElementRef<typeof CheckboxPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root>
>(({ className, ...props }, ref) => (
  <CheckboxPrimitive.Root
    ref={ref}
    className={cx(
      css({
        h: 4,
        w: 4,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexShrink: 0,
        rounded: 2,
        borderWidth: 1.5,
        cursor: 'pointer',
        borderColor: 'lightGray.1',
        transition: 'all 0.25s ease',
        _focusVisible: {
          outline: '2px solid transparent',
          outlineOffset: '2px',
        },

        _disabled: {
          cursor: 'not-allowed',
          opacity: '0.5',
        },

        _checked: {
          borderColor: 'red.2',
          bgColor: 'red.2/90',
          color: 'gray.50',
        },
      }),
      className,
    )}
    {...props}
  >
    <CheckboxPrimitive.Indicator
      className={cx(css({ display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'current' }))}
    >
      <Check className={css({ w: 4, h: 4, color: 'white' })} />
    </CheckboxPrimitive.Indicator>
  </CheckboxPrimitive.Root>
))
Checkbox.displayName = CheckboxPrimitive.Root.displayName

export { Checkbox }

import { cva, cx } from '@styled-system/css'
import { forwardRef } from 'react'

const ChipStyle = cva({
  base: {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    px: { base: 2, smDown: 1 },
    py: { base: 1, smDown: 0.5 },
    rounded: 3.5,
    fontSize: { base: 15, smDown: 8 },
    fontWeight: '500',
    lineHeight: 'normal',
  },
  variants: {
    variant: {
      default: {
        bgColor: 'white',
        color: 'red.2',
      },
      red3: {
        bgColor: 'red.3',
        color: 'white',
      },
      red4: {
        bgColor: 'red.4',
        color: 'red.2',
      },
    },
  },
})

interface ChipProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'red3' | 'red4'
}

const Chip = forwardRef<HTMLDivElement, ChipProps>(({ variant = 'default', className, ...props }, ref) => {
  return <div ref={ref} className={cx(ChipStyle({ variant }), className)} {...props} />
})
Chip.displayName = 'Chip'

export { Chip }

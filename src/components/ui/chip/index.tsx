import { cx } from '@styled-stytem/css'
// import { input } from '@styled-stytem/recipes'
import { chip } from '@styled-stytem/recipes'
import { RecipeVariantProps } from '@styled-stytem/types'
import { forwardRef } from 'react'

type ChipProps = React.HTMLAttributes<HTMLDivElement> & RecipeVariantProps<typeof chip>

const Chip = forwardRef<HTMLDivElement, ChipProps>(({ variant, className, ...props }, ref) => {
  return <div ref={ref} className={cx(chip({ variant }), className)} {...props} />
})
Chip.displayName = 'Chip'

export { Chip }

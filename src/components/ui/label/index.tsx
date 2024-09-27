import * as LabelPrimitive from '@radix-ui/react-label'
import { cx, RecipeVariantProps } from '@styled-system/css'
import { label } from '@styled-system/recipes'
import { forwardRef } from 'react'

const Label = forwardRef<
  React.ElementRef<typeof LabelPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof LabelPrimitive.Root> & RecipeVariantProps<typeof label>
>(({ className, ...props }, ref) => <LabelPrimitive.Root ref={ref} className={cx(label(), className)} {...props} />)
Label.displayName = LabelPrimitive.Root.displayName

export { Label }

import { cx } from '@styled-system/css'
import { input } from '@styled-system/recipes'
import { RecipeVariantProps } from '@styled-system/types'
import { forwardRef } from 'react'

type InputProps = React.InputHTMLAttributes<HTMLInputElement> & RecipeVariantProps<typeof input>

const Input = forwardRef<HTMLInputElement, InputProps>(({ className, variant, type, ...props }, ref) => {
  return <input type={type} className={cx(input({ variant }), className)} ref={ref} {...props} />
})
Input.displayName = 'Input'

export { Input }

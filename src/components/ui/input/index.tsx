import { cx } from '@styled-stytem/css'
import { input } from '@styled-stytem/recipes'
import { RecipeVariantProps } from '@styled-stytem/types'
import { forwardRef } from 'react'

type InputProps = React.InputHTMLAttributes<HTMLInputElement> & RecipeVariantProps<typeof input>

const Input = forwardRef<HTMLInputElement, InputProps>(({ className, type, ...props }, ref) => {
  return <input type={type} className={cx(input(), className)} ref={ref} {...props} />
})
Input.displayName = 'Input'

export { Input }

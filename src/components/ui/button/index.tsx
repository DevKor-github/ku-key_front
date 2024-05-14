import { cx, type RecipeVariantProps } from '@styled-stytem/css'
import { button } from '@styled-stytem/recipes'
import { SystemStyleObject } from '@styled-stytem/types'
import { forwardRef } from 'react'

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> &
  RecipeVariantProps<typeof button> & { css?: SystemStyleObject }

const Button = forwardRef<HTMLButtonElement, ButtonProps>(({ variant, size, className, ...props }, ref) => {
  return <button ref={ref} className={cx(button({ variant, size }), className)} {...props}></button>
})
export default Button

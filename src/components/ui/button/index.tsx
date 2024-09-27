import { cx, type RecipeVariantProps } from '@styled-system/css'
import { button } from '@styled-system/recipes'
import { SystemStyleObject } from '@styled-system/types'
import { forwardRef } from 'react'

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> &
  RecipeVariantProps<typeof button> & { css?: SystemStyleObject }

const Button = forwardRef<HTMLButtonElement, ButtonProps>(({ variant, size, className, ...props }, ref) => {
  return <button ref={ref} className={cx(button({ variant, size }), className)} {...props}></button>
})
export default Button

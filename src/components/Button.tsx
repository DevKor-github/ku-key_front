import { css, cva } from '@styled-stytem/css'
import { SystemStyleObject } from '@styled-stytem/types/system-types'

type ButtonProps = React.HTMLAttributes<HTMLButtonElement> & {
  variant?: 'primary' | 'secondary'
  css?: SystemStyleObject | undefined | null | false
}

const buttonRecipe = cva({
  base: { cursor: 'pointer', borderRadius: 8, padding: '0.6em 1.2em', border: '1px solid transparent' },
  variants: {
    variant: {
      primary: {
        bg: 'yellow.500',
        color: 'white',
        _active: { opacity: 0.9 },
        _hover: { background: 'yellow.400', transition: 'background 0.25s' },
      },
      secondary: {
        bg: '#1a1a1a',
        color: 'white',
        _hover: { borderColor: 'yellow.500', transition: 'border-color 0.25s' },
      },
    },
  },
  defaultVariants: {
    variant: 'primary',
  },
})

const Button = ({ variant, css: cssProps, ...props }: ButtonProps) => {
  return <button {...props} className={css(buttonRecipe.raw({ variant }), css.raw(cssProps))}></button>
}

export default Button

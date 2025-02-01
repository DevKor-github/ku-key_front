import { Search } from 'lucide-react'
import { forwardRef, InputHTMLAttributes } from 'react'

import * as s from './style.css'

type Props = InputHTMLAttributes<HTMLInputElement> & {
  variant?: 'search'
  recipeVariant?: s.InputVariants
}

const Input = forwardRef<HTMLInputElement, Props>(({ variant, recipeVariant, ...props }, ref) => {
  return (
    <div className={s.Wrapper}>
      <input ref={ref} {...props} className={s.Input(recipeVariant)} />
      {variant === 'search' && (
        <button className={s.SearchIcon} type="submit">
          <Search size={18} />
        </button>
      )}
    </div>
  )
})
Input.displayName = 'input field'

export default Input

import { Search, X } from 'lucide-react'
import { forwardRef, InputHTMLAttributes, useState } from 'react'

import * as s from './style.css'

import { Case, Switch } from '@/util/SwitchCase'

type Props = InputHTMLAttributes<HTMLInputElement> & {
  variant?: 'search'
  clearInput?: () => void
}

const Input = forwardRef<HTMLInputElement, Props>(({ variant, clearInput, ...props }, ref) => {
  const [isFocus, setIsFocus] = useState(false)

  return (
    <div className={s.Wrapper}>
      <input
        ref={ref}
        {...props}
        className={s.Input}
        onFocus={() => setIsFocus(true)}
        onBlur={() => setIsFocus(false)}
      />
      <Switch>
        <Case when={clearInput !== undefined}>
          <button className={s.Icon({ isFocus })} onClick={clearInput} type="button">
            <X size={18} />
          </button>
        </Case>
        <Case when={variant === 'search'}>
          <button className={s.Icon({ isFocus })} type="submit">
            <Search size={18} />
          </button>
        </Case>
      </Switch>
    </div>
  )
})
Input.displayName = 'input field'

export default Input

import { css, RecipeVariant } from '@styled-system/css'
import { toast } from '@styled-system/recipes'
import { AlertCircle, Check, CheckCircle } from 'lucide-react'
import { match, P } from 'ts-pattern'

type ToastProps = {
  message: string
} & RecipeVariant<typeof toast>
const Toast = ({ message, type }: ToastProps) => {
  return (
    <div className={toast({ type })}>
      <Icon type={type} />
      <p className={css({ textStyle: 'heading4_M', smDown: { fontSize: '13px' }, lineHeight: '100%' })}>{message}</p>
    </div>
  )
}

export default Toast

const Icon = ({ type }: RecipeVariant<typeof toast>) => {
  return match(type)
    .with('success', () => <Check size={16} />)
    .with(
      P.when(p => p === 'error' || p === 'warning'),
      () => <AlertCircle size={16} />,
    )
    .otherwise(() => null)
}

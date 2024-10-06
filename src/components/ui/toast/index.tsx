import { css, RecipeVariant } from '@styled-system/css'
import { toast } from '@styled-system/recipes'

type ToastProps = {
  message: string
} & RecipeVariant<typeof toast>
const Toast = ({ message, type }: ToastProps) => {
  return (
    <div className={toast({ type })}>
      <h3 className={css({ textStyle: 'heading3_L', smDown: { fontSize: '14px' }, lineHeight: '100%' })}>
        {`${type}`.toUpperCase()}
      </h3>
      <p className={css({ textStyle: 'heading4_M', smDown: { fontSize: '13px' }, lineHeight: '100%' })}>{message}</p>
    </div>
  )
}

export default Toast

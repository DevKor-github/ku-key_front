import { Label } from '@radix-ui/react-menubar'
import { css, cx } from '@styled-stytem/css'
import { ShieldAlert } from 'lucide-react'
import { FormState, UseFormRegister } from 'react-hook-form'

import { ChangePasswordForm } from '@/components/mypage/Contents/ChangePassword'
import { Input } from '@/components/ui/input'

interface ChangeFormProps {
  type: 'curPassword' | 'newPassword' | 'confirmPassword'
  register: UseFormRegister<ChangePasswordForm>
  formState: FormState<ChangePasswordForm>
}
const ChangeForm = ({ type, register, formState }: ChangeFormProps) => {
  const error = formState.errors[type]
  return (
    <div
      className={css({
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'baseline',
        alignSelf: 'stretch',
        gap: 138,
      })}
    >
      <Label className={cx(css({ fontSize: 20, fontWeight: 700 }))}>Current Password</Label>
      <div className={css({ display: 'flex', flexDir: 'column', alignItems: 'flex-end' })}>
        <Input
          placeholder={
            type === 'curPassword'
              ? 'Please enter your current password'
              : type === 'newPassword'
                ? 'Please enter your new password'
                : 'Please enter your new password again'
          }
          type="password"
          style={{ width: '341px' }}
          {...register(type)}
        />
        <div
          className={css({
            display: 'flex',
            px: 1.5,
            py: 1,
            gap: 1,
            alignItems: 'center',
            maxW: '341px',
          })}
        >
          {error && <ShieldAlert size={16} className={css({ color: 'red.2', flexShrink: 0 })} />}
          {error?.message && (
            <p className={css({ fontSize: 14, fontWeight: 400, color: 'red.2', textAlign: 'left' })}>{error.message}</p>
          )}
        </div>
      </div>
    </div>
  )
}
export default ChangeForm

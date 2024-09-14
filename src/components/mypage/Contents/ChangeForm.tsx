import { Label } from '@radix-ui/react-menubar'
import { css, cx } from '@styled-system/css'
import { ShieldAlert } from 'lucide-react'
import { FormState, UseFormRegister } from 'react-hook-form'

import { ChangePasswordForm } from '@/components/mypage/Contents/ChangePassword'
import { Input } from '@/components/ui/input'

const labelConfig = {
  curPassword: 'Current Password',
  newPassword: 'New Password',
  confirmPassword: 'New Password Check',
}

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
        flexDir: { mdDown: 'column' },
        justifyContent: 'space-between',
        alignItems: 'baseline',
        alignSelf: 'stretch',
        gap: { base: 138, mdDown: 1 },
      })}
    >
      <Label className={cx(css({ fontSize: { base: 20, mdDown: 12 }, fontWeight: 700 }))}>{labelConfig[type]}</Label>
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
          className={css({ w: { base: 341, mdDown: 200 } })}
          {...register(type)}
        />
        <div
          className={css({
            display: 'flex',
            px: 1.5,
            py: 1,
            gap: 1,
            alignItems: 'center',
            maxW: { base: 341, mdDown: 200 },
          })}
        >
          {error && <ShieldAlert size={16} className={css({ color: 'red.2', flexShrink: 0 })} />}
          {error?.message && (
            <p
              className={css({
                fontSize: { base: 14, mdDown: 12 },
                fontWeight: 400,
                color: 'red.2',
                textAlign: 'left',
              })}
            >
              {error.message}
            </p>
          )}
        </div>
      </div>
    </div>
  )
}
export default ChangeForm

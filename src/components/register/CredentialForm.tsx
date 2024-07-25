import { css } from '@styled-stytem/css'
import { CheckCircle2, ShieldAlert } from 'lucide-react'
import { UseFormReturn } from 'react-hook-form'
import { z } from 'zod'

import { useCheckUsernameDuplication } from '@/api/hooks/register'
import Button from '@/components/ui/button'
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { RegisterFormSchema } from '@/lib/zod/register-schema'
import { RegistrationState, ValidState } from '@/types/register'

interface CredentialFormProps {
  form: UseFormReturn<z.infer<typeof RegisterFormSchema.step3>>
  valid: ValidState
  handleValidation: (target: keyof RegistrationState, value: ValidState) => void
}
const CredentialForm = ({ form, valid, handleValidation }: CredentialFormProps) => {
  const { mutate: mutateCheckUsernameDuplication } = useCheckUsernameDuplication()

  const handleUsernameDuplicationCheck = () => {
    mutateCheckUsernameDuplication(form.getValues().username, {
      onSuccess: () => handleValidation('username', 'valid'),
      onError: () => {
        handleValidation('username', 'invalid')
        form.setError('username', { message: 'This ID is a duplicate ID', type: 'validate' })
      },
    })
  }
  return (
    <div className={css({ display: 'flex', flexDir: 'column', gap: '50px' })}>
      <FormField
        name="username"
        control={form.control}
        render={({ field }) => (
          <FormItem
            className={css({
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'baseline',
              alignSelf: 'stretch',
              gap: 138,
            })}
          >
            <FormLabel>Username</FormLabel>
            <FormControl>
              <div className={css({ display: 'flex', alignItems: 'flex-start', gap: 2.5 })}>
                <div className={css({ display: 'flex', flexDir: 'column', alignItems: 'flex-end' })}>
                  <Input type="text" placeholder="Username" {...field} />
                  <div className={css({ display: 'flex', px: 1.5, py: 1, gap: 1, alignItems: 'center' })}>
                    {form.getFieldState('username').invalid && (
                      <ShieldAlert size={16} className={css({ color: 'red.2' })} />
                    )}
                    {valid === 'valid' && <CheckCircle2 size={14} />}
                    {valid === 'valid' && <p className={css({ fontSize: 14, fontWeight: 400 })}>available username</p>}
                    <FormMessage />
                  </div>
                </div>
                <Button
                  aria-checked={
                    form.getValues('username') !== '' && !form.getFieldState('username').invalid && valid !== 'valid'
                  }
                  variant="input"
                  type="button"
                  disabled={
                    form.getValues('username') === '' || form.getFieldState('username').invalid || valid === 'valid'
                  }
                  onClick={handleUsernameDuplicationCheck}
                >
                  Verify
                </Button>
              </div>
            </FormControl>
          </FormItem>
        )}
      />
      <FormField
        name="password.password"
        control={form.control}
        render={({ field }) => (
          <FormItem
            className={css({
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'baseline',
              alignSelf: 'stretch',
              gap: 138,
            })}
          >
            <FormLabel>Password</FormLabel>
            <FormControl>
              <div
                className={css({
                  display: 'flex',
                  flexDir: 'column',
                  alignItems: 'flex-end',
                })}
              >
                <Input placeholder="password" {...field} type="password" />
                <div className={css({ display: 'flex', px: 1.5, py: 1, gap: 1, alignItems: 'center' })}>
                  {form.getFieldState('password.password').invalid && (
                    <ShieldAlert size={16} className={css({ color: 'red.2' })} />
                  )}
                  <FormMessage />
                </div>
              </div>
            </FormControl>
          </FormItem>
        )}
      />
      <FormField
        name="password.confirm"
        control={form.control}
        render={({ field }) => (
          <FormItem
            className={css({
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'baseline',
              alignSelf: 'stretch',
              gap: 138,
            })}
          >
            <FormLabel>Password Confirm</FormLabel>
            <FormControl>
              <div
                className={css({
                  display: 'flex',
                  flexDir: 'column',
                  alignItems: 'flex-end',
                })}
              >
                <Input
                  placeholder="confirm"
                  {...field}
                  disabled={
                    form.getFieldState('password.password').invalid || form.getValues('password.password') === ''
                  }
                  type="password"
                />
                <div className={css({ display: 'flex', px: 1.5, py: 1, gap: 1, alignItems: 'center' })}>
                  {form.getFieldState('password.confirm').invalid && (
                    <ShieldAlert size={16} className={css({ color: 'red.2' })} />
                  )}
                  <FormMessage />
                </div>
              </div>
            </FormControl>
          </FormItem>
        )}
      />
    </div>
  )
}

export default CredentialForm

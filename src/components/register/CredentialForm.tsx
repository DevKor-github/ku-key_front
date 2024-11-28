import { css } from '@styled-system/css'
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
  const { mutate: mutateCheckUsernameDuplication } = useCheckUsernameDuplication({
    onError: () => {
      handleValidation('username', 'invalid')
      form.setError('username', { message: 'This ID is a duplicate ID', type: 'validate' })
    },
  })

  const handleUsernameDuplicationCheck = () => {
    mutateCheckUsernameDuplication(form.getValues().username, {
      onSuccess: () => handleValidation('username', 'valid'),
    })
  }
  return (
    <form
      className={css({
        display: 'flex',
        flexDir: 'column',
        gap: '25px',
        w: 'full',
        maxW: 608,
        alignItems: 'center',
        justifyContent: 'center',
      })}
    >
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
              flexWrap: 'wrap',
              rowGap: 2.5,
            })}
          >
            <FormLabel>Username</FormLabel>
            <FormControl>
              <div
                className={css({
                  display: 'flex',
                  flexDir: 'column',
                  alignItems: 'flex-start',
                  w: 'full',
                  maxW: 418,
                })}
              >
                <div
                  className={css({
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: 2.5,
                    w: 'full',
                  })}
                >
                  <Input
                    type="text"
                    placeholder="Username"
                    {...field}
                    disabled={valid === 'valid'}
                    className={css({ alignSelf: 'stretch', w: 'full', maxW: 333 })}
                  />
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
                    <p className={css({ textStyle: 'body1_L', lineHeight: '100%', smDown: { fontSize: 12 } })}>
                      Verify
                    </p>
                  </Button>
                </div>
                <div className={css({ display: 'flex', px: 1.5, py: 1, gap: 1, alignItems: 'center' })}>
                  {form.getFieldState('username').invalid ? (
                    <ShieldAlert size={16} className={css({ color: 'red.2' })} />
                  ) : (
                    valid === 'valid' && (
                      <>
                        <CheckCircle2 size={14} />
                        <p className={css({ fontSize: 14, fontWeight: 400 })}>available username</p>
                      </>
                    )
                  )}
                  <FormMessage />
                </div>
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
              flexWrap: 'wrap',
              rowGap: 2.5,
            })}
          >
            <FormLabel>Password</FormLabel>
            <FormControl>
              <div
                className={css({
                  display: 'flex',
                  flexDir: 'column',
                  alignItems: 'flex-start',
                  w: 'full',
                  justifyContent: 'flex-end',
                  maxW: 418,
                })}
              >
                <Input placeholder="password" type="password" {...field} className={css({ w: 'full' })} />
                <div
                  className={css({
                    display: 'flex',
                    px: 1.5,
                    py: 1,
                    gap: 1,
                    alignItems: 'flex-start',
                  })}
                >
                  {form.getFieldState('password.password').invalid && (
                    <ShieldAlert size={16} className={css({ color: 'red.2' })} />
                  )}
                  <FormMessage className={css({ whiteSpace: 'pre-wrap', lineHeight: '100%' })} />
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
              flexWrap: 'wrap',
              rowGap: 2.5,
            })}
          >
            <FormLabel>Password Confirm</FormLabel>
            <FormControl>
              <div
                className={css({
                  display: 'flex',
                  flexDir: 'column',
                  alignItems: 'flex-start',
                  w: 'full',
                  justifyContent: 'flex-end',
                  maxW: 418,
                })}
              >
                <Input
                  placeholder="confirm"
                  {...field}
                  disabled={
                    form.getFieldState('password.password').invalid || form.getValues('password.password') === ''
                  }
                  type="password"
                  className={css({ w: 'full' })}
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
    </form>
  )
}

export default CredentialForm

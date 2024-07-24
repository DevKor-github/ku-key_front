import { css } from '@styled-stytem/css'
import { CheckCircle, CheckCircle2, ShieldAlert } from 'lucide-react'
import { memo, useState } from 'react'
import { ZodError } from 'zod'

import { useCheckEmailDuplication, useSendEmail, useVerifyEmail } from '@/api/hooks/register'
import Button from '@/components/ui/button'
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { RegisterFormProps } from '@/types/register'
import { checkRegex } from '@/util/register-form'
import { useTimer } from '@/util/useTimer'

const EmailForm = memo(({ form, handleValidation, valid }: RegisterFormProps<'email'>) => {
  const [emailSent, setEmailSent] = useState(false)

  const { mutate: mutateCheckEmailDuplication } = useCheckEmailDuplication()

  const { mutate: mutateSendEmail } = useSendEmail()
  const { mutate: muatateVerifyEmail } = useVerifyEmail()

  const handleEmailDuplicationCheck = () => {
    if (form.getValues().email === '') {
      form.setError('email', { message: 'This field is required' })
      return
    }
    mutateCheckEmailDuplication(form.getValues().email, {
      onSuccess: () => {
        form.clearErrors('email')
        mutateSendEmail(form.getValues().email)
        setEmailSent(true)
        start()
      },
      onError: () => form.setError('email', { message: 'This email is already in use', type: 'validate' }),
    })
  }

  const handleEamilVerification = () => {
    if (checkRegex(form, 'emailCode') instanceof ZodError) return
    muatateVerifyEmail(
      { email: form.getValues().email, verifyToken: parseInt(form.getValues().emailCode) },
      {
        onSuccess: () => handleValidation('email', 'valid'),
        onError: () => form.setError('emailCode', { message: 'Invalid code', type: 'validate' }),
      },
    )
  }

  const { time, start, stop, reset } = useTimer(300)
  return (
    <div className={css({ display: 'flex', flexDir: 'column', gap: '50px' })}>
      <FormField
        control={form.control}
        name="email"
        render={({ field }) => (
          <FormItem
            className={css({
              display: 'flex',
              alignItems: 'baseline',
              alignSelf: 'stretch',
              gap: 138,
            })}
          >
            <FormLabel>Email</FormLabel>
            <FormControl>
              <div className={css({ display: 'flex', gap: 2, alignItems: 'flex-start' })}>
                <div
                  className={css({
                    display: 'flex',
                    flexDir: 'column',
                    alignItems: 'flex-end',
                  })}
                >
                  <Input
                    placeholder="Email"
                    {...field}
                    className={css({ alignSelf: 'stretch' })}
                    disabled={valid.email === 'valid'}
                  />
                  <div className={css({ display: 'flex', px: 1.5, py: 1, gap: 1, alignItems: 'center' })}>
                    {form.formState.errors.email && <ShieldAlert size={16} className={css({ color: 'red.2' })} />}
                    {!form.formState.errors.email && <CheckCircle2 size={14} />}
                    {!form.formState.errors.email && !emailSent && (
                      <p className={css({ color: 'black', fontSize: 14, fontWeight: 400 })}>Type your gmail account</p>
                    )}
                    {emailSent && (
                      <p className={css({ color: 'black', fontSize: 14, fontWeight: 400 })}>
                        Email has been sent to your gmail account
                      </p>
                    )}
                    <FormMessage />
                  </div>
                </div>
                <Button
                  type="button"
                  variant="input"
                  onClick={handleEmailDuplicationCheck}
                  className={css({ display: valid.email === 'valid' ? 'none' : 'flex' })}
                >
                  Send
                </Button>
              </div>
            </FormControl>
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name="emailCode"
        render={({ field }) => (
          <FormItem
            className={css({
              display: 'flex',
              alignItems: 'baseline',
              alignSelf: 'stretch',
              gap: 138,
            })}
          >
            <FormLabel>Code</FormLabel>
            <FormControl>
              <div className={css({ display: 'flex', gap: 2, alignItems: 'flex-start' })}>
                <div
                  className={css({
                    display: 'flex',
                    flexDir: 'column',
                    alignItems: 'flex-end',
                  })}
                >
                  <Input type="text" {...field} className={css({ alignSelf: 'stretch' })} />
                  <div className={css({ display: 'flex', px: 1.5, py: 1, gap: 1, alignItems: 'center' })}>
                    {form.formState.errors.emailCode && <ShieldAlert size={16} className={css({ color: 'red.2' })} />}
                    <p>
                      {Math.floor(time / 60)}:{(time % 60).toString().padStart(2, '0')}
                    </p>
                    <FormMessage />
                  </div>
                </div>
                <Button type="button" variant="input" onClick={handleEamilVerification}>
                  Verify
                </Button>
              </div>
            </FormControl>
            {valid.email === 'valid' && <p className={css({ color: 'green.500' })}>Your Email has been validated</p>}
          </FormItem>
        )}
      />
    </div>
  )
})

export default EmailForm

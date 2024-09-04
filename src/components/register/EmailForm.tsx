import { css } from '@styled-stytem/css'
import { CheckCircle2, ShieldAlert } from 'lucide-react'
import { memo, useState } from 'react'

import { useCheckEmailDuplication, useSendEmail, useVerifyEmail } from '@/api/hooks/register'
import Button from '@/components/ui/button'
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { RegisterFormProps } from '@/types/register'
import { useTimer } from '@/util/useTimer'

const EmailForm = memo(({ form, handleValidation, valid }: RegisterFormProps<'email'>) => {
  const [emailSent, setEmailSent] = useState(false)
  const { time, start, pause, isRunning } = useTimer(300)

  const { mutate: mutateCheckEmailDuplication } = useCheckEmailDuplication()

  const { mutate: mutateSendEmail } = useSendEmail()
  const { mutate: muatateVerifyEmail } = useVerifyEmail()

  const handleEmailDuplicationCheck = () => {
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
    muatateVerifyEmail(
      { email: form.getValues().email, verifyToken: parseInt(form.getValues().emailCode) },
      {
        onSuccess: () => {
          handleValidation('email', 'valid')
          pause()
        },
        onError: () => form.setError('emailCode', { message: 'Invalid code', type: 'validate' }),
      },
    )
  }

  const guideMessage = () => {
    if (emailSent) return 'Email has been sent to your gmail account'
    if (!form.getFieldState('email').invalid) return 'Type in your gmail account'
  }

  return (
    <section className={css({ display: 'flex', flexDir: 'column', gap: '25px' })}>
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
              <div
                className={css({
                  display: 'flex',
                  flexDir: 'column',
                  alignItems: 'flex-start',
                })}
              >
                <div className={css({ display: 'flex', gap: 2, alignItems: 'flex-start' })}>
                  <Input
                    placeholder="Email"
                    {...field}
                    onFocus={() => emailSent && setEmailSent(false)}
                    className={css({ alignSelf: 'stretch' })}
                    disabled={valid.email === 'valid' || isRunning}
                  />
                  <Button
                    aria-checked={
                      form.getFieldState('email').isTouched &&
                      !form.getFieldState('email').invalid &&
                      !isRunning &&
                      !(valid.email === 'valid')
                    }
                    type="button"
                    variant="input"
                    onClick={handleEmailDuplicationCheck}
                    disabled={
                      isRunning ||
                      !form.getFieldState('email').isTouched ||
                      form.getFieldState('email').invalid ||
                      valid.email === 'valid'
                    }
                  >
                    <p className={css({ textStyle: 'body1_L', lineHeight: '100%' })}>Send</p>
                  </Button>
                </div>
                <div className={css({ display: 'flex', px: 1.5, py: 1, gap: 1, alignItems: 'center' })}>
                  {form.formState.errors.email && <ShieldAlert size={16} className={css({ color: 'red.2' })} />}
                  {!form.formState.errors.email && <CheckCircle2 size={14} />}
                  <p className={css({ color: 'black', fontSize: 14, fontWeight: 400 })}>{guideMessage()} </p>
                  <FormMessage />
                </div>
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
              <div
                className={css({
                  display: 'flex',
                  flexDir: 'column',
                  alignItems: 'flex-start',
                })}
              >
                <div className={css({ display: 'flex', gap: 2, alignItems: 'flex-start' })}>
                  <Input
                    type="text"
                    {...field}
                    placeholder="Code"
                    className={css({ alignSelf: 'stretch' })}
                    disabled={!emailSent}
                  />
                  <Button
                    aria-checked={
                      form.getFieldState('emailCode').isTouched &&
                      !form.getFieldState('emailCode').invalid &&
                      !(valid.email === 'valid')
                    }
                    type="button"
                    variant="input"
                    onClick={handleEamilVerification}
                    disabled={
                      form.getValues('emailCode') === '' ||
                      form.getFieldState('emailCode').invalid ||
                      valid.email === 'valid'
                    }
                  >
                    <p className={css({ textStyle: 'body1_L', lineHeight: '100%' })}>Verify</p>
                  </Button>
                </div>
                <div className={css({ display: 'flex', px: 1.5, py: 1, gap: 1, alignItems: 'center' })}>
                  {form.formState.errors.emailCode && <ShieldAlert size={16} className={css({ color: 'red.2' })} />}
                  <FormMessage />
                  {valid.email === 'valid' && (
                    <>
                      <CheckCircle2 size={14} />
                      <p className={css({ color: 'black', fontSize: 14, fontWeight: 400 })}>
                        Your Email has been validated
                      </p>
                    </>
                  )}
                  {valid.email !== 'valid' && emailSent && (
                    <p>
                      {Math.floor(time / 60)}:{(time % 60).toString().padStart(2, '0')}
                    </p>
                  )}
                </div>
              </div>
            </FormControl>
          </FormItem>
        )}
      />
    </section>
  )
})

export default EmailForm

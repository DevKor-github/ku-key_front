import { css } from '@styled-stytem/css'
import { memo, useState } from 'react'
import { ZodError } from 'zod'

import { useCheckEmailDuplication, useSendEmail, useVerifyEmail } from '@/api/hooks/register'
import Button from '@/components/ui/button'
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { RegisterFormProps } from '@/types/register'
import { checkRegex } from '@/util/register-form'

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

  return (
    <>
      <FormField
        control={form.control}
        name="email"
        render={({ field }) => (
          <FormItem className={css({ display: 'flex', flexDir: 'column', alignSelf: 'stretch' })}>
            <FormLabel className={css({ fontWeight: 700 })}>Email</FormLabel>
            <FormControl>
              <div className={css({ display: 'flex', gap: 2, alignItems: 'center' })}>
                <Input
                  placeholder="Email"
                  {...field}
                  className={css({ alignSelf: 'stretch' })}
                  disabled={valid.email === 'valid'}
                />
                <p className={css({ color: 'gray.400' })}>@gmail.com</p>
                <Button
                  type="button"
                  onClick={handleEmailDuplicationCheck}
                  className={css({ display: valid.email === 'valid' ? 'none' : 'flex' })}
                >
                  Send
                </Button>
              </div>
            </FormControl>
            <FormMessage />
            {emailSent && <p className={css({ color: 'green.500' })}>Email has been sent to your gmail account</p>}
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name="emailCode"
        render={({ field }) => (
          <FormItem className={css({ display: 'flex', flexDir: 'column', alignSelf: 'stretch' })}>
            <FormLabel className={css({ fontWeight: 700 })}>Code</FormLabel>
            <FormControl>
              <div className={css({ display: 'flex', gap: 2, alignItems: 'center' })}>
                <Input type="password" {...field} className={css({ alignSelf: 'stretch' })} />
                <Button type="button" onClick={handleEamilVerification}>
                  Verify
                </Button>
              </div>
            </FormControl>
            <FormMessage />
            {valid.email === 'valid' && <p className={css({ color: 'green.500' })}>Your Email has been validated</p>}
          </FormItem>
        )}
      />
    </>
  )
})

export default EmailForm

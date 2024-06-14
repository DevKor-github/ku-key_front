import { Label } from '@radix-ui/react-label'
import { css } from '@styled-stytem/css'
import { memo, useState } from 'react'

import { useCheckEmailDuplication, useSendEmail, useVerifyEmail } from '@/api/hooks/register'
import Button from '@/components/ui/button'
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { RegisterFormProps } from '@/types/register'

const EmailForm = memo(({ form, handleValidation, valid }: RegisterFormProps<'email'>) => {
  const [code, setCode] = useState('')
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
      onError: () => form.setError('email', { message: 'This email is already in use' }),
    })
  }

  const handleEamilVerification = () => {
    if (code === '') {
      handleValidation('email', 'invalid')
      return
    }
    muatateVerifyEmail(
      { email: form.getValues().email, verifyToken: parseInt(code) },
      {
        onSuccess: () => handleValidation('email', 'valid'),
        onError: () => handleValidation('email', 'invalid'),
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
                <Input placeholder="Email" {...field} className={css({ alignSelf: 'stretch' })} />
                <p className={css({ color: 'gray.400' })}>@gmail.com</p>
                <Button type="button" onClick={handleEmailDuplicationCheck}>
                  Send
                </Button>
              </div>
            </FormControl>
            <FormMessage />
            {emailSent && <p className={css({ color: 'green.500' })}>Email has been sent to your gmail account</p>}
          </FormItem>
        )}
      />
      <div>
        <Label htmlFor="email verification code">Code</Label>
        <div className={css({ display: 'flex', flexDir: 'row', gap: 2, alignItems: 'center' })}>
          <Input type="password" value={code} onChange={e => setCode(e.target.value)} />
          <Button type="button" onClick={handleEamilVerification} disabled={code === ''}>
            Verify
          </Button>
        </div>
        {valid.email === 'valid' && <p className={css({ color: 'green.500' })}>이메일 인증이 완료되었습니다.</p>}
        {valid.email === 'invalid' && <p className={css({ color: 'red.500' })}>This field is required.</p>}
      </div>
    </>
  )
})

export default EmailForm

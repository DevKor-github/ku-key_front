import { zodResolver } from '@hookform/resolvers/zod'
import { css } from '@styled-stytem/css'
import { useRef, useState } from 'react'
import { useForm } from 'react-hook-form'
import { z, ZodError } from 'zod'

import {
  useCheckEmailDuplication,
  useCheckStudentIdDuplication,
  useCheckUsernameDuplication,
  useRegister,
  useSendEmail,
  useVerifyEmail,
} from '@/api/hooks/register'
import Button from '@/components/ui/button'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { RegisterFormSchema } from '@/lib/zod/register-schema'
import { ValidState } from '@/types/register'
import { checkPasswordConfirm, checkPasswordRegex, checkUsernameRegex } from '@/util/register-form'

const RegisterPage = () => {
  const [code, setCode] = useState('')
  const [emailSent, setEmailSent] = useState(false)
  const file = useRef<HTMLInputElement>(null)
  const [valid, setValid] = useState<ValidState>({ email: 'unknown', username: 'unknown', studentId: 'unknown' })
  const { mutate: mutateCheckEmailDuplication } = useCheckEmailDuplication()
  const { mutate: mutateSendEmail } = useSendEmail()
  const { mutate: muatateVerifyEmail } = useVerifyEmail()
  const { mutate: mutateCheckUsernameDuplication } = useCheckUsernameDuplication()
  const { mutate: mutateCheckStudentIdDuplication } = useCheckStudentIdDuplication()
  const { mutate: mutateRegister } = useRegister()
  const form = useForm<z.infer<typeof RegisterFormSchema>>({
    resolver: zodResolver(RegisterFormSchema),
    defaultValues: {
      email: '',
      password: { password: '', confirm: '' },
      username: '',
      studentId: '',
    },
  })

  const onSubmit = (values: z.infer<typeof RegisterFormSchema>) => {
    if (!file.current?.files?.length) return
    if (valid.email !== 'valid' || valid.username !== 'valid' || valid.studentId !== 'valid') return
    mutateRegister(
      {
        screenShot: file.current.files[0],
        email: values.email,
        username: values.username,
        password: values.password.password,
        studentNumber: values.studentId,
      },
      { onSuccess: () => alert('회원가입이 완료되었습니다.') },
    )
  }

  const handleEmailDuplicationCheck = () => {
    mutateCheckEmailDuplication(form.getValues().email, {
      onSuccess: () => {
        mutateSendEmail(form.getValues().email)
        setEmailSent(true)
      },
      onError: () => form.setError('email', { message: 'This email is already in use' }),
    })
  }

  const handleEamilVerification = () => {
    muatateVerifyEmail(
      { email: form.getValues().email, verifyToken: parseInt(code) },
      {
        onSuccess: () => setValid(v => ({ ...v, email: 'valid' })),
        onError: () => setValid(v => ({ ...v, email: 'invalid' })),
      },
    )
  }
  const handleUsernameDuplicationCheck = () => {
    if (checkUsernameRegex(form) instanceof ZodError) return
    mutateCheckUsernameDuplication(form.getValues().username, {
      onSuccess: () => setValid(v => ({ ...v, username: 'valid' })),
      onError: () => setValid(v => ({ ...v, username: 'invalid' })),
    })
  }

  const handleStudentIdDuplicationCheck = () => {
    mutateCheckStudentIdDuplication(form.getValues().studentId, {
      onSuccess: () => setValid(v => ({ ...v, studentId: 'valid' })),
      onError: () => form.setError('studentId', { message: 'This is a duplicate student number ID' }),
    })
  }

  return (
    <div
      className={css({
        display: 'flex',
        flexDir: 'column',
        w: 'full',
        h: '100vh',
        justifyContent: 'center',
        alignItems: 'center',
      })}
    >
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className={css({ display: 'flex', flexDir: 'column', gap: 6 })}>
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
          </div>
          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem className={css({ display: 'flex', flexDir: 'column', alignSelf: 'stretch' })}>
                <FormLabel className={css({ fontWeight: 700 })}>Username</FormLabel>
                <FormControl>
                  <div className={css({ display: 'flex', gap: 2, alignItems: 'center' })}>
                    <Input
                      placeholder="Username"
                      {...field}
                      className={css({ alignSelf: 'stretch' })}
                      onBlur={() => checkUsernameRegex(form)}
                    />
                    <Button type="button" onClick={() => handleUsernameDuplicationCheck()}>
                      Send
                    </Button>
                  </div>
                </FormControl>
                {valid.username === 'valid' && <p className={css({ color: 'green.500' })}>available username</p>}
                {valid.username === 'invalid' && (
                  <p className={css({ color: 'red.500' })}>username is currently in use</p>
                )}
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password.password"
            render={({ field }) => (
              <FormItem className={css({ display: 'flex', flexDir: 'column', alignSelf: 'stretch' })}>
                <FormLabel className={css({ fontWeight: 700 })}>Password</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Password"
                    type="password"
                    {...field}
                    className={css({ alignSelf: 'stretch' })}
                    onBlur={() => checkPasswordRegex(form)}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password.confirm"
            render={({ field }) => (
              <FormItem className={css({ display: 'flex', flexDir: 'column', alignSelf: 'stretch' })}>
                <FormLabel className={css({ fontWeight: 700 })}>Password Confirm</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Password Confirm"
                    {...field}
                    type="password"
                    className={css({ alignSelf: 'stretch' })}
                    onBlur={() => checkPasswordConfirm(form)}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="studentId"
            render={({ field }) => (
              <FormItem className={css({ display: 'flex', flexDir: 'column', alignSelf: 'stretch' })}>
                <FormLabel className={css({ fontWeight: 700 })}>Student ID</FormLabel>
                <FormControl>
                  <div className={css({ display: 'flex', gap: 2, alignItems: 'center' })}>
                    <Input placeholder="Student ID" {...field} className={css({ alignSelf: 'stretch' })} />
                    <Button type="button" onClick={() => handleStudentIdDuplicationCheck()}>
                      Verify
                    </Button>
                  </div>
                </FormControl>
                <FormMessage />
                {valid.studentId === 'valid' && <p className={css({ color: 'green.500' })}>available student ID</p>}
              </FormItem>
            )}
          />
          <div>
            <Label htmlFor="Sreenshot of acceptance email">
              Please attach a screenshot of your acceptance email from Korea University
            </Label>
            <Input type="file" ref={file} />
          </div>
          <Button type="submit">Submit</Button>
        </form>
      </Form>
    </div>
  )
}

export default RegisterPage

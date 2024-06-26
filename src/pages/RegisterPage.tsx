import { zodResolver } from '@hookform/resolvers/zod'
import { css } from '@styled-stytem/css'
import { useCallback, useRef, useState } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { z } from 'zod'

import { useRegister } from '@/api/hooks/register'
import EmailForm from '@/components/register/EmailForm'
import PasswordForm from '@/components/register/PasswordForm'
import StudentIdForm from '@/components/register/StudentIdForm'
import UsernameForm from '@/components/register/UsernameForm'
import Button from '@/components/ui/button'
import { Form } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { RegisterFormSchema } from '@/lib/zod/register-schema'
import { RegistrationState, ValidState } from '@/types/register'

const RegisterPage = () => {
  const file = useRef<HTMLInputElement>(null)
  const [valid, setValid] = useState<RegistrationState>({
    email: 'unknown',
    username: 'unknown',
    studentId: 'unknown',
    screenShot: 'unknown',
  })

  const { mutate: mutateRegister } = useRegister()
  const navigate = useNavigate()
  const form = useForm<z.infer<typeof RegisterFormSchema>>({
    resolver: zodResolver(RegisterFormSchema),
    defaultValues: {
      email: '',
      password: { password: '', confirm: '' },
      username: '',
      studentId: '',
    },
  })

  const checkFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files?.length) return
    const currentFile = e.target.files[0]
    const fileType = currentFile.type
    if (!fileType.includes('image')) setValid(v => ({ ...v, screenShot: 'invalid' }))
    else setValid(v => ({ ...v, screenShot: 'valid' }))
  }

  const onSubmit = (values: z.infer<typeof RegisterFormSchema>) => {
    if (!file.current?.files?.length) return

    if (
      valid.email !== 'valid' ||
      valid.username !== 'valid' ||
      valid.studentId !== 'valid' ||
      valid.screenShot !== 'valid'
    )
      return
    mutateRegister(
      {
        screenShot: file.current.files[0],
        email: values.email,
        username: values.username,
        password: values.password.password,
        studentNumber: values.studentId,
      },
      {
        onSuccess: () => {
          alert('회원가입이 완료되었습니다.')
          navigate('/login')
        },
      },
    )
  }

  const handleValidation = useCallback((target: keyof RegistrationState, value: ValidState) => {
    setValid(v => ({ ...v, [target]: value }))
  }, [])

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
          <EmailForm form={form} valid={valid} handleValidation={handleValidation} />
          <UsernameForm form={form} valid={valid} handleValidation={handleValidation} />
          <PasswordForm {...form} />
          <StudentIdForm form={form} valid={valid} handleValidation={handleValidation} />
          <div>
            <Label htmlFor="Sreenshot of acceptance email">
              Please attach a screenshot of your acceptance email from Korea University
            </Label>
            <Input type="file" ref={file} accept="image/*" onChange={checkFile} />
            {valid.screenShot === 'invalid' && (
              <p className={css({ color: 'red.500' })}>Only image files are accepted</p>
            )}
          </div>
          <Button type="submit">Submit</Button>
        </form>
      </Form>
    </div>
  )
}

export default RegisterPage

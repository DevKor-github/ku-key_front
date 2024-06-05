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
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationNext,
  PaginationPrevious,
} from '@/components/ui/pagination'
import { RegisterFormSchema } from '@/lib/zod/register-schema'
import { RegistrationState, ValidState } from '@/types/register'
import {
  checkEmailCodeRegex,
  checkEmailRegex,
  checkPasswordConfirm,
  checkPasswordRegex,
  checkUsernameRegex,
} from '@/util/register-form'

const RegisterPage = () => {
  const [page, setPage] = useState(1)
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
      emailCode: '',
      password: { password: '', confirm: '' },
      username: '',
      studentId: '',
    },
    mode: 'onTouched',
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

  const handleNextPage = () => {
    const email = checkEmailRegex(form)
    const emailCode = checkEmailCodeRegex(form)
    const userName = checkUsernameRegex(form)
    const password = checkPasswordRegex(form)
    const passwordConfirm = checkPasswordConfirm(form)
    if (email || emailCode || userName || password || passwordConfirm) return
    if (valid.email !== 'valid' || valid.username !== 'valid') return
    setPage(p => (p === 2 ? p : p + 1))
  }
  return (
    <div
      className={css({
        display: 'flex',
        flexDir: 'column',
        w: 'full',
        h: 'full',
        justifyContent: 'center',
        alignItems: 'center',
        py: '100px',
        gap: 5,
      })}
    >
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className={css({ display: 'flex', flexDir: 'column', gap: 6 })}>
          {page === 1 && (
            <>
              <EmailForm form={form} valid={valid} handleValidation={handleValidation} />
              <UsernameForm form={form} valid={valid} handleValidation={handleValidation} />
              <PasswordForm {...form} />
            </>
          )}
          {page === 2 && (
            <>
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
            </>
          )}
        </form>
      </Form>
      <div className={css({ display: 'flex', flexDir: 'row', gap: 1, mt: 2 })}>
        <Pagination>
          <PaginationContent>
            {page === 2 && (
              <PaginationItem>
                <PaginationPrevious onClick={() => setPage(p => (p === 1 ? p : p - 1))} />
              </PaginationItem>
            )}
            <PaginationItem>
              <PaginationNext onClick={handleNextPage} />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div>
    </div>
  )
}

export default RegisterPage

import { zodResolver } from '@hookform/resolvers/zod'
import { css } from '@styled-stytem/css'
import { Plus } from 'lucide-react'
import { useCallback, useRef, useState } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { z } from 'zod'

import { useRegister } from '@/api/hooks/register'
import RegisterBGImg from '@/assets/RegisterBGImg.jpg'
import EmailForm from '@/components/register/EmailForm'
import PasswordForm from '@/components/register/PasswordForm'
import Progress from '@/components/register/Progress'
import StudentIdForm from '@/components/register/StudentIdForm'
import UsernameForm from '@/components/register/UsernameForm'
import Button from '@/components/ui/button'
import { Form } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
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
          setPage(3)
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
        pos: 'relative',
        flexDir: 'column',
        w: 'full',
        h: 'auto',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 5,
        py: '142px',
        bgColor: 'bg',
      })}
    >
      <img src={RegisterBGImg} alt="register background img" className={css({ pos: 'absolute', top: 0, zIndex: 0 })} />
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className={css({
            display: 'flex',
            flexDir: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '50px',
            bgColor: 'white',
            py: 20,
            zIndex: 1,
            boxShadow: '0px 0px 4px 0px rgba(0, 0, 0, 0.25)',
            rounded: 30,
            px: 105,
          })}
        >
          <div className={css({ display: 'flex', flexDir: 'column', justifyContent: 'center', alignItems: 'center' })}>
            <h1 className={css({ fontSize: 40, fontWeight: 700 })}>Join</h1>
            <h2 className={css({ fontSize: 20, fontWeight: 500, color: 'darkGray.2' })}>Welcome to KU-Key</h2>
          </div>
          <div className={css({ display: 'flex', flexDir: 'column', alignItems: 'center', gap: 23 })}>
            <Progress stageState={1} />
            {page === 1 && (
              <EmailForm form={form} valid={valid} handleValidation={handleValidation} />
              /* <UsernameForm form={form} valid={valid} handleValidation={handleValidation} />
              <PasswordForm {...form} /> */
              /* <Button type="button" onClick={handleNextPage}>
                  Next
                </Button> */
            )}
            {page === 2 && (
              <>
                <StudentIdForm form={form} valid={valid} handleValidation={handleValidation} />
                <div className={css({ display: 'flex', flexDir: 'column', gap: 4 })}>
                  <Label htmlFor="Sreenshot of acceptance email">
                    Please attach a screenshot of your acceptance email from Korea University
                  </Label>
                  <div
                    className={css({
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      borderWidth: 2,
                      borderColor: 'gray.400',
                      rounded: 8,
                      borderStyle: 'dashed',
                    })}
                  >
                    <Button
                      type="button"
                      onClick={() => file.current?.click()}
                      variant="ghost"
                      className={css({ w: 'full' })}
                    >
                      Attach
                      <Plus className={css({ w: 4, h: 4 })} />
                    </Button>
                  </div>
                  <Input
                    type="file"
                    ref={file}
                    accept="image/*"
                    onChange={checkFile}
                    className={css({ display: 'none' })}
                  />
                  {valid.screenShot === 'invalid' && (
                    <p className={css({ color: 'red.500' })}>Only image files are accepted</p>
                  )}
                </div>
                <Button type="submit" disabled={page !== 2}>
                  Submit
                </Button>
              </>
            )}
            {page === 3 && (
              <>
                <div className={css({ w: 400, textAlign: 'center' })}>
                  <p>Thanks for submitting your information.</p>
                  <p>Once we have verified you are a KU exchange student,</p>
                  <p>we will send you an email right away.</p>
                  <p className={css({ mt: 4 })}>After authentication is complete,</p>
                  <p>you'll be able to use the service seamlessly.</p>
                  <p className={css({ mt: 4 })}>This process takes 1-2 business days on average.</p>
                </div>
                <Button type="button" onClick={() => navigate('/login')}>
                  Confirm
                </Button>
              </>
            )}
          </div>
        </form>
      </Form>
    </div>
  )
}

export default RegisterPage

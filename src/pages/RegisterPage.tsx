import { zodResolver } from '@hookform/resolvers/zod'
import { css } from '@styled-stytem/css'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import { useCallback, useState } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { z } from 'zod'

import { useRegister } from '@/api/hooks/register'
import RegisterBGImg from '@/assets/RegisterBGImg.jpg'
import CredentialForm from '@/components/register/CredentialForm'
import EmailForm from '@/components/register/EmailForm'
import Progress from '@/components/register/Progress'
import UserInfoForm from '@/components/register/UserInfoForm'
import Button from '@/components/ui/button'
import { Form } from '@/components/ui/form'
import { RegisterFormSchema } from '@/lib/zod/register-schema'
import { ProgressState, RegisterationKey, RegistrationState, ValidState } from '@/types/register'

const RegisterPage = () => {
  const [page, setPage] = useState<ProgressState>(1)
  const [file, setFile] = useState<File | null>(null)
  const [valid, setValid] = useState<RegistrationState>({
    email: 'unknown',
    username: 'unknown',
    studentId: 'unknown',
    screenShot: 'unknown',
  })

  const { mutate: mutateRegister } = useRegister()
  const navigate = useNavigate()
  const emailForm = useForm<z.infer<typeof RegisterFormSchema.step1>>({
    resolver: zodResolver(RegisterFormSchema.step1),
    defaultValues: {
      email: '',
      emailCode: '',
    },
    mode: 'onTouched', //	Validation is initially triggered on the first blur event. After that, it is triggered on every change event.
  })

  const userInfoFrom = useForm<z.infer<typeof RegisterFormSchema.step2>>({
    resolver: zodResolver(RegisterFormSchema.step2),
    defaultValues: {
      name: '',
      country: '',
      homeUniversity: '',
      major: '',
      studentNumber: '',
    },
    mode: 'onTouched',
  })

  const credentialForm = useForm<z.infer<typeof RegisterFormSchema.step3>>({
    resolver: zodResolver(RegisterFormSchema.step3),
    defaultValues: {
      username: '',
      password: {
        password: '',
        confirm: '',
      },
    },
    mode: 'onTouched',
  })

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files?.length) return
    const currentFile = e.target.files[0]
    const fileType = currentFile.type
    if (!fileType.includes('image')) setValid(v => ({ ...v, screenShot: 'invalid' }))
    else {
      setFile(currentFile)
      setValid(v => ({ ...v, screenShot: 'valid' }))
    }
  }

  const onSubmit = () => {
    if (!file) return
    for (const key in valid) {
      if (valid[key as RegisterationKey] !== 'valid') return
    }
    mutateRegister(
      {
        screenShot: file,
        ...emailForm.getValues(),
        ...userInfoFrom.getValues(),
        username: credentialForm.getValues('username'),
        password: credentialForm.getValues('password').password,
      },
      {
        onSuccess: () => navigate('/login'),
      },
    )
  }

  const handleValidation = useCallback((target: keyof RegistrationState, value: ValidState) => {
    setValid(v => ({ ...v, [target]: value }))
  }, [])

  const handleNextPage = () => {
    if (page === 1) {
      emailForm.handleSubmit(() => setPage(2))()
    }
    if (page === 2) {
      userInfoFrom.handleSubmit(() => setPage(3))()
    }
    if (page === 3) {
      credentialForm.handleSubmit(onSubmit)()
    }
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
      <div
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
        <Progress stageState={page} />
        {page === 1 && (
          <Form {...emailForm}>
            <form>
              <EmailForm form={emailForm} valid={valid} handleValidation={handleValidation} />
            </form>
          </Form>
        )}
        {page === 2 && (
          <Form {...userInfoFrom}>
            <form>
              <UserInfoForm
                form={userInfoFrom}
                handleFileChange={handleFileChange}
                valid={valid}
                handleValidation={handleValidation}
                fileName={file?.name ?? ''}
              />
            </form>
          </Form>
        )}
        {page === 3 && (
          <Form {...credentialForm}>
            <form>
              <CredentialForm form={credentialForm} valid={valid.username} handleValidation={handleValidation} />
            </form>
          </Form>
        )}
        <div className={css({ display: 'flex', gap: 5 })}>
          <Button
            type="submit"
            variant="loginOutline"
            onClick={() => setPage(p => (p - 1) as ProgressState)}
            disabled={page === 1}
          >
            <ArrowLeft className={css({ w: 4, h: 4 })} />
            <p className={css({ fontSize: 20, fontWeight: 500, lineHeight: 'none' })}>PREV</p>
          </Button>
          <Button type="submit" variant={page === 3 ? 'loginColored' : 'loginOutline'} onClick={handleNextPage}>
            <p className={css({ fontSize: 20, fontWeight: 500, lineHeight: 'none' })}>
              {page === 3 ? 'Submit' : 'NEXT'}
            </p>
            {page !== 3 && <ArrowRight className={css({ w: 4, h: 4 })} />}
          </Button>
        </div>
      </div>
    </div>
  )
}

export default RegisterPage

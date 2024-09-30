import { css } from '@styled-system/css'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import { memo, useCallback, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { useRegister } from '@/api/hooks/register'
import CredentialForm from '@/components/register/CredentialForm'
import EmailForm from '@/components/register/EmailForm'
import Progress from '@/components/register/Progress'
import UserInfoForm from '@/components/register/UserInfoForm'
import Button from '@/components/ui/button'
import { Form } from '@/components/ui/form'
import ModalCard from '@/components/ui/modal'
import ModalPortal from '@/components/ui/modal/ModalPortal'
import { REGISTER_MESSAGES } from '@/lib/messages/register'
import AuthNavigate from '@/lib/router/AuthNavigate'
import { RegisterFormSchema } from '@/lib/zod/register-schema'
import { ProgressState, RegistrationKey, RegistrationState, ValidState } from '@/types/register'
import { useModal } from '@/util/useModal'
import { useRegisterForm } from '@/util/useRegisterForm'

const RegisterPage = memo(() => {
  const navigate = useNavigate()
  const { isOpen, handleButtonClose, handleOpen, modalRef } = useModal()
  const [page, setPage] = useState<ProgressState>(1)
  const [file, setFile] = useState<File | null>(null)
  const [valid, setValid] = useState<RegistrationState>({
    email: 'unknown',
    username: 'unknown',
    studentId: 'unknown',
    screenshot: 'unknown',
  })

  const { mutate: mutateRegister } = useRegister()

  const emailForm = useRegisterForm(RegisterFormSchema.step1)
  const userInfoForm = useRegisterForm(RegisterFormSchema.step2)
  const credentialForm = useRegisterForm(RegisterFormSchema.step3)

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files?.length) return
    const currentFile = e.target.files[0]
    const fileType = currentFile.type
    if (!fileType.includes('image')) setValid(v => ({ ...v, screenshot: 'invalid' }))
    else {
      setFile(currentFile)
      setValid(v => ({ ...v, screenshot: 'valid' }))
    }
  }

  const onSubmit = () => {
    if (!file) return
    for (const key in valid) {
      if (valid[key as RegistrationKey] !== 'valid') return
    }
    mutateRegister(
      {
        screenshot: file,
        ...emailForm.getValues(),
        ...userInfoForm.getValues(),
        username: credentialForm.getValues('username'),
        password: credentialForm.getValues('password').password,
      },
      { onSuccess: handleOpen },
    )
  }

  const handleValidation = useCallback((target: keyof RegistrationState, value: ValidState) => {
    setValid(v => ({ ...v, [target]: value }))
  }, [])

  const handleNextPage = () => {
    if (page === 1) {
      if (valid.email === 'unknown') emailForm.trigger()
      if (valid.email !== 'valid') {
        setValid(v => ({ ...v, email: 'invalid' }))
        emailForm.setError('emailCode', { message: 'Invalid code', type: 'validate' })
        return
      }
      emailForm.handleSubmit(() => setPage(2))()
    }
    if (page === 2) {
      if (!file || valid.screenshot !== 'valid') {
        setValid(v => ({ ...v, screenshot: 'invalid' }))
        return
      }
      userInfoForm.handleSubmit(() => setPage(3))()
    }
    if (page === 3) {
      credentialForm.handleSubmit(onSubmit)()
    }
  }

  const handleModalClose = useCallback(() => {
    handleButtonClose()
    navigate('/login')
  }, [handleButtonClose, navigate])

  return (
    <AuthNavigate>
      <main
        className={css({
          display: 'flex',
          pos: 'relative',
          flexDir: 'column',
          w: 'full',
          h: 'full',
          justifyContent: 'center',
          alignItems: 'center',
          gap: 5,
          py: 5,
          bgColor: 'bg.gray',
        })}
      >
        <div
          className={css({ pos: 'absolute', w: 'full', h: '500px', top: 0, zIndex: 1, smDown: { h: '300px' } })}
          style={{
            backgroundImage: `url(${import.meta.env.VITE_API_AWS_S3_BUCKET}/fe/signUpBanner.webp)`,

            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',

            backgroundPosition: 'start',
          }}
        />
        <title>Register Page</title>
        <section
          className={css({
            display: 'flex',
            w: 'full',
            maxW: 818,
            flexDir: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '50px',
            bgColor: 'white',
            py: 20,
            smDown: { py: 10 },
            zIndex: 1,
            boxShadow: '0px 0px 4px 0px rgba(0, 0, 0, 0.25)',
            rounded: 30,
            px: 5,
          })}
        >
          <div className={css({ display: 'flex', flexDir: 'column', justifyContent: 'center', alignItems: 'center' })}>
            <h1 className={css({ fontSize: 40, fontWeight: 700, smDown: { fontSize: 32 } })}>Join</h1>
            <h2
              className={css({
                fontSize: 20,
                fontWeight: 500,
                color: 'darkGray.2',
                smDown: { fontSize: 16 },
              })}
            >
              Welcome to KU-Key
            </h2>
          </div>
          <Progress stageState={page} />
          {page === 1 && (
            <Form {...emailForm}>
              <EmailForm form={emailForm} valid={valid} handleValidation={handleValidation} />
            </Form>
          )}
          {page === 2 && (
            <Form {...userInfoForm}>
              <UserInfoForm
                form={userInfoForm}
                handleFileChange={handleFileChange}
                valid={valid}
                handleValidation={handleValidation}
                fileName={file?.name ?? ''}
              />
            </Form>
          )}
          {page === 3 && (
            <Form {...credentialForm}>
              <CredentialForm form={credentialForm} valid={valid.username} handleValidation={handleValidation} />
            </Form>
          )}
          <div className={css({ display: 'flex', gap: 5, smDown: { w: 'full', flexWrap: 'wrap' } })}>
            <Button
              type="submit"
              variant="loginOutline"
              onClick={() => setPage(p => (p - 1) as ProgressState)}
              disabled={page === 1}
              hidden={page === 1}
              className={css({
                rounded: 10,
                smDown: { w: 'full' },
              })}
            >
              <ArrowLeft className={css({ w: 4, h: 4 })} />
              <p className={css({ fontSize: 20, fontWeight: 500, lineHeight: '100%', smDown: { fontSize: 14 } })}>
                PREV
              </p>
            </Button>
            <Button
              type="submit"
              variant={page === 3 ? 'loginColored' : 'loginOutline'}
              onClick={handleNextPage}
              className={css({
                rounded: 10,
                smDown: { w: 'full' },
              })}
            >
              <p
                className={css({
                  fontSize: 20,
                  fontWeight: 500,
                  lineHeight: '100%',
                  smDown: { fontSize: 14 },
                })}
              >
                {page === 3 ? 'Submit' : 'NEXT'}
              </p>
              {page !== 3 && <ArrowRight className={css({ w: 4, h: 4 })} />}
            </Button>
          </div>
        </section>
        <ModalPortal isOpen={isOpen}>
          <ModalCard variant="alert" ref={modalRef}>
            <div className={css({ fontWeight: 700, color: 'black.2', fontSize: 24 })}>{REGISTER_MESSAGES.TITLE}</div>
            <div className={css({ display: 'flex', flexDir: 'column', alignItems: 'center', gap: 2.5 })}>
              <p className={css({ textStyle: 'heading4_M', color: 'black.2' })}>{REGISTER_MESSAGES.SUBTITLE}</p>
              <p
                className={css({
                  fontSize: 16,
                  fontWeight: 400,
                  whiteSpace: 'pre-wrap',
                  textAlign: 'center',
                  color: 'darkGray.1',
                  lineHeight: '1',
                })}
              >
                {REGISTER_MESSAGES.CONTENT}
              </p>
              <p className={css({ textStyle: 'heading4_M', color: 'black.2' })}>
                This process takes <span className={css({ color: 'red.3' })}>1-2 business days</span> on average.
              </p>
            </div>
            <div className={css({ display: 'flex', gap: 5 })}>
              <Button variant="confirm" onClick={handleModalClose}>
                Confirm
              </Button>
            </div>
          </ModalCard>
        </ModalPortal>
      </main>
    </AuthNavigate>
  )
})

export default RegisterPage

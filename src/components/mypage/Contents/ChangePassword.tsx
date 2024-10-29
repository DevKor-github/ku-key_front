import { css } from '@styled-system/css'
import { isAxiosError } from 'axios'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

import { useCheckPassword } from '@/api/hooks/auth'
import { usePatchPassword } from '@/api/hooks/register'
import ChangeForm from '@/components/mypage/Contents/ChangeForm'
import Button from '@/components/ui/button'
import { PasswordSchema } from '@/lib/zod/register-schema'
import { useMediaQueryByName } from '@/util/useMediaQueryByName'

export interface ChangePasswordForm {
  curPassword: string
  newPassword: string
  confirmPassword: string
}

const ChangePassword = () => {
  const { mutate: patchPassword } = usePatchPassword()
  const { mutate: checkPassword } = useCheckPassword()

  const { register, handleSubmit, setError, formState, reset } = useForm<ChangePasswordForm>()

  const isMobile = useMediaQueryByName('smDown')

  const onSubmit = (data: ChangePasswordForm) => {
    checkPassword(data.curPassword, {
      onSuccess: check => {
        if (check) {
          if (data.newPassword === data.curPassword) {
            setError('newPassword', {
              message: 'Same as current password',
            })
          } else {
            if (data.newPassword === data.confirmPassword) {
              try {
                PasswordSchema.parse(data.newPassword)
                patchPassword(data.newPassword, {
                  onSuccess: () => {
                    reset()
                    alert('Your password has been successfully changed')
                  },
                  onError: error => {
                    if (isAxiosError(error)) {
                      alert(error.response?.data.message)
                    } else {
                      alert('Something is Wrong!')
                    }
                  },
                })
              } catch (error) {
                if (error instanceof z.ZodError) {
                  setError('newPassword', {
                    message: error.issues[0].message,
                  })
                }
              }
            } else {
              setError('confirmPassword', {
                message: 'Mismatch with new password',
              })
            }
          }
        } else {
          setError('curPassword', {
            message: "It's different from your current password!",
          })
        }
      },
    })
  }

  return (
    <div
      className={css({
        display: 'flex',
        gap: { base: 20, mdDown: 5 },
        alignItems: 'center',
        flexDir: 'column',
        maxW: 818,
        smDown: {
          pt: 23,
          w: 'full',
          px: 5,
        },
      })}
    >
      <h1
        className={css({
          px: 1,
          py: 2.5,
          fontSize: { base: 30, mdDown: 15 },
          fontWeight: 700,
          smDown: { display: 'none' },
        })}
      >
        Change Password
      </h1>
      <form
        className={css({ display: 'flex', flexDir: 'column', gap: 10, smDown: { w: 'full' } })}
        onSubmit={handleSubmit(onSubmit)}
      >
        <ChangeForm type="curPassword" register={register} formState={formState} />
        <section className={css({ display: 'flex', flexDir: 'column', gap: 2.5 })}>
          <ChangeForm type="newPassword" register={register} formState={formState} />
          <ChangeForm type="confirmPassword" register={register} formState={formState} />
        </section>
        <div className={css({ display: 'flex', justifyContent: 'center', mt: 5 })}>
          <Button variant={isMobile ? 'mobile' : 'loginColored'} type="submit">
            SAVE
          </Button>
        </div>
      </form>
    </div>
  )
}

export default ChangePassword

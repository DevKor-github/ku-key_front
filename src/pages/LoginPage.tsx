import { css } from '@styled-stytem/css'
import { AxiosError } from 'axios'
import { ShieldAlert } from 'lucide-react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { z } from 'zod'

import { useLogIn } from '@/api/hooks/auth'
import LoginPageBg from '@/assets/LoginBanner.webp'
import Button from '@/components/ui/button'
import { Checkbox } from '@/components/ui/checkbox'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import AuthNavigate from '@/lib/router/AuthNavigate'
import { LoginSchema } from '@/lib/zod/login-schema'
import { useRegisterForm } from '@/util/useRegisterForm'
const Login = () => {
  const [maintain, setMaintain] = useState(false)
  const { mutate: mutateLogin } = useLogIn()

  const navigate = useNavigate()
  const loginForm = useRegisterForm(LoginSchema)
  const onSubmit = (values: z.infer<typeof LoginSchema>) => {
    mutateLogin(
      { ...values, keepingLogin: maintain },
      {
        onSuccess: () => navigate('/home'),
        onError: error => {
          if (error instanceof AxiosError) {
            const errorMessage = error.response?.data.message ?? 'An error occurred'
            if (errorMessage === '이메일이 잘못되었습니다.') {
              loginForm.setError('email', { message: 'wrong email' })
            }
            if (errorMessage === '비밀번호가 일치하지 않습니다.') {
              loginForm.setError('password', { message: 'wrong password' })
            }
          }
        },
      },
    )
  }

  return (
    <AuthNavigate>
      <main
        className={css({
          display: 'flex',
          position: 'relative',
          flexDir: 'column',
          w: 'full',
          h: 'full',
          justifyContent: 'center',
          alignItems: 'center',
          bgColor: 'lightGray.2',
          // pt: 40,
        })}
      >
        <title>Login Page</title>
        <div
          className={css({ pos: 'absolute', w: 'full', h: '500px', top: 0, zIndex: 1, smDown: { h: '300px' } })}
          style={{ backgroundImage: `url(${LoginPageBg})`, backgroundSize: 'cover', backgroundPosition: 'start' }}
        />
        {/* <img
          src={LoginPageBg}
          alt="background"
          className={css({ pos: 'absolute', w: 'full', h: '500px', top: 0, zIndex: 1, objectFit: 'cover' })}
        /> */}
        <Form {...loginForm}>
          <form
            onSubmit={loginForm.handleSubmit(onSubmit)}
            className={css({
              display: 'flex',
              flexDir: 'column',
              border: '1px solid {colors.lightGray.2}',
              pt: 20,
              pb: '70px',
              rounded: 30,
              bgColor: 'white',
              zIndex: 2,
              justifyContent: 'center',
              alignItems: 'center',
              gap: '50px',
              w: 'full',
              maxW: 648,
              px: 5,
              smDown: { pt: 10, pb: 15, gap: 5 },
            })}
          >
            <div
              className={css({ display: 'flex', flexDir: 'column', justifyContent: 'center', alignItems: 'center' })}
            >
              <h1 className={css({ fontSize: 40, fontWeight: 700, smDown: { fontSize: 32 } })}>Login</h1>
              <p
                className={css({
                  fontSize: 20,
                  fontWeight: 500,
                  p: 2.5,
                  color: 'darkGray.2',
                  smDown: { fontSize: 16 },
                })}
              >
                Welcome to KU-key
              </p>
            </div>
            <div
              className={css({
                display: 'flex',
                flexDir: 'column',
                gap: 6,
                justifyContent: 'center',
                alignItems: 'center',
                w: 'full',
              })}
            >
              <FormField
                control={loginForm.control}
                name="email"
                render={({ field }) => (
                  <FormItem
                    className={css({
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'baseline',
                      w: 'full',
                      maxW: 438,
                      flexWrap: 'wrap',
                      rowGap: 2.5,
                    })}
                  >
                    <FormLabel className={css({ fontSize: 24, fontWeight: 700, smDown: { fontSize: 19 } })}>
                      Email
                    </FormLabel>
                    <FormControl>
                      <div className={InputMessageWrapper}>
                        <Input
                          placeholder="Please enter your Email address"
                          {...field}
                          className={css({ smDown: { w: 'full' } })}
                        />
                        <div className={css({ display: 'flex', px: 1.5, py: 1, gap: 1, alignItems: 'center' })}>
                          {loginForm.getFieldState('email').invalid && (
                            <ShieldAlert size={16} className={css({ color: 'red.2' })} />
                          )}
                          <FormMessage />
                        </div>
                      </div>
                    </FormControl>
                  </FormItem>
                )}
              />
              <FormField
                control={loginForm.control}
                name="password"
                render={({ field }) => (
                  <FormItem
                    className={css({
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'baseline',
                      w: 'full',
                      maxW: 438,
                      flexWrap: 'wrap',
                      rowGap: 2.5,
                    })}
                  >
                    <FormLabel className={css({ fontSize: 24, fontWeight: 700, smDown: { fontSize: 19 } })}>
                      Password
                    </FormLabel>
                    <FormControl>
                      <div className={InputMessageWrapper}>
                        <Input
                          placeholder="Please enter your Password"
                          type="password"
                          {...field}
                          className={css({ smDown: { w: 'full' } })}
                        />
                        <div className={css({ display: 'flex', px: 1.5, py: 1, gap: 1, alignItems: 'center' })}>
                          {loginForm.getFieldState('password').invalid && (
                            <ShieldAlert size={16} className={css({ color: 'red.2' })} />
                          )}
                          <FormMessage />
                        </div>
                      </div>
                    </FormControl>
                  </FormItem>
                )}
              />
            </div>
            <div
              className={css({
                display: 'flex',
                alignItems: 'center',
                spaceX: 2.5,
                px: 5,
                w: 'full',
                maxW: 438,
              })}
            >
              <Checkbox id="login" checked={maintain} onCheckedChange={() => setMaintain(m => !m)} />
              <Label
                htmlFor="login"
                className={css({ fontSize: 20, fontWeight: 600, color: 'darkGray.1', smDown: { fontSize: 16 } })}
              >
                Remember me
              </Label>
            </div>
            <div className={css({ display: 'flex', gap: 5, smDown: { w: 'full', flexWrap: 'wrap' } })}>
              <Button
                type="button"
                variant="loginOutline"
                className={css({
                  fontSize: 20,
                  fontWeight: 500,
                  lineHeight: 'none',
                  rounded: 10,
                  smDown: { w: 'full', fontSize: 14 },
                })}
                onClick={() => navigate('/register')}
              >
                JOIN
              </Button>
              <Button
                type="submit"
                variant="loginColored"
                className={css({
                  fontSize: 20,
                  fontWeight: 500,
                  lineHeight: 'none',
                  rounded: 10,
                  smDown: { w: 'full', fontSize: 14 },
                })}
              >
                LOGIN
              </Button>
            </div>
          </form>
        </Form>
      </main>
    </AuthNavigate>
  )
}

export default Login

const InputMessageWrapper = css({
  display: 'flex',
  flexDir: 'column',
  alignItems: 'flex-end',
  smDown: { w: 'full' },
})

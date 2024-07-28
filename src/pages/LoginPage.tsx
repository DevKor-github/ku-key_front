import { zodResolver } from '@hookform/resolvers/zod'
import { css } from '@styled-stytem/css'
import { AxiosError } from 'axios'
import { ShieldAlert } from 'lucide-react'
import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { z } from 'zod'

import { useLogIn } from '@/api/hooks/auth'
import Button from '@/components/ui/button'
import { Checkbox } from '@/components/ui/checkbox'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { LoginSchema } from '@/lib/zod/login-schema'
import { useAuth } from '@/util/auth/useAuth'

const Login = () => {
  const [maintain, setMaintain] = useState(false)
  const { mutate: mutateLogin } = useLogIn()

  const isAuth = useAuth().isAuthenticated

  const navigate = useNavigate()
  const form = useForm<z.infer<typeof LoginSchema>>({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      email: '',
      password: '',
    },
    mode: 'onTouched',
  })
  const onSubmit = (values: z.infer<typeof LoginSchema>) => {
    mutateLogin(
      { ...values, keepingLogin: maintain },
      {
        onSuccess: () => navigate('/mypage'),
        onError: error => {
          if (error instanceof AxiosError) {
            const errorMessage = error.response?.data.message ?? 'An error occurred'
            if (errorMessage === '이메일이 잘못되었습니다.') {
              form.setError('email', { message: 'wrong email' })
            }
            if (errorMessage === '비밀번호가 일치하지 않습니다.') {
              form.setError('password', { message: 'wrong password' })
            }
          }
        },
      },
    )
  }

  useEffect(() => {
    if (isAuth) navigate('/mypage')
  }, [isAuth, navigate])
  return (
    <div
      className={css({
        display: 'flex',
        position: 'relative',
        flexDir: 'column',
        w: 'full',
        h: 'calc(100vh - 359px)',
        justifyContent: 'center',
        alignItems: 'center',
        bgColor: 'lightGray.2',
      })}
    >
      <div className={css({ pos: 'absolute', w: 'full', h: '500px', bgColor: 'red.2', top: 0, zIndex: 1 })} />
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className={css({
            display: 'flex',
            flexDir: 'column',
            border: '1px solid {colors.lightGray.2}',
            pt: 20,
            pb: '70px',
            px: 105,
            rounded: 30,
            bgColor: 'white',
            zIndex: 2,
            justifyContent: 'center',
            alignItems: 'center',
            gap: '70px',
          })}
        >
          <div className={css({ display: 'flex', flexDir: 'column', justifyContent: 'center', alignItems: 'center' })}>
            <h1 className={css({ fontSize: 40, fontWeight: 700 })}>Login</h1>
            <p className={css({ fontSize: 20, fontWeight: 500, p: 2.5, color: 'darkGray.2' })}>Welcome to KU-key</p>
          </div>
          <div
            className={css({
              display: 'flex',
              flexDir: 'column',
              gap: 6,
              justifyContent: 'center',
              alignItems: 'center',
              alignSelf: 'stretch',
            })}
          >
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem
                  className={css({
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'baseline',
                    alignSelf: 'stretch',
                  })}
                >
                  <FormLabel className={css({ fontSize: 24, fontWeight: 700 })}>Email</FormLabel>
                  <FormControl>
                    <div className={css({ display: 'flex', flexDir: 'column', alignItems: 'flex-end' })}>
                      <Input placeholder="Please enter your Email  address" {...field} />
                      <div className={css({ display: 'flex', px: 1.5, py: 1, gap: 1, alignItems: 'center' })}>
                        {form.getFieldState('email').invalid && (
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
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem
                  className={css({
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'baseline',
                    alignSelf: 'stretch',
                  })}
                >
                  <FormLabel className={css({ fontSize: 24, fontWeight: 700 })}>Password</FormLabel>
                  <FormControl>
                    <div className={css({ display: 'flex', flexDir: 'column', alignItems: 'flex-end' })}>
                      <Input placeholder="Please enter your Password" type="password" {...field} />
                      <div className={css({ display: 'flex', px: 1.5, py: 1, gap: 1, alignItems: 'center' })}>
                        {form.getFieldState('password').invalid && (
                          <ShieldAlert size={16} className={css({ color: 'red.2' })} />
                        )}
                        <FormMessage />
                      </div>
                    </div>
                  </FormControl>
                </FormItem>
              )}
            />
            <div className={css({ display: 'flex', alignItems: 'center', spaceX: 2, alignSelf: 'flex-start' })}>
              <Checkbox id="login" checked={maintain} onCheckedChange={() => setMaintain(m => !m)} />
              <Label htmlFor="login">Remember me</Label>
            </div>
          </div>

          <div className={css({ display: 'flex', gap: 5 })}>
            <Button
              type="button"
              variant="loginOutline"
              className={css({ fontSize: 20, fontWeight: 500, lineHeight: 'none' })}
              onClick={() => navigate('/register')}
            >
              JOIN
            </Button>
            <Button
              type="submit"
              variant="loginColored"
              className={css({ fontSize: 20, fontWeight: 500, lineHeight: 'none' })}
            >
              LOGIN
            </Button>
          </div>
        </form>
      </Form>
    </div>
  )
}

export default Login

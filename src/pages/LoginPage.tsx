import { zodResolver } from '@hookform/resolvers/zod'
import { css } from '@styled-stytem/css'
import { useEffect, useState } from 'react'
import useIsAuthenticated from 'react-auth-kit/hooks/useIsAuthenticated'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { z } from 'zod'

import { useLogIn, useLogOut } from '@/api/hooks/auth'
import Button from '@/components/ui/button'
import { Checkbox } from '@/components/ui/checkbox'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { LoginSchema } from '@/lib/zod/login-schema'

const Login = () => {
  const [maintain, setMaintain] = useState(false)
  const { mutate: mutateLogin } = useLogIn()
  const { mutate: mutateLogout } = useLogOut()
  const isAuth = useIsAuthenticated()

  const navigate = useNavigate()
  const form = useForm<z.infer<typeof LoginSchema>>({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  })
  const onSubmit = (values: z.infer<typeof LoginSchema>) => {
    mutateLogin({ ...values, keepingLogin: maintain })
  }

  useEffect(() => {
    if (isAuth) navigate('/mypage')
  }, [isAuth, navigate])
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
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem className={css({ display: 'flex', flexDir: 'column', alignSelf: 'stretch' })}>
                <FormLabel className={css({ fontWeight: 700 })}>Password</FormLabel>
                <FormControl>
                  <div className={css({ display: 'flex', gap: 2, alignItems: 'center' })}>
                    <Input
                      placeholder="password"
                      type="password"
                      {...field}
                      className={css({ alignSelf: 'stretch' })}
                    />
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className={css({ display: 'flex', alignItems: 'center', spaceX: 2 })}>
            <Checkbox id="login" checked={maintain} onCheckedChange={() => setMaintain(m => !m)} />
            <Label htmlFor="login">Remember me</Label>
          </div>
          <Button type="submit" className={css({ alignSelf: 'center' })}>
            Login
          </Button>
          <Button type="button" className={css({ alignSelf: 'center' })} onClick={() => mutateLogout()}>
            Logout
          </Button>
        </form>
      </Form>
    </div>
  )
}

export default Login

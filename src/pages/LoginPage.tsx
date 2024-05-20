import { zodResolver } from '@hookform/resolvers/zod'
import { css } from '@styled-stytem/css'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

import Button from '@/components/ui/button'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { LoginSchema } from '@/lib/zod/login-schema'

const Login = () => {
  const form = useForm<z.infer<typeof LoginSchema>>({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  })
  const onSubmit = (values: z.infer<typeof LoginSchema>) => {
    console.log(values)
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
          <Button type="submit" className={css({ alignSelf: 'center' })}>
            Login
          </Button>
        </form>
      </Form>
    </div>
  )
}

export default Login

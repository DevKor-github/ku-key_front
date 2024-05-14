import { zodResolver } from '@hookform/resolvers/zod'
import { css } from '@styled-stytem/css'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

import Button from '@/components/ui/button'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { registerFormSchema } from '@/lib/zod/register-schema'

const RegisterPage = () => {
  const form = useForm<z.infer<typeof registerFormSchema>>({
    resolver: zodResolver(registerFormSchema),
    defaultValues: {
      username: '',
      password: '',
    },
  })
  const onSubmit = (values: z.infer<typeof registerFormSchema>) => {
    console.log(values)
  }
  return (
    <>
      <div
        className={css({
          display: 'flex',
          flexDir: 'column',
          width: '100%',
          height: '100vh',
          justifyContent: 'center',
          alignItems: 'center',
        })}
      >
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className={css({
              display: 'flex',
              flexDir: 'column',
              gap: 5,
              alignItems: 'center',
            })}
          >
            <FormField
              control={form.control}
              name="username"
              render={({ field }) => (
                <FormItem className={css({ display: 'flex', flexDir: 'column' })}>
                  <FormLabel className={css({ fontWeight: 900 })}>Username</FormLabel>
                  <FormControl>
                    <Input placeholder="Username" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem className={css({ display: 'flex', flexDir: 'column' })}>
                  <FormLabel className={css({ fontWeight: 900 })}>Password</FormLabel>
                  <FormControl>
                    <Input placeholder="Password" type="password" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className={css({ display: 'flex', w: 'full', gap: 4 })}>
              <Button type="submit">Login</Button>
              <Button type="button">Register</Button>
            </div>
          </form>
        </Form>
      </div>
    </>
  )
}

export default RegisterPage

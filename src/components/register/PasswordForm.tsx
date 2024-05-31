import { css } from '@styled-stytem/css'
import { memo } from 'react'
import { UseFormReturn } from 'react-hook-form'
import { z } from 'zod'

import { FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { RegisterFormSchema } from '@/lib/zod/register-schema'
import { checkPasswordConfirm, checkPasswordRegex } from '@/util/register-form'

const PasswordForm = memo((form: UseFormReturn<z.infer<typeof RegisterFormSchema>>) => {
  return (
    <>
      <FormField
        control={form.control}
        name="password.password"
        render={({ field }) => (
          <FormItem className={css({ display: 'flex', flexDir: 'column', alignSelf: 'stretch' })}>
            <FormLabel className={css({ fontWeight: 700 })}>Password</FormLabel>
            <FormControl>
              <Input
                placeholder="Password"
                type="password"
                {...field}
                className={css({ alignSelf: 'stretch' })}
                onBlur={() => checkPasswordRegex(form)}
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name="password.confirm"
        render={({ field }) => (
          <FormItem className={css({ display: 'flex', flexDir: 'column', alignSelf: 'stretch' })}>
            <FormLabel className={css({ fontWeight: 700 })}>Password Confirm</FormLabel>
            <FormControl>
              <Input
                placeholder="Password Confirm"
                {...field}
                type="password"
                className={css({ alignSelf: 'stretch' })}
                onBlur={() => checkPasswordConfirm(form)}
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
    </>
  )
})

export default PasswordForm

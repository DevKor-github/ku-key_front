import { UseFormReturn } from 'react-hook-form'
import { z, ZodError } from 'zod'

import { PasswordSchema, RegisterFormSchema, UserNameSchema } from '@/lib/zod/register-schema'

export const checkUsernameRegex = (form: UseFormReturn<z.infer<typeof RegisterFormSchema>>) => {
  const username = form.getValues().username
  try {
    UserNameSchema.parse({ username })
    form.clearErrors('username')
  } catch (e) {
    e instanceof ZodError && form.setError('username', { message: String(e.errors[0].message) })
    return e
  }
}

export const checkPasswordRegex = (form: UseFormReturn<z.infer<typeof RegisterFormSchema>>) => {
  const password = form.getValues().password.password
  const check = { password, confirm: password }
  try {
    PasswordSchema.parse({ password: check })
    form.clearErrors('password.password')
  } catch (e) {
    e instanceof ZodError && form.setError('password.password', { message: String(e.errors[0].message) })
  }
}

export const checkPasswordConfirm = (form: UseFormReturn<z.infer<typeof RegisterFormSchema>>) => {
  const password = form.getValues().password
  try {
    PasswordSchema.parse({ password })
    form.clearErrors('password.confirm')
  } catch (e) {
    e instanceof ZodError && form.setError('password.confirm', { message: String(e.errors[0].message) })
  }
}

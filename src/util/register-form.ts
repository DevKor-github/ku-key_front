import { UseFormReturn } from 'react-hook-form'
import { z, ZodError } from 'zod'

import { PasswordSchema, RegisterFormSchema, UserNameSchema } from '@/lib/zod/register-schema'

export const checkEmailRegex = (form: UseFormReturn<z.infer<typeof RegisterFormSchema>>) => {
  const email = form.getValues().email
  try {
    RegisterFormSchema.pick({ email: true }).parse({ email })
    form.formState.errors.email?.type !== 'validate' && form.clearErrors('email')
  } catch (e) {
    e instanceof ZodError && form.setError('email', { message: String(e.errors[0].message) })
    return e
  }
}

export const checkRegex = (
  form: UseFormReturn<z.infer<typeof RegisterFormSchema>>,
  target: keyof z.infer<typeof RegisterFormSchema>,
) => {
  const value: z.util.Exactly<
    {
      [k in keyof z.infer<typeof RegisterFormSchema>]?: true
    },
    unknown
  > = { [target]: true }
  try {
    RegisterFormSchema.pick(value).parse({ [target]: form.getValues()[target] })
  } catch (e) {
    e instanceof ZodError && form.setError(target, { message: String(e.errors[0].message) })
    return e
  }
}

export const checkEmailCodeRegex = (form: UseFormReturn<z.infer<typeof RegisterFormSchema>>) => {
  const emailCode = form.getValues().emailCode
  try {
    RegisterFormSchema.pick({ emailCode: true }).parse({ emailCode })
    form.formState.errors.emailCode?.type !== 'validate' && form.clearErrors('emailCode')
  } catch (e) {
    e instanceof ZodError && form.setError('emailCode', { message: String(e.errors[0].message) })
    return e
  }
}
export const checkUsernameRegex = (form: UseFormReturn<z.infer<typeof RegisterFormSchema>>) => {
  const username = form.getValues().username
  try {
    UserNameSchema.parse({ username })
    form.formState.errors.username?.type !== 'validate' && form.clearErrors('username')
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
    return e
  }
}

export const checkPasswordConfirm = (form: UseFormReturn<z.infer<typeof RegisterFormSchema>>) => {
  const password = form.getValues().password
  try {
    PasswordSchema.parse({ password })
    form.clearErrors('password.confirm')
  } catch (e) {
    e instanceof ZodError && form.setError('password.confirm', { message: String(e.errors[0].message) })
    return e
  }
}

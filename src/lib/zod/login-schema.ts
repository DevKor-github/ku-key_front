import { z } from 'zod'

export const LoginSchema = z.object({
  email: z
    .string()
    .email({ message: 'wrong email form' })
    .refine(value => value !== '', { message: 'This field is required.' }),
  password: z.string().refine(value => value !== '', { message: 'This field is required.' }),
})

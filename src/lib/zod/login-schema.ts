import { z } from 'zod'

export const LoginSchema = z.object({
  email: z
    .string()
    .email()
    .refine(value => value.includes('@gmail.com'), { message: 'should type in gmail account' }),

  password: z.string(),
})

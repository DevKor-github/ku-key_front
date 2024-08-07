import { z } from 'zod'

export const RegisterFormSchema = {
  step1: z.object({
    email: z
      .string()
      .min(2, { message: 'This field is required' })
      .refine(value => value !== '', { message: 'This field is required.' })
      .refine(value => value.includes('@gmail.com'), { message: 'should type in gmail account' }),
    emailCode: z.string().refine(value => value !== '', { message: 'This field is required.' }),
  }),
  step2: z.object({
    name: z.string().refine(value => value !== '', { message: 'This field is required.' }),
    country: z.string().refine(value => value !== '', { message: 'This field is required.' }),
    homeUniversity: z.string().refine(value => value !== '', { message: 'This field is required.' }),
    major: z.string().refine(value => value !== '', { message: 'This field is required.' }),
    studentNumber: z.string().length(10, { message: 'student ID must be 10 characters long.' }),
  }),
  step3: z.object({
    username: z
      .string()
      .min(5, { message: 'username must be at least 5 characters long.' })
      .max(10, { message: 'username must be at most 10 characters long.' })
      .regex(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]+$/, { message: 'username must include aplphabet and numbers' })
      .refine(value => value !== '', { message: 'This field is required.' }),
    password: z
      .object({
        password: z
          .string()
          .min(10, { message: 'password must be at least 10 characters long.' })
          .max(20, { message: 'password must be at most 20 characters long.' })
          .regex(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]+$/, {
            message: 'password must include alphabet, numbers, and special sysmbols (e.g., !@#$%^&*).',
          })
          .refine(value => value !== '', { message: 'This field is required.' }),
        confirm: z.string(),
      })
      .refine(data => data.password === data.confirm, { message: 'passwords do not match', path: ['confirm'] }),
  }),
}

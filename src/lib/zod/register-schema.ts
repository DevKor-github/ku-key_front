import { z } from 'zod'

export const registerFormSchema = z.object({
  username: z
    .string()
    .min(4, { message: 'username은 최소한 4자 이상은 되어야 합니다.' })
    .max(20)
    .regex(/[a-z]/, { message: 'username은 영어 소문자만 가능합니다.' }),
  password: z
    .string()
    .min(4)
    .max(20)
    .regex(/(?=.*\d)(?=.*[a-z]).{8,}/, { message: 'password는 영어소문자, 숫자 포함 8자 이상만 가능합니다.' })
})

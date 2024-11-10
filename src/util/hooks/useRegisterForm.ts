import { zodResolver } from '@hookform/resolvers/zod'
import { DefaultValues, useForm } from 'react-hook-form'
import {
  baseObjectInputType,
  baseObjectOutputType,
  objectUtil,
  TypeOf,
  z,
  ZodObject,
  ZodRawShape,
  ZodTypeAny,
} from 'zod'

export const useRegisterForm = <
  T extends ZodObject<
    ZodRawShape,
    'strip',
    ZodTypeAny,
    {
      [k in keyof objectUtil.addQuestionMarks<baseObjectOutputType<ZodRawShape>, any>]: objectUtil.addQuestionMarks<
        baseObjectOutputType<ZodRawShape>,
        any
      >[k]
    },
    { [k_1 in keyof baseObjectInputType<ZodRawShape>]: baseObjectInputType<ZodRawShape>[k_1] }
  >,
>(
  schema: T,
) => {
  return useForm<z.infer<T>>({
    resolver: zodResolver(schema),
    defaultValues: Object.fromEntries(Object.keys(schema.shape).map(key => [key, ''])) as DefaultValues<TypeOf<T>>,
    mode: 'onTouched',
  })
}

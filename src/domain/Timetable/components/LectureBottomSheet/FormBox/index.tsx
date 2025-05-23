import { PropsWithChildren } from 'react'

import * as s from './style.css'

import { Typography } from '@/ui/Typography'

interface Props extends PropsWithChildren {
  formName: string
}
const FormBox = ({ formName, children }: Props) => {
  return (
    <div className={s.Wrapper}>
      <Typography typography="heading2M" color="darkGray2">
        {formName}
      </Typography>
      {children}
    </div>
  )
}
export default FormBox

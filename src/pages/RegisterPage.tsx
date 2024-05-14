import { css } from '@styled-stytem/css'

import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

const RegisterPage = () => {
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
        <Label>Email</Label>
        <div>
          <Input type="email" />
        </div>
      </div>
    </>
  )
}

export default RegisterPage

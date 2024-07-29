import { css } from '@styled-stytem/css'

import { useLogOut } from '@/api/hooks/auth'
import Button from '@/components/ui/button'

const NotVerified = () => {
  const { mutate: mutateLogout } = useLogOut()
  return (
    <div
      className={css({
        display: 'flex',
        flexDir: 'column',
        w: 'full',
        h: 'full',
        justifyContent: 'center',
        alignItems: 'center',
        py: '100px',
        gap: 5,
      })}
    >
      <p>Waiting for confirm...</p>
      <p>We will let you know through your e-mail</p>
      <Button onClick={() => mutateLogout()}>Logout</Button>
    </div>
  )
}

export default NotVerified

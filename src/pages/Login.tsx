import { css } from '@styled-stytem/css'

import Button from '@/components/ui/button'

const Login = () => {
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
        <div>로그인 페이지입니다</div>
      </div>
    </>
  )
}

export default Login

import { css } from '@styled-system/css'

import Button from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import AuthNavigate from '@/lib/router/AuthNavigate'

const PasswordResetPage = () => {
  return (
    <AuthNavigate>
      <main
        className={css({
          display: 'flex',
          position: 'relative',
          flexDir: 'column',
          w: 'full',
          h: 'full',
          justifyContent: 'center',
          alignItems: 'center',
          bgColor: 'lightGray.2',
          // pt: 40,
          py: 5,
        })}
      >
        <title>Login Page</title>
        <div
          className={css({ pos: 'absolute', w: 'full', h: '500px', top: 0, zIndex: 1, smDown: { h: '300px' } })}
          style={{
            backgroundImage: `url(${import.meta.env.VITE_API_AWS_S3_BUCKET}/fe/loginBanner.webp)`,
            backgroundSize: 'cover',
            backgroundPosition: 'start',
          }}
        />
        <form
          onSubmit={() => {}}
          className={css({
            display: 'flex',
            flexDir: 'column',
            border: '1px solid {colors.lightGray.2}',
            pt: 20,
            pb: '70px',
            rounded: 30,
            bgColor: 'white',
            zIndex: 2,
            justifyContent: 'center',
            alignItems: 'center',
            gap: '50px',
            w: 'full',
            maxW: 648,
            px: 5,
            smDown: { pt: 10, pb: 15, gap: 5 },
          })}
        >
          <div className={css({ display: 'flex', flexDir: 'column', justifyContent: 'center', alignItems: 'center' })}>
            <h1 className={css({ fontSize: 40, fontWeight: 700, smDown: { fontSize: 32 } })}>Reset Password</h1>
            <p
              className={css({
                fontSize: 20,
                fontWeight: 500,
                p: 2.5,
                color: 'darkGray.2',
                letterSpacing: '-0.4px',
                smDown: { fontSize: 14 },
              })}
            >
              Enter your email to receive a temporary password
            </p>
          </div>
          <Input type="email" placeholder="Email" className={css({ w: 'full', maxW: 438, textAlign: 'center' })} />
          <Button
            type="submit"
            variant="loginColored"
            className={css({
              fontSize: 20,
              fontWeight: 500,
              lineHeight: 'none',
              rounded: 10,
              smDown: { w: 'full', fontSize: 14 },
            })}
          >
            Submit
          </Button>
        </form>
      </main>
    </AuthNavigate>
  )
}

export default PasswordResetPage

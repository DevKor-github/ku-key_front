import { css } from '@styled-system/css'
import { History } from 'lucide-react'
import { useEffect, useState } from 'react'

import { useGetKeyExpiration } from '@/api/hooks/user'
import PASS_IMG from '@/assets/pass.png'
import dateFormatter from '@/util/dateFormatter'
import { useMediaQueryByName } from '@/util/useMediaQueryByName'

const ReviewKeyExpirationCard = () => {
  const { data } = useGetKeyExpiration()
  const [today, setToday] = useState(new Date())
  const isSmDown = useMediaQueryByName('smDown')

  useEffect(() => {
    const timer = setInterval(() => {
      setToday(new Date())
    }, 10000)

    return () => clearInterval(timer)
  }, [])

  if (!data) return <></>

  const expireDate = new Date(data.date)

  const remain = Math.abs(expireDate.getTime() - today.getTime())
  const days = Math.floor(remain / (1000 * 60 * 60 * 24))
  const hours = Math.floor((remain / (1000 * 60 * 60)) % 24)
  const minutes = Math.floor((remain / (1000 * 60)) % 60)

  return (
    <div
      className={css({
        display: 'flex',
        px: { base: '30px', smDown: '12.8px' },
        py: { base: 6, smDown: 2.5 },
        flexDir: { base: 'row', mdDown: 'column', smDown: 'row', xsDown: 'column' },
        alignItems: 'center',
        gap: { mdDown: 4, smDown: 0, xsDown: 1.5 },
        justifyContent: 'space-between',
        rounded: { base: 20, smDown: 8.5 },
        border: '1px solid {colors.lightGray.1}',
        bgColor: 'lightGray.2',
      })}
    >
      <div
        className={css({
          display: 'flex',
          gap: { base: 5, smDown: 2 },
          alignItems: 'center',
        })}
      >
        <img
          src={PASS_IMG}
          alt="Review Key"
          className={css({
            w: { base: 20, mdDown: 13, smDown: '34px' },
            h: { base: 20, mdDown: 13, smDown: '34px' },
            rounded: 5,
            flexShrink: 0,
          })}
        />
        <div className={css({ display: 'flex', flexDir: 'column', gap: { base: 2.5, smDown: 1 } })}>
          <h3
            className={css({
              color: 'black',
              fontSize: { base: 24, mdDown: 14, smDown: 10.26 },
              fontWeight: 700,
              lineHeight: 1.2,
            })}
          >
            Course review reading Key
          </h3>
          <p
            className={css({
              fontSize: { base: 20, mdDown: 13, smDown: 8.55 },
              color: 'darkGray.1',
              fontWeight: 500,
              lineHeight: 1.2,
              letterSpacing: { base: '-0.4px', smDown: '-0.17px' },
            })}
          >
            - {dateFormatter({ date: expireDate })} {String(expireDate.getHours()).padStart(2, '0')}:
            {String(expireDate.getMinutes()).padStart(2, '0')}
          </p>
        </div>
      </div>
      <div
        className={css({
          display: 'flex',
          flexDir: 'row',
          alignItems: 'center',
          gap: { base: 1.5, smDown: '2.57px' },
          color: 'red.1',
        })}
      >
        <History size={isSmDown ? 12 : 24} />
        <div
          className={css({
            fontSize: { base: 24, mdDown: 14, smDown: 10.23 },
            fontWeight: 500,
            lineHeight: 1.2,
            '& span': {
              display: 'inline-flex',
              bgColor: 'white',
              border: '0.5px solid {colors.darkGray.2}',
              rounded: { base: 4, smDown: '1.7px' },
              w: { base: '46px', mdDown: '28px', smDown: '19.6px' },
              h: { base: '33px', mdDown: '20px', smDown: '14.12px' },
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: { base: 28, mdDown: 16, smDown: 12 },
              fontWeight: 600,
            },
          })}
        >
          <span>{days}</span> Days <span>{String(hours).padStart(2, '0')}</span> H :{' '}
          <span>{String(minutes).padStart(2, '0')}</span> M
        </div>
      </div>
    </div>
  )
}

export default ReviewKeyExpirationCard

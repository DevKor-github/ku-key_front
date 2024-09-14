import { css } from '@styled-system/css'
import { History } from 'lucide-react'

import { useGetKeyExpiration } from '@/api/hooks/user'
import PASS_IMG from '@/assets/pass.png'
import dateFormatter from '@/util/dateFormatter'

const ReviewKeyExpirationCard = () => {
  const { data } = useGetKeyExpiration()

  if (data === null) return <></>

  const today = new Date()
  const expireDate = new Date(data.date)

  console.log(today)
  console.log(expireDate)

  const remain = Math.abs(expireDate.getTime() - today.getTime())
  const days = Math.floor(remain / (1000 * 60 * 60 * 24))
  const hours = Math.floor((remain / (1000 * 60 * 60)) % 24)
  const minutes = Math.floor((remain / (1000 * 60)) % 60)

  return (
    <div
      className={css({
        display: 'flex',
        px: '30px',
        py: 6,
        flexDir: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        rounded: 20,
        border: '1px solid {colors.lightGray.1}',
        bgColor: 'lightGray.2',
      })}
    >
      <div
        className={css({
          display: 'flex',
          gap: 5,
          alignItems: 'center',
        })}
      >
        <img
          src={PASS_IMG}
          alt="Review Key"
          className={css({
            w: { base: 20, mdDown: 13 },
            h: { base: 20, mdDown: 13 },
            rounded: 5,
            flexShrink: 0,
          })}
        />
        <div className={css({ display: 'flex', flexDir: 'column', gap: 2.5 })}>
          <h3 className={css({ color: 'black', fontSize: 24, fontWeight: 700, lineHeight: 1.2 })}>
            Course review reading Key
          </h3>
          <p
            className={css({
              fontSize: 20,
              color: 'darkGray.1',
              fontWeight: 500,
              lineHeight: 1.2,
              letterSpacing: '-0.4px',
            })}
          >
            - {dateFormatter({ date: expireDate })}
          </p>
        </div>
      </div>
      <div className={css({ display: 'flex', flexDir: 'row', alignItems: 'center', gap: 1.5, color: 'red.1' })}>
        <History />
        <div
          className={css({
            fontSize: 24,
            fontWeight: 500,
            lineHeight: 1.2,
            '& span': {
              bgColor: 'white',
              border: '0.5px solid {colors.darkGray.2}',
              rounded: 4,
              w: '46px',
              h: '33px',
            },
          })}
        >
          <span>{days}</span> Days <span>{hours}</span>H : <span>{minutes}</span>M
        </div>
      </div>
    </div>
  )
}

export default ReviewKeyExpirationCard

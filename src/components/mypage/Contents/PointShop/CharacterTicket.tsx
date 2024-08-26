import { css } from '@styled-stytem/css'

const COST = [0, 30, 100, 200, 300, 400]

interface CharacterTicketProps {
  level?: number
}
const CharacterTicket = ({ level }: CharacterTicketProps) => {
  return (
    <div
      className={css({
        display: 'flex',
        p: '30px',
        gap: '30px',
        bgColor: 'white',
        rounded: 10,
        border: '{colors.lightGray.1} 1px solid',
        w: '400px',
        cursor: 'pointer',
      })}
    >
      <div className={css({ w: '110px', h: '110px', bgColor: 'red.3', rounded: 5, flexShrink: 0 })} />
      <div className={css({ display: 'flex', flexDir: 'column', justifyContent: 'space-between' })}>
        <div>
          <h3
            className={css({
              fontSize: 24,
              fontWeight: 500,
            })}
          >
            {level !== undefined ? `Evolution Lv.${level + 1}` : 'Character change'}
          </h3>
          <p className={css({ color: 'darkGray.1', fontSize: 16, fontWeight: 400, lineHeight: 1 })}>
            {level !== undefined ? 'it evolves your character' : 'It changes your character into a different type'}
          </p>
        </div>
        <div className={css({ my: 1, display: 'flex', gap: 3, alignItems: 'center' })}>
          <div className={css({ w: 6, h: 6, bgColor: 'red.3', rounded: 'full' })} />
          <div className={css({ color: 'red.1', fontSize: 20, fontWeight: 600 })}>
            {level === undefined ? 200 : COST[level]}
          </div>
        </div>
      </div>
    </div>
  )
}

export default CharacterTicket

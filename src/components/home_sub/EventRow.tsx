import { css, cva } from '@styled-stytem/css'

import { EventType } from '@/types/home_sub'

interface EventRowProps {
  index: number
  event: EventType
}
const EventRow = ({ index, event }: EventRowProps) => {
  const date = new Date(event.startDate)
  return (
    <div className={css({ display: 'flex', h: 22, w: '100%' })}>
      <div
        className={cva({
          base: {
            flexShrink: 0,
            w: 57,
            px: 7,
            color: 'black.1',
            fontSize: 20,
            letterSpacing: '-0.4px',
            borderRight: '{colors.darkGray.2} solid 0.5px',
            display: 'flex',
            alignItems: 'center',
          },
          variants: {
            isStart: {
              false: {
                borderTop: '{colors.darkGray.2} solid 1px',
              },
            },
          },
        })({ isStart: index === 0 })}
      >
        {date.getDate()} ({event.startDay.toUpperCase()})
      </div>
      <div
        className={cva({
          base: {
            flexGrow: 1,
            pl: 10,
            color: 'darkGray.1',
            fontSize: 20,
            letterSpacing: '-0.4px',
            display: 'flex',
            alignItems: 'center',
          },
          variants: {
            isStart: {
              false: {
                borderTop: '{colors.darkGray.2} dashed 1px',
              },
            },
          },
        })({ isStart: index === 0 })}
      >
        {event.title}
      </div>
    </div>
  )
}

export default EventRow

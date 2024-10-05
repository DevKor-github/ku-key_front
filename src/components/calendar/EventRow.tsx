import { css, cva } from '@styled-system/css'

import { EventType } from '@/types/calendar'

interface EventRowProps {
  index: number
  event: EventType
}
const EventRow = ({ index, event }: EventRowProps) => {
  return (
    <div className={css({ display: 'flex', h: 22, w: '100%' })}>
      <div
        className={cva({
          base: {
            flexShrink: 0,
            w: { base: 60, lgDown: 54, mdDown: 22 },
            px: { base: 7, lgDown: 5, mdDown: 3 },
            color: 'black.1',
            fontSize: { base: 20, lgDown: 18, mdDown: 14 },
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
        {event.startDate === event.endDate
          ? `${new Date(event.startDate).getDate()}(${event.startDay.toUpperCase()})`
          : `${new Date(event.startDate).getDate()}(${event.startDay.toUpperCase()}) ~ ${new Date(event.endDate).getDate()}(${event.endDay.toUpperCase()})`}
      </div>
      <div
        className={cva({
          base: {
            flexGrow: 1,
            pl: { base: 10, lgDown: 6, mdDown: 3 },
            color: 'darkGray.1',
            fontSize: { base: 20, lgDown: 18, mdDown: 12 },
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

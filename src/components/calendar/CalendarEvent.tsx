import { css } from '@styled-system/css'
import { format, isEqual } from 'date-fns'
import { useAtomValue } from 'jotai'
import { useEffect, useRef } from 'react'

import { CalendarResponse } from '@/api/types/calendar'
import Event from '@/components/calendar/Event'
import { selectedDateAtom } from '@/lib/store/calendar'

interface CalendarEventProps {
  calendarEvent: CalendarResponse[]
}
const CalendarEvent = ({ calendarEvent }: CalendarEventProps) => {
  const selectedDate = useAtomValue(selectedDateAtom)
  const scrollRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (selectedDate && scrollRef.current) {
      const selectedEventElement = Array.from(scrollRef.current.children).find(node => {
        if (!node.ariaLabel) return false
        const eventDate = new Date(node.ariaLabel) // Event 컴포넌트에서 date prop을 가져옵니다.
        return isEqual(eventDate.toLocaleDateString(), selectedDate.toLocaleDateString())
      })

      if (selectedEventElement && scrollRef.current) {
        const elementPosition =
          selectedEventElement.getBoundingClientRect().top -
          scrollRef.current.getBoundingClientRect().top +
          scrollRef.current.scrollTop
        scrollRef.current.scrollTo({ top: elementPosition, behavior: 'smooth' })
        // selectedEventElement.scrollIntoView({ behavior: 'smooth', block: 'center' })
      }
    }
  }, [selectedDate, calendarEvent])

  return (
    <div
      className={css({
        display: 'flex',
        w: 'full',
        maxW: 398,
        maxH: '493px',
        flexDir: 'column',
        alignItems: 'flex-start',
        alignSelf: 'stretch',
      })}
    >
      <div className={css({ display: 'flex', p: 5, alignItems: 'center' })}>
        <p className={css({ fontSize: 26, fontWeight: 600 })}>{format(selectedDate, 'MMMM')} Events</p>
      </div>
      <div
        ref={scrollRef}
        className={css({
          display: 'flex',
          flexDir: 'column',
          alignItems: 'flex-start',
          gap: 5,
          w: 'full',
          maxH: 422,
          overflowY: 'scroll',
          p: 1,
          // mr: 5,
        })}
      >
        {calendarEvent?.map(
          (event, index) =>
            event.eventCount > 0 && (
              <Event
                key={`${new Date(event.date).toTimeString()}-${index}`}
                date={new Date(event.date)}
                isSelected={isEqual(selectedDate.toLocaleDateString(), new Date(event.date).toLocaleDateString())}
                content={event.event[0].title}
              />
            ),
        )}
      </div>
    </div>
  )
}

export default CalendarEvent

import { cva } from '@styled-stytem/css'
import { Check } from 'lucide-react'
import { useCallback } from 'react'

import { useGetAttendance, usePostAttendance } from '@/api/hooks/attendance'

const AttendanceBtn = () => {
  const { data: isDoneTodayAttend } = useGetAttendance()
  const { mutate: attend } = usePostAttendance()

  const handleClick = useCallback(() => {
    if (!isDoneTodayAttend) {
      attend(undefined, {
        onSuccess: () => {
          alert("Today's attendance is completed!")
        },
      })
    }
  }, [attend, isDoneTodayAttend])

  return (
    <button
      className={cva({
        base: {
          display: 'flex',
          bgColor: 'bg.gray',
          border: '1px solid {colors.darkGray.2}',
          rounded: 'full',
          lineHeight: 1,
          fontSize: 12,
          fontWeight: 700,
          color: 'darkGray.2',
          px: 2.5,
          py: 1,
          alignItems: 'center',
          gap: 1,
          cursor: 'pointer',
          transition: 'all 0.2s ease',
        },
        variants: {
          isDone: {
            true: {
              color: 'red.1',
              borderColor: 'red.1',
              bgColor: 'bg.red.1',
              cursor: 'default',
            },
          },
        },
      })({ isDone: isDoneTodayAttend })}
      onClick={handleClick}
    >
      <Check size={16} strokeWidth={3.5} />
      <p>Check attendance</p>
    </button>
  )
}

export default AttendanceBtn
